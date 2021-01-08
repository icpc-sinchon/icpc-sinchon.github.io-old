/** @jsx jsx */
import React, {Fragment} from "react"
import { jsx, css } from '@emotion/core'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faAt, faCode } from "@fortawesome/free-solid-svg-icons"

type MemberProps = {
    position: string;
    image: string;
    name: string;
    school: string;
    address1: string;
    address2: string;
    address3: string;
};

const MemberCardStyle=css`
margin: 1rem 0rem;
padding: 2rem 3rem;
display: flex;
align-items:center;
justify-content:center;
text-decoration:none;
color:black;
text-align: left;
`
const imgStyle=css`
width:180px;
height:180px;
margin-right: 2rem;
border-radius: 50%;
`
const addrStyle=css`
font-size:13px;
`
const addrIconStyle=css`
margin-right: 0.3rem;
`
const memberInfoStyle=css`
width: 10rem;
`;

export default function MemberCard(props:MemberProps){
    return(
    <a className="userAtag" href={"https://www.acmicpc.net/user/" + props.address3} css={MemberCardStyle}>
        <img className="userImg" css={imgStyle} alt={props.name} src={props.image}/>
        <div 
        className="memberInfo--wrapper"
        css={memberInfoStyle}>
            <div css={{fontSize:"20px", fontWeight:"bold"}}>{props.name}<sub css={{fontWeight:"normal"}}>{props.school}</sub></div>
            <div css={{fontSize:"14px"}}>{props.position}</div>
            <div 
            className="memberInfo--mail"
            css={addrStyle}>
                <FontAwesomeIcon className="at--icon" css={addrIconStyle} icon={faAt} />
                {props.address1}
            </div>
            {props.address2 &&
            <div css={addrStyle}>
                <FontAwesomeIcon css={addrIconStyle} icon={faGithub} />
                {props.address2}
            </div>
            }
            <div css={addrStyle}>
                <FontAwesomeIcon css={addrIconStyle} icon={faCode} />
                {props.address3}
            </div>
        </div>
    </a>
    );

}