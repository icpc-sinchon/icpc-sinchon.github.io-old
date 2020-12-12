/** @jsx jsx */
import React from "react";
import {jsx, css} from '@emotion/core';

type ClubProps={
    image: string;
    name: string;
    content?: string;
};

const nameStyle = css`
font-size:0.9rem;
font-weight:bold;
width:100%;
text-align:center;
`

export default function Club(props:ClubProps){
    return(
        <div className="club">
            <img alt = {props.name} src={props.image}/>
            <div css={nameStyle}>{props.name}</div>
            <p>{props.content}</p>
        </div>
    );
}