/** @jsx jsx */
import React, {Fragment} from "react"
import {jsx,css} from '@emotion/core'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faGithub} from "@fortawesome/free-brands-svg-icons"
import {faAt} from "@fortawesome/free-solid-svg-icons"

type MemberProps = {
    position: string;
    image?: string;
    name: string;
    school: string;
    address1: string;
    address2?: string;
};

const MemberCardStyle=css`
margin: 1rem 0rem;
padding: 0.5rem 0.5rem;
border-right: 3px solid #33a23d;
border-top: 3px solid #33a23d;
border-radius:0 7px 0 0;
display:flex;
flex-direction:column;
align-items:center;
`
const imgStyle=css`
width:240px;
height:240px;
`
const addrStyle=css`
font-size:12px;
`
const addrIconStyle=css`
margin-right: 0.3rem;
`

export default function MemberCard(props:MemberProps){
    return(
    <div css={MemberCardStyle}>
        <img css={imgStyle} alt={props.name} src={props.image}/>
        <div css={{width:"95%"}}>
            <div css={{fontSize:"16px", fontWeight:"bold"}}>{props.name}<sub css={{fontWeight:"normal"}}>{props.position}</sub></div>
            <div css={{fontSize:"14px"}}>{props.school}</div>
            <div css={addrStyle}>
                <FontAwesomeIcon css={addrIconStyle} icon={faAt} />
                {props.address1}
            </div>
            {props.address2 &&
            <div css={addrStyle}>
                <FontAwesomeIcon css={addrIconStyle} icon={faGithub} />
                {props.address2}
            </div>
            }
            
        </div>
    </div>
    );

}