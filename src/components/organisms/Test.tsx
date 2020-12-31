import { css } from "@emotion/core"
import React from "react"

type TestProps = {
  TestType: string
  awards: object
  problem_picker: object
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
  padding-bottom: 0;
`
const ProbPickCss = css`
  padding-right: 0;
  padding-bottom: 0;
  padding-top: 0;
`
const Test:React.FC<{contests}>= ({contests})=>(
  <>
    {contests.map(contest=>{
      return(
        <div className="test">
          <table className="rank" css={RankCss}>
            <caption className="title" css={TitleCss}>
            {contest.contest_name}
            </caption>
            <tbody>
              {contest.awards.map(award=>{
                return(
                <tr>
                  <td className="sunwee" css={SunweeCss}>{award.prize}
                  </td>
                  <td className="name" css={NameCss}>
                  {award.member}
                  <span className="school" css={{fontSize: "0.8rem"}}>
                    {award.school}
                    </span>
                  </td>
                  
            </tr>
            )
          })
          }
        </tbody>
      </table>
      <table className="ProbPicker--wrap" css={{display:"inline-block"}}>
        <caption className="title" css={TitleProbPickCss}>
          &nbsp;
        </caption>
        <tbody>
          <td className="ProbPick" css={ProbPickCss}>
              문항선정
          </td>
          {contest.problem_picker.map(picker=>{
            return(
            <tr>
              <td className="name" css={NameCss}>
                {picker.name}
                <span className="school" css={{fontSize: "0.8rem"}}>
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
  </>
)
export default Test