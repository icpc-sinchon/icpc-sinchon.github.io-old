import React from "react"
import styled from "styled-components"

type ClubProps = {
  id: string
  image: string
  name: string
  content?: string
}

const ClubText = styled.div`
  font-size: 0.9rem;
  font-weight: 900;
  width: 100%;
  text-align: center;
`
const ClubImg = styled.img`
  width: 100%;
  height: 100%;
`
const ClubTextWrap = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
`
const SchoolName = styled.p`
  text-align: right;
  width: 12rem;
  font-size: 0.94rem;
`
export default function Club(props: ClubProps) {
  return (
    <div className="club">
      <div className="club--img">
        <ClubImg alt={props.name} src={props.image} draggable={false} />
      </div>
      <ClubTextWrap className="school--text">
        <h1>
          <ClubText
            dangerouslySetInnerHTML={{
              __html: props.name.replace(new RegExp("\n", "g"), "<br/>"),
            }}
          />
        </h1>
        <SchoolName>{props.content}</SchoolName>
      </ClubTextWrap>
    </div>
  )
}
