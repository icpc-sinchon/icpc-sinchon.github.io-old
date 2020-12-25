import React from "react"

type TestProps = {
    TestType:string
    FirstRank: string
    SecondRank: string
    ThirdRank: string
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
              <td className="sunwee">1위</td>
              <td className="name">{props.FirstRank}</td>
            </tr>
            <tr>
              <td className="sunwee">2위</td>
              <td className="name">{props.SecondRank}</td>
            </tr>
            <tr>
              <td className="sunwee">3위</td>
              <td className="name">{props.ThirdRank}</td>
            </tr>
          </tbody>
        </table>
        <table className="ProbPicker--wrap">
        <caption className="title">&nbsp;</caption>
          <tbody>
            <tr>
              <td className="ProbPick">문항선정</td>
              <td className="name">{props.ProbPicker1}</td>
            </tr>
            <tr>
              <td></td>
              <td className="name">{props.ProbPicker2}</td>
            </tr>
          </tbody>
        </table>
        </div>
    )
}