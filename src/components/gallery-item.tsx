import { Image, type ImageProps } from '@/components/image'

// GalleryItem component for gallery items - just Image with wrap=false. Set
// href to the full-size image to open it in the lightbox.
export interface GalleryItemProps extends Omit<ImageProps, 'wrap'> {}

export function GalleryItem(props: GalleryItemProps) {
  return (
    <Image
      {...props}
      alt={props.alt || ''}
      wrap={false}
    />
  )
}
