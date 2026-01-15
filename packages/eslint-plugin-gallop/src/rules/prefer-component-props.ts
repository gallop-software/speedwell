import { ESLintUtils, TSESTree } from '@typescript-eslint/utils'

const createRule = ESLintUtils.RuleCreator(
  (name) => `https://github.com/gallop-software/eslint-plugin-gallop/blob/main/docs/rules/${name}.md`
)

type MessageIds = 'preferComponentProps'

// Map of component names to their style props and corresponding Tailwind patterns
const componentPropMappings: Record<string, Record<string, RegExp>> = {
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
}

export default createRule<[], MessageIds>({
  name: 'prefer-component-props',
  meta: {
    type: 'suggestion',
    docs: {
      description:
        'Prefer using component props (margin, color, etc.) over className for style values that have dedicated props.',
    },
    messages: {
      preferComponentProps:
        '"{{className}}" in className should use the "{{propName}}" prop instead. Replace className="{{className}}" with {{propName}}="{{className}}".',
    },
    schema: [],
  },
  defaultOptions: [],
  create(context) {
    return {
      JSXOpeningElement(node) {
        // Get the component name
        if (node.name.type !== 'JSXIdentifier') return
        const componentName = node.name.name

        // Check if this component has prop mappings
        const propMappings = componentPropMappings[componentName]
        if (!propMappings) return

        // Find the className attribute
        const classNameAttr = node.attributes.find(
          (attr): attr is TSESTree.JSXAttribute =>
            attr.type === 'JSXAttribute' &&
            attr.name.type === 'JSXIdentifier' &&
            attr.name.name === 'className'
        )

        if (!classNameAttr || !classNameAttr.value) return

        // Extract class string value
        let classValue: string | null = null

        if (classNameAttr.value.type === 'Literal') {
          classValue = String(classNameAttr.value.value)
        } else if (
          classNameAttr.value.type === 'JSXExpressionContainer' &&
          classNameAttr.value.expression.type === 'Literal'
        ) {
          classValue = String(classNameAttr.value.expression.value)
        }

        if (!classValue) return

        // Split into individual classes and check each
        const classes = classValue.split(/\s+/).filter(Boolean)

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
              })
              break // Only report once per class
            }
          }
        }
      },
    }
  },
})
