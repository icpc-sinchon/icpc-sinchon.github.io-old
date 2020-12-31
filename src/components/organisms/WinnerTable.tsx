import { css } from "@emotion/core"

import React from "react"

type infoProps = {
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


export default function WinnerTable(props: infoProps) {
  return (
    <div className="test" css={flexStyle}>
        <div css={description}>
          <p>Div. {props.info[0]}</p>
      </div>
      <table className="rank">
        <thead>
            <tr>
                <th>순위</th>
                <th>팀명</th>
                <th>구성원</th>
                <th>소속</th>
            </tr>
        </thead>
        <tbody>
            {
                props.info[1].map((data) => {
                    return (
                        <tr>
                            <td>{data["prize"]}</td>
                            <td css={{width: "28rem"}}>{data["team"]}</td>
                            <td>{data["member"]}</td>
                            <td>{data["school"]}</td>
                        </tr>
                    )
                })
            }
        </tbody>
      </table>
    </div>
  )
}
