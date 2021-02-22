import React from 'react'
import { Box } from 'theme-ui'
import Icon from 'supercons'

const Component = ({ sx, ...props }) => (
  <Box sx={{ lineHeight: 0, ...sx }}>
    <Icon {...props} />
  </Box>
)

export default Component
