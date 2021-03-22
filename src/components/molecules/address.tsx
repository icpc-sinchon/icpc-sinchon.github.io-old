import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faAt, faCommentMedical } from "@fortawesome/free-solid-svg-icons"

type AddressProps = {
  name?: string
  github?: string
  kakao?: string
  email: string
}

const AddressWrap = styled.div`
  margin: 0.5rem 0.5rem 0.8rem 0.5rem;
`
const AddressName = styled.div`
  font-size: 0.8rem;
`
const AddressContent = styled.div`
  font-size: 0.7rem;
`
const AddressLink = styled.a`
  font-size: 0.7rem;
`

export default function Address(props: AddressProps) {
  return (
    <AddressWrap className="footer-content--item">
      <AddressName className="footer-content--item-name">
        {props.name}
      </AddressName>
      {props.github && (
        <AddressLink href={props.github} className="footer-content--item-addr">
          <FontAwesomeIcon style={{ marginRight: `0.3rem` }} icon={faGithub} />
          {props.github}
        </AddressLink>
      )}
      <AddressContent className="footer-content--item-addr">
        <FontAwesomeIcon style={{ marginRight: `0.3rem` }} icon={faAt} />
        {props.email}
      </AddressContent>
      {props.kakao && (
        <AddressContent className="footer-content--item-addr">
          <FontAwesomeIcon
            style={{ marginRight: `0.3rem` }}
            icon={faCommentMedical}
          />
          {props.kakao}
        </AddressContent>
      )}
    </AddressWrap>
  )
}
