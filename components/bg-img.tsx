import { Box } from 'theme-ui'
import Image, { ImageProps } from 'next/image'

/*
 * Use this component inside a container with CSS:
 * `position: relative; overflow: hidden;`
 * then pass width/height/alt/src as usual
 */

const BGImg = ({
  gradient,
  ...props
}: ImageProps & {
  gradient?: string
}) => (
  <Box
    as="figure"
    sx={{
      position: 'absolute',
      display: 'block',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 0,
      ...(gradient
        ? {
            '&:after': {
              content: '""',
              position: 'absolute',
              backgroundImage: `linear-gradient(${gradient})`,
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            },
          }
        : {}),
      '> div': { height: '100%', width: '100%' },
      '~ *': { position: 'relative' },
    }}
  >
    <Image
      layout="responsive"
      objectFit="cover"
      objectPosition="center"
      {...props}
    />
  </Box>
)

export default BGImg
