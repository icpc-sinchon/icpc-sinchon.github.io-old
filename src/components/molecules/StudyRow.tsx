import React from "react"
import { IStudy } from "@models/study"

import styled from "@emotion/styled"
import ScoreBoard from "./ScoreBoard";

const ContestsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;


const StudyRow: React.FC<{ study: IStudy }> = ({ study }) => {
  const renderContests = (study) => {
    if (study?.contests?.length >= 1) {
      return (
      <ContestsWrapper>
        { study.contests.map(contest => <ScoreBoard key={study.topic +  " " + contest.contest_name} contest={contest} />) }
      </ContestsWrapper>)
    } else {
      return null;
    }
  }

  return (<>
    <ul>
        <li>
            스터디 주제 : { study.topic }
        </li>
        <li>
            강사 : <span dangerouslySetInnerHTML={ {__html: study.lecturer} }></span>
        </li>
    </ul>
    <div>
      { renderContests(study) }
    </div>
  </>)
}

export default StudyRow