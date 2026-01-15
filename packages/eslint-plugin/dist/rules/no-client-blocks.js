"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@typescript-eslint/utils");
const createRule = utils_1.ESLintUtils.RuleCreator((name) => `https://github.com/gallop-software/canon/blob/main/patterns/001-server-first-blocks.md`);
exports.default = createRule({
    name: 'no-client-blocks',
    meta: {
        type: 'suggestion',
        docs: {
            description: 'Block components in src/blocks/ should not use "use client". Extract client-side logic into separate components.',
            // Canon reference
            // @ts-expect-error - custom property for Canon integration
            canon: {
                pattern: '001',
                title: 'Server-First Blocks',
                url: 'https://github.com/gallop-software/canon/blob/main/patterns/001-server-first-blocks.md',
            },
        },
        messages: {
            noClientBlocks: '[Canon 001] Block "{{blockName}}" uses \'use client\'. Extract hooks and client-side logic into a component in src/components/, then import it here. See: Server-First Blocks pattern.',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm8tY2xpZW50LWJsb2Nrcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlcy9uby1jbGllbnQtYmxvY2tzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsb0RBQXNEO0FBRXRELE1BQU0sVUFBVSxHQUFHLG1CQUFXLENBQUMsV0FBVyxDQUN4QyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsd0ZBQXdGLENBQ25HLENBQUE7QUFJRCxrQkFBZSxVQUFVLENBQWlCO0lBQ3hDLElBQUksRUFBRSxrQkFBa0I7SUFDeEIsSUFBSSxFQUFFO1FBQ0osSUFBSSxFQUFFLFlBQVk7UUFDbEIsSUFBSSxFQUFFO1lBQ0osV0FBVyxFQUNULGtIQUFrSDtZQUNwSCxrQkFBa0I7WUFDbEIsMkRBQTJEO1lBQzNELEtBQUssRUFBRTtnQkFDTCxPQUFPLEVBQUUsS0FBSztnQkFDZCxLQUFLLEVBQUUscUJBQXFCO2dCQUM1QixHQUFHLEVBQUUsd0ZBQXdGO2FBQzlGO1NBQ0Y7UUFDRCxRQUFRLEVBQUU7WUFDUixjQUFjLEVBQ1osd0xBQXdMO1NBQzNMO1FBQ0QsTUFBTSxFQUFFLEVBQUU7S0FDWDtJQUNELGNBQWMsRUFBRSxFQUFFO0lBQ2xCLE1BQU0sQ0FBQyxPQUFPO1FBQ1osTUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLFFBQVEsSUFBSSxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUE7UUFFMUQsa0NBQWtDO1FBQ2xDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDO1lBQ3ZFLE9BQU8sRUFBRSxDQUFBO1FBQ1gsQ0FBQztRQUVELE9BQU87WUFDTCwwREFBMEQ7WUFDMUQsbUJBQW1CLENBQUMsSUFBSTtnQkFDdEIsSUFDRSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksS0FBSyxTQUFTO29CQUNsQyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssS0FBSyxZQUFZLEVBQ3RDLENBQUM7b0JBQ0QsbUNBQW1DO29CQUNuQyxNQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLENBQUE7b0JBQ2hELE1BQU0sU0FBUyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUE7b0JBRTlDLE9BQU8sQ0FBQyxNQUFNLENBQUM7d0JBQ2IsSUFBSTt3QkFDSixTQUFTLEVBQUUsZ0JBQWdCO3dCQUMzQixJQUFJLEVBQUU7NEJBQ0osU0FBUzt5QkFDVjtxQkFDRixDQUFDLENBQUE7Z0JBQ0osQ0FBQztZQUNILENBQUM7U0FDRixDQUFBO0lBQ0gsQ0FBQztDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVTTGludFV0aWxzIH0gZnJvbSAnQHR5cGVzY3JpcHQtZXNsaW50L3V0aWxzJ1xuXG5jb25zdCBjcmVhdGVSdWxlID0gRVNMaW50VXRpbHMuUnVsZUNyZWF0b3IoXG4gIChuYW1lKSA9PiBgaHR0cHM6Ly9naXRodWIuY29tL2dhbGxvcC1zb2Z0d2FyZS9jYW5vbi9ibG9iL21haW4vcGF0dGVybnMvMDAxLXNlcnZlci1maXJzdC1ibG9ja3MubWRgXG4pXG5cbnR5cGUgTWVzc2FnZUlkcyA9ICdub0NsaWVudEJsb2NrcydcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUnVsZTxbXSwgTWVzc2FnZUlkcz4oe1xuICBuYW1lOiAnbm8tY2xpZW50LWJsb2NrcycsXG4gIG1ldGE6IHtcbiAgICB0eXBlOiAnc3VnZ2VzdGlvbicsXG4gICAgZG9jczoge1xuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICdCbG9jayBjb21wb25lbnRzIGluIHNyYy9ibG9ja3MvIHNob3VsZCBub3QgdXNlIFwidXNlIGNsaWVudFwiLiBFeHRyYWN0IGNsaWVudC1zaWRlIGxvZ2ljIGludG8gc2VwYXJhdGUgY29tcG9uZW50cy4nLFxuICAgICAgLy8gQ2Fub24gcmVmZXJlbmNlXG4gICAgICAvLyBAdHMtZXhwZWN0LWVycm9yIC0gY3VzdG9tIHByb3BlcnR5IGZvciBDYW5vbiBpbnRlZ3JhdGlvblxuICAgICAgY2Fub246IHtcbiAgICAgICAgcGF0dGVybjogJzAwMScsXG4gICAgICAgIHRpdGxlOiAnU2VydmVyLUZpcnN0IEJsb2NrcycsXG4gICAgICAgIHVybDogJ2h0dHBzOi8vZ2l0aHViLmNvbS9nYWxsb3Atc29mdHdhcmUvY2Fub24vYmxvYi9tYWluL3BhdHRlcm5zLzAwMS1zZXJ2ZXItZmlyc3QtYmxvY2tzLm1kJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBtZXNzYWdlczoge1xuICAgICAgbm9DbGllbnRCbG9ja3M6XG4gICAgICAgICdbQ2Fub24gMDAxXSBCbG9jayBcInt7YmxvY2tOYW1lfX1cIiB1c2VzIFxcJ3VzZSBjbGllbnRcXCcuIEV4dHJhY3QgaG9va3MgYW5kIGNsaWVudC1zaWRlIGxvZ2ljIGludG8gYSBjb21wb25lbnQgaW4gc3JjL2NvbXBvbmVudHMvLCB0aGVuIGltcG9ydCBpdCBoZXJlLiBTZWU6IFNlcnZlci1GaXJzdCBCbG9ja3MgcGF0dGVybi4nLFxuICAgIH0sXG4gICAgc2NoZW1hOiBbXSxcbiAgfSxcbiAgZGVmYXVsdE9wdGlvbnM6IFtdLFxuICBjcmVhdGUoY29udGV4dCkge1xuICAgIGNvbnN0IGZpbGVuYW1lID0gY29udGV4dC5maWxlbmFtZSB8fCBjb250ZXh0LmdldEZpbGVuYW1lKClcblxuICAgIC8vIE9ubHkgY2hlY2sgZmlsZXMgaW4gc3JjL2Jsb2Nrcy9cbiAgICBpZiAoIWZpbGVuYW1lLmluY2x1ZGVzKCcvYmxvY2tzLycpICYmICFmaWxlbmFtZS5pbmNsdWRlcygnXFxcXGJsb2Nrc1xcXFwnKSkge1xuICAgICAgcmV0dXJuIHt9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIC8vIENoZWNrIGZvciAndXNlIGNsaWVudCcgZGlyZWN0aXZlIGF0IHRoZSB0b3Agb2YgdGhlIGZpbGVcbiAgICAgIEV4cHJlc3Npb25TdGF0ZW1lbnQobm9kZSkge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgbm9kZS5leHByZXNzaW9uLnR5cGUgPT09ICdMaXRlcmFsJyAmJlxuICAgICAgICAgIG5vZGUuZXhwcmVzc2lvbi52YWx1ZSA9PT0gJ3VzZSBjbGllbnQnXG4gICAgICAgICkge1xuICAgICAgICAgIC8vIEV4dHJhY3QgYmxvY2sgbmFtZSBmcm9tIGZpbGVuYW1lXG4gICAgICAgICAgY29uc3QgbWF0Y2ggPSBmaWxlbmFtZS5tYXRjaCgvKFteL1xcXFxdKylcXC50c3g/JC8pXG4gICAgICAgICAgY29uc3QgYmxvY2tOYW1lID0gbWF0Y2ggPyBtYXRjaFsxXSA6ICd1bmtub3duJ1xuXG4gICAgICAgICAgY29udGV4dC5yZXBvcnQoe1xuICAgICAgICAgICAgbm9kZSxcbiAgICAgICAgICAgIG1lc3NhZ2VJZDogJ25vQ2xpZW50QmxvY2tzJyxcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgYmxvY2tOYW1lLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9LFxuICAgIH1cbiAgfSxcbn0pXG4iXX0=