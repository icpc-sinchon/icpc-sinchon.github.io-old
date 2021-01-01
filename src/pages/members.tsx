/** @jsx jsx */
import React from "react"
import {jsx,css} from '@emotion/core'
import { PageProps, Link, graphql } from "gatsby"
import Layout from "@components/layout"
import SEO from "@components/seo"

import MemberCardProps from "@components/organisms/MemberCardWrapper"
import MemberCardWrapper from "@components/organisms/MemberCardWrapper"
import StyledTitle from "@components/molecules/title.tsx"
import MemberCard from "@components/organisms/MemberCard"
import MembersData from "@content/members.yaml"

type DataProps = {
    site: {
        buildTime: string
    }
  };



const Members:React.FC<PageProps<DataProps>> = ({data,path})=>{
    const renderMemberWrapper = (memberCard:MemberCardProps) =>
        <MemberCardWrapper season={memberCard.season} organizer={Object.values(memberCard.organizers)}/>;
    return(
        <Layout>
            <SEO title="ICPC Sinchon - Members"/>
            <div className="head" css={{margin: "5rem"}}>
                <div className="logo--info--wrapper">
                    <div className="hof--logo--wrapper">Organizers</div>
                    <div className="hof--info--wrapper">
                    <span className="hof--info--part">
                        ICPC Sinchon을 이끄는 운영진입니다.&nbsp;
                    </span>
                    </div>
                </div>
                </div>
            <div>
                {MembersData.content.map((memberCard:MemberCardProps)=>renderMemberWrapper(memberCard))}
            </div>
        </Layout>
    )
}

export default Members;