import type { Rule } from 'eslint'

const rule: Rule.RuleModule = {
  meta: {
    type: 'suggestion',
    docs: {
      description:
        'Prefer Paragraph and Span components over raw <p> and <span> elements in blocks',
      recommended: true,
    },
    messages: {
      useParagraph:
        'Use the Paragraph component instead of <p>. Import from @/components: import { Paragraph } from "@/components"',
      useSpan:
        'Use the Span component instead of <span> for text content. Import from @/components: import { Span } from "@/components"',
    },
    schema: [],
  },

  create(context) {
    const filename = context.filename || context.getFilename()

    // Only apply to block files
    if (!filename.includes('/blocks/')) {
      return {}
    }

    return {
      JSXOpeningElement(node: any) {
        const elementName = node.name?.name

        if (elementName === 'p') {
          context.report({
            node,
            messageId: 'useParagraph',
          })
        }

        if (elementName === 'span') {
          // Check if this span has text-related classes or content
          // Skip spans that are purely structural (like icons, decorative elements)
          const hasTextClasses = node.attributes?.some((attr: any) => {
            if (attr.type === 'JSXAttribute' && attr.name?.name === 'className') {
              const value = attr.value?.value || ''
              // Check for text-related Tailwind classes
              return /\b(text-|font-|leading-|tracking-)/.test(value)
            }
            return false
          })

          // Only warn if the span appears to contain text styling
          if (hasTextClasses) {
            context.report({
              node,
              messageId: 'useSpan',
            })
          }
        }
      },
    }
  },
}

export default rule
