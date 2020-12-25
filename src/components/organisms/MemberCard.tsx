/** @jsx jsx */
import React, {Fragment} from "react"
import {jsx,css} from '@emotion/core'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faGithub} from "@fortawesome/free-brands-svg-icons"
import {faAt} from "@fortawesome/free-solid-svg-icons"

type MemberProps = {
    position: string;
    image: string;
    name: string;
    introduce?:string;
    school: string;
    address1: string;
    address2: string;
};

const MemberCardStyle=css`
margin: 1rem 0rem;
padding: 1rem 4rem 1rem 1rem;
display:flex;
align-items:center;
justify-content:center;
text-decoration:none;
color:black;
border-top:1px solid #707070;
border-bottom:1px solid #707070;
`
const imgStyle=css`
width:220px;
height:220px;
margin-right: 2rem;
`
const addrStyle=css`
font-size:14px;
`
const addrIconStyle=css`
margin-right: 0.3rem;
`

export default function MemberCard(props:MemberProps){
    return(
    <a href={props.address2} css={MemberCardStyle}>
        <img css={imgStyle} alt={props.name} src={props.image}/>
        <div css={{width:"95%"}}>
            <div css={{fontSize:"20px", fontWeight:"bold"}}>{props.name}<sub css={{fontWeight:"normal"}}>{props.position}</sub></div>
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
    </a>
    );

}