#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const audit_1 = require("./commands/audit");
const generate_1 = require("./commands/generate");
const canon_1 = require("@gallop/canon");
const args = process.argv.slice(2);
const command = args[0];
// Colors for terminal output
const colors = {
    reset: '\x1b[0m',
    bold: '\x1b[1m',
    dim: '\x1b[2m',
    red: '\x1b[31m',
    green: '\x1b[32m',
    yellow: '\x1b[33m',
    blue: '\x1b[34m',
    magenta: '\x1b[35m',
    cyan: '\x1b[36m',
};
function showHelp() {
    console.log(`
${colors.bold}Gallop CLI${colors.reset} - Canon Compliance Tooling
${colors.dim}Canon Version: ${canon_1.version}${colors.reset}

${colors.bold}Usage:${colors.reset}
  gallop <command> [options]

${colors.bold}Commands:${colors.reset}
  audit [path]       Check Canon compliance (default: src/blocks/)
  generate [output]  Generate AI rules from Canon (default: .cursorrules)
  version            Show version information
  help               Show this help message

${colors.bold}Audit Options:${colors.reset}
  --strict           Exit with error code on violations
  --json             Output as JSON
  --fix              Auto-fix violations where possible

${colors.bold}Generate Options:${colors.reset}
  --output, -o       Output file path (default: .cursorrules)

${colors.bold}Examples:${colors.reset}
  gallop audit
  gallop audit src/blocks/ --strict
  gallop generate
  gallop generate .cursorrules
  gallop generate --output .github/copilot-instructions.md
`);
}
function showVersion() {
    console.log(`Gallop CLI v1.0.0`);
    console.log(`Canon v${canon_1.version}`);
}
async function main() {
    switch (command) {
        case 'audit':
            const auditPath = args[1] && !args[1].startsWith('--') ? args[1] : 'src/blocks/';
            const auditOptions = {
                strict: args.includes('--strict'),
                json: args.includes('--json'),
                fix: args.includes('--fix'),
            };
            await (0, audit_1.audit)(auditPath, auditOptions);
            break;
        case 'generate':
            // Find output path from args
            let outputPath = '.cursorrules';
            const outputIndex = args.indexOf('--output');
            const outputIndexShort = args.indexOf('-o');
            if (outputIndex !== -1 && args[outputIndex + 1]) {
                outputPath = args[outputIndex + 1];
            }
            else if (outputIndexShort !== -1 && args[outputIndexShort + 1]) {
                outputPath = args[outputIndexShort + 1];
            }
            else if (args[1] && !args[1].startsWith('--')) {
                outputPath = args[1];
            }
            const generateOptions = {
                output: outputPath,
                format: 'cursorrules',
            };
            await (0, generate_1.generate)(generateOptions);
            break;
        case 'version':
        case '-v':
        case '--version':
            showVersion();
            break;
        case 'help':
        case '-h':
        case '--help':
        case undefined:
            showHelp();
            break;
        default:
            console.error(`Unknown command: ${command}`);
            console.error(`Run 'gallop help' for usage information.`);
            process.exit(1);
    }
}
main().catch((error) => {
    console.error('Error:', error.message);
    process.exit(1);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRUEsNENBQXdDO0FBQ3hDLGtEQUE4QztBQUM5Qyx5Q0FBdUM7QUFFdkMsTUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUE7QUFDbEMsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFBO0FBRXZCLDZCQUE2QjtBQUM3QixNQUFNLE1BQU0sR0FBRztJQUNiLEtBQUssRUFBRSxTQUFTO0lBQ2hCLElBQUksRUFBRSxTQUFTO0lBQ2YsR0FBRyxFQUFFLFNBQVM7SUFDZCxHQUFHLEVBQUUsVUFBVTtJQUNmLEtBQUssRUFBRSxVQUFVO0lBQ2pCLE1BQU0sRUFBRSxVQUFVO0lBQ2xCLElBQUksRUFBRSxVQUFVO0lBQ2hCLE9BQU8sRUFBRSxVQUFVO0lBQ25CLElBQUksRUFBRSxVQUFVO0NBQ2pCLENBQUE7QUFFRCxTQUFTLFFBQVE7SUFDZixPQUFPLENBQUMsR0FBRyxDQUFDO0VBQ1osTUFBTSxDQUFDLElBQUksYUFBYSxNQUFNLENBQUMsS0FBSztFQUNwQyxNQUFNLENBQUMsR0FBRyxrQkFBa0IsZUFBTyxHQUFHLE1BQU0sQ0FBQyxLQUFLOztFQUVsRCxNQUFNLENBQUMsSUFBSSxTQUFTLE1BQU0sQ0FBQyxLQUFLOzs7RUFHaEMsTUFBTSxDQUFDLElBQUksWUFBWSxNQUFNLENBQUMsS0FBSzs7Ozs7O0VBTW5DLE1BQU0sQ0FBQyxJQUFJLGlCQUFpQixNQUFNLENBQUMsS0FBSzs7Ozs7RUFLeEMsTUFBTSxDQUFDLElBQUksb0JBQW9CLE1BQU0sQ0FBQyxLQUFLOzs7RUFHM0MsTUFBTSxDQUFDLElBQUksWUFBWSxNQUFNLENBQUMsS0FBSzs7Ozs7O0NBTXBDLENBQUMsQ0FBQTtBQUNGLENBQUM7QUFFRCxTQUFTLFdBQVc7SUFDbEIsT0FBTyxDQUFD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InNvdXJjZXNDb250ZW50IjpbIiMhL3Vzci9iaW4vZW52IG5vZGVcblxuaW1wb3J0IHsgYXVkaXQgfSBmcm9tICcuL2NvbW1hbmRzL2F1ZGl0J1xuaW1wb3J0IHsgZ2VuZXJhdGUgfSBmcm9tICcuL2NvbW1hbmRzL2dlbmVyYXRlJ1xuaW1wb3J0IHsgdmVyc2lvbiB9IGZyb20gJ0BnYWxsb3AvY2Fub24nXG5cbmNvbnN0IGFyZ3MgPSBwcm9jZXNzLmFyZ3Yuc2xpY2UoMilcbmNvbnN0IGNvbW1hbmQgPSBhcmdzWzBdXG5cbi8vIENvbG9ycyBmb3IgdGVybWluYWwgb3V0cHV0XG5jb25zdCBjb2xvcnMgPSB7XG4gIHJlc2V0OiAnXFx4MWJbMG0nLFxuICBib2xkOiAnXFx4MWJbMW0nLFxuICBkaW06ICdcXHgxYlsybScsXG4gIHJlZDogJ1xceDFiWzMxbScsXG4gIGdyZWVuOiAnXFx4MWJbMzJtJyxcbiAgeWVsbG93OiAnXFx4MWJbMzNtJyxcbiAgYmx1ZTogJ1xceDFiWzM0bScsXG4gIG1hZ2VudGE6ICdcXHgxYlszNW0nLFxuICBjeWFuOiAnXFx4MWJbMzZtJyxcbn1cblxuZnVuY3Rpb24gc2hvd0hlbHAoKSB7XG4gIGNvbnNvbGUubG9nKGBcbiR7Y29sb3JzLmJvbGR9R2FsbG9wIENMSSR7Y29sb3JzLnJlc2V0fSAtIENhbm9uIENvbXBsaWFuY2UgVG9vbGluZ1xuJHtjb2xvcnMuZGltfUNhbm9uIFZlcnNpb246ICR7dmVyc2lvbn0ke2NvbG9ycy5yZXNldH1cblxuJHtjb2xvcnMuYm9sZH1Vc2FnZToke2NvbG9ycy5yZXNldH1cbiAgZ2FsbG9wIDxjb21tYW5kPiBbb3B0aW9uc11cblxuJHtjb2xvcnMuYm9sZH1Db21tYW5kczoke2NvbG9ycy5yZXNldH1cbiAgYXVkaXQgW3BhdGhdICAgICAgIENoZWNrIENhbm9uIGNvbXBsaWFuY2UgKGRlZmF1bHQ6IHNyYy9ibG9ja3MvKVxuICBnZW5lcmF0ZSBbb3V0cHV0XSAgR2VuZXJhdGUgQUkgcnVsZXMgZnJvbSBDYW5vbiAoZGVmYXVsdDogLmN1cnNvcnJ1bGVzKVxuICB2ZXJzaW9uICAgICAgICAgICAgU2hvdyB2ZXJzaW9uIGluZm9ybWF0aW9uXG4gIGhlbHAgICAgICAgICAgICAgICBTaG93IHRoaXMgaGVscCBtZXNzYWdlXG5cbiR7Y29sb3JzLmJvbGR9QXVkaXQgT3B0aW9uczoke2NvbG9ycy5yZXNldH1cbiAgLS1zdHJpY3QgICAgICAgICAgIEV4aXQgd2l0aCBlcnJvciBjb2RlIG9uIHZpb2xhdGlvbnNcbiAgLS1qc29uICAgICAgICAgICAgIE91dHB1dCBhcyBKU09OXG4gIC0tZml4ICAgICAgICAgICAgICBBdXRvLWZpeCB2aW9sYXRpb25zIHdoZXJlIHBvc3NpYmxlXG5cbiR7Y29sb3JzLmJvbGR9R2VuZXJhdGUgT3B0aW9uczoke2NvbG9ycy5yZXNldH1cbiAgLS1vdXRwdXQsIC1vICAgICAgIE91dHB1dCBmaWxlIHBhdGggKGRlZmF1bHQ6IC5jdXJzb3JydWxlcylcblxuJHtjb2xvcnMuYm9sZH1FeGFtcGxlczoke2NvbG9ycy5yZXNldH1cbiAgZ2FsbG9wIGF1ZGl0XG4gIGdhbGxvcCBhdWRpdCBzcmMvYmxvY2tzLyAtLXN0cmljdFxuICBnYWxsb3AgZ2VuZXJhdGVcbiAgZ2FsbG9wIGdlbmVyYXRlIC5jdXJzb3JydWxlc1xuICBnYWxsb3AgZ2VuZXJhdGUgLS1vdXRwdXQgLmdpdGh1Yi9jb3BpbG90LWluc3RydWN0aW9ucy5tZFxuYClcbn1cblxuZnVuY3Rpb24gc2hvd1ZlcnNpb24oKSB7XG4gIGNvbnNvbGUubG9nKGBHYWxsb3AgQ0xJIHYxLjAuMGApXG4gIGNvbnNvbGUubG9nKGBDYW5vbiB2JHt2ZXJzaW9ufWApXG59XG5cbmFzeW5jIGZ1bmN0aW9uIG1haW4oKSB7XG4gIHN3aXRjaCAoY29tbWFuZCkge1xuICAgIGNhc2UgJ2F1ZGl0JzpcbiAgICAgIGNvbnN0IGF1ZGl0UGF0aCA9IGFyZ3NbMV0gJiYgIWFyZ3NbMV0uc3RhcnRzV2l0aCgnLS0nKSA/IGFyZ3NbMV0gOiAnc3JjL2Jsb2Nrcy8nXG4gICAgICBjb25zdCBhdWRpdE9wdGlvbnMgPSB7XG4gICAgICAgIHN0cmljdDogYXJncy5pbmNsdWRlcygnLS1zdHJpY3QnKSxcbiAgICAgICAganNvbjogYXJncy5pbmNsdWRlcygnLS1qc29uJyksXG4gICAgICAgIGZpeDogYXJncy5pbmNsdWRlcygnLS1maXgnKSxcbiAgICAgIH1cbiAgICAgIGF3YWl0IGF1ZGl0KGF1ZGl0UGF0aCwgYXVkaXRPcHRpb25zKVxuICAgICAgYnJlYWtcblxuICAgIGNhc2UgJ2dlbmVyYXRlJzpcbiAgICAgIC8vIEZpbmQgb3V0cHV0IHBhdGggZnJvbSBhcmdzXG4gICAgICBsZXQgb3V0cHV0UGF0aCA9ICcuY3Vyc29ycnVsZXMnXG4gICAgICBjb25zdCBvdXRwdXRJbmRleCA9IGFyZ3MuaW5kZXhPZignLS1vdXRwdXQnKVxuICAgICAgY29uc3Qgb3V0cHV0SW5kZXhTaG9ydCA9IGFyZ3MuaW5kZXhPZignLW8nKVxuICAgICAgaWYgKG91dHB1dEluZGV4ICE9PSAtMSAmJiBhcmdzW291dHB1dEluZGV4ICsgMV0pIHtcbiAgICAgICAgb3V0cHV0UGF0aCA9IGFyZ3Nbb3V0cHV0SW5kZXggKyAxXVxuICAgICAgfSBlbHNlIGlmIChvdXRwdXRJbmRleFNob3J0ICE9PSAtMSAmJiBhcmdzW291dHB1dEluZGV4U2hvcnQgKyAxXSkge1xuICAgICAgICBvdXRwdXRQYXRoID0gYXJnc1tvdXRwdXRJbmRleFNob3J0ICsgMV1cbiAgICAgIH0gZWxzZSBpZiAoYXJnc1sxXSAmJiAhYXJnc1sxXS5zdGFydHNXaXRoKCctLScpKSB7XG4gICAgICAgIG91dHB1dFBhdGggPSBhcmdzWzFdXG4gICAgICB9XG4gICAgICBjb25zdCBnZW5lcmF0ZU9wdGlvbnMgPSB7XG4gICAgICAgIG91dHB1dDogb3V0cHV0UGF0aCxcbiAgICAgICAgZm9ybWF0OiAnY3Vyc29ycnVsZXMnIGFzIGNvbnN0LFxuICAgICAgfVxuICAgICAgYXdhaXQgZ2VuZXJhdGUoZ2VuZXJhdGVPcHRpb25zKVxuICAgICAgYnJlYWtcblxuICAgIGNhc2UgJ3ZlcnNpb24nOlxuICAgIGNhc2UgJy12JzpcbiAgICBjYXNlICctLXZlcnNpb24nOlxuICAgICAgc2hvd1ZlcnNpb24oKVxuICAgICAgYnJlYWtcblxuICAgIGNhc2UgJ2hlbHAnOlxuICAgIGNhc2UgJy1oJzpcbiAgICBjYXNlICctLWhlbHAnOlxuICAgIGNhc2UgdW5kZWZpbmVkOlxuICAgICAgc2hvd0hlbHAoKVxuICAgICAgYnJlYWtcblxuICAgIGRlZmF1bHQ6XG4gICAgICBjb25zb2xlLmVycm9yKGBVbmtub3duIGNvbW1hbmQ6ICR7Y29tbWFuZH1gKVxuICAgICAgY29uc29sZS5lcnJvcihgUnVuICdnYWxsb3AgaGVscCcgZm9yIHVzYWdlIGluZm9ybWF0aW9uLmApXG4gICAgICBwcm9jZXNzLmV4aXQoMSlcbiAgfVxufVxuXG5tYWluKCkuY2F0Y2goKGVycm9yKSA9PiB7XG4gIGNvbnNvbGUuZXJyb3IoJ0Vycm9yOicsIGVycm9yLm1lc3NhZ2UpXG4gIHByb2Nlc3MuZXhpdCgxKVxufSlcbiJdfQ==