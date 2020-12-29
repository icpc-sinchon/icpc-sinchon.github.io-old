import React from "react"
import { PageProps, Link, graphql } from "gatsby"

// FIXME : gatsby로 빌드 돌릴때는 문제가 없지만 VSCode에서는 빨간줄떠서 해결하긴 해야함.
import Layout from "@components/layout"
import SEO from "@components/seo"

import StudyCard from "@components/organisms/StudyCard"
import StudyBox from "@components/organisms/StudyBox"
import StudyTitle from"@components/molecules/StudyTitle"
import Test from "@components/organisms/Test"
import TestWith3Picker from "@components/organisms/TestWith3Picker"
import TestWith4Picker from "@components/organisms/TestWith4Picker"
import LecturerMobileTable from "@components/organisms/LecturerMobileTable"
import "../fonts/fonts.css"
import "./index.css"
import "./hall-of-fame.css"

// import HallOfFameData from "@content/hall-of-fame.yaml"
import HallOfFameData from "@content/hall-of-fame.yaml"

type DataProps = {
  site: {
    buildTime: string
  }
}

type StudyProps = {
  StudyTitle: string
  LecturerList: string
  mFirstRank: string
  mSecondRank: string
  mThirdRank: string
  fFirstRank: string
  fSecondRank: string
  fThirdRank: string
}

const HallOfFame: React.FC<PageProps<DataProps>> = ({ data, path }) => {
  const renderActivity = activity => {
    if (activity.activity_type === "study") {
      return (
        <StudyCard
          key={`${activity.activity_type}-${activity.year.toString()}-${
            activity.semester
          }`}
          studies={activity.studies}
        />
      )
    } else {
      return <></>
    }
  }
  const getData = e => {
    var arr = e.target.innerHTML.split(" ")
    var name = arr[0] + "--" + arr[1]
    var target = document.getElementsByClassName(name)[0]
    if (target.classList.contains("hide")) target.classList.remove("hide")
    if (!target.classList.contains("show")) target.classList.add("show")
    var season = document.getElementsByClassName("season--wrap")
    for (var i = 0; i < season.length; i++) {
      if (!season[i].classList.contains(name)) {
        if (!season[i].classList.contains("hide"))
          season[i].classList.add("hide")
        if (season[i].classList.contains("show"))
          season[i].classList.remove("show")
      }
    }
    var tabs = document.getElementsByClassName("season--tab")
    for (var i = 0; i < tabs.length; i++) {
      if (tabs[i] == e.target) {
        if (tabs[i].classList.contains("hide--tab"))
          tabs[i].classList.remove("hide--tab")
      } else {
        if (!tabs[i].classList.contains("hide--tab"))
          tabs[i].classList.add("hide--tab")
        if (tabs[i].classList.contains("show--tab"))
          tabs[i].classList.remove("show--tab")
      }
    }
  }

  return (
    <Layout>
      <SEO title="ICPC Sinchon - Hall Of Fame" />
      <div className="wrapper">
        {/* 상단 소개 head */}
        <div className="head">
          <div className="title--wrapper">
            <div className="title">HALL OF FAME</div>
            <div className="sub--title">
              <div className="sub--title--split">
                ICPC 신촌 연합 활동에 기여를 해주신 분들과,&nbsp;
              </div>
              <div className="sub--title--split">
                열심히 활동하여 우수한 성적을 거둔 사람들을 기립니다
              </div>
            </div>
          </div>
        </div>
        {/* 탭 모음 */}
        <div className="tab--wrapper">
          <div className="season--tab show--tab" onClick={e => getData(e)}>
            2020 Winter
          </div>
          <div className="season--tab hide--tab" onClick={e => getData(e)}>
            2020 Summer
          </div>
          <div className="season--tab hide--tab" onClick={e => getData(e)}>
            2021 Winter
          </div>
          <div className="season--tab hide--tab" onClick={e => getData(e)}>
            2021 Summer
          </div>
        </div>
        {HallOfFameData.content.map(val => {
          {/* data명 + show/hide 표시 : 2020 Winter */}
          var data
          if (val.year + "--" + val.semester == "2020--Winter")
            data = val.year + "--" + val.semester + " season--wrap show"
          else data = val.year + "--" + val.semester + " season--wrap hide"
          // 시행되지 않은 알고리즘 캠프
          if (val.studies == undefined) {
            return (
              <div className={data}>
                <div className="season--name">
                  {val.year + " " + val.semester}
                </div>
                <div className="no--test">
                  아직 시행되지 않은 Algorithm Camp 입니다
                </div>
              </div>
            )
          // 시행된 알고리즘 캠프
          } else
            return (
              <div className={data}>
                {/* 탭 아래 알고리즘 캠프 이름 */}
                <div className="season--name">
                  {val.year + " " + val.semester}
                </div>
                <StudyTitle study = {val.studies}/>
              </div>
            )
        })}
      </div>
    </Layout>
  )
}

export default HallOfFame
