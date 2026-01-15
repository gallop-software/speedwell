"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rule = {
    meta: {
        type: 'suggestion',
        docs: {
            description: 'Prefer Paragraph and Span components over raw <p> and <span> elements in blocks',
            recommended: true,
            url: 'https://github.com/gallop-software/canon/blob/main/patterns/003-typography-components.md',
        },
        messages: {
            useParagraph: '[Canon 003] Use the Paragraph component instead of <p>. Import: import { Paragraph } from "@/components"',
            useSpan: '[Canon 003] Use the Span component instead of <span> for text content. Import: import { Span } from "@/components"',
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
                    // Skip spans that are inside typography components (Heading, Paragraph, Label, etc.)
                    // These are used for inline styling effects like gradient text, emphasis, etc.
                    const typographyComponents = ['Heading', 'Paragraph', 'Label', 'Span', 'Quote', 'Subheading', 'Accent'];
                    let parent = node.parent;
                    while (parent) {
                        if (parent.type === 'JSXElement' &&
                            parent.openingElement?.name?.name &&
                            typographyComponents.includes(parent.openingElement.name.name)) {
                            // Span is inside a typography component, skip warning
                            return;
                        }
                        parent = parent.parent;
                    }
                    // Check className for text-related classes and gradient text
                    let hasTextClasses = false;
                    let isGradientText = false;
                    node.attributes?.forEach((attr) => {
                        if (attr.type === 'JSXAttribute' && attr.name?.name === 'className') {
                            const value = attr.value?.value || '';
                            // Check for text-related Tailwind classes
                            if (/\b(text-|font-|leading-|tracking-)/.test(value)) {
                                hasTextClasses = true;
                            }
                            // Skip gradient text spans (bg-clip-text is used for gradient text effects)
                            if (/\bbg-clip-text\b/.test(value)) {
                                isGradientText = true;
                            }
                        }
                    });
                    // Only warn if the span has text styling and is not gradient text
                    if (hasTextClasses && !isGradientText) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlZmVyLXR5cG9ncmFwaHktY29tcG9uZW50cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlcy9wcmVmZXItdHlwb2dyYXBoeS1jb21wb25lbnRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEsTUFBTSxJQUFJLEdBQW9CO0lBQzVCLElBQUksRUFBRTtRQUNKLElBQUksRUFBRSxZQUFZO1FBQ2xCLElBQUksRUFBRTtZQUNKLFdBQVcsRUFDVCxpRkFBaUY7WUFDbkYsV0FBVyxFQUFFLElBQUk7WUFDakIsR0FBRyxFQUFFLDBGQUEwRjtTQUNoRztRQUNELFFBQVEsRUFBRTtZQUNSLFlBQVksRUFDViwwR0FBMEc7WUFDNUcsT0FBTyxFQUNMLG9IQUFvSDtTQUN2SDtRQUNELE1BQU0sRUFBRSxFQUFFO0tBQ1g7SUFFRCxNQUFNLENBQUMsT0FBTztRQUNaLE1BQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyxRQUFRLElBQUksT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFBO1FBRTFELDRCQUE0QjtRQUM1QixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDO1lBQ25DLE9BQU8sRUFBRSxDQUFBO1FBQ1gsQ0FBQztRQUVELE9BQU87WUFDTCxpQkFBaUIsQ0FBQyxJQUFTO2dCQUN6QixNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQTtnQkFFbkMsSUFBSSxXQUFXLEtBQUssR0FBRyxFQUFFLENBQUM7b0JBQ3hCLE9BQU8sQ0FBQyxNQUFNLENBQUM7d0JBQ2IsSUFBSTt3QkFDSixTQUFTLEVBQUUsY0FBYztxQkFDMUIsQ0FBQyxDQUFBO2dCQUNKLENBQUM7Z0JBRUQsSUFBSSxXQUFXLEtBQUssTUFBTSxFQUFFLENBQUM7b0JBQzNCLHFGQUFxRjtvQkFDckYsK0VBQStFO29CQUMvRSxNQUFNLG9CQUFvQixHQUFHLENBQUMsU0FBUyxFQUFFLFdBQVcsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsUUFBUSxDQUFDLENBQUE7b0JBRXZHLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUE7b0JBQ3hCLE9BQU8sTUFBTSxFQUFFLENBQUM7d0JBQ2QsSUFDRSxNQUFNLENBQUMsSUFBSSxLQUFLLFlBQVk7NEJBQzVCLE1BQU0sQ0FBQyxjQUFjLEVBQUUsSUFBSSxFQUFFLElBQUk7NEJBQ2pDLG9CQUFvQixDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFDOUQsQ0FBQzs0QkFDRCxzREFBc0Q7NEJBQ3RELE9BQU07d0JBQ1IsQ0FBQzt3QkFDRCxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQTtvQkFDeEIsQ0FBQztvQkFFRCw2REFBNkQ7b0JBQzdELElBQUksY0FBYyxHQUFHLEtBQUssQ0FBQTtvQkFDMUIsSUFBSSxjQUFjLEdBQUcsS0FBSyxDQUFBO29CQUUxQixJQUFJLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFDLElBQVMsRUFBRSxFQUFFO3dCQUNyQyxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssY0FBYyxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxLQUFLLFdBQVcsRUFBRSxDQUFDOzRCQUNwRSxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFFLEtBQUssSUFBSSxFQUFFLENBQUE7NEJBQ3JDLDBDQUEwQzs0QkFDMUMsSUFBSSxvQ0FBb0MsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQztnQ0FDckQsY0FBYyxHQUFHLElBQUksQ0FBQTs0QkFDdkIsQ0FBQzs0QkFDRCw0RUFBNEU7NEJBQzVFLElBQUksa0JBQWtCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUM7Z0NBQ25DLGNBQWMsR0FBRyxJQUFJLENBQUE7NEJBQ3ZCLENBQUM7d0JBQ0gsQ0FBQztvQkFDSCxDQUFDLENBQUMsQ0FBQTtvQkFFRixrRUFBa0U7b0JBQ2xFLElBQUksY0FBYyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7d0JBQ3RDLE9BQU8sQ0FBQyxNQUFNLENBQUM7NEJBQ2IsSUFBSTs0QkFDSixTQUFTLEVBQUUsU0FBUzt5QkFDckIsQ0FBQyxDQUFBO29CQUNKLENBQUM7Z0JBQ0gsQ0FBQztZQUNILENBQUM7U0FDRixDQUFBO0lBQ0gsQ0FBQztDQUNGLENBQUE7QUFFRCxrQkFBZSxJQUFJLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IFJ1bGUgfSBmcm9tICdlc2xpbnQnXG5cbmNvbnN0IHJ1bGU6IFJ1bGUuUnVsZU1vZHVsZSA9IHtcbiAgbWV0YToge1xuICAgIHR5cGU6ICdzdWdnZXN0aW9uJyxcbiAgICBkb2NzOiB7XG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgJ1ByZWZlciBQYXJhZ3JhcGggYW5kIFNwYW4gY29tcG9uZW50cyBvdmVyIHJhdyA8cD4gYW5kIDxzcGFuPiBlbGVtZW50cyBpbiBibG9ja3MnLFxuICAgICAgcmVjb21tZW5kZWQ6IHRydWUsXG4gICAgICB1cmw6ICdodHRwczovL2dpdGh1Yi5jb20vZ2FsbG9wLXNvZnR3YXJlL2Nhbm9uL2Jsb2IvbWFpbi9wYXR0ZXJucy8wMDMtdHlwb2dyYXBoeS1jb21wb25lbnRzLm1kJyxcbiAgICB9LFxuICAgIG1lc3NhZ2VzOiB7XG4gICAgICB1c2VQYXJhZ3JhcGg6XG4gICAgICAgICdbQ2Fub24gMDAzXSBVc2UgdGhlIFBhcmFncmFwaCBjb21wb25lbnQgaW5zdGVhZCBvZiA8cD4uIEltcG9ydDogaW1wb3J0IHsgUGFyYWdyYXBoIH0gZnJvbSBcIkAvY29tcG9uZW50c1wiJyxcbiAgICAgIHVzZVNwYW46XG4gICAgICAgICdbQ2Fub24gMDAzXSBVc2UgdGhlIFNwYW4gY29tcG9uZW50IGluc3RlYWQgb2YgPHNwYW4+IGZvciB0ZXh0IGNvbnRlbnQuIEltcG9ydDogaW1wb3J0IHsgU3BhbiB9IGZyb20gXCJAL2NvbXBvbmVudHNcIicsXG4gICAgfSxcbiAgICBzY2hlbWE6IFtdLFxuICB9LFxuXG4gIGNyZWF0ZShjb250ZXh0KSB7XG4gICAgY29uc3QgZmlsZW5hbWUgPSBjb250ZXh0LmZpbGVuYW1lIHx8IGNvbnRleHQuZ2V0RmlsZW5hbWUoKVxuXG4gICAgLy8gT25seSBhcHBseSB0byBibG9jayBmaWxlc1xuICAgIGlmICghZmlsZW5hbWUuaW5jbHVkZXMoJy9ibG9ja3MvJykpIHtcbiAgICAgIHJldHVybiB7fVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBKU1hPcGVuaW5nRWxlbWVudChub2RlOiBhbnkpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudE5hbWUgPSBub2RlLm5hbWU/Lm5hbWVcblxuICAgICAgICBpZiAoZWxlbWVudE5hbWUgPT09ICdwJykge1xuICAgICAgICAgIGNvbnRleHQucmVwb3J0KHtcbiAgICAgICAgICAgIG5vZGUsXG4gICAgICAgICAgICBtZXNzYWdlSWQ6ICd1c2VQYXJhZ3JhcGgnLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZWxlbWVudE5hbWUgPT09ICdzcGFuJykge1xuICAgICAgICAgIC8vIFNraXAgc3BhbnMgdGhhdCBhcmUgaW5zaWRlIHR5cG9ncmFwaHkgY29tcG9uZW50cyAoSGVhZGluZywgUGFyYWdyYXBoLCBMYWJlbCwgZXRjLilcbiAgICAgICAgICAvLyBUaGVzZSBhcmUgdXNlZCBmb3IgaW5saW5lIHN0eWxpbmcgZWZmZWN0cyBsaWtlIGdyYWRpZW50IHRleHQsIGVtcGhhc2lzLCBldGMuXG4gICAgICAgICAgY29uc3QgdHlwb2dyYXBoeUNvbXBvbmVudHMgPSBbJ0hlYWRpbmcnLCAnUGFyYWdyYXBoJywgJ0xhYmVsJywgJ1NwYW4nLCAnUXVvdGUnLCAnU3ViaGVhZGluZycsICdBY2NlbnQnXVxuICAgICAgICAgIFxuICAgICAgICAgIGxldCBwYXJlbnQgPSBub2RlLnBhcmVudFxuICAgICAgICAgIHdoaWxlIChwYXJlbnQpIHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgcGFyZW50LnR5cGUgPT09ICdKU1hFbGVtZW50JyAmJlxuICAgICAgICAgICAgICBwYXJlbnQub3BlbmluZ0VsZW1lbnQ/Lm5hbWU/Lm5hbWUgJiZcbiAgICAgICAgICAgICAgdHlwb2dyYXBoeUNvbXBvbmVudHMuaW5jbHVkZXMocGFyZW50Lm9wZW5pbmdFbGVtZW50Lm5hbWUubmFtZSlcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAvLyBTcGFuIGlzIGluc2lkZSBhIHR5cG9ncmFwaHkgY29tcG9uZW50LCBza2lwIHdhcm5pbmdcbiAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwYXJlbnQgPSBwYXJlbnQucGFyZW50XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gQ2hlY2sgY2xhc3NOYW1lIGZvciB0ZXh0LXJlbGF0ZWQgY2xhc3NlcyBhbmQgZ3JhZGllbnQgdGV4dFxuICAgICAgICAgIGxldCBoYXNUZXh0Q2xhc3NlcyA9IGZhbHNlXG4gICAgICAgICAgbGV0IGlzR3JhZGllbnRUZXh0ID0gZmFsc2VcblxuICAgICAgICAgIG5vZGUuYXR0cmlidXRlcz8uZm9yRWFjaCgoYXR0cjogYW55KSA9PiB7XG4gICAgICAgICAgICBpZiAoYXR0ci50eXBlID09PSAnSlNYQXR0cmlidXRlJyAmJiBhdHRyLm5hbWU/Lm5hbWUgPT09ICdjbGFzc05hbWUnKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gYXR0ci52YWx1ZT8udmFsdWUgfHwgJydcbiAgICAgICAgICAgICAgLy8gQ2hlY2sgZm9yIHRleHQtcmVsYXRlZCBUYWlsd2luZCBjbGFzc2VzXG4gICAgICAgICAgICAgIGlmICgvXFxiKHRleHQtfGZvbnQtfGxlYWRpbmctfHRyYWNraW5nLSkvLnRlc3QodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgaGFzVGV4dENsYXNzZXMgPSB0cnVlXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLy8gU2tpcCBncmFkaWVudCB0ZXh0IHNwYW5zIChiZy1jbGlwLXRleHQgaXMgdXNlZCBmb3IgZ3JhZGllbnQgdGV4dCBlZmZlY3RzKVxuICAgICAgICAgICAgICBpZiAoL1xcYmJnLWNsaXAtdGV4dFxcYi8udGVzdCh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBpc0dyYWRpZW50VGV4dCA9IHRydWVcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG5cbiAgICAgICAgICAvLyBPbmx5IHdhcm4gaWYgdGhlIHNwYW4gaGFzIHRleHQgc3R5bGluZyBhbmQgaXMgbm90IGdyYWRpZW50IHRleHRcbiAgICAgICAgICBpZiAoaGFzVGV4dENsYXNzZXMgJiYgIWlzR3JhZGllbnRUZXh0KSB7XG4gICAgICAgICAgICBjb250ZXh0LnJlcG9ydCh7XG4gICAgICAgICAgICAgIG5vZGUsXG4gICAgICAgICAgICAgIG1lc3NhZ2VJZDogJ3VzZVNwYW4nLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfVxuICB9LFxufVxuXG5leHBvcnQgZGVmYXVsdCBydWxlXG4iXX0=