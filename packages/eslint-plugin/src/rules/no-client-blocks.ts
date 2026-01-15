import { ESLintUtils } from '@typescript-eslint/utils'

const createRule = ESLintUtils.RuleCreator(
  (name) => `https://github.com/gallop-software/canon/blob/main/patterns/001-server-first-blocks.md`
)

type MessageIds = 'noClientBlocks'

export default createRule<[], MessageIds>({
  name: 'no-client-blocks',
  meta: {
    type: 'suggestion',
    docs: {
      description:
        'Block components in src/blocks/ should not use "use client". Extract client-side logic into separate components.',
      // Canon reference
      // @ts-expect-error - custom property for Canon integration
      canon: {
        pattern: '001',
        title: 'Server-First Blocks',
        url: 'https://github.com/gallop-software/canon/blob/main/patterns/001-server-first-blocks.md',
      },
    },
    messages: {
      noClientBlocks:
        '[Canon 001] Block "{{blockName}}" uses \'use client\'. Extract hooks and client-side logic into a component in src/components/, then import it here. See: Server-First Blocks pattern.',
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
