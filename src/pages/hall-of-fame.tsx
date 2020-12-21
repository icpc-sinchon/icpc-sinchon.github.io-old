import React from "react"
import { PageProps, Link, graphql } from "gatsby"

// FIXME : gatsby로 빌드 돌릴때는 문제가 없지만 VSCode에서는 빨간줄떠서 해결하긴 해야함.
import Layout from "@components/layout"
import SEO from "@components/seo"

import StudyCard from "@components/organisms/StudyCard"
import './index.css'

import HallOfFameData from "@content/hall-of-fame.yaml"

type DataProps = {
  site: {
    buildTime: string
  }
};

const HallOfFame: React.FC<PageProps<DataProps>> = ({ data, path }) => {
  const renderActivity = (activity) => {
    if (activity.activity_type === 'study') {
      return (
        <StudyCard key={`${activity.activity_type}-${activity.year.toString()}-${activity.semester}`} studies={activity.studies} /> 
      );
    } else {
      return (<></>);
    }
  }

  return (
    <Layout>
      <SEO title="ICPC Sinchon - Hall Of Fame" />
      <div>
        { HallOfFameData.content.map(activity => renderActivity(activity)) }
      </div>
    </Layout>
  )
}

export default HallOfFame;