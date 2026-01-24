import Image, { ImageProps, StaticImageData } from 'next/image'

type Props = Omit<ImageProps, 'src' | 'preload' | 'loading'> & {
  srcLight: string | StaticImageData
  srcDark: string | StaticImageData
}

export default function ThemeImage(props: Props) {
    const { srcLight, srcDark, alt, ...rest } = props

    return (
    <>
      <Image {...rest} src={srcLight} className='imgLight' alt={alt} />
      <Image {...rest} src={srcDark} className='imgDark' alt={alt} />
    </>
    )
}