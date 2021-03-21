import { css } from "@emotion/core"
import React, { Fragment } from "react"
import { IAward, IContest } from "@models/contest.d.ts"
import styled from "styled-components"

type TestProps = {
  contests: Array<any>
}
const RankCss = css`
  width: 11rem;
  display: inline-block;
  /* 어렵다... */
  float: left;
`
const TitleCss = css`
  font-size: 1.5rem;
  font-family: "appleNeoR";
  margin-bottom: 0.7rem;
  border-bottom: 1px solid hsla(0, 0%, 0%, 0.12);
  padding-bottom: 0.6rem;
  padding-left: 0.4rem;
  text-align: left;
`
const TitleProbPickCss = css`
  font-size: 1.5rem;
  font-family: "appleNeoR";
  margin-bottom: 0.7rem;
  width: 6.3rem;
  padding-bottom: 0.6rem;
  padding-left: 0.4rem;
  text-align: left;
`
const SunweeCss = css`
  font-size: 1.1rem;
  padding-right: 0;
  padding-bottom: 0;
`
const NameCss = css`
  font-family: "appleNeoM";
  font-size: 1.3rem;
  text-align: left;
  padding-bottom: 0;
`
const ProbPickCss = css`
  padding-right: 0;
  padding-bottom: 0;
  padding-top: 0;
`
const StCss = css`
  font-size: 0.7rem;
`
const WrapCss = css``

const RankingGrid = styled.div`
  margin-bottom: 1.9rem;
  display: grid;
  width: 100%;
  text-align: center;
  grid-gap: 0.7rem;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-rows: 2rem;
  &:first-child {
    margin-top: 0.9rem;
  }
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
export default function Test(props: TestProps) {
  return (
    <div className="test">
      {props.contests.map(contest => {
        return (
          <>
            {/* <table className="hof--rank" css={RankCss}>
              <caption className="title" css={TitleCss}>
                {contest.contest_name}
              </caption>
              <tbody>
                {contest.awards.map((award: IAward) => {
                  return (
                    <tr>
                      <td className="sunwee" css={SunweeCss}>
                        {award.prize == 1 ? [1,<span css={StCss}>st</span>] : (award.prize == 2 ? [2,<span css={StCss}>nd</span>] : [3,<span css={StCss}>rd</span>])}
                      </td>
                      <td className="name" css={NameCss}>
                        {award.member}
                        <span className="school" css={{ fontSize: "0.8rem" }}>
                          {award.school}
                        </span>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table> */}
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
                      <td style={{ width: `15rem` }}>문제</td>
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

            {/* <table
              className="ProbPicker--wrap"
              css={{ display: "inline-block" }}
            >
              <caption className="title" css={TitleProbPickCss}>
                &nbsp;
              </caption>
              <tbody>
                {contest.organizer.map((picker, key) => {
                  if (key == 0)
                    return (
                      <tr>
                        <td css={{ padding: 0 }}>{contest.organizer_type}</td>
                        <td className="name" css={NameCss}>
                          {picker.name}
                          <span className="school" css={{ fontSize: "0.8rem" }}>
                            {picker.school}
                          </span>
                        </td>
                      </tr>
                    )
                  else
                    return (
                      <tr>
                        <td css={{ border: "none" }}></td>
                        <td className="name" css={NameCss}>
                          {picker.name}
                          <span className="school" css={{ fontSize: "0.8rem" }}>
                            {picker.school}
                          </span>
                        </td>
                      </tr>
                    )
                })}
              </tbody>
            </table> */}
          </>
        )
      })}
    </div>
  )
}
