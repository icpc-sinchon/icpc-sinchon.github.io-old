import { css } from "@emotion/core"

import React from "react"

type infoProps = {
  name: string
  info: Array<any>
}

const flexStyle = css`
  display: flex;
`;

const description = css`
  width: 5rem;
  padding: calc(0.725rem - 1px) 0;
  font-size: 1.2em;
  font-weight: 600;
`;

const theadBorder = css`
  border-bottom: 1px solid #666;
`;

export default function OrganizerTable(props: infoProps) {
  return (
    <div css={flexStyle}>
      <div css={description}>
          <p>{props.name}</p>
      </div>
      <table>
        <thead>
            <tr>
                <th css={theadBorder}>이름</th>
                <th css={theadBorder}>소속</th>
            </tr>
        </thead>
        <tbody>
            {
                props.info.map((data) => {
                    return (
                        <tr>
                            <td>{data["name"]}</td>
                            <td css={{width: "14rem"}}>{data["school"]}</td>
                        </tr>
                    )
                })
            }
        </tbody>
      </table>
    </div>
  )
}
