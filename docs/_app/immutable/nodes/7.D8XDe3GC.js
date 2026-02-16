import{s as xe,d as i,i as n,a as Gt,b as E,c as r,h as Ke,e as I,f as be,g as P,j as He,k as f,l as D,m as Ge,n as Xe,o as Ze,p as ta,q as ea,r as ae}from"../chunks/scheduler.FpD6N7RQ.js";import{S as aa,i as _a,d as T,t as m,a as u,c as Yt,m as N,b as R,e as S,g as Bt}from"../chunks/index.CJT9_JY8.js";import{D as Ye,e as sa,s as ca,Q as qt,p as ia,C as j,r as Be,a as na}from"../chunks/VennDiagram.svelte_svelte_type_style_lang.BSmdDldM.js";import{w as oa}from"../chunks/entry.BmF8qIvy.js";import{h as Q,p as da}from"../chunks/setTrackProxy.DjIbdjlZ.js";import{p as la}from"../chunks/stores.01ULU8yI.js";import{B as ra,Q as Vt}from"../chunks/BarChart.DscctSSP.js";import{B as Kt,L as Se}from"../chunks/LineChart.CrQpACj2.js";function fa(l){return{c(){this.h()},l(_){this.h()},h(){document.title="Evidence"},m:ae,p:ae,d:ae}}function qe(l){let _,c;return _=new Vt({props:{queryID:"cost_summary",queryResult:l[0]}}),{c(){S(_.$$.fragment)},l(a){R(_.$$.fragment,a)},m(a,k){N(_,a,k),c=!0},p(a,k){const p={};k[0]&1&&(p.queryResult=a[0]),_.$set(p)},i(a){c||(u(_.$$.fragment,a),c=!0)},o(a){m(_.$$.fragment,a),c=!1},d(a){T(_,a)}}}function Ve(l){let _,c;return _=new Vt({props:{queryID:"daily_cost",queryResult:l[1]}}),{c(){S(_.$$.fragment)},l(a){R(_.$$.fragment,a)},m(a,k){N(_,a,k),c=!0},p(a,k){const p={};k[0]&2&&(p.queryResult=a[1]),_.$set(p)},i(a){c||(u(_.$$.fragment,a),c=!0)},o(a){m(_.$$.fragment,a),c=!1},d(a){T(_,a)}}}function Je(l){let _,c;return _=new Vt({props:{queryID:"cost_by_model",queryResult:l[2]}}),{c(){S(_.$$.fragment)},l(a){R(_.$$.fragment,a)},m(a,k){N(_,a,k),c=!0},p(a,k){const p={};k[0]&4&&(p.queryResult=a[2]),_.$set(p)},i(a){c||(u(_.$$.fragment,a),c=!0)},o(a){m(_.$$.fragment,a),c=!1},d(a){T(_,a)}}}function ua(l){let _,c,a,k,p,o,M,Y,$,z,C,g,d,y,L,nt,B,G;return _=new j({props:{id:"model_code",title:"Model"}}),a=new j({props:{id:"model_provider",title:"Provider"}}),p=new j({props:{id:"sessions",title:"Sessions",fmt:"num0"}}),M=new j({props:{id:"input_tokens",title:"Input",fmt:"num0"}}),$=new j({props:{id:"output_tokens",title:"Output",fmt:"num0"}}),C=new j({props:{id:"cache_read_tokens",title:"Cache Read",fmt:"num0"}}),d=new j({props:{id:"cache_create_tokens",title:"Cache Create",fmt:"num0"}}),L=new j({props:{id:"total_cost",title:"Cost",fmt:"usd2"}}),B=new j({props:{id:"avg_cost_per_session",title:"Avg/Session",fmt:"usd4"}}),{c(){S(_.$$.fragment),c=f(),S(a.$$.fragment),k=f(),S(p.$$.fragment),o=f(),S(M.$$.fragment),Y=f(),S($.$$.fragment),z=f(),S(C.$$.fragment),g=f(),S(d.$$.fragment),y=f(),S(L.$$.fragment),nt=f(),S(B.$$.fragment)},l(s){R(_.$$.fragment,s),c=r(s),R(a.$$.fragment,s),k=r(s),R(p.$$.fragment,s),o=r(s),R(M.$$.fragment,s),Y=r(s),R($.$$.fragment,s),z=r(s),R(C.$$.fragment,s),g=r(s),R(d.$$.fragment,s),y=r(s),R(L.$$.fragment,s),nt=r(s),R(B.$$.fragment,s)},m(s,O){N(_,s,O),n(s,c,O),N(a,s,O),n(s,k,O),N(p,s,O),n(s,o,O),N(M,s,O),n(s,Y,O),N($,s,O),n(s,z,O),N(C,s,O),n(s,g,O),N(d,s,O),n(s,y,O),N(L,s,O),n(s,nt,O),N(B,s,O),G=!0},p:ae,i(s){G||(u(_.$$.fragment,s),u(a.$$.fragment,s),u(p.$$.fragment,s),u(M.$$.fragment,s),u($.$$.fragment,s),u(C.$$.fragment,s),u(d.$$.fragment,s),u(L.$$.fragment,s),u(B.$$.fragment,s),G=!0)},o(s){m(_.$$.fragment,s),m(a.$$.fragment,s),m(p.$$.fragment,s),m(M.$$.fragment,s),m($.$$.fragment,s),m(C.$$.fragment,s),m(d.$$.fragment,s),m(L.$$.fragment,s),m(B.$$.fragment,s),G=!1},d(s){s&&(i(c),i(k),i(o),i(Y),i(z),i(g),i(y),i(nt)),T(_,s),T(a,s),T(p,s),T(M,s),T($,s),T(C,s),T(d,s),T(L,s),T(B,s)}}}function We(l){let _,c;return _=new Vt({props:{queryID:"cache_efficiency",queryResult:l[3]}}),{c(){S(_.$$.fragment)},l(a){R(_.$$.fragment,a)},m(a,k){N(_,a,k),c=!0},p(a,k){const p={};k[0]&8&&(p.queryResult=a[3]),_.$set(p)},i(a){c||(u(_.$$.fragment,a),c=!0)},o(a){m(_.$$.fragment,a),c=!1},d(a){T(_,a)}}}function Pe(l){let _,c;return _=new Vt({props:{queryID:"cost_per_line",queryResult:l[4]}}),{c(){S(_.$$.fragment)},l(a){R(_.$$.fragment,a)},m(a,k){N(_,a,k),c=!0},p(a,k){const p={};k[0]&16&&(p.queryResult=a[4]),_.$set(p)},i(a){c||(u(_.$$.fragment,a),c=!0)},o(a){m(_.$$.fragment,a),c=!1},d(a){T(_,a)}}}function je(l){let _,c;return _=new Vt({props:{queryID:"cost_projection",queryResult:l[5]}}),{c(){S(_.$$.fragment)},l(a){R(_.$$.fragment,a)},m(a,k){N(_,a,k),c=!0},p(a,k){const p={};k[0]&32&&(p.queryResult=a[5]),_.$set(p)},i(a){c||(u(_.$$.fragment,a),c=!0)},o(a){m(_.$$.fragment,a),c=!1},d(a){T(_,a)}}}function ze(l){let _,c;return _=new Vt({props:{queryID:"expensive_tickets",queryResult:l[6]}}),{c(){S(_.$$.fragment)},l(a){R(_.$$.fragment,a)},m(a,k){N(_,a,k),c=!0},p(a,k){const p={};k[0]&64&&(p.queryResult=a[6]),_.$set(p)},i(a){c||(u(_.$$.fragment,a),c=!0)},o(a){m(_.$$.fragment,a),c=!1},d(a){T(_,a)}}}function ma(l){let _,c,a,k,p,o,M,Y,$,z,C,g;return _=new j({props:{id:"ticket_code",title:"Ticket"}}),a=new j({props:{id:"ticket_title",title:"Title"}}),p=new j({props:{id:"ticket_tshirt_size",title:"Size"}}),M=new j({props:{id:"sessions",title:"Sessions",fmt:"num0"}}),$=new j({props:{id:"total_tokens",title:"Tokens",fmt:"num0"}}),C=new j({props:{id:"total_cost",title:"Cost",fmt:"usd2"}}),{c(){S(_.$$.fragment),c=f(),S(a.$$.fragment),k=f(),S(p.$$.fragment),o=f(),S(M.$$.fragment),Y=f(),S($.$$.fragment),z=f(),S(C.$$.fragment)},l(d){R(_.$$.fragment,d),c=r(d),R(a.$$.fragment,d),k=r(d),R(p.$$.fragment,d),o=r(d),R(M.$$.fragment,d),Y=r(d),R($.$$.fragment,d),z=r(d),R(C.$$.fragment,d)},m(d,y){N(_,d,y),n(d,c,y),N(a,d,y),n(d,k,y),N(p,d,y),n(d,o,y),N(M,d,y),n(d,Y,y),N($,d,y),n(d,z,y),N(C,d,y),g=!0},p:ae,i(d){g||(u(_.$$.fragment,d),u(a.$$.fragment,d),u(p.$$.fragment,d),u(M.$$.fragment,d),u($.$$.fragment,d),u(C.$$.fragment,d),g=!0)},o(d){m(_.$$.fragment,d),m(a.$$.fragment,d),m(p.$$.fragment,d),m(M.$$.fragment,d),m($.$$.fragment,d),m(C.$$.fragment,d),g=!1},d(d){d&&(i(c),i(k),i(o),i(Y),i(z)),T(_,d),T(a,d),T(p,d),T(M,d),T($,d),T(C,d)}}}function ka(l){let _,c,a,k,p,o,M='<a href="#token-economics">Token Economics</a>',Y,$,z='<p class="markdown">&quot;Every brushstroke has a price.&quot; — Track costs, efficiency, and spending patterns.</p>',C,g,d='<a href="#cost-summary">Cost Summary</a>',y,L,nt='<strong class="markdown">Question</strong>: What is the total cost of agent operations?',B,G,s,O,bt,tt,Ht,q,et,ot,Ot,x,Jt='<a href="#daily-cost-trend-last-60-days">Daily Cost Trend (Last 60 Days)</a>',at,V,Ct='<strong class="markdown">Question</strong>: How are costs trending over time?',Ut,rt,_t,st,K,ft,X,Wt='<a href="#cost-by-model">Cost by Model</a>',$t,J,ut='<strong class="markdown">Question</strong>: Which models consume the most budget?',mt,kt,ct,gt,W,it,dt,yt,Z,Pt='<a href="#cache-efficiency">Cache Efficiency</a>',U,pt,Oe='<strong class="markdown">Question</strong>: How effectively are we using prompt caching to reduce costs?',_e,jt,It,se,Xt,ce,Et,Ce='<a href="#cost-per-line-of-code">Cost per Line of Code</a>',ie,Dt,Ue='<strong class="markdown">Question</strong>: How much does each line of delivered code cost?',ne,zt,Mt,oe,Zt,de,Tt,$e='<a href="#cost-projection-30-days">Cost Projection (30 Days)</a>',le,Lt,ge='<strong class="markdown">Question</strong>: What are projected costs for the coming month and year?',re,Qt,lt,ht,Ee,vt,Te,At,fe,te,ue,Nt,ye='<a href="#most-expensive-tickets">Most Expensive Tickets</a>',me,wt,Ie='<strong class="markdown">Question</strong>: Which tickets consumed the most resources?',ke,xt,Ft,pe;function Qe(t,e){return fa}let ee=Qe()(l),h=l[0]&&qe(l);O=new Kt({props:{data:l[0],value:"total_cost",title:"Total Cost",fmt:"usd"}}),tt=new Kt({props:{data:l[0],value:"cost_per_ticket",title:"Cost per Ticket",fmt:"usd2"}}),q=new Kt({props:{data:l[0],value:"cost_per_session",title:"Cost per Session",fmt:"usd4"}});let v=l[1]&&Ve(l);_t=new Se({props:{data:l[1],x:"date",y:"daily_cost",y2:"cumulative_cost",yAxisTitle:"Daily Cost (USD)",y2AxisTitle:"Cumulative Cost (USD)",title:"Daily & Cumulative Costs",series:[{name:"Daily Cost",color:"#EF4444"},{name:"Cumulative",color:"#8B5CF6"}]}});let A=l[2]&&Je(l);ct=new ra({props:{data:l[2],x:"model_code",y:"total_cost",title:"Total Cost by Model",xAxisTitle:"Model",yAxisTitle:"Cost (USD)",series:[{name:"Cost",color:"#EF4444"}]}}),W=new Ye({props:{data:l[2],$$slots:{default:[ua]},$$scope:{ctx:l}}});let w=l[3]&&We(l);It=new Se({props:{data:l[3],x:"date",y:"cache_ratio",yAxisTitle:"Cache Ratio (%)",title:"Cache Utilization Trend",series:[{name:"Cache Ratio",color:"#10B981"}]}});let F=l[4]&&Pe(l);Mt=new Se({props:{data:l[4],x:"date",y:"cost_per_line",yAxisTitle:"Cost per Line (USD)",title:"Cost per Line Trend",series:[{name:"Cost/Line",color:"#F59E0B"}]}});let b=l[5]&&je(l);ht=new Kt({props:{data:l[5],value:"avg_daily_cost",title:"Avg Daily Cost",fmt:"usd2"}}),vt=new Kt({props:{data:l[5],value:"projected_monthly_cost",title:"Projected Monthly",fmt:"usd"}}),At=new Kt({props:{data:l[5],value:"projected_annual_cost",title:"Projected Annual",fmt:"usd"}});let H=l[6]&&ze(l);return Ft=new Ye({props:{data:l[6],search:"true",$$slots:{default:[ma]},$$scope:{ctx:l}}}),{c(){_=f(),ee.c(),c=D("meta"),a=D("meta"),k=be(),p=f(),o=D("h1"),o.innerHTML=M,Y=f(),$=D("blockquote"),$.innerHTML=z,C=f(),g=D("h2"),g.innerHTML=d,y=f(),L=D("p"),L.innerHTML=nt,B=f(),h&&h.c(),G=f(),s=D("div"),S(O.$$.fragment),bt=f(),S(tt.$$.fragment),Ht=f(),S(q.$$.fragment),et=f(),ot=D("hr"),Ot=f(),x=D("h2"),x.innerHTML=Jt,at=f(),V=D("p"),V.innerHTML=Ct,Ut=f(),v&&v.c(),rt=f(),S(_t.$$.fragment),st=f(),K=D("hr"),ft=f(),X=D("h2"),X.innerHTML=Wt,$t=f(),J=D("p"),J.innerHTML=ut,mt=f(),A&&A.c(),kt=f(),S(ct.$$.fragment),gt=f(),S(W.$$.fragment),it=f(),dt=D("hr"),yt=f(),Z=D("h2"),Z.innerHTML=Pt,U=f(),pt=D("p"),pt.innerHTML=Oe,_e=f(),w&&w.c(),jt=f(),S(It.$$.fragment),se=f(),Xt=D("hr"),ce=f(),Et=D("h2"),Et.innerHTML=Ce,ie=f(),Dt=D("p"),Dt.innerHTML=Ue,ne=f(),F&&F.c(),zt=f(),S(Mt.$$.fragment),oe=f(),Zt=D("hr"),de=f(),Tt=D("h2"),Tt.innerHTML=$e,le=f(),Lt=D("p"),Lt.innerHTML=ge,re=f(),b&&b.c(),Qt=f(),lt=D("div"),S(ht.$$.fragment),Ee=f(),S(vt.$$.fragment),Te=f(),S(At.$$.fragment),fe=f(),te=D("hr"),ue=f(),Nt=D("h2"),Nt.innerHTML=ye,me=f(),wt=D("p"),wt.innerHTML=Ie,ke=f(),H&&H.c(),xt=f(),S(Ft.$$.fragment),this.h()},l(t){_=r(t);const e=Ke("svelte-2igo1p",document.head);ee.l(e),c=I(e,"META",{name:!0,content:!0}),a=I(e,"META",{name:!0,content:!0}),k=be(),e.forEach(i),p=r(t),o=I(t,"H1",{class:!0,id:!0,"data-svelte-h":!0}),P(o)!=="svelte-8y873d"&&(o.innerHTML=M),Y=r(t),$=I(t,"BLOCKQUOTE",{class:!0,"data-svelte-h":!0}),P($)!=="svelte-qtxnf2"&&($.innerHTML=z),C=r(t),g=I(t,"H2",{class:!0,id:!0,"data-svelte-h":!0}),P(g)!=="svelte-letygj"&&(g.innerHTML=d),y=r(t),L=I(t,"P",{class:!0,"data-svelte-h":!0}),P(L)!=="svelte-syqfl8"&&(L.innerHTML=nt),B=r(t),h&&h.l(t),G=r(t),s=I(t,"DIV",{class:!0});var Rt=He(s);R(O.$$.fragment,Rt),bt=r(Rt),R(tt.$$.fragment,Rt),Ht=r(Rt),R(q.$$.fragment,Rt),Rt.forEach(i),et=r(t),ot=I(t,"HR",{class:!0}),Ot=r(t),x=I(t,"H2",{class:!0,id:!0,"data-svelte-h":!0}),P(x)!=="svelte-lybb0t"&&(x.innerHTML=Jt),at=r(t),V=I(t,"P",{class:!0,"data-svelte-h":!0}),P(V)!=="svelte-9vp3zm"&&(V.innerHTML=Ct),Ut=r(t),v&&v.l(t),rt=r(t),R(_t.$$.fragment,t),st=r(t),K=I(t,"HR",{class:!0}),ft=r(t),X=I(t,"H2",{class:!0,id:!0,"data-svelte-h":!0}),P(X)!=="svelte-1t5eqjh"&&(X.innerHTML=Wt),$t=r(t),J=I(t,"P",{class:!0,"data-svelte-h":!0}),P(J)!=="svelte-arsz02"&&(J.innerHTML=ut),mt=r(t),A&&A.l(t),kt=r(t),R(ct.$$.fragment,t),gt=r(t),R(W.$$.fragment,t),it=r(t),dt=I(t,"HR",{class:!0}),yt=r(t),Z=I(t,"H2",{class:!0,id:!0,"data-svelte-h":!0}),P(Z)!=="svelte-ukszx5"&&(Z.innerHTML=Pt),U=r(t),pt=I(t,"P",{class:!0,"data-svelte-h":!0}),P(pt)!=="svelte-1y60zp2"&&(pt.innerHTML=Oe),_e=r(t),w&&w.l(t),jt=r(t),R(It.$$.fragment,t),se=r(t),Xt=I(t,"HR",{class:!0}),ce=r(t),Et=I(t,"H2",{class:!0,id:!0,"data-svelte-h":!0}),P(Et)!=="svelte-1bbbdia"&&(Et.innerHTML=Ce),ie=r(t),Dt=I(t,"P",{class:!0,"data-svelte-h":!0}),P(Dt)!=="svelte-12qt526"&&(Dt.innerHTML=Ue),ne=r(t),F&&F.l(t),zt=r(t),R(Mt.$$.fragment,t),oe=r(t),Zt=I(t,"HR",{class:!0}),de=r(t),Tt=I(t,"H2",{class:!0,id:!0,"data-svelte-h":!0}),P(Tt)!=="svelte-1qmkoxl"&&(Tt.innerHTML=$e),le=r(t),Lt=I(t,"P",{class:!0,"data-svelte-h":!0}),P(Lt)!=="svelte-na24a9"&&(Lt.innerHTML=ge),re=r(t),b&&b.l(t),Qt=r(t),lt=I(t,"DIV",{class:!0});var St=He(lt);R(ht.$$.fragment,St),Ee=r(St),R(vt.$$.fragment,St),Te=r(St),R(At.$$.fragment,St),St.forEach(i),fe=r(t),te=I(t,"HR",{class:!0}),ue=r(t),Nt=I(t,"H2",{class:!0,id:!0,"data-svelte-h":!0}),P(Nt)!=="svelte-12zu8e9"&&(Nt.innerHTML=ye),me=r(t),wt=I(t,"P",{class:!0,"data-svelte-h":!0}),P(wt)!=="svelte-11lk4vz"&&(wt.innerHTML=Ie),ke=r(t),H&&H.l(t),xt=r(t),R(Ft.$$.fragment,t),this.h()},h(){E(c,"name","twitter:card"),E(c,"content","summary_large_image"),E(a,"name","twitter:site"),E(a,"content","@evidence_dev"),E(o,"class","markdown"),E(o,"id","token-economics"),E($,"class","markdown"),E(g,"class","markdown"),E(g,"id","cost-summary"),E(L,"class","markdown"),E(s,"class","grid grid-cols-2 md:grid-cols-3 gap-4 mb-6"),E(ot,"class","markdown"),E(x,"class","markdown"),E(x,"id","daily-cost-trend-last-60-days"),E(V,"class","markdown"),E(K,"class","markdown"),E(X,"class","markdown"),E(X,"id","cost-by-model"),E(J,"class","markdown"),E(dt,"class","markdown"),E(Z,"class","markdown"),E(Z,"id","cache-efficiency"),E(pt,"class","markdown"),E(Xt,"class","markdown"),E(Et,"class","markdown"),E(Et,"id","cost-per-line-of-code"),E(Dt,"class","markdown"),E(Zt,"class","markdown"),E(Tt,"class","markdown"),E(Tt,"id","cost-projection-30-days"),E(Lt,"class","markdown"),E(lt,"class","grid grid-cols-1 md:grid-cols-3 gap-4 mb-6"),E(te,"class","markdown"),E(Nt,"class","markdown"),E(Nt,"id","most-expensive-tickets"),E(wt,"class","markdown")},m(t,e){n(t,_,e),ee.m(document.head,null),Gt(document.head,c),Gt(document.head,a),Gt(document.head,k),n(t,p,e),n(t,o,e),n(t,Y,e),n(t,$,e),n(t,C,e),n(t,g,e),n(t,y,e),n(t,L,e),n(t,B,e),h&&h.m(t,e),n(t,G,e),n(t,s,e),N(O,s,null),Gt(s,bt),N(tt,s,null),Gt(s,Ht),N(q,s,null),n(t,et,e),n(t,ot,e),n(t,Ot,e),n(t,x,e),n(t,at,e),n(t,V,e),n(t,Ut,e),v&&v.m(t,e),n(t,rt,e),N(_t,t,e),n(t,st,e),n(t,K,e),n(t,ft,e),n(t,X,e),n(t,$t,e),n(t,J,e),n(t,mt,e),A&&A.m(t,e),n(t,kt,e),N(ct,t,e),n(t,gt,e),N(W,t,e),n(t,it,e),n(t,dt,e),n(t,yt,e),n(t,Z,e),n(t,U,e),n(t,pt,e),n(t,_e,e),w&&w.m(t,e),n(t,jt,e),N(It,t,e),n(t,se,e),n(t,Xt,e),n(t,ce,e),n(t,Et,e),n(t,ie,e),n(t,Dt,e),n(t,ne,e),F&&F.m(t,e),n(t,zt,e),N(Mt,t,e),n(t,oe,e),n(t,Zt,e),n(t,de,e),n(t,Tt,e),n(t,le,e),n(t,Lt,e),n(t,re,e),b&&b.m(t,e),n(t,Qt,e),n(t,lt,e),N(ht,lt,null),Gt(lt,Ee),N(vt,lt,null),Gt(lt,Te),N(At,lt,null),n(t,fe,e),n(t,te,e),n(t,ue,e),n(t,Nt,e),n(t,me,e),n(t,wt,e),n(t,ke,e),H&&H.m(t,e),n(t,xt,e),N(Ft,t,e),pe=!0},p(t,e){ee.p(t,e),t[0]?h?(h.p(t,e),e[0]&1&&u(h,1)):(h=qe(t),h.c(),u(h,1),h.m(G.parentNode,G)):h&&(Bt(),m(h,1,1,()=>{h=null}),Yt());const Rt={};e[0]&1&&(Rt.data=t[0]),O.$set(Rt);const St={};e[0]&1&&(St.data=t[0]),tt.$set(St);const De={};e[0]&1&&(De.data=t[0]),q.$set(De),t[1]?v?(v.p(t,e),e[0]&2&&u(v,1)):(v=Ve(t),v.c(),u(v,1),v.m(rt.parentNode,rt)):v&&(Bt(),m(v,1,1,()=>{v=null}),Yt());const Me={};e[0]&2&&(Me.data=t[1]),_t.$set(Me),t[2]?A?(A.p(t,e),e[0]&4&&u(A,1)):(A=Je(t),A.c(),u(A,1),A.m(kt.parentNode,kt)):A&&(Bt(),m(A,1,1,()=>{A=null}),Yt());const Le={};e[0]&4&&(Le.data=t[2]),ct.$set(Le);const Ne={};e[0]&4&&(Ne.data=t[2]),e[1]&8388608&&(Ne.$$scope={dirty:e,ctx:t}),W.$set(Ne),t[3]?w?(w.p(t,e),e[0]&8&&u(w,1)):(w=We(t),w.c(),u(w,1),w.m(jt.parentNode,jt)):w&&(Bt(),m(w,1,1,()=>{w=null}),Yt());const he={};e[0]&8&&(he.data=t[3]),It.$set(he),t[4]?F?(F.p(t,e),e[0]&16&&u(F,1)):(F=Pe(t),F.c(),u(F,1),F.m(zt.parentNode,zt)):F&&(Bt(),m(F,1,1,()=>{F=null}),Yt());const ve={};e[0]&16&&(ve.data=t[4]),Mt.$set(ve),t[5]?b?(b.p(t,e),e[0]&32&&u(b,1)):(b=je(t),b.c(),u(b,1),b.m(Qt.parentNode,Qt)):b&&(Bt(),m(b,1,1,()=>{b=null}),Yt());const Ae={};e[0]&32&&(Ae.data=t[5]),ht.$set(Ae);const we={};e[0]&32&&(we.data=t[5]),vt.$set(we);const Fe={};e[0]&32&&(Fe.data=t[5]),At.$set(Fe),t[6]?H?(H.p(t,e),e[0]&64&&u(H,1)):(H=ze(t),H.c(),u(H,1),H.m(xt.parentNode,xt)):H&&(Bt(),m(H,1,1,()=>{H=null}),Yt());const Re={};e[0]&64&&(Re.data=t[6]),e[1]&8388608&&(Re.$$scope={dirty:e,ctx:t}),Ft.$set(Re)},i(t){pe||(u(h),u(O.$$.fragment,t),u(tt.$$.fragment,t),u(q.$$.fragment,t),u(v),u(_t.$$.fragment,t),u(A),u(ct.$$.fragment,t),u(W.$$.fragment,t),u(w),u(It.$$.fragment,t),u(F),u(Mt.$$.fragment,t),u(b),u(ht.$$.fragment,t),u(vt.$$.fragment,t),u(At.$$.fragment,t),u(H),u(Ft.$$.fragment,t),pe=!0)},o(t){m(h),m(O.$$.fragment,t),m(tt.$$.fragment,t),m(q.$$.fragment,t),m(v),m(_t.$$.fragment,t),m(A),m(ct.$$.fragment,t),m(W.$$.fragment,t),m(w),m(It.$$.fragment,t),m(F),m(Mt.$$.fragment,t),m(b),m(ht.$$.fragment,t),m(vt.$$.fragment,t),m(At.$$.fragment,t),m(H),m(Ft.$$.fragment,t),pe=!1},d(t){t&&(i(_),i(p),i(o),i(Y),i($),i(C),i(g),i(y),i(L),i(B),i(G),i(s),i(et),i(ot),i(Ot),i(x),i(at),i(V),i(Ut),i(rt),i(st),i(K),i(ft),i(X),i($t),i(J),i(mt),i(kt),i(gt),i(it),i(dt),i(yt),i(Z),i(U),i(pt),i(_e),i(jt),i(se),i(Xt),i(ce),i(Et),i(ie),i(Dt),i(ne),i(zt),i(oe),i(Zt),i(de),i(Tt),i(le),i(Lt),i(re),i(Qt),i(lt),i(fe),i(te),i(ue),i(Nt),i(me),i(wt),i(ke),i(xt)),ee.d(t),i(c),i(a),i(k),h&&h.d(t),T(O),T(tt),T(q),v&&v.d(t),T(_t,t),A&&A.d(t),T(ct,t),T(W,t),w&&w.d(t),T(It,t),F&&F.d(t),T(Mt,t),b&&b.d(t),T(ht),T(vt),T(At),H&&H.d(t),T(Ft,t)}}}function pa(l,_,c){let a,k;Ge(l,la,U=>c(37,a=U)),Ge(l,Be,U=>c(43,k=U));let{data:p}=_,{data:o={},customFormattingSettings:M,__db:Y,inputs:$}=p;Xe(Be,k="150fd900496e66c1b06f60ca5629b52a",k);let z=sa(oa($));Ze(z.subscribe(U=>$=U)),ta(na,{getCustomFormats:()=>M.customFormats||[]});const C=(U,pt)=>da(Y.query,U,{query_name:pt});ca(C),a.params,ea(()=>!0);let g={initialData:void 0,initialError:void 0},d=Q`SELECT
    SUM(faic.total_token_cost_usd) as total_cost,
    SUM(faic.total_token_input_count + faic.total_token_output_count) as total_tokens,
    COUNT(DISTINCT faic.agent_instance_tk) as total_sessions,
    COUNT(DISTINCT dt.ticket_tk) as tickets_worked,
    ROUND(SUM(faic.total_token_cost_usd) / NULLIF(COUNT(DISTINCT dt.ticket_tk), 0), 2) as cost_per_ticket,
    ROUND(SUM(faic.total_token_cost_usd) / NULLIF(COUNT(DISTINCT faic.agent_instance_tk), 0), 4) as cost_per_session
FROM herd.fact_agent_instance_cost faic
LEFT JOIN herd.dim_ticket dt
    ON faic.ticket_sk = dt.ticket_sk`,y=`SELECT
    SUM(faic.total_token_cost_usd) as total_cost,
    SUM(faic.total_token_input_count + faic.total_token_output_count) as total_tokens,
    COUNT(DISTINCT faic.agent_instance_tk) as total_sessions,
    COUNT(DISTINCT dt.ticket_tk) as tickets_worked,
    ROUND(SUM(faic.total_token_cost_usd) / NULLIF(COUNT(DISTINCT dt.ticket_tk), 0), 2) as cost_per_ticket,
    ROUND(SUM(faic.total_token_cost_usd) / NULLIF(COUNT(DISTINCT faic.agent_instance_tk), 0), 4) as cost_per_session
FROM herd.fact_agent_instance_cost faic
LEFT JOIN herd.dim_ticket dt
    ON faic.ticket_sk = dt.ticket_sk`;o.cost_summary_data&&(o.cost_summary_data instanceof Error?g.initialError=o.cost_summary_data:g.initialData=o.cost_summary_data,o.cost_summary_columns&&(g.knownColumns=o.cost_summary_columns));let L,nt=!1;const B=qt.createReactive({callback:U=>{c(0,L=U)},execFn:C},{id:"cost_summary",...g});B(y,{noResolve:d,...g}),globalThis[Symbol.for("cost_summary")]={get value(){return L}};let G={initialData:void 0,initialError:void 0},s=Q`SELECT
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
WHERE dd.date_actual >= CURRENT_DATE - INTERVAL '60 days'
  AND dd.date_actual <= CURRENT_DATE
GROUP BY dd.date_actual
ORDER BY dd.date_actual`,O=`SELECT
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
WHERE dd.date_actual >= CURRENT_DATE - INTERVAL '60 days'
  AND dd.date_actual <= CURRENT_DATE
GROUP BY dd.date_actual
ORDER BY dd.date_actual`;o.daily_cost_data&&(o.daily_cost_data instanceof Error?G.initialError=o.daily_cost_data:G.initialData=o.daily_cost_data,o.daily_cost_columns&&(G.knownColumns=o.daily_cost_columns));let bt,tt=!1;const Ht=qt.createReactive({callback:U=>{c(1,bt=U)},execFn:C},{id:"daily_cost",...G});Ht(O,{noResolve:s,...G}),globalThis[Symbol.for("daily_cost")]={get value(){return bt}};let q={initialData:void 0,initialError:void 0},et=Q`SELECT
    dm.model_code,
    dm.model_provider,
    COUNT(DISTINCT faic.agent_instance_tk) as sessions,
    SUM(faic.total_token_input_count) as input_tokens,
    SUM(faic.total_token_output_count) as output_tokens,
    SUM(faic.total_token_cache_read_count) as cache_read_tokens,
    SUM(faic.total_token_cache_create_count) as cache_create_tokens,
    SUM(faic.total_token_cost_usd) as total_cost,
    ROUND(AVG(faic.total_token_cost_usd), 4) as avg_cost_per_session
FROM herd.fact_agent_instance_cost faic
JOIN herd.dim_model dm
    ON faic.model_sk = dm.model_sk
GROUP BY dm.model_code, dm.model_provider
ORDER BY total_cost DESC`,ot=`SELECT
    dm.model_code,
    dm.model_provider,
    COUNT(DISTINCT faic.agent_instance_tk) as sessions,
    SUM(faic.total_token_input_count) as input_tokens,
    SUM(faic.total_token_output_count) as output_tokens,
    SUM(faic.total_token_cache_read_count) as cache_read_tokens,
    SUM(faic.total_token_cache_create_count) as cache_create_tokens,
    SUM(faic.total_token_cost_usd) as total_cost,
    ROUND(AVG(faic.total_token_cost_usd), 4) as avg_cost_per_session
FROM herd.fact_agent_instance_cost faic
JOIN herd.dim_model dm
    ON faic.model_sk = dm.model_sk
GROUP BY dm.model_code, dm.model_provider
ORDER BY total_cost DESC`;o.cost_by_model_data&&(o.cost_by_model_data instanceof Error?q.initialError=o.cost_by_model_data:q.initialData=o.cost_by_model_data,o.cost_by_model_columns&&(q.knownColumns=o.cost_by_model_columns));let Ot,x=!1;const Jt=qt.createReactive({callback:U=>{c(2,Ot=U)},execFn:C},{id:"cost_by_model",...q});Jt(ot,{noResolve:et,...q}),globalThis[Symbol.for("cost_by_model")]={get value(){return Ot}};let at={initialData:void 0,initialError:void 0},V=Q`SELECT
    dd.date_actual as date,
    SUM(faic.total_token_input_count + faic.total_token_output_count) as direct_tokens,
    SUM(faic.total_token_cache_read_count + faic.total_token_cache_create_count) as cache_tokens,
    ROUND(100.0 * SUM(faic.total_token_cache_read_count + faic.total_token_cache_create_count) /
        NULLIF(SUM(faic.total_token_input_count + faic.total_token_output_count + faic.total_token_cache_read_count + faic.total_token_cache_create_count), 0), 1) as cache_ratio
FROM herd.dim_date dd
LEFT JOIN herd.fact_agent_instance_work faiw
    ON CAST(strftime(faiw.agent_instance_started_at, '%Y%m%d') AS INTEGER) = dd.date_sk
LEFT JOIN herd.fact_agent_instance_cost faic
    ON faiw.agent_instance_tk = faic.agent_instance_tk
WHERE dd.date_actual >= CURRENT_DATE - INTERVAL '30 days'
  AND dd.date_actual <= CURRENT_DATE
GROUP BY dd.date_actual
ORDER BY dd.date_actual`,Ct=`SELECT
    dd.date_actual as date,
    SUM(faic.total_token_input_count + faic.total_token_output_count) as direct_tokens,
    SUM(faic.total_token_cache_read_count + faic.total_token_cache_create_count) as cache_tokens,
    ROUND(100.0 * SUM(faic.total_token_cache_read_count + faic.total_token_cache_create_count) /
        NULLIF(SUM(faic.total_token_input_count + faic.total_token_output_count + faic.total_token_cache_read_count + faic.total_token_cache_create_count), 0), 1) as cache_ratio
FROM herd.dim_date dd
LEFT JOIN herd.fact_agent_instance_work faiw
    ON CAST(strftime(faiw.agent_instance_started_at, '%Y%m%d') AS INTEGER) = dd.date_sk
LEFT JOIN herd.fact_agent_instance_cost faic
    ON faiw.agent_instance_tk = faic.agent_instance_tk
WHERE dd.date_actual >= CURRENT_DATE - INTERVAL '30 days'
  AND dd.date_actual <= CURRENT_DATE
GROUP BY dd.date_actual
ORDER BY dd.date_actual`;o.cache_efficiency_data&&(o.cache_efficiency_data instanceof Error?at.initialError=o.cache_efficiency_data:at.initialData=o.cache_efficiency_data,o.cache_efficiency_columns&&(at.knownColumns=o.cache_efficiency_columns));let Ut,rt=!1;const _t=qt.createReactive({callback:U=>{c(3,Ut=U)},execFn:C},{id:"cache_efficiency",...at});_t(Ct,{noResolve:V,...at}),globalThis[Symbol.for("cache_efficiency")]={get value(){return Ut}};let st={initialData:void 0,initialError:void 0},K=Q`SELECT
    dd.date_actual as date,
    SUM(fpd.pr_lines_added + fpd.pr_lines_deleted) as total_lines,
    SUM(faic.total_token_cost_usd) as total_cost,
    CASE
        WHEN SUM(fpd.pr_lines_added + fpd.pr_lines_deleted) > 0
        THEN SUM(faic.total_token_cost_usd) / SUM(fpd.pr_lines_added + fpd.pr_lines_deleted)
        ELSE 0
    END as cost_per_line
FROM herd.dim_date dd
LEFT JOIN herd.fact_pr_delivery fpd
    ON CAST(strftime(fpd.pr_merged_at, '%Y%m%d') AS INTEGER) = dd.date_sk
LEFT JOIN herd.fact_agent_instance_cost faic
    ON fpd.agent_sk = faic.agent_sk
WHERE dd.date_actual >= CURRENT_DATE - INTERVAL '30 days'
  AND dd.date_actual <= CURRENT_DATE
  AND fpd.pr_merged_at IS NOT NULL
GROUP BY dd.date_actual
HAVING SUM(fpd.pr_lines_added + fpd.pr_lines_deleted) > 0
ORDER BY dd.date_actual`,ft=`SELECT
    dd.date_actual as date,
    SUM(fpd.pr_lines_added + fpd.pr_lines_deleted) as total_lines,
    SUM(faic.total_token_cost_usd) as total_cost,
    CASE
        WHEN SUM(fpd.pr_lines_added + fpd.pr_lines_deleted) > 0
        THEN SUM(faic.total_token_cost_usd) / SUM(fpd.pr_lines_added + fpd.pr_lines_deleted)
        ELSE 0
    END as cost_per_line
FROM herd.dim_date dd
LEFT JOIN herd.fact_pr_delivery fpd
    ON CAST(strftime(fpd.pr_merged_at, '%Y%m%d') AS INTEGER) = dd.date_sk
LEFT JOIN herd.fact_agent_instance_cost faic
    ON fpd.agent_sk = faic.agent_sk
WHERE dd.date_actual >= CURRENT_DATE - INTERVAL '30 days'
  AND dd.date_actual <= CURRENT_DATE
  AND fpd.pr_merged_at IS NOT NULL
GROUP BY dd.date_actual
HAVING SUM(fpd.pr_lines_added + fpd.pr_lines_deleted) > 0
ORDER BY dd.date_actual`;o.cost_per_line_data&&(o.cost_per_line_data instanceof Error?st.initialError=o.cost_per_line_data:st.initialData=o.cost_per_line_data,o.cost_per_line_columns&&(st.knownColumns=o.cost_per_line_columns));let X,Wt=!1;const $t=qt.createReactive({callback:U=>{c(4,X=U)},execFn:C},{id:"cost_per_line",...st});$t(ft,{noResolve:K,...st}),globalThis[Symbol.for("cost_per_line")]={get value(){return X}};let J={initialData:void 0,initialError:void 0},ut=Q`WITH recent_costs AS (
    SELECT
        dd.date_actual,
        COALESCE(SUM(faic.total_token_cost_usd), 0) as daily_cost
    FROM herd.dim_date dd
    LEFT JOIN herd.fact_agent_instance_work faiw
        ON CAST(strftime(faiw.agent_instance_started_at, '%Y%m%d') AS INTEGER) = dd.date_sk
    LEFT JOIN herd.fact_agent_instance_cost faic
        ON faiw.agent_instance_tk = faic.agent_instance_tk
    WHERE dd.date_actual >= CURRENT_DATE - INTERVAL '30 days'
      AND dd.date_actual < CURRENT_DATE
    GROUP BY dd.date_actual
)
SELECT
    AVG(daily_cost) as avg_daily_cost,
    AVG(daily_cost) * 30 as projected_monthly_cost,
    AVG(daily_cost) * 365 as projected_annual_cost
FROM recent_costs`,mt=`WITH recent_costs AS (
    SELECT
        dd.date_actual,
        COALESCE(SUM(faic.total_token_cost_usd), 0) as daily_cost
    FROM herd.dim_date dd
    LEFT JOIN herd.fact_agent_instance_work faiw
        ON CAST(strftime(faiw.agent_instance_started_at, '%Y%m%d') AS INTEGER) = dd.date_sk
    LEFT JOIN herd.fact_agent_instance_cost faic
        ON faiw.agent_instance_tk = faic.agent_instance_tk
    WHERE dd.date_actual >= CURRENT_DATE - INTERVAL '30 days'
      AND dd.date_actual < CURRENT_DATE
    GROUP BY dd.date_actual
)
SELECT
    AVG(daily_cost) as avg_daily_cost,
    AVG(daily_cost) * 30 as projected_monthly_cost,
    AVG(daily_cost) * 365 as projected_annual_cost
FROM recent_costs`;o.cost_projection_data&&(o.cost_projection_data instanceof Error?J.initialError=o.cost_projection_data:J.initialData=o.cost_projection_data,o.cost_projection_columns&&(J.knownColumns=o.cost_projection_columns));let kt,ct=!1;const gt=qt.createReactive({callback:U=>{c(5,kt=U)},execFn:C},{id:"cost_projection",...J});gt(mt,{noResolve:ut,...J}),globalThis[Symbol.for("cost_projection")]={get value(){return kt}};let W={initialData:void 0,initialError:void 0},it=Q`SELECT
    dt.ticket_code,
    dt.ticket_title,
    dt.ticket_tshirt_size,
    COUNT(DISTINCT faic.agent_instance_tk) as sessions,
    SUM(faic.total_token_input_count + faic.total_token_output_count) as total_tokens,
    SUM(faic.total_token_cost_usd) as total_cost
FROM herd.dim_ticket dt
JOIN herd.fact_agent_instance_cost faic
    ON dt.ticket_sk = faic.ticket_sk
WHERE dt.is_current = true
  AND NOT dt.is_deleted
GROUP BY dt.ticket_code, dt.ticket_title, dt.ticket_tshirt_size
ORDER BY total_cost DESC
LIMIT 20`,dt=`SELECT
    dt.ticket_code,
    dt.ticket_title,
    dt.ticket_tshirt_size,
    COUNT(DISTINCT faic.agent_instance_tk) as sessions,
    SUM(faic.total_token_input_count + faic.total_token_output_count) as total_tokens,
    SUM(faic.total_token_cost_usd) as total_cost
FROM herd.dim_ticket dt
JOIN herd.fact_agent_instance_cost faic
    ON dt.ticket_sk = faic.ticket_sk
WHERE dt.is_current = true
  AND NOT dt.is_deleted
GROUP BY dt.ticket_code, dt.ticket_title, dt.ticket_tshirt_size
ORDER BY total_cost DESC
LIMIT 20`;o.expensive_tickets_data&&(o.expensive_tickets_data instanceof Error?W.initialError=o.expensive_tickets_data:W.initialData=o.expensive_tickets_data,o.expensive_tickets_columns&&(W.knownColumns=o.expensive_tickets_columns));let yt,Z=!1;const Pt=qt.createReactive({callback:U=>{c(6,yt=U)},execFn:C},{id:"expensive_tickets",...W});return Pt(dt,{noResolve:it,...W}),globalThis[Symbol.for("expensive_tickets")]={get value(){return yt}},l.$$set=U=>{"data"in U&&c(7,p=U.data)},l.$$.update=()=>{l.$$.dirty[0]&128&&c(8,{data:o={},customFormattingSettings:M,__db:Y}=p,o),l.$$.dirty[0]&256&&ia.set(Object.keys(o).length>0),l.$$.dirty[1]&64&&a.params,l.$$.dirty[0]&7680&&(d||!nt?d||(B(y,{noResolve:d,...g}),c(12,nt=!0)):B(y,{noResolve:d})),l.$$.dirty[0]&122880&&(s||!tt?s||(Ht(O,{noResolve:s,...G}),c(16,tt=!0)):Ht(O,{noResolve:s})),l.$$.dirty[0]&1966080&&(et||!x?et||(Jt(ot,{noResolve:et,...q}),c(20,x=!0)):Jt(ot,{noResolve:et})),l.$$.dirty[0]&31457280&&(V||!rt?V||(_t(Ct,{noResolve:V,...at}),c(24,rt=!0)):_t(Ct,{noResolve:V})),l.$$.dirty[0]&503316480&&(K||!Wt?K||($t(ft,{noResolve:K,...st}),c(28,Wt=!0)):$t(ft,{noResolve:K})),l.$$.dirty[0]&1610612736|l.$$.dirty[1]&3&&(ut||!ct?ut||(gt(mt,{noResolve:ut,...J}),c(32,ct=!0)):gt(mt,{noResolve:ut})),l.$$.dirty[1]&60&&(it||!Z?it||(Pt(dt,{noResolve:it,...W}),c(36,Z=!0)):Pt(dt,{noResolve:it}))},c(10,d=Q`SELECT
    SUM(faic.total_token_cost_usd) as total_cost,
    SUM(faic.total_token_input_count + faic.total_token_output_count) as total_tokens,
    COUNT(DISTINCT faic.agent_instance_tk) as total_sessions,
    COUNT(DISTINCT dt.ticket_tk) as tickets_worked,
    ROUND(SUM(faic.total_token_cost_usd) / NULLIF(COUNT(DISTINCT dt.ticket_tk), 0), 2) as cost_per_ticket,
    ROUND(SUM(faic.total_token_cost_usd) / NULLIF(COUNT(DISTINCT faic.agent_instance_tk), 0), 4) as cost_per_session
FROM herd.fact_agent_instance_cost faic
LEFT JOIN herd.dim_ticket dt
    ON faic.ticket_sk = dt.ticket_sk`),c(11,y=`SELECT
    SUM(faic.total_token_cost_usd) as total_cost,
    SUM(faic.total_token_input_count + faic.total_token_output_count) as total_tokens,
    COUNT(DISTINCT faic.agent_instance_tk) as total_sessions,
    COUNT(DISTINCT dt.ticket_tk) as tickets_worked,
    ROUND(SUM(faic.total_token_cost_usd) / NULLIF(COUNT(DISTINCT dt.ticket_tk), 0), 2) as cost_per_ticket,
    ROUND(SUM(faic.total_token_cost_usd) / NULLIF(COUNT(DISTINCT faic.agent_instance_tk), 0), 4) as cost_per_session
FROM herd.fact_agent_instance_cost faic
LEFT JOIN herd.dim_ticket dt
    ON faic.ticket_sk = dt.ticket_sk`),c(14,s=Q`SELECT
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
WHERE dd.date_actual >= CURRENT_DATE - INTERVAL '60 days'
  AND dd.date_actual <= CURRENT_DATE
GROUP BY dd.date_actual
ORDER BY dd.date_actual`),c(15,O=`SELECT
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
WHERE dd.date_actual >= CURRENT_DATE - INTERVAL '60 days'
  AND dd.date_actual <= CURRENT_DATE
GROUP BY dd.date_actual
ORDER BY dd.date_actual`),c(18,et=Q`SELECT
    dm.model_code,
    dm.model_provider,
    COUNT(DISTINCT faic.agent_instance_tk) as sessions,
    SUM(faic.total_token_input_count) as input_tokens,
    SUM(faic.total_token_output_count) as output_tokens,
    SUM(faic.total_token_cache_read_count) as cache_read_tokens,
    SUM(faic.total_token_cache_create_count) as cache_create_tokens,
    SUM(faic.total_token_cost_usd) as total_cost,
    ROUND(AVG(faic.total_token_cost_usd), 4) as avg_cost_per_session
FROM herd.fact_agent_instance_cost faic
JOIN herd.dim_model dm
    ON faic.model_sk = dm.model_sk
GROUP BY dm.model_code, dm.model_provider
ORDER BY total_cost DESC`),c(19,ot=`SELECT
    dm.model_code,
    dm.model_provider,
    COUNT(DISTINCT faic.agent_instance_tk) as sessions,
    SUM(faic.total_token_input_count) as input_tokens,
    SUM(faic.total_token_output_count) as output_tokens,
    SUM(faic.total_token_cache_read_count) as cache_read_tokens,
    SUM(faic.total_token_cache_create_count) as cache_create_tokens,
    SUM(faic.total_token_cost_usd) as total_cost,
    ROUND(AVG(faic.total_token_cost_usd), 4) as avg_cost_per_session
FROM herd.fact_agent_instance_cost faic
JOIN herd.dim_model dm
    ON faic.model_sk = dm.model_sk
GROUP BY dm.model_code, dm.model_provider
ORDER BY total_cost DESC`),c(22,V=Q`SELECT
    dd.date_actual as date,
    SUM(faic.total_token_input_count + faic.total_token_output_count) as direct_tokens,
    SUM(faic.total_token_cache_read_count + faic.total_token_cache_create_count) as cache_tokens,
    ROUND(100.0 * SUM(faic.total_token_cache_read_count + faic.total_token_cache_create_count) /
        NULLIF(SUM(faic.total_token_input_count + faic.total_token_output_count + faic.total_token_cache_read_count + faic.total_token_cache_create_count), 0), 1) as cache_ratio
FROM herd.dim_date dd
LEFT JOIN herd.fact_agent_instance_work faiw
    ON CAST(strftime(faiw.agent_instance_started_at, '%Y%m%d') AS INTEGER) = dd.date_sk
LEFT JOIN herd.fact_agent_instance_cost faic
    ON faiw.agent_instance_tk = faic.agent_instance_tk
WHERE dd.date_actual >= CURRENT_DATE - INTERVAL '30 days'
  AND dd.date_actual <= CURRENT_DATE
GROUP BY dd.date_actual
ORDER BY dd.date_actual`),c(23,Ct=`SELECT
    dd.date_actual as date,
    SUM(faic.total_token_input_count + faic.total_token_output_count) as direct_tokens,
    SUM(faic.total_token_cache_read_count + faic.total_token_cache_create_count) as cache_tokens,
    ROUND(100.0 * SUM(faic.total_token_cache_read_count + faic.total_token_cache_create_count) /
        NULLIF(SUM(faic.total_token_input_count + faic.total_token_output_count + faic.total_token_cache_read_count + faic.total_token_cache_create_count), 0), 1) as cache_ratio
FROM herd.dim_date dd
LEFT JOIN herd.fact_agent_instance_work faiw
    ON CAST(strftime(faiw.agent_instance_started_at, '%Y%m%d') AS INTEGER) = dd.date_sk
LEFT JOIN herd.fact_agent_instance_cost faic
    ON faiw.agent_instance_tk = faic.agent_instance_tk
WHERE dd.date_actual >= CURRENT_DATE - INTERVAL '30 days'
  AND dd.date_actual <= CURRENT_DATE
GROUP BY dd.date_actual
ORDER BY dd.date_actual`),c(26,K=Q`SELECT
    dd.date_actual as date,
    SUM(fpd.pr_lines_added + fpd.pr_lines_deleted) as total_lines,
    SUM(faic.total_token_cost_usd) as total_cost,
    CASE
        WHEN SUM(fpd.pr_lines_added + fpd.pr_lines_deleted) > 0
        THEN SUM(faic.total_token_cost_usd) / SUM(fpd.pr_lines_added + fpd.pr_lines_deleted)
        ELSE 0
    END as cost_per_line
FROM herd.dim_date dd
LEFT JOIN herd.fact_pr_delivery fpd
    ON CAST(strftime(fpd.pr_merged_at, '%Y%m%d') AS INTEGER) = dd.date_sk
LEFT JOIN herd.fact_agent_instance_cost faic
    ON fpd.agent_sk = faic.agent_sk
WHERE dd.date_actual >= CURRENT_DATE - INTERVAL '30 days'
  AND dd.date_actual <= CURRENT_DATE
  AND fpd.pr_merged_at IS NOT NULL
GROUP BY dd.date_actual
HAVING SUM(fpd.pr_lines_added + fpd.pr_lines_deleted) > 0
ORDER BY dd.date_actual`),c(27,ft=`SELECT
    dd.date_actual as date,
    SUM(fpd.pr_lines_added + fpd.pr_lines_deleted) as total_lines,
    SUM(faic.total_token_cost_usd) as total_cost,
    CASE
        WHEN SUM(fpd.pr_lines_added + fpd.pr_lines_deleted) > 0
        THEN SUM(faic.total_token_cost_usd) / SUM(fpd.pr_lines_added + fpd.pr_lines_deleted)
        ELSE 0
    END as cost_per_line
FROM herd.dim_date dd
LEFT JOIN herd.fact_pr_delivery fpd
    ON CAST(strftime(fpd.pr_merged_at, '%Y%m%d') AS INTEGER) = dd.date_sk
LEFT JOIN herd.fact_agent_instance_cost faic
    ON fpd.agent_sk = faic.agent_sk
WHERE dd.date_actual >= CURRENT_DATE - INTERVAL '30 days'
  AND dd.date_actual <= CURRENT_DATE
  AND fpd.pr_merged_at IS NOT NULL
GROUP BY dd.date_actual
HAVING SUM(fpd.pr_lines_added + fpd.pr_lines_deleted) > 0
ORDER BY dd.date_actual`),c(30,ut=Q`WITH recent_costs AS (
    SELECT
        dd.date_actual,
        COALESCE(SUM(faic.total_token_cost_usd), 0) as daily_cost
    FROM herd.dim_date dd
    LEFT JOIN herd.fact_agent_instance_work faiw
        ON CAST(strftime(faiw.agent_instance_started_at, '%Y%m%d') AS INTEGER) = dd.date_sk
    LEFT JOIN herd.fact_agent_instance_cost faic
        ON faiw.agent_instance_tk = faic.agent_instance_tk
    WHERE dd.date_actual >= CURRENT_DATE - INTERVAL '30 days'
      AND dd.date_actual < CURRENT_DATE
    GROUP BY dd.date_actual
)
SELECT
    AVG(daily_cost) as avg_daily_cost,
    AVG(daily_cost) * 30 as projected_monthly_cost,
    AVG(daily_cost) * 365 as projected_annual_cost
FROM recent_costs`),c(31,mt=`WITH recent_costs AS (
    SELECT
        dd.date_actual,
        COALESCE(SUM(faic.total_token_cost_usd), 0) as daily_cost
    FROM herd.dim_date dd
    LEFT JOIN herd.fact_agent_instance_work faiw
        ON CAST(strftime(faiw.agent_instance_started_at, '%Y%m%d') AS INTEGER) = dd.date_sk
    LEFT JOIN herd.fact_agent_instance_cost faic
        ON faiw.agent_instance_tk = faic.agent_instance_tk
    WHERE dd.date_actual >= CURRENT_DATE - INTERVAL '30 days'
      AND dd.date_actual < CURRENT_DATE
    GROUP BY dd.date_actual
)
SELECT
    AVG(daily_cost) as avg_daily_cost,
    AVG(daily_cost) * 30 as projected_monthly_cost,
    AVG(daily_cost) * 365 as projected_annual_cost
FROM recent_costs`),c(34,it=Q`SELECT
    dt.ticket_code,
    dt.ticket_title,
    dt.ticket_tshirt_size,
    COUNT(DISTINCT faic.agent_instance_tk) as sessions,
    SUM(faic.total_token_input_count + faic.total_token_output_count) as total_tokens,
    SUM(faic.total_token_cost_usd) as total_cost
FROM herd.dim_ticket dt
JOIN herd.fact_agent_instance_cost faic
    ON dt.ticket_sk = faic.ticket_sk
WHERE dt.is_current = true
  AND NOT dt.is_deleted
GROUP BY dt.ticket_code, dt.ticket_title, dt.ticket_tshirt_size
ORDER BY total_cost DESC
LIMIT 20`),c(35,dt=`SELECT
    dt.ticket_code,
    dt.ticket_title,
    dt.ticket_tshirt_size,
    COUNT(DISTINCT faic.agent_instance_tk) as sessions,
    SUM(faic.total_token_input_count + faic.total_token_output_count) as total_tokens,
    SUM(faic.total_token_cost_usd) as total_cost
FROM herd.dim_ticket dt
JOIN herd.fact_agent_instance_cost faic
    ON dt.ticket_sk = faic.ticket_sk
WHERE dt.is_current = true
  AND NOT dt.is_deleted
GROUP BY dt.ticket_code, dt.ticket_title, dt.ticket_tshirt_size
ORDER BY total_cost DESC
LIMIT 20`),[L,bt,Ot,Ut,X,kt,yt,p,o,g,d,y,nt,G,s,O,tt,q,et,ot,x,at,V,Ct,rt,st,K,ft,Wt,J,ut,mt,ct,W,it,dt,Z,a]}class ga extends aa{constructor(_){super(),_a(this,_,pa,ka,xe,{data:7},null,[-1,-1])}}export{ga as component};
