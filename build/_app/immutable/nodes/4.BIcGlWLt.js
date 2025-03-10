import{a as Ht,e as _,b as w,c as p,v as tt,h as O,d as v,g as c,w as k,j as I,k as d,x as Mt,i as Nt,n as et,y as st,m as nt,t as G,f as q,l as rt,z as Ft,A as yt,B as dt,C as ot,r as Vt,D as Rt,E as Et}from"../chunks/scheduler.CN4FEajw.js";import{S as St,i as jt,c as gt,b as kt,m as Ct,t as Dt,a as Pt,d as xt}from"../chunks/index.DJqeu6aJ.js";import{e as K,R as Y,r as ft,b as $t,a as _t,d as Ut,c as Wt,C as Gt,P as qt,f as zt,p as Yt,g as Tt}from"../chunks/Plinko.HassSV6z.js";function Bt(e,t,a){const l=e.slice();return l[7]=t[a],l}function It(e,t,a){const l=e.slice();return l[10]=t[a],l}function Lt(e,t,a){const l=e.slice();return l[13]=t[a],l}function wt(e){let t,a=e[13]+"",l;return{c(){t=_("th"),l=G(a),this.h()},l(r){t=p(r,"TH",{class:!0});var s=v(t);l=q(s,a),s.forEach(c),this.h()},h(){k(t,"class","px-2 py-1 text-left")},m(r,s){I(r,t,s),d(t,l)},p(r,s){s&16&&a!==(a=r[13]+"")&&rt(l,a)},d(r){r&&c(t)}}}function Ot(e){let t,a=e[10].toFixed(4)+"",l,r;return{c(){t=_("td"),l=G(a),r=G("%"),this.h()},l(s){t=p(s,"TD",{class:!0});var u=v(t);l=q(u,a),r=q(u,"%"),u.forEach(c),this.h()},h(){k(t,"class","w-20 px-2 py-1 tabular-nums")},m(s,u){I(s,t,u),d(t,l),d(t,r)},p(s,u){u&8&&a!==(a=s[10].toFixed(4)+"")&&rt(l,a)},d(s){s&&c(t)}}}function At(e){let t,a,l,r,s,u=e[5](e[0],e[7],_t[e[0]]).toFixed(5)+"",m,D,T,h=e[5](e[0],e[7],Object.values(e[1])).toFixed(5)+"",L,y;return{c(){t=_("tr"),a=_("td"),l=G(e[7]),r=w(),s=_("td"),m=G(u),D=w(),T=_("td"),L=G(h),y=w(),this.h()},l(f){t=p(f,"TR",{});var b=v(t);a=p(b,"TD",{class:!0});var P=v(a);l=q(P,e[7]),P.forEach(c),r=O(b),s=p(b,"TD",{class:!0});var g=v(s);m=q(g,u),g.forEach(c),D=O(b),T=p(b,"TD",{class:!0});var V=v(T);L=q(V,h),V.forEach(c),y=O(b),b.forEach(c),this.h()},h(){k(a,"class","px-2 py-1"),k(s,"class","px-2 py-1 tabular-nums"),k(T,"class","px-2 py-1 tabular-nums")},m(f,b){I(f,t,b),d(t,a),d(a,l),d(t,r),d(t,s),d(s,m),d(t,D),d(t,T),d(T,L),d(t,y)},p(f,b){b&1&&u!==(u=f[5](f[0],f[7],_t[f[0]]).toFixed(5)+"")&&rt(m,u),b&3&&h!==(h=f[5](f[0],f[7],Object.values(f[1])).toFixed(5)+"")&&rt(L,h)},d(f){f&&c(t)}}}function Jt(e){let t,a="Bins Distribution",l,r,s,u,m,D,T,h,L,y,f,b,P,g,V='<tr><th class="px-2 py-1 text-left">Risk</th> <th class="px-2 py-1 text-left">Expected value</th> <th class="px-2 py-1 text-left">Actual value</th></tr>',j,z,Q,X,R=K(e[4]),x=[];for(let n=0;n<R.length;n+=1)x[n]=wt(Lt(e,R,n));let M=K(e[3]),C=[];for(let n=0;n<M.length;n+=1)C[n]=Ot(It(e,M,n));let J=K([Y.LOW,Y.MEDIUM,Y.HIGH]),B=[];for(let n=0;n<3;n+=1)B[n]=At(Bt(e,J,n));return{c(){t=_("h2"),t.textContent=a,l=w(),r=_("div"),s=_("canvas"),m=w(),D=_("table"),T=_("thead"),h=_("tr");for(let n=0;n<x.length;n+=1)x[n].c();L=w(),y=_("tbody"),f=_("tr");for(let n=0;n<C.length;n+=1)C[n].c();b=w(),P=_("table"),g=_("thead"),g.innerHTML=V,j=w(),z=_("tbody");for(let n=0;n<3;n+=1)B[n].c();this.h()},l(n){t=p(n,"H2",{class:!0,"data-svelte-h":!0}),tt(t)!=="svelte-kjunup"&&(t.textContent=a),l=O(n),r=p(n,"DIV",{class:!0});var E=v(r);s=p(E,"CANVAS",{}),v(s).forEach(c),E.forEach(c),m=O(n),D=p(n,"TABLE",{class:!0});var o=v(D);T=p(o,"THEAD",{});var H=v(T);h=p(H,"TR",{});var lt=v(h);for(let A=0;A<x.length;A+=1)x[A].l(lt);lt.forEach(c),H.forEach(c),L=O(o),y=p(o,"TBODY",{});var N=v(y);f=p(N,"TR",{});var it=v(f);for(let A=0;A<C.length;A+=1)C[A].l(it);it.forEach(c),N.forEach(c),o.forEach(c),b=O(n),P=p(n,"TABLE",{class:!0});var $=v(P);g=p($,"THEAD",{"data-svelte-h":!0}),tt(g)!=="svelte-1irznrv"&&(g.innerHTML=V),j=O($),z=p($,"TBODY",{});var at=v(z);for(let A=0;A<3;A+=1)B[A].l(at);at.forEach(c),$.forEach(c),this.h()},h(){k(t,"class","mb-3 text-xl font-semibold"),k(r,"class","h-[400px] w-[800px]"),k(D,"class","my-4 text-xs"),k(P,"class","my-4 text-sm")},m(n,E){I(n,t,E),I(n,l,E),I(n,r,E),d(r,s),I(n,m,E),I(n,D,E),d(D,T),d(T,h);for(let o=0;o<x.length;o+=1)x[o]&&x[o].m(h,null);d(D,L),d(D,y),d(y,f);for(let o=0;o<C.length;o+=1)C[o]&&C[o].m(f,null);I(n,b,E),I(n,P,E),d(P,g),d(P,j),d(P,z);for(let o=0;o<3;o+=1)B[o]&&B[o].m(z,null);Q||(X=Mt(u=e[6].call(null,s,{labels:e[4],binProbabilities:e[3],expectedProbabilities:e[2]})),Q=!0)},p(n,[E]){if(u&&Nt(u.update)&&E&28&&u.update.call(null,{labels:n[4],binProbabilities:n[3],expectedProbabilities:n[2]}),E&16){R=K(n[4]);let o;for(o=0;o<R.length;o+=1){const H=Lt(n,R,o);x[o]?x[o].p(H,E):(x[o]=wt(H),x[o].c(),x[o].m(h,null))}for(;o<x.length;o+=1)x[o].d(1);x.length=R.length}if(E&8){M=K(n[3]);let o;for(o=0;o<M.length;o+=1){const H=It(n,M,o);C[o]?C[o].p(H,E):(C[o]=Ot(H),C[o].c(),C[o].m(f,null))}for(;o<C.length;o+=1)C[o].d(1);C.length=M.length}if(E&35){J=K([Y.LOW,Y.MEDIUM,Y.HIGH]);let o;for(o=0;o<3;o+=1){const H=Bt(n,J,o);B[o]?B[o].p(H,E):(B[o]=At(H),B[o].c(),B[o].m(z,null))}for(;o<3;o+=1)B[o].d(1)}},i:et,o:et,d(n){n&&(c(t),c(l),c(r),c(m),c(D),c(b),c(P)),st(x,n),st(C,n),st(B,n),Q=!1,X()}}}function Kt(e,t,a){let l,r,s,u,m;nt(e,ft,h=>a(0,u=h)),nt(e,$t,h=>a(1,m=h));const D=(h,L,y)=>Ut(Wt[h][L],y),T=(h,{labels:L,binProbabilities:y,expectedProbabilities:f})=>{const b=new Gt(h,{type:"bar",data:{labels:L,datasets:[{label:"Bin Probability",data:y},{label:"Expected Probability",data:f}]},options:{responsive:!0,maintainAspectRatio:!1,scales:{x:{title:{display:!0,text:"Bin Number"}},y:{title:{display:!0,text:"Probability (%)"}}},plugins:{tooltip:{callbacks:{label:P=>`${P.dataset.label}: ${P.parsed.y.toFixed(4)}%`}}}}});return{update:({labels:P,binProbabilities:g,expectedProbabilities:V})=>{b.data.labels=P,b.data.datasets[0].data=g,b.data.datasets[1].data=V,b.update()},destroy:()=>{b.destroy()}}};return e.$$.update=()=>{e.$$.dirty&2&&a(4,l=Object.keys(m)),e.$$.dirty&2&&a(3,r=Object.values(m).map(h=>h*100)),e.$$.dirty&1&&a(2,s=_t[u].map(h=>h*100))},[u,m,s,r,l,D,T]}class Qt extends St{constructor(t){super(),jt(this,t,Kt,Jt,Ht,{})}}function Xt(e,t,a){const l=e.slice();return l[10]=t[a],l}function Zt(e,t,a){const l=e.slice();return l[13]=t[a],l}function te(e){let t,a;return{c(){t=_("option"),a=G(e[13]),this.h()},l(l){t=p(l,"OPTION",{});var r=v(t);a=q(r,e[13]),r.forEach(c),this.h()},h(){t.__value=e[13],Rt(t,t.__value)},m(l,r){I(l,t,r),d(t,a)},p:et,d(l){l&&c(t)}}}function ee(e){let t,a;return{c(){t=_("option"),a=G(e[10]),this.h()},l(l){t=p(l,"OPTION",{});var r=v(t);a=q(r,e[10]),r.forEach(c),this.h()},h(){t.__value=e[10],Rt(t,t.__value)},m(l,r){I(l,t,r),d(t,a)},p:et,d(l){l&&c(t)}}}function le(e){let t,a="Stop Auto Drop",l,r;return{c(){t=_("button"),t.textContent=a,this.h()},l(s){t=p(s,"BUTTON",{class:!0,"data-svelte-h":!0}),tt(t)!=="svelte-1gl87py"&&(t.textContent=a),this.h()},h(){k(t,"class","bg-cyan-100 p-2")},m(s,u){I(s,t,u),l||(r=ot(t,"click",e[6]),l=!0)},p:et,d(s){s&&c(t),l=!1,r()}}}function ae(e){let t,a="Start Auto Drop",l,r;return{c(){t=_("button"),t.textContent=a,this.h()},l(s){t=p(s,"BUTTON",{class:!0,"data-svelte-h":!0}),tt(t)!=="svelte-108jjiw"&&(t.textContent=a),this.h()},h(){k(t,"class","bg-cyan-100 p-2")},m(s,u){I(s,t,u),l||(r=ot(t,"click",e[5]),l=!0)},p:et,d(s){s&&c(t),l=!1,r()}}}function se(e){let t,a,l,r,s,u,m,D="Rows",T,h,L,y,f,b="Risk",P,g,V,j,z="Drop Ball",Q,X,R,x,M,C,J,B,n,E,o,H;l=new qt({});let lt=K(zt),N=[];for(let i=0;i<lt.length;i+=1)N[i]=te(Zt(e,lt,i));let it=K([Y.LOW,Y.MEDIUM,Y.HIGH]),$=[];for(let i=0;i<3;i+=1)$[i]=ee(Xt(e,it,i));function at(i,S){return i[0]===null?ae:le}let A=at(e),U=A(e);return n=new Qt({}),{c(){t=w(),a=_("div"),gt(l.$$.fragment),r=w(),s=_("div"),u=_("div"),m=_("label"),m.textContent=D,T=w(),h=_("select");for(let i=0;i<N.length;i+=1)N[i].c();L=w(),y=_("div"),f=_("label"),f.textContent=b,P=w(),g=_("select");for(let i=0;i<3;i+=1)$[i].c();V=w(),j=_("button"),j.textContent=z,Q=w(),U.c(),X=w(),R=_("p"),x=G("Dropped: "),M=_("span"),C=G(e[1]),J=w(),B=_("div"),gt(n.$$.fragment),this.h()},l(i){Ft("svelte-1spg4yq",document.head).forEach(c),t=O(i),a=p(i,"DIV",{class:!0});var F=v(a);kt(l.$$.fragment,F),F.forEach(c),r=O(i),s=p(i,"DIV",{class:!0});var W=v(s);u=p(W,"DIV",{class:!0});var ct=v(u);m=p(ct,"LABEL",{for:!0,"data-svelte-h":!0}),tt(m)!=="svelte-1w21x60"&&(m.textContent=D),T=O(ct),h=p(ct,"SELECT",{id:!0,class:!0});var pt=v(h);for(let Z=0;Z<N.length;Z+=1)N[Z].l(pt);pt.forEach(c),ct.forEach(c),L=O(W),y=p(W,"DIV",{class:!0});var ut=v(y);f=p(ut,"LABEL",{for:!0,"data-svelte-h":!0}),tt(f)!=="svelte-gyylum"&&(f.textContent=b),P=O(ut),g=p(ut,"SELECT",{id:!0,class:!0});var bt=v(g);for(let Z=0;Z<3;Z+=1)$[Z].l(bt);bt.forEach(c),ut.forEach(c),V=O(W),j=p(W,"BUTTON",{class:!0,"data-svelte-h":!0}),tt(j)!=="svelte-1yhuav9"&&(j.textContent=z),Q=O(W),U.l(W),X=O(W),R=p(W,"P",{});var ht=v(R);x=q(ht,"Dropped: "),M=p(ht,"SPAN",{});var vt=v(M);C=q(vt,e[1]),vt.forEach(c),ht.forEach(c),W.forEach(c),J=O(i),B=p(i,"DIV",{class:!0});var mt=v(B);kt(n.$$.fragment,mt),mt.forEach(c),this.h()},h(){document.title="Plinko - Benchmark",k(a,"class","h-[570px] w-[760px]"),k(m,"for","rowCount"),k(h,"id","rowCount"),k(h,"class","border border-gray-400 p-2"),e[2]===void 0&&yt(()=>e[7].call(h)),k(u,"class","flex items-center gap-4"),k(f,"for","riskLevel"),k(g,"id","riskLevel"),k(g,"class","border border-gray-400 p-2"),e[3]===void 0&&yt(()=>e[8].call(g)),k(y,"class","flex items-center gap-4"),k(j,"class","bg-cyan-100 p-2"),k(s,"class","mx-4 my-8 flex items-center gap-16"),k(B,"class","mx-4 my-8")},m(i,S){I(i,t,S),I(i,a,S),Ct(l,a,null),I(i,r,S),I(i,s,S),d(s,u),d(u,m),d(u,T),d(u,h);for(let F=0;F<N.length;F+=1)N[F]&&N[F].m(h,null);dt(h,e[2],!0),d(s,L),d(s,y),d(y,f),d(y,P),d(y,g);for(let F=0;F<3;F+=1)$[F]&&$[F].m(g,null);dt(g,e[3],!0),d(s,V),d(s,j),d(s,Q),U.m(s,null),d(s,X),d(s,R),d(R,x),d(R,M),d(M,C),I(i,J,S),I(i,B,S),Ct(n,B,null),E=!0,o||(H=[ot(h,"change",e[7]),ot(g,"change",e[8]),ot(j,"click",e[4])],o=!0)},p(i,[S]){S&4&&dt(h,i[2]),S&8&&dt(g,i[3]),A===(A=at(i))&&U?U.p(i,S):(U.d(1),U=A(i),U&&(U.c(),U.m(s,X))),(!E||S&2)&&rt(C,i[1])},i(i){E||(Dt(l.$$.fragment,i),Dt(n.$$.fragment,i),E=!0)},o(i){Pt(l.$$.fragment,i),Pt(n.$$.fragment,i),E=!1},d(i){i&&(c(t),c(a),c(r),c(s),c(J),c(B)),xt(l),st(N,i),st($,i),U.d(),xt(n),o=!1,Vt(H)}}}function ne(e,t,a){let l,r,s;nt(e,Yt,f=>a(9,l=f)),nt(e,ft,f=>a(2,r=f)),nt(e,Tt,f=>a(3,s=f));let u=null,m=0;function D(){l==null||l.dropBall(),a(1,m+=1)}function T(){a(0,u=setInterval(D,10))}function h(){u&&(clearInterval(u),a(0,u=null))}function L(){r=Et(this),ft.set(r)}function y(){s=Et(this),Tt.set(s)}return[u,m,r,s,D,T,h,L,y]}class ce extends St{constructor(t){super(),jt(this,t,ne,se,Ht,{})}}export{ce as component};
