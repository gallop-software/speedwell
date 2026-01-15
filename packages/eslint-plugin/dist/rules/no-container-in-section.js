"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@typescript-eslint/utils");
const createRule = utils_1.ESLintUtils.RuleCreator((name) => `https://github.com/gallop-software/eslint-plugin-gallop/blob/main/docs/rules/${name}.md`);
exports.default = createRule({
    name: 'no-container-in-section',
    meta: {
        type: 'suggestion',
        docs: {
            description: 'Container should not be used inside Section. Section already provides containment via innerAlign prop.',
        },
        messages: {
            noContainerInSection: 'Container inside Section is redundant. Section already provides max-width containment. Use Section\'s innerAlign prop instead, or remove the Container.',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm8tY29udGFpbmVyLWluLXNlY3Rpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvcnVsZXMvbm8tY29udGFpbmVyLWluLXNlY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxvREFBZ0U7QUFFaEUsTUFBTSxVQUFVLEdBQUcsbUJBQVcsQ0FBQyxXQUFXLENBQ3hDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxnRkFBZ0YsSUFBSSxLQUFLLENBQ3BHLENBQUE7QUFJRCxrQkFBZSxVQUFVLENBQWlCO0lBQ3hDLElBQUksRUFBRSx5QkFBeUI7SUFDL0IsSUFBSSxFQUFFO1FBQ0osSUFBSSxFQUFFLFlBQVk7UUFDbEIsSUFBSSxFQUFFO1lBQ0osV0FBVyxFQUNULHdHQUF3RztTQUMzRztRQUNELFFBQVEsRUFBRTtZQUNSLG9CQUFvQixFQUNsQix5SkFBeUo7U0FDNUo7UUFDRCxNQUFNLEVBQUUsRUFBRTtLQUNYO0lBQ0QsY0FBYyxFQUFFLEVBQUU7SUFDbEIsTUFBTSxDQUFDLE9BQU87UUFDWiw0Q0FBNEM7UUFDNUMsSUFBSSxZQUFZLEdBQUcsQ0FBQyxDQUFBO1FBRXBCLFNBQVMsaUJBQWlCLENBQ3hCLElBQWdDLEVBQ2hDLElBQVk7WUFFWixPQUFPLENBQ0wsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssZUFBZTtnQkFDbEMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUN4QixDQUFBO1FBQ0gsQ0FBQztRQUVELE9BQU87WUFDTCxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNwQiw4QkFBOEI7Z0JBQzlCLElBQUksaUJBQWlCLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxFQUFFLENBQUM7b0JBQ3ZDLFlBQVksRUFBRSxDQUFBO2dCQUNoQixDQUFDO2dCQUVELHdEQUF3RDtnQkFDeEQsSUFBSSxZQUFZLEdBQUcsQ0FBQyxJQUFJLGlCQUFpQixDQUFDLElBQUksRUFBRSxXQUFXLENBQUMsRUFBRSxDQUFDO29CQUM3RCxPQUFPLENBQUMsTUFBTSxDQUFDO3dCQUNiLElBQUk7d0JBQ0osU0FBUyxFQUFFLHNCQUFzQjtxQkFDbEMsQ0FBQyxDQUFBO2dCQUNKLENBQUM7WUFDSCxDQUFDO1lBRUQsaUJBQWlCLENBQUMsSUFBSTtnQkFDcEIsNkJBQTZCO2dCQUM3QixJQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLGVBQWU7b0JBQ2xDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLFNBQVMsRUFDNUIsQ0FBQztvQkFDRCxZQUFZLEVBQUUsQ0FBQTtnQkFDaEIsQ0FBQztZQUNILENBQUM7U0FDRixDQUFBO0lBQ0gsQ0FBQztDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVTTGludFV0aWxzLCBUU0VTVHJlZSB9IGZyb20gJ0B0eXBlc2NyaXB0LWVzbGludC91dGlscydcblxuY29uc3QgY3JlYXRlUnVsZSA9IEVTTGludFV0aWxzLlJ1bGVDcmVhdG9yKFxuICAobmFtZSkgPT4gYGh0dHBzOi8vZ2l0aHViLmNvbS9nYWxsb3Atc29mdHdhcmUvZXNsaW50LXBsdWdpbi1nYWxsb3AvYmxvYi9tYWluL2RvY3MvcnVsZXMvJHtuYW1lfS5tZGBcbilcblxudHlwZSBNZXNzYWdlSWRzID0gJ25vQ29udGFpbmVySW5TZWN0aW9uJ1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVSdWxlPFtdLCBNZXNzYWdlSWRzPih7XG4gIG5hbWU6ICduby1jb250YWluZXItaW4tc2VjdGlvbicsXG4gIG1ldGE6IHtcbiAgICB0eXBlOiAnc3VnZ2VzdGlvbicsXG4gICAgZG9jczoge1xuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICdDb250YWluZXIgc2hvdWxkIG5vdCBiZSB1c2VkIGluc2lkZSBTZWN0aW9uLiBTZWN0aW9uIGFscmVhZHkgcHJvdmlkZXMgY29udGFpbm1lbnQgdmlhIGlubmVyQWxpZ24gcHJvcC4nLFxuICAgIH0sXG4gICAgbWVzc2FnZXM6IHtcbiAgICAgIG5vQ29udGFpbmVySW5TZWN0aW9uOlxuICAgICAgICAnQ29udGFpbmVyIGluc2lkZSBTZWN0aW9uIGlzIHJlZHVuZGFudC4gU2VjdGlvbiBhbHJlYWR5IHByb3ZpZGVzIG1heC13aWR0aCBjb250YWlubWVudC4gVXNlIFNlY3Rpb25cXCdzIGlubmVyQWxpZ24gcHJvcCBpbnN0ZWFkLCBvciByZW1vdmUgdGhlIENvbnRhaW5lci4nLFxuICAgIH0sXG4gICAgc2NoZW1hOiBbXSxcbiAgfSxcbiAgZGVmYXVsdE9wdGlvbnM6IFtdLFxuICBjcmVhdGUoY29udGV4dCkge1xuICAgIC8vIFRyYWNrIGlmIHdlJ3JlIGluc2lkZSBhIFNlY3Rpb24gY29tcG9uZW50XG4gICAgbGV0IHNlY3Rpb25EZXB0aCA9IDBcblxuICAgIGZ1bmN0aW9uIGlzSlNYRWxlbWVudE5hbWVkKFxuICAgICAgbm9kZTogVFNFU1RyZWUuSlNYT3BlbmluZ0VsZW1lbnQsXG4gICAgICBuYW1lOiBzdHJpbmdcbiAgICApOiBib29sZWFuIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIG5vZGUubmFtZS50eXBlID09PSAnSlNYSWRlbnRpZmllcicgJiZcbiAgICAgICAgbm9kZS5uYW1lLm5hbWUgPT09IG5hbWVcbiAgICAgIClcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgSlNYT3BlbmluZ0VsZW1lbnQobm9kZSkge1xuICAgICAgICAvLyBDaGVjayBpZiBlbnRlcmluZyBhIFNlY3Rpb25cbiAgICAgICAgaWYgKGlzSlNYRWxlbWVudE5hbWVkKG5vZGUsICdTZWN0aW9uJykpIHtcbiAgICAgICAgICBzZWN0aW9uRGVwdGgrK1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ2hlY2sgaWYgd2UncmUgaW5zaWRlIGEgU2VjdGlvbiBhbmQgZm91bmQgYSBDb250YWluZXJcbiAgICAgICAgaWYgKHNlY3Rpb25EZXB0aCA+IDAgJiYgaXNKU1hFbGVtZW50TmFtZWQobm9kZSwgJ0NvbnRhaW5lcicpKSB7XG4gICAgICAgICAgY29udGV4dC5yZXBvcnQoe1xuICAgICAgICAgICAgbm9kZSxcbiAgICAgICAgICAgIG1lc3NhZ2VJZDogJ25vQ29udGFpbmVySW5TZWN0aW9uJyxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9LFxuXG4gICAgICBKU1hDbG9zaW5nRWxlbWVudChub2RlKSB7XG4gICAgICAgIC8vIENoZWNrIGlmIGxlYXZpbmcgYSBTZWN0aW9uXG4gICAgICAgIGlmIChcbiAgICAgICAgICBub2RlLm5hbWUudHlwZSA9PT0gJ0pTWElkZW50aWZpZXInICYmXG4gICAgICAgICAgbm9kZS5uYW1lLm5hbWUgPT09ICdTZWN0aW9uJ1xuICAgICAgICApIHtcbiAgICAgICAgICBzZWN0aW9uRGVwdGgtLVxuICAgICAgICB9XG4gICAgICB9LFxuICAgIH1cbiAgfSxcbn0pXG4iXX0=