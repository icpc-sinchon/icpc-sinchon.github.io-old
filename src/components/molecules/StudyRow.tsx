import React from "react"
import { IStudy } from "@models/study"

import styled from "@emotion/styled"

const ContestsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;


const StudyRow: React.FC<{ study: IStudy }> = ({ study }) => {
  const renderScoreBoard = (contest) => {
    const contestKey = study.topic + " " + contest.contest 
    return (<div key={contestKey}>
      <p>{contest.contest}</p>
      <ul>
        { contest.awards.map(award => 
            <li key={contestKey + " " + award.prize}>{ award.prize} : { award.member }</li>) }
      </ul>
    </div>)
  }

  const renderContests = (study) => {
    if (study?.contests?.length >= 1) {
      return (
      <ContestsWrapper>
        { study.contests.map(contest => renderScoreBoard(contest)) }
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
            강사 : { study.lecturer }
        </li>
    </ul>
    <div>
      { renderContests(study) }
    </div>
  </>)
}

export default StudyRow