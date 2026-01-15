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
          // Skip spans that are inside typography components (Heading, Paragraph, Label, etc.)
          // These are used for inline styling effects like gradient text, emphasis, etc.
          const typographyComponents = ['Heading', 'Paragraph', 'Label', 'Span', 'Quote', 'Subheading', 'Accent']
          
          let parent = node.parent
          while (parent) {
            if (
              parent.type === 'JSXElement' &&
              parent.openingElement?.name?.name &&
              typographyComponents.includes(parent.openingElement.name.name)
            ) {
              // Span is inside a typography component, skip warning
              return
            }
            parent = parent.parent
          }

          // Check className for text-related classes and gradient text
          let hasTextClasses = false
          let isGradientText = false

          node.attributes?.forEach((attr: any) => {
            if (attr.type === 'JSXAttribute' && attr.name?.name === 'className') {
              const value = attr.value?.value || ''
              // Check for text-related Tailwind classes
              if (/\b(text-|font-|leading-|tracking-)/.test(value)) {
                hasTextClasses = true
              }
              // Skip gradient text spans (bg-clip-text is used for gradient text effects)
              if (/\bbg-clip-text\b/.test(value)) {
                isGradientText = true
              }
            }
          })

          // Only warn if the span has text styling and is not gradient text
          if (hasTextClasses && !isGradientText) {
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
