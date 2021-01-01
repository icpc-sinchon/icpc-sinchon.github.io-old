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
    font-size: 1.2em;
    font-weight: 600;
`;

const theadBorder = css`
  border-bottom: 1px solid #666;
`;

export default function WinnerTable(props: infoProps) {
  return (
    <div className="test" css={flexStyle}>
      <div 
      className="test--title"
      css={description}>
          <p>Div. {props.info.div}</p>
      </div>
      <table className="rank">
        <thead>
            <tr>
                <th css={theadBorder}>순위</th>
                <th css={theadBorder}>팀명</th>
                <th css={theadBorder}>구성원</th>
                <th css={theadBorder}>소속</th>
            </tr>
        </thead>
        <tbody>
            {
                props.info.winner.map((data) => {
                    return (
                        <tr>
                            <td>{data["prize"]}</td>
                            <td css={{width: "26rem"}}>{data["team"]}</td>
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
