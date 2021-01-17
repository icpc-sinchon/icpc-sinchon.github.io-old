import React from "react"
import { Link } from "gatsby"
import { jsx, css } from "@emotion/core"
import { Helmet } from "react-helmet"

// FIXME : gatsby로 빌드 돌릴때는 문제가 없지만 VSCode에서는 빨간줄떠서 해결하긴 해야함.
import Layout from "@components/layout"
import SEO from "@components/seo"
import LogoScreen from "@components/organisms/logoscreen.tsx"
import Club from "@components/molecules/club.tsx"
import Activities from "@components/organisms/activities.tsx"
import StyledTitle from "@components/molecules/title.tsx"
import "../fonts/fonts.css"
import "./index.css"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

// images
// import Image from "@components/image"
import sogang from "../images/logos/sogang.jpg"
import sookmyung from "../images/logos/sookmyung.jpg"
import hongik from "../images/logos/hongik.jpg"
import ewha from "../images/logos/ewha.jpg"
import yonsei from "../images/logos/yonsei.jpg"

const IndexPage = () => (
  <Layout>
    <Helmet>
        <meta name="google-site-verification" content="58UXeHIoaelb7ynLUFRruJMLccRexLVTwi2l0Cep-G8" />
    </Helmet>
    <SEO title="ICPC Sinchon" />
    <LogoScreen />
    <StyledTitle title="Groups" />
    <div className="clubs--wrapper">
      <div className="clubs--row">
        <Club
          image={sogang}
          name="Sogang<br/>ICPC Team"
          content="Sogang Univ."
        />
        <Club
          image={sookmyung}
          name="Algos"
          content="Sookmyung Women's Univ."
        />
        <Club image={yonsei} name="Morgorithm" content="Yonsei Univ." />
        <Club image={ewha} name="EDOC" content="Ewha Womans Univ." />
        <Club image={hongik} name="HI-ARC" content="Hongik Univ." />
      </div>
    </div>
    <StyledTitle title="Activities" />
    <Activities />
  </Layout>
)

export default IndexPage
