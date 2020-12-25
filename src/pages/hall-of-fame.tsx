import React from "react"
import { PageProps, Link, graphql } from "gatsby"

// FIXME : gatsby로 빌드 돌릴때는 문제가 없지만 VSCode에서는 빨간줄떠서 해결하긴 해야함.
import Layout from "@components/layout"
import SEO from "@components/seo"

import StudyCard from "@components/organisms/StudyCard"
import StudyBox from "@components/organisms/StudyBox"
import Test from "@components/organisms/Test"
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
  mFirstRankName: string
  mSecondRankName: string
  mThirdRankName: string
  fFirstRankName: string
  fSecondRankName: string
  fThirdRankName: string
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

  return (
    <Layout>
      <SEO title="ICPC Sinchon - Hall Of Fame" />
      <div className="wrapper">
        <div className="head">
          <div className="title--wrapper">
            <div className="title">HALL OF FAME</div>
            <div className="sub--title">
              ICPC 신촌 연합 활동에 기여를 해주신 분들과, 열심히 활동하여 우수한
              성적을 거둔 사람들을 기립니다
            </div>
          </div>
        </div>

        <div className="tab--wrapper">
          <div className="season--tab">2020 Winter</div>
          <div className="season--tab">2020 Summer</div>
          <div className="season--tab">2020 Winter</div>
          <div className="season--tab">2020 Summer</div>
        </div>

        {HallOfFameData.content.map(val => {
          return (
            <div className="season--wrap">
              <div className="title">{val.year + " " + val.semester}</div>
              {val.studies.map(val1 => {
                if (val1.contests == undefined)
                  return (
                    <div className="study--wrap">
                      <div className="title--wrap">
                        <div className="study--title">{val1.topic}</div>
                        <div className="lecturer--wrap">
                          <span className="lecturer">강사진</span>
                          <span className="lecturer--list">
                            {val1.lecturer}
                          </span>
                        </div>
                      </div>
                    </div>
                  )
                else if (Object.keys(val1.contests).length == 2) {
                  console.log(val1.contests[1])
                  return (
                    <div className="study--wrap">
                      <div className="title--wrap">
                        <div className="study--title">{val1.topic}</div>
                        <div className="lecturer--wrap">
                          <span className="lecturer">강사진</span>
                          <span className="lecturer--list">
                            {val1.lecturer}
                          </span>
                        </div>
                      </div>
                      <div className="mid--final--wrap">
                        <div className="mid--test">
                          <Test
                            TestType={val1.contests[0].contest_name}
                            ProbPicker1={
                              [val1.contests[0].problem_picker[0].name,<span className="school">{val1.contests[0].problem_picker[0].school}</span>]
                            }
                            ProbPicker2={
                              [val1.contests[0].problem_picker[1].name,<span className="school">{val1.contests[0].problem_picker[1].school}</span>]
                            }
                            FirstRankName={val1.contests[0].awards[0].member}
                            SecondRankName={val1.contests[0].awards[1].member}
                            ThirdRankName={val1.contests[0].awards[2].member}
                          ></Test>
                        </div>
                        <div className="final--test">
                          <Test
                            TestType={val1.contests[1].contest_name}
                            ProbPicker1={
                              [val1.contests[1].problem_picker[0].name,<span className="school">{val1.contests[1].problem_picker[0].school}</span>]
                            }
                            ProbPicker2={
                              [val1.contests[1].problem_picker[1].name,<span className="school">{val1.contests[1].problem_picker[1].school}</span>]
                            }
                            FirstRankName={val1.contests[1].awards[0].member}
                            SecondRankName={val1.contests[1].awards[1].member}
                            ThirdRankName={val1.contests[1].awards[2].member}
                          ></Test>
                        </div>
                      </div>
                    </div>
                  )
                } else {
                  // 하나짜리
                  return (
                    <div className="study--wrap">
                      <div className="title--wrap">
                        <div className="study--title">{val1.topic}</div>
                        <div className="lecturer--wrap">
                          <span className="lecturer">강사진</span>
                          <span className="lecturer--list">
                            {val1.lecturer}
                          </span>
                        </div>
                      </div>
                      <div className="final--wrap">
                        <div className="final--test">
                          <Test
                            TestType={val1.contests[0].contest_name}
                            ProbPicker1={
                              [val1.contests[0].problem_picker[0].name,<span className="school">{val1.contests[0].problem_picker[0].school}</span>]
                            }
                            ProbPicker2={
                              [val1.contests[0].problem_picker[1].name,<span className="school">{val1.contests[0].problem_picker[1].school}</span>]
                            }
                            FirstRankName={val1.contests[0].awards[0].member}
                            SecondRankName={val1.contests[0].awards[1].member}
                            ThirdRankName={val1.contests[0].awards[2].member}
                          ></Test>
                        </div>
                      </div>
                    </div>
                  )
                }
              })}
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export default HallOfFame
