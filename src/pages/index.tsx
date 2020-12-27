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
import sogang from "../images/logos/sogang.jpg"
import sookmyung from "../images/logos/sookmyung.png"
import hongik from "../images/logos/hongik.png"
import ewha from "../images/logos/ewha.png"
import yonsei from "../images/logos/yonsei.jpg"
import mainImage from "../images/suapc2020.png"

const IndexPage = () => (
  <Layout>
    <SEO title="ICPC Sinchon" />
    <div
      className="balloon"
      style={{
        padding: `7.1rem 0`,
        margin: `1rem auto 3rem auto`,
        backgroundImage: `url(${mainImage})`,
        backgroundRepeat: `no-repeat`,
        backgroundPosition: `center center`,
        maxWidth:`2210px`
      }}
    >
      <div
        className="balloon--text"
        style={{
          position: "relative",
          textAlign: "right",
          paddingRight: `3.3rem`
        }}
      >
        <div 
        className="balloon--text--whiteback"
        style={{
          backgroundColor:`rgba(255,255,255,0.8)`,
          display: `inline-block`,
          paddingLeft: `1rem`
        }}>
          <div
          className="balloon--240"
            style={{
              color: `rgb(0, 132, 13)`,
              fontFamily: `appleNeoB`,
              position: `absolute`,
              top: `0.9rem`,
              right: `2.1rem`,
              fontSize: `1.5rem`,
            }}
          >
            240
          </div>
          <h1
            className="main--title"
            style={{
              fontFamily: "segoeuib",
              color: "#00840D",
            }}
          >
            ICPC Sinchon
          </h1>
          <div
            style={{
              fontFamily: "TheMpgtM",
              fontSize: `3.4em`,
              color: `black`,
            }}
          >
            <span
            className="balloon--title--sin"
              style={{
                lineHeight: ``,
              }}
            >
              신촌지역 대학교
            </span>
            <br />
            <span
              className="balloon--title--pmg"
              style={{
                lineHeight: `5.7rem`,
              }}
            >
              프로그래밍 대회 동아리 연합
            </span>
          </div>
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
