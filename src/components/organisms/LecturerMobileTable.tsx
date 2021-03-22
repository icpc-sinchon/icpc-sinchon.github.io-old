import React from "react"
import styled from "styled-components"

type TestProps = {
  lecturers: Array<any>
  name: string
  lecturer: string
  lecturer1: string
  lecturer2?: string
  lecturer3?: string
}

const RankingGrid = styled.div`
  margin-bottom: 1.9rem;
  display: grid;
  width: 100%;
  text-align: center;
  grid-gap: 0.7rem;
  // grid-template-columns: 1fr 1fr 1fr;
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
const RankingElemName = styled.span`
  font-size: 1.1rem;
`
const RankingElemSchool = styled.span`
  font-size: 0.7rem;
`

export default function LecturerMobileTable(props: TestProps) {
  return (
    <RankingGrid
      style={{
        gridTemplateColumns:
          props.lecturers.length === 1
            ? "1fr"
            : props.lecturers.length === 2
            ? "1fr 1fr"
            : "1fr 1fr 1fr",
      }}
    >
      <ContestName>강사진</ContestName>
      {props.lecturers.map((item, key) => {
        return (
          <RankingElem>
            <RankingElemName>{item.name}</RankingElemName>
            <RankingElemSchool>{item.school}</RankingElemSchool>
          </RankingElem>
        )
      })}
    </RankingGrid>
  )
}
