import { Box } from 'theme-ui'
import { keyframes } from '@emotion/react'

const slideUp = keyframes({
  from: { transform: 'translateY(100%)', opacity: 0 },
  to: { transform: 'translateY(0)', opacity: 1 }
})

const SlideUp = ({ duration = 720, delay = 0, ...props }) => (
  <Box
    {...props}
    sx={{
      '@media (prefers-reduced-motion: no-preference)': {
        animationName: slideUp.toString(),
        animationFillMode: 'backwards'
      }
    }}
    style={{
      ...(props.style || {}),
      animationDuration: duration + 'ms',
      animationDelay: delay + 'ms'
    }}
  />
)

export default SlideUp
