/** @jsx jsx */
import React from "react"
import { jsx, css } from "@emotion/core"

type TitleProps = {
  title: string
}

const hightlightStyle = css`
  margin: 0rem 0rem 0.2rem 0rem;
  padding: 0 0.4rem 0.35rem 0.4rem;
  display:inline-block;
  border-bottom: 0.3rem solid rgba(161, 203, 149, 0.5);
  font-family: 'appleNeoR';
  font-size: 2rem;
  font-weight: bold;
  color: #489A02;
`
const gamssaStyle = css`
  display: inline-block;
  margin: 0rem 0rem 3rem 2rem;
  padding: 0 2.9rem 0 0.3rem;
  border-bottom: 0.3rem solid rgba(161, 203, 149, 0.5);
`
export default function StyledTitle(props: TitleProps) {
  return (
    <div css={gamssaStyle}>
      <div css={hightlightStyle}>{props.title}</div>
    </div>
  )
}
