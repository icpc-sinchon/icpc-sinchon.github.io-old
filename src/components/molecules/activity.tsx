/** @jsx jsx */
import React, {Fragment} from "react";
import MediaQuery from "react-responsive";
import {jsx, css} from '@emotion/core';

type ActivityProps={
    idx:number;
    image: string;
    name: string;
    content: string;
};

const activityStyle=css`
padding: 0rem 0.2rem;
display:flex;
width:100%;
align-items:center;
`
const mobileActivityStyle=css`
display:flex;
flex-wrap:wrap;
justify-content:center;
`

const imgStyle=css`
width: 100%;
max-width:40vw;
height:auto;
margin-bottom: 1.45rem;
`
const mobileImgStyle=css`
width: 100%;
min-height:25vh;
max-width:450px;
object-fit:contain;
`

const evenContentStyle=css`
display:block;
padding: 1rem 5rem 2rem 7rem;
width: 100%;
`
const oddContentStyle=css`
display:block;
padding: 1rem 7rem 2rem 5rem;
width: 100%;
text-align:right;
`
const mobileContentStyle = css`
display:block;
padding: 1rem 1rem 2rem 1rem;
justify-content:center;
`

const nameStyle = css`
font-family: "appleneoB";
font-size:1.4rem;
padding: 0.5rem 0;
`
const paragraphStyle = css`
font-family: "appleneoR";
font-size: 1rem;
`


export default function Activity(props:ActivityProps){
  return(
    <Fragment>
      <MediaQuery minWidth={916}>
      <Fragment>
      {props.idx %2==0 ?
      <div css={activityStyle}>
        <img css={imgStyle} alt={props.name} src={props.image}/>
        <div css={evenContentStyle}>
          <div css={nameStyle}>{props.name}</div>
          <p css={paragraphStyle}>{props.content}</p> 
        </div>
      </div>
      : <div css={activityStyle}>
        <div css={oddContentStyle}>
          <div css={nameStyle}>{props.name}</div>
          <p css={paragraphStyle}>{props.content}</p> 
        </div>
        <img css={imgStyle} alt={props.name} src={props.image}/>
        </div>
      }
      </Fragment>
      </MediaQuery>
      <MediaQuery maxWidth={915}>
        <div css={mobileActivityStyle}>
          <img css={mobileImgStyle} alt={props.name} src={props.image}/>
          <div className="activity--mobile--content" css={mobileContentStyle}>
            <div css={nameStyle}>{props.name}</div>
            <p css={paragraphStyle} style={{maxWidth:"70vh"}}>{props.content}</p> 
          </div>
        </div>
      </MediaQuery>
    </Fragment>
  );
}