import { css } from "@emotion/core"
import React from "react"
type TestProps = {
  name: string
  lecturer: string
  lecturer1: string
  lecturer2: string
  lecturer3: string
}
const NameCss = css`
  font-family: "appleNeoM";
  font-size: 1.1rem;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  text-align: center;
  border-bottom:none;

`
const TitleCss = css`
  font-size: 1.5rem;
  font-family: "appleNeoR";
  margin-bottom: 0.5rem;
  
  border-bottom: 1px solid #707070;
  width: 5rem;
  padding-bottom: 0.6rem;
  padding-left: 0.4rem;
`
const TableCss=css`
  width: 20rem;
  margin: 0 auto;
`
const TrCss=css`
`
export default function LecturerMobileTable(props: TestProps) {
  return (
    <div className="lecturer--wrap--mobile">
      <table css={TableCss}>
      <caption css={TitleCss}>{props.lecturer}</caption>
        <tbody>
          <tr css={TrCss}>
            <td css={NameCss}>{props.lecturer1}</td>
            <td css={NameCss}>{props.lecturer2}</td>
            <td css={NameCss}>{props.lecturer3}</td>
          </tr>
          {/* <tr>
            <td></td>
            <td></td>
            <td></td>
          </tr> */}
        </tbody>
      </table>
    </div>
  )
}
