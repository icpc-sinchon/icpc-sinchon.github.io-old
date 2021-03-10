/** @jsx jsx */
import React, { Component, HTMLAttributes } from "react"
import { jsx, css } from "@emotion/core"

// images
import mainImage from "../../images/suapc2020.jpg"

const logoScreenWrapperStyle = css`
  padding: 6.7rem 0.7rem 4.3rem 1rem;
  margin: 1rem auto 5rem auto;
  background-image: url(${mainImage});
  background-repeat: no-repeat;
  background-position: center center;
  max-width: 2210px;
`
const bgStyle = css`
  position: relative;
  text-align: right;
  padding-right: 3.3rem;
`
const bgLayerStyle = css`
  background-color: rgba(255, 255, 255, 0.8);
  display: inline-block;
  padding-left: 1rem;
`
const logoNumStyle = css`
  color: rgb(0, 132, 13);
  font-family: appleNeoB;
  position: absolute;
  top: 0.4rem;
  right: 2.6rem;
  font-size: 0.85rem;
`
const logoTitleStyle = css`
  font-family: segoeuib;
  color: #00840d;
  font-size: 1.6rem;
  margin: 1.2rem 0;
`
const logoContentStyle = css`
  font-family: "appleNeoM";
  font-size: 2.5em;
  color: black;
`

export default function LogoScreen() {
  return (
    <div className="balloon" css={logoScreenWrapperStyle}>
      <div className="balloon--text" css={bgStyle}>
        <div className="balloon--text--whiteback" css={bgLayerStyle}>
          <div className="balloon--240" css={logoNumStyle}>
            240
          </div>
          <h1 className="main--title" css={logoTitleStyle}>
            ICPC Sinchon
          </h1>
          <div css={logoContentStyle}>
            <div className="balloon--title--sin" css={{ lineHeight: `` }}>
              신촌지역 대학교
            </div>
            <div className="balloon--title--pmg" css={{ lineHeight: `3.8rem` }}>
              프로그래밍 대회 동아리 연합
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
