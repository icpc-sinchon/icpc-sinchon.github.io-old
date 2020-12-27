import React from "react"
import { Link } from "gatsby"
import { jsx, css } from "@emotion/core"

// FIXME : gatsby로 빌드 돌릴때는 문제가 없지만 VSCode에서는 빨간줄떠서 해결하긴 해야함.
import Layout from "@components/layout"
import SEO from "@components/seo"
import Club from "@components/molecules/club.tsx"
import ActivitiesSlider from "@components/organisms/slider.tsx"
import StyledTitle from "@components/molecules/title.tsx"
import "../fonts/fonts.css"
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
        padding: `7.1rem 1rem`,
        margin: `1rem 3.5rem 3rem 3.5rem`,
        // backgroundImage: `url(${mainImage})`,
        backgroundRepeat: `no-repeat`,
        backgroundPosition: `center center`
      }}
    >
      <div 
      className="balloon--text"
      style={{
        position:'relative',
        textAlign:"right"
      }}>
        <div
        style={{
          color: `rgb(0, 132, 13)`,
          fontFamily: `appleNeoB`,
          position: `absolute`,
          top: `-0.7rem`,
          right: `-0.9rem`,
          fontSize: `1.5rem`
        }}>240</div>
        <h1 
        className="main--title"
        style={{
          fontFamily:'segoeuib',
          color:'#00840D'
        }}>ICPC Sinchon</h1>
        <div
          style={{
            fontFamily:"TheMpgtM",
            fontSize: `3.4em`,
            color:`black`
          }}
        >
          <span
          style={{
            lineHeight:``
          }}>신촌지역 대학교</span>
          <br />
          <span
          style={{
            lineHeight: `5.7rem`
          }}>프로그래밍 대회 동아리 연합</span>
        </div>
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
