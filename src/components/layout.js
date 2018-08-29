import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { MDXProvider } from '@mdx-js/tag'
import { Provider as RebassProvider, Heading, Text, Link } from 'rebass'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import './layout.css'

const components = {
  a: props => <Link is="a" {...props} />,
  h1: props => <Heading is="h1" fontSize={7} mb={3} mt={5} {...props} />,
  h2: props => <Heading is="h2" fontSize={5} mb={3} mt={4} {...props} />,
  h3: props => <Heading is="h3" fontSize={3} mb={3} mt={3} {...props} />,
  p: props => <Text is="p" mb={3} {...props} />,
}

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <RebassProvider>
          <Header siteTitle={data.site.siteMetadata.title} />
          <div
            style={{
              margin: '0 auto',
              maxWidth: 960,
              padding: '0px 1.0875rem 1.45rem',
              paddingTop: 0,
            }}
          >
            <MDXProvider components={components}>{children}</MDXProvider>
          </div>
        </RebassProvider>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
