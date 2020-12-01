/** @jsx jsx */
import React from "react";
import {jsx, css} from '@emotion/core'

type ActivityProps={
    image: string;
    name: string;
    content: string;
};

const activityStyle=css`
margin: 0 0.3rem;
padding: 0 0.5rem;
display:flex;
width:100%;
flex-direction:column;
justify-contnet:center;
align-items:center;
`

const nameStyle = css`
font-size:0.9rem;
padding: 0.5rem 0.5rem;
font-weight:bold;
`
const contentStyle=css`
font-size:0.7rem;
padding: 0.5rem 1rem 2rem 1rem;
`

const imgStyle=css`
height:35vh;
width: 100%;
max-width:70vh;
height:auto;
padding-top:50%;
`

export default function Activity(props:ActivityProps){
    return(
      <div css={activityStyle}>
        <img css={imgStyle} alt={props.name} src={props.image}/>
        <div css={nameStyle}>{props.name}</div>
        <div css={contentStyle}>{props.content}</div> 
      </div>   
    );
  }