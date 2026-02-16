import{s as bi,d as s,i as c,a as we,b as O,c as m,h as Mi,e as A,f as ki,g as P,j as Ii,k as v,l as C,m as Ni,n as Gi,o as hi,p as Fi,q as Vi,r as Rt}from"../chunks/scheduler.FpD6N7RQ.js";import{S as Wi,i as Bi,d as y,t as p,a as l,c as Ht,m as g,b as k,e as N,g as Lt}from"../chunks/index.CJT9_JY8.js";import{D as oe,e as Yi,s as qi,Q as bt,p as Pi,C as S,r as Ei,a as zi}from"../chunks/VennDiagram.svelte_svelte_type_style_lang.BSmdDldM.js";import{w as Ji}from"../chunks/entry.BmF8qIvy.js";import{h as z,p as xi}from"../chunks/setTrackProxy.DjIbdjlZ.js";import{p as Qi}from"../chunks/stores.01ULU8yI.js";import{B as Ee,Q as Mt}from"../chunks/BarChart.DscctSSP.js";import{B as Je,L as ji}from"../chunks/LineChart.CrQpACj2.js";import{S as Ki}from"../chunks/ScatterPlot.C3Wd9tCv.js";function Xi(d){return{c(){this.h()},l(a){this.h()},h(){document.title="Evidence"},m:Rt,p:Rt,d:Rt}}function Ri(d){let a,n;return a=new Mt({props:{queryID:"efficiency_overview",queryResult:d[0]}}),{c(){N(a.$$.fragment)},l(e){k(a.$$.fragment,e)},m(e,w){g(a,e,w),n=!0},p(e,w){const u={};w[0]&1&&(u.queryResult=e[0]),a.$set(u)},i(e){n||(l(a.$$.fragment,e),n=!0)},o(e){p(a.$$.fragment,e),n=!1},d(e){y(a,e)}}}function Ti(d){let a,n;return a=new Mt({props:{queryID:"session_productivity",queryResult:d[1]}}),{c(){N(a.$$.fragment)},l(e){k(a.$$.fragment,e)},m(e,w){g(a,e,w),n=!0},p(e,w){const u={};w[0]&2&&(u.queryResult=e[1]),a.$set(u)},i(e){n||(l(a.$$.fragment,e),n=!0)},o(e){p(a.$$.fragment,e),n=!1},d(e){y(a,e)}}}function Zi(d){let a,n,e,w,u,f,r,T,R,L,_,E,o,U,M,wt;return a=new S({props:{id:"agent_code",title:"Agent"}}),e=new S({props:{id:"agent_role",title:"Role"}}),u=new S({props:{id:"sessions",title:"Sessions",fmt:"num0"}}),r=new S({props:{id:"avg_duration",title:"Avg Duration",fmt:"num1"}}),R=new S({props:{id:"avg_lifecycle_events",title:"Lifecycle",fmt:"num1"}}),_=new S({props:{id:"avg_ticket_activities",title:"Ticket",fmt:"num1"}}),o=new S({props:{id:"avg_pr_activities",title:"PR",fmt:"num1"}}),M=new S({props:{id:"avg_total_activity",title:"Total",fmt:"num1"}}),{c(){N(a.$$.fragment),n=v(),N(e.$$.fragment),w=v(),N(u.$$.fragment),f=v(),N(r.$$.fragment),T=v(),N(R.$$.fragment),L=v(),N(_.$$.fragment),E=v(),N(o.$$.fragment),U=v(),N(M.$$.fragment)},l($){k(a.$$.fragment,$),n=m($),k(e.$$.fragment,$),w=m($),k(u.$$.fragment,$),f=m($),k(r.$$.fragment,$),T=m($),k(R.$$.fragment,$),L=m($),k(_.$$.fragment,$),E=m($),k(o.$$.fragment,$),U=m($),k(M.$$.fragment,$)},m($,H){g(a,$,H),c($,n,H),g(e,$,H),c($,w,H),g(u,$,H),c($,f,H),g(r,$,H),c($,T,H),g(R,$,H),c($,L,H),g(_,$,H),c($,E,H),g(o,$,H),c($,U,H),g(M,$,H),wt=!0},p:Rt,i($){wt||(l(a.$$.fragment,$),l(e.$$.fragment,$),l(u.$$.fragment,$),l(r.$$.fragment,$),l(R.$$.fragment,$),l(_.$$.fragment,$),l(o.$$.fragment,$),l(M.$$.fragment,$),wt=!0)},o($){p(a.$$.fragment,$),p(e.$$.fragment,$),p(u.$$.fragment,$),p(r.$$.fragment,$),p(R.$$.fragment,$),p(_.$$.fragment,$),p(o.$$.fragment,$),p(M.$$.fragment,$),wt=!1},d($){$&&(s(n),s(w),s(f),s(T),s(L),s(E),s(U)),y(a,$),y(e,$),y(u,$),y(r,$),y(R,$),y(_,$),y(o,$),y(M,$)}}}function Oi(d){let a,n;return a=new Mt({props:{queryID:"context_utilization",queryResult:d[2]}}),{c(){N(a.$$.fragment)},l(e){k(a.$$.fragment,e)},m(e,w){g(a,e,w),n=!0},p(e,w){const u={};w[0]&4&&(u.queryResult=e[2]),a.$set(u)},i(e){n||(l(a.$$.fragment,e),n=!0)},o(e){p(a.$$.fragment,e),n=!1},d(e){y(a,e)}}}function ta(d){let a,n,e,w,u,f,r,T,R,L,_,E;return a=new S({props:{id:"agent_code",title:"Agent"}}),e=new S({props:{id:"model_code",title:"Model"}}),u=new S({props:{id:"model_context_window",title:"Window",fmt:"num0"}}),r=new S({props:{id:"sessions",title:"Sessions",fmt:"num0"}}),R=new S({props:{id:"avg_tokens_per_session",title:"Avg Tokens",fmt:"num0"}}),_=new S({props:{id:"context_utilization_pct",title:"Utilization %",fmt:"num1"}}),{c(){N(a.$$.fragment),n=v(),N(e.$$.fragment),w=v(),N(u.$$.fragment),f=v(),N(r.$$.fragment),T=v(),N(R.$$.fragment),L=v(),N(_.$$.fragment)},l(o){k(a.$$.fragment,o),n=m(o),k(e.$$.fragment,o),w=m(o),k(u.$$.fragment,o),f=m(o),k(r.$$.fragment,o),T=m(o),k(R.$$.fragment,o),L=m(o),k(_.$$.fragment,o)},m(o,U){g(a,o,U),c(o,n,U),g(e,o,U),c(o,w,U),g(u,o,U),c(o,f,U),g(r,o,U),c(o,T,U),g(R,o,U),c(o,L,U),g(_,o,U),E=!0},p:Rt,i(o){E||(l(a.$$.fragment,o),l(e.$$.fragment,o),l(u.$$.fragment,o),l(r.$$.fragment,o),l(R.$$.fragment,o),l(_.$$.fragment,o),E=!0)},o(o){p(a.$$.fragment,o),p(e.$$.fragment,o),p(u.$$.fragment,o),p(r.$$.fragment,o),p(R.$$.fragment,o),p(_.$$.fragment,o),E=!1},d(o){o&&(s(n),s(w),s(f),s(T),s(L)),y(a,o),y(e,o),y(u,o),y(r,o),y(R,o),y(_,o)}}}function Ui(d){let a,n;return a=new Mt({props:{queryID:"cache_hit_rate",queryResult:d[3]}}),{c(){N(a.$$.fragment)},l(e){k(a.$$.fragment,e)},m(e,w){g(a,e,w),n=!0},p(e,w){const u={};w[0]&8&&(u.queryResult=e[3]),a.$set(u)},i(e){n||(l(a.$$.fragment,e),n=!0)},o(e){p(a.$$.fragment,e),n=!1},d(e){y(a,e)}}}function ea(d){let a,n,e,w,u,f,r,T,R,L,_,E;return a=new S({props:{id:"agent_code",title:"Agent"}}),e=new S({props:{id:"sessions",title:"Sessions",fmt:"num0"}}),u=new S({props:{id:"direct_tokens",title:"Direct",fmt:"num0"}}),r=new S({props:{id:"cache_read_tokens",title:"Cache Read",fmt:"num0"}}),R=new S({props:{id:"cache_create_tokens",title:"Cache Create",fmt:"num0"}}),_=new S({props:{id:"cache_hit_rate",title:"Hit Rate %",fmt:"num1"}}),{c(){N(a.$$.fragment),n=v(),N(e.$$.fragment),w=v(),N(u.$$.fragment),f=v(),N(r.$$.fragment),T=v(),N(R.$$.fragment),L=v(),N(_.$$.fragment)},l(o){k(a.$$.fragment,o),n=m(o),k(e.$$.fragment,o),w=m(o),k(u.$$.fragment,o),f=m(o),k(r.$$.fragment,o),T=m(o),k(R.$$.fragment,o),L=m(o),k(_.$$.fragment,o)},m(o,U){g(a,o,U),c(o,n,U),g(e,o,U),c(o,w,U),g(u,o,U),c(o,f,U),g(r,o,U),c(o,T,U),g(R,o,U),c(o,L,U),g(_,o,U),E=!0},p:Rt,i(o){E||(l(a.$$.fragment,o),l(e.$$.fragment,o),l(u.$$.fragment,o),l(r.$$.fragment,o),l(R.$$.fragment,o),l(_.$$.fragment,o),E=!0)},o(o){p(a.$$.fragment,o),p(e.$$.fragment,o),p(u.$$.fragment,o),p(r.$$.fragment,o),p(R.$$.fragment,o),p(_.$$.fragment,o),E=!1},d(o){o&&(s(n),s(w),s(f),s(T),s(L)),y(a,o),y(e,o),y(u,o),y(r,o),y(R,o),y(_,o)}}}function Si(d){let a,n;return a=new Mt({props:{queryID:"duration_distribution",queryResult:d[4]}}),{c(){N(a.$$.fragment)},l(e){k(a.$$.fragment,e)},m(e,w){g(a,e,w),n=!0},p(e,w){const u={};w[0]&16&&(u.queryResult=e[4]),a.$set(u)},i(e){n||(l(a.$$.fragment,e),n=!0)},o(e){p(a.$$.fragment,e),n=!1},d(e){y(a,e)}}}function ia(d){let a,n,e,w,u,f;return a=new S({props:{id:"duration_bucket",title:"Duration"}}),e=new S({props:{id:"session_count",title:"Sessions",fmt:"num0"}}),u=new S({props:{id:"avg_activity",title:"Avg Activity",fmt:"num1"}}),{c(){N(a.$$.fragment),n=v(),N(e.$$.fragment),w=v(),N(u.$$.fragment)},l(r){k(a.$$.fragment,r),n=m(r),k(e.$$.fragment,r),w=m(r),k(u.$$.fragment,r)},m(r,T){g(a,r,T),c(r,n,T),g(e,r,T),c(r,w,T),g(u,r,T),f=!0},p:Rt,i(r){f||(l(a.$$.fragment,r),l(e.$$.fragment,r),l(u.$$.fragment,r),f=!0)},o(r){p(a.$$.fragment,r),p(e.$$.fragment,r),p(u.$$.fragment,r),f=!1},d(r){r&&(s(n),s(w)),y(a,r),y(e,r),y(u,r)}}}function Di(d){let a,n;return a=new Mt({props:{queryID:"token_efficiency",queryResult:d[5]}}),{c(){N(a.$$.fragment)},l(e){k(a.$$.fragment,e)},m(e,w){g(a,e,w),n=!0},p(e,w){const u={};w[0]&32&&(u.queryResult=e[5]),a.$set(u)},i(e){n||(l(a.$$.fragment,e),n=!0)},o(e){p(a.$$.fragment,e),n=!1},d(e){y(a,e)}}}function aa(d){let a,n,e,w,u,f,r,T,R,L;return a=new S({props:{id:"agent_code",title:"Agent"}}),e=new S({props:{id:"sessions",title:"Sessions",fmt:"num0"}}),u=new S({props:{id:"total_activities",title:"Activities",fmt:"num0"}}),r=new S({props:{id:"total_cost",title:"Cost",fmt:"usd2"}}),R=new S({props:{id:"cost_per_activity",title:"Cost/Activity",fmt:"usd4"}}),{c(){N(a.$$.fragment),n=v(),N(e.$$.fragment),w=v(),N(u.$$.fragment),f=v(),N(r.$$.fragment),T=v(),N(R.$$.fragment)},l(_){k(a.$$.fragment,_),n=m(_),k(e.$$.fragment,_),w=m(_),k(u.$$.fragment,_),f=m(_),k(r.$$.fragment,_),T=m(_),k(R.$$.fragment,_)},m(_,E){g(a,_,E),c(_,n,E),g(e,_,E),c(_,w,E),g(u,_,E),c(_,f,E),g(r,_,E),c(_,T,E),g(R,_,E),L=!0},p:Rt,i(_){L||(l(a.$$.fragment,_),l(e.$$.fragment,_),l(u.$$.fragment,_),l(r.$$.fragment,_),l(R.$$.fragment,_),L=!0)},o(_){p(a.$$.fragment,_),p(e.$$.fragment,_),p(u.$$.fragment,_),p(r.$$.fragment,_),p(R.$$.fragment,_),L=!1},d(_){_&&(s(n),s(w),s(f),s(T)),y(a,_),y(e,_),y(u,_),y(r,_),y(R,_)}}}function Ai(d){let a,n;return a=new Mt({props:{queryID:"compaction_opportunities",queryResult:d[6]}}),{c(){N(a.$$.fragment)},l(e){k(a.$$.fragment,e)},m(e,w){g(a,e,w),n=!0},p(e,w){const u={};w[0]&64&&(u.queryResult=e[6]),a.$set(u)},i(e){n||(l(a.$$.fragment,e),n=!0)},o(e){p(a.$$.fragment,e),n=!1},d(e){y(a,e)}}}function na(d){let a,n,e,w,u,f,r,T,R,L;return a=new S({props:{id:"agent_code",title:"Agent"}}),e=new S({props:{id:"low_efficiency_sessions",title:"Long/Low Activity",fmt:"num0"}}),u=new S({props:{id:"avg_duration",title:"Avg Duration",fmt:"num1"}}),r=new S({props:{id:"avg_activity",title:"Avg Activity",fmt:"num1"}}),R=new S({props:{id:"avg_tokens",title:"Avg Tokens",fmt:"num0"}}),{c(){N(a.$$.fragment),n=v(),N(e.$$.fragment),w=v(),N(u.$$.fragment),f=v(),N(r.$$.fragment),T=v(),N(R.$$.fragment)},l(_){k(a.$$.fragment,_),n=m(_),k(e.$$.fragment,_),w=m(_),k(u.$$.fragment,_),f=m(_),k(r.$$.fragment,_),T=m(_),k(R.$$.fragment,_)},m(_,E){g(a,_,E),c(_,n,E),g(e,_,E),c(_,w,E),g(u,_,E),c(_,f,E),g(r,_,E),c(_,T,E),g(R,_,E),L=!0},p:Rt,i(_){L||(l(a.$$.fragment,_),l(e.$$.fragment,_),l(u.$$.fragment,_),l(r.$$.fragment,_),l(R.$$.fragment,_),L=!0)},o(_){p(a.$$.fragment,_),p(e.$$.fragment,_),p(u.$$.fragment,_),p(r.$$.fragment,_),p(R.$$.fragment,_),L=!1},d(_){_&&(s(n),s(w),s(f),s(T)),y(a,_),y(e,_),y(u,_),y(r,_),y(R,_)}}}function Ci(d){let a,n;return a=new Mt({props:{queryID:"activity_type_distribution",queryResult:d[7]}}),{c(){N(a.$$.fragment)},l(e){k(a.$$.fragment,e)},m(e,w){g(a,e,w),n=!0},p(e,w){const u={};w[0]&128&&(u.queryResult=e[7]),a.$set(u)},i(e){n||(l(a.$$.fragment,e),n=!0)},o(e){p(a.$$.fragment,e),n=!1},d(e){y(a,e)}}}function _a(d){let a,n,e,w,u,f;return a=new S({props:{id:"activity_type",title:"Activity Type"}}),e=new S({props:{id:"total_count",title:"Total",fmt:"num0"}}),u=new S({props:{id:"avg_per_session",title:"Avg/Session",fmt:"num1"}}),{c(){N(a.$$.fragment),n=v(),N(e.$$.fragment),w=v(),N(u.$$.fragment)},l(r){k(a.$$.fragment,r),n=m(r),k(e.$$.fragment,r),w=m(r),k(u.$$.fragment,r)},m(r,T){g(a,r,T),c(r,n,T),g(e,r,T),c(r,w,T),g(u,r,T),f=!0},p:Rt,i(r){f||(l(a.$$.fragment,r),l(e.$$.fragment,r),l(u.$$.fragment,r),f=!0)},o(r){p(a.$$.fragment,r),p(e.$$.fragment,r),p(u.$$.fragment,r),f=!1},d(r){r&&(s(n),s(w)),y(a,r),y(e,r),y(u,r)}}}function Hi(d){let a,n;return a=new Mt({props:{queryID:"efficiency_trend",queryResult:d[8]}}),{c(){N(a.$$.fragment)},l(e){k(a.$$.fragment,e)},m(e,w){g(a,e,w),n=!0},p(e,w){const u={};w[0]&256&&(u.queryResult=e[8]),a.$set(u)},i(e){n||(l(a.$$.fragment,e),n=!0)},o(e){p(a.$$.fragment,e),n=!1},d(e){y(a,e)}}}function sa(d){let a,n,e,w,u,f,r='<a href="#agent-operational-efficiency">Agent Operational Efficiency</a>',T,R,L='<p class="markdown">&quot;The practiced hand wastes no motion.&quot; — Track session productivity, context usage, and operational patterns.</p>',_,E,o='<a href="#efficiency-overview">Efficiency Overview</a>',U,M,wt='<strong class="markdown">Question</strong>: How productive are agent sessions on average?',$,H,b,X,_e,nt,se,Q,$t,Z,It,Tt,Gt,J,gt='<a href="#session-productivity-by-agent">Session Productivity by Agent</a>',kt,_t,fe='<strong class="markdown">Question</strong>: Which agents accomplish the most work per session?',ht,tt,j,Nt,st,Ft,Ot,ct,x,Vt='<a href="#context-utilization-token-usage">Context Utilization (Token Usage)</a>',Wt,ot,re='<strong class="markdown">Question</strong>: How much of the available context window is each agent using?',ft,et,it,Bt,rt,Yt,at,ut,K,ue='<a href="#cache-hit-rate-by-agent">Cache Hit Rate by Agent</a>',qt,lt,Et='<strong class="markdown">Question</strong>: Which agents are most effectively using prompt caching?',dt,mt,vt,Pt,pt,D,ce,Re,Ut,ei='<a href="#session-duration-distribution">Session Duration Distribution</a>',Te,zt,ii='<strong class="markdown">Question</strong>: How long do most sessions last?',Oe,le,Jt,Ue,xt,Se,$e,De,St,ai='<a href="#token-efficiency-cost-per-activity">Token Efficiency (Cost per Activity)</a>',Ae,Qt,ni='<strong class="markdown">Question</strong>: What is the cost per unit of work accomplished?',Ce,de,jt,He,Kt,Le,ye,be,Dt,_i='<a href="#compaction-opportunities">Compaction Opportunities</a>',Me,Xt,si='<strong class="markdown">Question</strong>: Which agents have long sessions with low activity (potential inefficiency)?',Ie,me,Zt,Ge,ge,he,At,ci='<a href="#activity-type-distribution">Activity Type Distribution</a>',Fe,te,oi='<strong class="markdown">Question</strong>: What types of activities consume the most time?',Ve,ve,ee,We,ie,Be,ke,Ye,Ct,fi='<a href="#efficiency-trend-last-30-days">Efficiency Trend (Last 30 Days)</a>',qe,ae,ri='<strong class="markdown">Question</strong>: Is operational efficiency improving over time?',Pe,pe,ne,ze;function Li(t,i){return Xi}let Ne=Li()(d),I=d[0]&&Ri(d);X=new Je({props:{data:d[0],value:"total_sessions",title:"Total Sessions"}}),nt=new Je({props:{data:d[0],value:"avg_session_minutes",title:"Avg Session",fmt:"num1"}}),Q=new Je({props:{data:d[0],value:"avg_lifecycle_per_session",title:"Events/Session",fmt:"num1"}}),Z=new Je({props:{data:d[0],value:"avg_ticket_activity_per_session",title:"Activities/Session",fmt:"num1"}});let G=d[1]&&Ti(d);j=new Ee({props:{data:d[1],x:"agent_code",y:"avg_total_activity",title:"Average Activity per Session by Agent",xAxisTitle:"Agent",yAxisTitle:"Activities",series:[{name:"Activity",color:"#3B82F6"}]}}),st=new oe({props:{data:d[1],search:"true",$$slots:{default:[Zi]},$$scope:{ctx:d}}});let h=d[2]&&Oi(d);it=new Ee({props:{data:d[2],x:"agent_code",y:"context_utilization_pct",title:"Context Window Utilization by Agent (%)",xAxisTitle:"Agent",yAxisTitle:"Utilization (%)",series:[{name:"Utilization",color:"#8B5CF6"}]}}),rt=new oe({props:{data:d[2],$$slots:{default:[ta]},$$scope:{ctx:d}}});let F=d[3]&&Ui(d);vt=new Ee({props:{data:d[3],x:"agent_code",y:"cache_hit_rate",title:"Cache Hit Rate by Agent (%)",xAxisTitle:"Agent",yAxisTitle:"Hit Rate (%)",series:[{name:"Cache Hit",color:"#10B981"}]}}),pt=new oe({props:{data:d[3],$$slots:{default:[ea]},$$scope:{ctx:d}}});let V=d[4]&&Si(d);Jt=new Ee({props:{data:d[4],x:"duration_bucket",y:"session_count",title:"Session Duration Distribution",xAxisTitle:"Duration",yAxisTitle:"Count",series:[{name:"Sessions",color:"#F59E0B"}]}}),xt=new oe({props:{data:d[4],$$slots:{default:[ia]},$$scope:{ctx:d}}});let W=d[5]&&Di(d);jt=new Ki({props:{data:d[5],x:"total_activities",y:"cost_per_activity",series:"agent_code",title:"Cost per Activity vs Total Activities",xAxisTitle:"Total Activities",yAxisTitle:"Cost per Activity (USD)"}}),Kt=new oe({props:{data:d[5],$$slots:{default:[aa]},$$scope:{ctx:d}}});let B=d[6]&&Ai(d);Zt=new oe({props:{data:d[6],$$slots:{default:[na]},$$scope:{ctx:d}}});let Y=d[7]&&Ci(d);ee=new Ee({props:{data:d[7],x:"activity_type",y:"total_count",title:"Activity Type Distribution",xAxisTitle:"Type",yAxisTitle:"Count",series:[{name:"Total",color:"#3B82F6"}]}}),ie=new oe({props:{data:d[7],$$slots:{default:[_a]},$$scope:{ctx:d}}});let q=d[8]&&Hi(d);return ne=new ji({props:{data:d[8],x:"date",y:"activities_per_hour",yAxisTitle:"Activities per Hour",title:"Efficiency Trend (Activities/Hour)",series:[{name:"Efficiency",color:"#10B981"}]}}),{c(){a=v(),Ne.c(),n=C("meta"),e=C("meta"),w=ki(),u=v(),f=C("h1"),f.innerHTML=r,T=v(),R=C("blockquote"),R.innerHTML=L,_=v(),E=C("h2"),E.innerHTML=o,U=v(),M=C("p"),M.innerHTML=wt,$=v(),I&&I.c(),H=v(),b=C("div"),N(X.$$.fragment),_e=v(),N(nt.$$.fragment),se=v(),N(Q.$$.fragment),$t=v(),N(Z.$$.fragment),It=v(),Tt=C("hr"),Gt=v(),J=C("h2"),J.innerHTML=gt,kt=v(),_t=C("p"),_t.innerHTML=fe,ht=v(),G&&G.c(),tt=v(),N(j.$$.fragment),Nt=v(),N(st.$$.fragment),Ft=v(),Ot=C("hr"),ct=v(),x=C("h2"),x.innerHTML=Vt,Wt=v(),ot=C("p"),ot.innerHTML=re,ft=v(),h&&h.c(),et=v(),N(it.$$.fragment),Bt=v(),N(rt.$$.fragment),Yt=v(),at=C("hr"),ut=v(),K=C("h2"),K.innerHTML=ue,qt=v(),lt=C("p"),lt.innerHTML=Et,dt=v(),F&&F.c(),mt=v(),N(vt.$$.fragment),Pt=v(),N(pt.$$.fragment),D=v(),ce=C("hr"),Re=v(),Ut=C("h2"),Ut.innerHTML=ei,Te=v(),zt=C("p"),zt.innerHTML=ii,Oe=v(),V&&V.c(),le=v(),N(Jt.$$.fragment),Ue=v(),N(xt.$$.fragment),Se=v(),$e=C("hr"),De=v(),St=C("h2"),St.innerHTML=ai,Ae=v(),Qt=C("p"),Qt.innerHTML=ni,Ce=v(),W&&W.c(),de=v(),N(jt.$$.fragment),He=v(),N(Kt.$$.fragment),Le=v(),ye=C("hr"),be=v(),Dt=C("h2"),Dt.innerHTML=_i,Me=v(),Xt=C("p"),Xt.innerHTML=si,Ie=v(),B&&B.c(),me=v(),N(Zt.$$.fragment),Ge=v(),ge=C("hr"),he=v(),At=C("h2"),At.innerHTML=ci,Fe=v(),te=C("p"),te.innerHTML=oi,Ve=v(),Y&&Y.c(),ve=v(),N(ee.$$.fragment),We=v(),N(ie.$$.fragment),Be=v(),ke=C("hr"),Ye=v(),Ct=C("h2"),Ct.innerHTML=fi,qe=v(),ae=C("p"),ae.innerHTML=ri,Pe=v(),q&&q.c(),pe=v(),N(ne.$$.fragment),this.h()},l(t){a=m(t);const i=Mi("svelte-2igo1p",document.head);Ne.l(i),n=A(i,"META",{name:!0,content:!0}),e=A(i,"META",{name:!0,content:!0}),w=ki(),i.forEach(s),u=m(t),f=A(t,"H1",{class:!0,id:!0,"data-svelte-h":!0}),P(f)!=="svelte-3vq5ia"&&(f.innerHTML=r),T=m(t),R=A(t,"BLOCKQUOTE",{class:!0,"data-svelte-h":!0}),P(R)!=="svelte-ob1v1v"&&(R.innerHTML=L),_=m(t),E=A(t,"H2",{class:!0,id:!0,"data-svelte-h":!0}),P(E)!=="svelte-1g8nxyu"&&(E.innerHTML=o),U=m(t),M=A(t,"P",{class:!0,"data-svelte-h":!0}),P(M)!=="svelte-18pqjfp"&&(M.innerHTML=wt),$=m(t),I&&I.l(t),H=m(t),b=A(t,"DIV",{class:!0});var yt=Ii(b);k(X.$$.fragment,yt),_e=m(yt),k(nt.$$.fragment,yt),se=m(yt),k(Q.$$.fragment,yt),$t=m(yt),k(Z.$$.fragment,yt),yt.forEach(s),It=m(t),Tt=A(t,"HR",{class:!0}),Gt=m(t),J=A(t,"H2",{class:!0,id:!0,"data-svelte-h":!0}),P(J)!=="svelte-1izrlyu"&&(J.innerHTML=gt),kt=m(t),_t=A(t,"P",{class:!0,"data-svelte-h":!0}),P(_t)!=="svelte-awf4es"&&(_t.innerHTML=fe),ht=m(t),G&&G.l(t),tt=m(t),k(j.$$.fragment,t),Nt=m(t),k(st.$$.fragment,t),Ft=m(t),Ot=A(t,"HR",{class:!0}),ct=m(t),x=A(t,"H2",{class:!0,id:!0,"data-svelte-h":!0}),P(x)!=="svelte-hb2vfm"&&(x.innerHTML=Vt),Wt=m(t),ot=A(t,"P",{class:!0,"data-svelte-h":!0}),P(ot)!=="svelte-1eo79af"&&(ot.innerHTML=re),ft=m(t),h&&h.l(t),et=m(t),k(it.$$.fragment,t),Bt=m(t),k(rt.$$.fragment,t),Yt=m(t),at=A(t,"HR",{class:!0}),ut=m(t),K=A(t,"H2",{class:!0,id:!0,"data-svelte-h":!0}),P(K)!=="svelte-1672erb"&&(K.innerHTML=ue),qt=m(t),lt=A(t,"P",{class:!0,"data-svelte-h":!0}),P(lt)!=="svelte-1s6h4zt"&&(lt.innerHTML=Et),dt=m(t),F&&F.l(t),mt=m(t),k(vt.$$.fragment,t),Pt=m(t),k(pt.$$.fragment,t),D=m(t),ce=A(t,"HR",{class:!0}),Re=m(t),Ut=A(t,"H2",{class:!0,id:!0,"data-svelte-h":!0}),P(Ut)!=="svelte-a40e1i"&&(Ut.innerHTML=ei),Te=m(t),zt=A(t,"P",{class:!0,"data-svelte-h":!0}),P(zt)!=="svelte-oty67t"&&(zt.innerHTML=ii),Oe=m(t),V&&V.l(t),le=m(t),k(Jt.$$.fragment,t),Ue=m(t),k(xt.$$.fragment,t),Se=m(t),$e=A(t,"HR",{class:!0}),De=m(t),St=A(t,"H2",{class:!0,id:!0,"data-svelte-h":!0}),P(St)!=="svelte-vinlq0"&&(St.innerHTML=ai),Ae=m(t),Qt=A(t,"P",{class:!0,"data-svelte-h":!0}),P(Qt)!=="svelte-lzw969"&&(Qt.innerHTML=ni),Ce=m(t),W&&W.l(t),de=m(t),k(jt.$$.fragment,t),He=m(t),k(Kt.$$.fragment,t),Le=m(t),ye=A(t,"HR",{class:!0}),be=m(t),Dt=A(t,"H2",{class:!0,id:!0,"data-svelte-h":!0}),P(Dt)!=="svelte-1p1rn7o"&&(Dt.innerHTML=_i),Me=m(t),Xt=A(t,"P",{class:!0,"data-svelte-h":!0}),P(Xt)!=="svelte-lk4zpy"&&(Xt.innerHTML=si),Ie=m(t),B&&B.l(t),me=m(t),k(Zt.$$.fragment,t),Ge=m(t),ge=A(t,"HR",{class:!0}),he=m(t),At=A(t,"H2",{class:!0,id:!0,"data-svelte-h":!0}),P(At)!=="svelte-gut4yd"&&(At.innerHTML=ci),Fe=m(t),te=A(t,"P",{class:!0,"data-svelte-h":!0}),P(te)!=="svelte-1k4orl2"&&(te.innerHTML=oi),Ve=m(t),Y&&Y.l(t),ve=m(t),k(ee.$$.fragment,t),We=m(t),k(ie.$$.fragment,t),Be=m(t),ke=A(t,"HR",{class:!0}),Ye=m(t),Ct=A(t,"H2",{class:!0,id:!0,"data-svelte-h":!0}),P(Ct)!=="svelte-101f4lj"&&(Ct.innerHTML=fi),qe=m(t),ae=A(t,"P",{class:!0,"data-svelte-h":!0}),P(ae)!=="svelte-3aa88n"&&(ae.innerHTML=ri),Pe=m(t),q&&q.l(t),pe=m(t),k(ne.$$.fragment,t),this.h()},h(){O(n,"name","twitter:card"),O(n,"content","summary_large_image"),O(e,"name","twitter:site"),O(e,"content","@evidence_dev"),O(f,"class","markdown"),O(f,"id","agent-operational-efficiency"),O(R,"class","markdown"),O(E,"class","markdown"),O(E,"id","efficiency-overview"),O(M,"class","markdown"),O(b,"class","grid grid-cols-2 md:grid-cols-4 gap-4 mb-6"),O(Tt,"class","markdown"),O(J,"class","markdown"),O(J,"id","session-productivity-by-agent"),O(_t,"class","markdown"),O(Ot,"class","markdown"),O(x,"class","markdown"),O(x,"id","context-utilization-token-usage"),O(ot,"class","markdown"),O(at,"class","markdown"),O(K,"class","markdown"),O(K,"id","cache-hit-rate-by-agent"),O(lt,"class","markdown"),O(ce,"class","markdown"),O(Ut,"class","markdown"),O(Ut,"id","session-duration-distribution"),O(zt,"class","markdown"),O($e,"class","markdown"),O(St,"class","markdown"),O(St,"id","token-efficiency-cost-per-activity"),O(Qt,"class","markdown"),O(ye,"class","markdown"),O(Dt,"class","markdown"),O(Dt,"id","compaction-opportunities"),O(Xt,"class","markdown"),O(ge,"class","markdown"),O(At,"class","markdown"),O(At,"id","activity-type-distribution"),O(te,"class","markdown"),O(ke,"class","markdown"),O(Ct,"class","markdown"),O(Ct,"id","efficiency-trend-last-30-days"),O(ae,"class","markdown")},m(t,i){c(t,a,i),Ne.m(document.head,null),we(document.head,n),we(document.head,e),we(document.head,w),c(t,u,i),c(t,f,i),c(t,T,i),c(t,R,i),c(t,_,i),c(t,E,i),c(t,U,i),c(t,M,i),c(t,$,i),I&&I.m(t,i),c(t,H,i),c(t,b,i),g(X,b,null),we(b,_e),g(nt,b,null),we(b,se),g(Q,b,null),we(b,$t),g(Z,b,null),c(t,It,i),c(t,Tt,i),c(t,Gt,i),c(t,J,i),c(t,kt,i),c(t,_t,i),c(t,ht,i),G&&G.m(t,i),c(t,tt,i),g(j,t,i),c(t,Nt,i),g(st,t,i),c(t,Ft,i),c(t,Ot,i),c(t,ct,i),c(t,x,i),c(t,Wt,i),c(t,ot,i),c(t,ft,i),h&&h.m(t,i),c(t,et,i),g(it,t,i),c(t,Bt,i),g(rt,t,i),c(t,Yt,i),c(t,at,i),c(t,ut,i),c(t,K,i),c(t,qt,i),c(t,lt,i),c(t,dt,i),F&&F.m(t,i),c(t,mt,i),g(vt,t,i),c(t,Pt,i),g(pt,t,i),c(t,D,i),c(t,ce,i),c(t,Re,i),c(t,Ut,i),c(t,Te,i),c(t,zt,i),c(t,Oe,i),V&&V.m(t,i),c(t,le,i),g(Jt,t,i),c(t,Ue,i),g(xt,t,i),c(t,Se,i),c(t,$e,i),c(t,De,i),c(t,St,i),c(t,Ae,i),c(t,Qt,i),c(t,Ce,i),W&&W.m(t,i),c(t,de,i),g(jt,t,i),c(t,He,i),g(Kt,t,i),c(t,Le,i),c(t,ye,i),c(t,be,i),c(t,Dt,i),c(t,Me,i),c(t,Xt,i),c(t,Ie,i),B&&B.m(t,i),c(t,me,i),g(Zt,t,i),c(t,Ge,i),c(t,ge,i),c(t,he,i),c(t,At,i),c(t,Fe,i),c(t,te,i),c(t,Ve,i),Y&&Y.m(t,i),c(t,ve,i),g(ee,t,i),c(t,We,i),g(ie,t,i),c(t,Be,i),c(t,ke,i),c(t,Ye,i),c(t,Ct,i),c(t,qe,i),c(t,ae,i),c(t,Pe,i),q&&q.m(t,i),c(t,pe,i),g(ne,t,i),ze=!0},p(t,i){Ne.p(t,i),t[0]?I?(I.p(t,i),i[0]&1&&l(I,1)):(I=Ri(t),I.c(),l(I,1),I.m(H.parentNode,H)):I&&(Lt(),p(I,1,1,()=>{I=null}),Ht());const yt={};i[0]&1&&(yt.data=t[0]),X.$set(yt);const ui={};i[0]&1&&(ui.data=t[0]),nt.$set(ui);const li={};i[0]&1&&(li.data=t[0]),Q.$set(li);const di={};i[0]&1&&(di.data=t[0]),Z.$set(di),t[1]?G?(G.p(t,i),i[0]&2&&l(G,1)):(G=Ti(t),G.c(),l(G,1),G.m(tt.parentNode,tt)):G&&(Lt(),p(G,1,1,()=>{G=null}),Ht());const mi={};i[0]&2&&(mi.data=t[1]),j.$set(mi);const xe={};i[0]&2&&(xe.data=t[1]),i[2]&16&&(xe.$$scope={dirty:i,ctx:t}),st.$set(xe),t[2]?h?(h.p(t,i),i[0]&4&&l(h,1)):(h=Oi(t),h.c(),l(h,1),h.m(et.parentNode,et)):h&&(Lt(),p(h,1,1,()=>{h=null}),Ht());const vi={};i[0]&4&&(vi.data=t[2]),it.$set(vi);const Qe={};i[0]&4&&(Qe.data=t[2]),i[2]&16&&(Qe.$$scope={dirty:i,ctx:t}),rt.$set(Qe),t[3]?F?(F.p(t,i),i[0]&8&&l(F,1)):(F=Ui(t),F.c(),l(F,1),F.m(mt.parentNode,mt)):F&&(Lt(),p(F,1,1,()=>{F=null}),Ht());const pi={};i[0]&8&&(pi.data=t[3]),vt.$set(pi);const je={};i[0]&8&&(je.data=t[3]),i[2]&16&&(je.$$scope={dirty:i,ctx:t}),pt.$set(je),t[4]?V?(V.p(t,i),i[0]&16&&l(V,1)):(V=Si(t),V.c(),l(V,1),V.m(le.parentNode,le)):V&&(Lt(),p(V,1,1,()=>{V=null}),Ht());const wi={};i[0]&16&&(wi.data=t[4]),Jt.$set(wi);const Ke={};i[0]&16&&(Ke.data=t[4]),i[2]&16&&(Ke.$$scope={dirty:i,ctx:t}),xt.$set(Ke),t[5]?W?(W.p(t,i),i[0]&32&&l(W,1)):(W=Di(t),W.c(),l(W,1),W.m(de.parentNode,de)):W&&(Lt(),p(W,1,1,()=>{W=null}),Ht());const $i={};i[0]&32&&($i.data=t[5]),jt.$set($i);const Xe={};i[0]&32&&(Xe.data=t[5]),i[2]&16&&(Xe.$$scope={dirty:i,ctx:t}),Kt.$set(Xe),t[6]?B?(B.p(t,i),i[0]&64&&l(B,1)):(B=Ai(t),B.c(),l(B,1),B.m(me.parentNode,me)):B&&(Lt(),p(B,1,1,()=>{B=null}),Ht());const Ze={};i[0]&64&&(Ze.data=t[6]),i[2]&16&&(Ze.$$scope={dirty:i,ctx:t}),Zt.$set(Ze),t[7]?Y?(Y.p(t,i),i[0]&128&&l(Y,1)):(Y=Ci(t),Y.c(),l(Y,1),Y.m(ve.parentNode,ve)):Y&&(Lt(),p(Y,1,1,()=>{Y=null}),Ht());const yi={};i[0]&128&&(yi.data=t[7]),ee.$set(yi);const ti={};i[0]&128&&(ti.data=t[7]),i[2]&16&&(ti.$$scope={dirty:i,ctx:t}),ie.$set(ti),t[8]?q?(q.p(t,i),i[0]&256&&l(q,1)):(q=Hi(t),q.c(),l(q,1),q.m(pe.parentNode,pe)):q&&(Lt(),p(q,1,1,()=>{q=null}),Ht());const gi={};i[0]&256&&(gi.data=t[8]),ne.$set(gi)},i(t){ze||(l(I),l(X.$$.fragment,t),l(nt.$$.fragment,t),l(Q.$$.fragment,t),l(Z.$$.fragment,t),l(G),l(j.$$.fragment,t),l(st.$$.fragment,t),l(h),l(it.$$.fragment,t),l(rt.$$.fragment,t),l(F),l(vt.$$.fragment,t),l(pt.$$.fragment,t),l(V),l(Jt.$$.fragment,t),l(xt.$$.fragment,t),l(W),l(jt.$$.fragment,t),l(Kt.$$.fragment,t),l(B),l(Zt.$$.fragment,t),l(Y),l(ee.$$.fragment,t),l(ie.$$.fragment,t),l(q),l(ne.$$.fragment,t),ze=!0)},o(t){p(I),p(X.$$.fragment,t),p(nt.$$.fragment,t),p(Q.$$.fragment,t),p(Z.$$.fragment,t),p(G),p(j.$$.fragment,t),p(st.$$.fragment,t),p(h),p(it.$$.fragment,t),p(rt.$$.fragment,t),p(F),p(vt.$$.fragment,t),p(pt.$$.fragment,t),p(V),p(Jt.$$.fragment,t),p(xt.$$.fragment,t),p(W),p(jt.$$.fragment,t),p(Kt.$$.fragment,t),p(B),p(Zt.$$.fragment,t),p(Y),p(ee.$$.fragment,t),p(ie.$$.fragment,t),p(q),p(ne.$$.fragment,t),ze=!1},d(t){t&&(s(a),s(u),s(f),s(T),s(R),s(_),s(E),s(U),s(M),s($),s(H),s(b),s(It),s(Tt),s(Gt),s(J),s(kt),s(_t),s(ht),s(tt),s(Nt),s(Ft),s(Ot),s(ct),s(x),s(Wt),s(ot),s(ft),s(et),s(Bt),s(Yt),s(at),s(ut),s(K),s(qt),s(lt),s(dt),s(mt),s(Pt),s(D),s(ce),s(Re),s(Ut),s(Te),s(zt),s(Oe),s(le),s(Ue),s(Se),s($e),s(De),s(St),s(Ae),s(Qt),s(Ce),s(de),s(He),s(Le),s(ye),s(be),s(Dt),s(Me),s(Xt),s(Ie),s(me),s(Ge),s(ge),s(he),s(At),s(Fe),s(te),s(Ve),s(ve),s(We),s(Be),s(ke),s(Ye),s(Ct),s(qe),s(ae),s(Pe),s(pe)),Ne.d(t),s(n),s(e),s(w),I&&I.d(t),y(X),y(nt),y(Q),y(Z),G&&G.d(t),y(j,t),y(st,t),h&&h.d(t),y(it,t),y(rt,t),F&&F.d(t),y(vt,t),y(pt,t),V&&V.d(t),y(Jt,t),y(xt,t),W&&W.d(t),y(jt,t),y(Kt,t),B&&B.d(t),y(Zt,t),Y&&Y.d(t),y(ee,t),y(ie,t),q&&q.d(t),y(ne,t)}}}function ca(d,a,n){let e,w;Ni(d,Qi,D=>n(47,e=D)),Ni(d,Ei,D=>n(53,w=D));let{data:u}=a,{data:f={},customFormattingSettings:r,__db:T,inputs:R}=u;Gi(Ei,w="d4c8591deda63a81006aaa06d0f7cbfe",w);let L=Yi(Ji(R));hi(L.subscribe(D=>R=D)),Fi(zi,{getCustomFormats:()=>r.customFormats||[]});const _=(D,ce)=>xi(T.query,D,{query_name:ce});qi(_),e.params,Vi(()=>!0);let E={initialData:void 0,initialError:void 0},o=z`SELECT
    COUNT(DISTINCT faiw.agent_instance_tk) as total_sessions,
    ROUND(AVG(faiw.instance_duration_minutes), 1) as avg_session_minutes,
    SUM(faiw.lifecycle_event_count) as total_lifecycle_events,
    SUM(faiw.ticket_activity_count) as total_ticket_activities,
    SUM(faiw.pr_activity_count) as total_pr_activities,
    ROUND(AVG(faiw.lifecycle_event_count), 1) as avg_lifecycle_per_session,
    ROUND(AVG(faiw.ticket_activity_count), 1) as avg_ticket_activity_per_session
FROM herd.fact_agent_instance_work faiw`,U=`SELECT
    COUNT(DISTINCT faiw.agent_instance_tk) as total_sessions,
    ROUND(AVG(faiw.instance_duration_minutes), 1) as avg_session_minutes,
    SUM(faiw.lifecycle_event_count) as total_lifecycle_events,
    SUM(faiw.ticket_activity_count) as total_ticket_activities,
    SUM(faiw.pr_activity_count) as total_pr_activities,
    ROUND(AVG(faiw.lifecycle_event_count), 1) as avg_lifecycle_per_session,
    ROUND(AVG(faiw.ticket_activity_count), 1) as avg_ticket_activity_per_session
FROM herd.fact_agent_instance_work faiw`;f.efficiency_overview_data&&(f.efficiency_overview_data instanceof Error?E.initialError=f.efficiency_overview_data:E.initialData=f.efficiency_overview_data,f.efficiency_overview_columns&&(E.knownColumns=f.efficiency_overview_columns));let M,wt=!1;const $=bt.createReactive({callback:D=>{n(0,M=D)},execFn:_},{id:"efficiency_overview",...E});$(U,{noResolve:o,...E}),globalThis[Symbol.for("efficiency_overview")]={get value(){return M}};let H={initialData:void 0,initialError:void 0},b=z`SELECT
    da.agent_code,
    da.agent_role,
    COUNT(DISTINCT faiw.agent_instance_tk) as sessions,
    ROUND(AVG(faiw.instance_duration_minutes), 1) as avg_duration,
    ROUND(AVG(faiw.lifecycle_event_count), 1) as avg_lifecycle_events,
    ROUND(AVG(faiw.ticket_activity_count), 1) as avg_ticket_activities,
    ROUND(AVG(faiw.pr_activity_count), 1) as avg_pr_activities,
    ROUND(AVG(faiw.lifecycle_event_count + faiw.ticket_activity_count + faiw.pr_activity_count), 1) as avg_total_activity
FROM herd.fact_agent_instance_work faiw
JOIN herd.dim_agent da
    ON faiw.agent_sk = da.agent_sk
WHERE da.is_current = true
  AND NOT da.is_deleted
GROUP BY da.agent_code, da.agent_role
ORDER BY avg_total_activity DESC`,X=`SELECT
    da.agent_code,
    da.agent_role,
    COUNT(DISTINCT faiw.agent_instance_tk) as sessions,
    ROUND(AVG(faiw.instance_duration_minutes), 1) as avg_duration,
    ROUND(AVG(faiw.lifecycle_event_count), 1) as avg_lifecycle_events,
    ROUND(AVG(faiw.ticket_activity_count), 1) as avg_ticket_activities,
    ROUND(AVG(faiw.pr_activity_count), 1) as avg_pr_activities,
    ROUND(AVG(faiw.lifecycle_event_count + faiw.ticket_activity_count + faiw.pr_activity_count), 1) as avg_total_activity
FROM herd.fact_agent_instance_work faiw
JOIN herd.dim_agent da
    ON faiw.agent_sk = da.agent_sk
WHERE da.is_current = true
  AND NOT da.is_deleted
GROUP BY da.agent_code, da.agent_role
ORDER BY avg_total_activity DESC`;f.session_productivity_data&&(f.session_productivity_data instanceof Error?H.initialError=f.session_productivity_data:H.initialData=f.session_productivity_data,f.session_productivity_columns&&(H.knownColumns=f.session_productivity_columns));let _e,nt=!1;const se=bt.createReactive({callback:D=>{n(1,_e=D)},execFn:_},{id:"session_productivity",...H});se(X,{noResolve:b,...H}),globalThis[Symbol.for("session_productivity")]={get value(){return _e}};let Q={initialData:void 0,initialError:void 0},$t=z`SELECT
    da.agent_code,
    dm.model_code,
    dm.model_context_window,
    COUNT(DISTINCT faic.agent_instance_tk) as sessions,
    ROUND(AVG(faic.total_token_input_count + faic.total_token_output_count), 0) as avg_tokens_per_session,
    ROUND(100.0 * AVG(faic.total_token_input_count + faic.total_token_output_count) / dm.model_context_window, 1) as context_utilization_pct
FROM herd.fact_agent_instance_cost faic
JOIN herd.dim_agent da
    ON faic.agent_sk = da.agent_sk
JOIN herd.dim_model dm
    ON faic.model_sk = dm.model_sk
WHERE da.is_current = true
  AND NOT da.is_deleted
GROUP BY da.agent_code, dm.model_code, dm.model_context_window
ORDER BY context_utilization_pct DESC`,Z=`SELECT
    da.agent_code,
    dm.model_code,
    dm.model_context_window,
    COUNT(DISTINCT faic.agent_instance_tk) as sessions,
    ROUND(AVG(faic.total_token_input_count + faic.total_token_output_count), 0) as avg_tokens_per_session,
    ROUND(100.0 * AVG(faic.total_token_input_count + faic.total_token_output_count) / dm.model_context_window, 1) as context_utilization_pct
FROM herd.fact_agent_instance_cost faic
JOIN herd.dim_agent da
    ON faic.agent_sk = da.agent_sk
JOIN herd.dim_model dm
    ON faic.model_sk = dm.model_sk
WHERE da.is_current = true
  AND NOT da.is_deleted
GROUP BY da.agent_code, dm.model_code, dm.model_context_window
ORDER BY context_utilization_pct DESC`;f.context_utilization_data&&(f.context_utilization_data instanceof Error?Q.initialError=f.context_utilization_data:Q.initialData=f.context_utilization_data,f.context_utilization_columns&&(Q.knownColumns=f.context_utilization_columns));let It,Tt=!1;const Gt=bt.createReactive({callback:D=>{n(2,It=D)},execFn:_},{id:"context_utilization",...Q});Gt(Z,{noResolve:$t,...Q}),globalThis[Symbol.for("context_utilization")]={get value(){return It}};let J={initialData:void 0,initialError:void 0},gt=z`SELECT
    da.agent_code,
    COUNT(DISTINCT faic.agent_instance_tk) as sessions,
    SUM(faic.total_token_input_count + faic.total_token_output_count) as direct_tokens,
    SUM(faic.total_token_cache_read_count) as cache_read_tokens,
    SUM(faic.total_token_cache_create_count) as cache_create_tokens,
    ROUND(100.0 * SUM(faic.total_token_cache_read_count) /
        NULLIF(SUM(faic.total_token_input_count + faic.total_token_output_count + faic.total_token_cache_read_count), 0), 1) as cache_hit_rate
FROM herd.fact_agent_instance_cost faic
JOIN herd.dim_agent da
    ON faic.agent_sk = da.agent_sk
WHERE da.is_current = true
  AND NOT da.is_deleted
GROUP BY da.agent_code
ORDER BY cache_hit_rate DESC NULLS LAST`,kt=`SELECT
    da.agent_code,
    COUNT(DISTINCT faic.agent_instance_tk) as sessions,
    SUM(faic.total_token_input_count + faic.total_token_output_count) as direct_tokens,
    SUM(faic.total_token_cache_read_count) as cache_read_tokens,
    SUM(faic.total_token_cache_create_count) as cache_create_tokens,
    ROUND(100.0 * SUM(faic.total_token_cache_read_count) /
        NULLIF(SUM(faic.total_token_input_count + faic.total_token_output_count + faic.total_token_cache_read_count), 0), 1) as cache_hit_rate
FROM herd.fact_agent_instance_cost faic
JOIN herd.dim_agent da
    ON faic.agent_sk = da.agent_sk
WHERE da.is_current = true
  AND NOT da.is_deleted
GROUP BY da.agent_code
ORDER BY cache_hit_rate DESC NULLS LAST`;f.cache_hit_rate_data&&(f.cache_hit_rate_data instanceof Error?J.initialError=f.cache_hit_rate_data:J.initialData=f.cache_hit_rate_data,f.cache_hit_rate_columns&&(J.knownColumns=f.cache_hit_rate_columns));let _t,fe=!1;const ht=bt.createReactive({callback:D=>{n(3,_t=D)},execFn:_},{id:"cache_hit_rate",...J});ht(kt,{noResolve:gt,...J}),globalThis[Symbol.for("cache_hit_rate")]={get value(){return _t}};let tt={initialData:void 0,initialError:void 0},j=z`SELECT
    CASE
        WHEN faiw.instance_duration_minutes < 5 THEN '< 5 min'
        WHEN faiw.instance_duration_minutes < 15 THEN '5-15 min'
        WHEN faiw.instance_duration_minutes < 30 THEN '15-30 min'
        WHEN faiw.instance_duration_minutes < 60 THEN '30-60 min'
        ELSE '60+ min'
    END as duration_bucket,
    COUNT(*) as session_count,
    ROUND(AVG(faiw.lifecycle_event_count + faiw.ticket_activity_count + faiw.pr_activity_count), 1) as avg_activity
FROM herd.fact_agent_instance_work faiw
WHERE faiw.instance_duration_minutes IS NOT NULL
GROUP BY duration_bucket
ORDER BY
    CASE duration_bucket
        WHEN '< 5 min' THEN 1
        WHEN '5-15 min' THEN 2
        WHEN '15-30 min' THEN 3
        WHEN '30-60 min' THEN 4
        ELSE 5
    END`,Nt=`SELECT
    CASE
        WHEN faiw.instance_duration_minutes < 5 THEN '< 5 min'
        WHEN faiw.instance_duration_minutes < 15 THEN '5-15 min'
        WHEN faiw.instance_duration_minutes < 30 THEN '15-30 min'
        WHEN faiw.instance_duration_minutes < 60 THEN '30-60 min'
        ELSE '60+ min'
    END as duration_bucket,
    COUNT(*) as session_count,
    ROUND(AVG(faiw.lifecycle_event_count + faiw.ticket_activity_count + faiw.pr_activity_count), 1) as avg_activity
FROM herd.fact_agent_instance_work faiw
WHERE faiw.instance_duration_minutes IS NOT NULL
GROUP BY duration_bucket
ORDER BY
    CASE duration_bucket
        WHEN '< 5 min' THEN 1
        WHEN '5-15 min' THEN 2
        WHEN '15-30 min' THEN 3
        WHEN '30-60 min' THEN 4
        ELSE 5
    END`;f.duration_distribution_data&&(f.duration_distribution_data instanceof Error?tt.initialError=f.duration_distribution_data:tt.initialData=f.duration_distribution_data,f.duration_distribution_columns&&(tt.knownColumns=f.duration_distribution_columns));let st,Ft=!1;const Ot=bt.createReactive({callback:D=>{n(4,st=D)},execFn:_},{id:"duration_distribution",...tt});Ot(Nt,{noResolve:j,...tt}),globalThis[Symbol.for("duration_distribution")]={get value(){return st}};let ct={initialData:void 0,initialError:void 0},x=z`SELECT
    da.agent_code,
    COUNT(DISTINCT faiw.agent_instance_tk) as sessions,
    SUM(faiw.lifecycle_event_count + faiw.ticket_activity_count + faiw.pr_activity_count) as total_activities,
    SUM(faic.total_token_cost_usd) as total_cost,
    CASE
        WHEN SUM(faiw.lifecycle_event_count + faiw.ticket_activity_count + faiw.pr_activity_count) > 0
        THEN SUM(faic.total_token_cost_usd) / SUM(faiw.lifecycle_event_count + faiw.ticket_activity_count + faiw.pr_activity_count)
        ELSE 0
    END as cost_per_activity
FROM herd.fact_agent_instance_work faiw
JOIN herd.dim_agent da
    ON faiw.agent_sk = da.agent_sk
LEFT JOIN herd.fact_agent_instance_cost faic
    ON faiw.agent_instance_tk = faic.agent_instance_tk
WHERE da.is_current = true
  AND NOT da.is_deleted
GROUP BY da.agent_code
HAVING SUM(faiw.lifecycle_event_count + faiw.ticket_activity_count + faiw.pr_activity_count) > 0
ORDER BY cost_per_activity ASC`,Vt=`SELECT
    da.agent_code,
    COUNT(DISTINCT faiw.agent_instance_tk) as sessions,
    SUM(faiw.lifecycle_event_count + faiw.ticket_activity_count + faiw.pr_activity_count) as total_activities,
    SUM(faic.total_token_cost_usd) as total_cost,
    CASE
        WHEN SUM(faiw.lifecycle_event_count + faiw.ticket_activity_count + faiw.pr_activity_count) > 0
        THEN SUM(faic.total_token_cost_usd) / SUM(faiw.lifecycle_event_count + faiw.ticket_activity_count + faiw.pr_activity_count)
        ELSE 0
    END as cost_per_activity
FROM herd.fact_agent_instance_work faiw
JOIN herd.dim_agent da
    ON faiw.agent_sk = da.agent_sk
LEFT JOIN herd.fact_agent_instance_cost faic
    ON faiw.agent_instance_tk = faic.agent_instance_tk
WHERE da.is_current = true
  AND NOT da.is_deleted
GROUP BY da.agent_code
HAVING SUM(faiw.lifecycle_event_count + faiw.ticket_activity_count + faiw.pr_activity_count) > 0
ORDER BY cost_per_activity ASC`;f.token_efficiency_data&&(f.token_efficiency_data instanceof Error?ct.initialError=f.token_efficiency_data:ct.initialData=f.token_efficiency_data,f.token_efficiency_columns&&(ct.knownColumns=f.token_efficiency_columns));let Wt,ot=!1;const re=bt.createReactive({callback:D=>{n(5,Wt=D)},execFn:_},{id:"token_efficiency",...ct});re(Vt,{noResolve:x,...ct}),globalThis[Symbol.for("token_efficiency")]={get value(){return Wt}};let ft={initialData:void 0,initialError:void 0},et=z`WITH session_stats AS (
    SELECT
        faiw.agent_instance_tk,
        da.agent_code,
        faiw.instance_duration_minutes,
        faiw.lifecycle_event_count + faiw.ticket_activity_count + faiw.pr_activity_count as total_activity,
        faic.total_token_input_count + faic.total_token_output_count as total_tokens
    FROM herd.fact_agent_instance_work faiw
    JOIN herd.dim_agent da
        ON faiw.agent_sk = da.agent_sk
    LEFT JOIN herd.fact_agent_instance_cost faic
        ON faiw.agent_instance_tk = faic.agent_instance_tk
    WHERE da.is_current = true
      AND NOT da.is_deleted
      AND faiw.instance_duration_minutes IS NOT NULL
)
SELECT
    agent_code,
    COUNT(*) as low_efficiency_sessions,
    ROUND(AVG(instance_duration_minutes), 1) as avg_duration,
    ROUND(AVG(total_activity), 1) as avg_activity,
    ROUND(AVG(total_tokens), 0) as avg_tokens
FROM session_stats
WHERE instance_duration_minutes > 30
  AND total_activity < 5
GROUP BY agent_code
ORDER BY low_efficiency_sessions DESC`,it=`WITH session_stats AS (
    SELECT
        faiw.agent_instance_tk,
        da.agent_code,
        faiw.instance_duration_minutes,
        faiw.lifecycle_event_count + faiw.ticket_activity_count + faiw.pr_activity_count as total_activity,
        faic.total_token_input_count + faic.total_token_output_count as total_tokens
    FROM herd.fact_agent_instance_work faiw
    JOIN herd.dim_agent da
        ON faiw.agent_sk = da.agent_sk
    LEFT JOIN herd.fact_agent_instance_cost faic
        ON faiw.agent_instance_tk = faic.agent_instance_tk
    WHERE da.is_current = true
      AND NOT da.is_deleted
      AND faiw.instance_duration_minutes IS NOT NULL
)
SELECT
    agent_code,
    COUNT(*) as low_efficiency_sessions,
    ROUND(AVG(instance_duration_minutes), 1) as avg_duration,
    ROUND(AVG(total_activity), 1) as avg_activity,
    ROUND(AVG(total_tokens), 0) as avg_tokens
FROM session_stats
WHERE instance_duration_minutes > 30
  AND total_activity < 5
GROUP BY agent_code
ORDER BY low_efficiency_sessions DESC`;f.compaction_opportunities_data&&(f.compaction_opportunities_data instanceof Error?ft.initialError=f.compaction_opportunities_data:ft.initialData=f.compaction_opportunities_data,f.compaction_opportunities_columns&&(ft.knownColumns=f.compaction_opportunities_columns));let Bt,rt=!1;const Yt=bt.createReactive({callback:D=>{n(6,Bt=D)},execFn:_},{id:"compaction_opportunities",...ft});Yt(it,{noResolve:et,...ft}),globalThis[Symbol.for("compaction_opportunities")]={get value(){return Bt}};let at={initialData:void 0,initialError:void 0},ut=z`SELECT
    'Lifecycle Events' as activity_type,
    SUM(faiw.lifecycle_event_count) as total_count,
    ROUND(AVG(faiw.lifecycle_event_count), 1) as avg_per_session
FROM herd.fact_agent_instance_work faiw
UNION ALL
SELECT
    'Ticket Activities' as activity_type,
    SUM(faiw.ticket_activity_count) as total_count,
    ROUND(AVG(faiw.ticket_activity_count), 1) as avg_per_session
FROM herd.fact_agent_instance_work faiw
UNION ALL
SELECT
    'PR Activities' as activity_type,
    SUM(faiw.pr_activity_count) as total_count,
    ROUND(AVG(faiw.pr_activity_count), 1) as avg_per_session
FROM herd.fact_agent_instance_work faiw
ORDER BY total_count DESC`,K=`SELECT
    'Lifecycle Events' as activity_type,
    SUM(faiw.lifecycle_event_count) as total_count,
    ROUND(AVG(faiw.lifecycle_event_count), 1) as avg_per_session
FROM herd.fact_agent_instance_work faiw
UNION ALL
SELECT
    'Ticket Activities' as activity_type,
    SUM(faiw.ticket_activity_count) as total_count,
    ROUND(AVG(faiw.ticket_activity_count), 1) as avg_per_session
FROM herd.fact_agent_instance_work faiw
UNION ALL
SELECT
    'PR Activities' as activity_type,
    SUM(faiw.pr_activity_count) as total_count,
    ROUND(AVG(faiw.pr_activity_count), 1) as avg_per_session
FROM herd.fact_agent_instance_work faiw
ORDER BY total_count DESC`;f.activity_type_distribution_data&&(f.activity_type_distribution_data instanceof Error?at.initialError=f.activity_type_distribution_data:at.initialData=f.activity_type_distribution_data,f.activity_type_distribution_columns&&(at.knownColumns=f.activity_type_distribution_columns));let ue,qt=!1;const lt=bt.createReactive({callback:D=>{n(7,ue=D)},execFn:_},{id:"activity_type_distribution",...at});lt(K,{noResolve:ut,...at}),globalThis[Symbol.for("activity_type_distribution")]={get value(){return ue}};let Et={initialData:void 0,initialError:void 0},dt=z`SELECT
    dd.date_actual as date,
    COUNT(DISTINCT faiw.agent_instance_tk) as sessions,
    ROUND(AVG(faiw.lifecycle_event_count + faiw.ticket_activity_count + faiw.pr_activity_count), 1) as avg_activity,
    ROUND(AVG(faiw.instance_duration_minutes), 1) as avg_duration,
    ROUND(AVG(faiw.lifecycle_event_count + faiw.ticket_activity_count + faiw.pr_activity_count) /
        NULLIF(AVG(faiw.instance_duration_minutes), 0) * 60, 2) as activities_per_hour
FROM herd.dim_date dd
LEFT JOIN herd.fact_agent_instance_work faiw
    ON CAST(strftime(faiw.agent_instance_started_at, '%Y%m%d') AS INTEGER) = dd.date_sk
WHERE dd.date_actual >= CURRENT_DATE - INTERVAL '30 days'
  AND dd.date_actual <= CURRENT_DATE
GROUP BY dd.date_actual
ORDER BY dd.date_actual`,mt=`SELECT
    dd.date_actual as date,
    COUNT(DISTINCT faiw.agent_instance_tk) as sessions,
    ROUND(AVG(faiw.lifecycle_event_count + faiw.ticket_activity_count + faiw.pr_activity_count), 1) as avg_activity,
    ROUND(AVG(faiw.instance_duration_minutes), 1) as avg_duration,
    ROUND(AVG(faiw.lifecycle_event_count + faiw.ticket_activity_count + faiw.pr_activity_count) /
        NULLIF(AVG(faiw.instance_duration_minutes), 0) * 60, 2) as activities_per_hour
FROM herd.dim_date dd
LEFT JOIN herd.fact_agent_instance_work faiw
    ON CAST(strftime(faiw.agent_instance_started_at, '%Y%m%d') AS INTEGER) = dd.date_sk
WHERE dd.date_actual >= CURRENT_DATE - INTERVAL '30 days'
  AND dd.date_actual <= CURRENT_DATE
GROUP BY dd.date_actual
ORDER BY dd.date_actual`;f.efficiency_trend_data&&(f.efficiency_trend_data instanceof Error?Et.initialError=f.efficiency_trend_data:Et.initialData=f.efficiency_trend_data,f.efficiency_trend_columns&&(Et.knownColumns=f.efficiency_trend_columns));let vt,Pt=!1;const pt=bt.createReactive({callback:D=>{n(8,vt=D)},execFn:_},{id:"efficiency_trend",...Et});return pt(mt,{noResolve:dt,...Et}),globalThis[Symbol.for("efficiency_trend")]={get value(){return vt}},d.$$set=D=>{"data"in D&&n(9,u=D.data)},d.$$.update=()=>{d.$$.dirty[0]&512&&n(10,{data:f={},customFormattingSettings:r,__db:T}=u,f),d.$$.dirty[0]&1024&&Pi.set(Object.keys(f).length>0),d.$$.dirty[1]&65536&&e.params,d.$$.dirty[0]&30720&&(o||!wt?o||($(U,{noResolve:o,...E}),n(14,wt=!0)):$(U,{noResolve:o})),d.$$.dirty[0]&491520&&(b||!nt?b||(se(X,{noResolve:b,...H}),n(18,nt=!0)):se(X,{noResolve:b})),d.$$.dirty[0]&7864320&&($t||!Tt?$t||(Gt(Z,{noResolve:$t,...Q}),n(22,Tt=!0)):Gt(Z,{noResolve:$t})),d.$$.dirty[0]&125829120&&(gt||!fe?gt||(ht(kt,{noResolve:gt,...J}),n(26,fe=!0)):ht(kt,{noResolve:gt})),d.$$.dirty[0]&2013265920&&(j||!Ft?j||(Ot(Nt,{noResolve:j,...tt}),n(30,Ft=!0)):Ot(Nt,{noResolve:j})),d.$$.dirty[1]&15&&(x||!ot?x||(re(Vt,{noResolve:x,...ct}),n(34,ot=!0)):re(Vt,{noResolve:x})),d.$$.dirty[1]&240&&(et||!rt?et||(Yt(it,{noResolve:et,...ft}),n(38,rt=!0)):Yt(it,{noResolve:et})),d.$$.dirty[1]&3840&&(ut||!qt?ut||(lt(K,{noResolve:ut,...at}),n(42,qt=!0)):lt(K,{noResolve:ut})),d.$$.dirty[1]&61440&&(dt||!Pt?dt||(pt(mt,{noResolve:dt,...Et}),n(46,Pt=!0)):pt(mt,{noResolve:dt}))},n(12,o=z`SELECT
    COUNT(DISTINCT faiw.agent_instance_tk) as total_sessions,
    ROUND(AVG(faiw.instance_duration_minutes), 1) as avg_session_minutes,
    SUM(faiw.lifecycle_event_count) as total_lifecycle_events,
    SUM(faiw.ticket_activity_count) as total_ticket_activities,
    SUM(faiw.pr_activity_count) as total_pr_activities,
    ROUND(AVG(faiw.lifecycle_event_count), 1) as avg_lifecycle_per_session,
    ROUND(AVG(faiw.ticket_activity_count), 1) as avg_ticket_activity_per_session
FROM herd.fact_agent_instance_work faiw`),n(13,U=`SELECT
    COUNT(DISTINCT faiw.agent_instance_tk) as total_sessions,
    ROUND(AVG(faiw.instance_duration_minutes), 1) as avg_session_minutes,
    SUM(faiw.lifecycle_event_count) as total_lifecycle_events,
    SUM(faiw.ticket_activity_count) as total_ticket_activities,
    SUM(faiw.pr_activity_count) as total_pr_activities,
    ROUND(AVG(faiw.lifecycle_event_count), 1) as avg_lifecycle_per_session,
    ROUND(AVG(faiw.ticket_activity_count), 1) as avg_ticket_activity_per_session
FROM herd.fact_agent_instance_work faiw`),n(16,b=z`SELECT
    da.agent_code,
    da.agent_role,
    COUNT(DISTINCT faiw.agent_instance_tk) as sessions,
    ROUND(AVG(faiw.instance_duration_minutes), 1) as avg_duration,
    ROUND(AVG(faiw.lifecycle_event_count), 1) as avg_lifecycle_events,
    ROUND(AVG(faiw.ticket_activity_count), 1) as avg_ticket_activities,
    ROUND(AVG(faiw.pr_activity_count), 1) as avg_pr_activities,
    ROUND(AVG(faiw.lifecycle_event_count + faiw.ticket_activity_count + faiw.pr_activity_count), 1) as avg_total_activity
FROM herd.fact_agent_instance_work faiw
JOIN herd.dim_agent da
    ON faiw.agent_sk = da.agent_sk
WHERE da.is_current = true
  AND NOT da.is_deleted
GROUP BY da.agent_code, da.agent_role
ORDER BY avg_total_activity DESC`),n(17,X=`SELECT
    da.agent_code,
    da.agent_role,
    COUNT(DISTINCT faiw.agent_instance_tk) as sessions,
    ROUND(AVG(faiw.instance_duration_minutes), 1) as avg_duration,
    ROUND(AVG(faiw.lifecycle_event_count), 1) as avg_lifecycle_events,
    ROUND(AVG(faiw.ticket_activity_count), 1) as avg_ticket_activities,
    ROUND(AVG(faiw.pr_activity_count), 1) as avg_pr_activities,
    ROUND(AVG(faiw.lifecycle_event_count + faiw.ticket_activity_count + faiw.pr_activity_count), 1) as avg_total_activity
FROM herd.fact_agent_instance_work faiw
JOIN herd.dim_agent da
    ON faiw.agent_sk = da.agent_sk
WHERE da.is_current = true
  AND NOT da.is_deleted
GROUP BY da.agent_code, da.agent_role
ORDER BY avg_total_activity DESC`),n(20,$t=z`SELECT
    da.agent_code,
    dm.model_code,
    dm.model_context_window,
    COUNT(DISTINCT faic.agent_instance_tk) as sessions,
    ROUND(AVG(faic.total_token_input_count + faic.total_token_output_count), 0) as avg_tokens_per_session,
    ROUND(100.0 * AVG(faic.total_token_input_count + faic.total_token_output_count) / dm.model_context_window, 1) as context_utilization_pct
FROM herd.fact_agent_instance_cost faic
JOIN herd.dim_agent da
    ON faic.agent_sk = da.agent_sk
JOIN herd.dim_model dm
    ON faic.model_sk = dm.model_sk
WHERE da.is_current = true
  AND NOT da.is_deleted
GROUP BY da.agent_code, dm.model_code, dm.model_context_window
ORDER BY context_utilization_pct DESC`),n(21,Z=`SELECT
    da.agent_code,
    dm.model_code,
    dm.model_context_window,
    COUNT(DISTINCT faic.agent_instance_tk) as sessions,
    ROUND(AVG(faic.total_token_input_count + faic.total_token_output_count), 0) as avg_tokens_per_session,
    ROUND(100.0 * AVG(faic.total_token_input_count + faic.total_token_output_count) / dm.model_context_window, 1) as context_utilization_pct
FROM herd.fact_agent_instance_cost faic
JOIN herd.dim_agent da
    ON faic.agent_sk = da.agent_sk
JOIN herd.dim_model dm
    ON faic.model_sk = dm.model_sk
WHERE da.is_current = true
  AND NOT da.is_deleted
GROUP BY da.agent_code, dm.model_code, dm.model_context_window
ORDER BY context_utilization_pct DESC`),n(24,gt=z`SELECT
    da.agent_code,
    COUNT(DISTINCT faic.agent_instance_tk) as sessions,
    SUM(faic.total_token_input_count + faic.total_token_output_count) as direct_tokens,
    SUM(faic.total_token_cache_read_count) as cache_read_tokens,
    SUM(faic.total_token_cache_create_count) as cache_create_tokens,
    ROUND(100.0 * SUM(faic.total_token_cache_read_count) /
        NULLIF(SUM(faic.total_token_input_count + faic.total_token_output_count + faic.total_token_cache_read_count), 0), 1) as cache_hit_rate
FROM herd.fact_agent_instance_cost faic
JOIN herd.dim_agent da
    ON faic.agent_sk = da.agent_sk
WHERE da.is_current = true
  AND NOT da.is_deleted
GROUP BY da.agent_code
ORDER BY cache_hit_rate DESC NULLS LAST`),n(25,kt=`SELECT
    da.agent_code,
    COUNT(DISTINCT faic.agent_instance_tk) as sessions,
    SUM(faic.total_token_input_count + faic.total_token_output_count) as direct_tokens,
    SUM(faic.total_token_cache_read_count) as cache_read_tokens,
    SUM(faic.total_token_cache_create_count) as cache_create_tokens,
    ROUND(100.0 * SUM(faic.total_token_cache_read_count) /
        NULLIF(SUM(faic.total_token_input_count + faic.total_token_output_count + faic.total_token_cache_read_count), 0), 1) as cache_hit_rate
FROM herd.fact_agent_instance_cost faic
JOIN herd.dim_agent da
    ON faic.agent_sk = da.agent_sk
WHERE da.is_current = true
  AND NOT da.is_deleted
GROUP BY da.agent_code
ORDER BY cache_hit_rate DESC NULLS LAST`),n(28,j=z`SELECT
    CASE
        WHEN faiw.instance_duration_minutes < 5 THEN '< 5 min'
        WHEN faiw.instance_duration_minutes < 15 THEN '5-15 min'
        WHEN faiw.instance_duration_minutes < 30 THEN '15-30 min'
        WHEN faiw.instance_duration_minutes < 60 THEN '30-60 min'
        ELSE '60+ min'
    END as duration_bucket,
    COUNT(*) as session_count,
    ROUND(AVG(faiw.lifecycle_event_count + faiw.ticket_activity_count + faiw.pr_activity_count), 1) as avg_activity
FROM herd.fact_agent_instance_work faiw
WHERE faiw.instance_duration_minutes IS NOT NULL
GROUP BY duration_bucket
ORDER BY
    CASE duration_bucket
        WHEN '< 5 min' THEN 1
        WHEN '5-15 min' THEN 2
        WHEN '15-30 min' THEN 3
        WHEN '30-60 min' THEN 4
        ELSE 5
    END`),n(29,Nt=`SELECT
    CASE
        WHEN faiw.instance_duration_minutes < 5 THEN '< 5 min'
        WHEN faiw.instance_duration_minutes < 15 THEN '5-15 min'
        WHEN faiw.instance_duration_minutes < 30 THEN '15-30 min'
        WHEN faiw.instance_duration_minutes < 60 THEN '30-60 min'
        ELSE '60+ min'
    END as duration_bucket,
    COUNT(*) as session_count,
    ROUND(AVG(faiw.lifecycle_event_count + faiw.ticket_activity_count + faiw.pr_activity_count), 1) as avg_activity
FROM herd.fact_agent_instance_work faiw
WHERE faiw.instance_duration_minutes IS NOT NULL
GROUP BY duration_bucket
ORDER BY
    CASE duration_bucket
        WHEN '< 5 min' THEN 1
        WHEN '5-15 min' THEN 2
        WHEN '15-30 min' THEN 3
        WHEN '30-60 min' THEN 4
        ELSE 5
    END`),n(32,x=z`SELECT
    da.agent_code,
    COUNT(DISTINCT faiw.agent_instance_tk) as sessions,
    SUM(faiw.lifecycle_event_count + faiw.ticket_activity_count + faiw.pr_activity_count) as total_activities,
    SUM(faic.total_token_cost_usd) as total_cost,
    CASE
        WHEN SUM(faiw.lifecycle_event_count + faiw.ticket_activity_count + faiw.pr_activity_count) > 0
        THEN SUM(faic.total_token_cost_usd) / SUM(faiw.lifecycle_event_count + faiw.ticket_activity_count + faiw.pr_activity_count)
        ELSE 0
    END as cost_per_activity
FROM herd.fact_agent_instance_work faiw
JOIN herd.dim_agent da
    ON faiw.agent_sk = da.agent_sk
LEFT JOIN herd.fact_agent_instance_cost faic
    ON faiw.agent_instance_tk = faic.agent_instance_tk
WHERE da.is_current = true
  AND NOT da.is_deleted
GROUP BY da.agent_code
HAVING SUM(faiw.lifecycle_event_count + faiw.ticket_activity_count + faiw.pr_activity_count) > 0
ORDER BY cost_per_activity ASC`),n(33,Vt=`SELECT
    da.agent_code,
    COUNT(DISTINCT faiw.agent_instance_tk) as sessions,
    SUM(faiw.lifecycle_event_count + faiw.ticket_activity_count + faiw.pr_activity_count) as total_activities,
    SUM(faic.total_token_cost_usd) as total_cost,
    CASE
        WHEN SUM(faiw.lifecycle_event_count + faiw.ticket_activity_count + faiw.pr_activity_count) > 0
        THEN SUM(faic.total_token_cost_usd) / SUM(faiw.lifecycle_event_count + faiw.ticket_activity_count + faiw.pr_activity_count)
        ELSE 0
    END as cost_per_activity
FROM herd.fact_agent_instance_work faiw
JOIN herd.dim_agent da
    ON faiw.agent_sk = da.agent_sk
LEFT JOIN herd.fact_agent_instance_cost faic
    ON faiw.agent_instance_tk = faic.agent_instance_tk
WHERE da.is_current = true
  AND NOT da.is_deleted
GROUP BY da.agent_code
HAVING SUM(faiw.lifecycle_event_count + faiw.ticket_activity_count + faiw.pr_activity_count) > 0
ORDER BY cost_per_activity ASC`),n(36,et=z`WITH session_stats AS (
    SELECT
        faiw.agent_instance_tk,
        da.agent_code,
        faiw.instance_duration_minutes,
        faiw.lifecycle_event_count + faiw.ticket_activity_count + faiw.pr_activity_count as total_activity,
        faic.total_token_input_count + faic.total_token_output_count as total_tokens
    FROM herd.fact_agent_instance_work faiw
    JOIN herd.dim_agent da
        ON faiw.agent_sk = da.agent_sk
    LEFT JOIN herd.fact_agent_instance_cost faic
        ON faiw.agent_instance_tk = faic.agent_instance_tk
    WHERE da.is_current = true
      AND NOT da.is_deleted
      AND faiw.instance_duration_minutes IS NOT NULL
)
SELECT
    agent_code,
    COUNT(*) as low_efficiency_sessions,
    ROUND(AVG(instance_duration_minutes), 1) as avg_duration,
    ROUND(AVG(total_activity), 1) as avg_activity,
    ROUND(AVG(total_tokens), 0) as avg_tokens
FROM session_stats
WHERE instance_duration_minutes > 30
  AND total_activity < 5
GROUP BY agent_code
ORDER BY low_efficiency_sessions DESC`),n(37,it=`WITH session_stats AS (
    SELECT
        faiw.agent_instance_tk,
        da.agent_code,
        faiw.instance_duration_minutes,
        faiw.lifecycle_event_count + faiw.ticket_activity_count + faiw.pr_activity_count as total_activity,
        faic.total_token_input_count + faic.total_token_output_count as total_tokens
    FROM herd.fact_agent_instance_work faiw
    JOIN herd.dim_agent da
        ON faiw.agent_sk = da.agent_sk
    LEFT JOIN herd.fact_agent_instance_cost faic
        ON faiw.agent_instance_tk = faic.agent_instance_tk
    WHERE da.is_current = true
      AND NOT da.is_deleted
      AND faiw.instance_duration_minutes IS NOT NULL
)
SELECT
    agent_code,
    COUNT(*) as low_efficiency_sessions,
    ROUND(AVG(instance_duration_minutes), 1) as avg_duration,
    ROUND(AVG(total_activity), 1) as avg_activity,
    ROUND(AVG(total_tokens), 0) as avg_tokens
FROM session_stats
WHERE instance_duration_minutes > 30
  AND total_activity < 5
GROUP BY agent_code
ORDER BY low_efficiency_sessions DESC`),n(40,ut=z`SELECT
    'Lifecycle Events' as activity_type,
    SUM(faiw.lifecycle_event_count) as total_count,
    ROUND(AVG(faiw.lifecycle_event_count), 1) as avg_per_session
FROM herd.fact_agent_instance_work faiw
UNION ALL
SELECT
    'Ticket Activities' as activity_type,
    SUM(faiw.ticket_activity_count) as total_count,
    ROUND(AVG(faiw.ticket_activity_count), 1) as avg_per_session
FROM herd.fact_agent_instance_work faiw
UNION ALL
SELECT
    'PR Activities' as activity_type,
    SUM(faiw.pr_activity_count) as total_count,
    ROUND(AVG(faiw.pr_activity_count), 1) as avg_per_session
FROM herd.fact_agent_instance_work faiw
ORDER BY total_count DESC`),n(41,K=`SELECT
    'Lifecycle Events' as activity_type,
    SUM(faiw.lifecycle_event_count) as total_count,
    ROUND(AVG(faiw.lifecycle_event_count), 1) as avg_per_session
FROM herd.fact_agent_instance_work faiw
UNION ALL
SELECT
    'Ticket Activities' as activity_type,
    SUM(faiw.ticket_activity_count) as total_count,
    ROUND(AVG(faiw.ticket_activity_count), 1) as avg_per_session
FROM herd.fact_agent_instance_work faiw
UNION ALL
SELECT
    'PR Activities' as activity_type,
    SUM(faiw.pr_activity_count) as total_count,
    ROUND(AVG(faiw.pr_activity_count), 1) as avg_per_session
FROM herd.fact_agent_instance_work faiw
ORDER BY total_count DESC`),n(44,dt=z`SELECT
    dd.date_actual as date,
    COUNT(DISTINCT faiw.agent_instance_tk) as sessions,
    ROUND(AVG(faiw.lifecycle_event_count + faiw.ticket_activity_count + faiw.pr_activity_count), 1) as avg_activity,
    ROUND(AVG(faiw.instance_duration_minutes), 1) as avg_duration,
    ROUND(AVG(faiw.lifecycle_event_count + faiw.ticket_activity_count + faiw.pr_activity_count) /
        NULLIF(AVG(faiw.instance_duration_minutes), 0) * 60, 2) as activities_per_hour
FROM herd.dim_date dd
LEFT JOIN herd.fact_agent_instance_work faiw
    ON CAST(strftime(faiw.agent_instance_started_at, '%Y%m%d') AS INTEGER) = dd.date_sk
WHERE dd.date_actual >= CURRENT_DATE - INTERVAL '30 days'
  AND dd.date_actual <= CURRENT_DATE
GROUP BY dd.date_actual
ORDER BY dd.date_actual`),n(45,mt=`SELECT
    dd.date_actual as date,
    COUNT(DISTINCT faiw.agent_instance_tk) as sessions,
    ROUND(AVG(faiw.lifecycle_event_count + faiw.ticket_activity_count + faiw.pr_activity_count), 1) as avg_activity,
    ROUND(AVG(faiw.instance_duration_minutes), 1) as avg_duration,
    ROUND(AVG(faiw.lifecycle_event_count + faiw.ticket_activity_count + faiw.pr_activity_count) /
        NULLIF(AVG(faiw.instance_duration_minutes), 0) * 60, 2) as activities_per_hour
FROM herd.dim_date dd
LEFT JOIN herd.fact_agent_instance_work faiw
    ON CAST(strftime(faiw.agent_instance_started_at, '%Y%m%d') AS INTEGER) = dd.date_sk
WHERE dd.date_actual >= CURRENT_DATE - INTERVAL '30 days'
  AND dd.date_actual <= CURRENT_DATE
GROUP BY dd.date_actual
ORDER BY dd.date_actual`),[M,_e,It,_t,st,Wt,Bt,ue,vt,u,f,E,o,U,wt,H,b,X,nt,Q,$t,Z,Tt,J,gt,kt,fe,tt,j,Nt,Ft,ct,x,Vt,ot,ft,et,it,rt,at,ut,K,qt,Et,dt,mt,Pt,e]}class $a extends Wi{constructor(a){super(),Bi(this,a,ca,sa,bi,{data:9},null,[-1,-1,-1])}}export{$a as component};
