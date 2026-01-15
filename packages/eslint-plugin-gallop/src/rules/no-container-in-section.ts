import { ESLintUtils, TSESTree } from '@typescript-eslint/utils'

const createRule = ESLintUtils.RuleCreator(
  (name) => `https://github.com/gallop-software/eslint-plugin-gallop/blob/main/docs/rules/${name}.md`
)

type MessageIds = 'noContainerInSection'

export default createRule<[], MessageIds>({
  name: 'no-container-in-section',
  meta: {
    type: 'suggestion',
    docs: {
      description:
        'Container should not be used inside Section. Section already provides containment via innerAlign prop.',
    },
    messages: {
      noContainerInSection:
        'Container inside Section is redundant. Section already provides max-width containment. Use Section\'s innerAlign prop instead, or remove the Container.',
    },
    schema: [],
  },
  defaultOptions: [],
  create(context) {
    // Track if we're inside a Section component
    let sectionDepth = 0

    function isJSXElementNamed(
      node: TSESTree.JSXOpeningElement,
      name: string
    ): boolean {
      return (
        node.name.type === 'JSXIdentifier' &&
        node.name.name === name
      )
    }

    return {
      JSXOpeningElement(node) {
        // Check if entering a Section
        if (isJSXElementNamed(node, 'Section')) {
          sectionDepth++
        }

        // Check if we're inside a Section and found a Container
        if (sectionDepth > 0 && isJSXElementNamed(node, 'Container')) {
          context.report({
            node,
            messageId: 'noContainerInSection',
          })
        }
      },

      JSXClosingElement(node) {
        // Check if leaving a Section
        if (
          node.name.type === 'JSXIdentifier' &&
          node.name.name === 'Section'
        ) {
          sectionDepth--
        }
      },
    }
  },
})
