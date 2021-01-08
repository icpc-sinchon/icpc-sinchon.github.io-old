/** @jsx jsx */
import React, {Fragment} from "react"
import { jsx, css } from '@emotion/core'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faAt, faCode } from "@fortawesome/free-solid-svg-icons"

import MemberProps from "@components/organisms/MemberCard"
import MemberCard from "@components/organisms/MemberCard"
import { render } from "react-dom"

type MemberCardProps = {
    season: string,
    organizer: Array<any>,
    cache: string
};

const MembersWrapperStyle=css`
display:flex;
flex-wrap:wrap;
justify-content:space-evenly;
margin-bottom: 8rem;
padding: 0 0 0 1rem;
`

const SeasonTitleStyle = css`
    color: #33a23d;
    margin-bottom: 1rem;
    font-size: 2em;
`;

export default function MemberCardWrapper(props:MemberCardProps) {
    const renderMember = (member:MemberProps) =>
        <MemberCard position={member.position} image={"https://github.com/"+member.address2+".png?cache="+props.cache} name={member.name} school={member.school} address1={member.address1} address2={member.address2} address3={member.address3}/>;
    return(
        <div css={{textAlign:"center"}}>
            <h1 css={SeasonTitleStyle}>{props.season}</h1>
            <div css={MembersWrapperStyle}>
                {props.organizer.map((member) => renderMember(member))}
            </div>
        </div>
    );
}