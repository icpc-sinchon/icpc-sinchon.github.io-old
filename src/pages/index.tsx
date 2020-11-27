import React from "react"
import { Link } from "gatsby"

// FIXME : gatsby로 빌드 돌릴때는 문제가 없지만 VSCode에서는 빨간줄떠서 해결하긴 해야함.
import Layout from "@components/layout"
import Image from "@components/image"
import SEO from "@components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="ICPC Sinchon" />
    <div style={{
      margin: `8rem 0rem`}}>
      <h1 style={{fontSize: `4rem`}}>ICPC Sinchon</h1>
      <p style={{fontSize: `0.8rem`}}>ICPC Sinchon은 신촌 인근 지역 대학교 프로그래밍 대회 동아리의 연합입니다.</p>
    </div>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem`}}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link><br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link><br />
    <Link to="/hall-of-fame/">Go to "Hall Of Fame"</Link>
  </Layout>
)

export default IndexPage
