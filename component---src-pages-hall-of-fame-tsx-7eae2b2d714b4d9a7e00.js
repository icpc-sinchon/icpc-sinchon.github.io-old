(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{EDuE:function(e,o,n){},N7fX:function(e,o,n){"use strict";n.r(o);var t=n("q1tI"),a=n.n(t),r=n("9Dj+"),s=n("H8eV"),c=n("qKvR"),l=n("vOnD");var m=l.a.div.withConfig({displayName:"Test__RankingGrid",componentId:"o7lyp4-0"})(["margin-bottom:1.9rem;display:grid;width:100%;text-align:center;grid-gap:0.7rem;grid-template-columns:1fr 1fr 1fr;grid-auto-rows:2rem;"]),i=l.a.div.withConfig({displayName:"Test__ContestName",componentId:"o7lyp4-1"})(["width:4.8rem;height:1.8rem;grid-row:1/2;border-bottom:1px solid #707070;text-align:center;font-size:1.2rem;"]),p=l.a.div.withConfig({displayName:"Test__RankingElem",componentId:"o7lyp4-2"})(["grid-row:2/3;"]),b=l.a.span.withConfig({displayName:"Test__RankingElemPrize",componentId:"o7lyp4-3"})(["font-size:0.9rem;"]),h=l.a.div.withConfig({displayName:"Test__RankinNameSchoolWrap",componentId:"o7lyp4-4"})(["display:inline-block;margin-left:0.5rem;"]),w=l.a.span.withConfig({displayName:"Test__RankingElemName",componentId:"o7lyp4-5"})(["font-size:1.1rem;"]),d=l.a.span.withConfig({displayName:"Test__RankingElemSchool",componentId:"o7lyp4-6"})(["font-size:0.7rem;"]),u=l.a.div.withConfig({displayName:"Test__ProblemGrid",componentId:"o7lyp4-7"})(["display:grid;grid-gap:0.7rem;"]);function g(e){return Object(c.b)("div",{className:"test"},e.contests.map((function(e){return Object(c.b)(a.a.Fragment,null,Object(c.b)(m,{className:"ranking--grid"},Object(c.b)(i,null,e.contest_name),e.awards.map((function(e){return Object(c.b)(p,{className:"ranking--elem"},Object(c.b)(b,null,1===e.prize?Object(c.b)(a.a.Fragment,null,"1",Object(c.b)("sup",null,"st")):2===e.prize?Object(c.b)(a.a.Fragment,null,"2",Object(c.b)("sup",null,"nd")):Object(c.b)(a.a.Fragment,null,"3",Object(c.b)("sup",null,"rd"))),Object(c.b)(h,null,Object(c.b)(w,null,e.member),Object(c.b)(d,null,e.school)))}))),"출제자"===e.organizer_type?Object(c.b)(u,null,Object(c.b)(i,null,"기출문제"),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("td",null,"#"),Object(c.b)("td",{style:{width:"15rem"}},"문제"),Object(c.b)("td",null,"출제자"))),Object(c.b)("tbody",null,e.problem_list.map((function(e,o){return Object(c.b)("tr",null,Object(c.b)("td",null,"ABCDEFGHIJKLMNOP"[o]),Object(c.b)("td",null,Object(c.b)("a",{href:e.link},e.problem_name)),Object(c.b)("td",null,Object(c.b)(w,null,e.organizer.name),Object(c.b)(d,null,e.organizer.school)))}))))):"")})))}var _=l.a.div.withConfig({displayName:"LecturerMobileTable__RankingGrid",componentId:"vz1u30-0"})(["margin-bottom:1.9rem;display:grid;width:100%;text-align:center;grid-gap:0.7rem;grid-auto-rows:2rem;&:first-child{margin-top:0.9rem;}"]),z=l.a.div.withConfig({displayName:"LecturerMobileTable__ContestName",componentId:"vz1u30-1"})(["width:4.8rem;height:1.8rem;grid-row:1/2;border-bottom:1px solid #707070;text-align:center;font-size:1.2rem;"]),f=l.a.div.withConfig({displayName:"LecturerMobileTable__RankingElem",componentId:"vz1u30-2"})(["grid-row:2/3;"]),O=l.a.span.withConfig({displayName:"LecturerMobileTable__RankingElemName",componentId:"vz1u30-3"})(["font-size:1.1rem;"]),j=l.a.span.withConfig({displayName:"LecturerMobileTable__RankingElemSchool",componentId:"vz1u30-4"})(["font-size:0.7rem;"]);function k(e){return Object(c.b)(_,{style:{gridTemplateColumns:1===e.lecturers.length?"1fr":2===e.lecturers.length?"1fr 1fr":"1fr 1fr 1fr"}},Object(c.b)(z,null,"강사진"),e.lecturers.map((function(e,o){return Object(c.b)(f,null,Object(c.b)(O,null,e.name),Object(c.b)(j,null,e.school))})))}n("aT6C"),n("EDuE"),n("cbek");var y=n("zEFi"),v=n.n(y);o.default=function(e){e.data,e.path;var o=function(e){var o=e.target.innerHTML.split(" "),n=o[0]+"--"+o[1],t=document.getElementsByClassName(n)[0];t.classList.contains("hide")&&t.classList.remove("hide"),t.classList.contains("show")||t.classList.add("show");for(var a=document.getElementsByClassName("season--wrap"),r=0;r<a.length;r++)a[r].classList.contains(n)||(a[r].classList.contains("hide")||a[r].classList.add("hide"),a[r].classList.contains("show")&&a[r].classList.remove("show"));var s=document.getElementsByClassName("hof--season");for(r=0;r<s.length;r++)s[r]==e.target?(s[r].classList.contains("hide--tab")&&s[r].classList.remove("hide--tab"),s[r].classList.contains("show--tab")||s[r].classList.add("show--tab")):(s[r].classList.contains("hide--tab")||s[r].classList.add("hide--tab"),s[r].classList.contains("show--tab")&&s[r].classList.remove("show--tab"))};return Object(c.b)(r.a,null,Object(c.b)(s.a,{title:"ICPC Sinchon - Hall Of Fame",description:"ICPC Sinchon에 기여를 해주신 분들과, 열심히 활동하여 우수한 성적을 거둔 사람들을 기립니다"}),Object(c.b)("div",{className:"hof--wrapper"},Object(c.b)("div",{className:"head"},Object(c.b)("div",{className:"logo--info--wrapper"},Object(c.b)("div",{className:"hof--logo--wrapper"},"HALL OF FAME"),Object(c.b)("div",{className:"hof--info--wrapper"},Object(c.b)("span",{className:"hof--info--part"},"ICPC 신촌 연합 활동에 기여를 해주신 분들과, "),Object(c.b)("span",{className:"hof--info--part"},"열심히 활동하여 우수한 성적을 거둔 사람들을 기립니다")))),Object(c.b)("div",{className:"content-wrapper"},Object(c.b)("div",{className:"hof--season--wrapper"},Object(c.b)("div",{className:"hof--season show--tab",onClick:function(e){return o(e)}},"2021 Winter"),Object(c.b)("div",{className:"hof--season hide--tab",onClick:function(e){return o(e)}},"2020 Summer"),Object(c.b)("div",{className:"hof--season hide--tab",onClick:function(e){return o(e)}},"2020 Winter")),v.a.content.map((function(e){var o;return o=e.year+"--"+e.semester=="2021--Winter"?e.year+"--"+e.semester+" season--wrap show":e.year+"--"+e.semester+" season--wrap hide",null==e.studies?Object(c.b)("div",{className:o},Object(c.b)("div",{className:"no--test"},"아직 시행되지 않은 Algorithm Camp 입니다")):Object(c.b)("div",{className:o},e.studies.map((function(e){return Object(c.b)("div",{className:"study--wrap"},Object(c.b)("div",{className:"title--wrap"},Object(c.b)("div",{className:"study--title"},e.topic),Object(c.b)("div",{className:"lecturer--wrap"},Object(c.b)("span",{className:"lecturer"},"강사진"),Object(c.b)("span",{className:"lecturer--list"},e.lecturers.map((function(e){return e.name+" "+e.school})).join(" | ")))),Object(c.b)("div",{className:"contest--wrap"},Object(c.b)(k,{lecturers:Object.values(e.lecturers)}),null==e.contests?Object(c.b)("div",{className:"hof--no--contest"},"모의고사가 진행되지 않았습니다"):Object(c.b)(g,{contests:Object.values(e.contests)})))})))})))))}},aT6C:function(e,o,n){},cbek:function(e,o,n){},zEFi:function(e,o){e.exports={title:"Hall Of Fame",content:[{year:2020,semester:"Winter",activity_type:"study",studies:[{topic:"초급 알고리즘 스터디",lecturers:[{name:"이태한",school:"서강대"},{name:"이재열",school:"홍익대"},{name:"김성민",school:"홍익대"}],contests:[{contest_name:"중간고사",problem_picker:[{name:"이태한",school:"서강대"},{name:"이재열",school:"홍익대"},{name:"김성민",school:"홍익대"}],awards:[{prize:1,member:"강상원",school:"서강대"},{prize:2,member:"주상민",school:"서강대"},{prize:3,member:"윤상현",school:"서강대"}]},{contest_name:"기말고사",problem_picker:[{name:"이태한",school:"서강대"},{name:"이재열",school:"홍익대"},{name:"김성민",school:"홍익대"},{name:"정연두",school:"홍익대"}],awards:[{prize:1,member:"강상원",school:"서강대"},{prize:2,member:"주상민",school:"서강대"},{prize:3,member:"임세홍",school:"서강대"}]}]},{topic:"중급 알고리즘 스터디",lecturers:[{name:"임지환",school:"서강대"},{name:"이기현",school:"서강대"}],contests:[{contest_name:"중간고사",problem_picker:[{name:"임지환",school:"서강대"},{name:"이기현",school:"서강대"}],awards:[{prize:1,member:"백성익",school:"홍익대"},{prize:2,member:"정재현",school:"홍익대"},{prize:3,member:"강승구",school:"서강대"}]},{contest_name:"기말고사",problem_picker:[{name:"임지환",school:"서강대"},{name:"이기현",school:"서강대"}],awards:[{prize:1,member:"장주호",school:"서강대"},{prize:2,member:"백성익",school:"홍익대"},{prize:3,member:"정재현",school:"홍익대"}]}]},{topic:"고급 알고리즘 스터디",lecturers:[{name:"박수현",school:"서강대"},{name:"이상원",school:"서강대"}]}]},{year:2020,semester:"Summer",activity_type:"study",studies:[{topic:"초급 알고리즘 스터디",lecturers:[{name:"배철환",school:"서강대"},{name:"백성익",school:"홍익대"}],contests:[{contest_name:"중간고사",problem_picker:[{name:"이길원",school:"서강대"},{name:"전해성",school:"서강대"},{name:"남수연",school:"숙명여대"}],awards:[{prize:1,member:"김태윤",school:"연세대"},{prize:2,member:"김도현",school:"홍익대"},{prize:3,member:"윤이빈",school:"숙명여대"}]},{contest_name:"기말고사",organizer_type:"출제자",problem_list:[{problem_name:"요요 시뮬레이션",link:"https://www.acmicpc.net/problem/19636",organizer:{name:"백성익",school:"홍익대"}},{problem_name:"IF문 좀 대신 써줘",link:"https://www.acmicpc.net/problem/19637",organizer:{name:"백성익",school:"홍익대"}},{problem_name:"센티와 마법의 뿅망치",link:"https://www.acmicpc.net/problem/19638",organizer:{name:"백성익",school:"홍익대"}},{problem_name:"화장실의 규칙",link:"https://www.acmicpc.net/problem/19640",organizer:{name:"백성익",school:"홍익대"}},{problem_name:"중첩 집합 모델",link:"https://www.acmicpc.net/problem/19641",organizer:{name:"이재열",school:"홍익대"}},{problem_name:"TORIE",link:"https://www.acmicpc.net/problem/19642",organizer:{name:"백성익",school:"홍익대"}},{problem_name:"좀비 떼가 전역 때보다 먼저 오다니",link:"https://www.acmicpc.net/problem/",organizer:{name:"백성익",school:"홍익대"}},{problem_name:"좀비 떼가 기관총 진지에도 오다니",link:"https://www.acmicpc.net/problem/19644",organizer:{name:"백성익",school:"홍익대"}}],awards:[{prize:1,member:"김태윤",school:"연세대"},{prize:2,member:"김도현",school:"홍익대"},{prize:3,member:"김경민",school:"홍익대"}]}]},{topic:"중급 알고리즘 스터디",lecturers:[{name:"윤인섭",school:"연세대"},{name:"이준석",school:"서강대"}],contests:[{contest_name:"중간고사",problem_picker:[{name:"이기현",school:"서강대"},{name:"최재민",school:"KAIST"}],awards:[{prize:1,member:"박재형",school:"서강대"},{prize:2,member:"남유진",school:"연세대"},{prize:3,member:"박준성",school:"서강대"}]},{contest_name:"기말고사",organizer_type:"출제자",problem_list:[{problem_name:"센티와 마법의 뿅망치",link:"https://www.acmicpc.net/problem/19638",organizer:{name:"백성익",school:"홍익대"}},{problem_name:"배틀로얄",link:"https://www.acmicpc.net/problem/19639",organizer:{name:"이준석",school:"서강대"}},{problem_name:"햄최몇?",link:"https://www.acmicpc.net/problem/19645",organizer:{name:"임지환",school:"서강대"}},{problem_name:"Random Generator",link:"https://www.acmicpc.net/problem/19646",organizer:{name:"이국렬",school:"연세대"}},{problem_name:"Unique Solution",link:"https://www.acmicpc.net/problem/19647",organizer:{name:"이국렬",school:"연세대"}},{problem_name:"미하일 2마리",link:"https://www.acmicpc.net/problem/19648",organizer:{name:"이국렬",school:"연세대"}},{problem_name:"미담 전하기",link:"https://www.acmicpc.net/problem/19649",organizer:{name:"임지환",school:"서강대"}},{problem_name:"개미여행",link:"https://www.acmicpc.net/problem/19650",organizer:{name:"이준석",school:"서강대"}}],awards:[{prize:1,member:"김관우",school:"서강대"},{prize:2,member:"남유진",school:"연세대"},{prize:3,member:"이승은",school:"서강대"}]}]},{topic:"고급 알고리즘 스터디",lecturers:[{name:"전해성",school:"서강대"}]}]},{year:2021,semester:"Winter",activity_type:"study",studies:[{topic:"초급 알고리즘 스터디",lecturers:[{name:"강효규",school:"서강대"},{name:"김기선",school:"홍익대"}],contests:[{contest_name:"모의고사",organizer_type:"출제자",problem_list:[{problem_name:"영단어 암기는 괴로워",link:"https://www.acmicpc.net/problem/20920",organizer:{name:"김도은",school:"숙명여대"}},{problem_name:"그렇고 그런 사이",link:"https://www.acmicpc.net/problem/20921",organizer:{name:"정기웅",school:"연세대"}},{problem_name:"겹치는 건 싫어",link:"https://www.acmicpc.net/problem/20922",organizer:{name:"김도현",school:"홍익대"}},{problem_name:"숫자 할리갈리 게임",link:"https://www.acmicpc.net/problem/20923",organizer:{name:"김도은",school:"숙명여대"}},{problem_name:"트리의 기둥과 가지",link:"https://www.acmicpc.net/problem/20924",organizer:{name:"백성익",school:"홍익대"}},{problem_name:"메이플스토리",link:"https://www.acmicpc.net/problem/20925",organizer:{name:"이상원",school:"서강대"}},{problem_name:"얼음 미로",link:"https://www.acmicpc.net/problem/20926",organizer:{name:"백성익",school:"홍익대"}},{problem_name:"Degree Bounded Minimum Spanning Tree",link:"https://www.acmicpc.net/problem/20927",organizer:{name:"이국렬",school:"연세대"}}],awards:[{prize:1,member:"강민서",school:"연세대"},{prize:2,member:"정영우",school:"연세대"},{prize:3,member:"오재석",school:"서강대"}]}]},{topic:"중급 알고리즘 스터디",lecturers:[{name:"윤인섭",school:"연세대"},{name:"한동규",school:"UNIST"}],contests:[{contest_name:"모의고사",organizer_type:"출제자",problem_list:[{problem_name:"그렇고 그런 사이",link:"https://www.acmicpc.net/problem/20921",organizer:{name:"정기웅",school:"연세대"}},{problem_name:"걷는 건 귀찮아",link:"https://www.acmicpc.net/problem/20928",organizer:{name:"김주현",school:"서강대"}},{problem_name:"중간",link:"https://www.acmicpc.net/problem/20929",organizer:{name:"이국렬",school:"연세대"}},{problem_name:"우주 정거장",link:"https://www.acmicpc.net/problem/20930",organizer:{name:"이국렬",school:"연세대"}},{problem_name:"혹 떼러 갔다 혹 붙여 온다",link:"https://www.acmicpc.net/problem/20931",organizer:{name:"정연두",school:"홍익대"}},{problem_name:"약수 의식",link:"https://www.acmicpc.net/problem/20932",organizer:{name:"정연두",school:"홍익대"}},{problem_name:"마스크펑크 2077",link:"https://www.acmicpc.net/problem/20933",organizer:{name:"김주현",school:"서강대"}},{problem_name:"카드 모래성",link:"https://www.acmicpc.net/problem/20934",organizer:{name:"김주현",school:"서강대"}},{problem_name:"Parity Constraint Perfect Matching",link:"https://www.acmicpc.net/problem/20935",organizer:{name:"이국렬",school:"연세대"}}],awards:[{prize:1,member:"조원빈",school:"서강대"},{prize:2,member:"박재형",school:"서강대"},{prize:3,member:"남유진",school:"연세대"}]}]},{topic:"고급 알고리즘 스터디",lecturers:[{name:"전해성",school:"서강대"},{name:"이국렬",school:"연세대"}]}]},{year:2021,semester:"Summer",activity_type:"study",studies:null}]}}}]);
//# sourceMappingURL=component---src-pages-hall-of-fame-tsx-7eae2b2d714b4d9a7e00.js.map