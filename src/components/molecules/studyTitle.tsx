/** @jsx jsx */
import React,{Fragment} from "react"
import { jsx, css } from "@emotion/core"

import { IStudy } from "@models/study"

import styled from "@emotion/styled"
import ScoreBoard from "./ScoreBoard";

const StudyTitleWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

//  <span className="lecturer--list">
//             {val1.lecturer[0].school}&nbsp;
//             {val1.lecturer[0].name}&nbsp;|&nbsp;
//             {val1.lecturer[1].school}&nbsp;
//             {val1.lecturer[1].name}&nbsp;
//         </span>

const StudyTitle: React.FC<{ study: IStudy }> = ({ study }) => {
  const renderLecturers = ((study) => 
      <Fragment>
      {study.map((teacher) => {
          return(
              <Fragment>
              <span>{teacher.topic}</span>
              <span>{teacher.topic}</span>
              </Fragment>
              )
          }
          )}
      </Fragment>
    )

  return (
  <div className="title--wrap">
    <div className="study--title">{study.topic}</div>
    <div className="lecturer--wrap">
      <span className="lecturer">강사진</span>
      <span className="lecturer--list">
          {renderLecturers(study)}
      </span>
    </div>
  </div>
  )
}

export default StudyTitle 