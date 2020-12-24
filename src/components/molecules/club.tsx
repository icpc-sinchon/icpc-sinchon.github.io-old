/** @jsx jsx */
import React from "react"
import { jsx, css } from "@emotion/core"

type ClubProps = {
  id: string
  image: string
  name: string
  content?: string
}

const nameStyle = css`
  font-size: 0.9rem;
  font-weight: 900;
  width: 100%;
  text-align: center;
`
const imgStyle = css`
  width: 100%;
  height: 100%;
`
const schoolStyle = css`
  position: absolute;
  bottom: 0;
  right: 0;
`
const pStyle = css`
  text-align: right;
  width: 12rem;
  font-size: 0.94rem;
`
export default function Club(props: ClubProps) {
  return (
    <div className="club">
      <div className="club--img">
        <img css={imgStyle} alt={props.name} src={props.image} draggable={false} />
      </div>
      <div className="school--text" css={schoolStyle}>
        <h1>
          <div
            css={nameStyle}
            dangerouslySetInnerHTML={{
              __html: props.name.replace(new RegExp("\n", "g"), "<br/>"),
            }}
          />
        </h1>
        <p css={pStyle}>{props.content}</p>
      </div>
    </div>
  )
}
