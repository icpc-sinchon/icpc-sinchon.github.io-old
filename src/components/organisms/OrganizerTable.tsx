import React from "react"
import styled from "styled-components"

type infoProps = {
  name: string
  info: Array<any>
}

const OrganizerTableWrap = styled.div`
  display: flex;
`

const OrganizerTableTitle = styled.div`
  width: 5rem;
  padding: calc(0.725rem - 1px) 0;
  font-size: 1.2em;
  font-weight: 600;
`

const BorderedTh = styled.th`
  border-bottom: 1px solid #666;
`

export default function OrganizerTable(props: infoProps) {
  return (
    <OrganizerTableWrap>
      <OrganizerTableTitle className="organizer--title">
        <p>{props.name}</p>
      </OrganizerTableTitle>
      <table>
        <thead>
          <tr>
            <BorderedTh className="organizer--table--name">이름</BorderedTh>
            <BorderedTh>소속</BorderedTh>
          </tr>
        </thead>
        <tbody>
          {props.info.map(data => {
            return (
              <tr>
                <td>{data["name"]}</td>
                <td css={{ width: "14rem" }}>{data["school"]}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </OrganizerTableWrap>
  )
}
