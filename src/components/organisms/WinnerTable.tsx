import React from "react"
import styled from "styled-components"

type infoProps = {
  info: Array<any>
}

const WinnerTableWrap = styled.div`
  display: flex;
`

const WinnerTableTitle = styled.div`
  width: 5rem;
  padding: calc(0.725rem - 1px) 0;
  font-size: 1.2em;
  font-weight: 600;
`

const BorderedTh = styled.th`
  border-bottom: 1px solid #666;
`

export default function WinnerTable(props: infoProps) {
  return (
    <WinnerTableWrap className="test">
      <WinnerTableTitle className="test--title">
        {props.info.div ? <p>Div. {props.info.div}</p> : "결과"}
      </WinnerTableTitle>
      <table className="rank">
        <thead>
          <tr>
            <BorderedTh>순위</BorderedTh>
            <BorderedTh>푼 문제 수</BorderedTh>
            <BorderedTh>팀명</BorderedTh>
            <BorderedTh>구성원</BorderedTh>
            <BorderedTh>소속</BorderedTh>
          </tr>
        </thead>
        <tbody>
          {props.info.winner.map(data => {
            return (
              <tr>
                <td>{data["prize"]}</td>
                <td>{data["solved"]}</td>
                <td css={{ width: "26rem" }}>{data["team"]}</td>
                <td>{data["member"]}</td>
                <td>{data["school"]}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </WinnerTableWrap>
  )
}
