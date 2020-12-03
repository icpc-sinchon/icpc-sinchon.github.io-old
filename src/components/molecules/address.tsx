/** @jsx jsx */
import React from "react";
import {jsx, css} from '@emotion/core'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faGithub} from "@fortawesome/free-brands-svg-icons"
import {faAt, faCommentMedical} from "@fortawesome/free-solid-svg-icons"

type AddressProps={
    name?:string;
    github?:string;
    kakao?:string;
    email:string;
};

const addrStyle=css`
margin: 0.5rem 0.5rem 0.8rem 0.5rem;
`
const addrNameStyle=css`
font-size:0.8rem;
`
const addrContentStyle=css`
font-size:0.7rem;
`
const addrIconStyle=css`
margin-right: 0.3rem;
`

export default function Address(props:AddressProps){
    return(
        <div className="footer-content--item" css={addrStyle}>
            <div css={addrNameStyle} className="footer-content--item-name">{props.name}</div>
            {props.github &&
            <a className="footer-content--item-addr" css={addrContentStyle}>
                <FontAwesomeIcon css={addrIconStyle} icon={faGithub} />
                {props.github}
            </a>
            }
            <div className="footer-content--item-addr" css={addrContentStyle}>
                <FontAwesomeIcon css={addrIconStyle} icon={faAt} />
                {props.email}
            </div>
            {props.kakao &&
            <div className="footer-content--item-addr" css={addrContentStyle}>
                <FontAwesomeIcon css={addrIconStyle} icon={faCommentMedical} />
                {props.kakao}
            </div>
            }
        </div>
    );
}