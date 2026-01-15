import { ESLintUtils } from '@typescript-eslint/utils'

const createRule = ESLintUtils.RuleCreator(
  (name) => `https://github.com/gallop-software/eslint-plugin-gallop/blob/main/docs/rules/${name}.md`
)

type MessageIds = 'noClientBlocks'

export default createRule<[], MessageIds>({
  name: 'no-client-blocks',
  meta: {
    type: 'suggestion',
    docs: {
      description:
        'Block components in src/blocks/ should not use "use client". Extract client-side logic into separate components.',
    },
    messages: {
      noClientBlocks:
        'Block "{{blockName}}" uses \'use client\'. Extract hooks and client-side logic into a component in src/components/, then import it here. This keeps blocks as server components for better performance.',
    },
    schema: [],
  },
  defaultOptions: [],
  create(context) {
    const filename = context.filename || context.getFilename()

    // Only check files in src/blocks/
    if (!filename.includes('/blocks/') && !filename.includes('\\blocks\\')) {
      return {}
    }

    return {
      // Check for 'use client' directive at the top of the file
      ExpressionStatement(node) {
        if (
          node.expression.type === 'Literal' &&
          node.expression.value === 'use client'
        ) {
          // Extract block name from filename
          const match = filename.match(/([^/\\]+)\.tsx?$/)
          const blockName = match ? match[1] : 'unknown'

          context.report({
            node,
            messageId: 'noClientBlocks',
            data: {
              blockName,
            },
          })
        }
      },
    }
  },
})
