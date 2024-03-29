import { Box, Card } from 'theme-ui'
import Image from 'next/image'

export const Container = ({ wide, ...props }) => (
  <Box
    {...props}
    variant="container"
    sx={{
      maxWidth: wide ? 'wide' : 'container'
    }}
  />
)

export const Tiles = (props) => (
  <Box
    as="section"
    {...props}
    sx={{
      display: 'grid',
      gridGap: 4,
      gridTemplateColumns: [null, 'repeat(2, 1fr)'],
      mx: [-3, 0, null, null, -4],
      mb: [5, 5],
      ...props.sx
    }}
  />
)

export const Tile = ({ href, id, img, alt, children }) => (
  <Card
    variant="interactive"
    as="a"
    href={href}
    id={id}
    sx={{
      bg: 'elevated',
      color: 'elevatedText',
      borderRadius: 'clamp(0px, ((100vw - 4px) - 100%) * 9999, 12px)',
      p: [0, 0],
      img: {
        width: '100%',
        height: 'auto'
      }
    }}
  >
    <Image src={img} placeholder="blur" alt={alt} />
    <Box
      sx={{
        p: [3, null, 4],
        h3: {
          pb: 2,
          my: 0,
          fontSize: [2, 3],
          lineHeight: 'heading',
          a: {
            color: 'inherit',
            textDecoration: 'none'
          }
        },
        '> p': {
          color: 'inherit',
          my: 0,
          textWrap: 'pretty'
        }
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
        gridGap: [3, 4]
      },
      a: {
        display: 'block',
        fontWeight: 'bold',
        color: 'accent',
        textDecoration: 'none',
        fontSize: 2
      },
      em: {
        display: 'block',
        color: 'muted',
        fontWeight: 'body',
        fontStyle: 'normal',
        fontSize: 1
      },
      ...props.sx
    }}
  />
)
