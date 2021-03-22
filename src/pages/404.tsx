import React from "react"
import styled from "styled-components"
import Layout from "@components/layout"
import SEO from "@components/seo"
import "./404.css"
const Page404 = styled.div`
  text-align: center;
  margin: 30vh auto;
  width: 25rem;
`

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Page404>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Page404>
  </Layout>
)

export default NotFoundPage
