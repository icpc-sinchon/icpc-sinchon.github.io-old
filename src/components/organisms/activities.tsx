/** @jsx jsx */
import React,{Component,HTMLAttributes} from "react";
import {jsx,css} from '@emotion/core';
import Activity from "../molecules/activity";

// images
import contest from '../../images/contest__edit.jpg'
import aanetworking from '../../images/aanetworking__edit.jpg'
import networking from '../../images/networking__edit.jpg'
import codeforce from '../../images/codeforce_filtered__edit.jpg'
import study from '../../images/study-board_filtered__edit.jpg'

const wrapperStyle=css`
overflow:hidden;
padding: 1.5rem 1.7rem;
width: 100%;
position:relative;
margin: 0 0 8rem 0;
`

export default function Activities(){
    return (
        <div className="activity--wrapper" css={wrapperStyle}>
            <Activity idx = {0} image={contest} name="SUAPC" content="SUAPC는 신촌 지역 5개 대학(연세, 서강, 이화, 홍익, 숙명)의 학부생 및 대학원 1년차를 대상으로 하는 프로그래밍 대회입니다. 대회 문제는 서울 리저널의 문제 출제 경향을 따르며 제한 시간 동안 얼마나 많은 문제를 정확하게 풀 수 있는지를 평가하여 순위를 결정합니다."/>
            <Activity idx = {1} image={networking} name="Networking" content="ICPC Sinchon 연합 소속 학회원들 간의 네트워킹을 통해 친목을 도모하고 활발한 정보 교류를 통해 문제 해결(PS), 개발 등 관심사별 학구적 지식을 확장해 나갑니다."/>
            <Activity idx = {2} image={study} name="Study" content="ICPC Sinchon 연합 소속 학회원들을 대상으로 매학기 방학마다 알고리즘 스터디를 진행합니다. 초급, 중급, 고급으로 그룹을 나누어 수준별 강의를 제공하고 각 그룹별 Algorithm Camp Contest를 진행합니다.
"/>
            <Activity idx = {3} image={aanetworking} name="Alumni Association" content="ICPC Sinchon 동문 커뮤니티를 형성하여 알고리즘 실력을 향상하고 여러 분야에서 활동하고 있는 선배들과의 네트워킹 기회를 얻습니다. ICPC Sinchon 활동을 1학기 이상 수료하고 소속 학회의 졸업 조건을 만족할 시 ICPC Sinchon 동문회에 가입할 수 있습니다."/>
        </div>
    );
}