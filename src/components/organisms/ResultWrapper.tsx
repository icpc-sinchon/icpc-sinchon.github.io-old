import React from "react"
import WinnerTable from "@components/organisms/WinnerTable"
import OrganizerTable from "@components/organisms/OrganizerTable"

type infoProps = {
  season: Array<any>
  seasonName: string
}

export default function ResultWrapper(props: infoProps) {
  return (
    <div className={"result--wrapper " + props.seasonName}>
      {props.season[3].map(val => {
        return <WinnerTable info={val} />
      })}
      <div className="organizer--table--wrapper">
        <OrganizerTable name="출제진" info={props.season[4]} />
        <div className="organizer--table--flexwrap"></div>
        <OrganizerTable name="검수진" info={props.season[5]} />
      </div>
    </div>
  )
}
