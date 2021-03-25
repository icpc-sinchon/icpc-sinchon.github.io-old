import React from "react"
import { IAward, IContest } from "@models/contest.d.ts"
import styled from "styled-components"

type TestProps = {
  contests: Array<any>
}
const RankingGrid = styled.div`
  margin-bottom: 1.9rem;
  display: grid;
  width: 100%;
  text-align: center;
  grid-gap: 0.7rem;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-rows: 2rem;
`
const ContestName = styled.div`
  width: 4.8rem;
  height: 1.8rem;
  grid-row: 1/2;
  border-bottom: 1px solid #707070;
  text-align: center;
  font-size: 1.2rem;
`
const RankingElem = styled.div`
  grid-row: 2/3;
`
const RankingElemPrize = styled.span`
  font-size: 0.9rem;
`
const RankinNameSchoolWrap = styled.div`
  display: inline-block;
  margin-left: 0.5rem;
`
const RankingElemName = styled.span`
  font-size: 1.1rem;
`
const RankingElemSchool = styled.span`
  font-size: 0.7rem;
`
const ProblemGrid = styled.div`
  display: grid;
  grid-gap: 0.7rem;
`
const TheadProblem = styled.td`
  width: 13rem;
  @media (max-width: 768px) {
    width: 11rem;
  }
`
export default function Test(props: TestProps) {
  return (
    <div className="test">
      {props.contests.map(contest => {
        return (
          <>
            <RankingGrid className="ranking--grid">
              <ContestName>{contest.contest_name}</ContestName>
              {contest.awards.map((award: IAward) => {
                return (
                  <RankingElem className="ranking--elem">
                    <RankingElemPrize>
                      {award.prize === 1 ? (
                        <>
                          1<sup>st</sup>
                        </>
                      ) : award.prize === 2 ? (
                        <>
                          2<sup>nd</sup>
                        </>
                      ) : (
                        <>
                          3<sup>rd</sup>
                        </>
                      )}
                    </RankingElemPrize>
                    <RankinNameSchoolWrap>
                      <RankingElemName>{award.member}</RankingElemName>
                      <RankingElemSchool>{award.school}</RankingElemSchool>
                    </RankinNameSchoolWrap>
                  </RankingElem>
                )
              })}
            </RankingGrid>
            {contest.organizer_type === "출제자" ? (
              <ProblemGrid>
                <ContestName>기출문제</ContestName>
                <table>
                  <thead>
                    <tr>
                      <td>#</td>
                      <TheadProblem>
                        문제
                      </TheadProblem>
                      <td>출제자</td>
                    </tr>
                  </thead>
                  <tbody>
                    {contest.problem_list.map((problem: any, idx: number) => {
                      let index = "ABCDEFGHIJKLMNOP"
                      return (
                        <tr>
                          <td>{index[idx]}</td>
                          <td>
                            <a href={problem.link}>{problem.problem_name}</a>
                          </td>
                          <td>
                            <RankingElemName>
                              {problem.organizer.name}
                            </RankingElemName>
                            <RankingElemSchool>
                              {problem.organizer.school}
                            </RankingElemSchool>
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </ProblemGrid>
            ) : (
              ""
            )}
          </>
        )
      })}
    </div>
  )
}
