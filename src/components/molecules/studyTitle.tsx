/** @jsx jsx */
import React from "react"
import { jsx, css } from "@emotion/core"

import styled from "@emotion/styled"

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

// val1.lecturers.map((lecturer) => `${lecturer.name}&nbsp;${lecturer.school}`).join("&nbsp;|&nbsp;")

const StudyTitle: React.FC<{ lecturers }> = ({ lecturers }) => {
  const renderLecturers = ((lecturers) => {
    return(
      <StudyTitleWrapper>
      {lecturers.map(lecturer => {
        return(
          <>
          <span>{lecturer.school}</span>
          <span>{lecturer.name}</span>
          </>
        )
      })}
      </StudyTitleWrapper>
    )
  })

  return (
  <div className="title--wrap">
    {/* <div className="study--title">{study.topic}</div> */}
    <div className="lecturer--wrap">
      <span className="lecturer">강사진</span>
      <span className="lecturer--list">
          {renderLecturers(lecturers)}
      </span>
    </div>
  </div>)
}

export default StudyTitle 