import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import { Box } from 'rebass'

// TODO: This should be composition instead of wrapping
const Link = ({ children, to, ...rest }) =>
  Object.keys(rest).length ? (
    <Box css={{ display: 'inline-block' }} {...rest}>
      <GatsbyLink to={to}>{children}</GatsbyLink>
    </Box>
  ) : (
    <GatsbyLink to={to}>{children}</GatsbyLink>
  )

export default Link
