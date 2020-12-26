import React from "react"
import { Link } from "gatsby"
import { jsx, css } from "@emotion/core"

// FIXME : gatsby로 빌드 돌릴때는 문제가 없지만 VSCode에서는 빨간줄떠서 해결하긴 해야함.
import Layout from "@components/layout"
import SEO from "@components/seo"
import Club from "@components/molecules/club.tsx"
import ActivitiesSlider from "@components/organisms/slider.tsx"
import StyledTitle from "@components/molecules/title.tsx"
import "./index.css"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

// images
// import Image from "@components/image"
import sogang from "../images/sogang.jpg"
import sookmyung from "../images/sookmyung.png"
import hongik from "../images/hongik.png"
import ewha from "../images/ewha.png"
import yonsei from "../images/yonsei.jpg"
import mainImage from "../images/main-background.png"

const IndexPage = () => (
  <Layout>
    <SEO title="ICPC Sinchon" />
    <div
      className="balloon"
      style={{
        padding: `11rem 1rem`,
        margin: `1rem 0 3rem 0`,
        backgroundImage: `url(${mainImage})`,
        backgroundRepeat: `no-repeat`,
        backgroundPosition: `center center`,
        color: `white`,
      }}
    >
      <div className="balloon--text">
        <h1 className="main--title">ICPC Sinchon</h1>
        <p
          style={{
            fontSize: `1.15em`,
            fontWeight: `500`,
          }}
        >
          ICPC Sinchon은 신촌 지역 대학교 프로그래밍 대회 동아리 연합입니다.
          <br />
          아무말 아무말 주저리 주저리 어쩌구 저쩌구
        </p>
      </div>
    </div>
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
    <ActivitiesSlider />
    <Link to="/page-2/">Go to page 2</Link>
    <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    <br />
    <Link to="/hall-of-fame/">Go to "Hall Of Fame"</Link>
    <br />
    <Link to="/members/">Go to "Members"</Link>
  </Layout>
)

export default IndexPage
