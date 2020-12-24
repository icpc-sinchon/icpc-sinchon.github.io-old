import React from "react"
import HallOfFameData from "@content/hall-of-fame.json"
import Test from "@components/organisms/Test"
type StudyProps = {
  StudyTitle: string
  LecturerList: string
  mFirstRankName: string
  mSecondRankName: string
  mThirdRankName: string
  fFirstRankName: string
  fSecondRankName: string
  fThirdRankName: string
}

export default function StudyBox(props: StudyProps) {
  return (
    <div className="Study--Wrapper">
      <div className="StudyTitle">{props.StudyTitle}</div>
      <div className="lecturer">강사진</div>
      <div className="lecturer--list">{props.LecturerList}</div>
      <div className="MidTest">
        <Test FirstRankName={props.mFirstRankName}
        SecondRankName={props.mSecondRankName}
        ThirdRankName={props.mThirdRankName}
        ></Test>
      </div>
      <div className="FinalTest">
      <Test FirstRankName={props.fFirstRankName}
        SecondRankName={props.fSecondRankName}
        ThirdRankName={props.fThirdRankName}></Test>
      </div>
    </div>
  )
}
