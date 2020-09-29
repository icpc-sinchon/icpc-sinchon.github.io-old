import React from "react"
import { IStudy } from "@models/study"

const StudyRow: React.FC<{ study: IStudy }> = ({ study }) => (
  <>
    <ul>
        <li>
            스터디 주제 : { study.topic }
        </li>
        <li>
            강사 : { study.lecturer }
        </li>
    </ul>
  </>
)

export default StudyRow