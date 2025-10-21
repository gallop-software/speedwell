import React from 'react'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { remarkCompressJsx } from '../../_scripts/remark-compress-jsx.mjs'
import { Heading } from './heading'
import { Paragraph } from './paragraph'
import { Image } from './image'
import { Gallery } from './gallery'
import { Button } from './button'
import { Buttons } from './buttons'
import { GalleryItem } from './gallery-item'
import { Link } from './link'
import { List, Li } from './list'

// Custom component mapping for blog posts - different from mdx-components.tsx
const components = {
  // Map h1 to Heading instead of PageHeader (which is used in mdx-components.tsx)
  h1: (props: any) => (
    <Heading
      as="h2"
      {...props}
    />
  ),
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
  img: (props: any) => (
    <Image
      {...props}
      alt={props.alt || ''}
    />
  ),
  a: (props: any) => <Link {...props} />,
  ul: (props: any) => <List {...props} />,
  ol: (props: any) => (
    <List
      ordered
      {...props}
    />
  ),
  li: (props: any) => <Li {...props} />,
  // Custom components available in blog posts
  Gallery,
  Image,
  Button,
  Buttons,
  List,
  Li,
  Paragraph,
  GalleryItem,
  Link,
}

interface MarkdownProps {
  content: string
}

export function Markdown({ content }: MarkdownProps) {
  return (
    <MDXRemote
      source={content}
      components={components}
      options={{
        mdxOptions: {
          remarkPlugins: [remarkCompressJsx],
        },
      }}
    />
  )
}
