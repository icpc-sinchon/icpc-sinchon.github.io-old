import { css } from "@emotion/core"

import React from "react"
import WinnerTable from "@components/organisms/WinnerTable"
import OrganizerTable from "@components/organisms/OrganizerTable"

type infoProps = {
    season: Array<any>
    seasonName: string
}

export default function ResultWrapper(props: infoProps) {
  return (
    <div className={"result--wrapper "+props.seasonName}>
      <WinnerTable info={props.season[3][0]} />
      <WinnerTable info={props.season[3][1]} />
      <div className="organizer--table--wrapper">
        <OrganizerTable
          name="출제진"
          info={props.season[4]}
        />
        <div className="organizer--table--flexwrap"></div>
        <OrganizerTable
          name="검수진"
          info={props.season[5]}
        />
      </div>
    </div>
  )
}
