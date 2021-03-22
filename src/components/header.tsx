import { Link } from "gatsby"
import React, { memo, useEffect } from "react"
import styled from "styled-components"
import "./header.css"

const Header = () => {
  return (
    <header
      style={{
        background: `white`,
        display: `flex`,
        alignItems: `center`,
        marginBottom: `1.45rem`,
        height: `75px`,
        width: `100%`,
        position: "fixed",
        top: `0`,
        zIndex: 10000,
        fontFamily: "appleNeoM",
      }}
    >
      {/* <Link
        to="/"
        className="ICPCSinchon"
        style={{
          color: `#33a23d`,
          textDecoration: `none`,
          marginLeft: `1.2rem`,
          fontSize: `1em`,
          fontWeight: "bold",
          lineHeight: `50px`,
          display: `inline-block`,
          verticalAlign: `middle`,
          fontFamily: "appleNeoM",
        }}
      >
        {siteTitle}
      </Link> */}
      <Link to="/">
        <div
          style={{
            display: `flex`,
            alignItems: `center`,
            marginLeft: `2.2rem`,
          }}
        >
          <img src="/240svg.svg" style={{ width: `2rem`, height: `2rem` }} />
          {/* <LogoSpanWrapper>
            <div>ICPC</div>
            <div>Sinchon</div>
          </LogoSpanWrapper> */}
        </div>
      </Link>
      <div style={{ flexGrow: 1 }}></div>
      <Link
        to="/suapc"
        className="Suapc"
        style={{
          color: `#33A23D`,
          textDecoration: `none`,
          marginRight: `1.5rem`,
          fontSize: `0.8em`,
          fontWeight: 700,
          fontFamily: "appleNeoM",
        }}
      >
        SUAPC{" "}
        <span
          style={{
            fontSize: `0.6em`,
            fontFamily: "appleNeoM",
          }}
        >
          2021
        </span>
      </Link>
      <Link
        to="/hall-of-fame"
        className="HallOfFame"
        style={{
          color: `#333333`,
          textDecoration: `none`,
          marginRight: `1.5rem`,
          fontSize: `0.8em`,
          lineHeight: `50px`,
          display: `inline-block`,
          verticalAlign: `middle`,
          fontWeight: 700,
          fontFamily: "appleNeoM",
        }}
      >
        Hall of Fame
      </Link>
      <Link
        to="/members"
        className="Organizers"
        style={{
          color: `#333333`,
          textDecoration: `none`,
          marginRight: `2rem`,
          fontSize: `0.8em`,
          lineHeight: `50px`,
          display: `inline-block`,
          verticalAlign: `middle`,
          fontWeight: 700,
          fontFamily: "appleNeoM",
        }}
      >
        Organizers
      </Link>
    </header>
  )
}
const LogoSpanWrapper = styled.div`
  font-family: "inter";
  font-weight: 600;
  font-size: 14.9px;
  line-height: 13.5px;
  margin-left: 7.5px;
  color: rgb(51, 51, 51);
`
export default memo(Header)
