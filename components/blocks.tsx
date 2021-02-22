import { Box, BoxProps, Card } from 'theme-ui'
import Image from 'next/image'

export const Container = ({
  wide,
  ...props
}: BoxProps & { wide?: boolean }) => (
  <Box
    {...props}
    variant="container"
    sx={{
      maxWidth: wide ? 'wide' : 'container',
    }}
  />
)

export const Tiles = (props) => (
  <Box
    as="section"
    {...props}
    sx={{
      display: 'grid',
      gridGap: [3, null, 4],
      gridTemplateColumns: [null, 'repeat(2, 1fr)'],
      mx: [-3, 0, -4],
      ...props.sx,
    }}
  />
)

export const Tile = ({
  href,
  id,
  alt,
  children,
}: {
  href: string
  id: string
  alt: string
  children?: any
}) => (
  <Card
    variant="interactive"
    as="a"
    href={href}
    id={id}
    sx={{
      bg: 'elevated',
      color: 'elevatedText',
      borderRadius: [0, 'extra'],
      p: [0, 0],
    }}
  >
    <Image src={`/projects/${id}.jpg`} width={2048} height={1024} alt={alt} />
    <Box
      sx={{
        p: [3, null, 4],
        h2: {
          pb: 2,
          my: 0,
          fontSize: [2, 3],
          lineHeight: 'heading',
          a: {
            color: 'inherit',
            textDecoration: 'none',
          },
        },
        '> p': {
          color: 'inherit',
          my: 0,
        },
      }}
    >
      {children}
    </Box>
  </Card>
)

export const List = (props) => (
  <Box
    {...props}
    sx={{
      ul: {
        p: 0,
        m: 0,
        listStyle: 'none',
        display: 'grid',
        gridTemplateColumns: [null, 'repeat(auto-fit, minmax(256px, 1fr))'],
        gridGap: [3, 4],
      },
      a: {
        display: 'block',
        fontWeight: 'bold',
        color: 'accent',
        textDecoration: 'none',
        fontSize: 2,
      },
      em: {
        display: 'block',
        color: 'muted',
        fontWeight: 'body',
        fontStyle: 'normal',
        fontSize: 1,
      },
      ...props.sx,
    }}
  />
)
