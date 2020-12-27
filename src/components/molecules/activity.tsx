/** @jsx jsx */
import React from "react";
import {jsx, css} from '@emotion/core';

type ActivityProps={
    image: string;
    name: string;
    content: string;
};

const activityStyle=css`
padding: 0rem 0.2rem;
display:flex;
width:100%;
flex-direction:column;
justify-contnet:center;
align-items:center;
`

const nameStyle = css`
font-size:0.9rem;
font-weight:bold;
width:100%;
text-align:center;
`
const contentStyle=css`
font-size:0.7rem;
padding: 1rem 1rem 2rem 1rem;
width:90%;
`

const imgStyle=css`
height:35vh;
width: 100%;
max-width:70vh;
height:auto;
margin-bottom: 1.45rem;
`

export default function Activity(props:ActivityProps){
    return(
      <div css={activityStyle}>
        <img css={imgStyle} alt={props.name} src={props.image}/>
        <div css={nameStyle} style={{padding: "0.5rem 0.5rem"}}>{props.name}</div>
        <div css={contentStyle}>{props.content}</div> 
      </div>   
    );
  }