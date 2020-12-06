import React from "react"
import { Link } from "gatsby"
import {jsx, css} from '@emotion/core'

// FIXME : gatsby로 빌드 돌릴때는 문제가 없지만 VSCode에서는 빨간줄떠서 해결하긴 해야함.
import Layout from "@components/layout"
import SEO from "@components/seo"
import ActivitiesSlider from "@components/organisms/slider.tsx"
import StyledTitle from "@components/molecules/title.tsx"
import './index.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// images
// import Image from "@components/image"
import sogang from '../images/sogang.jpg'
import sookmyung from '../images/sookmyung.gif' 
import hongik from '../images/hongik.jpg'
import ewha from '../images/ewha.gif'
import yonsei from '../images/yonsei.jpg'

type ClubProps={
  image: string;
  name: string;
  content?: string;
};

function Club(props:ClubProps){
  return(
    <div className="club">
      <img alt = {props.name} src={props.image}/>
      <div style={{fontSize: "0.9rem", fontWeight:"bold"}}>{props.name}</div>
      <p>{props.content}</p>
    </div>
  );
}

const IndexPage = () => (
  <Layout>
    <SEO title="ICPC Sinchon" />
    <div style={{ 
      margin: `7rem 0rem 13rem 0rem`}}>
      <h1 className="main--title">
        ICPC Sinchon
      </h1>
      <p>ICPC Sinchon은 신촌 인근 지역 대학교 프로그래밍 대회 동아리의 연합입니다.</p>
    </div>
    <StyledTitle title="Groups"/>
    <div className="clubs--wrapper">
      <div className="clubs--row">
        <Club image={hongik} name="HI-ARC" content="홍익대 HI-ARC" />
        <Club image={yonsei} name="Morgorithm" content="연세대 Morgorithm" />
        <Club image={ewha} name="EDOC" content="이화여대 EDOC" />
      </div>
      <div className="clubs--row">
        <Club image={sogang} name="Sogang ICPC Team" content="서강대 Sogang ICPC Team" />
        <Club image={sookmyung} name="Algos" content="숙명여대 Algos" />
      </div>
    </div>
    <StyledTitle title="Activities" />
    <ActivitiesSlider/>
    <Link to="/page-2/">Go to page 2</Link><br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link><br />
    <Link to="/hall-of-fame/">Go to "Hall Of Fame"</Link>
  </Layout>
)

export default IndexPage
