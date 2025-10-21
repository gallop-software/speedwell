import type { MDXComponents } from 'mdx/types'
import { PageHeader, Paragraph, Heading, List, Li } from '@/components'

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including inline styles,
// components from other libraries, and more.

const components: MDXComponents = {
  // Customize built-in markdown elements AND HTML elements
  h1: (props: any) => <PageHeader {...props} />,
  h2: (props: any) => (
    <Heading
      as="h2"
      {...props}
    />
  ),
  h3: (props: any) => (
    <Heading
      as="h3"
      {...props}
    />
  ),
  h4: (props: any) => (
    <Heading
      as="h4"
      {...props}
    />
  ),
  h5: (props: any) => (
    <Heading
      as="h5"
      {...props}
    />
  ),
  h6: (props: any) => (
    <Heading
      as="h6"
      {...props}
    />
  ),
  p: (props: any) => <Paragraph {...props} />,
  ul: (props: any) => <List {...props} />,
  ol: (props: any) => (
    <List
      ordered
      {...props}
    />
  ),
  li: (props: any) => <Li {...props} />,
} satisfies MDXComponents

export function useMDXComponents(): MDXComponents {
  return components
}
