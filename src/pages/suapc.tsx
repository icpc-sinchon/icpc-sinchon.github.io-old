/** @jsx jsx */
import React from "react"
import {jsx,css} from '@emotion/core'
import { PageProps, Link, graphql } from "gatsby"
import Layout from "@components/layout"
import SEO from "@components/seo"
import svg from "../images/main.svg"

type DataProps = {
    site: {
        buildTime: string
    }
  };

const SUAPC:React.FC<PageProps<DataProps>> = ({data,path})=>{
    return(
        <Layout>
            <SEO title="ICPC Sinchon - Members"/>
            <img src={svg}/>
        </Layout>
    )
}

export default SUAPC;