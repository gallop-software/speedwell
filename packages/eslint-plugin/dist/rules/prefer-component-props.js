"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@typescript-eslint/utils");
const createRule = utils_1.ESLintUtils.RuleCreator((name) => `https://github.com/gallop-software/eslint-plugin-gallop/blob/main/docs/rules/${name}.md`);
// Map of component names to their style props and corresponding Tailwind patterns
const componentPropMappings = {
    Paragraph: {
        margin: /^m([by])?-/, // m- (all), mb- (bottom), my- (y-axis) - all affect bottom margin
        color: /^text-(body|contrast|accent|white|black)/,
        fontSize: /^text-(xs|sm|base|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl|8xl|9xl)$/,
        lineHeight: /^leading-/,
        textAlign: /^text-(left|center|right|justify)$/,
        fontWeight: /^font-(thin|extralight|light|normal|medium|semibold|bold|extrabold|black)$/,
    },
    Heading: {
        margin: /^m([by])?-/, // m- (all), mb- (bottom), my- (y-axis) - all affect bottom margin
        color: /^text-(body|contrast|accent|white|black)/,
        fontSize: /^text-(xs|sm|base|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl|8xl|9xl)$/,
        lineHeight: /^leading-/,
        textAlign: /^text-(left|center|right|justify)$/,
        fontWeight: /^font-(thin|extralight|light|normal|medium|semibold|bold|extrabold|black)$/,
    },
    Accent: {
        margin: /^m([by])?-/, // m- (all), mb- (bottom), my- (y-axis) - all affect bottom margin
        color: /^text-(body|contrast|accent|white|black)/,
        size: /^text-(xs|sm|base|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl|8xl|9xl)$/,
        textAlign: /^text-(left|center|right|justify)$/,
    },
    Button: {
        margin: /^m([by])?-/, // m- (all), mb- (bottom), my- (y-axis) - all affect bottom margin
    },
    Label: {
        margin: /^m([by])?-/, // m- (all), mb- (bottom), my- (y-axis) - all affect bottom margin
        color: /^text-(body|contrast|accent|white|black)/,
    },
};
exports.default = createRule({
    name: 'prefer-component-props',
    meta: {
        type: 'suggestion',
        docs: {
            description: 'Prefer using component props (margin, color, etc.) over className for style values that have dedicated props.',
        },
        messages: {
            preferComponentProps: '"{{className}}" in className should use the "{{propName}}" prop instead. Replace className="{{className}}" with {{propName}}="{{className}}".',
        },
        schema: [],
    },
    defaultOptions: [],
    create(context) {
        return {
            JSXOpeningElement(node) {
                // Get the component name
                if (node.name.type !== 'JSXIdentifier')
                    return;
                const componentName = node.name.name;
                // Check if this component has prop mappings
                const propMappings = componentPropMappings[componentName];
                if (!propMappings)
                    return;
                // Find the className attribute
                const classNameAttr = node.attributes.find((attr) => attr.type === 'JSXAttribute' &&
                    attr.name.type === 'JSXIdentifier' &&
                    attr.name.name === 'className');
                if (!classNameAttr || !classNameAttr.value)
                    return;
                // Extract class string value
                let classValue = null;
                if (classNameAttr.value.type === 'Literal') {
                    classValue = String(classNameAttr.value.value);
                }
                else if (classNameAttr.value.type === 'JSXExpressionContainer' &&
                    classNameAttr.value.expression.type === 'Literal') {
                    classValue = String(classNameAttr.value.expression.value);
                }
                if (!classValue)
                    return;
                // Split into individual classes and check each
                const classes = classValue.split(/\s+/).filter(Boolean);
                for (const cls of classes) {
                    for (const [propName, pattern] of Object.entries(propMappings)) {
                        if (pattern.test(cls)) {
                            context.report({
                                node: classNameAttr,
                                messageId: 'preferComponentProps',
                                data: {
                                    className: cls,
                                    propName,
                                },
                            });
                            break; // Only report once per class
                        }
                    }
                }
            },
        };
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlZmVyLWNvbXBvbmVudC1wcm9wcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlcy9wcmVmZXItY29tcG9uZW50LXByb3BzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsb0RBQWdFO0FBRWhFLE1BQU0sVUFBVSxHQUFHLG1CQUFXLENBQUMsV0FBVyxDQUN4QyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsZ0ZBQWdGLElBQUksS0FBSyxDQUNwRyxDQUFBO0FBSUQsa0ZBQWtGO0FBQ2xGLE1BQU0scUJBQXFCLEdBQTJDO0lBQ3BFLFNBQVMsRUFBRTtRQUNULE1BQU0sRUFBRSxZQUFZLEVBQUUsa0VBQWtFO1FBQ3hGLEtBQUssRUFBRSwwQ0FBMEM7UUFDakQsUUFBUSxFQUFFLDJEQUEyRDtRQUNyRSxVQUFVLEVBQUUsV0FBVztRQUN2QixTQUFTLEVBQUUsb0NBQW9DO1FBQy9DLFVBQVUsRUFBRSw0RUFBNEU7S0FDekY7SUFDRCxPQUFPLEVBQUU7UUFDUCxNQUFNLEVBQUUsWUFBWSxFQUFFLGtFQUFrRTtRQUN4RixLQUFLLEVBQUUsMENBQTBDO1FBQ2pELFFBQVEsRUFBRSwyREFBMkQ7UUFDckUsVUFBVSxFQUFFLFdBQVc7UUFDdkIsU0FBUyxFQUFFLG9DQUFvQztRQUMvQyxVQUFVLEVBQUUsNEVBQTRFO0tBQ3pGO0lBQ0QsTUFBTSxFQUFFO1FBQ04sTUFBTSxFQUFFLFlBQVksRUFBRSxrRUFBa0U7UUFDeEYsS0FBSyxFQUFFLDBDQUEwQztRQUNqRCxJQUFJLEVBQUUsMkRBQTJEO1FBQ2pFLFNBQVMsRUFBRSxvQ0FBb0M7S0FDaEQ7SUFDRCxNQUFNLEVBQUU7UUFDTixNQUFNLEVBQUUsWUFBWSxFQUFFLGtFQUFrRTtLQUN6RjtJQUNELEtBQUssRUFBRTtRQUNMLE1BQU0sRUFBRSxZQUFZLEVBQUUsa0VBQWtFO1FBQ3hGLEtBQUssRUFBRSwwQ0FBMEM7S0FDbEQ7Q0FDRixDQUFBO0FBRUQsa0JBQWUsVUFBVSxDQUFpQjtJQUN4QyxJQUFJLEVBQUUsd0JBQXdCO0lBQzlCLElBQUksRUFBRTtRQUNKLElBQUksRUFBRSxZQUFZO1FBQ2xCLElBQUksRUFBRTtZQUNKLFdBQVcsRUFDVCwrR0FBK0c7U0FDbEg7UUFDRCxRQUFRLEVBQUU7WUFDUixvQkFBb0IsRUFDbEIsK0lBQStJO1NBQ2xKO1FBQ0QsTUFBTSxFQUFFLEVBQUU7S0FDWDtJQUNELGNBQWMsRUFBRSxFQUFFO0lBQ2xCLE1BQU0sQ0FBQyxPQUFPO1FBQ1osT0FBTztZQUNMLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3BCLHlCQUF5QjtnQkFDekIsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxlQUFlO29CQUFFLE9BQU07Z0JBQzlDLE1BQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFBO2dCQUVwQyw0Q0FBNEM7Z0JBQzVDLE1BQU0sWUFBWSxHQUFHLHFCQUFxQixDQUFDLGFBQWEsQ0FBQyxDQUFBO2dCQUN6RCxJQUFJLENBQUMsWUFBWTtvQkFBRSxPQUFNO2dCQUV6QiwrQkFBK0I7Z0JBQy9CLE1BQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUN4QyxDQUFDLElBQUksRUFBaUMsRUFBRSxDQUN0QyxJQUFJLENBQUMsSUFBSSxLQUFLLGNBQWM7b0JBQzVCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLGVBQWU7b0JBQ2xDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLFdBQVcsQ0FDakMsQ0FBQTtnQkFFRCxJQUFJLENBQUMsYUFBYSxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUs7b0JBQUUsT0FBTTtnQkFFbEQsNkJBQTZCO2dCQUM3QixJQUFJLFVBQVUsR0FBa0IsSUFBSSxDQUFBO2dCQUVwQyxJQUFJLGFBQWEsQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLFNBQVMsRUFBRSxDQUFDO29CQUMzQyxVQUFVLEdBQUcsTUFBTSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUE7Z0JBQ2hELENBQUM7cUJBQU0sSUFDTCxhQUFhLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyx3QkFBd0I7b0JBQ3JELGFBQWEsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLElBQUksS0FBSyxTQUFTLEVBQ2pELENBQUM7b0JBQ0QsVUFBVSxHQUFHLE1BQU0sQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQTtnQkFDM0QsQ0FBQztnQkFFRCxJQUFJLENBQUMsVUFBVTtvQkFBRSxPQUFNO2dCQUV2QiwrQ0FBK0M7Z0JBQy9DLE1BQU0sT0FBTyxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFBO2dCQUV2RCxLQUFLLE1BQU0sR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO29CQUMxQixLQUFLLE1BQU0sQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDO3dCQUMvRCxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQzs0QkFDdEIsT0FBTyxDQUFDLE1BQU0sQ0FBQztnQ0FDYixJQUFJLEVBQUUsYUFBYTtnQ0FDbkIsU0FBUyxFQUFFLHNCQUFzQjtnQ0FDakMsSUFBSSxFQUFFO29DQUNKLFNBQVMsRUFBRSxHQUFHO29DQUNkLFFBQVE7aUNBQ1Q7NkJBQ0YsQ0FBQyxDQUFBOzRCQUNGLE1BQUssQ0FBQyw2QkFBNkI7d0JBQ3JDLENBQUM7b0JBQ0gsQ0FBQztnQkFDSCxDQUFDO1lBQ0gsQ0FBQztTQUNGLENBQUE7SUFDSCxDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRVNMaW50VXRpbHMsIFRTRVNUcmVlIH0gZnJvbSAnQHR5cGVzY3JpcHQtZXNsaW50L3V0aWxzJ1xuXG5jb25zdCBjcmVhdGVSdWxlID0gRVNMaW50VXRpbHMuUnVsZUNyZWF0b3IoXG4gIChuYW1lKSA9PiBgaHR0cHM6Ly9naXRodWIuY29tL2dhbGxvcC1zb2Z0d2FyZS9lc2xpbnQtcGx1Z2luLWdhbGxvcC9ibG9iL21haW4vZG9jcy9ydWxlcy8ke25hbWV9Lm1kYFxuKVxuXG50eXBlIE1lc3NhZ2VJZHMgPSAncHJlZmVyQ29tcG9uZW50UHJvcHMnXG5cbi8vIE1hcCBvZiBjb21wb25lbnQgbmFtZXMgdG8gdGhlaXIgc3R5bGUgcHJvcHMgYW5kIGNvcnJlc3BvbmRpbmcgVGFpbHdpbmQgcGF0dGVybnNcbmNvbnN0IGNvbXBvbmVudFByb3BNYXBwaW5nczogUmVjb3JkPHN0cmluZywgUmVjb3JkPHN0cmluZywgUmVnRXhwPj4gPSB7XG4gIFBhcmFncmFwaDoge1xuICAgIG1hcmdpbjogL15tKFtieV0pPy0vLCAvLyBtLSAoYWxsKSwgbWItIChib3R0b20pLCBteS0gKHktYXhpcykgLSBhbGwgYWZmZWN0IGJvdHRvbSBtYXJnaW5cbiAgICBjb2xvcjogL150ZXh0LShib2R5fGNvbnRyYXN0fGFjY2VudHx3aGl0ZXxibGFjaykvLFxuICAgIGZvbnRTaXplOiAvXnRleHQtKHhzfHNtfGJhc2V8bGd8eGx8MnhsfDN4bHw0eGx8NXhsfDZ4bHw3eGx8OHhsfDl4bCkkLyxcbiAgICBsaW5lSGVpZ2h0OiAvXmxlYWRpbmctLyxcbiAgICB0ZXh0QWxpZ246IC9edGV4dC0obGVmdHxjZW50ZXJ8cmlnaHR8anVzdGlmeSkkLyxcbiAgICBmb250V2VpZ2h0OiAvXmZvbnQtKHRoaW58ZXh0cmFsaWdodHxsaWdodHxub3JtYWx8bWVkaXVtfHNlbWlib2xkfGJvbGR8ZXh0cmFib2xkfGJsYWNrKSQvLFxuICB9LFxuICBIZWFkaW5nOiB7XG4gICAgbWFyZ2luOiAvXm0oW2J5XSk/LS8sIC8vIG0tIChhbGwpLCBtYi0gKGJvdHRvbSksIG15LSAoeS1heGlzKSAtIGFsbCBhZmZlY3QgYm90dG9tIG1hcmdpblxuICAgIGNvbG9yOiAvXnRleHQtKGJvZHl8Y29udHJhc3R8YWNjZW50fHdoaXRlfGJsYWNrKS8sXG4gICAgZm9udFNpemU6IC9edGV4dC0oeHN8c218YmFzZXxsZ3x4bHwyeGx8M3hsfDR4bHw1eGx8NnhsfDd4bHw4eGx8OXhsKSQvLFxuICAgIGxpbmVIZWlnaHQ6IC9ebGVhZGluZy0vLFxuICAgIHRleHRBbGlnbjogL150ZXh0LShsZWZ0fGNlbnRlcnxyaWdodHxqdXN0aWZ5KSQvLFxuICAgIGZvbnRXZWlnaHQ6IC9eZm9udC0odGhpbnxleHRyYWxpZ2h0fGxpZ2h0fG5vcm1hbHxtZWRpdW18c2VtaWJvbGR8Ym9sZHxleHRyYWJvbGR8YmxhY2spJC8sXG4gIH0sXG4gIEFjY2VudDoge1xuICAgIG1hcmdpbjogL15tKFtieV0pPy0vLCAvLyBtLSAoYWxsKSwgbWItIChib3R0b20pLCBteS0gKHktYXhpcykgLSBhbGwgYWZmZWN0IGJvdHRvbSBtYXJnaW5cbiAgICBjb2xvcjogL150ZXh0LShib2R5fGNvbnRyYXN0fGFjY2VudHx3aGl0ZXxibGFjaykvLFxuICAgIHNpemU6IC9edGV4dC0oeHN8c218YmFzZXxsZ3x4bHwyeGx8M3hsfDR4bHw1eGx8NnhsfDd4bHw4eGx8OXhsKSQvLFxuICAgIHRleHRBbGlnbjogL150ZXh0LShsZWZ0fGNlbnRlcnxyaWdodHxqdXN0aWZ5KSQvLFxuICB9LFxuICBCdXR0b246IHtcbiAgICBtYXJnaW46IC9ebShbYnldKT8tLywgLy8gbS0gKGFsbCksIG1iLSAoYm90dG9tKSwgbXktICh5LWF4aXMpIC0gYWxsIGFmZmVjdCBib3R0b20gbWFyZ2luXG4gIH0sXG4gIExhYmVsOiB7XG4gICAgbWFyZ2luOiAvXm0oW2J5XSk/LS8sIC8vIG0tIChhbGwpLCBtYi0gKGJvdHRvbSksIG15LSAoeS1heGlzKSAtIGFsbCBhZmZlY3QgYm90dG9tIG1hcmdpblxuICAgIGNvbG9yOiAvXnRleHQtKGJvZHl8Y29udHJhc3R8YWNjZW50fHdoaXRlfGJsYWNrKS8sXG4gIH0sXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVJ1bGU8W10sIE1lc3NhZ2VJZHM+KHtcbiAgbmFtZTogJ3ByZWZlci1jb21wb25lbnQtcHJvcHMnLFxuICBtZXRhOiB7XG4gICAgdHlwZTogJ3N1Z2dlc3Rpb24nLFxuICAgIGRvY3M6IHtcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAnUHJlZmVyIHVzaW5nIGNvbXBvbmVudCBwcm9wcyAobWFyZ2luLCBjb2xvciwgZXRjLikgb3ZlciBjbGFzc05hbWUgZm9yIHN0eWxlIHZhbHVlcyB0aGF0IGhhdmUgZGVkaWNhdGVkIHByb3BzLicsXG4gICAgfSxcbiAgICBtZXNzYWdlczoge1xuICAgICAgcHJlZmVyQ29tcG9uZW50UHJvcHM6XG4gICAgICAgICdcInt7Y2xhc3NOYW1lfX1cIiBpbiBjbGFzc05hbWUgc2hvdWxkIHVzZSB0aGUgXCJ7e3Byb3BOYW1lfX1cIiBwcm9wIGluc3RlYWQuIFJlcGxhY2UgY2xhc3NOYW1lPVwie3tjbGFzc05hbWV9fVwiIHdpdGgge3twcm9wTmFtZX19PVwie3tjbGFzc05hbWV9fVwiLicsXG4gICAgfSxcbiAgICBzY2hlbWE6IFtdLFxuICB9LFxuICBkZWZhdWx0T3B0aW9uczogW10sXG4gIGNyZWF0ZShjb250ZXh0KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIEpTWE9wZW5pbmdFbGVtZW50KG5vZGUpIHtcbiAgICAgICAgLy8gR2V0IHRoZSBjb21wb25lbnQgbmFtZVxuICAgICAgICBpZiAobm9kZS5uYW1lLnR5cGUgIT09ICdKU1hJZGVudGlmaWVyJykgcmV0dXJuXG4gICAgICAgIGNvbnN0IGNvbXBvbmVudE5hbWUgPSBub2RlLm5hbWUubmFtZVxuXG4gICAgICAgIC8vIENoZWNrIGlmIHRoaXMgY29tcG9uZW50IGhhcyBwcm9wIG1hcHBpbmdzXG4gICAgICAgIGNvbnN0IHByb3BNYXBwaW5ncyA9IGNvbXBvbmVudFByb3BNYXBwaW5nc1tjb21wb25lbnROYW1lXVxuICAgICAgICBpZiAoIXByb3BNYXBwaW5ncykgcmV0dXJuXG5cbiAgICAgICAgLy8gRmluZCB0aGUgY2xhc3NOYW1lIGF0dHJpYnV0ZVxuICAgICAgICBjb25zdCBjbGFzc05hbWVBdHRyID0gbm9kZS5hdHRyaWJ1dGVzLmZpbmQoXG4gICAgICAgICAgKGF0dHIpOiBhdHRyIGlzIFRTRVNUcmVlLkpTWEF0dHJpYnV0ZSA9PlxuICAgICAgICAgICAgYXR0ci50eXBlID09PSAnSlNYQXR0cmlidXRlJyAmJlxuICAgICAgICAgICAgYXR0ci5uYW1lLnR5cGUgPT09ICdKU1hJZGVudGlmaWVyJyAmJlxuICAgICAgICAgICAgYXR0ci5uYW1lLm5hbWUgPT09ICdjbGFzc05hbWUnXG4gICAgICAgIClcblxuICAgICAgICBpZiAoIWNsYXNzTmFtZUF0dHIgfHwgIWNsYXNzTmFtZUF0dHIudmFsdWUpIHJldHVyblxuXG4gICAgICAgIC8vIEV4dHJhY3QgY2xhc3Mgc3RyaW5nIHZhbHVlXG4gICAgICAgIGxldCBjbGFzc1ZhbHVlOiBzdHJpbmcgfCBudWxsID0gbnVsbFxuXG4gICAgICAgIGlmIChjbGFzc05hbWVBdHRyLnZhbHVlLnR5cGUgPT09ICdMaXRlcmFsJykge1xuICAgICAgICAgIGNsYXNzVmFsdWUgPSBTdHJpbmcoY2xhc3NOYW1lQXR0ci52YWx1ZS52YWx1ZSlcbiAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICBjbGFzc05hbWVBdHRyLnZhbHVlLnR5cGUgPT09ICdKU1hFeHByZXNzaW9uQ29udGFpbmVyJyAmJlxuICAgICAgICAgIGNsYXNzTmFtZUF0dHIudmFsdWUuZXhwcmVzc2lvbi50eXBlID09PSAnTGl0ZXJhbCdcbiAgICAgICAgKSB7XG4gICAgICAgICAgY2xhc3NWYWx1ZSA9IFN0cmluZyhjbGFzc05hbWVBdHRyLnZhbHVlLmV4cHJlc3Npb24udmFsdWUpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWNsYXNzVmFsdWUpIHJldHVyblxuXG4gICAgICAgIC8vIFNwbGl0IGludG8gaW5kaXZpZHVhbCBjbGFzc2VzIGFuZCBjaGVjayBlYWNoXG4gICAgICAgIGNvbnN0IGNsYXNzZXMgPSBjbGFzc1ZhbHVlLnNwbGl0KC9cXHMrLykuZmlsdGVyKEJvb2xlYW4pXG5cbiAgICAgICAgZm9yIChjb25zdCBjbHMgb2YgY2xhc3Nlcykge1xuICAgICAgICAgIGZvciAoY29uc3QgW3Byb3BOYW1lLCBwYXR0ZXJuXSBvZiBPYmplY3QuZW50cmllcyhwcm9wTWFwcGluZ3MpKSB7XG4gICAgICAgICAgICBpZiAocGF0dGVybi50ZXN0KGNscykpIHtcbiAgICAgICAgICAgICAgY29udGV4dC5yZXBvcnQoe1xuICAgICAgICAgICAgICAgIG5vZGU6IGNsYXNzTmFtZUF0dHIsXG4gICAgICAgICAgICAgICAgbWVzc2FnZUlkOiAncHJlZmVyQ29tcG9uZW50UHJvcHMnLFxuICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogY2xzLFxuICAgICAgICAgICAgICAgICAgcHJvcE5hbWUsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgYnJlYWsgLy8gT25seSByZXBvcnQgb25jZSBwZXIgY2xhc3NcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfVxuICB9LFxufSlcbiJdfQ==