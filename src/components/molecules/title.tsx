import React from "react"
import styled from "styled-components"

type TitleProps = {
  title: string
}

const StyledTitleInnerWrap = styled.div`
  margin: 0rem 0rem 0.2rem 0rem;
  padding: 0 0.4rem 0.35rem 0.4rem;
  display:inline-block;
  border-bottom: 0.3rem solid rgba(161, 203, 149, 0.5);
  font-family: 'appleNeoR';
  font-size: 1.7rem;
  font-weight: bold;
  color: #489A02;
`
const StyledTitleOuterWrap = styled.div`
  display: inline-block;
  margin: 0rem 0rem 3rem 2rem;
  padding: 0 2.9rem 0 0.3rem;
  border-bottom: 0.3rem solid rgba(161, 203, 149, 0.5);
`
export default function StyledTitle(props: TitleProps) {
  return (
    <StyledTitleOuterWrap>
      <StyledTitleInnerWrap>{props.title}</StyledTitleInnerWrap>
    </StyledTitleOuterWrap>
  )
}
