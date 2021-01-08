/** @jsxFrag React.Fragment */
/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
/** @jsx jsx */
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {jsx,css} from '@emotion/core'

import Header from "./header"
import Address from "./molecules/address"
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
    <React.Fragment>
      <Header siteTitle={data.site.siteMetadata.title} />
        <main>{children}</main>
        <footer >
          <div className="footer-content">
            <div className="footer-content--title">ICPC Sinchon</div>
            <div className="footer-content--items">
              <Address email="icpc.sinchon@gmail.com" kakao="@icpc_sinchon"/>
            </div>
          </div>
          <div className="footer-content">
            <div className="footer-content--title">Contributors</div>
            <div className="footer-content--items">
              <div className="footer-items--content-column">
                <Address name="이재열" github="https://github.com/malkoG" email="rijgndqw012@gmail.com"/>
                <Address name="서연주" github="https://github.com/YeonjuSeo" email="tjduswn1219@gmail.com"/>
              </div>
              <div className="footer-items--content-column">
                <Address name="남수연" github="https://github.com/mori8" email="kaithape@gmail.com"/>
                <Address name="이동주" github="https://github.com/nant0313" email="nant0313@gmail.com"/>
              </div>
            </div>
          </div>
          {/* Here is the footer © {new Date().getFullYear()}, Built with
          {` `} */}
          {/* <a href="https://www.gatsbyjs.org">Gatsby</a> */}
        </footer>
      </React.Fragment>
  )
}

export default Layout
