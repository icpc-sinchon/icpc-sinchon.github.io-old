/** @jsx jsx */
import React from "react"
import { jsx, css } from "@emotion/core"

import Layout from "@components/layout"
import SEO from "@components/seo"
import "./404.css"
const css404 = css`
  text-align: center;
  margin: 30vh auto;
  width: 25rem;
`;

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div css={css404}>
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </div>
  </Layout>
)

export default NotFoundPage
