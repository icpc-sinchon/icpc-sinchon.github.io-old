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
    font-size: 1em;
    font-weight: 600;
`;

export default function OrganizerTable(props: infoProps) {
  return (
    <div className="test" css={flexStyle}>
      <div css={description}>
          <p>{props.name}</p>
      </div>
      <table className="rank">
        <thead>
            <tr>
                <th>이름</th>
                <th>소속</th>
            </tr>
        </thead>
        <tbody>
            {
                props.info.map((data) => {
                    return (
                        <tr>
                            <td>{data["name"]}</td>
                            <td css={{width: "15rem"}}>{data["school"]}</td>
                        </tr>
                    )
                })
            }
        </tbody>
      </table>
    </div>
  )
}
