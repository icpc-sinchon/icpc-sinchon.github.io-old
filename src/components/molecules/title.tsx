/** @jsx jsx */
import React from "react"
import {jsx, css} from '@emotion/core'

type TitleProps={
    title:string;
};

const hightlightStyle=css`
margin:0rem 0rem 3rem 2rem;
padding-left:0.4rem;
width: 12rem;
background:linear-gradient(to top, transparent 0%,0%, #33a23d 35%,35%, white 50%);
border-bottom: 0.3rem solid #33a23d;
font-size: 2rem;
font-weight:bold;
`

export default function StyledTitle(props:TitleProps){
    return(
    <div css={hightlightStyle}>
        {props.title}
    </div>
    );

}