import { Link } from "gatsby"
import React from "react"

type HeaderProps = {
  siteTitle: string
}

const Header : React.FC<HeaderProps> = ({ siteTitle = '' }) => (
  <header
    style={{
      background: `white`,
      marginBottom: `1.45rem`,
      height: `50px`,
      width: `100%`,
      position: "fixed",
      top: `0`,
      zIndex: 10000
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        display: `flex`,
      }}
    >
        <Link
          to="/"
          style={{
            color: `#33a23d`,
            textDecoration: `none`,
            marginLeft: `1.2rem`,
            fontSize:`1.1em`,
            fontWeight: 'bold',
            lineHeight: `50px`,
            display: `inline-block`,
            verticalAlign: `middle`,
          }}
        >
          {siteTitle}
        </Link>
        <div style={{ flexGrow: 1 }}> 
        </div>
        {/* <Link
        to="/suapc"
        style={{
          color: `#33A23D`,
          textDecoration: `none`,
          marginRight: `1.5rem`,
          fontSize:`0.8em`,
          lineHeight: `50px`,
          display: `inline-block`,
          verticalAlign: `middle`,
          fontWeight: `700`,
        }}>
        SUAPC <span
        style={{
          fontSize:`0.3em`
        }}>2021</span>
        </Link> */}
        <Link
          to="/hall-of-fame"
          style={{
            color: `#333333`,
            textDecoration: `none`,
            marginRight: `1.5rem`,
            fontSize:`0.8em`,
            lineHeight: `50px`,
            display: `inline-block`,
            verticalAlign: `middle`,
            fontWeight: `700`,
          }}
        >
          Hall of Fame
        </Link>
        <Link
          to="/members"
          style={{
            color: `#333333`,
            textDecoration: `none`,
            marginRight: `2rem`,
            fontSize:`0.8em`,
            lineHeight: `50px`,
            display: `inline-block`,
            verticalAlign: `middle`,
            fontWeight: `700`,
          }}
        >
          Organizers
        </Link>
    </div>
  </header>
)

export default Header
