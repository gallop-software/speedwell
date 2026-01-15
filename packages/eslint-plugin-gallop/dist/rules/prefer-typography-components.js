"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rule = {
    meta: {
        type: 'suggestion',
        docs: {
            description: 'Prefer Paragraph and Span components over raw <p> and <span> elements in blocks',
            recommended: true,
        },
        messages: {
            useParagraph: 'Use the Paragraph component instead of <p>. Import from @/components: import { Paragraph } from "@/components"',
            useSpan: 'Use the Span component instead of <span> for text content. Import from @/components: import { Span } from "@/components"',
        },
        schema: [],
    },
    create(context) {
        const filename = context.filename || context.getFilename();
        // Only apply to block files
        if (!filename.includes('/blocks/')) {
            return {};
        }
        return {
            JSXOpeningElement(node) {
                const elementName = node.name?.name;
                if (elementName === 'p') {
                    context.report({
                        node,
                        messageId: 'useParagraph',
                    });
                }
                if (elementName === 'span') {
                    // Check if this span has text-related classes or content
                    // Skip spans that are purely structural (like icons, decorative elements)
                    const hasTextClasses = node.attributes?.some((attr) => {
                        if (attr.type === 'JSXAttribute' && attr.name?.name === 'className') {
                            const value = attr.value?.value || '';
                            // Check for text-related Tailwind classes
                            return /\b(text-|font-|leading-|tracking-)/.test(value);
                        }
                        return false;
                    });
                    // Only warn if the span appears to contain text styling
                    if (hasTextClasses) {
                        context.report({
                            node,
                            messageId: 'useSpan',
                        });
                    }
                }
            },
        };
    },
};
exports.default = rule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlZmVyLXR5cG9ncmFwaHktY29tcG9uZW50cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlcy9wcmVmZXItdHlwb2dyYXBoeS1jb21wb25lbnRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEsTUFBTSxJQUFJLEdBQW9CO0lBQzVCLElBQUksRUFBRTtRQUNKLElBQUksRUFBRSxZQUFZO1FBQ2xCLElBQUksRUFBRTtZQUNKLFdBQVcsRUFDVCxpRkFBaUY7WUFDbkYsV0FBVyxFQUFFLElBQUk7U0FDbEI7UUFDRCxRQUFRLEVBQUU7WUFDUixZQUFZLEVBQ1YsZ0hBQWdIO1lBQ2xILE9BQU8sRUFDTCwwSEFBMEg7U0FDN0g7UUFDRCxNQUFNLEVBQUUsRUFBRTtLQUNYO0lBRUQsTUFBTSxDQUFDLE9BQU87UUFDWixNQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsUUFBUSxJQUFJLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQTtRQUUxRCw0QkFBNEI7UUFDNUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQztZQUNuQyxPQUFPLEVBQUUsQ0FBQTtRQUNYLENBQUM7UUFFRCxPQUFPO1lBQ0wsaUJBQWlCLENBQUMsSUFBUztnQkFDekIsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUE7Z0JBRW5DLElBQUksV0FBVyxLQUFLLEdBQUcsRUFBRSxDQUFDO29CQUN4QixPQUFPLENBQUMsTUFBTSxDQUFDO3dCQUNiLElBQUk7d0JBQ0osU0FBUyxFQUFFLGNBQWM7cUJBQzFCLENBQUMsQ0FBQTtnQkFDSixDQUFDO2dCQUVELElBQUksV0FBVyxLQUFLLE1BQU0sRUFBRSxDQUFDO29CQUMzQix5REFBeUQ7b0JBQ3pELDBFQUEwRTtvQkFDMUUsTUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQyxJQUFTLEVBQUUsRUFBRTt3QkFDekQsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLGNBQWMsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksS0FBSyxXQUFXLEVBQUUsQ0FBQzs0QkFDcEUsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRSxLQUFLLElBQUksRUFBRSxDQUFBOzRCQUNyQywwQ0FBMEM7NEJBQzFDLE9BQU8sb0NBQW9DLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO3dCQUN6RCxDQUFDO3dCQUNELE9BQU8sS0FBSyxDQUFBO29CQUNkLENBQUMsQ0FBQyxDQUFBO29CQUVGLHdEQUF3RDtvQkFDeEQsSUFBSSxjQUFjLEVBQUUsQ0FBQzt3QkFDbkIsT0FBTyxDQUFDLE1BQU0sQ0FBQzs0QkFDYixJQUFJOzRCQUNKLFNBQVMsRUFBRSxTQUFTO3lCQUNyQixDQUFDLENBQUE7b0JBQ0osQ0FBQztnQkFDSCxDQUFDO1lBQ0gsQ0FBQztTQUNGLENBQUE7SUFDSCxDQUFDO0NBQ0YsQ0FBQTtBQUVELGtCQUFlLElBQUksQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgUnVsZSB9IGZyb20gJ2VzbGludCdcblxuY29uc3QgcnVsZTogUnVsZS5SdWxlTW9kdWxlID0ge1xuICBtZXRhOiB7XG4gICAgdHlwZTogJ3N1Z2dlc3Rpb24nLFxuICAgIGRvY3M6IHtcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAnUHJlZmVyIFBhcmFncmFwaCBhbmQgU3BhbiBjb21wb25lbnRzIG92ZXIgcmF3IDxwPiBhbmQgPHNwYW4+IGVsZW1lbnRzIGluIGJsb2NrcycsXG4gICAgICByZWNvbW1lbmRlZDogdHJ1ZSxcbiAgICB9LFxuICAgIG1lc3NhZ2VzOiB7XG4gICAgICB1c2VQYXJhZ3JhcGg6XG4gICAgICAgICdVc2UgdGhlIFBhcmFncmFwaCBjb21wb25lbnQgaW5zdGVhZCBvZiA8cD4uIEltcG9ydCBmcm9tIEAvY29tcG9uZW50czogaW1wb3J0IHsgUGFyYWdyYXBoIH0gZnJvbSBcIkAvY29tcG9uZW50c1wiJyxcbiAgICAgIHVzZVNwYW46XG4gICAgICAgICdVc2UgdGhlIFNwYW4gY29tcG9uZW50IGluc3RlYWQgb2YgPHNwYW4+IGZvciB0ZXh0IGNvbnRlbnQuIEltcG9ydCBmcm9tIEAvY29tcG9uZW50czogaW1wb3J0IHsgU3BhbiB9IGZyb20gXCJAL2NvbXBvbmVudHNcIicsXG4gICAgfSxcbiAgICBzY2hlbWE6IFtdLFxuICB9LFxuXG4gIGNyZWF0ZShjb250ZXh0KSB7XG4gICAgY29uc3QgZmlsZW5hbWUgPSBjb250ZXh0LmZpbGVuYW1lIHx8IGNvbnRleHQuZ2V0RmlsZW5hbWUoKVxuXG4gICAgLy8gT25seSBhcHBseSB0byBibG9jayBmaWxlc1xuICAgIGlmICghZmlsZW5hbWUuaW5jbHVkZXMoJy9ibG9ja3MvJykpIHtcbiAgICAgIHJldHVybiB7fVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBKU1hPcGVuaW5nRWxlbWVudChub2RlOiBhbnkpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudE5hbWUgPSBub2RlLm5hbWU/Lm5hbWVcblxuICAgICAgICBpZiAoZWxlbWVudE5hbWUgPT09ICdwJykge1xuICAgICAgICAgIGNvbnRleHQucmVwb3J0KHtcbiAgICAgICAgICAgIG5vZGUsXG4gICAgICAgICAgICBtZXNzYWdlSWQ6ICd1c2VQYXJhZ3JhcGgnLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZWxlbWVudE5hbWUgPT09ICdzcGFuJykge1xuICAgICAgICAgIC8vIENoZWNrIGlmIHRoaXMgc3BhbiBoYXMgdGV4dC1yZWxhdGVkIGNsYXNzZXMgb3IgY29udGVudFxuICAgICAgICAgIC8vIFNraXAgc3BhbnMgdGhhdCBhcmUgcHVyZWx5IHN0cnVjdHVyYWwgKGxpa2UgaWNvbnMsIGRlY29yYXRpdmUgZWxlbWVudHMpXG4gICAgICAgICAgY29uc3QgaGFzVGV4dENsYXNzZXMgPSBub2RlLmF0dHJpYnV0ZXM/LnNvbWUoKGF0dHI6IGFueSkgPT4ge1xuICAgICAgICAgICAgaWYgKGF0dHIudHlwZSA9PT0gJ0pTWEF0dHJpYnV0ZScgJiYgYXR0ci5uYW1lPy5uYW1lID09PSAnY2xhc3NOYW1lJykge1xuICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGF0dHIudmFsdWU/LnZhbHVlIHx8ICcnXG4gICAgICAgICAgICAgIC8vIENoZWNrIGZvciB0ZXh0LXJlbGF0ZWQgVGFpbHdpbmQgY2xhc3Nlc1xuICAgICAgICAgICAgICByZXR1cm4gL1xcYih0ZXh0LXxmb250LXxsZWFkaW5nLXx0cmFja2luZy0pLy50ZXN0KHZhbHVlKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgfSlcblxuICAgICAgICAgIC8vIE9ubHkgd2FybiBpZiB0aGUgc3BhbiBhcHBlYXJzIHRvIGNvbnRhaW4gdGV4dCBzdHlsaW5nXG4gICAgICAgICAgaWYgKGhhc1RleHRDbGFzc2VzKSB7XG4gICAgICAgICAgICBjb250ZXh0LnJlcG9ydCh7XG4gICAgICAgICAgICAgIG5vZGUsXG4gICAgICAgICAgICAgIG1lc3NhZ2VJZDogJ3VzZVNwYW4nLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfVxuICB9LFxufVxuXG5leHBvcnQgZGVmYXVsdCBydWxlXG4iXX0=