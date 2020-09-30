import React from "react"
import { IContest } from "@models/contest"

import styled from "@emotion/styled"

const ScoreBoard: React.FC<{ contest: IContest }> = ({ contest }) => {
  const renderMetaInfomation = (_contest) => {
    if (_contest.problem_picker !== undefined) {
      return (
        <p>문항 선정 : <span dangerouslySetInnerHTML={ {__html: _contest.problem_picker} }></span></p>
      )
    } else {
      return (
        <ul>
          <li>출제진 : <span dangerouslySetInnerHTML={ {__html: _contest.problem_setter} }></span></li>
          <li>검수진 : <span dangerouslySetInnerHTML={ {__html: _contest.problem_reviewer} }></span></li>
        </ul>
      )
    }
  }
  return (
    <div>
      <div>
        {contest.contest_name}
      </div>
      {renderMetaInfomation(contest)}
      <ul>
        { contest.awards.map(award => 
            <li key={contest.contest_name + " " + award.prize + " " + award.member}>
              { award.prize} : <span dangerouslySetInnerHTML={ {__html: award.member} }></span>
            </li>) }
      </ul>
    </div>
  )
}


export default ScoreBoard;