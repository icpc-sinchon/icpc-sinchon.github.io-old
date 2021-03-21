import { css } from "@emotion/core"
import React, { Fragment } from "react"
import { IAward, IContest } from "@models/contest.d.ts"

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
const StCss=css`
font-size: 0.7rem;
`
const WrapCss = css``
export default function Test(props: TestProps) {
  return (
    <Fragment>
      {props.contests.map(contest => {
        return (
          <div className="test">
            <table className="hof--rank" css={RankCss}>
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
            </table>
            <table
              className="ProbPicker--wrap"
              css={{ display: "inline-block" }}
            >
              <caption className="title" css={TitleProbPickCss}>
                &nbsp;
              </caption>
              <tbody>
                {contest.problem_picker.map((picker, key) => {
                  if (key == 0)
                    return (
                      <tr>
                        <td css={{padding: 0}}>문항선정</td>
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
                        <td css={{border:"none"}}></td>
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
            </table>
          </div>
        )
      })}
    </Fragment>
  )
}
