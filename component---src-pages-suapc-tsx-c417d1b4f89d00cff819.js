(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"+s8K":function(e,s,t){"use strict";t.r(s);t("q1tI");var a=t("qKvR"),c=t("qhky"),n=t("9Dj+"),l=t("H8eV"),o=(t("aT6C"),t("McmQ"),t("kUnD")),i=t.n(o);var b={name:"k008qs",styles:"display:flex;"},r={name:"j6eput",styles:"width:5rem;padding:calc(0.725rem - 1px) 0;font-size:1.2em;font-weight:600;"},m={name:"18eafq5",styles:"border-bottom:1px solid #666;"},d={name:"4efxja",styles:"width:26rem;"};function p(e){return Object(a.b)("div",{className:"test",css:b},Object(a.b)("div",{className:"test--title",css:r},Object(a.b)("p",null,"Div. ",e.info.div)),Object(a.b)("table",{className:"rank"},Object(a.b)("thead",null,Object(a.b)("tr",null,Object(a.b)("th",{css:m},"순위"),Object(a.b)("th",{css:m},"푼 문제 수"),Object(a.b)("th",{css:m},"팀명"),Object(a.b)("th",{css:m},"구성원"),Object(a.b)("th",{css:m},"소속"))),Object(a.b)("tbody",null,e.info.winner.map((function(e){return Object(a.b)("tr",null,Object(a.b)("td",null,e.prize),Object(a.b)("td",null,e.solved),Object(a.b)("td",{css:d},e.team),Object(a.b)("td",null,e.member),Object(a.b)("td",null,e.school))})))))}var j={name:"k008qs",styles:"display:flex;"},u={name:"j6eput",styles:"width:5rem;padding:calc(0.725rem - 1px) 0;font-size:1.2em;font-weight:600;"},h={name:"18eafq5",styles:"border-bottom:1px solid #666;"},O={name:"cyf03k",styles:"width:14rem;"};function v(e){return Object(a.b)("div",{css:j},Object(a.b)("div",{className:"organizer--title",css:u},Object(a.b)("p",null,e.name)),Object(a.b)("table",null,Object(a.b)("thead",null,Object(a.b)("tr",null,Object(a.b)("th",{className:"organizer--table--name",css:h},"이름"),Object(a.b)("th",{css:h},"소속"))),Object(a.b)("tbody",null,e.info.map((function(e){return Object(a.b)("tr",null,Object(a.b)("td",null,e.name),Object(a.b)("td",{css:O},e.school))})))))}function f(e){return Object(a.b)("div",{className:"result--wrapper "+e.seasonName},Object(a.b)(p,{info:e.season[3][0]}),Object(a.b)(p,{info:e.season[3][1]}),Object(a.b)("div",{className:"organizer--table--wrapper"},Object(a.b)(v,{name:"출제진",info:e.season[4]}),Object(a.b)("div",{className:"organizer--table--flexwrap"}),Object(a.b)(v,{name:"검수진",info:e.season[5]})))}var w=t("9CTB"),g=t.n(w);s.default=function(e){e.data,e.path;var s=function(e){var s=e.target.innerHTML.split(" "),t=s[0]+"--"+s[1],a=e.target;a.classList.contains("selected")||a.classList.add("selected");for(var c=document.getElementsByClassName("season"),n=0;n<c.length;n++)console.log(c[n]),c[n]!=e.target&&c[n].classList.contains("selected")&&c[n].classList.remove("selected");for(var l=document.getElementsByClassName(t)[0],o=document.getElementsByClassName("result--wrapper"),i=0;i<o.length;i++)o[i]==l?(l.classList.contains("hide")&&l.classList.remove("hide"),l.classList.contains("show")||l.classList.add("show")):o[i].classList.contains("show")&&(o[i].classList.remove("show"),o[i].classList.add("hide"))},t=function(e){var s=e.target.innerHTML.split(" "),t=s[0]+"--"+s[1],a=e.target;a.classList.contains("selected--mobile")||a.classList.add("selected--mobile");for(var c=document.getElementsByClassName("selected--mobile"),n=0;n<c.length;n++)console.log(c[n]),c[n]!=e.target&&c[n].classList.contains("selected--mobile")&&c[n].classList.remove("selected--mobile");for(var l=document.getElementsByClassName(t)[0],o=document.getElementsByClassName("result--wrapper"),i=0;i<o.length;i++)o[i]==l?(l.classList.contains("hide")&&l.classList.remove("hide"),l.classList.contains("show")||l.classList.add("show")):o[i].classList.contains("show")&&(o[i].classList.remove("show"),o[i].classList.add("hide"))};return Object(a.b)(n.a,null,Object(a.b)(c.a,null,Object(a.b)("meta",{name:"google-site-verification",content:"5Ph0_m71cR-AlpUbNuBAmu3IR6SaIdgioXEh6aFVP9w"}),Object(a.b)("meta",{name:"naver-site-verification",content:"fcb10e2391d27964e9d52812543f1bbe401542fb"})),Object(a.b)(l.a,{title:"SUAPC 2021",description:"SUAPC는 신촌지역 5개 대학(서강, 숙명, 연세, 이화, 홍익)의 학부생 및 대학원 1년차를 대상으로 하는 프로그래밍 대회입니다."}),Object(a.b)("div",{className:"wrapper"},Object(a.b)("div",{className:"suapc--wrapper"},Object(a.b)("div",{className:"logo--info--wrapper"},Object(a.b)("h1",{className:"logo--wrapper"},"SUAPC"),Object(a.b)("p",{className:"info--wrapper"},Object(a.b)("span",{className:"info--part"},"SUAPC는 신촌지역 5개 대학(연세, 서강, 이화, 홍익, 숙명)의 학부생 및 대학원 1년차를 대상으로 하는"),Object(a.b)("span",{className:"info--part"},"프로그래밍 대회입니다. 대회 문제는 서울 리저널의 문제 출제 경향을 따르며 제한시간 동안 얼마나 많은"),Object(a.b)("span",{className:"info--part"},"문제를 정확하게 풀 수 있는지를 평가하여 순위를 결정합니다.")),Object(a.b)("div",{className:"info--wrapper--mobile"},"Sinchon  University  Association  Programming  Contest")),Object(a.b)("div",{className:"grower1"}),Object(a.b)("hr",null),Object(a.b)("div",{className:"grower2"}),Object(a.b)("div",{className:"sponser--wrapper"},Object(a.b)("img",{src:i.a,draggable:"false"}))),Object(a.b)("div",{className:"content--wrapper"},Object(a.b)("div",{className:"season--wrapper--mobile"},Object(a.b)("div",{className:"season--mobile",onClick:function(e){return t(e)}},"2021 Winter"),Object(a.b)("div",{className:"season--mobile selected--mobile",onClick:function(e){return t(e)}},"2020 Summer")),Object(a.b)("div",{className:"season--wrapper"},Object(a.b)("div",{className:"season",onClick:function(e){return s(e)}},"2021 Winter"),Object(a.b)("div",{className:"season selected",onClick:function(e){return s(e)}},"2020 Summer")),Object(a.b)(f,{season:Object.values(g.a),seasonName:"2020--Summer show"}),Object(a.b)("div",{className:"result--wrapper no--contest 2021--Winter hide"},"아직 시행되지 않은 SUAPC 입니다."))))}},"9CTB":function(e,s){e.exports={year:2020,semester:"Summer",activity_type:"SUAPC",awards:[{div:1,winner:[{prize:1,solved:8,team:"햇빛이 선명하게 문제를 핥고 있었다",school:"연세대학교",member:"윤인섭, 황준호, 남현우"},{prize:2,solved:6,team:"talsogang",school:"서강대학교",member:"김주현, 이상원, 이태한"},{prize:3,solved:5,team:"BlackWeasel",school:"서강대학교",member:"임지환, 이기현, 이윤제"},{prize:4,solved:4,team:"개강시켜조",school:"연세대학교",member:"김형진, 함태완, 동용훈"},{prize:5,solved:3,team:"처음보는사람들끼리신청마감1시간전에만든팀",school:"서강대학교",member:"김성현, 전해성, 박재형"}]},{div:2,winner:[{prize:1,solved:6,team:"Terra",school:"서강대학교",member:"이민희, 이동주, 조원빈"},{prize:2,solved:5,team:"한놈만노린다",school:"서강대학교",member:"최재영, 이수빈, 황성민"},{prize:3,solved:4,team:"corini",school:"연세대학교",member:"박시원, 이동렬, 전현성"},{prize:4,solved:4,team:"먹고살자고하는짓",school:"연세대학교",member:"김태윤, 정은서, 송상윤"},{prize:5,solved:4,team:"기시디한테 롤 진 팀",school:"홍익대학교",member:"노정윤, 김도현, 김연욱"}]}],examiner:[{name:"이국렬",school:"연세대학교"},{name:"이재열",school:"홍익대학교"},{name:"정연두",school:"홍익대학교"},{name:"김규진",school:"서강대학교"},{name:"박수현",school:"서강대학교"},{name:"이준석",school:"서강대학교"}],checker:[{name:"최재민",school:"KAIST"},{name:"이종서",school:"KAIST"},{name:"홍은기",school:"삼성전자"},{name:"강인구",school:"고려대학교"},{name:"최윤영",school:"서울대학교(대학원)"},{name:"나정휘",school:"선린인터넷고등학교"}]}},McmQ:function(e,s,t){},aT6C:function(e,s,t){},kUnD:function(e,s,t){e.exports=t.p+"static/sponser-5c4b3386c65d9e75ce0c8f7e9be76886.png"}}]);
//# sourceMappingURL=component---src-pages-suapc-tsx-c417d1b4f89d00cff819.js.map