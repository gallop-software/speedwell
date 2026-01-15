"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@typescript-eslint/utils");
const createRule = utils_1.ESLintUtils.RuleCreator((name) => `https://github.com/gallop-software/canon/blob/main/patterns/002-layout-hierarchy.md`);
exports.default = createRule({
    name: 'no-container-in-section',
    meta: {
        type: 'suggestion',
        docs: {
            description: 'Container should not be used inside Section. Section already provides containment via innerAlign prop.',
            // Canon reference
            // @ts-expect-error - custom property for Canon integration
            canon: {
                pattern: '002',
                title: 'Layout Hierarchy',
                url: 'https://github.com/gallop-software/canon/blob/main/patterns/002-layout-hierarchy.md',
            },
        },
        messages: {
            noContainerInSection: '[Canon 002] Container inside Section is redundant. Section already provides max-width containment. Use Section\'s innerAlign prop or a plain div instead.',
        },
        schema: [],
    },
    defaultOptions: [],
    create(context) {
        // Track if we're inside a Section component
        let sectionDepth = 0;
        function isJSXElementNamed(node, name) {
            return (node.name.type === 'JSXIdentifier' &&
                node.name.name === name);
        }
        return {
            JSXOpeningElement(node) {
                // Check if entering a Section
                if (isJSXElementNamed(node, 'Section')) {
                    sectionDepth++;
                }
                // Check if we're inside a Section and found a Container
                if (sectionDepth > 0 && isJSXElementNamed(node, 'Container')) {
                    context.report({
                        node,
                        messageId: 'noContainerInSection',
                    });
                }
            },
            JSXClosingElement(node) {
                // Check if leaving a Section
                if (node.name.type === 'JSXIdentifier' &&
                    node.name.name === 'Section') {
                    sectionDepth--;
                }
            },
        };
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm8tY29udGFpbmVyLWluLXNlY3Rpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvcnVsZXMvbm8tY29udGFpbmVyLWluLXNlY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxvREFBZ0U7QUFFaEUsTUFBTSxVQUFVLEdBQUcsbUJBQVcsQ0FBQyxXQUFXLENBQ3hDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxxRkFBcUYsQ0FDaEcsQ0FBQTtBQUlELGtCQUFlLFVBQVUsQ0FBaUI7SUFDeEMsSUFBSSxFQUFFLHlCQUF5QjtJQUMvQixJQUFJLEVBQUU7UUFDSixJQUFJLEVBQUUsWUFBWTtRQUNsQixJQUFJLEVBQUU7WUFDSixXQUFXLEVBQ1Qsd0dBQXdHO1lBQzFHLGtCQUFrQjtZQUNsQiwyREFBMkQ7WUFDM0QsS0FBSyxFQUFFO2dCQUNMLE9BQU8sRUFBRSxLQUFLO2dCQUNkLEtBQUssRUFBRSxrQkFBa0I7Z0JBQ3pCLEdBQUcsRUFBRSxxRkFBcUY7YUFDM0Y7U0FDRjtRQUNELFFBQVEsRUFBRTtZQUNSLG9CQUFvQixFQUNsQiwySkFBMko7U0FDOUo7UUFDRCxNQUFNLEVBQUUsRUFBRTtLQUNYO0lBQ0QsY0FBYyxFQUFFLEVBQUU7SUFDbEIsTUFBTSxDQUFDLE9BQU87UUFDWiw0Q0FBNEM7UUFDNUMsSUFBSSxZQUFZLEdBQUcsQ0FBQyxDQUFBO1FBRXBCLFNBQVMsaUJBQWlCLENBQ3hCLElBQWdDLEVBQ2hDLElBQVk7WUFFWixPQUFPLENBQ0wsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssZUFBZTtnQkFDbEMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUN4QixDQUFBO1FBQ0gsQ0FBQztRQUVELE9BQU87WUFDTCxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNwQiw4QkFBOEI7Z0JBQzlCLElBQUksaUJBQWlCLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxFQUFFLENBQUM7b0JBQ3ZDLFlBQVksRUFBRSxDQUFBO2dCQUNoQixDQUFDO2dCQUVELHdEQUF3RDtnQkFDeEQsSUFBSSxZQUFZLEdBQUcsQ0FBQyxJQUFJLGlCQUFpQixDQUFDLElBQUksRUFBRSxXQUFXLENBQUMsRUFBRSxDQUFDO29CQUM3RCxPQUFPLENBQUMsTUFBTSxDQUFDO3dCQUNiLElBQUk7d0JBQ0osU0FBUyxFQUFFLHNCQUFzQjtxQkFDbEMsQ0FBQyxDQUFBO2dCQUNKLENBQUM7WUFDSCxDQUFDO1lBRUQsaUJBQWlCLENBQUMsSUFBSTtnQkFDcEIsNkJBQTZCO2dCQUM3QixJQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLGVBQWU7b0JBQ2xDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLFNBQVMsRUFDNUIsQ0FBQztvQkFDRCxZQUFZLEVBQUUsQ0FBQTtnQkFDaEIsQ0FBQztZQUNILENBQUM7U0FDRixDQUFBO0lBQ0gsQ0FBQztDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVTTGludFV0aWxzLCBUU0VTVHJlZSB9IGZyb20gJ0B0eXBlc2NyaXB0LWVzbGludC91dGlscydcblxuY29uc3QgY3JlYXRlUnVsZSA9IEVTTGludFV0aWxzLlJ1bGVDcmVhdG9yKFxuICAobmFtZSkgPT4gYGh0dHBzOi8vZ2l0aHViLmNvbS9nYWxsb3Atc29mdHdhcmUvY2Fub24vYmxvYi9tYWluL3BhdHRlcm5zLzAwMi1sYXlvdXQtaGllcmFyY2h5Lm1kYFxuKVxuXG50eXBlIE1lc3NhZ2VJZHMgPSAnbm9Db250YWluZXJJblNlY3Rpb24nXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVJ1bGU8W10sIE1lc3NhZ2VJZHM+KHtcbiAgbmFtZTogJ25vLWNvbnRhaW5lci1pbi1zZWN0aW9uJyxcbiAgbWV0YToge1xuICAgIHR5cGU6ICdzdWdnZXN0aW9uJyxcbiAgICBkb2NzOiB7XG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgJ0NvbnRhaW5lciBzaG91bGQgbm90IGJlIHVzZWQgaW5zaWRlIFNlY3Rpb24uIFNlY3Rpb24gYWxyZWFkeSBwcm92aWRlcyBjb250YWlubWVudCB2aWEgaW5uZXJBbGlnbiBwcm9wLicsXG4gICAgICAvLyBDYW5vbiByZWZlcmVuY2VcbiAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgLSBjdXN0b20gcHJvcGVydHkgZm9yIENhbm9uIGludGVncmF0aW9uXG4gICAgICBjYW5vbjoge1xuICAgICAgICBwYXR0ZXJuOiAnMDAyJyxcbiAgICAgICAgdGl0bGU6ICdMYXlvdXQgSGllcmFyY2h5JyxcbiAgICAgICAgdXJsOiAnaHR0cHM6Ly9naXRodWIuY29tL2dhbGxvcC1zb2Z0d2FyZS9jYW5vbi9ibG9iL21haW4vcGF0dGVybnMvMDAyLWxheW91dC1oaWVyYXJjaHkubWQnLFxuICAgICAgfSxcbiAgICB9LFxuICAgIG1lc3NhZ2VzOiB7XG4gICAgICBub0NvbnRhaW5lckluU2VjdGlvbjpcbiAgICAgICAgJ1tDYW5vbiAwMDJdIENvbnRhaW5lciBpbnNpZGUgU2VjdGlvbiBpcyByZWR1bmRhbnQuIFNlY3Rpb24gYWxyZWFkeSBwcm92aWRlcyBtYXgtd2lkdGggY29udGFpbm1lbnQuIFVzZSBTZWN0aW9uXFwncyBpbm5lckFsaWduIHByb3Agb3IgYSBwbGFpbiBkaXYgaW5zdGVhZC4nLFxuICAgIH0sXG4gICAgc2NoZW1hOiBbXSxcbiAgfSxcbiAgZGVmYXVsdE9wdGlvbnM6IFtdLFxuICBjcmVhdGUoY29udGV4dCkge1xuICAgIC8vIFRyYWNrIGlmIHdlJ3JlIGluc2lkZSBhIFNlY3Rpb24gY29tcG9uZW50XG4gICAgbGV0IHNlY3Rpb25EZXB0aCA9IDBcblxuICAgIGZ1bmN0aW9uIGlzSlNYRWxlbWVudE5hbWVkKFxuICAgICAgbm9kZTogVFNFU1RyZWUuSlNYT3BlbmluZ0VsZW1lbnQsXG4gICAgICBuYW1lOiBzdHJpbmdcbiAgICApOiBib29sZWFuIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIG5vZGUubmFtZS50eXBlID09PSAnSlNYSWRlbnRpZmllcicgJiZcbiAgICAgICAgbm9kZS5uYW1lLm5hbWUgPT09IG5hbWVcbiAgICAgIClcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgSlNYT3BlbmluZ0VsZW1lbnQobm9kZSkge1xuICAgICAgICAvLyBDaGVjayBpZiBlbnRlcmluZyBhIFNlY3Rpb25cbiAgICAgICAgaWYgKGlzSlNYRWxlbWVudE5hbWVkKG5vZGUsICdTZWN0aW9uJykpIHtcbiAgICAgICAgICBzZWN0aW9uRGVwdGgrK1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ2hlY2sgaWYgd2UncmUgaW5zaWRlIGEgU2VjdGlvbiBhbmQgZm91bmQgYSBDb250YWluZXJcbiAgICAgICAgaWYgKHNlY3Rpb25EZXB0aCA+IDAgJiYgaXNKU1hFbGVtZW50TmFtZWQobm9kZSwgJ0NvbnRhaW5lcicpKSB7XG4gICAgICAgICAgY29udGV4dC5yZXBvcnQoe1xuICAgICAgICAgICAgbm9kZSxcbiAgICAgICAgICAgIG1lc3NhZ2VJZDogJ25vQ29udGFpbmVySW5TZWN0aW9uJyxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9LFxuXG4gICAgICBKU1hDbG9zaW5nRWxlbWVudChub2RlKSB7XG4gICAgICAgIC8vIENoZWNrIGlmIGxlYXZpbmcgYSBTZWN0aW9uXG4gICAgICAgIGlmIChcbiAgICAgICAgICBub2RlLm5hbWUudHlwZSA9PT0gJ0pTWElkZW50aWZpZXInICYmXG4gICAgICAgICAgbm9kZS5uYW1lLm5hbWUgPT09ICdTZWN0aW9uJ1xuICAgICAgICApIHtcbiAgICAgICAgICBzZWN0aW9uRGVwdGgtLVxuICAgICAgICB9XG4gICAgICB9LFxuICAgIH1cbiAgfSxcbn0pXG4iXX0=