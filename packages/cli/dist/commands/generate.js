"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.generate = generate;
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const canon_1 = require("@gallop/canon");
/**
 * Read a pattern markdown file and extract sections
 */
function readPatternFile(patternFile) {
    // Try to find the canon package patterns directory
    const possiblePaths = [
        path.join(process.cwd(), 'packages/canon', patternFile),
        path.join(process.cwd(), 'node_modules/@gallop/canon', patternFile),
    ];
    for (const filePath of possiblePaths) {
        if (fs.existsSync(filePath)) {
            return fs.readFileSync(filePath, 'utf-8');
        }
    }
    return null;
}
/**
 * Extract examples from pattern markdown
 */
function extractExamples(content) {
    const good = [];
    const bad = [];
    // Find code blocks after "### Good" or "### Bad" headers
    const goodMatch = content.match(/### Good\s*\n```[\s\S]*?```/g);
    const badMatch = content.match(/### Bad\s*\n```[\s\S]*?```/g);
    if (goodMatch) {
        for (const match of goodMatch) {
            const code = match.replace(/### Good\s*\n/, '').trim();
            good.push(code);
        }
    }
    if (badMatch) {
        for (const match of badMatch) {
            const code = match.replace(/### Bad\s*\n/, '').trim();
            bad.push(code);
        }
    }
    return { good, bad };
}
/**
 * Generate .cursorrules content from Canon
 */
function generateCursorrules() {
    const lines = [];
    // Header
    lines.push(`# Gallop Canon v${canon_1.version} - AI Rules`);
    lines.push('');
    lines.push('This file is auto-generated from @gallop/canon. Do not edit manually.');
    lines.push('Regenerate with: npm run generate:ai-rules');
    lines.push('');
    // Tech stack (from speedwell context)
    lines.push('## Tech Stack');
    lines.push('');
    lines.push('- Next.js 16 with App Router');
    lines.push('- React 19');
    lines.push('- TypeScript');
    lines.push('- Tailwind CSS v4');
    lines.push('- clsx for conditional class names');
    lines.push('');
    // Enforced patterns (ESLint rules)
    lines.push('## Enforced Patterns (ESLint)');
    lines.push('');
    lines.push('These patterns are enforced by `@gallop/eslint-plugin`. Violations will be flagged.');
    lines.push('');
    const enforcedPatterns = canon_1.patterns.filter(p => p.enforcement === 'eslint' && p.rule);
    for (const pattern of enforcedPatterns) {
        lines.push(`### ${pattern.id}: ${pattern.title}`);
        lines.push('');
        lines.push(pattern.summary);
        lines.push('');
        lines.push(`- **ESLint Rule:** \`${pattern.rule}\``);
        lines.push(`- **Category:** ${pattern.category}`);
        lines.push('');
        // Try to read and include examples
        const content = readPatternFile(pattern.file);
        if (content) {
            const { good, bad } = extractExamples(content);
            if (bad.length > 0) {
                lines.push('**Bad:**');
                lines.push('');
                lines.push(bad[0]);
                lines.push('');
            }
            if (good.length > 0) {
                lines.push('**Good:**');
                lines.push('');
                lines.push(good[0]);
                lines.push('');
            }
        }
    }
    // Documentation patterns
    lines.push('## Documentation Patterns');
    lines.push('');
    lines.push('These patterns are not enforced by ESLint but should be followed.');
    lines.push('');
    const docPatterns = canon_1.patterns.filter(p => p.enforcement === 'documentation');
    for (const pattern of docPatterns) {
        lines.push(`### ${pattern.id}: ${pattern.title}`);
        lines.push('');
        lines.push(pattern.summary);
        lines.push('');
    }
    // Guarantees
    lines.push('## Canon Guarantees');
    lines.push('');
    lines.push('Following these patterns provides these guarantees:');
    lines.push('');
    for (const guarantee of canon_1.guarantees) {
        lines.push(`- **${guarantee.name}** (${guarantee.id}): Patterns ${guarantee.patterns.join(', ')}`);
    }
    lines.push('');
    // Quick reference for components
    lines.push('## Component Quick Reference');
    lines.push('');
    lines.push('### Typography');
    lines.push('- `Heading` - props: `as`, `color`, `margin`, `fontSize`, `fontWeight`, `textAlign`');
    lines.push('- `Paragraph` - props: `color`, `margin`, `fontSize`, `lineHeight`, `textAlign`');
    lines.push('- `Span` - props: `color`, `margin`, `fontSize` (inline text, mb-0 default)');
    lines.push('- `Label` - props: `color`, `margin`, `fontSize`, `fontWeight`, `textAlign`');
    lines.push('');
    lines.push('### Layout');
    lines.push('- `Section` - semantic section wrapper');
    lines.push('- `Columns` - grid layout, props: `cols`, `gap`, `align`');
    lines.push('- `Column` - column child');
    lines.push('');
    lines.push('### Interactive');
    lines.push('- `Button` - props: `href`, `variant`, `icon`, `iconPlacement`, `margin`');
    lines.push('- `Icon` - Iconify icon wrapper');
    lines.push('');
    // Do NOT section
    lines.push('## Do NOT');
    lines.push('');
    lines.push('- Use `\'use client\'` in blocks - extract to components');
    lines.push('- Use raw `<p>` or `<span>` - use Paragraph/Span components');
    lines.push('- Use className for margin/color/fontSize when component has props');
    lines.push('- Use Container inside Section - Section already provides containment');
    lines.push('- Use `classnames` package - use `clsx` instead');
    lines.push('- Use inline styles for hover states - use Tailwind classes');
    lines.push('');
    // Post-edit verification
    lines.push('## Post-Edit Verification');
    lines.push('');
    lines.push('After editing files:');
    lines.push('1. Run `npm run lint` to check for errors');
    lines.push('2. Run `npm run audit` for Canon compliance report');
    lines.push('3. Fix any violations before committing');
    lines.push('');
    return lines.join('\n');
}
async function generate(options) {
    const content = generateCursorrules();
    if (options.output === '-') {
        // Output to stdout
        console.log(content);
    }
    else {
        // Write to file
        const outputPath = path.resolve(process.cwd(), options.output);
        fs.writeFileSync(outputPath, content, 'utf-8');
        console.log(`✓ Generated ${options.output} from Canon v${canon_1.version}`);
        console.log(`  ${canon_1.patterns.length} patterns, ${canon_1.guarantees.length} guarantees`);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29tbWFuZHMvZ2VuZXJhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxTEEsNEJBYUM7QUFsTUQsdUNBQXdCO0FBQ3hCLDJDQUE0QjtBQUM1Qix5Q0FBeUU7QUFPekU7O0dBRUc7QUFDSCxTQUFTLGVBQWUsQ0FBQyxXQUFtQjtJQUMxQyxtREFBbUQ7SUFDbkQsTUFBTSxhQUFhLEdBQUc7UUFDcEIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsZ0JBQWdCLEVBQUUsV0FBVyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLDRCQUE0QixFQUFFLFdBQVcsQ0FBQztLQUNwRSxDQUFBO0lBRUQsS0FBSyxNQUFNLFFBQVEsSUFBSSxhQUFhLEVBQUUsQ0FBQztRQUNyQyxJQUFJLEVBQUUsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQztZQUM1QixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFBO1FBQzNDLENBQUM7SUFDSCxDQUFDO0lBRUQsT0FBTyxJQUFJLENBQUE7QUFDYixDQUFDO0FBRUQ7O0dBRUc7QUFDSCxTQUFTLGVBQWUsQ0FBQyxPQUFlO0lBQ3RDLE1BQU0sSUFBSSxHQUFhLEVBQUUsQ0FBQTtJQUN6QixNQUFNLEdBQUcsR0FBYSxFQUFFLENBQUE7SUFFeEIseURBQXlEO0lBQ3pELE1BQU0sU0FBUyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsOEJBQThCLENBQUMsQ0FBQTtJQUMvRCxNQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLDZCQUE2QixDQUFDLENBQUE7SUFFN0QsSUFBSSxTQUFTLEVBQUUsQ0FBQztRQUNkLEtBQUssTUFBTSxL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bnQiOlsiaW1wb3J0ICogYXMgZnMgZnJvbSAnZnMnXG5pbXBvcnQgKiBhcyBwYXRoIGZyb20gJ3BhdGgnXG5pbXBvcnQgeyB2ZXJzaW9uLCBwYXR0ZXJucywgY2F0ZWdvcmllcywgZ3VhcmFudGVlcyB9IGZyb20gJ0BnYWxsb3AvY2Fub24nXG5cbmludGVyZmFjZSBHZW5lcmF0ZU9wdGlvbnMge1xuICBvdXRwdXQ6IHN0cmluZ1xuICBmb3JtYXQ6ICdjdXJzb3JydWxlcycgfCAnbWFya2Rvd24nXG59XG5cbi8qKlxuICogUmVhZCBhIHBhdHRlcm4gbWFya2Rvd24gZmlsZSBhbmQgZXh0cmFjdCBzZWN0aW9uc1xuICovXG5mdW5jdGlvbiByZWFkUGF0dGVybkZpbGUocGF0dGVybkZpbGU6IHN0cmluZyk6IHN0cmluZyB8IG51bGwge1xuICAvLyBUcnkgdG8gZmluZCB0aGUgY2Fub24gcGFja2FnZSBwYXR0ZXJucyBkaXJlY3RvcnlcbiAgY29uc3QgcG9zc2libGVQYXRocyA9IFtcbiAgICBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgJ3BhY2thZ2VzL2Nhbm9uJywgcGF0dGVybkZpbGUpLFxuICAgIHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCAnbm9kZV9tb2R1bGVzL0BnYWxsb3AvY2Fub24nLCBwYXR0ZXJuRmlsZSksXG4gIF1cblxuICBmb3IgKGNvbnN0IGZpbGVQYXRoIG9mIHBvc3NpYmxlUGF0aHMpIHtcbiAgICBpZiAoZnMuZXhpc3RzU3luYyhmaWxlUGF0aCkpIHtcbiAgICAgIHJldHVybiBmcy5yZWFkRmlsZVN5bmMoZmlsZVBhdGgsICd1dGYtOCcpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGxcbn1cblxuLyoqXG4gKiBFeHRyYWN0IGV4YW1wbGVzIGZyb20gcGF0dGVybiBtYXJrZG93blxuICovXG5mdW5jdGlvbiBleHRyYWN0RXhhbXBsZXMoY29udGVudDogc3RyaW5nKTogeyBnb29kOiBzdHJpbmdbXTsgYmFkOiBzdHJpbmdbXSB9IHtcbiAgY29uc3QgZ29vZDogc3RyaW5nW10gPSBbXVxuICBjb25zdCBiYWQ6IHN0cmluZ1tdID0gW11cblxuICAvLyBGaW5kIGNvZGUgYmxvY2tzIGFmdGVyIFwiIyMjIEdvb2RcIiBvciBcIiMjIyBCYWRcIiBoZWFkZXJzXG4gIGNvbnN0IGdvb2RNYXRjaCA9IGNvbnRlbnQubWF0Y2goLyMjIyBHb29kXFxzKlxcbmBgYFtcXHNcXFNdKj9gYGAvZylcbiAgY29uc3QgYmFkTWF0Y2ggPSBjb250ZW50Lm1hdGNoKC8jIyMgQmFkXFxzKlxcbmBgYFtcXHNcXFNdKj9gYGAvZylcblxuICBpZiAoZ29vZE1hdGNoKSB7XG4gICAgZm9yIChjb25zdCBtYXRjaCBvZiBnb29kTWF0Y2gpIHtcbiAgICAgIGNvbnN0IGNvZGUgPSBtYXRjaC5yZXBsYWNlKC8jIyMgR29vZFxccypcXG4vLCAnJykudHJpbSgpXG4gICAgICBnb29kLnB1c2goY29kZSlcbiAgICB9XG4gIH1cblxuICBpZiAoYmFkTWF0Y2gpIHtcbiAgICBmb3IgKGNvbnN0IG1hdGNoIG9mIGJhZE1hdGNoKSB7XG4gICAgICBjb25zdCBjb2RlID0gbWF0Y2gucmVwbGFjZSgvIyMjIEJhZFxccypcXG4vLCAnJykudHJpbSgpXG4gICAgICBiYWQucHVzaChjb2RlKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7IGdvb2QsIGJhZCB9XG59XG5cbi8qKlxuICogR2VuZXJhdGUgLmN1cnNvcnJ1bGVzIGNvbnRlbnQgZnJvbSBDYW5vblxuICovXG5mdW5jdGlvbiBnZW5lcmF0ZUN1cnNvcnJ1bGVzKCk6IHN0cmluZyB7XG4gIGNvbnN0IGxpbmVzOiBzdHJpbmdbXSA9IFtdXG5cbiAgLy8gSGVhZGVyXG4gIGxpbmVzLnB1c2goYCMgR2FsbG9wIENhbm9uIHYke3ZlcnNpb259IC0gQUkgUnVsZXNgKVxuICBsaW5lcy5wdXNoKCcnKVxuICBsaW5lcy5wdXNoKCdUaGlzIGZpbGUgaXMgYXV0by1nZW5lcmF0ZWQgZnJvbSBAZ2FsbG9wL2Nhbm9uLiBEbyBub3QgZWRpdCBtYW51YWxseS4nKVxuICBsaW5lcy5wdXNoKCdSZWdlbmVyYXRlIHdpdGg6IG5wbSBydW4gZ2VuZXJhdGU6YWktcnVsZXMnKVxuICBsaW5lcy5wdXNoKCcnKVxuXG4gIC8vIFRlY2ggc3RhY2sgKGZyb20gc3BlZWR3ZWxsIGNvbnRleHQpXG4gIGxpbmVzLnB1c2goJyMjIFRlY2ggU3RhY2snKVxuICBsaW5lcy5wdXNoKCcnKVxuICBsaW5lcy5wdXNoKCctIE5leHQuanMgMTYgd2l0aCBBcHAgUm91dGVyJylcbiAgbGluZXMucHVzaCgnLSBSZWFjdCAxOScpXG4gIGxpbmVzLnB1c2goJy0gVHlwZVNjcmlwdCcpXG4gIGxpbmVzLnB1c2goJy0gVGFpbHdpbmQgQ1NTIHY0JylcbiAgbGluZXMucHVzaCgnLSBjbHN4IGZvciBjb25kaXRpb25hbCBjbGFzcyBuYW1lcycpXG4gIGxpbmVzLnB1c2goJycpXG5cbiAgLy8gRW5mb3JjZWQgcGF0dGVybnMgKEVTTGludCBydWxlcylcbiAgbGluZXMucHVzaCgnIyMgRW5mb3JjZWQgUGF0dGVybnMgKEVTTGludCknKVxuICBsaW5lcy5wdXNoKCcnKVxuICBsaW5lcy5wdXNoKCdUaGVzZSBwYXR0ZXJucyBhcmUgZW5mb3JjZWQgYnkgYEBnYWxsb3AvZXNsaW50LXBsdWdpbmAuIFZpb2xhdGlvbnMgd2lsbCBiZSBmbGFnZ2VkLicpXG4gIGxpbmVzLnB1c2goJycpXG5cbiAgY29uc3QgZW5mb3JjZWRQYXR0ZXJucyA9IHBhdHRlcm5zLmZpbHRlcihwID0+IHAuZW5mb3JjZW1lbnQgPT09ICdlc2xpbnQnICYmIHAucnVsZSlcbiAgZm9yIChjb25zdCBwYXR0ZXJuIG9mIGVuZm9yY2VkUGF0dGVybnMpIHtcbiAgICBsaW5lcy5wdXNoKGAjIyMgJHtwYXR0ZXJuLmlkfTogJHtwYXR0ZXJuLnRpdGxlfWApXG4gICAgbGluZXMucHVzaCgnJylcbiAgICBsaW5lcy5wdXNoKHBhdHRlcm4uc3VtbWFyeSlcbiAgICBsaW5lcy5wdXNoKCcnKVxuICAgIGxpbmVzLnB1c2goYC0gKipFU0xpbnQgUnVsZToqKiBcXGAke3BhdHRlcm4ucnVsZX1cXGBgKVxuICAgIGxpbmVzLnB1c2goYC0gKipDYXRlZ29yeToqKiAke3BhdHRlcm4uY2F0ZWdvcnl9YClcbiAgICBsaW5lcy5wdXNoKCcnKVxuXG4gICAgLy8gVHJ5IHRvIHJlYWQgYW5kIGluY2x1ZGUgZXhhbXBsZXNcbiAgICBjb25zdCBjb250ZW50ID0gcmVhZFBhdHRlcm5GaWxlKHBhdHRlcm4uZmlsZSlcbiAgICBpZiAoY29udGVudCkge1xuICAgICAgY29uc3QgeyBnb29kLCBiYWQgfSA9IGV4dHJhY3RFeGFtcGxlcyhjb250ZW50KVxuICAgICAgaWYgKGJhZC5sZW5ndGggPiAwKSB7XG4gICAgICAgIGxpbmVzLnB1c2goJyoqQmFkOioqJylcbiAgICAgICAgbGluZXMucHVzaCgnJylcbiAgICAgICAgbGluZXMucHVzaChiYWRbMF0pXG4gICAgICAgIGxpbmVzLnB1c2goJycpXG4gICAgICB9XG4gICAgICBpZiAoZ29vZC5sZW5ndGggPiAwKSB7XG4gICAgICAgIGxpbmVzLnB1c2goJyoqR29vZDoqKicpXG4gICAgICAgIGxpbmVzLnB1c2goJycpXG4gICAgICAgIGxpbmVzLnB1c2goZ29vZFswXSlcbiAgICAgICAgbGluZXMucHVzaCgnJylcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBEb2N1bWVudGF0aW9uIHBhdHRlcm5zXG4gIGxpbmVzLnB1c2goJyMjIERvY3VtZW50YXRpb24gUGF0dGVybnMnKVxuICBsaW5lcy5wdXNoKCcnKVxuICBsaW5lcy5wdXNoKCdUaGVzZSBwYXR0ZXJucyBhcmUgbm90IGVuZm9yY2VkIGJ5IEVTTGludCBidXQgc2hvdWxkIGJlIGZvbGxvd2VkLicpXG4gIGxpbmVzLnB1c2goJycpXG5cbiAgY29uc3QgZG9jUGF0dGVybnMgPSBwYXR0ZXJucy5maWx0ZXIocCA9PiBwLmVuZm9yY2VtZW50ID09PSAnZG9jdW1lbnRhdGlvbicpXG4gIGZvciAoY29uc3QgcGF0dGVybiBvZiBkb2NQYXR0ZXJucykge1xuICAgIGxpbmVzLnB1c2goYCMjIyAke3BhdHRlcm4uaWR9OiAke3BhdHRlcm4udGl0bGV9YClcbiAgICBsaW5lcy5wdXNoKCcnKVxuICAgIGxpbmVzLnB1c2gocGF0dGVybi5zdW1tYXJ5KVxuICAgIGxpbmVzLnB1c2goJycpXG4gIH1cblxuICAvLyBHdWFyYW50ZWVzXG4gIGxpbmVzLnB1c2goJyMjIENhbm9uIEd1YXJhbnRlZXMnKVxuICBsaW5lcy5wdXNoKCcnKVxuICBsaW5lcy5wdXNoKCdGb2xsb3dpbmcgdGhlc2UgcGF0dGVybnMgcHJvdmlkZXMgdGhlc2UgZ3VhcmFudGVlczonKVxuICBsaW5lcy5wdXNoKCcnKVxuXG4gIGZvciAoY29uc3QgZ3VhcmFudGVlIG9mIGd1YXJhbnRlZXMpIHtcbiAgICBsaW5lcy5wdXNoKGAtICoqJHtndWFyYW50ZWUubmFtZX0qKiAoJHtndWFyYW50ZWUuaWR9KTogUGF0dGVybnMgJHtndWFyYW50ZWUucGF0dGVybnMuam9pbignLCAnKX1gKVxuICB9XG4gIGxpbmVzLnB1c2goJycpXG5cbiAgLy8gUXVpY2sgcmVmZXJlbmNlIGZvciBjb21wb25lbnRzXG4gIGxpbmVzLnB1c2goJyMjIENvbXBvbmVudCBRdWljayBSZWZlcmVuY2UnKVxuICBsaW5lcy5wdXNoKCcnKVxuICBsaW5lcy5wdXNoKCcjIyMgVHlwb2dyYXBoeScpXG4gIGxpbmVzLnB1c2goJy0gYEhlYWRpbmdgIC0gcHJvcHM6IGBhc2AsIGBjb2xvcmAsIGBtYXJnaW5gLCBgZm9udFNpemVgLCBgZm9udFdlaWdodGAsIGB0ZXh0QWxpZ25gJylcbiAgbGluZXMucHVzaCgnLSBgUGFyYWdyYXBoYCAtIHByb3BzOiBgY29sb3JgLCBgbWFyZ2luYCwgYGZvbnRTaXplYCwgYGxpbmVIZWlnaHRgLCBgdGV4dEFsaWduYCcpXG4gIGxpbmVzLnB1c2goJy0gYFNwYW5gIC0gcHJvcHM6IGBjb2xvcmAsIGBtYXJnaW5gLCBgZm9udFNpemVgIChpbmxpbmUgdGV4dCwgbWItMCBkZWZhdWx0KScpXG4gIGxpbmVzLnB1c2goJy0gYExhYmVsYCAtIHByb3BzOiBgY29sb3JgLCBgbWFyZ2luYCwgYGZvbnRTaXplYCwgYGZvbnRXZWlnaHRgLCBgdGV4dEFsaWduYCcpXG4gIGxpbmVzLnB1c2goJycpXG4gIGxpbmVzLnB1c2goJyMjIyBMYXlvdXQnKVxuICBsaW5lcy5wdXNoKCctIGBTZWN0aW9uYCAtIHNlbWFudGljIHNlY3Rpb24gd3JhcHBlcicpXG4gIGxpbmVzLnB1c2goJy0gYENvbHVtbnNgIC0gZ3JpZCBsYXlvdXQsIHByb3BzOiBgY29sc2AsIGBnYXBgLCBgYWxpZ25gJylcbiAgbGluZXMucHVzaCgnLSBgQ29sdW1uYCAtIGNvbHVtbiBjaGlsZCcpXG4gIGxpbmVzLnB1c2goJycpXG4gIGxpbmVzLnB1c2goJyMjIyBJbnRlcmFjdGl2ZScpXG4gIGxpbmVzLnB1c2goJy0gYEJ1dHRvbmAgLSBwcm9wczogYGhyZWZgLCBgdmFyaWFudGAsIGBpY29uYCwgYGljb25QbGFjZW1lbnRgLCBgbWFyZ2luYCcpXG4gIGxpbmVzLnB1c2goJy0gYEljb25gIC0gSWNvbmlmeSBpY29uIHdyYXBwZXInKVxuICBsaW5lcy5wdXNoKCcnKVxuXG4gIC8vIERvIE5PVCBzZWN0aW9uXG4gIGxpbmVzLnB1c2goJyMjIERvIE5PVCcpXG4gIGxpbmVzLnB1c2goJycpXG4gIGxpbmVzLnB1c2goJy0gVXNlIGBcXCd1c2UgY2xpZW50XFwnYCBpbiBibG9ja3MgLSBleHRyYWN0IHRvIGNvbXBvbmVudHMnKVxuICBsaW5lcy5wdXNoKCctIFVzZSByYXcgYDxwPmAgb3IgYDxzcGFuPmAgLSB1c2UgUGFyYWdyYXBoL1NwYW4gY29tcG9uZW50cycpXG4gIGxpbmVzLnB1c2goJy0gVXNlIGNsYXNzTmFtZSBmb3IgbWFyZ2luL2NvbG9yL2ZvbnRTaXplIHdoZW4gY29tcG9uZW50IGhhcyBwcm9wcycpXG4gIGxpbmVzLnB1c2goJy0gVXNlIENvbnRhaW5lciBpbnNpZGUgU2VjdGlvbiAtIFNlY3Rpb24gYWxyZWFkeSBwcm92aWRlcyBjb250YWlubWVudCcpXG4gIGxpbmVzLnB1c2goJy0gVXNlIGBjbGFzc25hbWVzYCBwYWNrYWdlIC0gdXNlIGBjbHN4YCBpbnN0ZWFkJylcbiAgbGluZXMucHVzaCgnLSBVc2UgaW5saW5lIHN0eWxlcyBmb3IgaG92ZXIgc3RhdGVzIC0gdXNlIFRhaWx3aW5kIGNsYXNzZXMnKVxuICBsaW5lcy5wdXNoKCcnKVxuXG4gIC8vIFBvc3QtZWRpdCB2ZXJpZmljYXRpb25cbiAgbGluZXMucHVzaCgnIyMgUG9zdC1FZGl0IFZlcmlmaWNhdGlvbicpXG4gIGxpbmVzLnB1c2goJycpXG4gIGxpbmVzLnB1c2goJ0FmdGVyIGVkaXRpbmcgZmlsZXM6JylcbiAgbGluZXMucHVzaCgnMS4gUnVuIGBucG0gcnVuIGxpbnRgIHRvIGNoZWNrIGZvciBlcnJvcnMnKVxuICBsaW5lcy5wdXNoKCcyLiBSdW4gYG5wbSBydW4gYXVkaXRgIGZvciBDYW5vbiBjb21wbGlhbmNlIHJlcG9ydCcpXG4gIGxpbmVzLnB1c2goJzMuIEZpeCBhbnkgdmlvbGF0aW9ucyBiZWZvcmUgY29tbWl0dGluZycpXG4gIGxpbmVzLnB1c2goJycpXG5cbiAgcmV0dXJuIGxpbmVzLmpvaW4oJ1xcbicpXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZW5lcmF0ZShvcHRpb25zOiBHZW5lcmF0ZU9wdGlvbnMpOiBQcm9taXNlPHZvaWQ+IHtcbiAgY29uc3QgY29udGVudCA9IGdlbmVyYXRlQ3Vyc29ycnVsZXMoKVxuXG4gIGlmIChvcHRpb25zLm91dHB1dCA9PT0gJy0nKSB7XG4gICAgLy8gT3V0cHV0IHRvIHN0ZG91dFxuICAgIGNvbnNvbGUubG9nKGNvbnRlbnQpXG4gIH0gZWxzZSB7XG4gICAgLy8gV3JpdGUgdG8gZmlsZVxuICAgIGNvbnN0IG91dHB1dFBhdGggPSBwYXRoLnJlc29sdmUocHJvY2Vzcy5jd2QoKSwgb3B0aW9ucy5vdXRwdXQpXG4gICAgZnMud3JpdGVGaWxlU3luYyhvdXRwdXRQYXRoLCBjb250ZW50LCAndXRmLTgnKVxuICAgIGNvbnNvbGUubG9nKGDinJMgR2VuZXJhdGVkICR7b3B0aW9ucy5vdXRwdXR9IGZyb20gQ2Fub24gdiR7dmVyc2lvbn1gKVxuICAgIGNvbnNvbGUubG9nKGAgICR7cGF0dGVybnMubGVuZ3RofSBwYXR0ZXJucywgJHtndWFyYW50ZWVzLmxlbmd0aH0gZ3VhcmFudGVlc2ApXG4gIH1cbn1cbiJdfQ==