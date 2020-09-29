import React from "react"

import { IStudy } from "@models/study"
import StudyRow from "@components/molecules/StudyRow"

const StudyCard: React.FC<{ studies: IStudy[] }> = ({ studies }) => (
  <>
    { studies.map(study => <StudyRow key={ study.lecturer + " " + study.topic } study={study}/>) }
  </>
)

export default StudyCard