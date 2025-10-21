import { visit } from 'unist-util-visit'

/**
 * Remark plugin to compress JSX elements by removing newlines between opening tags and text children
 * This prevents MDX from inserting unwanted <p> tags around text in JSX elements
 */
export function remarkCompressJsx() {
  return (tree) => {
    visit(tree, (node) => {
      // Handle MDX JSX elements
      if (
        node.type === 'mdxJsxFlowElement' ||
        node.type === 'mdxJsxTextElement'
      ) {
        if (node.children && node.children.length > 0) {
          // Recursively flatten paragraph nodes that only contain text
          const flattenChildren = (children) => {
            const flattened = []
            for (const child of children) {
              // If we find a paragraph node with only text/inline content, unwrap it
              if (child.type === 'paragraph') {
                flattened.push(...flattenChildren(child.children))
              } else if (child.type === 'text') {
                flattened.push(child)
              } else {
                flattened.push(child)
              }
            }
            return flattened
          }

          node.children = flattenChildren(node.children)

          // Process children to remove leading/trailing whitespace from text nodes
          node.children = node.children
            .map((child, index) => {
              if (child.type === 'text') {
                // If this is the first child, trim leading whitespace
                if (index === 0) {
                  child.value = child.value.replace(/^\s+/, '')
                }
                // If this is the last child, trim trailing whitespace
                if (index === node.children.length - 1) {
                  child.value = child.value.replace(/\s+$/, '')
                }
                // Replace internal newlines and multiple spaces with single space
                child.value = child.value.replace(/\s+/g, ' ')
              }
              return child
            })
            .filter((child) => {
              // Remove empty text nodes
              return !(child.type === 'text' && child.value === '')
            })
        }
      }
    })
  }
}
