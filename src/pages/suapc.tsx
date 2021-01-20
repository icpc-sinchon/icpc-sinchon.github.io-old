/** @jsx jsx */
import React from "react"
import { jsx, css } from "@emotion/core"
import { Helmet } from "react-helmet"
import { PageProps, Link, graphql } from "gatsby"
import Layout from "@components/layout"
import SEO from "@components/seo"
import "../fonts/fonts.css"
import "./suapc.css"
import sponser from "../images/sponser.png"
import ResultWrapper from "@components/organisms/ResultWrapper"
import OrganizerTable from "@components/organisms/OrganizerTable"
import suapc2020Summer from "@content/yaml/SUAPC 2020 Summer.yaml"
import supac2021Winter from "@content/yaml/SUAPC 2021 Winter.yaml"

type DataProps = {
  site: {
    buildTime: string
  }
}

const SUAPC: React.FC<PageProps<DataProps>> = ({ data, path }) => {
  const getData = e => {
    // 클릭한 대회 "연도--시즌"을 name에 담음
    let arr = e.target.innerHTML.split(" ")
    let name = arr[0] + "--" + arr[1]
    let target = e.target

    // 클릭한 대회가 이미 선택된 대회가 아닐 경우, selected class 추가
    if (!target.classList.contains("selected")) target.classList.add("selected")

    // 클릭한 대회가 아닌 다른 대회가 선택되어 있을 경우, 선택 해제함
    let season = document.getElementsByClassName("season")
    for (let i = 0; i < season.length; i++) {
      console.log(season[i])
      if (season[i] != e.target) {
        if (season[i].classList.contains("selected"))
          season[i].classList.remove("selected")
      }
    }

    // 클릭한 대회로 DATA 변경
    let selected = document.getElementsByClassName(name)[0]

    let toInspect = document.getElementsByClassName("result--wrapper")
    for (let i = 0; i < toInspect.length; i++) {
      // 선택한 대회
      if (toInspect[i] == selected) {
        if (selected.classList.contains("hide"))
          selected.classList.remove("hide")
        if (!selected.classList.contains("show")) selected.classList.add("show")
      } else {
        // 선택하지 않은 대회가 보여지고 있는 상태일 경우
        if (toInspect[i].classList.contains("show")) {
          toInspect[i].classList.remove("show")
          toInspect[i].classList.add("hide")
        }
      }
    }
  }
  const getDataMobile = e => {
    // 클릭한 대회 "연도--시즌"을 name에 담음
    let arr = e.target.innerHTML.split(" ")
    let name = arr[0] + "--" + arr[1]
    let target = e.target

    // 클릭한 대회가 이미 선택된 대회가 아닐 경우, selected class 추가
    if (!target.classList.contains("selected--mobile")) target.classList.add("selected--mobile")

    // 클릭한 대회가 아닌 다른 대회가 선택되어 있을 경우, 선택 해제함
    let season = document.getElementsByClassName("selected--mobile")
    for (let i = 0; i < season.length; i++) {
      console.log(season[i])
      if (season[i] != e.target) {
        if (season[i].classList.contains("selected--mobile"))
          season[i].classList.remove("selected--mobile")
      }
    }

    // 클릭한 대회로 DATA 변경
    let selected = document.getElementsByClassName(name)[0]

    let toInspect = document.getElementsByClassName("result--wrapper")
    for (let i = 0; i < toInspect.length; i++) {
      // 선택한 대회
      if (toInspect[i] == selected) {
        if (selected.classList.contains("hide"))
          selected.classList.remove("hide")
        if (!selected.classList.contains("show")) selected.classList.add("show")
      } else {
        // 선택하지 않은 대회가 보여지고 있는 상태일 경우
        if (toInspect[i].classList.contains("show")) {
          toInspect[i].classList.remove("show")
          toInspect[i].classList.add("hide")
        }
      }
    }
  }
  return (
    <Layout>
      <Helmet>
        <meta name="google-site-verification" content="5Ph0_m71cR-AlpUbNuBAmu3IR6SaIdgioXEh6aFVP9w" />
        <meta name="naver-site-verification" content="fcb10e2391d27964e9d52812543f1bbe401542fb" />
      </Helmet>
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

            <div className="info--wrapper--mobile">
            Sinchon  University  Association  Programming  Contest
            </div>
          </div>
          <div className="grower1"></div>
          <hr />
          <div className="grower2"></div>
          <div className="sponser--wrapper">
            <img src={sponser}
              draggable="false"></img>
          </div>
        </div>
        <div className="content--wrapper">

          <div className="season--wrapper--mobile">
          <div className="season--mobile" onClick={e => getDataMobile(e)}>
              2021 Winter
            </div>
            <div className="season--mobile selected--mobile" onClick={e => getDataMobile(e)}>
              2020 Summer
            </div>
          </div>

          <div className="season--wrapper">
            <div className="season" onClick={e => getData(e)}>
              2021 Winter
            </div>
            <div className="season selected" onClick={e => getData(e)}>
              2020 Summer
            </div>

          </div>
          <ResultWrapper
            season={Object.values(suapc2020Summer)}
            seasonName="2020--Summer show"
          />
          <div className="result--wrapper no--contest 2021--Winter hide">
            아직 시행되지 않은 SUAPC 입니다.
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default SUAPC
