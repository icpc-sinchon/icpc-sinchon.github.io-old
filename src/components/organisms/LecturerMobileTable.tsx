import { css } from "@emotion/core"
import React from "react"
type TestProps = {
  lecturers: Array<any>
  name: string
  lecturer: string
  lecturer1: string
  lecturer2?: string
  lecturer3?: string
}
const NameCss = css`
  font-family: "appleNeoM";
  font-size: 1.1rem;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  text-align: center;
  border-bottom: none;
`
const TitleCss = css`
  font-size: 1.5rem;
  font-family: "appleNeoR";
  margin-bottom: 0.5rem;
  text-align: left;

  border-bottom: 1px solid #707070;
  width: 5rem;
  padding-bottom: 0.6rem;
  padding-left: 0.4rem;
`
const TableCss = css`
  width: 100%;
  margin: 0 auto;
`
const SchoolCss = css`
  font-size: 0.8rem;
`
export default function LecturerMobileTable(props: TestProps) {
  return (
    <div className="lecturer--wrap--mobile">
      <table css={TableCss}>
        <caption css={TitleCss}>강사진</caption>
        <tbody>
          {props.lecturers.map((item, key) => {
            if (key % 2 == 0) {
              return (
                <td css={NameCss}>
                  {item.name}
                  <span css={SchoolCss}>{item.school}</span>
                </td>
              )
            } else {
              return (
                <td css={NameCss}>
                  {item.name}
                  <span css={SchoolCss}>{item.school}</span>
                </td>
              )
            }
          })}
        </tbody>
      </table>
    </div>
  )
}
