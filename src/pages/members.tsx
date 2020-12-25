/** @jsx jsx */
import React from "react"
import {jsx,css} from '@emotion/core'
import { PageProps, Link, graphql } from "gatsby"
import Layout from "@components/layout"
import SEO from "@components/seo"

import MemberProps from "@components/organisms/MemberCard"
import StyledTitle from "@components/molecules/title.tsx"
import MemberCard from "@components/organisms/MemberCard"
import MembersData from "@content/members.yaml"

type DataProps = {
    site: {
      buildTime: string
    }
  };

const MembersWrapperStyle=css`
display:flex;
flex-wrap:wrap;
justify-content:space-evenly;
margin-bottom: 8rem;
`

const Members:React.FC<PageProps<DataProps>> = ({data,path})=>{
    const renderMember= (member:MemberProps) =>
        <MemberCard position={member.position} image= {member.image} name={member.name} school={member.school} address1={member.address1} address2={member.address2}/>
    
    return(
        <Layout>
            <SEO title="ICPC Sinchon - Members"/>
            <StyledTitle title="Members"/>
            <div css={MembersWrapperStyle}>
                {MembersData.content.map((member:MemberProps)=>renderMember(member))}
            </div>
        </Layout>
    )
}

export default Members;