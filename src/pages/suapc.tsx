/** @jsx jsx */
import React from "react"
import {jsx,css} from '@emotion/core'
import { PageProps, Link, graphql } from "gatsby"
import Layout from "@components/layout"
import SEO from "@components/seo"

type DataProps = {
    site: {
        buildTime: string
    }
  };

const SUAPC:React.FC<PageProps<DataProps>> = ({data,path})=>{
    return(
        <Layout>
            <SEO title="ICPC Sinchon - Members"/>
            <div>Hello SUAPC!</div>
        </Layout>
    )
}

export default SUAPC;