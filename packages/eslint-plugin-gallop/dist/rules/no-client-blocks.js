"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@typescript-eslint/utils");
const createRule = utils_1.ESLintUtils.RuleCreator((name) => `https://github.com/gallop-software/eslint-plugin-gallop/blob/main/docs/rules/${name}.md`);
exports.default = createRule({
    name: 'no-client-blocks',
    meta: {
        type: 'suggestion',
        docs: {
            description: 'Block components in src/blocks/ should not use "use client". Extract client-side logic into separate components.',
        },
        messages: {
            noClientBlocks: 'Block "{{blockName}}" uses \'use client\'. Extract hooks and client-side logic into a component in src/components/, then import it here. This keeps blocks as server components for better performance.',
        },
        schema: [],
    },
    defaultOptions: [],
    create(context) {
        const filename = context.filename || context.getFilename();
        // Only check files in src/blocks/
        if (!filename.includes('/blocks/') && !filename.includes('\\blocks\\')) {
            return {};
        }
        return {
            // Check for 'use client' directive at the top of the file
            ExpressionStatement(node) {
                if (node.expression.type === 'Literal' &&
                    node.expression.value === 'use client') {
                    // Extract block name from filename
                    const match = filename.match(/([^/\\]+)\.tsx?$/);
                    const blockName = match ? match[1] : 'unknown';
                    context.report({
                        node,
                        messageId: 'noClientBlocks',
                        data: {
                            blockName,
                        },
                    });
                }
            },
        };
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm8tY2xpZW50LWJsb2Nrcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlcy9uby1jbGllbnQtYmxvY2tzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsb0RBQXNEO0FBRXRELE1BQU0sVUFBVSxHQUFHLG1CQUFXLENBQUMsV0FBVyxDQUN4QyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsZ0ZBQWdGLElBQUksS0FBSyxDQUNwRyxDQUFBO0FBSUQsa0JBQWUsVUFBVSxDQUFpQjtJQUN4QyxJQUFJLEVBQUUsa0JBQWtCO0lBQ3hCLElBQUksRUFBRTtRQUNKLElBQUksRUFBRSxZQUFZO1FBQ2xCLElBQUksRUFBRTtZQUNKLFdBQVcsRUFDVCxrSEFBa0g7U0FDckg7UUFDRCxRQUFRLEVBQUU7WUFDUixjQUFjLEVBQ1oseU1BQXlNO1NBQzVNO1FBQ0QsTUFBTSxFQUFFLEVBQUU7S0FDWDtJQUNELGNBQWMsRUFBRSxFQUFFO0lBQ2xCLE1BQU0sQ0FBQyxPQUFPO1FBQ1osTUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLFFBQVEsSUFBSSxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUE7UUFFMUQsa0NBQWtDO1FBQ2xDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDO1lBQ3ZFLE9BQU8sRUFBRSxDQUFBO1FBQ1gsQ0FBQztRQUVELE9BQU87WUFDTCwwREFBMEQ7WUFDMUQsbUJBQW1CLENBQUMsSUFBSTtnQkFDdEIsSUFDRSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksS0FBSyxTQUFTO29CQUNsQyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssS0FBSyxZQUFZLEVBQ3RDLENBQUM7b0JBQ0QsbUNBQW1DO29CQUNuQyxNQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLENBQUE7b0JBQ2hELE1BQU0sU0FBUyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUE7b0JBRTlDLE9BQU8sQ0FBQyxNQUFNLENBQUM7d0JBQ2IsSUFBSTt3QkFDSixTQUFTLEVBQUUsZ0JBQWdCO3dCQUMzQixJQUFJLEVBQUU7NEJBQ0osU0FBUzt5QkFDVjtxQkFDRixDQUFDLENBQUE7Z0JBQ0osQ0FBQztZQUNILENBQUM7U0FDRixDQUFBO0lBQ0gsQ0FBQztDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVTTGludFV0aWxzIH0gZnJvbSAnQHR5cGVzY3JpcHQtZXNsaW50L3V0aWxzJ1xuXG5jb25zdCBjcmVhdGVSdWxlID0gRVNMaW50VXRpbHMuUnVsZUNyZWF0b3IoXG4gIChuYW1lKSA9PiBgaHR0cHM6Ly9naXRodWIuY29tL2dhbGxvcC1zb2Z0d2FyZS9lc2xpbnQtcGx1Z2luLWdhbGxvcC9ibG9iL21haW4vZG9jcy9ydWxlcy8ke25hbWV9Lm1kYFxuKVxuXG50eXBlIE1lc3NhZ2VJZHMgPSAnbm9DbGllbnRCbG9ja3MnXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVJ1bGU8W10sIE1lc3NhZ2VJZHM+KHtcbiAgbmFtZTogJ25vLWNsaWVudC1ibG9ja3MnLFxuICBtZXRhOiB7XG4gICAgdHlwZTogJ3N1Z2dlc3Rpb24nLFxuICAgIGRvY3M6IHtcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAnQmxvY2sgY29tcG9uZW50cyBpbiBzcmMvYmxvY2tzLyBzaG91bGQgbm90IHVzZSBcInVzZSBjbGllbnRcIi4gRXh0cmFjdCBjbGllbnQtc2lkZSBsb2dpYyBpbnRvIHNlcGFyYXRlIGNvbXBvbmVudHMuJyxcbiAgICB9LFxuICAgIG1lc3NhZ2VzOiB7XG4gICAgICBub0NsaWVudEJsb2NrczpcbiAgICAgICAgJ0Jsb2NrIFwie3tibG9ja05hbWV9fVwiIHVzZXMgXFwndXNlIGNsaWVudFxcJy4gRXh0cmFjdCBob29rcyBhbmQgY2xpZW50LXNpZGUgbG9naWMgaW50byBhIGNvbXBvbmVudCBpbiBzcmMvY29tcG9uZW50cy8sIHRoZW4gaW1wb3J0IGl0IGhlcmUuIFRoaXMga2VlcHMgYmxvY2tzIGFzIHNlcnZlciBjb21wb25lbnRzIGZvciBiZXR0ZXIgcGVyZm9ybWFuY2UuJyxcbiAgICB9LFxuICAgIHNjaGVtYTogW10sXG4gIH0sXG4gIGRlZmF1bHRPcHRpb25zOiBbXSxcbiAgY3JlYXRlKGNvbnRleHQpIHtcbiAgICBjb25zdCBmaWxlbmFtZSA9IGNvbnRleHQuZmlsZW5hbWUgfHwgY29udGV4dC5nZXRGaWxlbmFtZSgpXG5cbiAgICAvLyBPbmx5IGNoZWNrIGZpbGVzIGluIHNyYy9ibG9ja3MvXG4gICAgaWYgKCFmaWxlbmFtZS5pbmNsdWRlcygnL2Jsb2Nrcy8nKSAmJiAhZmlsZW5hbWUuaW5jbHVkZXMoJ1xcXFxibG9ja3NcXFxcJykpIHtcbiAgICAgIHJldHVybiB7fVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAvLyBDaGVjayBmb3IgJ3VzZSBjbGllbnQnIGRpcmVjdGl2ZSBhdCB0aGUgdG9wIG9mIHRoZSBmaWxlXG4gICAgICBFeHByZXNzaW9uU3RhdGVtZW50KG5vZGUpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIG5vZGUuZXhwcmVzc2lvbi50eXBlID09PSAnTGl0ZXJhbCcgJiZcbiAgICAgICAgICBub2RlLmV4cHJlc3Npb24udmFsdWUgPT09ICd1c2UgY2xpZW50J1xuICAgICAgICApIHtcbiAgICAgICAgICAvLyBFeHRyYWN0IGJsb2NrIG5hbWUgZnJvbSBmaWxlbmFtZVxuICAgICAgICAgIGNvbnN0IG1hdGNoID0gZmlsZW5hbWUubWF0Y2goLyhbXi9cXFxcXSspXFwudHN4PyQvKVxuICAgICAgICAgIGNvbnN0IGJsb2NrTmFtZSA9IG1hdGNoID8gbWF0Y2hbMV0gOiAndW5rbm93bidcblxuICAgICAgICAgIGNvbnRleHQucmVwb3J0KHtcbiAgICAgICAgICAgIG5vZGUsXG4gICAgICAgICAgICBtZXNzYWdlSWQ6ICdub0NsaWVudEJsb2NrcycsXG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgIGJsb2NrTmFtZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9XG4gIH0sXG59KVxuIl19