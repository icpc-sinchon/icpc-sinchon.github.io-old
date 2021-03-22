import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faAt, faCode } from "@fortawesome/free-solid-svg-icons"

import MemberProps from "@components/organisms/MemberCard"
import MemberCard from "@components/organisms/MemberCard"
import { render } from "react-dom"

type MemberCardProps = {
  season: string
  organizer: Array<any>
  cache: string
}

const MembersWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin: 0 auto 8rem;
  padding: 0 0 0 1rem;
  max-width: 1800px;
`

const SeasonTitle = styled.h1`
  color: #33a23d;
  margin-bottom: 1rem;
  font-size: 2em;
`

export default function MemberCardWrapper(props: MemberCardProps) {
  const renderMember = (member: MemberProps) => (
    <MemberCard
      position={member.position}
      image={
        "https://github.com/" + member.address2 + ".png?cache=" + props.cache
      }
      name={member.name}
      school={member.school}
      address1={member.address1}
      address2={member.address2}
      address3={member.address3}
    />
  )
  return (
    <div style={{ textAlign: "center" }}>
      <SeasonTitle>{props.season}</SeasonTitle>
      <MembersWrap>
        {props.organizer.map(member => renderMember(member))}
      </MembersWrap>
    </div>
  )
}
