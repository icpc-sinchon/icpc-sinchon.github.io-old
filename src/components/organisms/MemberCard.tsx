import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faAt, faCode } from "@fortawesome/free-solid-svg-icons"

type MemberProps = {
  position: string
  image: string
  name: string
  school: string
  address1: string
  address2: string
  address3: string
}

const MemberCardWrap = styled.a`
  margin: 1rem 0rem;
  padding: 1rem 1.5rem 1rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: black;
  text-align: left;
`
const MemberCardImg = styled.img`
  width: 150px;
  height: 150px;
  margin-right: 1.5rem;
  border-radius: 50%;
`
const MemberCardAddress = styled.div`
  font-size: 13px;
`
const MemberCardInfo = styled.div`
  width: 10rem;
`

export default function MemberCard(props: MemberProps) {
  return (
    <MemberCardWrap
      className="userAtag"
      href={"https://www.acmicpc.net/user/" + props.address3}
    >
      <MemberCardImg className="userImg" alt={props.name} src={props.image} />
      <MemberCardInfo className="memberInfo--wrapper">
        <div style={{ fontSize: "20px", fontWeight: "bold" }}>
          {props.name}
          <sub style={{ fontWeight: "normal" }}>{props.school}</sub>
        </div>
        <div style={{ fontSize: "14px" }}>{props.position}</div>
        <MemberCardAddress className="memberInfo--mail">
          <FontAwesomeIcon
            className="at--icon"
            style={{ marginRight: `0.3rem` }}
            icon={faAt}
          />
          {props.address1}
        </MemberCardAddress>
        {props.address2 && (
          <MemberCardAddress>
            <FontAwesomeIcon
              style={{ marginRight: `0.3rem` }}
              icon={faGithub}
            />
            {props.address2}
          </MemberCardAddress>
        )}
        <MemberCardAddress>
          <FontAwesomeIcon style={{ marginRight: `0.3rem` }} icon={faCode} />
          {props.address3}
        </MemberCardAddress>
      </MemberCardInfo>
    </MemberCardWrap>
  )
}
