import { Box, BoxProps, ThemeUIStyleObject } from 'theme-ui'
import { keyframes } from '@emotion/react'
import theme from '../lib/theme'

const slideUp = keyframes({
  from: { transform: 'translateY(100%)', opacity: 0 },
  to: { transform: 'translateY(0)', opacity: 1 },
})

type Props = {
  duration?: number
  delay?: number
  sx?: ThemeUIStyleObject
}

const SlideUp = ({
  duration = 720,
  delay = 0,
  sx,
  ...props
}: Props & BoxProps) => (
  <Box
    {...props}
    sx={{
      ...sx,
      [theme.util.motion]: {
        animationName: slideUp.toString(),
        animationFillMode: 'backwards',
        animationDuration: duration + 'ms',
        animationDelay: delay + 'ms',
        willChange: 'transform, opacity',
      },
    }}
  />
)

export default SlideUp
