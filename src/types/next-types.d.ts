/// <reference types="next/types/global" />
/// <reference types="next/image-types/global" />

declare module '*.jpg' {
  const content: import('../node_modules/next/image').StaticImageData
  export default content
}

declare module '*.jpeg' {
  const content: import('../node_modules/next/image').StaticImageData
  export default content
}

declare module '*.png' {
  const content: import('../node_modules/next/image').StaticImageData
  export default content
}

declare module 'next/image' {
  import { ImageProps as NextImageProps } from 'next/dist/client/image'
  export default function Image(props: NextImageProps): JSX.Element
} 