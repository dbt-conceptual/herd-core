import{s as Ke,d as l,i as n,a as Ft,b as D,c as o,h as Ze,e as y,f as Fe,g as q,j as xe,k,l as L,m as Pe,n as ti,o as ei,p as ii,q as si,r as wt}from"../chunks/scheduler.FpD6N7RQ.js";import{S as _i,i as ai,d as T,t as E,a as d,c as Pt,m as p,b as $,e as O,g as Bt}from"../chunks/index.CJT9_JY8.js";import{D as ee,e as ri,s as li,Q as zt,p as ni,C as A,r as Be,a as ci}from"../chunks/VennDiagram.svelte_svelte_type_style_lang.BSmdDldM.js";import{w as ui}from"../chunks/entry.BmF8qIvy.js";import{h as V,p as fi}from"../chunks/setTrackProxy.DjIbdjlZ.js";import{p as di}from"../chunks/stores.01ULU8yI.js";import{B as ze,Q as Yt}from"../chunks/BarChart.DscctSSP.js";import{B as ie,L as mi}from"../chunks/LineChart.CrQpACj2.js";function oi(u){return{c(){this.h()},l(s){this.h()},h(){document.title="Evidence"},m:wt,p:wt,d:wt}}function Ye(u){let s,a;return s=new Yt({props:{queryID:"pipeline_summary",queryResult:u[0]}}),{c(){O(s.$$.fragment)},l(e){$(s.$$.fragment,e)},m(e,N){p(s,e,N),a=!0},p(e,N){const f={};N[0]&1&&(f.queryResult=e[0]),s.$set(f)},i(e){a||(d(s.$$.fragment,e),a=!0)},o(e){E(s.$$.fragment,e),a=!1},d(e){T(s,e)}}}function qe(u){let s,a;return s=new Yt({props:{queryID:"time_in_status",queryResult:u[1]}}),{c(){O(s.$$.fragment)},l(e){$(s.$$.fragment,e)},m(e,N){p(s,e,N),a=!0},p(e,N){const f={};N[0]&2&&(f.queryResult=e[1]),s.$set(f)},i(e){a||(d(s.$$.fragment,e),a=!0)},o(e){E(s.$$.fragment,e),a=!1},d(e){T(s,e)}}}function ki(u){let s,a,e,N,f,c,R,I,r,C,v,S;return s=new A({props:{id:"previous_status",title:"Status"}}),e=new A({props:{id:"transition_count",title:"Transitions",fmt:"num0"}}),f=new A({props:{id:"avg_minutes",title:"Avg",fmt:"num1"}}),R=new A({props:{id:"median_minutes",title:"Median",fmt:"num1"}}),r=new A({props:{id:"min_minutes",title:"Min",fmt:"num1"}}),v=new A({props:{id:"max_minutes",title:"Max",fmt:"num1"}}),{c(){O(s.$$.fragment),a=k(),O(e.$$.fragment),N=k(),O(f.$$.fragment),c=k(),O(R.$$.fragment),I=k(),O(r.$$.fragment),C=k(),O(v.$$.fragment)},l(_){$(s.$$.fragment,_),a=o(_),$(e.$$.fragment,_),N=o(_),$(f.$$.fragment,_),c=o(_),$(R.$$.fragment,_),I=o(_),$(r.$$.fragment,_),C=o(_),$(v.$$.fragment,_)},m(_,g){p(s,_,g),n(_,a,g),p(e,_,g),n(_,N,g),p(f,_,g),n(_,c,g),p(R,_,g),n(_,I,g),p(r,_,g),n(_,C,g),p(v,_,g),S=!0},p:wt,i(_){S||(d(s.$$.fragment,_),d(e.$$.fragment,_),d(f.$$.fragment,_),d(R.$$.fragment,_),d(r.$$.fragment,_),d(v.$$.fragment,_),S=!0)},o(_){E(s.$$.fragment,_),E(e.$$.fragment,_),E(f.$$.fragment,_),E(R.$$.fragment,_),E(r.$$.fragment,_),E(v.$$.fragment,_),S=!1},d(_){_&&(l(a),l(N),l(c),l(I),l(C)),T(s,_),T(e,_),T(f,_),T(R,_),T(r,_),T(v,_)}}}function Ge(u){let s,a;return s=new Yt({props:{queryID:"handoff_latency",queryResult:u[2]}}),{c(){O(s.$$.fragment)},l(e){$(s.$$.fragment,e)},m(e,N){p(s,e,N),a=!0},p(e,N){const f={};N[0]&4&&(f.queryResult=e[2]),s.$set(f)},i(e){a||(d(s.$$.fragment,e),a=!0)},o(e){E(s.$$.fragment,e),a=!1},d(e){T(s,e)}}}function Ni(u){let s,a,e,N,f,c,R,I;return s=new A({props:{id:"transition",title:"Transition"}}),e=new A({props:{id:"count",title:"Count",fmt:"num0"}}),f=new A({props:{id:"avg_hours",title:"Avg Hours",fmt:"num1"}}),R=new A({props:{id:"median_hours",title:"Median Hours",fmt:"num1"}}),{c(){O(s.$$.fragment),a=k(),O(e.$$.fragment),N=k(),O(f.$$.fragment),c=k(),O(R.$$.fragment)},l(r){$(s.$$.fragment,r),a=o(r),$(e.$$.fragment,r),N=o(r),$(f.$$.fragment,r),c=o(r),$(R.$$.fragment,r)},m(r,C){p(s,r,C),n(r,a,C),p(e,r,C),n(r,N,C),p(f,r,C),n(r,c,C),p(R,r,C),I=!0},p:wt,i(r){I||(d(s.$$.fragment,r),d(e.$$.fragment,r),d(f.$$.fragment,r),d(R.$$.fragment,r),I=!0)},o(r){E(s.$$.fragment,r),E(e.$$.fragment,r),E(f.$$.fragment,r),E(R.$$.fragment,r),I=!1},d(r){r&&(l(a),l(N),l(c)),T(s,r),T(e,r),T(f,r),T(R,r)}}}function Xe(u){let s,a;return s=new Yt({props:{queryID:"blocked_tickets",queryResult:u[3]}}),{c(){O(s.$$.fragment)},l(e){$(s.$$.fragment,e)},m(e,N){p(s,e,N),a=!0},p(e,N){const f={};N[0]&8&&(f.queryResult=e[3]),s.$set(f)},i(e){a||(d(s.$$.fragment,e),a=!0)},o(e){E(s.$$.fragment,e),a=!1},d(e){T(s,e)}}}function Ei(u){let s,a,e,N,f,c,R,I,r,C,v,S;return s=new A({props:{id:"ticket_code",title:"Ticket"}}),e=new A({props:{id:"ticket_title",title:"Title"}}),f=new A({props:{id:"ticket_current_status",title:"Status"}}),R=new A({props:{id:"blocker_ticket_code",title:"Blocked By"}}),r=new A({props:{id:"assigned_agent",title:"Agent"}}),v=new A({props:{id:"blocked_since",title:"Since",fmt:"datetime"}}),{c(){O(s.$$.fragment),a=k(),O(e.$$.fragment),N=k(),O(f.$$.fragment),c=k(),O(R.$$.fragment),I=k(),O(r.$$.fragment),C=k(),O(v.$$.fragment)},l(_){$(s.$$.fragment,_),a=o(_),$(e.$$.fragment,_),N=o(_),$(f.$$.fragment,_),c=o(_),$(R.$$.fragment,_),I=o(_),$(r.$$.fragment,_),C=o(_),$(v.$$.fragment,_)},m(_,g){p(s,_,g),n(_,a,g),p(e,_,g),n(_,N,g),p(f,_,g),n(_,c,g),p(R,_,g),n(_,I,g),p(r,_,g),n(_,C,g),p(v,_,g),S=!0},p:wt,i(_){S||(d(s.$$.fragment,_),d(e.$$.fragment,_),d(f.$$.fragment,_),d(R.$$.fragment,_),d(r.$$.fragment,_),d(v.$$.fragment,_),S=!0)},o(_){E(s.$$.fragment,_),E(e.$$.fragment,_),E(f.$$.fragment,_),E(R.$$.fragment,_),E(r.$$.fragment,_),E(v.$$.fragment,_),S=!1},d(_){_&&(l(a),l(N),l(c),l(I),l(C)),T(s,_),T(e,_),T(f,_),T(R,_),T(r,_),T(v,_)}}}function Je(u){let s,a;return s=new Yt({props:{queryID:"ticket_flow",queryResult:u[4]}}),{c(){O(s.$$.fragment)},l(e){$(s.$$.fragment,e)},m(e,N){p(s,e,N),a=!0},p(e,N){const f={};N[0]&16&&(f.queryResult=e[4]),s.$set(f)},i(e){a||(d(s.$$.fragment,e),a=!0)},o(e){E(s.$$.fragment,e),a=!1},d(e){T(s,e)}}}function Qe(u){let s,a;return s=new Yt({props:{queryID:"cycle_time_by_size",queryResult:u[5]}}),{c(){O(s.$$.fragment)},l(e){$(s.$$.fragment,e)},m(e,N){p(s,e,N),a=!0},p(e,N){const f={};N[0]&32&&(f.queryResult=e[5]),s.$set(f)},i(e){a||(d(s.$$.fragment,e),a=!0)},o(e){E(s.$$.fragment,e),a=!1},d(e){T(s,e)}}}function Ti(u){let s,a,e,N,f,c,R,I;return s=new A({props:{id:"ticket_tshirt_size",title:"Size"}}),e=new A({props:{id:"ticket_count",title:"Tickets",fmt:"num0"}}),f=new A({props:{id:"avg_cycle_hours",title:"Avg Hours",fmt:"num1"}}),R=new A({props:{id:"median_cycle_hours",title:"Median Hours",fmt:"num1"}}),{c(){O(s.$$.fragment),a=k(),O(e.$$.fragment),N=k(),O(f.$$.fragment),c=k(),O(R.$$.fragment)},l(r){$(s.$$.fragment,r),a=o(r),$(e.$$.fragment,r),N=o(r),$(f.$$.fragment,r),c=o(r),$(R.$$.fragment,r)},m(r,C){p(s,r,C),n(r,a,C),p(e,r,C),n(r,N,C),p(f,r,C),n(r,c,C),p(R,r,C),I=!0},p:wt,i(r){I||(d(s.$$.fragment,r),d(e.$$.fragment,r),d(f.$$.fragment,r),d(R.$$.fragment,r),I=!0)},o(r){E(s.$$.fragment,r),E(e.$$.fragment,r),E(f.$$.fragment,r),E(R.$$.fragment,r),I=!1},d(r){r&&(l(a),l(N),l(c)),T(s,r),T(e,r),T(f,r),T(R,r)}}}function Ve(u){let s,a;return s=new Yt({props:{queryID:"longest_in_progress",queryResult:u[6]}}),{c(){O(s.$$.fragment)},l(e){$(s.$$.fragment,e)},m(e,N){p(s,e,N),a=!0},p(e,N){const f={};N[0]&64&&(f.queryResult=e[6]),s.$set(f)},i(e){a||(d(s.$$.fragment,e),a=!0)},o(e){E(s.$$.fragment,e),a=!1},d(e){T(s,e)}}}function pi(u){let s,a,e,N,f,c,R,I,r,C,v,S,_,g;return s=new A({props:{id:"ticket_code",title:"Ticket"}}),e=new A({props:{id:"ticket_title",title:"Title"}}),f=new A({props:{id:"ticket_current_status",title:"Status"}}),R=new A({props:{id:"ticket_tshirt_size",title:"Size"}}),r=new A({props:{id:"assigned_agent",title:"Agent"}}),v=new A({props:{id:"started_at",title:"Started",fmt:"datetime"}}),_=new A({props:{id:"hours_in_progress",title:"Hours",fmt:"num1"}}),{c(){O(s.$$.fragment),a=k(),O(e.$$.fragment),N=k(),O(f.$$.fragment),c=k(),O(R.$$.fragment),I=k(),O(r.$$.fragment),C=k(),O(v.$$.fragment),S=k(),O(_.$$.fragment)},l(m){$(s.$$.fragment,m),a=o(m),$(e.$$.fragment,m),N=o(m),$(f.$$.fragment,m),c=o(m),$(R.$$.fragment,m),I=o(m),$(r.$$.fragment,m),C=o(m),$(v.$$.fragment,m),S=o(m),$(_.$$.fragment,m)},m(m,U){p(s,m,U),n(m,a,U),p(e,m,U),n(m,N,U),p(f,m,U),n(m,c,U),p(R,m,U),n(m,I,U),p(r,m,U),n(m,C,U),p(v,m,U),n(m,S,U),p(_,m,U),g=!0},p:wt,i(m){g||(d(s.$$.fragment,m),d(e.$$.fragment,m),d(f.$$.fragment,m),d(R.$$.fragment,m),d(r.$$.fragment,m),d(v.$$.fragment,m),d(_.$$.fragment,m),g=!0)},o(m){E(s.$$.fragment,m),E(e.$$.fragment,m),E(f.$$.fragment,m),E(R.$$.fragment,m),E(r.$$.fragment,m),E(v.$$.fragment,m),E(_.$$.fragment,m),g=!1},d(m){m&&(l(a),l(N),l(c),l(I),l(C),l(S)),T(s,m),T(e,m),T(f,m),T(R,m),T(r,m),T(v,m),T(_,m)}}}function $i(u){let s,a,e,N,f,c,R='<a href="#pipeline-efficiency">Pipeline Efficiency</a>',I,r,C='<p class="markdown">&quot;The canvas flows from idea to masterpiece.&quot; — Track ticket flow, bottlenecks, and cycle time.</p>',v,S,_='<a href="#pipeline-summary">Pipeline Summary</a>',g,m,U='<strong class="markdown">Question</strong>: What is the current state of work in progress?',$t,X,b,J,Mt,tt,ht,z,ut,Q,Wt,et,Ot,j,it,G,qt='<a href="#time-in-status-average-minutes">Time in Status (Average Minutes)</a>',Rt,st,ft='<strong class="markdown">Question</strong>: Which statuses are bottlenecks in our workflow?',_t,at,rt,gt,lt,nt,K,dt,Z,Gt='<a href="#handoff-latency">Handoff Latency</a>',vt,Y,mt='<strong class="markdown">Question</strong>: Where do handoffs between states cause the most delay?',ot,kt,ct,Ct,H,Xt,Nt,ve='<a href="#blocked-tickets">Blocked Tickets</a>',se,Dt,Ce='<strong class="markdown">Question</strong>: What tickets are currently blocked and by what?',_e,Jt,It,ae,Kt,re,Et,De='<a href="#ticket-flow-last-30-days">Ticket Flow (Last 30 Days)</a>',le,St,Ie='<strong class="markdown">Question</strong>: How many tickets are created, started, and completed each day?',ne,Qt,Ht,ce,Zt,ue,Tt,Se='<a href="#cycle-time-by-ticket-size">Cycle Time by Ticket Size</a>',fe,At,He='<strong class="markdown">Question</strong>: Does ticket size correlate with cycle time as expected?',de,Vt,yt,me,Lt,oe,xt,ke,pt,Ae='<a href="#longest-in-progress-tickets">Longest In-Progress Tickets</a>',Ne,bt,ye='<strong class="markdown">Question</strong>: Which in-progress tickets have been active the longest?',Ee,jt,Ut,Te;function je(t,i){return oi}let te=je()(u),w=u[0]&&Ye(u);J=new ie({props:{data:u[0],value:"active_tickets",title:"Active Tickets"}}),tt=new ie({props:{data:u[0],value:"backlog_tickets",title:"Backlog"}}),z=new ie({props:{data:u[0],value:"in_progress_tickets",title:"In Progress"}}),Q=new ie({props:{data:u[0],value:"review_tickets",title:"In Review"}}),et=new ie({props:{data:u[0],value:"blocked_tickets",title:"Blocked"}});let M=u[1]&&qe(u);rt=new ze({props:{data:u[1],x:"previous_status",y:"avg_minutes",title:"Average Time in Status (Minutes)",xAxisTitle:"Status",yAxisTitle:"Minutes",series:[{name:"Avg Time",color:"#F59E0B"}]}}),lt=new ee({props:{data:u[1],$$slots:{default:[ki]},$$scope:{ctx:u}}});let h=u[2]&&Ge(u);ct=new ee({props:{data:u[2],search:"true",$$slots:{default:[Ni]},$$scope:{ctx:u}}});let W=u[3]&&Xe(u);It=new ee({props:{data:u[3],search:"true",$$slots:{default:[Ei]},$$scope:{ctx:u}}});let F=u[4]&&Je(u);Ht=new mi({props:{data:u[4],x:"date",y:["created","started","completed"],yAxisTitle:"Ticket Count",title:"Ticket Flow (Created, Started, Completed)",series:[{name:"Created",color:"#3B82F6"},{name:"Started",color:"#F59E0B"},{name:"Completed",color:"#10B981"}]}});let P=u[5]&&Qe(u);yt=new ze({props:{data:u[5],x:"ticket_tshirt_size",y:"avg_cycle_hours",title:"Avg Cycle Time by Ticket Size",xAxisTitle:"Size",yAxisTitle:"Hours",series:[{name:"Avg Hours",color:"#8B5CF6"}]}}),Lt=new ee({props:{data:u[5],$$slots:{default:[Ti]},$$scope:{ctx:u}}});let B=u[6]&&Ve(u);return Ut=new ee({props:{data:u[6],search:"true",$$slots:{default:[pi]},$$scope:{ctx:u}}}),{c(){s=k(),te.c(),a=L("meta"),e=L("meta"),N=Fe(),f=k(),c=L("h1"),c.innerHTML=R,I=k(),r=L("blockquote"),r.innerHTML=C,v=k(),S=L("h2"),S.innerHTML=_,g=k(),m=L("p"),m.innerHTML=U,$t=k(),w&&w.c(),X=k(),b=L("div"),O(J.$$.fragment),Mt=k(),O(tt.$$.fragment),ht=k(),O(z.$$.fragment),ut=k(),O(Q.$$.fragment),Wt=k(),O(et.$$.fragment),Ot=k(),j=L("hr"),it=k(),G=L("h2"),G.innerHTML=qt,Rt=k(),st=L("p"),st.innerHTML=ft,_t=k(),M&&M.c(),at=k(),O(rt.$$.fragment),gt=k(),O(lt.$$.fragment),nt=k(),K=L("hr"),dt=k(),Z=L("h2"),Z.innerHTML=Gt,vt=k(),Y=L("p"),Y.innerHTML=mt,ot=k(),h&&h.c(),kt=k(),O(ct.$$.fragment),Ct=k(),H=L("hr"),Xt=k(),Nt=L("h2"),Nt.innerHTML=ve,se=k(),Dt=L("p"),Dt.innerHTML=Ce,_e=k(),W&&W.c(),Jt=k(),O(It.$$.fragment),ae=k(),Kt=L("hr"),re=k(),Et=L("h2"),Et.innerHTML=De,le=k(),St=L("p"),St.innerHTML=Ie,ne=k(),F&&F.c(),Qt=k(),O(Ht.$$.fragment),ce=k(),Zt=L("hr"),ue=k(),Tt=L("h2"),Tt.innerHTML=Se,fe=k(),At=L("p"),At.innerHTML=He,de=k(),P&&P.c(),Vt=k(),O(yt.$$.fragment),me=k(),O(Lt.$$.fragment),oe=k(),xt=L("hr"),ke=k(),pt=L("h2"),pt.innerHTML=Ae,Ne=k(),bt=L("p"),bt.innerHTML=ye,Ee=k(),B&&B.c(),jt=k(),O(Ut.$$.fragment),this.h()},l(t){s=o(t);const i=Ze("svelte-2igo1p",document.head);te.l(i),a=y(i,"META",{name:!0,content:!0}),e=y(i,"META",{name:!0,content:!0}),N=Fe(),i.forEach(l),f=o(t),c=y(t,"H1",{class:!0,id:!0,"data-svelte-h":!0}),q(c)!=="svelte-30fds9"&&(c.innerHTML=R),I=o(t),r=y(t,"BLOCKQUOTE",{class:!0,"data-svelte-h":!0}),q(r)!=="svelte-bdbp8y"&&(r.innerHTML=C),v=o(t),S=y(t,"H2",{class:!0,id:!0,"data-svelte-h":!0}),q(S)!=="svelte-1jbdjau"&&(S.innerHTML=_),g=o(t),m=y(t,"P",{class:!0,"data-svelte-h":!0}),q(m)!=="svelte-zgve7j"&&(m.innerHTML=U),$t=o(t),w&&w.l(t),X=o(t),b=y(t,"DIV",{class:!0});var x=xe(b);$(J.$$.fragment,x),Mt=o(x),$(tt.$$.fragment,x),ht=o(x),$(z.$$.fragment,x),ut=o(x),$(Q.$$.fragment,x),Wt=o(x),$(et.$$.fragment,x),x.forEach(l),Ot=o(t),j=y(t,"HR",{class:!0}),it=o(t),G=y(t,"H2",{class:!0,id:!0,"data-svelte-h":!0}),q(G)!=="svelte-15ve1eh"&&(G.innerHTML=qt),Rt=o(t),st=y(t,"P",{class:!0,"data-svelte-h":!0}),q(st)!=="svelte-13bv0r7"&&(st.innerHTML=ft),_t=o(t),M&&M.l(t),at=o(t),$(rt.$$.fragment,t),gt=o(t),$(lt.$$.fragment,t),nt=o(t),K=y(t,"HR",{class:!0}),dt=o(t),Z=y(t,"H2",{class:!0,id:!0,"data-svelte-h":!0}),q(Z)!=="svelte-1x5upz2"&&(Z.innerHTML=Gt),vt=o(t),Y=y(t,"P",{class:!0,"data-svelte-h":!0}),q(Y)!=="svelte-1efd9bj"&&(Y.innerHTML=mt),ot=o(t),h&&h.l(t),kt=o(t),$(ct.$$.fragment,t),Ct=o(t),H=y(t,"HR",{class:!0}),Xt=o(t),Nt=y(t,"H2",{class:!0,id:!0,"data-svelte-h":!0}),q(Nt)!=="svelte-1jo7jex"&&(Nt.innerHTML=ve),se=o(t),Dt=y(t,"P",{class:!0,"data-svelte-h":!0}),q(Dt)!=="svelte-41gqfl"&&(Dt.innerHTML=Ce),_e=o(t),W&&W.l(t),Jt=o(t),$(It.$$.fragment,t),ae=o(t),Kt=y(t,"HR",{class:!0}),re=o(t),Et=y(t,"H2",{class:!0,id:!0,"data-svelte-h":!0}),q(Et)!=="svelte-1a7kqlj"&&(Et.innerHTML=De),le=o(t),St=y(t,"P",{class:!0,"data-svelte-h":!0}),q(St)!=="svelte-1rofutc"&&(St.innerHTML=Ie),ne=o(t),F&&F.l(t),Qt=o(t),$(Ht.$$.fragment,t),ce=o(t),Zt=y(t,"HR",{class:!0}),ue=o(t),Tt=y(t,"H2",{class:!0,id:!0,"data-svelte-h":!0}),q(Tt)!=="svelte-yvq1uv"&&(Tt.innerHTML=Se),fe=o(t),At=y(t,"P",{class:!0,"data-svelte-h":!0}),q(At)!=="svelte-18ar0v8"&&(At.innerHTML=He),de=o(t),P&&P.l(t),Vt=o(t),$(yt.$$.fragment,t),me=o(t),$(Lt.$$.fragment,t),oe=o(t),xt=y(t,"HR",{class:!0}),ke=o(t),pt=y(t,"H2",{class:!0,id:!0,"data-svelte-h":!0}),q(pt)!=="svelte-rqm4we"&&(pt.innerHTML=Ae),Ne=o(t),bt=y(t,"P",{class:!0,"data-svelte-h":!0}),q(bt)!=="svelte-1oxvafu"&&(bt.innerHTML=ye),Ee=o(t),B&&B.l(t),jt=o(t),$(Ut.$$.fragment,t),this.h()},h(){D(a,"name","twitter:card"),D(a,"content","summary_large_image"),D(e,"name","twitter:site"),D(e,"content","@evidence_dev"),D(c,"class","markdown"),D(c,"id","pipeline-efficiency"),D(r,"class","markdown"),D(S,"class","markdown"),D(S,"id","pipeline-summary"),D(m,"class","markdown"),D(b,"class","grid grid-cols-2 md:grid-cols-5 gap-4 mb-6"),D(j,"class","markdown"),D(G,"class","markdown"),D(G,"id","time-in-status-average-minutes"),D(st,"class","markdown"),D(K,"class","markdown"),D(Z,"class","markdown"),D(Z,"id","handoff-latency"),D(Y,"class","markdown"),D(H,"class","markdown"),D(Nt,"class","markdown"),D(Nt,"id","blocked-tickets"),D(Dt,"class","markdown"),D(Kt,"class","markdown"),D(Et,"class","markdown"),D(Et,"id","ticket-flow-last-30-days"),D(St,"class","markdown"),D(Zt,"class","markdown"),D(Tt,"class","markdown"),D(Tt,"id","cycle-time-by-ticket-size"),D(At,"class","markdown"),D(xt,"class","markdown"),D(pt,"class","markdown"),D(pt,"id","longest-in-progress-tickets"),D(bt,"class","markdown")},m(t,i){n(t,s,i),te.m(document.head,null),Ft(document.head,a),Ft(document.head,e),Ft(document.head,N),n(t,f,i),n(t,c,i),n(t,I,i),n(t,r,i),n(t,v,i),n(t,S,i),n(t,g,i),n(t,m,i),n(t,$t,i),w&&w.m(t,i),n(t,X,i),n(t,b,i),p(J,b,null),Ft(b,Mt),p(tt,b,null),Ft(b,ht),p(z,b,null),Ft(b,ut),p(Q,b,null),Ft(b,Wt),p(et,b,null),n(t,Ot,i),n(t,j,i),n(t,it,i),n(t,G,i),n(t,Rt,i),n(t,st,i),n(t,_t,i),M&&M.m(t,i),n(t,at,i),p(rt,t,i),n(t,gt,i),p(lt,t,i),n(t,nt,i),n(t,K,i),n(t,dt,i),n(t,Z,i),n(t,vt,i),n(t,Y,i),n(t,ot,i),h&&h.m(t,i),n(t,kt,i),p(ct,t,i),n(t,Ct,i),n(t,H,i),n(t,Xt,i),n(t,Nt,i),n(t,se,i),n(t,Dt,i),n(t,_e,i),W&&W.m(t,i),n(t,Jt,i),p(It,t,i),n(t,ae,i),n(t,Kt,i),n(t,re,i),n(t,Et,i),n(t,le,i),n(t,St,i),n(t,ne,i),F&&F.m(t,i),n(t,Qt,i),p(Ht,t,i),n(t,ce,i),n(t,Zt,i),n(t,ue,i),n(t,Tt,i),n(t,fe,i),n(t,At,i),n(t,de,i),P&&P.m(t,i),n(t,Vt,i),p(yt,t,i),n(t,me,i),p(Lt,t,i),n(t,oe,i),n(t,xt,i),n(t,ke,i),n(t,pt,i),n(t,Ne,i),n(t,bt,i),n(t,Ee,i),B&&B.m(t,i),n(t,jt,i),p(Ut,t,i),Te=!0},p(t,i){te.p(t,i),t[0]?w?(w.p(t,i),i[0]&1&&d(w,1)):(w=Ye(t),w.c(),d(w,1),w.m(X.parentNode,X)):w&&(Bt(),E(w,1,1,()=>{w=null}),Pt());const x={};i[0]&1&&(x.data=t[0]),J.$set(x);const Le={};i[0]&1&&(Le.data=t[0]),tt.$set(Le);const be={};i[0]&1&&(be.data=t[0]),z.$set(be);const Ue={};i[0]&1&&(Ue.data=t[0]),Q.$set(Ue);const we={};i[0]&1&&(we.data=t[0]),et.$set(we),t[1]?M?(M.p(t,i),i[0]&2&&d(M,1)):(M=qe(t),M.c(),d(M,1),M.m(at.parentNode,at)):M&&(Bt(),E(M,1,1,()=>{M=null}),Pt());const Me={};i[0]&2&&(Me.data=t[1]),rt.$set(Me);const pe={};i[0]&2&&(pe.data=t[1]),i[1]&8388608&&(pe.$$scope={dirty:i,ctx:t}),lt.$set(pe),t[2]?h?(h.p(t,i),i[0]&4&&d(h,1)):(h=Ge(t),h.c(),d(h,1),h.m(kt.parentNode,kt)):h&&(Bt(),E(h,1,1,()=>{h=null}),Pt());const $e={};i[0]&4&&($e.data=t[2]),i[1]&8388608&&($e.$$scope={dirty:i,ctx:t}),ct.$set($e),t[3]?W?(W.p(t,i),i[0]&8&&d(W,1)):(W=Xe(t),W.c(),d(W,1),W.m(Jt.parentNode,Jt)):W&&(Bt(),E(W,1,1,()=>{W=null}),Pt());const Oe={};i[0]&8&&(Oe.data=t[3]),i[1]&8388608&&(Oe.$$scope={dirty:i,ctx:t}),It.$set(Oe),t[4]?F?(F.p(t,i),i[0]&16&&d(F,1)):(F=Je(t),F.c(),d(F,1),F.m(Qt.parentNode,Qt)):F&&(Bt(),E(F,1,1,()=>{F=null}),Pt());const he={};i[0]&16&&(he.data=t[4]),Ht.$set(he),t[5]?P?(P.p(t,i),i[0]&32&&d(P,1)):(P=Qe(t),P.c(),d(P,1),P.m(Vt.parentNode,Vt)):P&&(Bt(),E(P,1,1,()=>{P=null}),Pt());const We={};i[0]&32&&(We.data=t[5]),yt.$set(We);const Re={};i[0]&32&&(Re.data=t[5]),i[1]&8388608&&(Re.$$scope={dirty:i,ctx:t}),Lt.$set(Re),t[6]?B?(B.p(t,i),i[0]&64&&d(B,1)):(B=Ve(t),B.c(),d(B,1),B.m(jt.parentNode,jt)):B&&(Bt(),E(B,1,1,()=>{B=null}),Pt());const ge={};i[0]&64&&(ge.data=t[6]),i[1]&8388608&&(ge.$$scope={dirty:i,ctx:t}),Ut.$set(ge)},i(t){Te||(d(w),d(J.$$.fragment,t),d(tt.$$.fragment,t),d(z.$$.fragment,t),d(Q.$$.fragment,t),d(et.$$.fragment,t),d(M),d(rt.$$.fragment,t),d(lt.$$.fragment,t),d(h),d(ct.$$.fragment,t),d(W),d(It.$$.fragment,t),d(F),d(Ht.$$.fragment,t),d(P),d(yt.$$.fragment,t),d(Lt.$$.fragment,t),d(B),d(Ut.$$.fragment,t),Te=!0)},o(t){E(w),E(J.$$.fragment,t),E(tt.$$.fragment,t),E(z.$$.fragment,t),E(Q.$$.fragment,t),E(et.$$.fragment,t),E(M),E(rt.$$.fragment,t),E(lt.$$.fragment,t),E(h),E(ct.$$.fragment,t),E(W),E(It.$$.fragment,t),E(F),E(Ht.$$.fragment,t),E(P),E(yt.$$.fragment,t),E(Lt.$$.fragment,t),E(B),E(Ut.$$.fragment,t),Te=!1},d(t){t&&(l(s),l(f),l(c),l(I),l(r),l(v),l(S),l(g),l(m),l($t),l(X),l(b),l(Ot),l(j),l(it),l(G),l(Rt),l(st),l(_t),l(at),l(gt),l(nt),l(K),l(dt),l(Z),l(vt),l(Y),l(ot),l(kt),l(Ct),l(H),l(Xt),l(Nt),l(se),l(Dt),l(_e),l(Jt),l(ae),l(Kt),l(re),l(Et),l(le),l(St),l(ne),l(Qt),l(ce),l(Zt),l(ue),l(Tt),l(fe),l(At),l(de),l(Vt),l(me),l(oe),l(xt),l(ke),l(pt),l(Ne),l(bt),l(Ee),l(jt)),te.d(t),l(a),l(e),l(N),w&&w.d(t),T(J),T(tt),T(z),T(Q),T(et),M&&M.d(t),T(rt,t),T(lt,t),h&&h.d(t),T(ct,t),W&&W.d(t),T(It,t),F&&F.d(t),T(Ht,t),P&&P.d(t),T(yt,t),T(Lt,t),B&&B.d(t),T(Ut,t)}}}function Oi(u,s,a){let e,N;Pe(u,di,H=>a(37,e=H)),Pe(u,Be,H=>a(43,N=H));let{data:f}=s,{data:c={},customFormattingSettings:R,__db:I,inputs:r}=f;ti(Be,N="9c032d452bd99525668cd5d78e6470f7",N);let C=ri(ui(r));ei(C.subscribe(H=>r=H)),ii(ci,{getCustomFormats:()=>R.customFormats||[]});const v=(H,Xt)=>fi(I.query,H,{query_name:Xt});li(v),e.params,si(()=>!0);let S={initialData:void 0,initialError:void 0},_=V`SELECT
    COUNT(DISTINCT dt.ticket_tk) as active_tickets,
    COUNT(DISTINCT CASE WHEN dt.ticket_current_status = 'Backlog' THEN dt.ticket_tk END) as backlog_tickets,
    COUNT(DISTINCT CASE WHEN dt.ticket_current_status = 'In Progress' THEN dt.ticket_tk END) as in_progress_tickets,
    COUNT(DISTINCT CASE WHEN dt.ticket_current_status IN ('PR Submitted', 'QA Review') THEN dt.ticket_tk END) as review_tickets,
    COUNT(DISTINCT CASE WHEN ftl.blocker_ticket_code IS NOT NULL THEN dt.ticket_tk END) as blocked_tickets
FROM herd.dim_ticket dt
LEFT JOIN herd.fact_ticket_lifecycle ftl
    ON dt.ticket_sk = ftl.ticket_sk
WHERE dt.is_current = true
  AND NOT dt.is_deleted
  AND dt.ticket_current_status NOT IN ('Done', 'Canceled', 'Cancelled', 'Archived')`,g=`SELECT
    COUNT(DISTINCT dt.ticket_tk) as active_tickets,
    COUNT(DISTINCT CASE WHEN dt.ticket_current_status = 'Backlog' THEN dt.ticket_tk END) as backlog_tickets,
    COUNT(DISTINCT CASE WHEN dt.ticket_current_status = 'In Progress' THEN dt.ticket_tk END) as in_progress_tickets,
    COUNT(DISTINCT CASE WHEN dt.ticket_current_status IN ('PR Submitted', 'QA Review') THEN dt.ticket_tk END) as review_tickets,
    COUNT(DISTINCT CASE WHEN ftl.blocker_ticket_code IS NOT NULL THEN dt.ticket_tk END) as blocked_tickets
FROM herd.dim_ticket dt
LEFT JOIN herd.fact_ticket_lifecycle ftl
    ON dt.ticket_sk = ftl.ticket_sk
WHERE dt.is_current = true
  AND NOT dt.is_deleted
  AND dt.ticket_current_status NOT IN ('Done', 'Canceled', 'Cancelled', 'Archived')`;c.pipeline_summary_data&&(c.pipeline_summary_data instanceof Error?S.initialError=c.pipeline_summary_data:S.initialData=c.pipeline_summary_data,c.pipeline_summary_columns&&(S.knownColumns=c.pipeline_summary_columns));let m,U=!1;const $t=zt.createReactive({callback:H=>{a(0,m=H)},execFn:v},{id:"pipeline_summary",...S});$t(g,{noResolve:_,...S}),globalThis[Symbol.for("pipeline_summary")]={get value(){return m}};let X={initialData:void 0,initialError:void 0},b=V`SELECT
    ftl.previous_status,
    COUNT(*) as transition_count,
    ROUND(AVG(ftl.time_in_previous_status_minutes), 1) as avg_minutes,
    ROUND(MIN(ftl.time_in_previous_status_minutes), 1) as min_minutes,
    ROUND(MAX(ftl.time_in_previous_status_minutes), 1) as max_minutes,
    ROUND(MEDIAN(ftl.time_in_previous_status_minutes), 1) as median_minutes
FROM herd.fact_ticket_lifecycle ftl
WHERE ftl.time_in_previous_status_minutes IS NOT NULL
  AND ftl.previous_status IS NOT NULL
GROUP BY ftl.previous_status
ORDER BY avg_minutes DESC`,J=`SELECT
    ftl.previous_status,
    COUNT(*) as transition_count,
    ROUND(AVG(ftl.time_in_previous_status_minutes), 1) as avg_minutes,
    ROUND(MIN(ftl.time_in_previous_status_minutes), 1) as min_minutes,
    ROUND(MAX(ftl.time_in_previous_status_minutes), 1) as max_minutes,
    ROUND(MEDIAN(ftl.time_in_previous_status_minutes), 1) as median_minutes
FROM herd.fact_ticket_lifecycle ftl
WHERE ftl.time_in_previous_status_minutes IS NOT NULL
  AND ftl.previous_status IS NOT NULL
GROUP BY ftl.previous_status
ORDER BY avg_minutes DESC`;c.time_in_status_data&&(c.time_in_status_data instanceof Error?X.initialError=c.time_in_status_data:X.initialData=c.time_in_status_data,c.time_in_status_columns&&(X.knownColumns=c.time_in_status_columns));let Mt,tt=!1;const ht=zt.createReactive({callback:H=>{a(1,Mt=H)},execFn:v},{id:"time_in_status",...X});ht(J,{noResolve:b,...X}),globalThis[Symbol.for("time_in_status")]={get value(){return Mt}};let z={initialData:void 0,initialError:void 0},ut=V`SELECT
    CONCAT(ftl.previous_status, ' → ', ftl.ticket_status) as transition,
    COUNT(*) as count,
    ROUND(AVG(ftl.time_in_previous_status_minutes / 60.0), 1) as avg_hours,
    ROUND(MEDIAN(ftl.time_in_previous_status_minutes / 60.0), 1) as median_hours
FROM herd.fact_ticket_lifecycle ftl
WHERE ftl.time_in_previous_status_minutes IS NOT NULL
  AND ftl.previous_status IS NOT NULL
  AND ftl.ticket_status != ftl.previous_status
GROUP BY transition
ORDER BY avg_hours DESC
LIMIT 20`,Q=`SELECT
    CONCAT(ftl.previous_status, ' → ', ftl.ticket_status) as transition,
    COUNT(*) as count,
    ROUND(AVG(ftl.time_in_previous_status_minutes / 60.0), 1) as avg_hours,
    ROUND(MEDIAN(ftl.time_in_previous_status_minutes / 60.0), 1) as median_hours
FROM herd.fact_ticket_lifecycle ftl
WHERE ftl.time_in_previous_status_minutes IS NOT NULL
  AND ftl.previous_status IS NOT NULL
  AND ftl.ticket_status != ftl.previous_status
GROUP BY transition
ORDER BY avg_hours DESC
LIMIT 20`;c.handoff_latency_data&&(c.handoff_latency_data instanceof Error?z.initialError=c.handoff_latency_data:z.initialData=c.handoff_latency_data,c.handoff_latency_columns&&(z.knownColumns=c.handoff_latency_columns));let Wt,et=!1;const Ot=zt.createReactive({callback:H=>{a(2,Wt=H)},execFn:v},{id:"handoff_latency",...z});Ot(Q,{noResolve:ut,...z}),globalThis[Symbol.for("handoff_latency")]={get value(){return Wt}};let j={initialData:void 0,initialError:void 0},it=V`SELECT
    dt.ticket_code,
    dt.ticket_title,
    dt.ticket_current_status,
    ftl.blocker_ticket_code,
    da.agent_code as assigned_agent,
    ftl.event_ts as blocked_since
FROM herd.fact_ticket_lifecycle ftl
JOIN herd.dim_ticket dt
    ON ftl.ticket_sk = dt.ticket_sk
LEFT JOIN herd.dim_agent da
    ON ftl.agent_sk = da.agent_sk
WHERE ftl.blocker_ticket_code IS NOT NULL
  AND dt.is_current = true
  AND NOT dt.is_deleted
ORDER BY ftl.event_ts DESC`,G=`SELECT
    dt.ticket_code,
    dt.ticket_title,
    dt.ticket_current_status,
    ftl.blocker_ticket_code,
    da.agent_code as assigned_agent,
    ftl.event_ts as blocked_since
FROM herd.fact_ticket_lifecycle ftl
JOIN herd.dim_ticket dt
    ON ftl.ticket_sk = dt.ticket_sk
LEFT JOIN herd.dim_agent da
    ON ftl.agent_sk = da.agent_sk
WHERE ftl.blocker_ticket_code IS NOT NULL
  AND dt.is_current = true
  AND NOT dt.is_deleted
ORDER BY ftl.event_ts DESC`;c.blocked_tickets_data&&(c.blocked_tickets_data instanceof Error?j.initialError=c.blocked_tickets_data:j.initialData=c.blocked_tickets_data,c.blocked_tickets_columns&&(j.knownColumns=c.blocked_tickets_columns));let qt,Rt=!1;const st=zt.createReactive({callback:H=>{a(3,qt=H)},execFn:v},{id:"blocked_tickets",...j});st(G,{noResolve:it,...j}),globalThis[Symbol.for("blocked_tickets")]={get value(){return qt}};let ft={initialData:void 0,initialError:void 0},_t=V`SELECT
    dd.date_actual as date,
    COUNT(DISTINCT CASE WHEN ftl.ticket_event_type = 'created' THEN ftl.ticket_code END) as created,
    COUNT(DISTINCT CASE WHEN ftl.ticket_event_type = 'started' THEN ftl.ticket_code END) as started,
    COUNT(DISTINCT CASE WHEN ftl.ticket_event_type = 'completed' THEN ftl.ticket_code END) as completed
FROM herd.dim_date dd
LEFT JOIN herd.fact_ticket_lifecycle ftl
    ON CAST(strftime(ftl.event_ts, '%Y%m%d') AS INTEGER) = dd.date_sk
WHERE dd.date_actual >= CURRENT_DATE - INTERVAL '30 days'
  AND dd.date_actual <= CURRENT_DATE
GROUP BY dd.date_actual
ORDER BY dd.date_actual`,at=`SELECT
    dd.date_actual as date,
    COUNT(DISTINCT CASE WHEN ftl.ticket_event_type = 'created' THEN ftl.ticket_code END) as created,
    COUNT(DISTINCT CASE WHEN ftl.ticket_event_type = 'started' THEN ftl.ticket_code END) as started,
    COUNT(DISTINCT CASE WHEN ftl.ticket_event_type = 'completed' THEN ftl.ticket_code END) as completed
FROM herd.dim_date dd
LEFT JOIN herd.fact_ticket_lifecycle ftl
    ON CAST(strftime(ftl.event_ts, '%Y%m%d') AS INTEGER) = dd.date_sk
WHERE dd.date_actual >= CURRENT_DATE - INTERVAL '30 days'
  AND dd.date_actual <= CURRENT_DATE
GROUP BY dd.date_actual
ORDER BY dd.date_actual`;c.ticket_flow_data&&(c.ticket_flow_data instanceof Error?ft.initialError=c.ticket_flow_data:ft.initialData=c.ticket_flow_data,c.ticket_flow_columns&&(ft.knownColumns=c.ticket_flow_columns));let rt,gt=!1;const lt=zt.createReactive({callback:H=>{a(4,rt=H)},execFn:v},{id:"ticket_flow",...ft});lt(at,{noResolve:_t,...ft}),globalThis[Symbol.for("ticket_flow")]={get value(){return rt}};let nt={initialData:void 0,initialError:void 0},K=V`WITH ticket_cycle_time AS (
    SELECT
        dt.ticket_tk,
        dt.ticket_code,
        dt.ticket_tshirt_size,
        MIN(CASE WHEN ftl.ticket_event_type = 'started' THEN ftl.event_ts END) as started_at,
        MAX(CASE WHEN ftl.ticket_event_type = 'completed' THEN ftl.event_ts END) as completed_at
    FROM herd.dim_ticket dt
    JOIN herd.fact_ticket_lifecycle ftl
        ON dt.ticket_sk = ftl.ticket_sk
    WHERE dt.is_current = true
      AND NOT dt.is_deleted
    GROUP BY dt.ticket_tk, dt.ticket_code, dt.ticket_tshirt_size
    HAVING started_at IS NOT NULL AND completed_at IS NOT NULL
)
SELECT
    ticket_tshirt_size,
    COUNT(*) as ticket_count,
    ROUND(AVG(EXTRACT(EPOCH FROM (completed_at - started_at)) / 3600.0), 1) as avg_cycle_hours,
    ROUND(MEDIAN(EXTRACT(EPOCH FROM (completed_at - started_at)) / 3600.0), 1) as median_cycle_hours
FROM ticket_cycle_time
WHERE ticket_tshirt_size IS NOT NULL
GROUP BY ticket_tshirt_size
ORDER BY
    CASE ticket_tshirt_size
        WHEN 'XS' THEN 1
        WHEN 'S' THEN 2
        WHEN 'M' THEN 3
        WHEN 'L' THEN 4
        WHEN 'XL' THEN 5
        ELSE 6
    END`,dt=`WITH ticket_cycle_time AS (
    SELECT
        dt.ticket_tk,
        dt.ticket_code,
        dt.ticket_tshirt_size,
        MIN(CASE WHEN ftl.ticket_event_type = 'started' THEN ftl.event_ts END) as started_at,
        MAX(CASE WHEN ftl.ticket_event_type = 'completed' THEN ftl.event_ts END) as completed_at
    FROM herd.dim_ticket dt
    JOIN herd.fact_ticket_lifecycle ftl
        ON dt.ticket_sk = ftl.ticket_sk
    WHERE dt.is_current = true
      AND NOT dt.is_deleted
    GROUP BY dt.ticket_tk, dt.ticket_code, dt.ticket_tshirt_size
    HAVING started_at IS NOT NULL AND completed_at IS NOT NULL
)
SELECT
    ticket_tshirt_size,
    COUNT(*) as ticket_count,
    ROUND(AVG(EXTRACT(EPOCH FROM (completed_at - started_at)) / 3600.0), 1) as avg_cycle_hours,
    ROUND(MEDIAN(EXTRACT(EPOCH FROM (completed_at - started_at)) / 3600.0), 1) as median_cycle_hours
FROM ticket_cycle_time
WHERE ticket_tshirt_size IS NOT NULL
GROUP BY ticket_tshirt_size
ORDER BY
    CASE ticket_tshirt_size
        WHEN 'XS' THEN 1
        WHEN 'S' THEN 2
        WHEN 'M' THEN 3
        WHEN 'L' THEN 4
        WHEN 'XL' THEN 5
        ELSE 6
    END`;c.cycle_time_by_size_data&&(c.cycle_time_by_size_data instanceof Error?nt.initialError=c.cycle_time_by_size_data:nt.initialData=c.cycle_time_by_size_data,c.cycle_time_by_size_columns&&(nt.knownColumns=c.cycle_time_by_size_columns));let Z,Gt=!1;const vt=zt.createReactive({callback:H=>{a(5,Z=H)},execFn:v},{id:"cycle_time_by_size",...nt});vt(dt,{noResolve:K,...nt}),globalThis[Symbol.for("cycle_time_by_size")]={get value(){return Z}};let Y={initialData:void 0,initialError:void 0},mt=V`WITH ticket_start_times AS (
    SELECT
        dt.ticket_code,
        dt.ticket_title,
        dt.ticket_current_status,
        dt.ticket_tshirt_size,
        da.agent_code as assigned_agent,
        MIN(ftl.event_ts) as started_at
    FROM herd.dim_ticket dt
    JOIN herd.fact_ticket_lifecycle ftl
        ON dt.ticket_sk = ftl.ticket_sk
    LEFT JOIN herd.dim_agent da
        ON ftl.agent_sk = da.agent_sk
    WHERE dt.is_current = true
      AND NOT dt.is_deleted
      AND dt.ticket_current_status IN ('In Progress', 'PR Submitted', 'QA Review', 'Assigned')
      AND ftl.ticket_status IN ('In Progress', 'PR Submitted', 'QA Review', 'Assigned')
    GROUP BY dt.ticket_code, dt.ticket_title, dt.ticket_current_status, dt.ticket_tshirt_size, da.agent_code
)
SELECT
    ticket_code,
    ticket_title,
    ticket_current_status,
    ticket_tshirt_size,
    assigned_agent,
    started_at,
    ROUND(EXTRACT(EPOCH FROM (CURRENT_TIMESTAMP - started_at)) / 3600.0, 1) as hours_in_progress
FROM ticket_start_times
ORDER BY hours_in_progress DESC
LIMIT 20`,ot=`WITH ticket_start_times AS (
    SELECT
        dt.ticket_code,
        dt.ticket_title,
        dt.ticket_current_status,
        dt.ticket_tshirt_size,
        da.agent_code as assigned_agent,
        MIN(ftl.event_ts) as started_at
    FROM herd.dim_ticket dt
    JOIN herd.fact_ticket_lifecycle ftl
        ON dt.ticket_sk = ftl.ticket_sk
    LEFT JOIN herd.dim_agent da
        ON ftl.agent_sk = da.agent_sk
    WHERE dt.is_current = true
      AND NOT dt.is_deleted
      AND dt.ticket_current_status IN ('In Progress', 'PR Submitted', 'QA Review', 'Assigned')
      AND ftl.ticket_status IN ('In Progress', 'PR Submitted', 'QA Review', 'Assigned')
    GROUP BY dt.ticket_code, dt.ticket_title, dt.ticket_current_status, dt.ticket_tshirt_size, da.agent_code
)
SELECT
    ticket_code,
    ticket_title,
    ticket_current_status,
    ticket_tshirt_size,
    assigned_agent,
    started_at,
    ROUND(EXTRACT(EPOCH FROM (CURRENT_TIMESTAMP - started_at)) / 3600.0, 1) as hours_in_progress
FROM ticket_start_times
ORDER BY hours_in_progress DESC
LIMIT 20`;c.longest_in_progress_data&&(c.longest_in_progress_data instanceof Error?Y.initialError=c.longest_in_progress_data:Y.initialData=c.longest_in_progress_data,c.longest_in_progress_columns&&(Y.knownColumns=c.longest_in_progress_columns));let kt,ct=!1;const Ct=zt.createReactive({callback:H=>{a(6,kt=H)},execFn:v},{id:"longest_in_progress",...Y});return Ct(ot,{noResolve:mt,...Y}),globalThis[Symbol.for("longest_in_progress")]={get value(){return kt}},u.$$set=H=>{"data"in H&&a(7,f=H.data)},u.$$.update=()=>{u.$$.dirty[0]&128&&a(8,{data:c={},customFormattingSettings:R,__db:I}=f,c),u.$$.dirty[0]&256&&ni.set(Object.keys(c).length>0),u.$$.dirty[1]&64&&e.params,u.$$.dirty[0]&7680&&(_||!U?_||($t(g,{noResolve:_,...S}),a(12,U=!0)):$t(g,{noResolve:_})),u.$$.dirty[0]&122880&&(b||!tt?b||(ht(J,{noResolve:b,...X}),a(16,tt=!0)):ht(J,{noResolve:b})),u.$$.dirty[0]&1966080&&(ut||!et?ut||(Ot(Q,{noResolve:ut,...z}),a(20,et=!0)):Ot(Q,{noResolve:ut})),u.$$.dirty[0]&31457280&&(it||!Rt?it||(st(G,{noResolve:it,...j}),a(24,Rt=!0)):st(G,{noResolve:it})),u.$$.dirty[0]&503316480&&(_t||!gt?_t||(lt(at,{noResolve:_t,...ft}),a(28,gt=!0)):lt(at,{noResolve:_t})),u.$$.dirty[0]&1610612736|u.$$.dirty[1]&3&&(K||!Gt?K||(vt(dt,{noResolve:K,...nt}),a(32,Gt=!0)):vt(dt,{noResolve:K})),u.$$.dirty[1]&60&&(mt||!ct?mt||(Ct(ot,{noResolve:mt,...Y}),a(36,ct=!0)):Ct(ot,{noResolve:mt}))},a(10,_=V`SELECT
    COUNT(DISTINCT dt.ticket_tk) as active_tickets,
    COUNT(DISTINCT CASE WHEN dt.ticket_current_status = 'Backlog' THEN dt.ticket_tk END) as backlog_tickets,
    COUNT(DISTINCT CASE WHEN dt.ticket_current_status = 'In Progress' THEN dt.ticket_tk END) as in_progress_tickets,
    COUNT(DISTINCT CASE WHEN dt.ticket_current_status IN ('PR Submitted', 'QA Review') THEN dt.ticket_tk END) as review_tickets,
    COUNT(DISTINCT CASE WHEN ftl.blocker_ticket_code IS NOT NULL THEN dt.ticket_tk END) as blocked_tickets
FROM herd.dim_ticket dt
LEFT JOIN herd.fact_ticket_lifecycle ftl
    ON dt.ticket_sk = ftl.ticket_sk
WHERE dt.is_current = true
  AND NOT dt.is_deleted
  AND dt.ticket_current_status NOT IN ('Done', 'Canceled', 'Cancelled', 'Archived')`),a(11,g=`SELECT
    COUNT(DISTINCT dt.ticket_tk) as active_tickets,
    COUNT(DISTINCT CASE WHEN dt.ticket_current_status = 'Backlog' THEN dt.ticket_tk END) as backlog_tickets,
    COUNT(DISTINCT CASE WHEN dt.ticket_current_status = 'In Progress' THEN dt.ticket_tk END) as in_progress_tickets,
    COUNT(DISTINCT CASE WHEN dt.ticket_current_status IN ('PR Submitted', 'QA Review') THEN dt.ticket_tk END) as review_tickets,
    COUNT(DISTINCT CASE WHEN ftl.blocker_ticket_code IS NOT NULL THEN dt.ticket_tk END) as blocked_tickets
FROM herd.dim_ticket dt
LEFT JOIN herd.fact_ticket_lifecycle ftl
    ON dt.ticket_sk = ftl.ticket_sk
WHERE dt.is_current = true
  AND NOT dt.is_deleted
  AND dt.ticket_current_status NOT IN ('Done', 'Canceled', 'Cancelled', 'Archived')`),a(14,b=V`SELECT
    ftl.previous_status,
    COUNT(*) as transition_count,
    ROUND(AVG(ftl.time_in_previous_status_minutes), 1) as avg_minutes,
    ROUND(MIN(ftl.time_in_previous_status_minutes), 1) as min_minutes,
    ROUND(MAX(ftl.time_in_previous_status_minutes), 1) as max_minutes,
    ROUND(MEDIAN(ftl.time_in_previous_status_minutes), 1) as median_minutes
FROM herd.fact_ticket_lifecycle ftl
WHERE ftl.time_in_previous_status_minutes IS NOT NULL
  AND ftl.previous_status IS NOT NULL
GROUP BY ftl.previous_status
ORDER BY avg_minutes DESC`),a(15,J=`SELECT
    ftl.previous_status,
    COUNT(*) as transition_count,
    ROUND(AVG(ftl.time_in_previous_status_minutes), 1) as avg_minutes,
    ROUND(MIN(ftl.time_in_previous_status_minutes), 1) as min_minutes,
    ROUND(MAX(ftl.time_in_previous_status_minutes), 1) as max_minutes,
    ROUND(MEDIAN(ftl.time_in_previous_status_minutes), 1) as median_minutes
FROM herd.fact_ticket_lifecycle ftl
WHERE ftl.time_in_previous_status_minutes IS NOT NULL
  AND ftl.previous_status IS NOT NULL
GROUP BY ftl.previous_status
ORDER BY avg_minutes DESC`),a(18,ut=V`SELECT
    CONCAT(ftl.previous_status, ' → ', ftl.ticket_status) as transition,
    COUNT(*) as count,
    ROUND(AVG(ftl.time_in_previous_status_minutes / 60.0), 1) as avg_hours,
    ROUND(MEDIAN(ftl.time_in_previous_status_minutes / 60.0), 1) as median_hours
FROM herd.fact_ticket_lifecycle ftl
WHERE ftl.time_in_previous_status_minutes IS NOT NULL
  AND ftl.previous_status IS NOT NULL
  AND ftl.ticket_status != ftl.previous_status
GROUP BY transition
ORDER BY avg_hours DESC
LIMIT 20`),a(19,Q=`SELECT
    CONCAT(ftl.previous_status, ' → ', ftl.ticket_status) as transition,
    COUNT(*) as count,
    ROUND(AVG(ftl.time_in_previous_status_minutes / 60.0), 1) as avg_hours,
    ROUND(MEDIAN(ftl.time_in_previous_status_minutes / 60.0), 1) as median_hours
FROM herd.fact_ticket_lifecycle ftl
WHERE ftl.time_in_previous_status_minutes IS NOT NULL
  AND ftl.previous_status IS NOT NULL
  AND ftl.ticket_status != ftl.previous_status
GROUP BY transition
ORDER BY avg_hours DESC
LIMIT 20`),a(22,it=V`SELECT
    dt.ticket_code,
    dt.ticket_title,
    dt.ticket_current_status,
    ftl.blocker_ticket_code,
    da.agent_code as assigned_agent,
    ftl.event_ts as blocked_since
FROM herd.fact_ticket_lifecycle ftl
JOIN herd.dim_ticket dt
    ON ftl.ticket_sk = dt.ticket_sk
LEFT JOIN herd.dim_agent da
    ON ftl.agent_sk = da.agent_sk
WHERE ftl.blocker_ticket_code IS NOT NULL
  AND dt.is_current = true
  AND NOT dt.is_deleted
ORDER BY ftl.event_ts DESC`),a(23,G=`SELECT
    dt.ticket_code,
    dt.ticket_title,
    dt.ticket_current_status,
    ftl.blocker_ticket_code,
    da.agent_code as assigned_agent,
    ftl.event_ts as blocked_since
FROM herd.fact_ticket_lifecycle ftl
JOIN herd.dim_ticket dt
    ON ftl.ticket_sk = dt.ticket_sk
LEFT JOIN herd.dim_agent da
    ON ftl.agent_sk = da.agent_sk
WHERE ftl.blocker_ticket_code IS NOT NULL
  AND dt.is_current = true
  AND NOT dt.is_deleted
ORDER BY ftl.event_ts DESC`),a(26,_t=V`SELECT
    dd.date_actual as date,
    COUNT(DISTINCT CASE WHEN ftl.ticket_event_type = 'created' THEN ftl.ticket_code END) as created,
    COUNT(DISTINCT CASE WHEN ftl.ticket_event_type = 'started' THEN ftl.ticket_code END) as started,
    COUNT(DISTINCT CASE WHEN ftl.ticket_event_type = 'completed' THEN ftl.ticket_code END) as completed
FROM herd.dim_date dd
LEFT JOIN herd.fact_ticket_lifecycle ftl
    ON CAST(strftime(ftl.event_ts, '%Y%m%d') AS INTEGER) = dd.date_sk
WHERE dd.date_actual >= CURRENT_DATE - INTERVAL '30 days'
  AND dd.date_actual <= CURRENT_DATE
GROUP BY dd.date_actual
ORDER BY dd.date_actual`),a(27,at=`SELECT
    dd.date_actual as date,
    COUNT(DISTINCT CASE WHEN ftl.ticket_event_type = 'created' THEN ftl.ticket_code END) as created,
    COUNT(DISTINCT CASE WHEN ftl.ticket_event_type = 'started' THEN ftl.ticket_code END) as started,
    COUNT(DISTINCT CASE WHEN ftl.ticket_event_type = 'completed' THEN ftl.ticket_code END) as completed
FROM herd.dim_date dd
LEFT JOIN herd.fact_ticket_lifecycle ftl
    ON CAST(strftime(ftl.event_ts, '%Y%m%d') AS INTEGER) = dd.date_sk
WHERE dd.date_actual >= CURRENT_DATE - INTERVAL '30 days'
  AND dd.date_actual <= CURRENT_DATE
GROUP BY dd.date_actual
ORDER BY dd.date_actual`),a(30,K=V`WITH ticket_cycle_time AS (
    SELECT
        dt.ticket_tk,
        dt.ticket_code,
        dt.ticket_tshirt_size,
        MIN(CASE WHEN ftl.ticket_event_type = 'started' THEN ftl.event_ts END) as started_at,
        MAX(CASE WHEN ftl.ticket_event_type = 'completed' THEN ftl.event_ts END) as completed_at
    FROM herd.dim_ticket dt
    JOIN herd.fact_ticket_lifecycle ftl
        ON dt.ticket_sk = ftl.ticket_sk
    WHERE dt.is_current = true
      AND NOT dt.is_deleted
    GROUP BY dt.ticket_tk, dt.ticket_code, dt.ticket_tshirt_size
    HAVING started_at IS NOT NULL AND completed_at IS NOT NULL
)
SELECT
    ticket_tshirt_size,
    COUNT(*) as ticket_count,
    ROUND(AVG(EXTRACT(EPOCH FROM (completed_at - started_at)) / 3600.0), 1) as avg_cycle_hours,
    ROUND(MEDIAN(EXTRACT(EPOCH FROM (completed_at - started_at)) / 3600.0), 1) as median_cycle_hours
FROM ticket_cycle_time
WHERE ticket_tshirt_size IS NOT NULL
GROUP BY ticket_tshirt_size
ORDER BY
    CASE ticket_tshirt_size
        WHEN 'XS' THEN 1
        WHEN 'S' THEN 2
        WHEN 'M' THEN 3
        WHEN 'L' THEN 4
        WHEN 'XL' THEN 5
        ELSE 6
    END`),a(31,dt=`WITH ticket_cycle_time AS (
    SELECT
        dt.ticket_tk,
        dt.ticket_code,
        dt.ticket_tshirt_size,
        MIN(CASE WHEN ftl.ticket_event_type = 'started' THEN ftl.event_ts END) as started_at,
        MAX(CASE WHEN ftl.ticket_event_type = 'completed' THEN ftl.event_ts END) as completed_at
    FROM herd.dim_ticket dt
    JOIN herd.fact_ticket_lifecycle ftl
        ON dt.ticket_sk = ftl.ticket_sk
    WHERE dt.is_current = true
      AND NOT dt.is_deleted
    GROUP BY dt.ticket_tk, dt.ticket_code, dt.ticket_tshirt_size
    HAVING started_at IS NOT NULL AND completed_at IS NOT NULL
)
SELECT
    ticket_tshirt_size,
    COUNT(*) as ticket_count,
    ROUND(AVG(EXTRACT(EPOCH FROM (completed_at - started_at)) / 3600.0), 1) as avg_cycle_hours,
    ROUND(MEDIAN(EXTRACT(EPOCH FROM (completed_at - started_at)) / 3600.0), 1) as median_cycle_hours
FROM ticket_cycle_time
WHERE ticket_tshirt_size IS NOT NULL
GROUP BY ticket_tshirt_size
ORDER BY
    CASE ticket_tshirt_size
        WHEN 'XS' THEN 1
        WHEN 'S' THEN 2
        WHEN 'M' THEN 3
        WHEN 'L' THEN 4
        WHEN 'XL' THEN 5
        ELSE 6
    END`),a(34,mt=V`WITH ticket_start_times AS (
    SELECT
        dt.ticket_code,
        dt.ticket_title,
        dt.ticket_current_status,
        dt.ticket_tshirt_size,
        da.agent_code as assigned_agent,
        MIN(ftl.event_ts) as started_at
    FROM herd.dim_ticket dt
    JOIN herd.fact_ticket_lifecycle ftl
        ON dt.ticket_sk = ftl.ticket_sk
    LEFT JOIN herd.dim_agent da
        ON ftl.agent_sk = da.agent_sk
    WHERE dt.is_current = true
      AND NOT dt.is_deleted
      AND dt.ticket_current_status IN ('In Progress', 'PR Submitted', 'QA Review', 'Assigned')
      AND ftl.ticket_status IN ('In Progress', 'PR Submitted', 'QA Review', 'Assigned')
    GROUP BY dt.ticket_code, dt.ticket_title, dt.ticket_current_status, dt.ticket_tshirt_size, da.agent_code
)
SELECT
    ticket_code,
    ticket_title,
    ticket_current_status,
    ticket_tshirt_size,
    assigned_agent,
    started_at,
    ROUND(EXTRACT(EPOCH FROM (CURRENT_TIMESTAMP - started_at)) / 3600.0, 1) as hours_in_progress
FROM ticket_start_times
ORDER BY hours_in_progress DESC
LIMIT 20`),a(35,ot=`WITH ticket_start_times AS (
    SELECT
        dt.ticket_code,
        dt.ticket_title,
        dt.ticket_current_status,
        dt.ticket_tshirt_size,
        da.agent_code as assigned_agent,
        MIN(ftl.event_ts) as started_at
    FROM herd.dim_ticket dt
    JOIN herd.fact_ticket_lifecycle ftl
        ON dt.ticket_sk = ftl.ticket_sk
    LEFT JOIN herd.dim_agent da
        ON ftl.agent_sk = da.agent_sk
    WHERE dt.is_current = true
      AND NOT dt.is_deleted
      AND dt.ticket_current_status IN ('In Progress', 'PR Submitted', 'QA Review', 'Assigned')
      AND ftl.ticket_status IN ('In Progress', 'PR Submitted', 'QA Review', 'Assigned')
    GROUP BY dt.ticket_code, dt.ticket_title, dt.ticket_current_status, dt.ticket_tshirt_size, da.agent_code
)
SELECT
    ticket_code,
    ticket_title,
    ticket_current_status,
    ticket_tshirt_size,
    assigned_agent,
    started_at,
    ROUND(EXTRACT(EPOCH FROM (CURRENT_TIMESTAMP - started_at)) / 3600.0, 1) as hours_in_progress
FROM ticket_start_times
ORDER BY hours_in_progress DESC
LIMIT 20`),[m,Mt,Wt,qt,rt,Z,kt,f,c,S,_,g,U,X,b,J,tt,z,ut,Q,et,j,it,G,Rt,ft,_t,at,gt,nt,K,dt,Gt,Y,mt,ot,ct,e]}class yi extends _i{constructor(s){super(),ai(this,s,Oi,$i,Ke,{data:7},null,[-1,-1])}}export{yi as component};
