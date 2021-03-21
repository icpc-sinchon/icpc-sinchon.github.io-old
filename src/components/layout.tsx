/** @jsxFrag React.Fragment */
/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
/** @jsx jsx */
import React, { memo } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { jsx, css } from "@emotion/core"

import Header from "./header"
import Footer from "./footer"
import "./layout.css"

type LayoutProps = {
  children: JSX.Element[]
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default memo(Layout)
