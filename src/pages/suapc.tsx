/** @jsx jsx */
import React from "react"
import { jsx, css } from "@emotion/core"
import { PageProps, Link, graphql } from "gatsby"
import Layout from "@components/layout"
import SEO from "@components/seo"
import "../fonts/fonts.css"
import "./suapc.css"
import sponser from "../images/sponser.png"
import WinnerTable from "@components/organisms/WinnerTable"
import OrganizerTable from "@components/organisms/OrganizerTable"
import suapc2020Summer from "@content/yaml/SUAPC 2020 Summer.yaml"
import supac2021Winter from "@content/yaml/SUAPC 2021 Winter.yaml"

type DataProps = {
  site: {
    buildTime: string
  }
}

const SUAPC: React.FC<PageProps<DataProps>> = ({ data, path }) => {
    console.log(Object.values(suapc2020Summer.awards[0]));
    return (
        <Layout>
        <SEO title="ICPC Sinchon - Members" />
        <div className="wrapper">
            <div className="suapc--wrapper">
            <div className="logo--info--wrapper">
                <div className="logo--wrapper">SUAPC</div>
                <div className="info--wrapper">
                <span className="info--part">
                    SUAPC는 신촌지역 5개 대학(연세, 서강, 이화, 홍익, 숙명)의 학부생
                    및 대학원 1년차를 대상으로 하는
                </span>
                <span className="info--part">
                    프로그래밍 대회입니다. 대회 문제는 서울 리저널의 문제 출제
                    경향을 따르며 제한시간 동안 얼마나 많은
                </span>
                <span className="info--part">
                    문제를 정확하게 풀 수 있는지를 평가하여 순위를 결정합니다.
                </span>
                </div>
            </div>
            <hr />
            <div className="sponser--wrapper">
                <img src={sponser}></img>
            </div>
            </div>
            <div className="content--wrapper">
            <div className="season--wrapper">
                <div className="season">2021 Winter</div>
                <div className="season selected">2020 Summer</div>
            </div>
            <div className="result--wrapper">
                <WinnerTable info={Object.values(suapc2020Summer.awards[0])}/>
                <WinnerTable info={Object.values(suapc2020Summer.awards[1])}/>
                <div className="organizer--table--wrapper">
                    <OrganizerTable name="출제진" info={Object.values(suapc2020Summer.examiner)}/>
                    <OrganizerTable name="검수진" info={Object.values(suapc2020Summer.checker)}/>
                </div>
                
            </div>
            </div>
        </div>
        </Layout>
    )
}

export default SUAPC
