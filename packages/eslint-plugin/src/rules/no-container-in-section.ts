import { ESLintUtils, TSESTree } from '@typescript-eslint/utils'

const createRule = ESLintUtils.RuleCreator(
  (name) => `https://github.com/gallop-software/canon/blob/main/patterns/002-layout-hierarchy.md`
)

type MessageIds = 'noContainerInSection'

export default createRule<[], MessageIds>({
  name: 'no-container-in-section',
  meta: {
    type: 'suggestion',
    docs: {
      description:
        'Container should not be used inside Section. Section already provides containment via innerAlign prop.',
      // Canon reference
      // @ts-expect-error - custom property for Canon integration
      canon: {
        pattern: '002',
        title: 'Layout Hierarchy',
        url: 'https://github.com/gallop-software/canon/blob/main/patterns/002-layout-hierarchy.md',
      },
    },
    messages: {
      noContainerInSection:
        '[Canon 002] Container inside Section is redundant. Section already provides max-width containment. Use Section\'s innerAlign prop or a plain div instead.',
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
