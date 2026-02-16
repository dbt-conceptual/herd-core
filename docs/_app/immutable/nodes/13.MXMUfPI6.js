import{s as Zt,d as a,i as _,a as je,b as $,c as u,h as xt,e as D,f as Wt,g as J,j as er,k as v,l as U,m as Bt,n as tr,o as rr,p as ir,q as sr,r as Ye}from"../chunks/scheduler.FpD6N7RQ.js";import{S as nr,i as ar,d as N,t as E,a as d,c as Fe,m as g,b as p,e as T,g as We}from"../chunks/index.CJT9_JY8.js";import{D as Nt,e as _r,s as fr,Q as Be,p as or,C as H,r as Yt,a as lr}from"../chunks/VennDiagram.svelte_svelte_type_style_lang.BSmdDldM.js";import{w as dr}from"../chunks/entry.BmF8qIvy.js";import{h as x,p as ur}from"../chunks/setTrackProxy.DjIbdjlZ.js";import{p as vr}from"../chunks/stores.01ULU8yI.js";import{B as Gt,Q as Ge}from"../chunks/BarChart.DscctSSP.js";import{B as gt,L as cr}from"../chunks/LineChart.CrQpACj2.js";import{H as ht}from"../chunks/Histogram.8EkrvsIx.js";function mr(o){return{c(){this.h()},l(s){this.h()},h(){document.title="Evidence"},m:Ye,p:Ye,d:Ye}}function Pt(o){let s,n;return s=new Ge({props:{queryID:"qa_overview",queryResult:o[0]}}),{c(){T(s.$$.fragment)},l(t){p(s.$$.fragment,t)},m(t,m){g(s,t,m),n=!0},p(t,m){const l={};m[0]&1&&(l.queryResult=t[0]),s.$set(l)},i(t){n||(d(s.$$.fragment,t),n=!0)},o(t){E(s.$$.fragment,t),n=!1},d(t){N(s,t)}}}function Qt(o){let s,n;return s=new Ge({props:{queryID:"first_pass_trend",queryResult:o[1]}}),{c(){T(s.$$.fragment)},l(t){p(s.$$.fragment,t)},m(t,m){g(s,t,m),n=!0},p(t,m){const l={};m[0]&2&&(l.queryResult=t[1]),s.$set(l)},i(t){n||(d(s.$$.fragment,t),n=!0)},o(t){E(s.$$.fragment,t),n=!1},d(t){N(s,t)}}}function Jt(o){let s,n;return s=new Ge({props:{queryID:"findings_by_category",queryResult:o[2]}}),{c(){T(s.$$.fragment)},l(t){p(s.$$.fragment,t)},m(t,m){g(s,t,m),n=!0},p(t,m){const l={};m[0]&4&&(l.queryResult=t[2]),s.$set(l)},i(t){n||(d(s.$$.fragment,t),n=!0)},o(t){E(s.$$.fragment,t),n=!1},d(t){N(s,t)}}}function Er(o){let s,n,t,m,l,f;return s=new H({props:{id:"finding_category",title:"Category"}}),t=new H({props:{id:"review_count",title:"Reviews",fmt:"num0"}}),l=new H({props:{id:"total_findings",title:"Findings",fmt:"num0"}}),{c(){T(s.$$.fragment),n=v(),T(t.$$.fragment),m=v(),T(l.$$.fragment)},l(w){p(s.$$.fragment,w),n=u(w),p(t.$$.fragment,w),m=u(w),p(l.$$.fragment,w)},m(w,R){g(s,w,R),_(w,n,R),g(t,w,R),_(w,m,R),g(l,w,R),f=!0},p:Ye,i(w){f||(d(s.$$.fragment,w),d(t.$$.fragment,w),d(l.$$.fragment,w),f=!0)},o(w){E(s.$$.fragment,w),E(t.$$.fragment,w),E(l.$$.fragment,w),f=!1},d(w){w&&(a(n),a(m)),N(s,w),N(t,w),N(l,w)}}}function Vt(o){let s,n;return s=new Ge({props:{queryID:"findings_by_agent",queryResult:o[3]}}),{c(){T(s.$$.fragment)},l(t){p(s.$$.fragment,t)},m(t,m){g(s,t,m),n=!0},p(t,m){const l={};m[0]&8&&(l.queryResult=t[3]),s.$set(l)},i(t){n||(d(s.$$.fragment,t),n=!0)},o(t){E(s.$$.fragment,t),n=!1},d(t){N(s,t)}}}function wr(o){let s,n,t,m,l,f,w,R,c,O,S,C,y,L;return s=new H({props:{id:"agent_code",title:"Agent"}}),t=new H({props:{id:"agent_role",title:"Role"}}),l=new H({props:{id:"reviews",title:"Reviews",fmt:"num0"}}),w=new H({props:{id:"total_findings",title:"Total",fmt:"num0"}}),c=new H({props:{id:"blocking_findings",title:"Blocking",fmt:"num0"}}),S=new H({props:{id:"advisory_findings",title:"Advisory",fmt:"num0"}}),y=new H({props:{id:"avg_findings_per_review",title:"Avg/Review",fmt:"num1"}}),{c(){T(s.$$.fragment),n=v(),T(t.$$.fragment),m=v(),T(l.$$.fragment),f=v(),T(w.$$.fragment),R=v(),T(c.$$.fragment),O=v(),T(S.$$.fragment),C=v(),T(y.$$.fragment)},l(i){p(s.$$.fragment,i),n=u(i),p(t.$$.fragment,i),m=u(i),p(l.$$.fragment,i),f=u(i),p(w.$$.fragment,i),R=u(i),p(c.$$.fragment,i),O=u(i),p(S.$$.fragment,i),C=u(i),p(y.$$.fragment,i)},m(i,q){g(s,i,q),_(i,n,q),g(t,i,q),_(i,m,q),g(l,i,q),_(i,f,q),g(w,i,q),_(i,R,q),g(c,i,q),_(i,O,q),g(S,i,q),_(i,C,q),g(y,i,q),L=!0},p:Ye,i(i){L||(d(s.$$.fragment,i),d(t.$$.fragment,i),d(l.$$.fragment,i),d(w.$$.fragment,i),d(c.$$.fragment,i),d(S.$$.fragment,i),d(y.$$.fragment,i),L=!0)},o(i){E(s.$$.fragment,i),E(t.$$.fragment,i),E(l.$$.fragment,i),E(w.$$.fragment,i),E(c.$$.fragment,i),E(S.$$.fragment,i),E(y.$$.fragment,i),L=!1},d(i){i&&(a(n),a(m),a(f),a(R),a(O),a(C)),N(s,i),N(t,i),N(l,i),N(w,i),N(c,i),N(S,i),N(y,i)}}}function Xt(o){let s,n;return s=new Ge({props:{queryID:"review_rounds",queryResult:o[4]}}),{c(){T(s.$$.fragment)},l(t){p(s.$$.fragment,t)},m(t,m){g(s,t,m),n=!0},p(t,m){const l={};m[0]&16&&(l.queryResult=t[4]),s.$set(l)},i(t){n||(d(s.$$.fragment,t),n=!0)},o(t){E(s.$$.fragment,t),n=!1},d(t){N(s,t)}}}function Nr(o){let s,n,t,m,l,f,w,R;return s=new H({props:{id:"review_round",title:"Round",fmt:"num0"}}),t=new H({props:{id:"review_count",title:"Reviews",fmt:"num0"}}),l=new H({props:{id:"approved_count",title:"Approved",fmt:"num0"}}),w=new H({props:{id:"approval_rate",title:"Approval %",fmt:"num1"}}),{c(){T(s.$$.fragment),n=v(),T(t.$$.fragment),m=v(),T(l.$$.fragment),f=v(),T(w.$$.fragment)},l(c){p(s.$$.fragment,c),n=u(c),p(t.$$.fragment,c),m=u(c),p(l.$$.fragment,c),f=u(c),p(w.$$.fragment,c)},m(c,O){g(s,c,O),_(c,n,O),g(t,c,O),_(c,m,O),g(l,c,O),_(c,f,O),g(w,c,O),R=!0},p:Ye,i(c){R||(d(s.$$.fragment,c),d(t.$$.fragment,c),d(l.$$.fragment,c),d(w.$$.fragment,c),R=!0)},o(c){E(s.$$.fragment,c),E(t.$$.fragment,c),E(l.$$.fragment,c),E(w.$$.fragment,c),R=!1},d(c){c&&(a(n),a(m),a(f)),N(s,c),N(t,c),N(l,c),N(w,c)}}}function jt(o){let s,n;return s=new Ge({props:{queryID:"rework_cost",queryResult:o[5]}}),{c(){T(s.$$.fragment)},l(t){p(s.$$.fragment,t)},m(t,m){g(s,t,m),n=!0},p(t,m){const l={};m[0]&32&&(l.queryResult=t[5]),s.$set(l)},i(t){n||(d(s.$$.fragment,t),n=!0)},o(t){E(s.$$.fragment,t),n=!1},d(t){N(s,t)}}}function gr(o){let s,n,t,m,l,f,w,R,c,O,S,C,y,L;return s=new H({props:{id:"ticket_code",title:"Ticket"}}),t=new H({props:{id:"ticket_title",title:"Title"}}),l=new H({props:{id:"review_attempts",title:"Attempts",fmt:"num0"}}),w=new H({props:{id:"max_rounds",title:"Rounds",fmt:"num0"}}),c=new H({props:{id:"total_cost",title:"Total Cost",fmt:"usd2"}}),S=new H({props:{id:"rework_cost",title:"Rework Cost",fmt:"usd2"}}),y=new H({props:{id:"rework_cost_pct",title:"Rework %",fmt:"num1"}}),{c(){T(s.$$.fragment),n=v(),T(t.$$.fragment),m=v(),T(l.$$.fragment),f=v(),T(w.$$.fragment),R=v(),T(c.$$.fragment),O=v(),T(S.$$.fragment),C=v(),T(y.$$.fragment)},l(i){p(s.$$.fragment,i),n=u(i),p(t.$$.fragment,i),m=u(i),p(l.$$.fragment,i),f=u(i),p(w.$$.fragment,i),R=u(i),p(c.$$.fragment,i),O=u(i),p(S.$$.fragment,i),C=u(i),p(y.$$.fragment,i)},m(i,q){g(s,i,q),_(i,n,q),g(t,i,q),_(i,m,q),g(l,i,q),_(i,f,q),g(w,i,q),_(i,R,q),g(c,i,q),_(i,O,q),g(S,i,q),_(i,C,q),g(y,i,q),L=!0},p:Ye,i(i){L||(d(s.$$.fragment,i),d(t.$$.fragment,i),d(l.$$.fragment,i),d(w.$$.fragment,i),d(c.$$.fragment,i),d(S.$$.fragment,i),d(y.$$.fragment,i),L=!0)},o(i){E(s.$$.fragment,i),E(t.$$.fragment,i),E(l.$$.fragment,i),E(w.$$.fragment,i),E(c.$$.fragment,i),E(S.$$.fragment,i),E(y.$$.fragment,i),L=!1},d(i){i&&(a(n),a(m),a(f),a(R),a(O),a(C)),N(s,i),N(t,i),N(l,i),N(w,i),N(c,i),N(S,i),N(y,i)}}}function Kt(o){let s,n;return s=new Ge({props:{queryID:"review_duration",queryResult:o[6]}}),{c(){T(s.$$.fragment)},l(t){p(s.$$.fragment,t)},m(t,m){g(s,t,m),n=!0},p(t,m){const l={};m[0]&64&&(l.queryResult=t[6]),s.$set(l)},i(t){n||(d(s.$$.fragment,t),n=!0)},o(t){E(s.$$.fragment,t),n=!1},d(t){N(s,t)}}}function pr(o){let s,n,t,m,l,f,w='<a href="#qa-effectiveness">QA Effectiveness</a>',R,c,O='<p class="markdown">&quot;The critic&#39;s eye sharpens the artist&#39;s hand.&quot; — Track review quality, finding patterns, and QA trends.</p>',S,C,y='<a href="#qa-overview">QA Overview</a>',L,i,q='<strong class="markdown">Question</strong>: How effective is our QA process at catching issues early?',Ne,V,b,X,Ae,te,Me,h,ne,j,ge,ue,pe,G,_e='<a href="#first-pass-rate-trend-last-30-days">First-Pass Rate Trend (Last 30 Days)</a>',fe,re,he='<strong class="markdown">Question</strong>: Is code quality improving over time?',Te,K,P,oe,ve,$e,ee,le='<a href="#findings-by-category">Findings by Category</a>',ie,z,Pe='<strong class="markdown">Question</strong>: What types of issues are most common in reviews?',qe,de,Q,se,Z,ke,ce,Se,k,et='<a href="#findings-by-agent-reviewed-work">Findings by Agent (Reviewed Work)</a>',tt,Re,kt='<strong class="markdown">Question</strong>: Which agents generate the most QA findings?',rt,Qe,Ce,it,ye,st,Ke,nt,me,St='<a href="#review-rounds-distribution">Review Rounds Distribution</a>',at,De,Rt='<strong class="markdown">Question</strong>: How many review rounds does typical work require?',_t,Je,Ue,ft,Oe,ot,ze,lt,Ee,Ct='<a href="#rework-cost-analysis">Rework Cost Analysis</a>',dt,be,yt='<strong class="markdown">Question</strong>: What is the cost of rework due to failed QA?',ut,Ve,He,vt,Ze,ct,we,Dt='<a href="#review-duration-distribution">Review Duration Distribution</a>',mt,Le,Ut='<strong class="markdown">Question</strong>: How long do reviews typically take?',Et,Xe,Ie,wt;function zt(e,r){return mr}let xe=zt()(o),I=o[0]&&Pt(o);X=new gt({props:{data:o[0],value:"total_reviews",title:"Total Reviews"}}),te=new gt({props:{data:o[0],value:"first_pass_rate",title:"First Pass Rate",fmt:"pct1"}}),h=new gt({props:{data:o[0],value:"total_findings",title:"Total Findings"}}),j=new gt({props:{data:o[0],value:"avg_review_minutes",title:"Avg Review Time",fmt:"num1"}});let A=o[1]&&Qt(o);P=new cr({props:{data:o[1],x:"date",y:"first_pass_rate",y2:"reviews",yAxisTitle:"First-Pass Rate (%)",y2AxisTitle:"Review Count",title:"First-Pass QA Rate Trend",series:[{name:"First-Pass Rate",color:"#10B981"},{name:"Reviews",color:"#3B82F6"}]}});let M=o[2]&&Jt(o);Q=new Gt({props:{data:o[2],x:"finding_category",y:"review_count",title:"Reviews by Finding Category",xAxisTitle:"Category",yAxisTitle:"Review Count",series:[{name:"Reviews",color:"#3B82F6"}]}}),Z=new Nt({props:{data:o[2],$$slots:{default:[Er]},$$scope:{ctx:o}}});let F=o[3]&&Vt(o);Ce=new Gt({props:{data:o[3],x:"agent_code",y:"blocking_findings",y2:"advisory_findings",title:"Findings by Agent",xAxisTitle:"Agent",yAxisTitle:"Finding Count",series:[{name:"Blocking",color:"#EF4444"},{name:"Advisory",color:"#F59E0B"}]}}),ye=new Nt({props:{data:o[3],$$slots:{default:[wr]},$$scope:{ctx:o}}});let W=o[4]&&Xt(o);Ue=new ht({props:{data:o[4],x:"review_round",y:"review_count",title:"Reviews by Round",xAxisTitle:"Review Round",yAxisTitle:"Count"}}),Oe=new Nt({props:{data:o[4],$$slots:{default:[Nr]},$$scope:{ctx:o}}});let B=o[5]&&jt(o);He=new Nt({props:{data:o[5],search:"true",$$slots:{default:[gr]},$$scope:{ctx:o}}});let Y=o[6]&&Kt(o);return Ie=new ht({props:{data:o[6],x:"duration",y:"count",title:"Review Duration Distribution",xAxisTitle:"Duration (minutes)",yAxisTitle:"Count"}}),{c(){s=v(),xe.c(),n=U("meta"),t=U("meta"),m=Wt(),l=v(),f=U("h1"),f.innerHTML=w,R=v(),c=U("blockquote"),c.innerHTML=O,S=v(),C=U("h2"),C.innerHTML=y,L=v(),i=U("p"),i.innerHTML=q,Ne=v(),I&&I.c(),V=v(),b=U("div"),T(X.$$.fragment),Ae=v(),T(te.$$.fragment),Me=v(),T(h.$$.fragment),ne=v(),T(j.$$.fragment),ge=v(),ue=U("hr"),pe=v(),G=U("h2"),G.innerHTML=_e,fe=v(),re=U("p"),re.innerHTML=he,Te=v(),A&&A.c(),K=v(),T(P.$$.fragment),oe=v(),ve=U("hr"),$e=v(),ee=U("h2"),ee.innerHTML=le,ie=v(),z=U("p"),z.innerHTML=Pe,qe=v(),M&&M.c(),de=v(),T(Q.$$.fragment),se=v(),T(Z.$$.fragment),ke=v(),ce=U("hr"),Se=v(),k=U("h2"),k.innerHTML=et,tt=v(),Re=U("p"),Re.innerHTML=kt,rt=v(),F&&F.c(),Qe=v(),T(Ce.$$.fragment),it=v(),T(ye.$$.fragment),st=v(),Ke=U("hr"),nt=v(),me=U("h2"),me.innerHTML=St,at=v(),De=U("p"),De.innerHTML=Rt,_t=v(),W&&W.c(),Je=v(),T(Ue.$$.fragment),ft=v(),T(Oe.$$.fragment),ot=v(),ze=U("hr"),lt=v(),Ee=U("h2"),Ee.innerHTML=Ct,dt=v(),be=U("p"),be.innerHTML=yt,ut=v(),B&&B.c(),Ve=v(),T(He.$$.fragment),vt=v(),Ze=U("hr"),ct=v(),we=U("h2"),we.innerHTML=Dt,mt=v(),Le=U("p"),Le.innerHTML=Ut,Et=v(),Y&&Y.c(),Xe=v(),T(Ie.$$.fragment),this.h()},l(e){s=u(e);const r=xt("svelte-2igo1p",document.head);xe.l(r),n=D(r,"META",{name:!0,content:!0}),t=D(r,"META",{name:!0,content:!0}),m=Wt(),r.forEach(a),l=u(e),f=D(e,"H1",{class:!0,id:!0,"data-svelte-h":!0}),J(f)!=="svelte-1m0noik"&&(f.innerHTML=w),R=u(e),c=D(e,"BLOCKQUOTE",{class:!0,"data-svelte-h":!0}),J(c)!=="svelte-86n60j"&&(c.innerHTML=O),S=u(e),C=D(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),J(C)!=="svelte-10figld"&&(C.innerHTML=y),L=u(e),i=D(e,"P",{class:!0,"data-svelte-h":!0}),J(i)!=="svelte-uaovy9"&&(i.innerHTML=q),Ne=u(e),I&&I.l(e),V=u(e),b=D(e,"DIV",{class:!0});var ae=er(b);p(X.$$.fragment,ae),Ae=u(ae),p(te.$$.fragment,ae),Me=u(ae),p(h.$$.fragment,ae),ne=u(ae),p(j.$$.fragment,ae),ae.forEach(a),ge=u(e),ue=D(e,"HR",{class:!0}),pe=u(e),G=D(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),J(G)!=="svelte-4w5gky"&&(G.innerHTML=_e),fe=u(e),re=D(e,"P",{class:!0,"data-svelte-h":!0}),J(re)!=="svelte-14vltc"&&(re.innerHTML=he),Te=u(e),A&&A.l(e),K=u(e),p(P.$$.fragment,e),oe=u(e),ve=D(e,"HR",{class:!0}),$e=u(e),ee=D(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),J(ee)!=="svelte-lerd4b"&&(ee.innerHTML=le),ie=u(e),z=D(e,"P",{class:!0,"data-svelte-h":!0}),J(z)!=="svelte-8pwwus"&&(z.innerHTML=Pe),qe=u(e),M&&M.l(e),de=u(e),p(Q.$$.fragment,e),se=u(e),p(Z.$$.fragment,e),ke=u(e),ce=D(e,"HR",{class:!0}),Se=u(e),k=D(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),J(k)!=="svelte-8idkkb"&&(k.innerHTML=et),tt=u(e),Re=D(e,"P",{class:!0,"data-svelte-h":!0}),J(Re)!=="svelte-6yuflo"&&(Re.innerHTML=kt),rt=u(e),F&&F.l(e),Qe=u(e),p(Ce.$$.fragment,e),it=u(e),p(ye.$$.fragment,e),st=u(e),Ke=D(e,"HR",{class:!0}),nt=u(e),me=D(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),J(me)!=="svelte-385me3"&&(me.innerHTML=St),at=u(e),De=D(e,"P",{class:!0,"data-svelte-h":!0}),J(De)!=="svelte-jv8437"&&(De.innerHTML=Rt),_t=u(e),W&&W.l(e),Je=u(e),p(Ue.$$.fragment,e),ft=u(e),p(Oe.$$.fragment,e),ot=u(e),ze=D(e,"HR",{class:!0}),lt=u(e),Ee=D(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),J(Ee)!=="svelte-1ooy3e7"&&(Ee.innerHTML=Ct),dt=u(e),be=D(e,"P",{class:!0,"data-svelte-h":!0}),J(be)!=="svelte-uegoqb"&&(be.innerHTML=yt),ut=u(e),B&&B.l(e),Ve=u(e),p(He.$$.fragment,e),vt=u(e),Ze=D(e,"HR",{class:!0}),ct=u(e),we=D(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),J(we)!=="svelte-cdz38y"&&(we.innerHTML=Dt),mt=u(e),Le=D(e,"P",{class:!0,"data-svelte-h":!0}),J(Le)!=="svelte-s4usuc"&&(Le.innerHTML=Ut),Et=u(e),Y&&Y.l(e),Xe=u(e),p(Ie.$$.fragment,e),this.h()},h(){$(n,"name","twitter:card"),$(n,"content","summary_large_image"),$(t,"name","twitter:site"),$(t,"content","@evidence_dev"),$(f,"class","markdown"),$(f,"id","qa-effectiveness"),$(c,"class","markdown"),$(C,"class","markdown"),$(C,"id","qa-overview"),$(i,"class","markdown"),$(b,"class","grid grid-cols-2 md:grid-cols-4 gap-4 mb-6"),$(ue,"class","markdown"),$(G,"class","markdown"),$(G,"id","first-pass-rate-trend-last-30-days"),$(re,"class","markdown"),$(ve,"class","markdown"),$(ee,"class","markdown"),$(ee,"id","findings-by-category"),$(z,"class","markdown"),$(ce,"class","markdown"),$(k,"class","markdown"),$(k,"id","findings-by-agent-reviewed-work"),$(Re,"class","markdown"),$(Ke,"class","markdown"),$(me,"class","markdown"),$(me,"id","review-rounds-distribution"),$(De,"class","markdown"),$(ze,"class","markdown"),$(Ee,"class","markdown"),$(Ee,"id","rework-cost-analysis"),$(be,"class","markdown"),$(Ze,"class","markdown"),$(we,"class","markdown"),$(we,"id","review-duration-distribution"),$(Le,"class","markdown")},m(e,r){_(e,s,r),xe.m(document.head,null),je(document.head,n),je(document.head,t),je(document.head,m),_(e,l,r),_(e,f,r),_(e,R,r),_(e,c,r),_(e,S,r),_(e,C,r),_(e,L,r),_(e,i,r),_(e,Ne,r),I&&I.m(e,r),_(e,V,r),_(e,b,r),g(X,b,null),je(b,Ae),g(te,b,null),je(b,Me),g(h,b,null),je(b,ne),g(j,b,null),_(e,ge,r),_(e,ue,r),_(e,pe,r),_(e,G,r),_(e,fe,r),_(e,re,r),_(e,Te,r),A&&A.m(e,r),_(e,K,r),g(P,e,r),_(e,oe,r),_(e,ve,r),_(e,$e,r),_(e,ee,r),_(e,ie,r),_(e,z,r),_(e,qe,r),M&&M.m(e,r),_(e,de,r),g(Q,e,r),_(e,se,r),g(Z,e,r),_(e,ke,r),_(e,ce,r),_(e,Se,r),_(e,k,r),_(e,tt,r),_(e,Re,r),_(e,rt,r),F&&F.m(e,r),_(e,Qe,r),g(Ce,e,r),_(e,it,r),g(ye,e,r),_(e,st,r),_(e,Ke,r),_(e,nt,r),_(e,me,r),_(e,at,r),_(e,De,r),_(e,_t,r),W&&W.m(e,r),_(e,Je,r),g(Ue,e,r),_(e,ft,r),g(Oe,e,r),_(e,ot,r),_(e,ze,r),_(e,lt,r),_(e,Ee,r),_(e,dt,r),_(e,be,r),_(e,ut,r),B&&B.m(e,r),_(e,Ve,r),g(He,e,r),_(e,vt,r),_(e,Ze,r),_(e,ct,r),_(e,we,r),_(e,mt,r),_(e,Le,r),_(e,Et,r),Y&&Y.m(e,r),_(e,Xe,r),g(Ie,e,r),wt=!0},p(e,r){xe.p(e,r),e[0]?I?(I.p(e,r),r[0]&1&&d(I,1)):(I=Pt(e),I.c(),d(I,1),I.m(V.parentNode,V)):I&&(We(),E(I,1,1,()=>{I=null}),Fe());const ae={};r[0]&1&&(ae.data=e[0]),X.$set(ae);const Ot={};r[0]&1&&(Ot.data=e[0]),te.$set(Ot);const bt={};r[0]&1&&(bt.data=e[0]),h.$set(bt);const Ht={};r[0]&1&&(Ht.data=e[0]),j.$set(Ht),e[1]?A?(A.p(e,r),r[0]&2&&d(A,1)):(A=Qt(e),A.c(),d(A,1),A.m(K.parentNode,K)):A&&(We(),E(A,1,1,()=>{A=null}),Fe());const Lt={};r[0]&2&&(Lt.data=e[1]),P.$set(Lt),e[2]?M?(M.p(e,r),r[0]&4&&d(M,1)):(M=Jt(e),M.c(),d(M,1),M.m(de.parentNode,de)):M&&(We(),E(M,1,1,()=>{M=null}),Fe());const It={};r[0]&4&&(It.data=e[2]),Q.$set(It);const pt={};r[0]&4&&(pt.data=e[2]),r[1]&8388608&&(pt.$$scope={dirty:r,ctx:e}),Z.$set(pt),e[3]?F?(F.p(e,r),r[0]&8&&d(F,1)):(F=Vt(e),F.c(),d(F,1),F.m(Qe.parentNode,Qe)):F&&(We(),E(F,1,1,()=>{F=null}),Fe());const At={};r[0]&8&&(At.data=e[3]),Ce.$set(At);const Tt={};r[0]&8&&(Tt.data=e[3]),r[1]&8388608&&(Tt.$$scope={dirty:r,ctx:e}),ye.$set(Tt),e[4]?W?(W.p(e,r),r[0]&16&&d(W,1)):(W=Xt(e),W.c(),d(W,1),W.m(Je.parentNode,Je)):W&&(We(),E(W,1,1,()=>{W=null}),Fe());const Mt={};r[0]&16&&(Mt.data=e[4]),Ue.$set(Mt);const $t={};r[0]&16&&($t.data=e[4]),r[1]&8388608&&($t.$$scope={dirty:r,ctx:e}),Oe.$set($t),e[5]?B?(B.p(e,r),r[0]&32&&d(B,1)):(B=jt(e),B.c(),d(B,1),B.m(Ve.parentNode,Ve)):B&&(We(),E(B,1,1,()=>{B=null}),Fe());const qt={};r[0]&32&&(qt.data=e[5]),r[1]&8388608&&(qt.$$scope={dirty:r,ctx:e}),He.$set(qt),e[6]?Y?(Y.p(e,r),r[0]&64&&d(Y,1)):(Y=Kt(e),Y.c(),d(Y,1),Y.m(Xe.parentNode,Xe)):Y&&(We(),E(Y,1,1,()=>{Y=null}),Fe());const Ft={};r[0]&64&&(Ft.data=e[6]),Ie.$set(Ft)},i(e){wt||(d(I),d(X.$$.fragment,e),d(te.$$.fragment,e),d(h.$$.fragment,e),d(j.$$.fragment,e),d(A),d(P.$$.fragment,e),d(M),d(Q.$$.fragment,e),d(Z.$$.fragment,e),d(F),d(Ce.$$.fragment,e),d(ye.$$.fragment,e),d(W),d(Ue.$$.fragment,e),d(Oe.$$.fragment,e),d(B),d(He.$$.fragment,e),d(Y),d(Ie.$$.fragment,e),wt=!0)},o(e){E(I),E(X.$$.fragment,e),E(te.$$.fragment,e),E(h.$$.fragment,e),E(j.$$.fragment,e),E(A),E(P.$$.fragment,e),E(M),E(Q.$$.fragment,e),E(Z.$$.fragment,e),E(F),E(Ce.$$.fragment,e),E(ye.$$.fragment,e),E(W),E(Ue.$$.fragment,e),E(Oe.$$.fragment,e),E(B),E(He.$$.fragment,e),E(Y),E(Ie.$$.fragment,e),wt=!1},d(e){e&&(a(s),a(l),a(f),a(R),a(c),a(S),a(C),a(L),a(i),a(Ne),a(V),a(b),a(ge),a(ue),a(pe),a(G),a(fe),a(re),a(Te),a(K),a(oe),a(ve),a($e),a(ee),a(ie),a(z),a(qe),a(de),a(se),a(ke),a(ce),a(Se),a(k),a(tt),a(Re),a(rt),a(Qe),a(it),a(st),a(Ke),a(nt),a(me),a(at),a(De),a(_t),a(Je),a(ft),a(ot),a(ze),a(lt),a(Ee),a(dt),a(be),a(ut),a(Ve),a(vt),a(Ze),a(ct),a(we),a(mt),a(Le),a(Et),a(Xe)),xe.d(e),a(n),a(t),a(m),I&&I.d(e),N(X),N(te),N(h),N(j),A&&A.d(e),N(P,e),M&&M.d(e),N(Q,e),N(Z,e),F&&F.d(e),N(Ce,e),N(ye,e),W&&W.d(e),N(Ue,e),N(Oe,e),B&&B.d(e),N(He,e),Y&&Y.d(e),N(Ie,e)}}}function Tr(o,s,n){let t,m;Bt(o,vr,k=>n(37,t=k)),Bt(o,Yt,k=>n(43,m=k));let{data:l}=s,{data:f={},customFormattingSettings:w,__db:R,inputs:c}=l;tr(Yt,m="58a6d54b373a41b03560ec3f6444aa30",m);let O=_r(dr(c));rr(O.subscribe(k=>c=k)),ir(lr,{getCustomFormats:()=>w.customFormats||[]});const S=(k,et)=>ur(R.query,k,{query_name:et});fr(S),t.params,sr(()=>!0);let C={initialData:void 0,initialError:void 0},y=x`SELECT
    COUNT(DISTINCT frq.review_submission_tk) as total_reviews,
    SUM(CASE WHEN frq.review_round = 1 THEN 1 ELSE 0 END) as first_round_reviews,
    SUM(CASE WHEN frq.review_round = 1 AND frq.review_verdict = 'approved' THEN 1 ELSE 0 END) as first_pass_approvals,
    ROUND(100.0 * SUM(CASE WHEN frq.review_round = 1 AND frq.review_verdict = 'approved' THEN 1 ELSE 0 END) / NULLIF(SUM(CASE WHEN frq.review_round = 1 THEN 1 ELSE 0 END), 0), 1) as first_pass_rate,
    SUM(frq.finding_count) as total_findings,
    SUM(frq.blocking_finding_count) as blocking_findings,
    SUM(frq.advisory_finding_count) as advisory_findings,
    ROUND(AVG(frq.review_duration_minutes), 1) as avg_review_minutes
FROM herd.fact_review_quality frq`,L=`SELECT
    COUNT(DISTINCT frq.review_submission_tk) as total_reviews,
    SUM(CASE WHEN frq.review_round = 1 THEN 1 ELSE 0 END) as first_round_reviews,
    SUM(CASE WHEN frq.review_round = 1 AND frq.review_verdict = 'approved' THEN 1 ELSE 0 END) as first_pass_approvals,
    ROUND(100.0 * SUM(CASE WHEN frq.review_round = 1 AND frq.review_verdict = 'approved' THEN 1 ELSE 0 END) / NULLIF(SUM(CASE WHEN frq.review_round = 1 THEN 1 ELSE 0 END), 0), 1) as first_pass_rate,
    SUM(frq.finding_count) as total_findings,
    SUM(frq.blocking_finding_count) as blocking_findings,
    SUM(frq.advisory_finding_count) as advisory_findings,
    ROUND(AVG(frq.review_duration_minutes), 1) as avg_review_minutes
FROM herd.fact_review_quality frq`;f.qa_overview_data&&(f.qa_overview_data instanceof Error?C.initialError=f.qa_overview_data:C.initialData=f.qa_overview_data,f.qa_overview_columns&&(C.knownColumns=f.qa_overview_columns));let i,q=!1;const Ne=Be.createReactive({callback:k=>{n(0,i=k)},execFn:S},{id:"qa_overview",...C});Ne(L,{noResolve:y,...C}),globalThis[Symbol.for("qa_overview")]={get value(){return i}};let V={initialData:void 0,initialError:void 0},b=x`SELECT
    dd.date_actual as date,
    COUNT(DISTINCT frq.review_submission_tk) as reviews,
    SUM(CASE WHEN frq.review_round = 1 AND frq.review_verdict = 'approved' THEN 1 ELSE 0 END) as approvals,
    ROUND(100.0 * SUM(CASE WHEN frq.review_round = 1 AND frq.review_verdict = 'approved' THEN 1 ELSE 0 END) / NULLIF(COUNT(DISTINCT frq.review_submission_tk), 0), 1) as first_pass_rate
FROM herd.dim_date dd
LEFT JOIN herd.fact_review_quality frq
    ON CAST(strftime(frq.review_completed_at, '%Y%m%d') AS INTEGER) = dd.date_sk
    AND frq.review_round = 1
WHERE dd.date_actual >= CURRENT_DATE - INTERVAL '30 days'
  AND dd.date_actual <= CURRENT_DATE
GROUP BY dd.date_actual
ORDER BY dd.date_actual`,X=`SELECT
    dd.date_actual as date,
    COUNT(DISTINCT frq.review_submission_tk) as reviews,
    SUM(CASE WHEN frq.review_round = 1 AND frq.review_verdict = 'approved' THEN 1 ELSE 0 END) as approvals,
    ROUND(100.0 * SUM(CASE WHEN frq.review_round = 1 AND frq.review_verdict = 'approved' THEN 1 ELSE 0 END) / NULLIF(COUNT(DISTINCT frq.review_submission_tk), 0), 1) as first_pass_rate
FROM herd.dim_date dd
LEFT JOIN herd.fact_review_quality frq
    ON CAST(strftime(frq.review_completed_at, '%Y%m%d') AS INTEGER) = dd.date_sk
    AND frq.review_round = 1
WHERE dd.date_actual >= CURRENT_DATE - INTERVAL '30 days'
  AND dd.date_actual <= CURRENT_DATE
GROUP BY dd.date_actual
ORDER BY dd.date_actual`;f.first_pass_trend_data&&(f.first_pass_trend_data instanceof Error?V.initialError=f.first_pass_trend_data:V.initialData=f.first_pass_trend_data,f.first_pass_trend_columns&&(V.knownColumns=f.first_pass_trend_columns));let Ae,te=!1;const Me=Be.createReactive({callback:k=>{n(1,Ae=k)},execFn:S},{id:"first_pass_trend",...V});Me(X,{noResolve:b,...V}),globalThis[Symbol.for("first_pass_trend")]={get value(){return Ae}};let h={initialData:void 0,initialError:void 0},ne=x`SELECT
    CASE
        WHEN frq.blocking_finding_count > 0 THEN 'Blocking'
        WHEN frq.advisory_finding_count > 0 THEN 'Advisory'
        ELSE 'Clean'
    END as finding_category,
    COUNT(DISTINCT frq.review_submission_tk) as review_count,
    SUM(frq.finding_count) as total_findings
FROM herd.fact_review_quality frq
GROUP BY finding_category
ORDER BY review_count DESC`,j=`SELECT
    CASE
        WHEN frq.blocking_finding_count > 0 THEN 'Blocking'
        WHEN frq.advisory_finding_count > 0 THEN 'Advisory'
        ELSE 'Clean'
    END as finding_category,
    COUNT(DISTINCT frq.review_submission_tk) as review_count,
    SUM(frq.finding_count) as total_findings
FROM herd.fact_review_quality frq
GROUP BY finding_category
ORDER BY review_count DESC`;f.findings_by_category_data&&(f.findings_by_category_data instanceof Error?h.initialError=f.findings_by_category_data:h.initialData=f.findings_by_category_data,f.findings_by_category_columns&&(h.knownColumns=f.findings_by_category_columns));let ge,ue=!1;const pe=Be.createReactive({callback:k=>{n(2,ge=k)},execFn:S},{id:"findings_by_category",...h});pe(j,{noResolve:ne,...h}),globalThis[Symbol.for("findings_by_category")]={get value(){return ge}};let G={initialData:void 0,initialError:void 0},_e=x`SELECT
    da.agent_code,
    da.agent_role,
    COUNT(DISTINCT frq.review_submission_tk) as reviews,
    SUM(frq.finding_count) as total_findings,
    SUM(frq.blocking_finding_count) as blocking_findings,
    SUM(frq.advisory_finding_count) as advisory_findings,
    ROUND(AVG(frq.finding_count), 1) as avg_findings_per_review
FROM herd.fact_review_quality frq
JOIN herd.dim_agent da
    ON frq.agent_sk = da.agent_sk
WHERE da.is_current = true
  AND NOT da.is_deleted
GROUP BY da.agent_code, da.agent_role
ORDER BY total_findings DESC`,fe=`SELECT
    da.agent_code,
    da.agent_role,
    COUNT(DISTINCT frq.review_submission_tk) as reviews,
    SUM(frq.finding_count) as total_findings,
    SUM(frq.blocking_finding_count) as blocking_findings,
    SUM(frq.advisory_finding_count) as advisory_findings,
    ROUND(AVG(frq.finding_count), 1) as avg_findings_per_review
FROM herd.fact_review_quality frq
JOIN herd.dim_agent da
    ON frq.agent_sk = da.agent_sk
WHERE da.is_current = true
  AND NOT da.is_deleted
GROUP BY da.agent_code, da.agent_role
ORDER BY total_findings DESC`;f.findings_by_agent_data&&(f.findings_by_agent_data instanceof Error?G.initialError=f.findings_by_agent_data:G.initialData=f.findings_by_agent_data,f.findings_by_agent_columns&&(G.knownColumns=f.findings_by_agent_columns));let re,he=!1;const Te=Be.createReactive({callback:k=>{n(3,re=k)},execFn:S},{id:"findings_by_agent",...G});Te(fe,{noResolve:_e,...G}),globalThis[Symbol.for("findings_by_agent")]={get value(){return re}};let K={initialData:void 0,initialError:void 0},P=x`SELECT
    frq.review_round,
    COUNT(DISTINCT frq.review_submission_tk) as review_count,
    SUM(CASE WHEN frq.review_verdict = 'approved' THEN 1 ELSE 0 END) as approved_count,
    ROUND(100.0 * SUM(CASE WHEN frq.review_verdict = 'approved' THEN 1 ELSE 0 END) / COUNT(DISTINCT frq.review_submission_tk), 1) as approval_rate
FROM herd.fact_review_quality frq
GROUP BY frq.review_round
ORDER BY frq.review_round`,oe=`SELECT
    frq.review_round,
    COUNT(DISTINCT frq.review_submission_tk) as review_count,
    SUM(CASE WHEN frq.review_verdict = 'approved' THEN 1 ELSE 0 END) as approved_count,
    ROUND(100.0 * SUM(CASE WHEN frq.review_verdict = 'approved' THEN 1 ELSE 0 END) / COUNT(DISTINCT frq.review_submission_tk), 1) as approval_rate
FROM herd.fact_review_quality frq
GROUP BY frq.review_round
ORDER BY frq.review_round`;f.review_rounds_data&&(f.review_rounds_data instanceof Error?K.initialError=f.review_rounds_data:K.initialData=f.review_rounds_data,f.review_rounds_columns&&(K.knownColumns=f.review_rounds_columns));let ve,$e=!1;const ee=Be.createReactive({callback:k=>{n(4,ve=k)},execFn:S},{id:"review_rounds",...K});ee(oe,{noResolve:P,...K}),globalThis[Symbol.for("review_rounds")]={get value(){return ve}};let le={initialData:void 0,initialError:void 0},ie=x`SELECT
    dt.ticket_code,
    dt.ticket_title,
    COUNT(DISTINCT frq.review_submission_tk) as review_attempts,
    MAX(frq.review_round) as max_rounds,
    SUM(faic.total_token_cost_usd) as total_cost,
    SUM(CASE WHEN frq.review_round > 1 THEN faic.total_token_cost_usd ELSE 0 END) as rework_cost,
    ROUND(100.0 * SUM(CASE WHEN frq.review_round > 1 THEN faic.total_token_cost_usd ELSE 0 END) / NULLIF(SUM(faic.total_token_cost_usd), 0), 1) as rework_cost_pct
FROM herd.dim_ticket dt
JOIN herd.fact_agent_instance_cost faic
    ON dt.ticket_sk = faic.ticket_sk
LEFT JOIN herd.fact_pr_delivery fpd
    ON dt.ticket_sk = fpd.ticket_sk
LEFT JOIN herd.fact_review_quality frq
    ON fpd.pull_request_sk = frq.pull_request_sk
WHERE dt.is_current = true
  AND NOT dt.is_deleted
  AND faic.total_token_cost_usd > 0
GROUP BY dt.ticket_code, dt.ticket_title
HAVING COUNT(DISTINCT frq.review_submission_tk) > 1
ORDER BY rework_cost DESC
LIMIT 20`,z=`SELECT
    dt.ticket_code,
    dt.ticket_title,
    COUNT(DISTINCT frq.review_submission_tk) as review_attempts,
    MAX(frq.review_round) as max_rounds,
    SUM(faic.total_token_cost_usd) as total_cost,
    SUM(CASE WHEN frq.review_round > 1 THEN faic.total_token_cost_usd ELSE 0 END) as rework_cost,
    ROUND(100.0 * SUM(CASE WHEN frq.review_round > 1 THEN faic.total_token_cost_usd ELSE 0 END) / NULLIF(SUM(faic.total_token_cost_usd), 0), 1) as rework_cost_pct
FROM herd.dim_ticket dt
JOIN herd.fact_agent_instance_cost faic
    ON dt.ticket_sk = faic.ticket_sk
LEFT JOIN herd.fact_pr_delivery fpd
    ON dt.ticket_sk = fpd.ticket_sk
LEFT JOIN herd.fact_review_quality frq
    ON fpd.pull_request_sk = frq.pull_request_sk
WHERE dt.is_current = true
  AND NOT dt.is_deleted
  AND faic.total_token_cost_usd > 0
GROUP BY dt.ticket_code, dt.ticket_title
HAVING COUNT(DISTINCT frq.review_submission_tk) > 1
ORDER BY rework_cost DESC
LIMIT 20`;f.rework_cost_data&&(f.rework_cost_data instanceof Error?le.initialError=f.rework_cost_data:le.initialData=f.rework_cost_data,f.rework_cost_columns&&(le.knownColumns=f.rework_cost_columns));let Pe,qe=!1;const de=Be.createReactive({callback:k=>{n(5,Pe=k)},execFn:S},{id:"rework_cost",...le});de(z,{noResolve:ie,...le}),globalThis[Symbol.for("rework_cost")]={get value(){return Pe}};let Q={initialData:void 0,initialError:void 0},se=x`SELECT
    frq.review_duration_minutes as duration,
    COUNT(*) as count
FROM herd.fact_review_quality frq
WHERE frq.review_duration_minutes IS NOT NULL`,Z=`SELECT
    frq.review_duration_minutes as duration,
    COUNT(*) as count
FROM herd.fact_review_quality frq
WHERE frq.review_duration_minutes IS NOT NULL`;f.review_duration_data&&(f.review_duration_data instanceof Error?Q.initialError=f.review_duration_data:Q.initialData=f.review_duration_data,f.review_duration_columns&&(Q.knownColumns=f.review_duration_columns));let ke,ce=!1;const Se=Be.createReactive({callback:k=>{n(6,ke=k)},execFn:S},{id:"review_duration",...Q});return Se(Z,{noResolve:se,...Q}),globalThis[Symbol.for("review_duration")]={get value(){return ke}},o.$$set=k=>{"data"in k&&n(7,l=k.data)},o.$$.update=()=>{o.$$.dirty[0]&128&&n(8,{data:f={},customFormattingSettings:w,__db:R}=l,f),o.$$.dirty[0]&256&&or.set(Object.keys(f).length>0),o.$$.dirty[1]&64&&t.params,o.$$.dirty[0]&7680&&(y||!q?y||(Ne(L,{noResolve:y,...C}),n(12,q=!0)):Ne(L,{noResolve:y})),o.$$.dirty[0]&122880&&(b||!te?b||(Me(X,{noResolve:b,...V}),n(16,te=!0)):Me(X,{noResolve:b})),o.$$.dirty[0]&1966080&&(ne||!ue?ne||(pe(j,{noResolve:ne,...h}),n(20,ue=!0)):pe(j,{noResolve:ne})),o.$$.dirty[0]&31457280&&(_e||!he?_e||(Te(fe,{noResolve:_e,...G}),n(24,he=!0)):Te(fe,{noResolve:_e})),o.$$.dirty[0]&503316480&&(P||!$e?P||(ee(oe,{noResolve:P,...K}),n(28,$e=!0)):ee(oe,{noResolve:P})),o.$$.dirty[0]&1610612736|o.$$.dirty[1]&3&&(ie||!qe?ie||(de(z,{noResolve:ie,...le}),n(32,qe=!0)):de(z,{noResolve:ie})),o.$$.dirty[1]&60&&(se||!ce?se||(Se(Z,{noResolve:se,...Q}),n(36,ce=!0)):Se(Z,{noResolve:se}))},n(10,y=x`SELECT
    COUNT(DISTINCT frq.review_submission_tk) as total_reviews,
    SUM(CASE WHEN frq.review_round = 1 THEN 1 ELSE 0 END) as first_round_reviews,
    SUM(CASE WHEN frq.review_round = 1 AND frq.review_verdict = 'approved' THEN 1 ELSE 0 END) as first_pass_approvals,
    ROUND(100.0 * SUM(CASE WHEN frq.review_round = 1 AND frq.review_verdict = 'approved' THEN 1 ELSE 0 END) / NULLIF(SUM(CASE WHEN frq.review_round = 1 THEN 1 ELSE 0 END), 0), 1) as first_pass_rate,
    SUM(frq.finding_count) as total_findings,
    SUM(frq.blocking_finding_count) as blocking_findings,
    SUM(frq.advisory_finding_count) as advisory_findings,
    ROUND(AVG(frq.review_duration_minutes), 1) as avg_review_minutes
FROM herd.fact_review_quality frq`),n(11,L=`SELECT
    COUNT(DISTINCT frq.review_submission_tk) as total_reviews,
    SUM(CASE WHEN frq.review_round = 1 THEN 1 ELSE 0 END) as first_round_reviews,
    SUM(CASE WHEN frq.review_round = 1 AND frq.review_verdict = 'approved' THEN 1 ELSE 0 END) as first_pass_approvals,
    ROUND(100.0 * SUM(CASE WHEN frq.review_round = 1 AND frq.review_verdict = 'approved' THEN 1 ELSE 0 END) / NULLIF(SUM(CASE WHEN frq.review_round = 1 THEN 1 ELSE 0 END), 0), 1) as first_pass_rate,
    SUM(frq.finding_count) as total_findings,
    SUM(frq.blocking_finding_count) as blocking_findings,
    SUM(frq.advisory_finding_count) as advisory_findings,
    ROUND(AVG(frq.review_duration_minutes), 1) as avg_review_minutes
FROM herd.fact_review_quality frq`),n(14,b=x`SELECT
    dd.date_actual as date,
    COUNT(DISTINCT frq.review_submission_tk) as reviews,
    SUM(CASE WHEN frq.review_round = 1 AND frq.review_verdict = 'approved' THEN 1 ELSE 0 END) as approvals,
    ROUND(100.0 * SUM(CASE WHEN frq.review_round = 1 AND frq.review_verdict = 'approved' THEN 1 ELSE 0 END) / NULLIF(COUNT(DISTINCT frq.review_submission_tk), 0), 1) as first_pass_rate
FROM herd.dim_date dd
LEFT JOIN herd.fact_review_quality frq
    ON CAST(strftime(frq.review_completed_at, '%Y%m%d') AS INTEGER) = dd.date_sk
    AND frq.review_round = 1
WHERE dd.date_actual >= CURRENT_DATE - INTERVAL '30 days'
  AND dd.date_actual <= CURRENT_DATE
GROUP BY dd.date_actual
ORDER BY dd.date_actual`),n(15,X=`SELECT
    dd.date_actual as date,
    COUNT(DISTINCT frq.review_submission_tk) as reviews,
    SUM(CASE WHEN frq.review_round = 1 AND frq.review_verdict = 'approved' THEN 1 ELSE 0 END) as approvals,
    ROUND(100.0 * SUM(CASE WHEN frq.review_round = 1 AND frq.review_verdict = 'approved' THEN 1 ELSE 0 END) / NULLIF(COUNT(DISTINCT frq.review_submission_tk), 0), 1) as first_pass_rate
FROM herd.dim_date dd
LEFT JOIN herd.fact_review_quality frq
    ON CAST(strftime(frq.review_completed_at, '%Y%m%d') AS INTEGER) = dd.date_sk
    AND frq.review_round = 1
WHERE dd.date_actual >= CURRENT_DATE - INTERVAL '30 days'
  AND dd.date_actual <= CURRENT_DATE
GROUP BY dd.date_actual
ORDER BY dd.date_actual`),n(18,ne=x`SELECT
    CASE
        WHEN frq.blocking_finding_count > 0 THEN 'Blocking'
        WHEN frq.advisory_finding_count > 0 THEN 'Advisory'
        ELSE 'Clean'
    END as finding_category,
    COUNT(DISTINCT frq.review_submission_tk) as review_count,
    SUM(frq.finding_count) as total_findings
FROM herd.fact_review_quality frq
GROUP BY finding_category
ORDER BY review_count DESC`),n(19,j=`SELECT
    CASE
        WHEN frq.blocking_finding_count > 0 THEN 'Blocking'
        WHEN frq.advisory_finding_count > 0 THEN 'Advisory'
        ELSE 'Clean'
    END as finding_category,
    COUNT(DISTINCT frq.review_submission_tk) as review_count,
    SUM(frq.finding_count) as total_findings
FROM herd.fact_review_quality frq
GROUP BY finding_category
ORDER BY review_count DESC`),n(22,_e=x`SELECT
    da.agent_code,
    da.agent_role,
    COUNT(DISTINCT frq.review_submission_tk) as reviews,
    SUM(frq.finding_count) as total_findings,
    SUM(frq.blocking_finding_count) as blocking_findings,
    SUM(frq.advisory_finding_count) as advisory_findings,
    ROUND(AVG(frq.finding_count), 1) as avg_findings_per_review
FROM herd.fact_review_quality frq
JOIN herd.dim_agent da
    ON frq.agent_sk = da.agent_sk
WHERE da.is_current = true
  AND NOT da.is_deleted
GROUP BY da.agent_code, da.agent_role
ORDER BY total_findings DESC`),n(23,fe=`SELECT
    da.agent_code,
    da.agent_role,
    COUNT(DISTINCT frq.review_submission_tk) as reviews,
    SUM(frq.finding_count) as total_findings,
    SUM(frq.blocking_finding_count) as blocking_findings,
    SUM(frq.advisory_finding_count) as advisory_findings,
    ROUND(AVG(frq.finding_count), 1) as avg_findings_per_review
FROM herd.fact_review_quality frq
JOIN herd.dim_agent da
    ON frq.agent_sk = da.agent_sk
WHERE da.is_current = true
  AND NOT da.is_deleted
GROUP BY da.agent_code, da.agent_role
ORDER BY total_findings DESC`),n(26,P=x`SELECT
    frq.review_round,
    COUNT(DISTINCT frq.review_submission_tk) as review_count,
    SUM(CASE WHEN frq.review_verdict = 'approved' THEN 1 ELSE 0 END) as approved_count,
    ROUND(100.0 * SUM(CASE WHEN frq.review_verdict = 'approved' THEN 1 ELSE 0 END) / COUNT(DISTINCT frq.review_submission_tk), 1) as approval_rate
FROM herd.fact_review_quality frq
GROUP BY frq.review_round
ORDER BY frq.review_round`),n(27,oe=`SELECT
    frq.review_round,
    COUNT(DISTINCT frq.review_submission_tk) as review_count,
    SUM(CASE WHEN frq.review_verdict = 'approved' THEN 1 ELSE 0 END) as approved_count,
    ROUND(100.0 * SUM(CASE WHEN frq.review_verdict = 'approved' THEN 1 ELSE 0 END) / COUNT(DISTINCT frq.review_submission_tk), 1) as approval_rate
FROM herd.fact_review_quality frq
GROUP BY frq.review_round
ORDER BY frq.review_round`),n(30,ie=x`SELECT
    dt.ticket_code,
    dt.ticket_title,
    COUNT(DISTINCT frq.review_submission_tk) as review_attempts,
    MAX(frq.review_round) as max_rounds,
    SUM(faic.total_token_cost_usd) as total_cost,
    SUM(CASE WHEN frq.review_round > 1 THEN faic.total_token_cost_usd ELSE 0 END) as rework_cost,
    ROUND(100.0 * SUM(CASE WHEN frq.review_round > 1 THEN faic.total_token_cost_usd ELSE 0 END) / NULLIF(SUM(faic.total_token_cost_usd), 0), 1) as rework_cost_pct
FROM herd.dim_ticket dt
JOIN herd.fact_agent_instance_cost faic
    ON dt.ticket_sk = faic.ticket_sk
LEFT JOIN herd.fact_pr_delivery fpd
    ON dt.ticket_sk = fpd.ticket_sk
LEFT JOIN herd.fact_review_quality frq
    ON fpd.pull_request_sk = frq.pull_request_sk
WHERE dt.is_current = true
  AND NOT dt.is_deleted
  AND faic.total_token_cost_usd > 0
GROUP BY dt.ticket_code, dt.ticket_title
HAVING COUNT(DISTINCT frq.review_submission_tk) > 1
ORDER BY rework_cost DESC
LIMIT 20`),n(31,z=`SELECT
    dt.ticket_code,
    dt.ticket_title,
    COUNT(DISTINCT frq.review_submission_tk) as review_attempts,
    MAX(frq.review_round) as max_rounds,
    SUM(faic.total_token_cost_usd) as total_cost,
    SUM(CASE WHEN frq.review_round > 1 THEN faic.total_token_cost_usd ELSE 0 END) as rework_cost,
    ROUND(100.0 * SUM(CASE WHEN frq.review_round > 1 THEN faic.total_token_cost_usd ELSE 0 END) / NULLIF(SUM(faic.total_token_cost_usd), 0), 1) as rework_cost_pct
FROM herd.dim_ticket dt
JOIN herd.fact_agent_instance_cost faic
    ON dt.ticket_sk = faic.ticket_sk
LEFT JOIN herd.fact_pr_delivery fpd
    ON dt.ticket_sk = fpd.ticket_sk
LEFT JOIN herd.fact_review_quality frq
    ON fpd.pull_request_sk = frq.pull_request_sk
WHERE dt.is_current = true
  AND NOT dt.is_deleted
  AND faic.total_token_cost_usd > 0
GROUP BY dt.ticket_code, dt.ticket_title
HAVING COUNT(DISTINCT frq.review_submission_tk) > 1
ORDER BY rework_cost DESC
LIMIT 20`),n(34,se=x`SELECT
    frq.review_duration_minutes as duration,
    COUNT(*) as count
FROM herd.fact_review_quality frq
WHERE frq.review_duration_minutes IS NOT NULL`),n(35,Z=`SELECT
    frq.review_duration_minutes as duration,
    COUNT(*) as count
FROM herd.fact_review_quality frq
WHERE frq.review_duration_minutes IS NOT NULL`),[i,Ae,ge,re,ve,Pe,ke,l,f,C,y,L,q,V,b,X,te,h,ne,j,ue,G,_e,fe,he,K,P,oe,$e,le,ie,z,qe,Q,se,Z,ce,t]}class br extends nr{constructor(s){super(),ar(this,s,Tr,pr,Zt,{data:7},null,[-1,-1])}}export{br as component};
