import { css } from "@emotion/core"
import React from "react"

type ExtraProps = {
    ProbPicker:string
}

const NameCss = css`
  font-family: "appleNeoM";
  font-size: 1.3rem;
  padding-bottom: 0;
`

export default function ExtraProbPicker(props: ExtraProps) {
  return (
    <tr>
      <td></td>
      <td className="name" css={NameCss}>
        {props.ProbPicker}
      </td>
    </tr>
  )
}
