import React from "react"
import MediaQuery from "react-responsive"
import styled from "styled-components"

type ActivityProps = {
  idx: number
  image: string
  name: string
  content: string
}

const OuterActivityWrap = styled.div`
  padding: 0rem 0.2rem;
  display: flex;
  width: 100%;
  align-items: center;
`
const OuterMobileActivityWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const ActivityImg = styled.img`
  width: 100%;
  max-width: 40vw;
  height: auto;
  margin-bottom: 1.45rem;
`
const MobileActivityImg = styled.img`
  width: 100%;
  min-height: 25vh;
  max-width: 450px;
  object-fit: contain;
`

const EvenActivityWrap = styled.div`
  display: block;
  padding: 1rem 5rem 2rem 7rem;
  width: 100%;
`
const OddActivityWrap = styled.div`
  display: block;
  padding: 1rem 7rem 2rem 5rem;
  width: 100%;
  text-align: right;
`
const MobileActivityWrap = styled.div`
  display: block;
  padding: 1rem 1rem 2rem 1rem;
  justify-content: center;
`

const ActivityName = styled.div`
  font-family: "appleneoB";
  font-size: 1.4rem;
  padding: 0.5rem 0;
`
const ActivityP = styled.p`
  font-family: "appleneoR";
  font-size: 1rem;
`

export default function Activity(props: ActivityProps) {
  return (
    <>
      <MediaQuery minWidth={916}>
        <>
          {props.idx % 2 == 0 ? (
            <OuterActivityWrap>
              <ActivityImg alt={props.name} src={props.image} />
              <EvenActivityWrap>
                <ActivityName>{props.name}</ActivityName>
                <ActivityP>{props.content}</ActivityP>
              </EvenActivityWrap>
            </OuterActivityWrap>
          ) : (
            <OuterActivityWrap>
              <OddActivityWrap>
                <ActivityName>{props.name}</ActivityName>
                <ActivityP>{props.content}</ActivityP>
              </OddActivityWrap>
              <ActivityImg alt={props.name} src={props.image} />
            </OuterActivityWrap>
          )}
        </>
      </MediaQuery>
      <MediaQuery maxWidth={915}>
        <OuterMobileActivityWrap>
          <MobileActivityImg alt={props.name} src={props.image} />
          <MobileActivityWrap className="activity--mobile--content">
            <ActivityName>{props.name}</ActivityName>
            <ActivityP style={{ maxWidth: "70vh" }}>
              {props.content}
            </ActivityP>
          </MobileActivityWrap>
        </OuterMobileActivityWrap>
      </MediaQuery>
    </>
  )
}
