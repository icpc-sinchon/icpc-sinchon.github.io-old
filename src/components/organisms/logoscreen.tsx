import React, { Component, HTMLAttributes } from "react"
import styled from "styled-components"

// images
import mainImage from "../../images/suapc2020.jpg"

const LogoWrap = styled.div`
  padding: 6.7rem 0.7rem 4.3rem 1rem;
  margin: 1rem auto 5rem auto;
  background-image: url(${mainImage});
  background-repeat: no-repeat;
  background-position: center center;
  max-width: 2210px;
`
const LogoTextWrap = styled.div`
  position: relative;
  text-align: right;
  padding-right: 3.3rem;
`
const LogoWhiteBack = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  display: inline-block;
  padding-left: 1rem;
`
const LogoTitle = styled.h1`
  font-family: segoeuib;
  color: #00840d;
  font-size: 1.6rem;
  margin: 1.2rem 0;
`
const LogoContent = styled.div`
  font-family: "appleNeoM";
  font-size: 2.5em;
  color: black;
`

export default function LogoScreen() {
  return (
    <LogoWrap className="balloon">
      <LogoTextWrap className="balloon--text">
        <LogoWhiteBack className="balloon--text--whiteback">
          <LogoTitle className="main--title">
            ICPC Sinchon
          </LogoTitle>
          <LogoContent>
            <div className="balloon--title--sin" css={{ lineHeight: `` }}>
              신촌지역 대학교
            </div>
            <div className="balloon--title--pmg" css={{ lineHeight: `3.8rem` }}>
              프로그래밍 대회 동아리 연합
            </div>
          </LogoContent>
        </LogoWhiteBack>
      </LogoTextWrap>
    </LogoWrap>
  )
}
