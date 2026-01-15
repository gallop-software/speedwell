"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@typescript-eslint/utils");
const createRule = utils_1.ESLintUtils.RuleCreator((name) => `https://github.com/gallop-software/eslint-plugin-gallop/blob/main/docs/rules/${name}.md`);
// Map of component names to their style props and corresponding Tailwind patterns
const componentPropMappings = {
    Paragraph: {
        margin: /^m[btlrxyse]?-/,
        color: /^text-(body|contrast|accent|white|black)/,
        fontSize: /^text-(xs|sm|base|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl|8xl|9xl)$/,
        lineHeight: /^leading-/,
        textAlign: /^text-(left|center|right|justify)$/,
        fontWeight: /^font-(thin|extralight|light|normal|medium|semibold|bold|extrabold|black)$/,
    },
    Heading: {
        margin: /^m[btlrxyse]?-/,
        color: /^text-(body|contrast|accent|white|black)/,
        fontSize: /^text-(xs|sm|base|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl|8xl|9xl)$/,
        lineHeight: /^leading-/,
        textAlign: /^text-(left|center|right|justify)$/,
        fontWeight: /^font-(thin|extralight|light|normal|medium|semibold|bold|extrabold|black)$/,
    },
    Accent: {
        margin: /^m[btlrxyse]?-/,
        color: /^text-(body|contrast|accent|white|black)/,
        size: /^text-(xs|sm|base|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl|8xl|9xl)$/,
        textAlign: /^text-(left|center|right|justify)$/,
    },
    Button: {
        margin: /^m[btlrxyse]?-/,
    },
    Label: {
        margin: /^m[btlrxyse]?-/,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlZmVyLWNvbXBvbmVudC1wcm9wcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlcy9wcmVmZXItY29tcG9uZW50LXByb3BzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsb0RBQWdFO0FBRWhFLE1BQU0sVUFBVSxHQUFHLG1CQUFXLENBQUMsV0FBVyxDQUN4QyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsZ0ZBQWdGLElBQUksS0FBSyxDQUNwRyxDQUFBO0FBSUQsa0ZBQWtGO0FBQ2xGLE1BQU0scUJBQXFCLEdBQTJDO0lBQ3BFLFNBQVMsRUFBRTtRQUNULE1BQU0sRUFBRSxnQkFBZ0I7UUFDeEIsS0FBSyxFQUFFLDBDQUEwQztRQUNqRCxRQUFRLEVBQUUsMkRBQTJEO1FBQ3JFLFVBQVUsRUFBRSxXQUFXO1FBQ3ZCLFNBQVMsRUFBRSxvQ0FBb0M7UUFDL0MsVUFBVSxFQUFFLDRFQUE0RTtLQUN6RjtJQUNELE9BQU8sRUFBRTtRQUNQLE1BQU0sRUFBRSxnQkFBZ0I7UUFDeEIsS0FBSyxFQUFFLDBDQUEwQztRQUNqRCxRQUFRLEVBQUUsMkRBQTJEO1FBQ3JFLFVBQVUsRUFBRSxXQUFXO1FBQ3ZCLFNBQVMsRUFBRSxvQ0FBb0M7UUFDL0MsVUFBVSxFQUFFLDRFQUE0RTtLQUN6RjtJQUNELE1BQU0sRUFBRTtRQUNOLE1BQU0sRUFBRSxnQkFBZ0I7UUFDeEIsS0FBSyxFQUFFLDBDQUEwQztRQUNqRCxJQUFJLEVBQUUsMkRBQTJEO1FBQ2pFLFNBQVMsRUFBRSxvQ0FBb0M7S0FDaEQ7SUFDRCxNQUFNLEVBQUU7UUFDTixNQUFNLEVBQUUsZ0JBQWdCO0tBQ3pCO0lBQ0QsS0FBSyxFQUFFO1FBQ0wsTUFBTSxFQUFFLGdCQUFnQjtRQUN4QixLQUFLLEVBQUUsMENBQTBDO0tBQ2xEO0NBQ0YsQ0FBQTtBQUVELGtCQUFlLFVBQVUsQ0FBaUI7SUFDeEMsSUFBSSxFQUFFLHdCQUF3QjtJQUM5QixJQUFJLEVBQUU7UUFDSixJQUFJLEVBQUUsWUFBWTtRQUNsQixJQUFJLEVBQUU7WUFDSixXQUFXLEVBQ1QsK0dBQStHO1NBQ2xIO1FBQ0QsUUFBUSxFQUFFO1lBQ1Isb0JBQW9CLEVBQ2xCLCtJQUErSTtTQUNsSjtRQUNELE1BQU0sRUFBRSxFQUFFO0tBQ1g7SUFDRCxjQUFjLEVBQUUsRUFBRTtJQUNsQixNQUFNLENBQUMsT0FBTztRQUNaLE9BQU87WUFDTCxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNwQix5QkFBeUI7Z0JBQ3pCLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssZUFBZTtvQkFBRSxPQUFNO2dCQUM5QyxNQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQTtnQkFFcEMsNENBQTRDO2dCQUM1QyxNQUFNLFlBQVksR0FBRyxxQkFBcUIsQ0FBQyxhQUFhLENBQUMsQ0FBQTtnQkFDekQsSUFBSSxDQUFDLFlBQVk7b0JBQUUsT0FBTTtnQkFFekIsK0JBQStCO2dCQUMvQixNQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FDeEMsQ0FBQyxJQUFJLEVBQWlDLEVBQUUsQ0FDdEMsSUFBSSxDQUFDLElBQUksS0FBSyxjQUFjO29CQUM1QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxlQUFlO29CQUNsQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxXQUFXLENBQ2pDLENBQUE7Z0JBRUQsSUFBSSxDQUFDLGFBQWEsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLO29CQUFFLE9BQU07Z0JBRWxELDZCQUE2QjtnQkFDN0IsSUFBSSxVQUFVLEdBQWtCLElBQUksQ0FBQTtnQkFFcEMsSUFBSSxhQUFhLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxTQUFTLEVBQUUsQ0FBQztvQkFDM0MsVUFBVSxHQUFHLE1BQU0sQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFBO2dCQUNoRCxDQUFDO3FCQUFNLElBQ0wsYUFBYSxDQUFDLEtBQUssQ0FBQyxJQUFJLEtBQUssd0JBQXdCO29CQUNyRCxhQUFhLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEtBQUssU0FBUyxFQUNqRCxDQUFDO29CQUNELFVBQVUsR0FBRyxNQUFNLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUE7Z0JBQzNELENBQUM7Z0JBRUQsSUFBSSxDQUFDLFVBQVU7b0JBQUUsT0FBTTtnQkFFdkIsK0NBQStDO2dCQUMvQyxNQUFNLE9BQU8sR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQTtnQkFFdkQsS0FBSyxNQUFNLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztvQkFDMUIsS0FBSyxNQUFNLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQzt3QkFDL0QsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUM7NEJBQ3RCLE9BQU8sQ0FBQyxNQUFNLENBQUM7Z0NBQ2IsSUFBSSxFQUFFLGFBQWE7Z0NBQ25CLFNBQVMsRUFBRSxzQkFBc0I7Z0NBQ2pDLElBQUksRUFBRTtvQ0FDSixTQUFTLEVBQUUsR0FBRztvQ0FDZCxRQUFRO2lDQUNUOzZCQUNGLENBQUMsQ0FBQTs0QkFDRixNQUFLLENBQUMsNkJBQTZCO3dCQUNyQyxDQUFDO29CQUNILENBQUM7Z0JBQ0gsQ0FBQztZQUNILENBQUM7U0FDRixDQUFBO0lBQ0gsQ0FBQztDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVTTGludFV0aWxzLCBUU0VTVHJlZSB9IGZyb20gJ0B0eXBlc2NyaXB0LWVzbGludC91dGlscydcblxuY29uc3QgY3JlYXRlUnVsZSA9IEVTTGludFV0aWxzLlJ1bGVDcmVhdG9yKFxuICAobmFtZSkgPT4gYGh0dHBzOi8vZ2l0aHViLmNvbS9nYWxsb3Atc29mdHdhcmUvZXNsaW50LXBsdWdpbi1nYWxsb3AvYmxvYi9tYWluL2RvY3MvcnVsZXMvJHtuYW1lfS5tZGBcbilcblxudHlwZSBNZXNzYWdlSWRzID0gJ3ByZWZlckNvbXBvbmVudFByb3BzJ1xuXG4vLyBNYXAgb2YgY29tcG9uZW50IG5hbWVzIHRvIHRoZWlyIHN0eWxlIHByb3BzIGFuZCBjb3JyZXNwb25kaW5nIFRhaWx3aW5kIHBhdHRlcm5zXG5jb25zdCBjb21wb25lbnRQcm9wTWFwcGluZ3M6IFJlY29yZDxzdHJpbmcsIFJlY29yZDxzdHJpbmcsIFJlZ0V4cD4+ID0ge1xuICBQYXJhZ3JhcGg6IHtcbiAgICBtYXJnaW46IC9ebVtidGxyeHlzZV0/LS8sXG4gICAgY29sb3I6IC9edGV4dC0oYm9keXxjb250cmFzdHxhY2NlbnR8d2hpdGV8YmxhY2spLyxcbiAgICBmb250U2l6ZTogL150ZXh0LSh4c3xzbXxiYXNlfGxnfHhsfDJ4bHwzeGx8NHhsfDV4bHw2eGx8N3hsfDh4bHw5eGwpJC8sXG4gICAgbGluZUhlaWdodDogL15sZWFkaW5nLS8sXG4gICAgdGV4dEFsaWduOiAvXnRleHQtKGxlZnR8Y2VudGVyfHJpZ2h0fGp1c3RpZnkpJC8sXG4gICAgZm9udFdlaWdodDogL15mb250LSh0aGlufGV4dHJhbGlnaHR8bGlnaHR8bm9ybWFsfG1lZGl1bXxzZW1pYm9sZHxib2xkfGV4dHJhYm9sZHxibGFjaykkLyxcbiAgfSxcbiAgSGVhZGluZzoge1xuICAgIG1hcmdpbjogL15tW2J0bHJ4eXNlXT8tLyxcbiAgICBjb2xvcjogL150ZXh0LShib2R5fGNvbnRyYXN0fGFjY2VudHx3aGl0ZXxibGFjaykvLFxuICAgIGZvbnRTaXplOiAvXnRleHQtKHhzfHNtfGJhc2V8bGd8eGx8MnhsfDN4bHw0eGx8NXhsfDZ4bHw3eGx8OHhsfDl4bCkkLyxcbiAgICBsaW5lSGVpZ2h0OiAvXmxlYWRpbmctLyxcbiAgICB0ZXh0QWxpZ246IC9edGV4dC0obGVmdHxjZW50ZXJ8cmlnaHR8anVzdGlmeSkkLyxcbiAgICBmb250V2VpZ2h0OiAvXmZvbnQtKHRoaW58ZXh0cmFsaWdodHxsaWdodHxub3JtYWx8bWVkaXVtfHNlbWlib2xkfGJvbGR8ZXh0cmFib2xkfGJsYWNrKSQvLFxuICB9LFxuICBBY2NlbnQ6IHtcbiAgICBtYXJnaW46IC9ebVtidGxyeHlzZV0/LS8sXG4gICAgY29sb3I6IC9edGV4dC0oYm9keXxjb250cmFzdHxhY2NlbnR8d2hpdGV8YmxhY2spLyxcbiAgICBzaXplOiAvXnRleHQtKHhzfHNtfGJhc2V8bGd8eGx8MnhsfDN4bHw0eGx8NXhsfDZ4bHw3eGx8OHhsfDl4bCkkLyxcbiAgICB0ZXh0QWxpZ246IC9edGV4dC0obGVmdHxjZW50ZXJ8cmlnaHR8anVzdGlmeSkkLyxcbiAgfSxcbiAgQnV0dG9uOiB7XG4gICAgbWFyZ2luOiAvXm1bYnRscnh5c2VdPy0vLFxuICB9LFxuICBMYWJlbDoge1xuICAgIG1hcmdpbjogL15tW2J0bHJ4eXNlXT8tLyxcbiAgICBjb2xvcjogL150ZXh0LShib2R5fGNvbnRyYXN0fGFjY2VudHx3aGl0ZXxibGFjaykvLFxuICB9LFxufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVSdWxlPFtdLCBNZXNzYWdlSWRzPih7XG4gIG5hbWU6ICdwcmVmZXItY29tcG9uZW50LXByb3BzJyxcbiAgbWV0YToge1xuICAgIHR5cGU6ICdzdWdnZXN0aW9uJyxcbiAgICBkb2NzOiB7XG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgJ1ByZWZlciB1c2luZyBjb21wb25lbnQgcHJvcHMgKG1hcmdpbiwgY29sb3IsIGV0Yy4pIG92ZXIgY2xhc3NOYW1lIGZvciBzdHlsZSB2YWx1ZXMgdGhhdCBoYXZlIGRlZGljYXRlZCBwcm9wcy4nLFxuICAgIH0sXG4gICAgbWVzc2FnZXM6IHtcbiAgICAgIHByZWZlckNvbXBvbmVudFByb3BzOlxuICAgICAgICAnXCJ7e2NsYXNzTmFtZX19XCIgaW4gY2xhc3NOYW1lIHNob3VsZCB1c2UgdGhlIFwie3twcm9wTmFtZX19XCIgcHJvcCBpbnN0ZWFkLiBSZXBsYWNlIGNsYXNzTmFtZT1cInt7Y2xhc3NOYW1lfX1cIiB3aXRoIHt7cHJvcE5hbWV9fT1cInt7Y2xhc3NOYW1lfX1cIi4nLFxuICAgIH0sXG4gICAgc2NoZW1hOiBbXSxcbiAgfSxcbiAgZGVmYXVsdE9wdGlvbnM6IFtdLFxuICBjcmVhdGUoY29udGV4dCkge1xuICAgIHJldHVybiB7XG4gICAgICBKU1hPcGVuaW5nRWxlbWVudChub2RlKSB7XG4gICAgICAgIC8vIEdldCB0aGUgY29tcG9uZW50IG5hbWVcbiAgICAgICAgaWYgKG5vZGUubmFtZS50eXBlICE9PSAnSlNYSWRlbnRpZmllcicpIHJldHVyblxuICAgICAgICBjb25zdCBjb21wb25lbnROYW1lID0gbm9kZS5uYW1lLm5hbWVcblxuICAgICAgICAvLyBDaGVjayBpZiB0aGlzIGNvbXBvbmVudCBoYXMgcHJvcCBtYXBwaW5nc1xuICAgICAgICBjb25zdCBwcm9wTWFwcGluZ3MgPSBjb21wb25lbnRQcm9wTWFwcGluZ3NbY29tcG9uZW50TmFtZV1cbiAgICAgICAgaWYgKCFwcm9wTWFwcGluZ3MpIHJldHVyblxuXG4gICAgICAgIC8vIEZpbmQgdGhlIGNsYXNzTmFtZSBhdHRyaWJ1dGVcbiAgICAgICAgY29uc3QgY2xhc3NOYW1lQXR0ciA9IG5vZGUuYXR0cmlidXRlcy5maW5kKFxuICAgICAgICAgIChhdHRyKTogYXR0ciBpcyBUU0VTVHJlZS5KU1hBdHRyaWJ1dGUgPT5cbiAgICAgICAgICAgIGF0dHIudHlwZSA9PT0gJ0pTWEF0dHJpYnV0ZScgJiZcbiAgICAgICAgICAgIGF0dHIubmFtZS50eXBlID09PSAnSlNYSWRlbnRpZmllcicgJiZcbiAgICAgICAgICAgIGF0dHIubmFtZS5uYW1lID09PSAnY2xhc3NOYW1lJ1xuICAgICAgICApXG5cbiAgICAgICAgaWYgKCFjbGFzc05hbWVBdHRyIHx8ICFjbGFzc05hbWVBdHRyLnZhbHVlKSByZXR1cm5cblxuICAgICAgICAvLyBFeHRyYWN0IGNsYXNzIHN0cmluZyB2YWx1ZVxuICAgICAgICBsZXQgY2xhc3NWYWx1ZTogc3RyaW5nIHwgbnVsbCA9IG51bGxcblxuICAgICAgICBpZiAoY2xhc3NOYW1lQXR0ci52YWx1ZS50eXBlID09PSAnTGl0ZXJhbCcpIHtcbiAgICAgICAgICBjbGFzc1ZhbHVlID0gU3RyaW5nKGNsYXNzTmFtZUF0dHIudmFsdWUudmFsdWUpXG4gICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgY2xhc3NOYW1lQXR0ci52YWx1ZS50eXBlID09PSAnSlNYRXhwcmVzc2lvbkNvbnRhaW5lcicgJiZcbiAgICAgICAgICBjbGFzc05hbWVBdHRyLnZhbHVlLmV4cHJlc3Npb24udHlwZSA9PT0gJ0xpdGVyYWwnXG4gICAgICAgICkge1xuICAgICAgICAgIGNsYXNzVmFsdWUgPSBTdHJpbmcoY2xhc3NOYW1lQXR0ci52YWx1ZS5leHByZXNzaW9uLnZhbHVlKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFjbGFzc1ZhbHVlKSByZXR1cm5cblxuICAgICAgICAvLyBTcGxpdCBpbnRvIGluZGl2aWR1YWwgY2xhc3NlcyBhbmQgY2hlY2sgZWFjaFxuICAgICAgICBjb25zdCBjbGFzc2VzID0gY2xhc3NWYWx1ZS5zcGxpdCgvXFxzKy8pLmZpbHRlcihCb29sZWFuKVxuXG4gICAgICAgIGZvciAoY29uc3QgY2xzIG9mIGNsYXNzZXMpIHtcbiAgICAgICAgICBmb3IgKGNvbnN0IFtwcm9wTmFtZSwgcGF0dGVybl0gb2YgT2JqZWN0LmVudHJpZXMocHJvcE1hcHBpbmdzKSkge1xuICAgICAgICAgICAgaWYgKHBhdHRlcm4udGVzdChjbHMpKSB7XG4gICAgICAgICAgICAgIGNvbnRleHQucmVwb3J0KHtcbiAgICAgICAgICAgICAgICBub2RlOiBjbGFzc05hbWVBdHRyLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2VJZDogJ3ByZWZlckNvbXBvbmVudFByb3BzJyxcbiAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IGNscyxcbiAgICAgICAgICAgICAgICAgIHByb3BOYW1lLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIGJyZWFrIC8vIE9ubHkgcmVwb3J0IG9uY2UgcGVyIGNsYXNzXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgIH1cbiAgfSxcbn0pXG4iXX0=