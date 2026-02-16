import{s as gi,d as s,i as _,a as Yt,b as v,c as l,h as Ni,e as S,f as ii,g as Y,j as ai,k as d,l as C,m as ni,n as wi,o as Ei,p as Ti,q as $i,r as xt}from"../chunks/scheduler.FpD6N7RQ.js";import{S as Oi,i as vi,d as E,t as N,a as f,c as Gt,m as T,b as $,e as O,g as Pt}from"../chunks/index.CJT9_JY8.js";import{D as Ue,e as pi,s as Ri,Q as Vt,p as Ii,C as L,r as si,a as Si}from"../chunks/VennDiagram.svelte_svelte_type_style_lang.BSmdDldM.js";import{w as Ci}from"../chunks/entry.BmF8qIvy.js";import{h as j,p as yi}from"../chunks/setTrackProxy.DjIbdjlZ.js";import{p as hi}from"../chunks/stores.01ULU8yI.js";import{B as _i,Q as Qt}from"../chunks/BarChart.DscctSSP.js";import{B as Zt,L as Di}from"../chunks/LineChart.CrQpACj2.js";import{H as Li}from"../chunks/Histogram.8EkrvsIx.js";function Hi(c){return{c(){this.h()},l(a){this.h()},h(){document.title="Evidence"},m:xt,p:xt,d:xt}}function ri(c){let a,n;return a=new Qt({props:{queryID:"architect_overview",queryResult:c[0]}}),{c(){O(a.$$.fragment)},l(e){$(a.$$.fragment,e)},m(e,g){T(a,e,g),n=!0},p(e,g){const u={};g[0]&1&&(u.queryResult=e[0]),a.$set(u)},i(e){n||(f(a.$$.fragment,e),n=!0)},o(e){N(a.$$.fragment,e),n=!1},d(e){E(a,e)}}}function ci(c){let a,n;return a=new Qt({props:{queryID:"intervention_trend",queryResult:c[1]}}),{c(){O(a.$$.fragment)},l(e){$(a.$$.fragment,e)},m(e,g){T(a,e,g),n=!0},p(e,g){const u={};g[0]&2&&(u.queryResult=e[1]),a.$set(u)},i(e){n||(f(a.$$.fragment,e),n=!0)},o(e){N(a.$$.fragment,e),n=!1},d(e){E(a,e)}}}function oi(c){let a,n;return a=new Qt({props:{queryID:"autonomy_ratio",queryResult:c[2]}}),{c(){O(a.$$.fragment)},l(e){$(a.$$.fragment,e)},m(e,g){T(a,e,g),n=!0},p(e,g){const u={};g[0]&4&&(u.queryResult=e[2]),a.$set(u)},i(e){n||(f(a.$$.fragment,e),n=!0)},o(e){N(a.$$.fragment,e),n=!1},d(e){E(a,e)}}}function fi(c){let a,n;return a=new Qt({props:{queryID:"tickets_needing_intervention",queryResult:c[3]}}),{c(){O(a.$$.fragment)},l(e){$(a.$$.fragment,e)},m(e,g){T(a,e,g),n=!0},p(e,g){const u={};g[0]&8&&(u.queryResult=e[3]),a.$set(u)},i(e){n||(f(a.$$.fragment,e),n=!0)},o(e){N(a.$$.fragment,e),n=!1},d(e){E(a,e)}}}function Ui(c){let a,n,e,g,u,r,w,y,R,z,o,p,k,h;return a=new L({props:{id:"ticket_code",title:"Ticket"}}),e=new L({props:{id:"ticket_title",title:"Title"}}),u=new L({props:{id:"ticket_current_status",title:"Status"}}),w=new L({props:{id:"ticket_tshirt_size",title:"Size"}}),R=new L({props:{id:"architect_sessions",title:"Sessions",fmt:"num0"}}),o=new L({props:{id:"intervention_cost",title:"Cost",fmt:"usd2"}}),k=new L({props:{id:"total_minutes",title:"Minutes",fmt:"num1"}}),{c(){O(a.$$.fragment),n=d(),O(e.$$.fragment),g=d(),O(u.$$.fragment),r=d(),O(w.$$.fragment),y=d(),O(R.$$.fragment),z=d(),O(o.$$.fragment),p=d(),O(k.$$.fragment)},l(m){$(a.$$.fragment,m),n=l(m),$(e.$$.fragment,m),g=l(m),$(u.$$.fragment,m),r=l(m),$(w.$$.fragment,m),y=l(m),$(R.$$.fragment,m),z=l(m),$(o.$$.fragment,m),p=l(m),$(k.$$.fragment,m)},m(m,H){T(a,m,H),_(m,n,H),T(e,m,H),_(m,g,H),T(u,m,H),_(m,r,H),T(w,m,H),_(m,y,H),T(R,m,H),_(m,z,H),T(o,m,H),_(m,p,H),T(k,m,H),h=!0},p:xt,i(m){h||(f(a.$$.fragment,m),f(e.$$.fragment,m),f(u.$$.fragment,m),f(w.$$.fragment,m),f(R.$$.fragment,m),f(o.$$.fragment,m),f(k.$$.fragment,m),h=!0)},o(m){N(a.$$.fragment,m),N(e.$$.fragment,m),N(u.$$.fragment,m),N(w.$$.fragment,m),N(R.$$.fragment,m),N(o.$$.fragment,m),N(k.$$.fragment,m),h=!1},d(m){m&&(s(n),s(g),s(r),s(y),s(z),s(p)),E(a,m),E(e,m),E(u,m),E(w,m),E(R,m),E(o,m),E(k,m)}}}function li(c){let a,n;return a=new Qt({props:{queryID:"cost_by_ticket_size",queryResult:c[4]}}),{c(){O(a.$$.fragment)},l(e){$(a.$$.fragment,e)},m(e,g){T(a,e,g),n=!0},p(e,g){const u={};g[0]&16&&(u.queryResult=e[4]),a.$set(u)},i(e){n||(f(a.$$.fragment,e),n=!0)},o(e){N(a.$$.fragment,e),n=!1},d(e){E(a,e)}}}function Mi(c){let a,n,e,g,u,r,w,y,R,z;return a=new L({props:{id:"ticket_tshirt_size",title:"Size"}}),e=new L({props:{id:"ticket_count",title:"Tickets",fmt:"num0"}}),u=new L({props:{id:"sessions",title:"Sessions",fmt:"num0"}}),w=new L({props:{id:"total_cost",title:"Cost",fmt:"usd2"}}),R=new L({props:{id:"avg_cost_per_session",title:"Avg/Session",fmt:"usd4"}}),{c(){O(a.$$.fragment),n=d(),O(e.$$.fragment),g=d(),O(u.$$.fragment),r=d(),O(w.$$.fragment),y=d(),O(R.$$.fragment)},l(o){$(a.$$.fragment,o),n=l(o),$(e.$$.fragment,o),g=l(o),$(u.$$.fragment,o),r=l(o),$(w.$$.fragment,o),y=l(o),$(R.$$.fragment,o)},m(o,p){T(a,o,p),_(o,n,p),T(e,o,p),_(o,g,p),T(u,o,p),_(o,r,p),T(w,o,p),_(o,y,p),T(R,o,p),z=!0},p:xt,i(o){z||(f(a.$$.fragment,o),f(e.$$.fragment,o),f(u.$$.fragment,o),f(w.$$.fragment,o),f(R.$$.fragment,o),z=!0)},o(o){N(a.$$.fragment,o),N(e.$$.fragment,o),N(u.$$.fragment,o),N(w.$$.fragment,o),N(R.$$.fragment,o),z=!1},d(o){o&&(s(n),s(g),s(r),s(y)),E(a,o),E(e,o),E(u,o),E(w,o),E(R,o)}}}function di(c){let a,n;return a=new Qt({props:{queryID:"session_duration",queryResult:c[5]}}),{c(){O(a.$$.fragment)},l(e){$(a.$$.fragment,e)},m(e,g){T(a,e,g),n=!0},p(e,g){const u={};g[0]&32&&(u.queryResult=e[5]),a.$set(u)},i(e){n||(f(a.$$.fragment,e),n=!0)},o(e){N(a.$$.fragment,e),n=!1},d(e){E(a,e)}}}function ui(c){let a,n;return a=new Qt({props:{queryID:"recent_activity",queryResult:c[6]}}),{c(){O(a.$$.fragment)},l(e){$(a.$$.fragment,e)},m(e,g){T(a,e,g),n=!0},p(e,g){const u={};g[0]&64&&(u.queryResult=e[6]),a.$set(u)},i(e){n||(f(a.$$.fragment,e),n=!0)},o(e){N(a.$$.fragment,e),n=!1},d(e){E(a,e)}}}function Ai(c){let a,n,e,g,u,r,w,y,R,z,o,p;return a=new L({props:{id:"agent_instance_started_at",title:"Started",fmt:"datetime"}}),e=new L({props:{id:"ticket_code",title:"Ticket"}}),u=new L({props:{id:"ticket_title",title:"Title"}}),w=new L({props:{id:"agent_instance_outcome",title:"Outcome"}}),R=new L({props:{id:"instance_duration_minutes",title:"Duration",fmt:"num1"}}),o=new L({props:{id:"cost",title:"Cost",fmt:"usd4"}}),{c(){O(a.$$.fragment),n=d(),O(e.$$.fragment),g=d(),O(u.$$.fragment),r=d(),O(w.$$.fragment),y=d(),O(R.$$.fragment),z=d(),O(o.$$.fragment)},l(k){$(a.$$.fragment,k),n=l(k),$(e.$$.fragment,k),g=l(k),$(u.$$.fragment,k),r=l(k),$(w.$$.fragment,k),y=l(k),$(R.$$.fragment,k),z=l(k),$(o.$$.fragment,k)},m(k,h){T(a,k,h),_(k,n,h),T(e,k,h),_(k,g,h),T(u,k,h),_(k,r,h),T(w,k,h),_(k,y,h),T(R,k,h),_(k,z,h),T(o,k,h),p=!0},p:xt,i(k){p||(f(a.$$.fragment,k),f(e.$$.fragment,k),f(u.$$.fragment,k),f(w.$$.fragment,k),f(R.$$.fragment,k),f(o.$$.fragment,k),p=!0)},o(k){N(a.$$.fragment,k),N(e.$$.fragment,k),N(u.$$.fragment,k),N(w.$$.fragment,k),N(R.$$.fragment,k),N(o.$$.fragment,k),p=!1},d(k){k&&(s(n),s(g),s(r),s(y),s(z)),E(a,k),E(e,k),E(u,k),E(w,k),E(R,k),E(o,k)}}}function mi(c){let a,n;return a=new Qt({props:{queryID:"intervention_types",queryResult:c[7]}}),{c(){O(a.$$.fragment)},l(e){$(a.$$.fragment,e)},m(e,g){T(a,e,g),n=!0},p(e,g){const u={};g[0]&128&&(u.queryResult=e[7]),a.$set(u)},i(e){n||(f(a.$$.fragment,e),n=!0)},o(e){N(a.$$.fragment,e),n=!1},d(e){E(a,e)}}}function Fi(c){let a,n,e,g,u,r;return a=new L({props:{id:"intervention_type",title:"Type"}}),e=new L({props:{id:"session_count",title:"Sessions",fmt:"num0"}}),u=new L({props:{id:"total_cost",title:"Cost",fmt:"usd2"}}),{c(){O(a.$$.fragment),n=d(),O(e.$$.fragment),g=d(),O(u.$$.fragment)},l(w){$(a.$$.fragment,w),n=l(w),$(e.$$.fragment,w),g=l(w),$(u.$$.fragment,w)},m(w,y){T(a,w,y),_(w,n,y),T(e,w,y),_(w,g,y),T(u,w,y),r=!0},p:xt,i(w){r||(f(a.$$.fragment,w),f(e.$$.fragment,w),f(u.$$.fragment,w),r=!0)},o(w){N(a.$$.fragment,w),N(e.$$.fragment,w),N(u.$$.fragment,w),r=!1},d(w){w&&(s(n),s(g)),E(a,w),E(e,w),E(u,w)}}}function bi(c){let a,n,e,g,u,r,w='<a href="#architect-efficiency">Architect Efficiency</a>',y,R,z='<p class="markdown">&quot;The master&#39;s touch guides the hand.&quot; — Track architect interventions, coordination overhead, and autonomy.</p>',o,p,k='<a href="#architect-overview">Architect Overview</a>',h,m,H='<strong class="markdown">Question</strong>: How much coordination overhead does the architect require?',It,X,D,K,jt,nt,Xt,P,ft,Z,St,wt,Ct,G,dt='<a href="#intervention-trend-last-30-days">Intervention Trend (Last 30 Days)</a>',ut,st,te='<strong class="markdown">Question</strong>: Is architect intervention increasing or decreasing over time?',yt,x,V,mt,Et,ht,et,kt='<a href="#autonomy-ratio">Autonomy Ratio</a>',_t,tt,ee='<strong class="markdown">Question</strong>: What percentage of work happens without architect involvement?',Dt,gt,B,Q,Tt,rt,Kt,ct,ot,it,Nt,at,ie='<a href="#tickets-requiring-intervention">Tickets Requiring Intervention</a>',Lt,I,ue='<strong class="markdown">Question</strong>: Which tickets required the most architect coordination?',me,ae,Ht,ke,ce,ge,$t,Je='<a href="#coordination-cost-by-ticket-size">Coordination Cost by Ticket Size</a>',Ne,Ut,We='<strong class="markdown">Question</strong>: Do larger tickets require more coordination effort?',we,ne,Mt,Ee,At,Te,oe,$e,Ot,qe='<a href="#session-duration-distribution">Session Duration Distribution</a>',Oe,Ft,ze='<strong class="markdown">Question</strong>: How long are typical coordination sessions?',ve,se,bt,pe,fe,Re,vt,Be='<a href="#recent-coordination-activity">Recent Coordination Activity</a>',Ie,Jt,Ye='<strong class="markdown">Question</strong>: What has the architect been working on recently?',Se,_e,Wt,Ce,le,ye,pt,Ge='<a href="#intervention-types">Intervention Types</a>',he,qt,Pe='<strong class="markdown">Question</strong>: What types of work require architect involvement?',De,re,zt,Le,Bt,He;function ki(t,i){return Hi}let de=ki()(c),U=c[0]&&ri(c);K=new Zt({props:{data:c[0],value:"total_sessions",title:"Total Sessions"}}),nt=new Zt({props:{data:c[0],value:"tickets_coordinated",title:"Tickets Coordinated"}}),P=new Zt({props:{data:c[0],value:"lifecycle_events",title:"Lifecycle Events"}}),Z=new Zt({props:{data:c[0],value:"total_cost",title:"Total Cost",fmt:"usd2"}});let M=c[1]&&ci(c);V=new Di({props:{data:c[1],x:"date",y:"sessions",y2:"events",yAxisTitle:"Session Count",y2AxisTitle:"Event Count",title:"Architect Activity Trend",series:[{name:"Sessions",color:"#8B5CF6"},{name:"Events",color:"#F59E0B"}]}});let A=c[2]&&oi(c);Q=new Zt({props:{data:c[2],value:"total_sessions",title:"Total Sessions"}}),rt=new Zt({props:{data:c[2],value:"architect_sessions",title:"Architect Sessions"}}),ct=new Zt({props:{data:c[2],value:"autonomy_ratio",title:"Agent Autonomy",fmt:"pct1"}});let F=c[3]&&fi(c);Ht=new Ue({props:{data:c[3],search:"true",$$slots:{default:[Ui]},$$scope:{ctx:c}}});let b=c[4]&&li(c);Mt=new _i({props:{data:c[4],x:"ticket_tshirt_size",y:"total_cost",title:"Coordination Cost by Ticket Size",xAxisTitle:"Size",yAxisTitle:"Cost (USD)",series:[{name:"Cost",color:"#8B5CF6"}]}}),At=new Ue({props:{data:c[4],$$slots:{default:[Mi]},$$scope:{ctx:c}}});let J=c[5]&&di(c);bt=new Li({props:{data:c[5],x:"duration",y:"count",title:"Session Duration Distribution",xAxisTitle:"Duration (minutes)",yAxisTitle:"Count"}});let W=c[6]&&ui(c);Wt=new Ue({props:{data:c[6],$$slots:{default:[Ai]},$$scope:{ctx:c}}});let q=c[7]&&mi(c);return zt=new _i({props:{data:c[7],x:"intervention_type",y:"session_count",title:"Sessions by Intervention Type",xAxisTitle:"Type",yAxisTitle:"Count",series:[{name:"Sessions",color:"#F59E0B"}]}}),Bt=new Ue({props:{data:c[7],$$slots:{default:[Fi]},$$scope:{ctx:c}}}),{c(){a=d(),de.c(),n=C("meta"),e=C("meta"),g=ii(),u=d(),r=C("h1"),r.innerHTML=w,y=d(),R=C("blockquote"),R.innerHTML=z,o=d(),p=C("h2"),p.innerHTML=k,h=d(),m=C("p"),m.innerHTML=H,It=d(),U&&U.c(),X=d(),D=C("div"),O(K.$$.fragment),jt=d(),O(nt.$$.fragment),Xt=d(),O(P.$$.fragment),ft=d(),O(Z.$$.fragment),St=d(),wt=C("hr"),Ct=d(),G=C("h2"),G.innerHTML=dt,ut=d(),st=C("p"),st.innerHTML=te,yt=d(),M&&M.c(),x=d(),O(V.$$.fragment),mt=d(),Et=C("hr"),ht=d(),et=C("h2"),et.innerHTML=kt,_t=d(),tt=C("p"),tt.innerHTML=ee,Dt=d(),A&&A.c(),gt=d(),B=C("div"),O(Q.$$.fragment),Tt=d(),O(rt.$$.fragment),Kt=d(),O(ct.$$.fragment),ot=d(),it=C("hr"),Nt=d(),at=C("h2"),at.innerHTML=ie,Lt=d(),I=C("p"),I.innerHTML=ue,me=d(),F&&F.c(),ae=d(),O(Ht.$$.fragment),ke=d(),ce=C("hr"),ge=d(),$t=C("h2"),$t.innerHTML=Je,Ne=d(),Ut=C("p"),Ut.innerHTML=We,we=d(),b&&b.c(),ne=d(),O(Mt.$$.fragment),Ee=d(),O(At.$$.fragment),Te=d(),oe=C("hr"),$e=d(),Ot=C("h2"),Ot.innerHTML=qe,Oe=d(),Ft=C("p"),Ft.innerHTML=ze,ve=d(),J&&J.c(),se=d(),O(bt.$$.fragment),pe=d(),fe=C("hr"),Re=d(),vt=C("h2"),vt.innerHTML=Be,Ie=d(),Jt=C("p"),Jt.innerHTML=Ye,Se=d(),W&&W.c(),_e=d(),O(Wt.$$.fragment),Ce=d(),le=C("hr"),ye=d(),pt=C("h2"),pt.innerHTML=Ge,he=d(),qt=C("p"),qt.innerHTML=Pe,De=d(),q&&q.c(),re=d(),O(zt.$$.fragment),Le=d(),O(Bt.$$.fragment),this.h()},l(t){a=l(t);const i=Ni("svelte-2igo1p",document.head);de.l(i),n=S(i,"META",{name:!0,content:!0}),e=S(i,"META",{name:!0,content:!0}),g=ii(),i.forEach(s),u=l(t),r=S(t,"H1",{class:!0,id:!0,"data-svelte-h":!0}),Y(r)!=="svelte-q1nw38"&&(r.innerHTML=w),y=l(t),R=S(t,"BLOCKQUOTE",{class:!0,"data-svelte-h":!0}),Y(R)!=="svelte-1yi3sm8"&&(R.innerHTML=z),o=l(t),p=S(t,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Y(p)!=="svelte-z45dq2"&&(p.innerHTML=k),h=l(t),m=S(t,"P",{class:!0,"data-svelte-h":!0}),Y(m)!=="svelte-pe0a74"&&(m.innerHTML=H),It=l(t),U&&U.l(t),X=l(t),D=S(t,"DIV",{class:!0});var lt=ai(D);$(K.$$.fragment,lt),jt=l(lt),$(nt.$$.fragment,lt),Xt=l(lt),$(P.$$.fragment,lt),ft=l(lt),$(Z.$$.fragment,lt),lt.forEach(s),St=l(t),wt=S(t,"HR",{class:!0}),Ct=l(t),G=S(t,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Y(G)!=="svelte-1jp9vnj"&&(G.innerHTML=dt),ut=l(t),st=S(t,"P",{class:!0,"data-svelte-h":!0}),Y(st)!=="svelte-2ngjyi"&&(st.innerHTML=te),yt=l(t),M&&M.l(t),x=l(t),$(V.$$.fragment,t),mt=l(t),Et=S(t,"HR",{class:!0}),ht=l(t),et=S(t,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Y(et)!=="svelte-18rjcgj"&&(et.innerHTML=kt),_t=l(t),tt=S(t,"P",{class:!0,"data-svelte-h":!0}),Y(tt)!=="svelte-zd25ax"&&(tt.innerHTML=ee),Dt=l(t),A&&A.l(t),gt=l(t),B=S(t,"DIV",{class:!0});var Rt=ai(B);$(Q.$$.fragment,Rt),Tt=l(Rt),$(rt.$$.fragment,Rt),Kt=l(Rt),$(ct.$$.fragment,Rt),Rt.forEach(s),ot=l(t),it=S(t,"HR",{class:!0}),Nt=l(t),at=S(t,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Y(at)!=="svelte-vlv23m"&&(at.innerHTML=ie),Lt=l(t),I=S(t,"P",{class:!0,"data-svelte-h":!0}),Y(I)!=="svelte-1atyjvr"&&(I.innerHTML=ue),me=l(t),F&&F.l(t),ae=l(t),$(Ht.$$.fragment,t),ke=l(t),ce=S(t,"HR",{class:!0}),ge=l(t),$t=S(t,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Y($t)!=="svelte-16qwxas"&&($t.innerHTML=Je),Ne=l(t),Ut=S(t,"P",{class:!0,"data-svelte-h":!0}),Y(Ut)!=="svelte-18t5gma"&&(Ut.innerHTML=We),we=l(t),b&&b.l(t),ne=l(t),$(Mt.$$.fragment,t),Ee=l(t),$(At.$$.fragment,t),Te=l(t),oe=S(t,"HR",{class:!0}),$e=l(t),Ot=S(t,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Y(Ot)!=="svelte-a40e1i"&&(Ot.innerHTML=qe),Oe=l(t),Ft=S(t,"P",{class:!0,"data-svelte-h":!0}),Y(Ft)!=="svelte-4qsw98"&&(Ft.innerHTML=ze),ve=l(t),J&&J.l(t),se=l(t),$(bt.$$.fragment,t),pe=l(t),fe=S(t,"HR",{class:!0}),Re=l(t),vt=S(t,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Y(vt)!=="svelte-xrmsv5"&&(vt.innerHTML=Be),Ie=l(t),Jt=S(t,"P",{class:!0,"data-svelte-h":!0}),Y(Jt)!=="svelte-wm3chk"&&(Jt.innerHTML=Ye),Se=l(t),W&&W.l(t),_e=l(t),$(Wt.$$.fragment,t),Ce=l(t),le=S(t,"HR",{class:!0}),ye=l(t),pt=S(t,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Y(pt)!=="svelte-171qgac"&&(pt.innerHTML=Ge),he=l(t),qt=S(t,"P",{class:!0,"data-svelte-h":!0}),Y(qt)!=="svelte-js0hei"&&(qt.innerHTML=Pe),De=l(t),q&&q.l(t),re=l(t),$(zt.$$.fragment,t),Le=l(t),$(Bt.$$.fragment,t),this.h()},h(){v(n,"name","twitter:card"),v(n,"content","summary_large_image"),v(e,"name","twitter:site"),v(e,"content","@evidence_dev"),v(r,"class","markdown"),v(r,"id","architect-efficiency"),v(R,"class","markdown"),v(p,"class","markdown"),v(p,"id","architect-overview"),v(m,"class","markdown"),v(D,"class","grid grid-cols-2 md:grid-cols-4 gap-4 mb-6"),v(wt,"class","markdown"),v(G,"class","markdown"),v(G,"id","intervention-trend-last-30-days"),v(st,"class","markdown"),v(Et,"class","markdown"),v(et,"class","markdown"),v(et,"id","autonomy-ratio"),v(tt,"class","markdown"),v(B,"class","grid grid-cols-1 md:grid-cols-3 gap-4 mb-6"),v(it,"class","markdown"),v(at,"class","markdown"),v(at,"id","tickets-requiring-intervention"),v(I,"class","markdown"),v(ce,"class","markdown"),v($t,"class","markdown"),v($t,"id","coordination-cost-by-ticket-size"),v(Ut,"class","markdown"),v(oe,"class","markdown"),v(Ot,"class","markdown"),v(Ot,"id","session-duration-distribution"),v(Ft,"class","markdown"),v(fe,"class","markdown"),v(vt,"class","markdown"),v(vt,"id","recent-coordination-activity"),v(Jt,"class","markdown"),v(le,"class","markdown"),v(pt,"class","markdown"),v(pt,"id","intervention-types"),v(qt,"class","markdown")},m(t,i){_(t,a,i),de.m(document.head,null),Yt(document.head,n),Yt(document.head,e),Yt(document.head,g),_(t,u,i),_(t,r,i),_(t,y,i),_(t,R,i),_(t,o,i),_(t,p,i),_(t,h,i),_(t,m,i),_(t,It,i),U&&U.m(t,i),_(t,X,i),_(t,D,i),T(K,D,null),Yt(D,jt),T(nt,D,null),Yt(D,Xt),T(P,D,null),Yt(D,ft),T(Z,D,null),_(t,St,i),_(t,wt,i),_(t,Ct,i),_(t,G,i),_(t,ut,i),_(t,st,i),_(t,yt,i),M&&M.m(t,i),_(t,x,i),T(V,t,i),_(t,mt,i),_(t,Et,i),_(t,ht,i),_(t,et,i),_(t,_t,i),_(t,tt,i),_(t,Dt,i),A&&A.m(t,i),_(t,gt,i),_(t,B,i),T(Q,B,null),Yt(B,Tt),T(rt,B,null),Yt(B,Kt),T(ct,B,null),_(t,ot,i),_(t,it,i),_(t,Nt,i),_(t,at,i),_(t,Lt,i),_(t,I,i),_(t,me,i),F&&F.m(t,i),_(t,ae,i),T(Ht,t,i),_(t,ke,i),_(t,ce,i),_(t,ge,i),_(t,$t,i),_(t,Ne,i),_(t,Ut,i),_(t,we,i),b&&b.m(t,i),_(t,ne,i),T(Mt,t,i),_(t,Ee,i),T(At,t,i),_(t,Te,i),_(t,oe,i),_(t,$e,i),_(t,Ot,i),_(t,Oe,i),_(t,Ft,i),_(t,ve,i),J&&J.m(t,i),_(t,se,i),T(bt,t,i),_(t,pe,i),_(t,fe,i),_(t,Re,i),_(t,vt,i),_(t,Ie,i),_(t,Jt,i),_(t,Se,i),W&&W.m(t,i),_(t,_e,i),T(Wt,t,i),_(t,Ce,i),_(t,le,i),_(t,ye,i),_(t,pt,i),_(t,he,i),_(t,qt,i),_(t,De,i),q&&q.m(t,i),_(t,re,i),T(zt,t,i),_(t,Le,i),T(Bt,t,i),He=!0},p(t,i){de.p(t,i),t[0]?U?(U.p(t,i),i[0]&1&&f(U,1)):(U=ri(t),U.c(),f(U,1),U.m(X.parentNode,X)):U&&(Pt(),N(U,1,1,()=>{U=null}),Gt());const lt={};i[0]&1&&(lt.data=t[0]),K.$set(lt);const Rt={};i[0]&1&&(Rt.data=t[0]),nt.$set(Rt);const Ve={};i[0]&1&&(Ve.data=t[0]),P.$set(Ve);const Qe={};i[0]&1&&(Qe.data=t[0]),Z.$set(Qe),t[1]?M?(M.p(t,i),i[0]&2&&f(M,1)):(M=ci(t),M.c(),f(M,1),M.m(x.parentNode,x)):M&&(Pt(),N(M,1,1,()=>{M=null}),Gt());const je={};i[0]&2&&(je.data=t[1]),V.$set(je),t[2]?A?(A.p(t,i),i[0]&4&&f(A,1)):(A=oi(t),A.c(),f(A,1),A.m(gt.parentNode,gt)):A&&(Pt(),N(A,1,1,()=>{A=null}),Gt());const Xe={};i[0]&4&&(Xe.data=t[2]),Q.$set(Xe);const Ke={};i[0]&4&&(Ke.data=t[2]),rt.$set(Ke);const Ze={};i[0]&4&&(Ze.data=t[2]),ct.$set(Ze),t[3]?F?(F.p(t,i),i[0]&8&&f(F,1)):(F=fi(t),F.c(),f(F,1),F.m(ae.parentNode,ae)):F&&(Pt(),N(F,1,1,()=>{F=null}),Gt());const Me={};i[0]&8&&(Me.data=t[3]),i[1]&536870912&&(Me.$$scope={dirty:i,ctx:t}),Ht.$set(Me),t[4]?b?(b.p(t,i),i[0]&16&&f(b,1)):(b=li(t),b.c(),f(b,1),b.m(ne.parentNode,ne)):b&&(Pt(),N(b,1,1,()=>{b=null}),Gt());const xe={};i[0]&16&&(xe.data=t[4]),Mt.$set(xe);const Ae={};i[0]&16&&(Ae.data=t[4]),i[1]&536870912&&(Ae.$$scope={dirty:i,ctx:t}),At.$set(Ae),t[5]?J?(J.p(t,i),i[0]&32&&f(J,1)):(J=di(t),J.c(),f(J,1),J.m(se.parentNode,se)):J&&(Pt(),N(J,1,1,()=>{J=null}),Gt());const ti={};i[0]&32&&(ti.data=t[5]),bt.$set(ti),t[6]?W?(W.p(t,i),i[0]&64&&f(W,1)):(W=ui(t),W.c(),f(W,1),W.m(_e.parentNode,_e)):W&&(Pt(),N(W,1,1,()=>{W=null}),Gt());const Fe={};i[0]&64&&(Fe.data=t[6]),i[1]&536870912&&(Fe.$$scope={dirty:i,ctx:t}),Wt.$set(Fe),t[7]?q?(q.p(t,i),i[0]&128&&f(q,1)):(q=mi(t),q.c(),f(q,1),q.m(re.parentNode,re)):q&&(Pt(),N(q,1,1,()=>{q=null}),Gt());const ei={};i[0]&128&&(ei.data=t[7]),zt.$set(ei);const be={};i[0]&128&&(be.data=t[7]),i[1]&536870912&&(be.$$scope={dirty:i,ctx:t}),Bt.$set(be)},i(t){He||(f(U),f(K.$$.fragment,t),f(nt.$$.fragment,t),f(P.$$.fragment,t),f(Z.$$.fragment,t),f(M),f(V.$$.fragment,t),f(A),f(Q.$$.fragment,t),f(rt.$$.fragment,t),f(ct.$$.fragment,t),f(F),f(Ht.$$.fragment,t),f(b),f(Mt.$$.fragment,t),f(At.$$.fragment,t),f(J),f(bt.$$.fragment,t),f(W),f(Wt.$$.fragment,t),f(q),f(zt.$$.fragment,t),f(Bt.$$.fragment,t),He=!0)},o(t){N(U),N(K.$$.fragment,t),N(nt.$$.fragment,t),N(P.$$.fragment,t),N(Z.$$.fragment,t),N(M),N(V.$$.fragment,t),N(A),N(Q.$$.fragment,t),N(rt.$$.fragment,t),N(ct.$$.fragment,t),N(F),N(Ht.$$.fragment,t),N(b),N(Mt.$$.fragment,t),N(At.$$.fragment,t),N(J),N(bt.$$.fragment,t),N(W),N(Wt.$$.fragment,t),N(q),N(zt.$$.fragment,t),N(Bt.$$.fragment,t),He=!1},d(t){t&&(s(a),s(u),s(r),s(y),s(R),s(o),s(p),s(h),s(m),s(It),s(X),s(D),s(St),s(wt),s(Ct),s(G),s(ut),s(st),s(yt),s(x),s(mt),s(Et),s(ht),s(et),s(_t),s(tt),s(Dt),s(gt),s(B),s(ot),s(it),s(Nt),s(at),s(Lt),s(I),s(me),s(ae),s(ke),s(ce),s(ge),s($t),s(Ne),s(Ut),s(we),s(ne),s(Ee),s(Te),s(oe),s($e),s(Ot),s(Oe),s(Ft),s(ve),s(se),s(pe),s(fe),s(Re),s(vt),s(Ie),s(Jt),s(Se),s(_e),s(Ce),s(le),s(ye),s(pt),s(he),s(qt),s(De),s(re),s(Le)),de.d(t),s(n),s(e),s(g),U&&U.d(t),E(K),E(nt),E(P),E(Z),M&&M.d(t),E(V,t),A&&A.d(t),E(Q),E(rt),E(ct),F&&F.d(t),E(Ht,t),b&&b.d(t),E(Mt,t),E(At,t),J&&J.d(t),E(bt,t),W&&W.d(t),E(Wt,t),q&&q.d(t),E(zt,t),E(Bt,t)}}}function Ji(c,a,n){let e,g;ni(c,hi,I=>n(42,e=I)),ni(c,si,I=>n(48,g=I));let{data:u}=a,{data:r={},customFormattingSettings:w,__db:y,inputs:R}=u;wi(si,g="080f1c92e1ca8b40aa6470b5fc0d9e36",g);let z=pi(Ci(R));Ei(z.subscribe(I=>R=I)),Ti(Si,{getCustomFormats:()=>w.customFormats||[]});const o=(I,ue)=>yi(y.query,I,{query_name:ue});Ri(o),e.params,$i(()=>!0);let p={initialData:void 0,initialError:void 0},k=j`SELECT
    COUNT(DISTINCT faiw.agent_instance_tk) as total_sessions,
    COUNT(DISTINCT dt.ticket_tk) as tickets_coordinated,
    SUM(faiw.lifecycle_event_count) as lifecycle_events,
    SUM(faiw.ticket_activity_count) as ticket_activities,
    SUM(faic.total_token_cost_usd) as total_cost,
    ROUND(AVG(faiw.instance_duration_minutes), 1) as avg_session_minutes
FROM herd.dim_agent da
LEFT JOIN herd.fact_agent_instance_work faiw
    ON da.agent_sk = faiw.agent_sk
LEFT JOIN herd.fact_agent_instance_cost faic
    ON faiw.agent_instance_tk = faic.agent_instance_tk
LEFT JOIN herd.dim_ticket dt
    ON faiw.ticket_sk = dt.ticket_sk
WHERE da.agent_code = 'mini-mao'
  AND da.is_current = true`,h=`SELECT
    COUNT(DISTINCT faiw.agent_instance_tk) as total_sessions,
    COUNT(DISTINCT dt.ticket_tk) as tickets_coordinated,
    SUM(faiw.lifecycle_event_count) as lifecycle_events,
    SUM(faiw.ticket_activity_count) as ticket_activities,
    SUM(faic.total_token_cost_usd) as total_cost,
    ROUND(AVG(faiw.instance_duration_minutes), 1) as avg_session_minutes
FROM herd.dim_agent da
LEFT JOIN herd.fact_agent_instance_work faiw
    ON da.agent_sk = faiw.agent_sk
LEFT JOIN herd.fact_agent_instance_cost faic
    ON faiw.agent_instance_tk = faic.agent_instance_tk
LEFT JOIN herd.dim_ticket dt
    ON faiw.ticket_sk = dt.ticket_sk
WHERE da.agent_code = 'mini-mao'
  AND da.is_current = true`;r.architect_overview_data&&(r.architect_overview_data instanceof Error?p.initialError=r.architect_overview_data:p.initialData=r.architect_overview_data,r.architect_overview_columns&&(p.knownColumns=r.architect_overview_columns));let m,H=!1;const It=Vt.createReactive({callback:I=>{n(0,m=I)},execFn:o},{id:"architect_overview",...p});It(h,{noResolve:k,...p}),globalThis[Symbol.for("architect_overview")]={get value(){return m}};let X={initialData:void 0,initialError:void 0},D=j`SELECT
    dd.date_actual as date,
    COUNT(DISTINCT faiw.agent_instance_tk) as sessions,
    SUM(faiw.lifecycle_event_count) as events,
    SUM(faic.total_token_cost_usd) as cost
FROM herd.dim_date dd
LEFT JOIN herd.fact_agent_instance_work faiw
    ON CAST(strftime(faiw.agent_instance_started_at, '%Y%m%d') AS INTEGER) = dd.date_sk
LEFT JOIN herd.dim_agent da
    ON faiw.agent_sk = da.agent_sk
    AND da.agent_code = 'mini-mao'
    AND da.is_current = true
LEFT JOIN herd.fact_agent_instance_cost faic
    ON faiw.agent_instance_tk = faic.agent_instance_tk
WHERE dd.date_actual >= CURRENT_DATE - INTERVAL '30 days'
  AND dd.date_actual <= CURRENT_DATE
GROUP BY dd.date_actual
ORDER BY dd.date_actual`,K=`SELECT
    dd.date_actual as date,
    COUNT(DISTINCT faiw.agent_instance_tk) as sessions,
    SUM(faiw.lifecycle_event_count) as events,
    SUM(faic.total_token_cost_usd) as cost
FROM herd.dim_date dd
LEFT JOIN herd.fact_agent_instance_work faiw
    ON CAST(strftime(faiw.agent_instance_started_at, '%Y%m%d') AS INTEGER) = dd.date_sk
LEFT JOIN herd.dim_agent da
    ON faiw.agent_sk = da.agent_sk
    AND da.agent_code = 'mini-mao'
    AND da.is_current = true
LEFT JOIN herd.fact_agent_instance_cost faic
    ON faiw.agent_instance_tk = faic.agent_instance_tk
WHERE dd.date_actual >= CURRENT_DATE - INTERVAL '30 days'
  AND dd.date_actual <= CURRENT_DATE
GROUP BY dd.date_actual
ORDER BY dd.date_actual`;r.intervention_trend_data&&(r.intervention_trend_data instanceof Error?X.initialError=r.intervention_trend_data:X.initialData=r.intervention_trend_data,r.intervention_trend_columns&&(X.knownColumns=r.intervention_trend_columns));let jt,nt=!1;const Xt=Vt.createReactive({callback:I=>{n(1,jt=I)},execFn:o},{id:"intervention_trend",...X});Xt(K,{noResolve:D,...X}),globalThis[Symbol.for("intervention_trend")]={get value(){return jt}};let P={initialData:void 0,initialError:void 0},ft=j`WITH all_work AS (
    SELECT
        COUNT(DISTINCT faiw.agent_instance_tk) as total_sessions
    FROM herd.fact_agent_instance_work faiw
),
architect_work AS (
    SELECT
        COUNT(DISTINCT faiw.agent_instance_tk) as architect_sessions
    FROM herd.fact_agent_instance_work faiw
    JOIN herd.dim_agent da
        ON faiw.agent_sk = da.agent_sk
    WHERE da.agent_code = 'mini-mao'
      AND da.is_current = true
)
SELECT
    all_work.total_sessions,
    architect_work.architect_sessions,
    ROUND(100.0 * (all_work.total_sessions - architect_work.architect_sessions) / NULLIF(all_work.total_sessions, 0), 1) as autonomy_ratio
FROM all_work, architect_work`,Z=`WITH all_work AS (
    SELECT
        COUNT(DISTINCT faiw.agent_instance_tk) as total_sessions
    FROM herd.fact_agent_instance_work faiw
),
architect_work AS (
    SELECT
        COUNT(DISTINCT faiw.agent_instance_tk) as architect_sessions
    FROM herd.fact_agent_instance_work faiw
    JOIN herd.dim_agent da
        ON faiw.agent_sk = da.agent_sk
    WHERE da.agent_code = 'mini-mao'
      AND da.is_current = true
)
SELECT
    all_work.total_sessions,
    architect_work.architect_sessions,
    ROUND(100.0 * (all_work.total_sessions - architect_work.architect_sessions) / NULLIF(all_work.total_sessions, 0), 1) as autonomy_ratio
FROM all_work, architect_work`;r.autonomy_ratio_data&&(r.autonomy_ratio_data instanceof Error?P.initialError=r.autonomy_ratio_data:P.initialData=r.autonomy_ratio_data,r.autonomy_ratio_columns&&(P.knownColumns=r.autonomy_ratio_columns));let St,wt=!1;const Ct=Vt.createReactive({callback:I=>{n(2,St=I)},execFn:o},{id:"autonomy_ratio",...P});Ct(Z,{noResolve:ft,...P}),globalThis[Symbol.for("autonomy_ratio")]={get value(){return St}};let G={initialData:void 0,initialError:void 0},dt=j`SELECT
    dt.ticket_code,
    dt.ticket_title,
    dt.ticket_current_status,
    dt.ticket_tshirt_size,
    COUNT(DISTINCT faiw.agent_instance_tk) as architect_sessions,
    SUM(faic.total_token_cost_usd) as intervention_cost,
    ROUND(SUM(faiw.instance_duration_minutes), 1) as total_minutes
FROM herd.dim_ticket dt
JOIN herd.fact_agent_instance_work faiw
    ON dt.ticket_sk = faiw.ticket_sk
JOIN herd.dim_agent da
    ON faiw.agent_sk = da.agent_sk
LEFT JOIN herd.fact_agent_instance_cost faic
    ON faiw.agent_instance_tk = faic.agent_instance_tk
WHERE da.agent_code = 'mini-mao'
  AND da.is_current = true
  AND dt.is_current = true
  AND NOT dt.is_deleted
GROUP BY dt.ticket_code, dt.ticket_title, dt.ticket_current_status, dt.ticket_tshirt_size
ORDER BY architect_sessions DESC, intervention_cost DESC
LIMIT 20`,ut=`SELECT
    dt.ticket_code,
    dt.ticket_title,
    dt.ticket_current_status,
    dt.ticket_tshirt_size,
    COUNT(DISTINCT faiw.agent_instance_tk) as architect_sessions,
    SUM(faic.total_token_cost_usd) as intervention_cost,
    ROUND(SUM(faiw.instance_duration_minutes), 1) as total_minutes
FROM herd.dim_ticket dt
JOIN herd.fact_agent_instance_work faiw
    ON dt.ticket_sk = faiw.ticket_sk
JOIN herd.dim_agent da
    ON faiw.agent_sk = da.agent_sk
LEFT JOIN herd.fact_agent_instance_cost faic
    ON faiw.agent_instance_tk = faic.agent_instance_tk
WHERE da.agent_code = 'mini-mao'
  AND da.is_current = true
  AND dt.is_current = true
  AND NOT dt.is_deleted
GROUP BY dt.ticket_code, dt.ticket_title, dt.ticket_current_status, dt.ticket_tshirt_size
ORDER BY architect_sessions DESC, intervention_cost DESC
LIMIT 20`;r.tickets_needing_intervention_data&&(r.tickets_needing_intervention_data instanceof Error?G.initialError=r.tickets_needing_intervention_data:G.initialData=r.tickets_needing_intervention_data,r.tickets_needing_intervention_columns&&(G.knownColumns=r.tickets_needing_intervention_columns));let st,te=!1;const yt=Vt.createReactive({callback:I=>{n(3,st=I)},execFn:o},{id:"tickets_needing_intervention",...G});yt(ut,{noResolve:dt,...G}),globalThis[Symbol.for("tickets_needing_intervention")]={get value(){return st}};let x={initialData:void 0,initialError:void 0},V=j`SELECT
    dt.ticket_tshirt_size,
    COUNT(DISTINCT dt.ticket_tk) as ticket_count,
    COUNT(DISTINCT faiw.agent_instance_tk) as sessions,
    SUM(faic.total_token_cost_usd) as total_cost,
    ROUND(AVG(faic.total_token_cost_usd), 4) as avg_cost_per_session
FROM herd.dim_ticket dt
JOIN herd.fact_agent_instance_work faiw
    ON dt.ticket_sk = faiw.ticket_sk
JOIN herd.dim_agent da
    ON faiw.agent_sk = da.agent_sk
LEFT JOIN herd.fact_agent_instance_cost faic
    ON faiw.agent_instance_tk = faic.agent_instance_tk
WHERE da.agent_code = 'mini-mao'
  AND da.is_current = true
  AND dt.is_current = true
  AND NOT dt.is_deleted
  AND dt.ticket_tshirt_size IS NOT NULL
GROUP BY dt.ticket_tshirt_size
ORDER BY
    CASE dt.ticket_tshirt_size
        WHEN 'XS' THEN 1
        WHEN 'S' THEN 2
        WHEN 'M' THEN 3
        WHEN 'L' THEN 4
        WHEN 'XL' THEN 5
        ELSE 6
    END`,mt=`SELECT
    dt.ticket_tshirt_size,
    COUNT(DISTINCT dt.ticket_tk) as ticket_count,
    COUNT(DISTINCT faiw.agent_instance_tk) as sessions,
    SUM(faic.total_token_cost_usd) as total_cost,
    ROUND(AVG(faic.total_token_cost_usd), 4) as avg_cost_per_session
FROM herd.dim_ticket dt
JOIN herd.fact_agent_instance_work faiw
    ON dt.ticket_sk = faiw.ticket_sk
JOIN herd.dim_agent da
    ON faiw.agent_sk = da.agent_sk
LEFT JOIN herd.fact_agent_instance_cost faic
    ON faiw.agent_instance_tk = faic.agent_instance_tk
WHERE da.agent_code = 'mini-mao'
  AND da.is_current = true
  AND dt.is_current = true
  AND NOT dt.is_deleted
  AND dt.ticket_tshirt_size IS NOT NULL
GROUP BY dt.ticket_tshirt_size
ORDER BY
    CASE dt.ticket_tshirt_size
        WHEN 'XS' THEN 1
        WHEN 'S' THEN 2
        WHEN 'M' THEN 3
        WHEN 'L' THEN 4
        WHEN 'XL' THEN 5
        ELSE 6
    END`;r.cost_by_ticket_size_data&&(r.cost_by_ticket_size_data instanceof Error?x.initialError=r.cost_by_ticket_size_data:x.initialData=r.cost_by_ticket_size_data,r.cost_by_ticket_size_columns&&(x.knownColumns=r.cost_by_ticket_size_columns));let Et,ht=!1;const et=Vt.createReactive({callback:I=>{n(4,Et=I)},execFn:o},{id:"cost_by_ticket_size",...x});et(mt,{noResolve:V,...x}),globalThis[Symbol.for("cost_by_ticket_size")]={get value(){return Et}};let kt={initialData:void 0,initialError:void 0},_t=j`SELECT
    faiw.instance_duration_minutes as duration,
    COUNT(*) as count
FROM herd.fact_agent_instance_work faiw
JOIN herd.dim_agent da
    ON faiw.agent_sk = da.agent_sk
WHERE da.agent_code = 'mini-mao'
  AND da.is_current = true
  AND faiw.instance_duration_minutes IS NOT NULL`,tt=`SELECT
    faiw.instance_duration_minutes as duration,
    COUNT(*) as count
FROM herd.fact_agent_instance_work faiw
JOIN herd.dim_agent da
    ON faiw.agent_sk = da.agent_sk
WHERE da.agent_code = 'mini-mao'
  AND da.is_current = true
  AND faiw.instance_duration_minutes IS NOT NULL`;r.session_duration_data&&(r.session_duration_data instanceof Error?kt.initialError=r.session_duration_data:kt.initialData=r.session_duration_data,r.session_duration_columns&&(kt.knownColumns=r.session_duration_columns));let ee,Dt=!1;const gt=Vt.createReactive({callback:I=>{n(5,ee=I)},execFn:o},{id:"session_duration",...kt});gt(tt,{noResolve:_t,...kt}),globalThis[Symbol.for("session_duration")]={get value(){return ee}};let B={initialData:void 0,initialError:void 0},Q=j`SELECT
    faiw.agent_instance_started_at,
    dt.ticket_code,
    dt.ticket_title,
    faiw.agent_instance_outcome,
    faiw.instance_duration_minutes,
    faic.total_token_cost_usd as cost
FROM herd.fact_agent_instance_work faiw
JOIN herd.dim_agent da
    ON faiw.agent_sk = da.agent_sk
LEFT JOIN herd.dim_ticket dt
    ON faiw.ticket_sk = dt.ticket_sk
LEFT JOIN herd.fact_agent_instance_cost faic
    ON faiw.agent_instance_tk = faic.agent_instance_tk
WHERE da.agent_code = 'mini-mao'
  AND da.is_current = true
ORDER BY faiw.agent_instance_started_at DESC
LIMIT 50`,Tt=`SELECT
    faiw.agent_instance_started_at,
    dt.ticket_code,
    dt.ticket_title,
    faiw.agent_instance_outcome,
    faiw.instance_duration_minutes,
    faic.total_token_cost_usd as cost
FROM herd.fact_agent_instance_work faiw
JOIN herd.dim_agent da
    ON faiw.agent_sk = da.agent_sk
LEFT JOIN herd.dim_ticket dt
    ON faiw.ticket_sk = dt.ticket_sk
LEFT JOIN herd.fact_agent_instance_cost faic
    ON faiw.agent_instance_tk = faic.agent_instance_tk
WHERE da.agent_code = 'mini-mao'
  AND da.is_current = true
ORDER BY faiw.agent_instance_started_at DESC
LIMIT 50`;r.recent_activity_data&&(r.recent_activity_data instanceof Error?B.initialError=r.recent_activity_data:B.initialData=r.recent_activity_data,r.recent_activity_columns&&(B.knownColumns=r.recent_activity_columns));let rt,Kt=!1;const ct=Vt.createReactive({callback:I=>{n(6,rt=I)},execFn:o},{id:"recent_activity",...B});ct(Tt,{noResolve:Q,...B}),globalThis[Symbol.for("recent_activity")]={get value(){return rt}};let ot={initialData:void 0,initialError:void 0},it=j`SELECT
    CASE
        WHEN faiw.lifecycle_event_count > 0 THEN 'Lifecycle Management'
        WHEN faiw.ticket_activity_count > 0 THEN 'Ticket Coordination'
        WHEN faiw.pr_activity_count > 0 THEN 'PR Management'
        ELSE 'Other'
    END as intervention_type,
    COUNT(DISTINCT faiw.agent_instance_tk) as session_count,
    SUM(faic.total_token_cost_usd) as total_cost
FROM herd.fact_agent_instance_work faiw
JOIN herd.dim_agent da
    ON faiw.agent_sk = da.agent_sk
LEFT JOIN herd.fact_agent_instance_cost faic
    ON faiw.agent_instance_tk = faic.agent_instance_tk
WHERE da.agent_code = 'mini-mao'
  AND da.is_current = true
GROUP BY intervention_type
ORDER BY session_count DESC`,Nt=`SELECT
    CASE
        WHEN faiw.lifecycle_event_count > 0 THEN 'Lifecycle Management'
        WHEN faiw.ticket_activity_count > 0 THEN 'Ticket Coordination'
        WHEN faiw.pr_activity_count > 0 THEN 'PR Management'
        ELSE 'Other'
    END as intervention_type,
    COUNT(DISTINCT faiw.agent_instance_tk) as session_count,
    SUM(faic.total_token_cost_usd) as total_cost
FROM herd.fact_agent_instance_work faiw
JOIN herd.dim_agent da
    ON faiw.agent_sk = da.agent_sk
LEFT JOIN herd.fact_agent_instance_cost faic
    ON faiw.agent_instance_tk = faic.agent_instance_tk
WHERE da.agent_code = 'mini-mao'
  AND da.is_current = true
GROUP BY intervention_type
ORDER BY session_count DESC`;r.intervention_types_data&&(r.intervention_types_data instanceof Error?ot.initialError=r.intervention_types_data:ot.initialData=r.intervention_types_data,r.intervention_types_columns&&(ot.knownColumns=r.intervention_types_columns));let at,ie=!1;const Lt=Vt.createReactive({callback:I=>{n(7,at=I)},execFn:o},{id:"intervention_types",...ot});return Lt(Nt,{noResolve:it,...ot}),globalThis[Symbol.for("intervention_types")]={get value(){return at}},c.$$set=I=>{"data"in I&&n(8,u=I.data)},c.$$.update=()=>{c.$$.dirty[0]&256&&n(9,{data:r={},customFormattingSettings:w,__db:y}=u,r),c.$$.dirty[0]&512&&Ii.set(Object.keys(r).length>0),c.$$.dirty[1]&2048&&e.params,c.$$.dirty[0]&15360&&(k||!H?k||(It(h,{noResolve:k,...p}),n(13,H=!0)):It(h,{noResolve:k})),c.$$.dirty[0]&245760&&(D||!nt?D||(Xt(K,{noResolve:D,...X}),n(17,nt=!0)):Xt(K,{noResolve:D})),c.$$.dirty[0]&3932160&&(ft||!wt?ft||(Ct(Z,{noResolve:ft,...P}),n(21,wt=!0)):Ct(Z,{noResolve:ft})),c.$$.dirty[0]&62914560&&(dt||!te?dt||(yt(ut,{noResolve:dt,...G}),n(25,te=!0)):yt(ut,{noResolve:dt})),c.$$.dirty[0]&1006632960&&(V||!ht?V||(et(mt,{noResolve:V,...x}),n(29,ht=!0)):et(mt,{noResolve:V})),c.$$.dirty[0]&1073741824|c.$$.dirty[1]&7&&(_t||!Dt?_t||(gt(tt,{noResolve:_t,...kt}),n(33,Dt=!0)):gt(tt,{noResolve:_t})),c.$$.dirty[1]&120&&(Q||!Kt?Q||(ct(Tt,{noResolve:Q,...B}),n(37,Kt=!0)):ct(Tt,{noResolve:Q})),c.$$.dirty[1]&1920&&(it||!ie?it||(Lt(Nt,{noResolve:it,...ot}),n(41,ie=!0)):Lt(Nt,{noResolve:it}))},n(11,k=j`SELECT
    COUNT(DISTINCT faiw.agent_instance_tk) as total_sessions,
    COUNT(DISTINCT dt.ticket_tk) as tickets_coordinated,
    SUM(faiw.lifecycle_event_count) as lifecycle_events,
    SUM(faiw.ticket_activity_count) as ticket_activities,
    SUM(faic.total_token_cost_usd) as total_cost,
    ROUND(AVG(faiw.instance_duration_minutes), 1) as avg_session_minutes
FROM herd.dim_agent da
LEFT JOIN herd.fact_agent_instance_work faiw
    ON da.agent_sk = faiw.agent_sk
LEFT JOIN herd.fact_agent_instance_cost faic
    ON faiw.agent_instance_tk = faic.agent_instance_tk
LEFT JOIN herd.dim_ticket dt
    ON faiw.ticket_sk = dt.ticket_sk
WHERE da.agent_code = 'mini-mao'
  AND da.is_current = true`),n(12,h=`SELECT
    COUNT(DISTINCT faiw.agent_instance_tk) as total_sessions,
    COUNT(DISTINCT dt.ticket_tk) as tickets_coordinated,
    SUM(faiw.lifecycle_event_count) as lifecycle_events,
    SUM(faiw.ticket_activity_count) as ticket_activities,
    SUM(faic.total_token_cost_usd) as total_cost,
    ROUND(AVG(faiw.instance_duration_minutes), 1) as avg_session_minutes
FROM herd.dim_agent da
LEFT JOIN herd.fact_agent_instance_work faiw
    ON da.agent_sk = faiw.agent_sk
LEFT JOIN herd.fact_agent_instance_cost faic
    ON faiw.agent_instance_tk = faic.agent_instance_tk
LEFT JOIN herd.dim_ticket dt
    ON faiw.ticket_sk = dt.ticket_sk
WHERE da.agent_code = 'mini-mao'
  AND da.is_current = true`),n(15,D=j`SELECT
    dd.date_actual as date,
    COUNT(DISTINCT faiw.agent_instance_tk) as sessions,
    SUM(faiw.lifecycle_event_count) as events,
    SUM(faic.total_token_cost_usd) as cost
FROM herd.dim_date dd
LEFT JOIN herd.fact_agent_instance_work faiw
    ON CAST(strftime(faiw.agent_instance_started_at, '%Y%m%d') AS INTEGER) = dd.date_sk
LEFT JOIN herd.dim_agent da
    ON faiw.agent_sk = da.agent_sk
    AND da.agent_code = 'mini-mao'
    AND da.is_current = true
LEFT JOIN herd.fact_agent_instance_cost faic
    ON faiw.agent_instance_tk = faic.agent_instance_tk
WHERE dd.date_actual >= CURRENT_DATE - INTERVAL '30 days'
  AND dd.date_actual <= CURRENT_DATE
GROUP BY dd.date_actual
ORDER BY dd.date_actual`),n(16,K=`SELECT
    dd.date_actual as date,
    COUNT(DISTINCT faiw.agent_instance_tk) as sessions,
    SUM(faiw.lifecycle_event_count) as events,
    SUM(faic.total_token_cost_usd) as cost
FROM herd.dim_date dd
LEFT JOIN herd.fact_agent_instance_work faiw
    ON CAST(strftime(faiw.agent_instance_started_at, '%Y%m%d') AS INTEGER) = dd.date_sk
LEFT JOIN herd.dim_agent da
    ON faiw.agent_sk = da.agent_sk
    AND da.agent_code = 'mini-mao'
    AND da.is_current = true
LEFT JOIN herd.fact_agent_instance_cost faic
    ON faiw.agent_instance_tk = faic.agent_instance_tk
WHERE dd.date_actual >= CURRENT_DATE - INTERVAL '30 days'
  AND dd.date_actual <= CURRENT_DATE
GROUP BY dd.date_actual
ORDER BY dd.date_actual`),n(19,ft=j`WITH all_work AS (
    SELECT
        COUNT(DISTINCT faiw.agent_instance_tk) as total_sessions
    FROM herd.fact_agent_instance_work faiw
),
architect_work AS (
    SELECT
        COUNT(DISTINCT faiw.agent_instance_tk) as architect_sessions
    FROM herd.fact_agent_instance_work faiw
    JOIN herd.dim_agent da
        ON faiw.agent_sk = da.agent_sk
    WHERE da.agent_code = 'mini-mao'
      AND da.is_current = true
)
SELECT
    all_work.total_sessions,
    architect_work.architect_sessions,
    ROUND(100.0 * (all_work.total_sessions - architect_work.architect_sessions) / NULLIF(all_work.total_sessions, 0), 1) as autonomy_ratio
FROM all_work, architect_work`),n(20,Z=`WITH all_work AS (
    SELECT
        COUNT(DISTINCT faiw.agent_instance_tk) as total_sessions
    FROM herd.fact_agent_instance_work faiw
),
architect_work AS (
    SELECT
        COUNT(DISTINCT faiw.agent_instance_tk) as architect_sessions
    FROM herd.fact_agent_instance_work faiw
    JOIN herd.dim_agent da
        ON faiw.agent_sk = da.agent_sk
    WHERE da.agent_code = 'mini-mao'
      AND da.is_current = true
)
SELECT
    all_work.total_sessions,
    architect_work.architect_sessions,
    ROUND(100.0 * (all_work.total_sessions - architect_work.architect_sessions) / NULLIF(all_work.total_sessions, 0), 1) as autonomy_ratio
FROM all_work, architect_work`),n(23,dt=j`SELECT
    dt.ticket_code,
    dt.ticket_title,
    dt.ticket_current_status,
    dt.ticket_tshirt_size,
    COUNT(DISTINCT faiw.agent_instance_tk) as architect_sessions,
    SUM(faic.total_token_cost_usd) as intervention_cost,
    ROUND(SUM(faiw.instance_duration_minutes), 1) as total_minutes
FROM herd.dim_ticket dt
JOIN herd.fact_agent_instance_work faiw
    ON dt.ticket_sk = faiw.ticket_sk
JOIN herd.dim_agent da
    ON faiw.agent_sk = da.agent_sk
LEFT JOIN herd.fact_agent_instance_cost faic
    ON faiw.agent_instance_tk = faic.agent_instance_tk
WHERE da.agent_code = 'mini-mao'
  AND da.is_current = true
  AND dt.is_current = true
  AND NOT dt.is_deleted
GROUP BY dt.ticket_code, dt.ticket_title, dt.ticket_current_status, dt.ticket_tshirt_size
ORDER BY architect_sessions DESC, intervention_cost DESC
LIMIT 20`),n(24,ut=`SELECT
    dt.ticket_code,
    dt.ticket_title,
    dt.ticket_current_status,
    dt.ticket_tshirt_size,
    COUNT(DISTINCT faiw.agent_instance_tk) as architect_sessions,
    SUM(faic.total_token_cost_usd) as intervention_cost,
    ROUND(SUM(faiw.instance_duration_minutes), 1) as total_minutes
FROM herd.dim_ticket dt
JOIN herd.fact_agent_instance_work faiw
    ON dt.ticket_sk = faiw.ticket_sk
JOIN herd.dim_agent da
    ON faiw.agent_sk = da.agent_sk
LEFT JOIN herd.fact_agent_instance_cost faic
    ON faiw.agent_instance_tk = faic.agent_instance_tk
WHERE da.agent_code = 'mini-mao'
  AND da.is_current = true
  AND dt.is_current = true
  AND NOT dt.is_deleted
GROUP BY dt.ticket_code, dt.ticket_title, dt.ticket_current_status, dt.ticket_tshirt_size
ORDER BY architect_sessions DESC, intervention_cost DESC
LIMIT 20`),n(27,V=j`SELECT
    dt.ticket_tshirt_size,
    COUNT(DISTINCT dt.ticket_tk) as ticket_count,
    COUNT(DISTINCT faiw.agent_instance_tk) as sessions,
    SUM(faic.total_token_cost_usd) as total_cost,
    ROUND(AVG(faic.total_token_cost_usd), 4) as avg_cost_per_session
FROM herd.dim_ticket dt
JOIN herd.fact_agent_instance_work faiw
    ON dt.ticket_sk = faiw.ticket_sk
JOIN herd.dim_agent da
    ON faiw.agent_sk = da.agent_sk
LEFT JOIN herd.fact_agent_instance_cost faic
    ON faiw.agent_instance_tk = faic.agent_instance_tk
WHERE da.agent_code = 'mini-mao'
  AND da.is_current = true
  AND dt.is_current = true
  AND NOT dt.is_deleted
  AND dt.ticket_tshirt_size IS NOT NULL
GROUP BY dt.ticket_tshirt_size
ORDER BY
    CASE dt.ticket_tshirt_size
        WHEN 'XS' THEN 1
        WHEN 'S' THEN 2
        WHEN 'M' THEN 3
        WHEN 'L' THEN 4
        WHEN 'XL' THEN 5
        ELSE 6
    END`),n(28,mt=`SELECT
    dt.ticket_tshirt_size,
    COUNT(DISTINCT dt.ticket_tk) as ticket_count,
    COUNT(DISTINCT faiw.agent_instance_tk) as sessions,
    SUM(faic.total_token_cost_usd) as total_cost,
    ROUND(AVG(faic.total_token_cost_usd), 4) as avg_cost_per_session
FROM herd.dim_ticket dt
JOIN herd.fact_agent_instance_work faiw
    ON dt.ticket_sk = faiw.ticket_sk
JOIN herd.dim_agent da
    ON faiw.agent_sk = da.agent_sk
LEFT JOIN herd.fact_agent_instance_cost faic
    ON faiw.agent_instance_tk = faic.agent_instance_tk
WHERE da.agent_code = 'mini-mao'
  AND da.is_current = true
  AND dt.is_current = true
  AND NOT dt.is_deleted
  AND dt.ticket_tshirt_size IS NOT NULL
GROUP BY dt.ticket_tshirt_size
ORDER BY
    CASE dt.ticket_tshirt_size
        WHEN 'XS' THEN 1
        WHEN 'S' THEN 2
        WHEN 'M' THEN 3
        WHEN 'L' THEN 4
        WHEN 'XL' THEN 5
        ELSE 6
    END`),n(31,_t=j`SELECT
    faiw.instance_duration_minutes as duration,
    COUNT(*) as count
FROM herd.fact_agent_instance_work faiw
JOIN herd.dim_agent da
    ON faiw.agent_sk = da.agent_sk
WHERE da.agent_code = 'mini-mao'
  AND da.is_current = true
  AND faiw.instance_duration_minutes IS NOT NULL`),n(32,tt=`SELECT
    faiw.instance_duration_minutes as duration,
    COUNT(*) as count
FROM herd.fact_agent_instance_work faiw
JOIN herd.dim_agent da
    ON faiw.agent_sk = da.agent_sk
WHERE da.agent_code = 'mini-mao'
  AND da.is_current = true
  AND faiw.instance_duration_minutes IS NOT NULL`),n(35,Q=j`SELECT
    faiw.agent_instance_started_at,
    dt.ticket_code,
    dt.ticket_title,
    faiw.agent_instance_outcome,
    faiw.instance_duration_minutes,
    faic.total_token_cost_usd as cost
FROM herd.fact_agent_instance_work faiw
JOIN herd.dim_agent da
    ON faiw.agent_sk = da.agent_sk
LEFT JOIN herd.dim_ticket dt
    ON faiw.ticket_sk = dt.ticket_sk
LEFT JOIN herd.fact_agent_instance_cost faic
    ON faiw.agent_instance_tk = faic.agent_instance_tk
WHERE da.agent_code = 'mini-mao'
  AND da.is_current = true
ORDER BY faiw.agent_instance_started_at DESC
LIMIT 50`),n(36,Tt=`SELECT
    faiw.agent_instance_started_at,
    dt.ticket_code,
    dt.ticket_title,
    faiw.agent_instance_outcome,
    faiw.instance_duration_minutes,
    faic.total_token_cost_usd as cost
FROM herd.fact_agent_instance_work faiw
JOIN herd.dim_agent da
    ON faiw.agent_sk = da.agent_sk
LEFT JOIN herd.dim_ticket dt
    ON faiw.ticket_sk = dt.ticket_sk
LEFT JOIN herd.fact_agent_instance_cost faic
    ON faiw.agent_instance_tk = faic.agent_instance_tk
WHERE da.agent_code = 'mini-mao'
  AND da.is_current = true
ORDER BY faiw.agent_instance_started_at DESC
LIMIT 50`),n(39,it=j`SELECT
    CASE
        WHEN faiw.lifecycle_event_count > 0 THEN 'Lifecycle Management'
        WHEN faiw.ticket_activity_count > 0 THEN 'Ticket Coordination'
        WHEN faiw.pr_activity_count > 0 THEN 'PR Management'
        ELSE 'Other'
    END as intervention_type,
    COUNT(DISTINCT faiw.agent_instance_tk) as session_count,
    SUM(faic.total_token_cost_usd) as total_cost
FROM herd.fact_agent_instance_work faiw
JOIN herd.dim_agent da
    ON faiw.agent_sk = da.agent_sk
LEFT JOIN herd.fact_agent_instance_cost faic
    ON faiw.agent_instance_tk = faic.agent_instance_tk
WHERE da.agent_code = 'mini-mao'
  AND da.is_current = true
GROUP BY intervention_type
ORDER BY session_count DESC`),n(40,Nt=`SELECT
    CASE
        WHEN faiw.lifecycle_event_count > 0 THEN 'Lifecycle Management'
        WHEN faiw.ticket_activity_count > 0 THEN 'Ticket Coordination'
        WHEN faiw.pr_activity_count > 0 THEN 'PR Management'
        ELSE 'Other'
    END as intervention_type,
    COUNT(DISTINCT faiw.agent_instance_tk) as session_count,
    SUM(faic.total_token_cost_usd) as total_cost
FROM herd.fact_agent_instance_work faiw
JOIN herd.dim_agent da
    ON faiw.agent_sk = da.agent_sk
LEFT JOIN herd.fact_agent_instance_cost faic
    ON faiw.agent_instance_tk = faic.agent_instance_tk
WHERE da.agent_code = 'mini-mao'
  AND da.is_current = true
GROUP BY intervention_type
ORDER BY session_count DESC`),[m,jt,St,st,Et,ee,rt,at,u,r,p,k,h,H,X,D,K,nt,P,ft,Z,wt,G,dt,ut,te,x,V,mt,ht,kt,_t,tt,Dt,B,Q,Tt,Kt,ot,it,Nt,ie,e]}class Xi extends Oi{constructor(a){super(),vi(this,a,Ji,bi,gi,{data:8},null,[-1,-1])}}export{Xi as component};
