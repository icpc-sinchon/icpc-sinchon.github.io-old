import { css } from "@emotion/core"
import React from "react"

type TestProps = {
  TestType: string
  FirstRank: string
  SecondRank: string
  ThirdRank: string
  ProbPicker1: string
  ProbPicker2: string
  ProbPicker3: string
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

  border-bottom: 1px solid hsla(0,0%,0%,0.12);
  width: 6.3rem;
  padding-bottom: 0.6rem;
  padding-left: 0.4rem;
`
const TitleProbPickCss = css`
  font-size: 1.5rem;
  font-family: "appleNeoR";
  margin-bottom: 0.7rem;

  width: 6.3rem;
  padding-bottom: 0.6rem;
  padding-left: 0.4rem;
`
const SunweeCss = css`
  font-size: 1.1rem;
  padding-right: 0;
  padding-bottom: 0;
`
const NameCss = css`
  font-family: "appleNeoM";
  font-size: 1.3rem;
  padding-bottom: 0;
`
const ProbPickCss = css`
  padding-right: 0;
  padding-bottom: 0;
  padding-top: 0;
`
const NoBorder=css`
  border: none;
`
export default function Test(props: TestProps) {

  return (
    <div className="test">
      <table className="rank" css={RankCss}>
        <caption className="title" css={TitleCss}>
          {props.TestType}
        </caption>
        <tbody>
          <tr>
            <td className="sunwee" css={SunweeCss}>
              1위
            </td>
            <td className="name" css={NameCss}>
              {props.FirstRank}
            </td>
          </tr>
          <tr>
            <td className="sunwee" css={SunweeCss}>
              2위
            </td>
            <td className="name" css={NameCss}>
              {props.SecondRank}
            </td>
          </tr>
          <tr>
            <td className="sunwee" css={SunweeCss}>
              3위
            </td>
            <td className="name" css={NameCss}>
              {props.ThirdRank}
            </td>
          </tr>
        </tbody>
      </table>
      <table className="ProbPicker--wrap">
        <caption className="title" css={TitleProbPickCss}>
          &nbsp;
        </caption>
        <tbody>
          <tr>
            <td className="ProbPick" css={ProbPickCss}>
              문항선정
            </td>
            <td className="name" css={NameCss}>
              {props.ProbPicker1}
            </td>
          </tr>
          <tr>
            <td css={NoBorder}></td>
            <td className="name" css={NameCss}>
              {props.ProbPicker2}
            </td>
          </tr>
          <tr>
            <td css={NoBorder}></td>
            <td className="name" css={NameCss}>
              {props.ProbPicker3}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
