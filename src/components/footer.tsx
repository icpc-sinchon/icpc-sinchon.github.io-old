import React from "react"
import Address from "./molecules/address"

const Footer = () => {
    return(
        <footer >
          <div className="footer-content">
            <div className="footer-content--title">ICPC Sinchon</div>
            <div className="footer-content--items">
              <Address email="icpc.sinchon@gmail.com" kakao="@icpc_sinchon"/>
            </div>
          </div>
          <div className="footer-content">
            <div className="footer-content--title">Contributors</div>
            <div className="footer-content--items">
              <div className="footer-items--content-column">
                <Address name="이재열" github="https://github.com/malkoG" email="rijgndqw012@gmail.com"/>
                <Address name="서연주" github="https://github.com/YeonjuSeo" email="tjduswn1219@gmail.com"/>
              </div>
              <div className="footer-items--content-column">
                <Address name="남수연" github="https://github.com/mori8" email="kaithape@gmail.com"/>
                <Address name="이동주" github="https://github.com/nant0313" email="nant0313@gmail.com"/>
              </div>
            </div>
          </div>
        </footer>
    )
}

export default Footer;