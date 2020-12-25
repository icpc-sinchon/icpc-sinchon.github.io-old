import React from "react"

type TestProps = {
    TestType:string
    FirstRankName: string
    SecondRankName: string
    ThirdRankName: string
    ProbPicker1: string
    ProbPicker2: string
}

export default function Test(props: TestProps) {
    return (
        <div className="test">
        <table className="rank">
        <caption className="title">{props.TestType}</caption>
          <tbody>
            <tr>
              <td>1위</td>
              <td>{props.FirstRankName}</td>
            </tr>
            <tr>
              <td>2위</td>
              <td>{props.SecondRankName}</td>
            </tr>
            <tr>
              <td>3위</td>
              <td>{props.ThirdRankName}</td>
            </tr>
          </tbody>
        </table>
        <table className="ProbPicker--wrap">
          <tbody>
            <tr>
              <td>문항선정</td>
              <td>{props.ProbPicker1}</td>
            </tr>
            <tr>
              <td></td>
              <td>{props.ProbPicker2}</td>
            </tr>
          </tbody>
        </table>
        </div>
    )
}