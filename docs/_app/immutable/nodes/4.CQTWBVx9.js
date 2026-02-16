import{s as wt,d,i as u,a as Ve,b as D,c as E,h as Lt,e as q,f as mt,g as fe,j as yt,k as p,l as W,m as Et,n as At,o as Ut,p as It,q as ht,r as xe}from"../chunks/scheduler.FpD6N7RQ.js";import{S as Mt,i as Ht,d as N,t as m,a as o,c as we,m as R,b as k,e as S,g as Le}from"../chunks/index.CJT9_JY8.js";import{D as pt,e as Ft,s as bt,Q as ye,p as qt,C as ne,r as gt,a as Wt}from"../chunks/VennDiagram.svelte_svelte_type_style_lang.BSmdDldM.js";import{w as Bt}from"../chunks/entry.BmF8qIvy.js";import{h as B,p as Yt}from"../chunks/setTrackProxy.DjIbdjlZ.js";import{p as Jt}from"../chunks/stores.01ULU8yI.js";import{B as Gt,Q as Ae}from"../chunks/BarChart.DscctSSP.js";import{B as Ze,L as Pt}from"../chunks/LineChart.CrQpACj2.js";function Vt(r){return{c(){this.h()},l(a){this.h()},h(){document.title="Evidence"},m:xe,p:xe,d:xe}}function Tt(r){let a,s;return a=new Ae({props:{queryID:"active_agents",queryResult:r[0]}}),{c(){S(a.$$.fragment)},l(t){k(a.$$.fragment,t)},m(t,c){R(a,t,c),s=!0},p(t,c){const f={};c[0]&1&&(f.queryResult=t[0]),a.$set(f)},i(t){s||(o(a.$$.fragment,t),s=!0)},o(t){m(a.$$.fragment,t),s=!1},d(t){N(a,t)}}}function Nt(r){let a,s;return a=new Ae({props:{queryID:"open_tickets",queryResult:r[1]}}),{c(){S(a.$$.fragment)},l(t){k(a.$$.fragment,t)},m(t,c){R(a,t,c),s=!0},p(t,c){const f={};c[0]&2&&(f.queryResult=t[1]),a.$set(f)},i(t){s||(o(a.$$.fragment,t),s=!0)},o(t){m(a.$$.fragment,t),s=!1},d(t){N(a,t)}}}function Rt(r){let a,s;return a=new Ae({props:{queryID:"prs_this_week",queryResult:r[2]}}),{c(){S(a.$$.fragment)},l(t){k(a.$$.fragment,t)},m(t,c){R(a,t,c),s=!0},p(t,c){const f={};c[0]&4&&(f.queryResult=t[2]),a.$set(f)},i(t){s||(o(a.$$.fragment,t),s=!0)},o(t){m(a.$$.fragment,t),s=!1},d(t){N(a,t)}}}function kt(r){let a,s;return a=new Ae({props:{queryID:"cost_this_week",queryResult:r[3]}}),{c(){S(a.$$.fragment)},l(t){k(a.$$.fragment,t)},m(t,c){R(a,t,c),s=!0},p(t,c){const f={};c[0]&8&&(f.queryResult=t[3]),a.$set(f)},i(t){s||(o(a.$$.fragment,t),s=!0)},o(t){m(a.$$.fragment,t),s=!1},d(t){N(a,t)}}}function St(r){let a,s;return a=new Ae({props:{queryID:"cost_per_line",queryResult:r[4]}}),{c(){S(a.$$.fragment)},l(t){k(a.$$.fragment,t)},m(t,c){R(a,t,c),s=!0},p(t,c){const f={};c[0]&16&&(f.queryResult=t[4]),a.$set(f)},i(t){s||(o(a.$$.fragment,t),s=!0)},o(t){m(a.$$.fragment,t),s=!1},d(t){N(a,t)}}}function Ct(r){let a,s;return a=new Ae({props:{queryID:"agent_work_summary",queryResult:r[5]}}),{c(){S(a.$$.fragment)},l(t){k(a.$$.fragment,t)},m(t,c){R(a,t,c),s=!0},p(t,c){const f={};c[0]&32&&(f.queryResult=t[5]),a.$set(f)},i(t){s||(o(a.$$.fragment,t),s=!0)},o(t){m(a.$$.fragment,t),s=!1},d(t){N(a,t)}}}function Qt(r){let a,s,t,c,f,n,v,Y,C,z,T,O;return a=new ne({props:{id:"agent_code",title:"Agent"}}),t=new ne({props:{id:"agent_role",title:"Role"}}),f=new ne({props:{id:"agent_status",title:"Status"}}),v=new ne({props:{id:"instances",title:"Instances",fmt:"num0"}}),C=new ne({props:{id:"tokens_used",title:"Tokens",fmt:"num0"}}),T=new ne({props:{id:"cost_usd",title:"Cost",fmt:"usd2"}}),{c(){S(a.$$.fragment),s=p(),S(t.$$.fragment),c=p(),S(f.$$.fragment),n=p(),S(v.$$.fragment),Y=p(),S(C.$$.fragment),z=p(),S(T.$$.fragment)},l(l){k(a.$$.fragment,l),s=E(l),k(t.$$.fragment,l),c=E(l),k(f.$$.fragment,l),n=E(l),k(v.$$.fragment,l),Y=E(l),k(C.$$.fragment,l),z=E(l),k(T.$$.fragment,l)},m(l,$){R(a,l,$),u(l,s,$),R(t,l,$),u(l,c,$),R(f,l,$),u(l,n,$),R(v,l,$),u(l,Y,$),R(C,l,$),u(l,z,$),R(T,l,$),O=!0},p:xe,i(l){O||(o(a.$$.fragment,l),o(t.$$.fragment,l),o(f.$$.fragment,l),o(v.$$.fragment,l),o(C.$$.fragment,l),o(T.$$.fragment,l),O=!0)},o(l){m(a.$$.fragment,l),m(t.$$.fragment,l),m(f.$$.fragment,l),m(v.$$.fragment,l),m(C.$$.fragment,l),m(T.$$.fragment,l),O=!1},d(l){l&&(d(s),d(c),d(n),d(Y),d(z)),N(a,l),N(t,l),N(f,l),N(v,l),N(C,l),N(T,l)}}}function Ot(r){let a,s;return a=new Ae({props:{queryID:"cost_trends",queryResult:r[6]}}),{c(){S(a.$$.fragment)},l(t){k(a.$$.fragment,t)},m(t,c){R(a,t,c),s=!0},p(t,c){const f={};c[0]&64&&(f.queryResult=t[6]),a.$set(f)},i(t){s||(o(a.$$.fragment,t),s=!0)},o(t){m(a.$$.fragment,t),s=!1},d(t){N(a,t)}}}function $t(r){let a,s;return a=new Ae({props:{queryID:"recent_prs",queryResult:r[7]}}),{c(){S(a.$$.fragment)},l(t){k(a.$$.fragment,t)},m(t,c){R(a,t,c),s=!0},p(t,c){const f={};c[0]&128&&(f.queryResult=t[7]),a.$set(f)},i(t){s||(o(a.$$.fragment,t),s=!0)},o(t){m(a.$$.fragment,t),s=!1},d(t){N(a,t)}}}function jt(r){let a,s,t,c,f,n,v,Y,C,z,T,O,l,$;return a=new ne({props:{id:"pr_code",title:"PR"}}),t=new ne({props:{id:"pr_title",title:"Title"}}),f=new ne({props:{id:"agent_code",title:"Agent"}}),v=new ne({props:{id:"merged_date",title:"Merged",fmt:"date"}}),C=new ne({props:{id:"files_changed",title:"Files",fmt:"num0"}}),T=new ne({props:{id:"lines_added",title:"Added",fmt:"num0"}}),l=new ne({props:{id:"lines_deleted",title:"Deleted",fmt:"num0"}}),{c(){S(a.$$.fragment),s=p(),S(t.$$.fragment),c=p(),S(f.$$.fragment),n=p(),S(v.$$.fragment),Y=p(),S(C.$$.fragment),z=p(),S(T.$$.fragment),O=p(),S(l.$$.fragment)},l(i){k(a.$$.fragment,i),s=E(i),k(t.$$.fragment,i),c=E(i),k(f.$$.fragment,i),n=E(i),k(v.$$.fragment,i),Y=E(i),k(C.$$.fragment,i),z=E(i),k(T.$$.fragment,i),O=E(i),k(l.$$.fragment,i)},m(i,w){R(a,i,w),u(i,s,w),R(t,i,w),u(i,c,w),R(f,i,w),u(i,n,w),R(v,i,w),u(i,Y,w),R(C,i,w),u(i,z,w),R(T,i,w),u(i,O,w),R(l,i,w),$=!0},p:xe,i(i){$||(o(a.$$.fragment,i),o(t.$$.fragment,i),o(f.$$.fragment,i),o(v.$$.fragment,i),o(C.$$.fragment,i),o(T.$$.fragment,i),o(l.$$.fragment,i),$=!0)},o(i){m(a.$$.fragment,i),m(t.$$.fragment,i),m(f.$$.fragment,i),m(v.$$.fragment,i),m(C.$$.fragment,i),m(T.$$.fragment,i),m(l.$$.fragment,i),$=!1},d(i){i&&(d(s),d(c),d(n),d(Y),d(z),d(O)),N(a,i),N(t,i),N(f,i),N(v,i),N(C,i),N(T,i),N(l,i)}}}function Dt(r){let a,s;return a=new Ae({props:{queryID:"agent_status_summary",queryResult:r[8]}}),{c(){S(a.$$.fragment)},l(t){k(a.$$.fragment,t)},m(t,c){R(a,t,c),s=!0},p(t,c){const f={};c[0]&256&&(f.queryResult=t[8]),a.$set(f)},i(t){s||(o(a.$$.fragment,t),s=!0)},o(t){m(a.$$.fragment,t),s=!1},d(t){N(a,t)}}}function zt(r){let a,s,t,c,f,n,v='<a href="#executive-overview">Executive Overview</a>',Y,C,z='<p class="markdown">&quot;Every pixel tells a story.&quot; — The Herd dashboards bring clarity to the chaos.</p>',T,O,l='<a href="#system-health">System Health</a>',$,i,w='<strong class="markdown">Question</strong>: What is the current state of the system and recent activity?',Ue,K,X,re,ge,Te,b,G,me,Z,Je,ie,Ge,P,Ee,x,Ie,$e,he,J,Ne='<a href="#agent-utilization">Agent Utilization</a>',Re,le,Qe='<strong class="markdown">Question</strong>: Which agents are working and what are they costing?',Me,ee,V,ke,De,He,ae,Se='<a href="#cost-trends-last-30-days">Cost Trends (Last 30 Days)</a>',de,te,je='<strong class="markdown">Question</strong>: How are costs trending recently?',Fe,Ce,Q,ue,pe,be,se,ze='<a href="#recent-pull-requests">Recent Pull Requests</a>',oe,j,qe='<strong class="markdown">Question</strong>: What work has been delivered recently?',We,Oe,ce,g,Pe,et,ve,rt='<a href="#agent-status">Agent Status</a>',tt,Be,it='<strong class="markdown">Question</strong>: How are agents distributed across status categories?',at,Ke,Ye,st;function vt(e,_){return Vt}let Xe=vt()(r),L=r[0]&&Tt(r),y=r[1]&&Nt(r),A=r[2]&&Rt(r),U=r[3]&&kt(r),I=r[4]&&St(r);G=new Ze({props:{data:r[0],value:"active_agents",title:"Active Agents",comparison:"total_agents",comparisonTitle:"Total"}}),Z=new Ze({props:{data:r[1],value:"count",title:"Open Tickets"}}),ie=new Ze({props:{data:r[2],value:"count",title:"PRs This Week"}}),P=new Ze({props:{data:r[3],value:"total_cost",title:"Total Cost",fmt:"usd"}}),x=new Ze({props:{data:r[4],value:"cost_per_line",title:"Cost/Line",fmt:"usd2"}});let h=r[5]&&Ct(r);V=new pt({props:{data:r[5],$$slots:{default:[Qt]},$$scope:{ctx:r}}});let M=r[6]&&Ot(r);Q=new Pt({props:{data:r[6],x:"date",y:"daily_cost",y2:"cumulative_cost",yAxisTitle:"Daily Cost (USD)",y2AxisTitle:"Cumulative Cost (USD)",title:"Daily & Cumulative Costs",series:[{name:"Daily Cost",color:"#3B82F6"},{name:"Cumulative Cost",color:"#10B981"}]}});let H=r[7]&&$t(r);ce=new pt({props:{data:r[7],$$slots:{default:[jt]},$$scope:{ctx:r}}});let F=r[8]&&Dt(r);return Ye=new Gt({props:{data:r[8],x:"agent_status",y:"agent_count",title:"Agents by Status",xAxisTitle:"Status",yAxisTitle:"Count",series:[{name:"Agent Count",color:"#8B5CF6"}]}}),{c(){a=p(),Xe.c(),s=W("meta"),t=W("meta"),c=mt(),f=p(),n=W("h1"),n.innerHTML=v,Y=p(),C=W("blockquote"),C.innerHTML=z,T=p(),O=W("h2"),O.innerHTML=l,$=p(),i=W("p"),i.innerHTML=w,Ue=p(),L&&L.c(),K=p(),y&&y.c(),X=p(),A&&A.c(),re=p(),U&&U.c(),ge=p(),I&&I.c(),Te=p(),b=W("div"),S(G.$$.fragment),me=p(),S(Z.$$.fragment),Je=p(),S(ie.$$.fragment),Ge=p(),S(P.$$.fragment),Ee=p(),S(x.$$.fragment),Ie=p(),$e=W("hr"),he=p(),J=W("h2"),J.innerHTML=Ne,Re=p(),le=W("p"),le.innerHTML=Qe,Me=p(),h&&h.c(),ee=p(),S(V.$$.fragment),ke=p(),De=W("hr"),He=p(),ae=W("h2"),ae.innerHTML=Se,de=p(),te=W("p"),te.innerHTML=je,Fe=p(),M&&M.c(),Ce=p(),S(Q.$$.fragment),ue=p(),pe=W("hr"),be=p(),se=W("h2"),se.innerHTML=ze,oe=p(),j=W("p"),j.innerHTML=qe,We=p(),H&&H.c(),Oe=p(),S(ce.$$.fragment),g=p(),Pe=W("hr"),et=p(),ve=W("h2"),ve.innerHTML=rt,tt=p(),Be=W("p"),Be.innerHTML=it,at=p(),F&&F.c(),Ke=p(),S(Ye.$$.fragment),this.h()},l(e){a=E(e);const _=Lt("svelte-2igo1p",document.head);Xe.l(_),s=q(_,"META",{name:!0,content:!0}),t=q(_,"META",{name:!0,content:!0}),c=mt(),_.forEach(d),f=E(e),n=q(e,"H1",{class:!0,id:!0,"data-svelte-h":!0}),fe(n)!=="svelte-15ptq6j"&&(n.innerHTML=v),Y=E(e),C=q(e,"BLOCKQUOTE",{class:!0,"data-svelte-h":!0}),fe(C)!=="svelte-1vnldz5"&&(C.innerHTML=z),T=E(e),O=q(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),fe(O)!=="svelte-sjpk7l"&&(O.innerHTML=l),$=E(e),i=q(e,"P",{class:!0,"data-svelte-h":!0}),fe(i)!=="svelte-exbv65"&&(i.innerHTML=w),Ue=E(e),L&&L.l(e),K=E(e),y&&y.l(e),X=E(e),A&&A.l(e),re=E(e),U&&U.l(e),ge=E(e),I&&I.l(e),Te=E(e),b=q(e,"DIV",{class:!0});var _e=yt(b);k(G.$$.fragment,_e),me=E(_e),k(Z.$$.fragment,_e),Je=E(_e),k(ie.$$.fragment,_e),Ge=E(_e),k(P.$$.fragment,_e),Ee=E(_e),k(x.$$.fragment,_e),_e.forEach(d),Ie=E(e),$e=q(e,"HR",{class:!0}),he=E(e),J=q(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),fe(J)!=="svelte-1ue4fq9"&&(J.innerHTML=Ne),Re=E(e),le=q(e,"P",{class:!0,"data-svelte-h":!0}),fe(le)!=="svelte-7ol352"&&(le.innerHTML=Qe),Me=E(e),h&&h.l(e),ee=E(e),k(V.$$.fragment,e),ke=E(e),De=q(e,"HR",{class:!0}),He=E(e),ae=q(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),fe(ae)!=="svelte-1uwd5v4"&&(ae.innerHTML=Se),de=E(e),te=q(e,"P",{class:!0,"data-svelte-h":!0}),fe(te)!=="svelte-1u7uec7"&&(te.innerHTML=je),Fe=E(e),M&&M.l(e),Ce=E(e),k(Q.$$.fragment,e),ue=E(e),pe=q(e,"HR",{class:!0}),be=E(e),se=q(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),fe(se)!=="svelte-115sljo"&&(se.innerHTML=ze),oe=E(e),j=q(e,"P",{class:!0,"data-svelte-h":!0}),fe(j)!=="svelte-p6fv7n"&&(j.innerHTML=qe),We=E(e),H&&H.l(e),Oe=E(e),k(ce.$$.fragment,e),g=E(e),Pe=q(e,"HR",{class:!0}),et=E(e),ve=q(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),fe(ve)!=="svelte-1532u4f"&&(ve.innerHTML=rt),tt=E(e),Be=q(e,"P",{class:!0,"data-svelte-h":!0}),fe(Be)!=="svelte-yq1e02"&&(Be.innerHTML=it),at=E(e),F&&F.l(e),Ke=E(e),k(Ye.$$.fragment,e),this.h()},h(){D(s,"name","twitter:card"),D(s,"content","summary_large_image"),D(t,"name","twitter:site"),D(t,"content","@evidence_dev"),D(n,"class","markdown"),D(n,"id","executive-overview"),D(C,"class","markdown"),D(O,"class","markdown"),D(O,"id","system-health"),D(i,"class","markdown"),D(b,"class","grid grid-cols-2 md:grid-cols-5 gap-4 mb-6"),D($e,"class","markdown"),D(J,"class","markdown"),D(J,"id","agent-utilization"),D(le,"class","markdown"),D(De,"class","markdown"),D(ae,"class","markdown"),D(ae,"id","cost-trends-last-30-days"),D(te,"class","markdown"),D(pe,"class","markdown"),D(se,"class","markdown"),D(se,"id","recent-pull-requests"),D(j,"class","markdown"),D(Pe,"class","markdown"),D(ve,"class","markdown"),D(ve,"id","agent-status"),D(Be,"class","markdown")},m(e,_){u(e,a,_),Xe.m(document.head,null),Ve(document.head,s),Ve(document.head,t),Ve(document.head,c),u(e,f,_),u(e,n,_),u(e,Y,_),u(e,C,_),u(e,T,_),u(e,O,_),u(e,$,_),u(e,i,_),u(e,Ue,_),L&&L.m(e,_),u(e,K,_),y&&y.m(e,_),u(e,X,_),A&&A.m(e,_),u(e,re,_),U&&U.m(e,_),u(e,ge,_),I&&I.m(e,_),u(e,Te,_),u(e,b,_),R(G,b,null),Ve(b,me),R(Z,b,null),Ve(b,Je),R(ie,b,null),Ve(b,Ge),R(P,b,null),Ve(b,Ee),R(x,b,null),u(e,Ie,_),u(e,$e,_),u(e,he,_),u(e,J,_),u(e,Re,_),u(e,le,_),u(e,Me,_),h&&h.m(e,_),u(e,ee,_),R(V,e,_),u(e,ke,_),u(e,De,_),u(e,He,_),u(e,ae,_),u(e,de,_),u(e,te,_),u(e,Fe,_),M&&M.m(e,_),u(e,Ce,_),R(Q,e,_),u(e,ue,_),u(e,pe,_),u(e,be,_),u(e,se,_),u(e,oe,_),u(e,j,_),u(e,We,_),H&&H.m(e,_),u(e,Oe,_),R(ce,e,_),u(e,g,_),u(e,Pe,_),u(e,et,_),u(e,ve,_),u(e,tt,_),u(e,Be,_),u(e,at,_),F&&F.m(e,_),u(e,Ke,_),R(Ye,e,_),st=!0},p(e,_){Xe.p(e,_),e[0]?L?(L.p(e,_),_[0]&1&&o(L,1)):(L=Tt(e),L.c(),o(L,1),L.m(K.parentNode,K)):L&&(Le(),m(L,1,1,()=>{L=null}),we()),e[1]?y?(y.p(e,_),_[0]&2&&o(y,1)):(y=Nt(e),y.c(),o(y,1),y.m(X.parentNode,X)):y&&(Le(),m(y,1,1,()=>{y=null}),we()),e[2]?A?(A.p(e,_),_[0]&4&&o(A,1)):(A=Rt(e),A.c(),o(A,1),A.m(re.parentNode,re)):A&&(Le(),m(A,1,1,()=>{A=null}),we()),e[3]?U?(U.p(e,_),_[0]&8&&o(U,1)):(U=kt(e),U.c(),o(U,1),U.m(ge.parentNode,ge)):U&&(Le(),m(U,1,1,()=>{U=null}),we()),e[4]?I?(I.p(e,_),_[0]&16&&o(I,1)):(I=St(e),I.c(),o(I,1),I.m(Te.parentNode,Te)):I&&(Le(),m(I,1,1,()=>{I=null}),we());const _e={};_[0]&1&&(_e.data=e[0]),G.$set(_e);const lt={};_[0]&2&&(lt.data=e[1]),Z.$set(lt);const dt={};_[0]&4&&(dt.data=e[2]),ie.$set(dt);const ut={};_[0]&8&&(ut.data=e[3]),P.$set(ut);const ot={};_[0]&16&&(ot.data=e[4]),x.$set(ot),e[5]?h?(h.p(e,_),_[0]&32&&o(h,1)):(h=Ct(e),h.c(),o(h,1),h.m(ee.parentNode,ee)):h&&(Le(),m(h,1,1,()=>{h=null}),we());const _t={};_[0]&32&&(_t.data=e[5]),_[2]&16&&(_t.$$scope={dirty:_,ctx:e}),V.$set(_t),e[6]?M?(M.p(e,_),_[0]&64&&o(M,1)):(M=Ot(e),M.c(),o(M,1),M.m(Ce.parentNode,Ce)):M&&(Le(),m(M,1,1,()=>{M=null}),we());const ct={};_[0]&64&&(ct.data=e[6]),Q.$set(ct),e[7]?H?(H.p(e,_),_[0]&128&&o(H,1)):(H=$t(e),H.c(),o(H,1),H.m(Oe.parentNode,Oe)):H&&(Le(),m(H,1,1,()=>{H=null}),we());const nt={};_[0]&128&&(nt.data=e[7]),_[2]&16&&(nt.$$scope={dirty:_,ctx:e}),ce.$set(nt),e[8]?F?(F.p(e,_),_[0]&256&&o(F,1)):(F=Dt(e),F.c(),o(F,1),F.m(Ke.parentNode,Ke)):F&&(Le(),m(F,1,1,()=>{F=null}),we());const ft={};_[0]&256&&(ft.data=e[8]),Ye.$set(ft)},i(e){st||(o(L),o(y),o(A),o(U),o(I),o(G.$$.fragment,e),o(Z.$$.fragment,e),o(ie.$$.fragment,e),o(P.$$.fragment,e),o(x.$$.fragment,e),o(h),o(V.$$.fragment,e),o(M),o(Q.$$.fragment,e),o(H),o(ce.$$.fragment,e),o(F),o(Ye.$$.fragment,e),st=!0)},o(e){m(L),m(y),m(A),m(U),m(I),m(G.$$.fragment,e),m(Z.$$.fragment,e),m(ie.$$.fragment,e),m(P.$$.fragment,e),m(x.$$.fragment,e),m(h),m(V.$$.fragment,e),m(M),m(Q.$$.fragment,e),m(H),m(ce.$$.fragment,e),m(F),m(Ye.$$.fragment,e),st=!1},d(e){e&&(d(a),d(f),d(n),d(Y),d(C),d(T),d(O),d($),d(i),d(Ue),d(K),d(X),d(re),d(ge),d(Te),d(b),d(Ie),d($e),d(he),d(J),d(Re),d(le),d(Me),d(ee),d(ke),d(De),d(He),d(ae),d(de),d(te),d(Fe),d(Ce),d(ue),d(pe),d(be),d(se),d(oe),d(j),d(We),d(Oe),d(g),d(Pe),d(et),d(ve),d(tt),d(Be),d(at),d(Ke)),Xe.d(e),d(s),d(t),d(c),L&&L.d(e),y&&y.d(e),A&&A.d(e),U&&U.d(e),I&&I.d(e),N(G),N(Z),N(ie),N(P),N(x),h&&h.d(e),N(V,e),M&&M.d(e),N(Q,e),H&&H.d(e),N(ce,e),F&&F.d(e),N(Ye,e)}}}function Kt(r,a,s){let t,c;Et(r,Jt,g=>s(47,t=g)),Et(r,gt,g=>s(53,c=g));let{data:f}=a,{data:n={},customFormattingSettings:v,__db:Y,inputs:C}=f;At(gt,c="6666cd76f96956469e7be39d750cc7d9",c);let z=Ft(Bt(C));Ut(z.subscribe(g=>C=g)),It(Wt,{getCustomFormats:()=>v.customFormats||[]});const T=(g,Pe)=>Yt(Y.query,g,{query_name:Pe});bt(T),t.params,ht(()=>!0);let O={initialData:void 0,initialError:void 0},l=B`SELECT
    COUNT(DISTINCT agent_code) as total_agents,
    SUM(CASE WHEN agent_status = 'Active' THEN 1 ELSE 0 END) as active_agents,
    SUM(CASE WHEN agent_status = 'Idle' THEN 1 ELSE 0 END) as idle_agents,
    SUM(CASE WHEN agent_status = 'Blocked' THEN 1 ELSE 0 END) as blocked_agents
FROM herd.dim_agent
WHERE is_current = true AND NOT is_deleted`,$=`SELECT
    COUNT(DISTINCT agent_code) as total_agents,
    SUM(CASE WHEN agent_status = 'Active' THEN 1 ELSE 0 END) as active_agents,
    SUM(CASE WHEN agent_status = 'Idle' THEN 1 ELSE 0 END) as idle_agents,
    SUM(CASE WHEN agent_status = 'Blocked' THEN 1 ELSE 0 END) as blocked_agents
FROM herd.dim_agent
WHERE is_current = true AND NOT is_deleted`;n.active_agents_data&&(n.active_agents_data instanceof Error?O.initialError=n.active_agents_data:O.initialData=n.active_agents_data,n.active_agents_columns&&(O.knownColumns=n.active_agents_columns));let i,w=!1;const Ue=ye.createReactive({callback:g=>{s(0,i=g)},execFn:T},{id:"active_agents",...O});Ue($,{noResolve:l,...O}),globalThis[Symbol.for("active_agents")]={get value(){return i}};let K={initialData:void 0,initialError:void 0},X=B`SELECT COUNT(*) as count
FROM herd.dim_ticket
WHERE is_current = true
  AND NOT is_deleted
  AND ticket_current_status NOT IN ('Done', 'Canceled', 'Cancelled', 'Archived')`,re=`SELECT COUNT(*) as count
FROM herd.dim_ticket
WHERE is_current = true
  AND NOT is_deleted
  AND ticket_current_status NOT IN ('Done', 'Canceled', 'Cancelled', 'Archived')`;n.open_tickets_data&&(n.open_tickets_data instanceof Error?K.initialError=n.open_tickets_data:K.initialData=n.open_tickets_data,n.open_tickets_columns&&(K.knownColumns=n.open_tickets_columns));let ge,Te=!1;const b=ye.createReactive({callback:g=>{s(1,ge=g)},execFn:T},{id:"open_tickets",...K});b(re,{noResolve:X,...K}),globalThis[Symbol.for("open_tickets")]={get value(){return ge}};let G={initialData:void 0,initialError:void 0},me=B`SELECT COUNT(*) as count
FROM herd.fact_pr_delivery fpd
JOIN herd.dim_date dd ON CAST(strftime(fpd.pr_merged_at, '%Y%m%d') AS INTEGER) = dd.date_sk
WHERE dd.date_actual >= DATE_TRUNC('week', CURRENT_DATE)
  AND fpd.pr_merged_at IS NOT NULL`,Z=`SELECT COUNT(*) as count
FROM herd.fact_pr_delivery fpd
JOIN herd.dim_date dd ON CAST(strftime(fpd.pr_merged_at, '%Y%m%d') AS INTEGER) = dd.date_sk
WHERE dd.date_actual >= DATE_TRUNC('week', CURRENT_DATE)
  AND fpd.pr_merged_at IS NOT NULL`;n.prs_this_week_data&&(n.prs_this_week_data instanceof Error?G.initialError=n.prs_this_week_data:G.initialData=n.prs_this_week_data,n.prs_this_week_columns&&(G.knownColumns=n.prs_this_week_columns));let Je,ie=!1;const Ge=ye.createReactive({callback:g=>{s(2,Je=g)},execFn:T},{id:"prs_this_week",...G});Ge(Z,{noResolve:me,...G}),globalThis[Symbol.for("prs_this_week")]={get value(){return Je}};let P={initialData:void 0,initialError:void 0},Ee=B`SELECT COALESCE(SUM(total_token_cost_usd), 0) as total_cost
FROM herd.fact_agent_instance_cost`,x=`SELECT COALESCE(SUM(total_token_cost_usd), 0) as total_cost
FROM herd.fact_agent_instance_cost`;n.cost_this_week_data&&(n.cost_this_week_data instanceof Error?P.initialError=n.cost_this_week_data:P.initialData=n.cost_this_week_data,n.cost_this_week_columns&&(P.knownColumns=n.cost_this_week_columns));let Ie,$e=!1;const he=ye.createReactive({callback:g=>{s(3,Ie=g)},execFn:T},{id:"cost_this_week",...P});he(x,{noResolve:Ee,...P}),globalThis[Symbol.for("cost_this_week")]={get value(){return Ie}};let J={initialData:void 0,initialError:void 0},Ne=B`SELECT
    CASE
        WHEN SUM(fpd.pr_lines_added + fpd.pr_lines_deleted) > 0
        THEN SUM(faic.total_token_cost_usd) / SUM(fpd.pr_lines_added + fpd.pr_lines_deleted)
        ELSE 0
    END as cost_per_line
FROM herd.fact_pr_delivery fpd
LEFT JOIN herd.fact_agent_instance_cost faic
    ON fpd.agent_sk = faic.agent_sk
WHERE fpd.pr_merged_at >= CURRENT_DATE - INTERVAL '7 days'`,Re=`SELECT
    CASE
        WHEN SUM(fpd.pr_lines_added + fpd.pr_lines_deleted) > 0
        THEN SUM(faic.total_token_cost_usd) / SUM(fpd.pr_lines_added + fpd.pr_lines_deleted)
        ELSE 0
    END as cost_per_line
FROM herd.fact_pr_delivery fpd
LEFT JOIN herd.fact_agent_instance_cost faic
    ON fpd.agent_sk = faic.agent_sk
WHERE fpd.pr_merged_at >= CURRENT_DATE - INTERVAL '7 days'`;n.cost_per_line_data&&(n.cost_per_line_data instanceof Error?J.initialError=n.cost_per_line_data:J.initialData=n.cost_per_line_data,n.cost_per_line_columns&&(J.knownColumns=n.cost_per_line_columns));let le,Qe=!1;const Me=ye.createReactive({callback:g=>{s(4,le=g)},execFn:T},{id:"cost_per_line",...J});Me(Re,{noResolve:Ne,...J}),globalThis[Symbol.for("cost_per_line")]={get value(){return le}};let ee={initialData:void 0,initialError:void 0},V=B`SELECT
    da.agent_code,
    da.agent_role,
    da.agent_status,
    SUM(faic.total_token_input_count + faic.total_token_output_count) as tokens_used,
    SUM(faic.total_token_cost_usd) as cost_usd,
    COUNT(DISTINCT faic.agent_instance_tk) as instances
FROM herd.dim_agent da
LEFT JOIN herd.fact_agent_instance_cost faic
    ON da.agent_sk = faic.agent_sk
WHERE da.is_current = true AND NOT da.is_deleted
GROUP BY
    da.agent_code,
    da.agent_role,
    da.agent_status
ORDER BY cost_usd DESC NULLS LAST, da.agent_code`,ke=`SELECT
    da.agent_code,
    da.agent_role,
    da.agent_status,
    SUM(faic.total_token_input_count + faic.total_token_output_count) as tokens_used,
    SUM(faic.total_token_cost_usd) as cost_usd,
    COUNT(DISTINCT faic.agent_instance_tk) as instances
FROM herd.dim_agent da
LEFT JOIN herd.fact_agent_instance_cost faic
    ON da.agent_sk = faic.agent_sk
WHERE da.is_current = true AND NOT da.is_deleted
GROUP BY
    da.agent_code,
    da.agent_role,
    da.agent_status
ORDER BY cost_usd DESC NULLS LAST, da.agent_code`;n.agent_work_summary_data&&(n.agent_work_summary_data instanceof Error?ee.initialError=n.agent_work_summary_data:ee.initialData=n.agent_work_summary_data,n.agent_work_summary_columns&&(ee.knownColumns=n.agent_work_summary_columns));let De,He=!1;const ae=ye.createReactive({callback:g=>{s(5,De=g)},execFn:T},{id:"agent_work_summary",...ee});ae(ke,{noResolve:V,...ee}),globalThis[Symbol.for("agent_work_summary")]={get value(){return De}};let Se={initialData:void 0,initialError:void 0},de=B`SELECT
    dd.date_actual as date,
    COALESCE(SUM(faic.total_token_cost_usd), 0) as daily_cost,
    SUM(COALESCE(SUM(faic.total_token_cost_usd), 0)) OVER (
        ORDER BY dd.date_actual
        ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW
    ) as cumulative_cost
FROM herd.dim_date dd
LEFT JOIN herd.fact_agent_instance_work faiw
    ON CAST(strftime(faiw.agent_instance_started_at, '%Y%m%d') AS INTEGER) = dd.date_sk
LEFT JOIN herd.fact_agent_instance_cost faic
    ON faiw.agent_instance_tk = faic.agent_instance_tk
WHERE dd.date_actual >= CURRENT_DATE - INTERVAL '30 days'
  AND dd.date_actual <= CURRENT_DATE
GROUP BY dd.date_actual
ORDER BY dd.date_actual`,te=`SELECT
    dd.date_actual as date,
    COALESCE(SUM(faic.total_token_cost_usd), 0) as daily_cost,
    SUM(COALESCE(SUM(faic.total_token_cost_usd), 0)) OVER (
        ORDER BY dd.date_actual
        ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW
    ) as cumulative_cost
FROM herd.dim_date dd
LEFT JOIN herd.fact_agent_instance_work faiw
    ON CAST(strftime(faiw.agent_instance_started_at, '%Y%m%d') AS INTEGER) = dd.date_sk
LEFT JOIN herd.fact_agent_instance_cost faic
    ON faiw.agent_instance_tk = faic.agent_instance_tk
WHERE dd.date_actual >= CURRENT_DATE - INTERVAL '30 days'
  AND dd.date_actual <= CURRENT_DATE
GROUP BY dd.date_actual
ORDER BY dd.date_actual`;n.cost_trends_data&&(n.cost_trends_data instanceof Error?Se.initialError=n.cost_trends_data:Se.initialData=n.cost_trends_data,n.cost_trends_columns&&(Se.knownColumns=n.cost_trends_columns));let je,Fe=!1;const Ce=ye.createReactive({callback:g=>{s(6,je=g)},execFn:T},{id:"cost_trends",...Se});Ce(te,{noResolve:de,...Se}),globalThis[Symbol.for("cost_trends")]={get value(){return je}};let Q={initialData:void 0,initialError:void 0},ue=B`SELECT
    dpr.pr_code,
    dpr.pr_title,
    da.agent_code,
    fpd.pr_merged_at as merged_date,
    fpd.pr_lines_added as lines_added,
    fpd.pr_lines_deleted as lines_deleted,
    fpd.pr_files_changed as files_changed
FROM herd.fact_pr_delivery fpd
JOIN herd.dim_pull_request dpr
    ON fpd.pull_request_sk = dpr.pull_request_sk
LEFT JOIN herd.dim_agent da
    ON fpd.agent_sk = da.agent_sk
WHERE fpd.pr_merged_at >= CURRENT_DATE - INTERVAL '7 days'
  AND fpd.pr_merged_at IS NOT NULL
ORDER BY fpd.pr_merged_at DESC
LIMIT 10`,pe=`SELECT
    dpr.pr_code,
    dpr.pr_title,
    da.agent_code,
    fpd.pr_merged_at as merged_date,
    fpd.pr_lines_added as lines_added,
    fpd.pr_lines_deleted as lines_deleted,
    fpd.pr_files_changed as files_changed
FROM herd.fact_pr_delivery fpd
JOIN herd.dim_pull_request dpr
    ON fpd.pull_request_sk = dpr.pull_request_sk
LEFT JOIN herd.dim_agent da
    ON fpd.agent_sk = da.agent_sk
WHERE fpd.pr_merged_at >= CURRENT_DATE - INTERVAL '7 days'
  AND fpd.pr_merged_at IS NOT NULL
ORDER BY fpd.pr_merged_at DESC
LIMIT 10`;n.recent_prs_data&&(n.recent_prs_data instanceof Error?Q.initialError=n.recent_prs_data:Q.initialData=n.recent_prs_data,n.recent_prs_columns&&(Q.knownColumns=n.recent_prs_columns));let be,se=!1;const ze=ye.createReactive({callback:g=>{s(7,be=g)},execFn:T},{id:"recent_prs",...Q});ze(pe,{noResolve:ue,...Q}),globalThis[Symbol.for("recent_prs")]={get value(){return be}};let oe={initialData:void 0,initialError:void 0},j=B`SELECT
    agent_status,
    COUNT(*) as agent_count
FROM herd.dim_agent
WHERE is_current = true AND NOT is_deleted
GROUP BY agent_status
ORDER BY agent_count DESC`,qe=`SELECT
    agent_status,
    COUNT(*) as agent_count
FROM herd.dim_agent
WHERE is_current = true AND NOT is_deleted
GROUP BY agent_status
ORDER BY agent_count DESC`;n.agent_status_summary_data&&(n.agent_status_summary_data instanceof Error?oe.initialError=n.agent_status_summary_data:oe.initialData=n.agent_status_summary_data,n.agent_status_summary_columns&&(oe.knownColumns=n.agent_status_summary_columns));let We,Oe=!1;const ce=ye.createReactive({callback:g=>{s(8,We=g)},execFn:T},{id:"agent_status_summary",...oe});return ce(qe,{noResolve:j,...oe}),globalThis[Symbol.for("agent_status_summary")]={get value(){return We}},r.$$set=g=>{"data"in g&&s(9,f=g.data)},r.$$.update=()=>{r.$$.dirty[0]&512&&s(10,{data:n={},customFormattingSettings:v,__db:Y}=f,n),r.$$.dirty[0]&1024&&qt.set(Object.keys(n).length>0),r.$$.dirty[1]&65536&&t.params,r.$$.dirty[0]&30720&&(l||!w?l||(Ue($,{noResolve:l,...O}),s(14,w=!0)):Ue($,{noResolve:l})),r.$$.dirty[0]&491520&&(X||!Te?X||(b(re,{noResolve:X,...K}),s(18,Te=!0)):b(re,{noResolve:X})),r.$$.dirty[0]&7864320&&(me||!ie?me||(Ge(Z,{noResolve:me,...G}),s(22,ie=!0)):Ge(Z,{noResolve:me})),r.$$.dirty[0]&125829120&&(Ee||!$e?Ee||(he(x,{noResolve:Ee,...P}),s(26,$e=!0)):he(x,{noResolve:Ee})),r.$$.dirty[0]&2013265920&&(Ne||!Qe?Ne||(Me(Re,{noResolve:Ne,...J}),s(30,Qe=!0)):Me(Re,{noResolve:Ne})),r.$$.dirty[1]&15&&(V||!He?V||(ae(ke,{noResolve:V,...ee}),s(34,He=!0)):ae(ke,{noResolve:V})),r.$$.dirty[1]&240&&(de||!Fe?de||(Ce(te,{noResolve:de,...Se}),s(38,Fe=!0)):Ce(te,{noResolve:de})),r.$$.dirty[1]&3840&&(ue||!se?ue||(ze(pe,{noResolve:ue,...Q}),s(42,se=!0)):ze(pe,{noResolve:ue})),r.$$.dirty[1]&61440&&(j||!Oe?j||(ce(qe,{noResolve:j,...oe}),s(46,Oe=!0)):ce(qe,{noResolve:j}))},s(12,l=B`SELECT
    COUNT(DISTINCT agent_code) as total_agents,
    SUM(CASE WHEN agent_status = 'Active' THEN 1 ELSE 0 END) as active_agents,
    SUM(CASE WHEN agent_status = 'Idle' THEN 1 ELSE 0 END) as idle_agents,
    SUM(CASE WHEN agent_status = 'Blocked' THEN 1 ELSE 0 END) as blocked_agents
FROM herd.dim_agent
WHERE is_current = true AND NOT is_deleted`),s(13,$=`SELECT
    COUNT(DISTINCT agent_code) as total_agents,
    SUM(CASE WHEN agent_status = 'Active' THEN 1 ELSE 0 END) as active_agents,
    SUM(CASE WHEN agent_status = 'Idle' THEN 1 ELSE 0 END) as idle_agents,
    SUM(CASE WHEN agent_status = 'Blocked' THEN 1 ELSE 0 END) as blocked_agents
FROM herd.dim_agent
WHERE is_current = true AND NOT is_deleted`),s(16,X=B`SELECT COUNT(*) as count
FROM herd.dim_ticket
WHERE is_current = true
  AND NOT is_deleted
  AND ticket_current_status NOT IN ('Done', 'Canceled', 'Cancelled', 'Archived')`),s(17,re=`SELECT COUNT(*) as count
FROM herd.dim_ticket
WHERE is_current = true
  AND NOT is_deleted
  AND ticket_current_status NOT IN ('Done', 'Canceled', 'Cancelled', 'Archived')`),s(20,me=B`SELECT COUNT(*) as count
FROM herd.fact_pr_delivery fpd
JOIN herd.dim_date dd ON CAST(strftime(fpd.pr_merged_at, '%Y%m%d') AS INTEGER) = dd.date_sk
WHERE dd.date_actual >= DATE_TRUNC('week', CURRENT_DATE)
  AND fpd.pr_merged_at IS NOT NULL`),s(21,Z=`SELECT COUNT(*) as count
FROM herd.fact_pr_delivery fpd
JOIN herd.dim_date dd ON CAST(strftime(fpd.pr_merged_at, '%Y%m%d') AS INTEGER) = dd.date_sk
WHERE dd.date_actual >= DATE_TRUNC('week', CURRENT_DATE)
  AND fpd.pr_merged_at IS NOT NULL`),s(24,Ee=B`SELECT COALESCE(SUM(total_token_cost_usd), 0) as total_cost
FROM herd.fact_agent_instance_cost`),s(25,x=`SELECT COALESCE(SUM(total_token_cost_usd), 0) as total_cost
FROM herd.fact_agent_instance_cost`),s(28,Ne=B`SELECT
    CASE
        WHEN SUM(fpd.pr_lines_added + fpd.pr_lines_deleted) > 0
        THEN SUM(faic.total_token_cost_usd) / SUM(fpd.pr_lines_added + fpd.pr_lines_deleted)
        ELSE 0
    END as cost_per_line
FROM herd.fact_pr_delivery fpd
LEFT JOIN herd.fact_agent_instance_cost faic
    ON fpd.agent_sk = faic.agent_sk
WHERE fpd.pr_merged_at >= CURRENT_DATE - INTERVAL '7 days'`),s(29,Re=`SELECT
    CASE
        WHEN SUM(fpd.pr_lines_added + fpd.pr_lines_deleted) > 0
        THEN SUM(faic.total_token_cost_usd) / SUM(fpd.pr_lines_added + fpd.pr_lines_deleted)
        ELSE 0
    END as cost_per_line
FROM herd.fact_pr_delivery fpd
LEFT JOIN herd.fact_agent_instance_cost faic
    ON fpd.agent_sk = faic.agent_sk
WHERE fpd.pr_merged_at >= CURRENT_DATE - INTERVAL '7 days'`),s(32,V=B`SELECT
    da.agent_code,
    da.agent_role,
    da.agent_status,
    SUM(faic.total_token_input_count + faic.total_token_output_count) as tokens_used,
    SUM(faic.total_token_cost_usd) as cost_usd,
    COUNT(DISTINCT faic.agent_instance_tk) as instances
FROM herd.dim_agent da
LEFT JOIN herd.fact_agent_instance_cost faic
    ON da.agent_sk = faic.agent_sk
WHERE da.is_current = true AND NOT da.is_deleted
GROUP BY
    da.agent_code,
    da.agent_role,
    da.agent_status
ORDER BY cost_usd DESC NULLS LAST, da.agent_code`),s(33,ke=`SELECT
    da.agent_code,
    da.agent_role,
    da.agent_status,
    SUM(faic.total_token_input_count + faic.total_token_output_count) as tokens_used,
    SUM(faic.total_token_cost_usd) as cost_usd,
    COUNT(DISTINCT faic.agent_instance_tk) as instances
FROM herd.dim_agent da
LEFT JOIN herd.fact_agent_instance_cost faic
    ON da.agent_sk = faic.agent_sk
WHERE da.is_current = true AND NOT da.is_deleted
GROUP BY
    da.agent_code,
    da.agent_role,
    da.agent_status
ORDER BY cost_usd DESC NULLS LAST, da.agent_code`),s(36,de=B`SELECT
    dd.date_actual as date,
    COALESCE(SUM(faic.total_token_cost_usd), 0) as daily_cost,
    SUM(COALESCE(SUM(faic.total_token_cost_usd), 0)) OVER (
        ORDER BY dd.date_actual
        ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW
    ) as cumulative_cost
FROM herd.dim_date dd
LEFT JOIN herd.fact_agent_instance_work faiw
    ON CAST(strftime(faiw.agent_instance_started_at, '%Y%m%d') AS INTEGER) = dd.date_sk
LEFT JOIN herd.fact_agent_instance_cost faic
    ON faiw.agent_instance_tk = faic.agent_instance_tk
WHERE dd.date_actual >= CURRENT_DATE - INTERVAL '30 days'
  AND dd.date_actual <= CURRENT_DATE
GROUP BY dd.date_actual
ORDER BY dd.date_actual`),s(37,te=`SELECT
    dd.date_actual as date,
    COALESCE(SUM(faic.total_token_cost_usd), 0) as daily_cost,
    SUM(COALESCE(SUM(faic.total_token_cost_usd), 0)) OVER (
        ORDER BY dd.date_actual
        ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW
    ) as cumulative_cost
FROM herd.dim_date dd
LEFT JOIN herd.fact_agent_instance_work faiw
    ON CAST(strftime(faiw.agent_instance_started_at, '%Y%m%d') AS INTEGER) = dd.date_sk
LEFT JOIN herd.fact_agent_instance_cost faic
    ON faiw.agent_instance_tk = faic.agent_instance_tk
WHERE dd.date_actual >= CURRENT_DATE - INTERVAL '30 days'
  AND dd.date_actual <= CURRENT_DATE
GROUP BY dd.date_actual
ORDER BY dd.date_actual`),s(40,ue=B`SELECT
    dpr.pr_code,
    dpr.pr_title,
    da.agent_code,
    fpd.pr_merged_at as merged_date,
    fpd.pr_lines_added as lines_added,
    fpd.pr_lines_deleted as lines_deleted,
    fpd.pr_files_changed as files_changed
FROM herd.fact_pr_delivery fpd
JOIN herd.dim_pull_request dpr
    ON fpd.pull_request_sk = dpr.pull_request_sk
LEFT JOIN herd.dim_agent da
    ON fpd.agent_sk = da.agent_sk
WHERE fpd.pr_merged_at >= CURRENT_DATE - INTERVAL '7 days'
  AND fpd.pr_merged_at IS NOT NULL
ORDER BY fpd.pr_merged_at DESC
LIMIT 10`),s(41,pe=`SELECT
    dpr.pr_code,
    dpr.pr_title,
    da.agent_code,
    fpd.pr_merged_at as merged_date,
    fpd.pr_lines_added as lines_added,
    fpd.pr_lines_deleted as lines_deleted,
    fpd.pr_files_changed as files_changed
FROM herd.fact_pr_delivery fpd
JOIN herd.dim_pull_request dpr
    ON fpd.pull_request_sk = dpr.pull_request_sk
LEFT JOIN herd.dim_agent da
    ON fpd.agent_sk = da.agent_sk
WHERE fpd.pr_merged_at >= CURRENT_DATE - INTERVAL '7 days'
  AND fpd.pr_merged_at IS NOT NULL
ORDER BY fpd.pr_merged_at DESC
LIMIT 10`),s(44,j=B`SELECT
    agent_status,
    COUNT(*) as agent_count
FROM herd.dim_agent
WHERE is_current = true AND NOT is_deleted
GROUP BY agent_status
ORDER BY agent_count DESC`),s(45,qe=`SELECT
    agent_status,
    COUNT(*) as agent_count
FROM herd.dim_agent
WHERE is_current = true AND NOT is_deleted
GROUP BY agent_status
ORDER BY agent_count DESC`),[i,ge,Je,Ie,le,De,je,be,We,f,n,O,l,$,w,K,X,re,Te,G,me,Z,ie,P,Ee,x,$e,J,Ne,Re,Qe,ee,V,ke,He,Se,de,te,Fe,Q,ue,pe,se,oe,j,qe,Oe,t]}class ra extends Mt{constructor(a){super(),Ht(this,a,Kt,zt,wt,{data:9},null,[-1,-1,-1])}}export{ra as component};
