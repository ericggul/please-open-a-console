(this.webpackJsonpactive_destruction=this.webpackJsonpactive_destruction||[]).push([[3],{254:function(t,n,i){"use strict";i.r(n),i.d(n,"default",(function(){return I}));var e,r,o,u,c,a=i(5),d=i.n(a),f=i(14),s=i(16),h=i(20),w=i(6),l=i(13),p=i(11),b=(i(17),p.d.div(e||(e=Object(l.a)(["\n  width: ","px;\n  height: ",'px;\n\n  flex-direction: column;\n  font-family: TimesNewRomand, "Times New Roman";\n  overflow: hidden;\n  position: relative;\n'])),(function(t){return t.theme.windowWidth}),(function(t){return t.theme.windowHeight}))),x=p.d.div(r||(r=Object(l.a)(["\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  position: absolute;\n  top: 0;\n  left: 0;\n  transform: translate(","px, ","px);\n  opacity: ",";\n"])),(function(t){return t.left}),(function(t){return t.top}),(function(t){return t.opacity})),M=p.d.div(o||(o=Object(l.a)(["\n  font-size: ","rem;\n\n  flex-direction: column;\n"])),(function(t){return t.size})),g=p.d.div(u||(u=Object(l.a)(["\n  font-size: ","rem;\n"])),(function(t){return t.size})),m=(p.d.div(c||(c=Object(l.a)(["\n  position: absolute;\n  width: ","px;\n  height: ","px;\n  left: ","px;\n  top: ","px;\n  background: ",";\n  transition: background 0.3s;\n"])),(function(t){return t.width}),(function(t){return t.height}),(function(t){return t.left-t.width/2}),(function(t){return t.top-t.height/2}),(function(t){return t.background})),i(43)),z=i.n(m),S=i(36),j=function(t,n){var i=t.split(" "),e=[],r=n;for(n>i.length-1&&(r=i.length-1);e.length<r;){var o=Math.floor(Math.random()*i.length);-1===e.indexOf(o)&&e.push(o)}e.sort((function(t,n){return t-n}));for(var u=Array.from(Array(r).keys()).sort((function(){return Math.random()-.5})),c="",a=r-1;a>=0;a--)c+=i.slice(e[u[a]],e[u[a+1]>=r?e.length:u[a+1]]).join(" ")+" ";return c+=i.slice(0,e[0]).join(" ")},v=function(t){for(var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.1,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:15,e=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],r="",o=0;o<t.length;o++)e?Math.random()<n?r+=String.fromCharCode(t.charCodeAt(o)+Math.floor(Math.random()*i)):r+=t[o]:Math.random()<n?r+=String.fromCharCode(t.charCodeAt(o)+i):r+=t[o];return r},W=function(t){for(var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.1,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:.05,e="",r=0;r<t.length;r++){var o=Math.random()>n?String.fromCharCode(97+Math.floor(26*Math.random())):String.fromCharCode(65+Math.floor(26*Math.random()));e+=o,Math.random()<i?e+=" ":Math.random()<.01?e+=",":Math.random()<.01&&(e+="?")}return e+="."},y=function(t,n){return Math.random()*(n-t)+t},_=function(t){return t.published_date.split("-")[2]},O=function(t){return t.updated.split(" ")[1].split(":")},E=[{idx:0,top:function(t,n,i,e){return n*(e.windowWidth<768?80:60)+10},left:function(t,n,i,e){return 10}},{idx:1,top:function(t,n,i,e){return n*(e.windowWidth<768?80:60)+10},left:function(t,n,i,e){return 10+i*t.asset_id%(n+10)*(2*n%13+2)+parseInt(O(t)[0])},opacity:function(t,n,i,e){return.5}},{idx:2,top:function(t,n,i,e){return(i+n)/2*(e.windowWidth<768?80:60)+10},left:function(t,n,i,e){return 10+i*t.asset_id%(n+10)*(2*n%13+2)+parseInt(O(t)[0])},opacity:function(t,n,i,e){return.4}},{idx:3,top:function(t,n,i,e){return Math.abs(i-n)/2*(e.windowWidth<768?80:60)+t.asset_id%13*10},left:function(t,n,i,e){return 10+i*t.asset_id%(n+10)*(2*n%13+2)+parseInt(O(t)[0])},opacity:function(t,n,i,e){return.3},titleSize:function(t,n,i,e){return 1.5+e.windowWidth%(i+n)*.03},textEditFunction:function(t,n){return t.replaceAll("z","%").replaceAll("it","FAANG")}},{idx:4,top:function(t,n,i,e){return Math.abs(i-n)/2*(e.windowWidth<768?80:60)+t.asset_id%13*10},left:function(t,n,i,e){return y(0,.2*e.windowWidth)+i*t.asset_id%(n+10)*(2*n%13+2)+parseInt(O(t)[0])},opacity:function(t,n,i,e){return y(0,y(0,1))},titleSize:function(t,n,i,e){return 1.5+e.windowWidth%(i+n)*.03},textEditFunction:function(t,n){return j(t,3).replaceAll(".","Harry Potter")}},{idx:5,top:function(t,n,i,e){return(.1*Math.abs(_(t)%(t.asset_id%(n+10)+i))+i*n%30/150+(i-n)%31/101)*e.windowHeight},left:function(t,n,i,e){return(parseInt(_(t))-15)/15*e.windowWidth},opacity:function(t,n,i,e){return Math.pow(i+n,3)%17/100+(i+parseInt(_(t)))%19/100+Math.min(Math.pow(Math.abs(i-n/4),3)/1e3,1)},titleSize:function(t,n,i,e){return Math.abs((i-n)*(i+n)%10)/10+1.5},abstractSize:function(t,n,i,e){return 1},textEditFunction:function(t,n){return j(t,10).replaceAll(",","@")}},{idx:6,top:function(t,n,i,e){return.5*e.windowHeight+y(0,.8)*e.windowHeight*Math.cos(y(0,2*Math.PI))},left:function(t,n,i,e){return.2*e.windowWidth+y(0,.5)*e.windowWidth*Math.sin(y(0,2*Math.PI))},titleSize:function(t,n,i,e){return 2*Math.pow(Math.pow(Math.abs(i+n/5),2)/140,3)},textEditFunction:function(t,n){return j(t,20).replaceAll(".","%").replaceAll(",","@")}},{idx:7,top:function(t,n,i,e){return t.asset_id%197/197*e.windowHeight},left:function(t,n,i,e){return(t.asset_id+73*i)%373/373*e.windowWidth},titleSize:function(t,n,i,e){return 2*Math.pow(Math.pow(Math.abs(i-n/5),3)/400,3)},textEditFunction:function(t,n){return j(t,20).replaceAll("s","$").replaceAll(".","!").replace(",","?")}},{idx:8,top:function(t,n,i,e){return(t.asset_id+5*i)%314/314*e.windowHeight},left:function(t,n,i,e){return(t.asset_id+73*i)%373/373*e.windowWidth},opacity:function(t,n,i,e){return y(0,.3)},titleSize:function(t,n,i,e){return Math.abs(i-n/2)>8?y(5,10):y(1,2)},abstractSize:function(t,n,i,e){return Math.abs(i+n/2)>18?y(5,10):y(0,3)},textEditFunction:function(t,n){return j(t,20).replaceAll("s","$").replaceAll(".","!").replace(",","?")}},{idx:9,top:function(t,n,i,e){return y(-.2*e.windowHeight,e.windowHeight)},left:function(t,n,i,e){return((t.asset_id+73*i)%373-100)/373*e.windowWidth},opacity:function(t,n,i,e){return y(0,.3)},titleSize:function(t,n,i,e){return Math.abs(i-n/2)>8?y(10,40):y(1,2)},abstractSize:function(t,n,i,e){return Math.abs(i+n/2)>18?y(5,100):y(0,3)},textEditFunction:function(t,n){return j(t,20).replaceAll("s","$").replaceAll(".","!").replace(",","?")}},{idx:10,top:function(t,n,i,e){return y(-1*e.windowHeight,e.windowHeight)},left:function(t,n,i,e){return((t.asset_id+73*i)%491-230)/491*e.windowWidth},opacity:function(t,n,i,e){return y(0,.2)},titleSize:function(t,n,i,e){return y(0,10)},abstractSize:function(t,n,i,e){return y(0,10)},textEditFunction:function(t,n){return v(t)}},{idx:11,top:function(t,n,i,e){return y(-2*e.windowHeight,e.windowHeight)},left:function(t,n,i,e){return y(-2.5*e.windowWidth,e.windowWidth)},opacity:function(t,n,i,e){return.1+.01*i},titleSize:function(t,n,i,e){return 1+Math.pow(10-i,2)},abstractSize:function(t,n,i,e){return y(3,y(50,100))},textEditFunction:function(t,n){return v(t,.3,100)}},{idx:12,top:function(t,n,i,e){return y(-1*e.windowHeight,e.windowHeight)},left:function(t,n,i,e){return y(-1*e.windowWidth,e.windowWidth)},opacity:function(t,n,i,e){return y(.3,.4)},titleSize:function(t,n,i,e){return y(10,10)},abstractSize:function(t,n,i,e){return y(10,10)},textEditFunction:function(t,n){return v(t,.3,100)}},{idx:13,top:function(t,n,i,e){return y(-2*e.windowHeight,e.windowHeight)},left:function(t,n,i,e){return y(-2.5*e.windowWidth,e.windowWidth)},opacity:function(t,n,i,e){return.1+.01*i},titleSize:function(t,n,i,e){return 1+Math.pow(10-i,2)},abstractSize:function(t,n,i,e){return y(3,y(50,100))},textEditFunction:function(t,n){return W(t)}},{idx:14,top:function(t,n,i,e){return y(-1*e.windowHeight,e.windowHeight)},left:function(t,n,i,e){return((t.asset_id+73*i)%491-230)/491*e.windowWidth},opacity:function(t,n,i,e){return y(0,.2)},titleSize:function(t,n,i,e){return y(0,10)},abstractSize:function(t,n,i,e){return y(0,10)},textEditFunction:function(t,n){return W(t)}},{idx:15,top:function(t,n,i,e){return y(-.2*e.windowHeight,e.windowHeight)},left:function(t,n,i,e){return((t.asset_id+73*i)%373-100)/373*e.windowWidth},opacity:function(t,n,i,e){return y(0,.3)},titleSize:function(t,n,i,e){return Math.abs(i-n/2)>8?y(10,40):y(1,2)},abstractSize:function(t,n,i,e){return Math.abs(i+n/2)>18?y(5,100):y(0,3)},textEditFunction:function(t,n){return W(t,.03,.15)}},{idx:16,top:function(t,n,i,e){return(t.asset_id+5*i)%314/314*e.windowHeight},left:function(t,n,i,e){return(t.asset_id+73*i)%373/373*e.windowWidth},opacity:function(t,n,i,e){return y(0,.3)},titleSize:function(t,n,i,e){return Math.abs(i-n/2)>8?y(5,10):y(1,2)},abstractSize:function(t,n,i,e){return Math.abs(i+n/2)>18?y(5,10):y(0,3)},textEditFunction:function(t,n){return W(t,.2,.15)}},{idx:17,top:function(t,n,i,e){return t.asset_id%197/197*e.windowHeight},left:function(t,n,i,e){return(t.asset_id+73*i)%373/373*e.windowWidth},titleSize:function(t,n,i,e){return 2*Math.pow(Math.pow(Math.abs(i-n/5),3)/400,3)},textEditFunction:function(t,n){return W(t,.4,.15)}},{idx:18,top:function(t,n,i,e){return.5*e.windowHeight+y(0,.8)*e.windowHeight*Math.cos(y(0,2*Math.PI))},left:function(t,n,i,e){return.2*e.windowWidth+y(0,.5)*e.windowWidth*Math.sin(y(0,2*Math.PI))},titleSize:function(t,n,i,e){return 2*Math.pow(Math.pow(Math.abs(i+n/5),2)/140,3)},textEditFunction:function(t,n){return W(t,.5,0)}},{idx:19,top:function(t,n,i,e){return(.1*Math.abs(_(t)%(t.asset_id%(n+10)+i))+i*n%30/150+(i-n)%31/101)*e.windowHeight},left:function(t,n,i,e){return(parseInt(_(t))-15)/15*e.windowWidth},opacity:function(t,n,i,e){return Math.pow(i+n,3)%17/100+(i+parseInt(_(t)))%19/100+Math.min(Math.pow(Math.abs(i-n/4),3)/1e3,1)},titleSize:function(t,n,i,e){return Math.abs((i-n)*(i+n)%10)/10+1.5},abstractSize:function(t,n,i,e){return 1},textEditFunction:function(t,n){return W(t,.3,.2)}},{idx:20,top:function(t,n,i,e){return Math.abs(i-n)/2*(e.windowWidth<768?80:60)+t.asset_id%13*10},left:function(t,n,i,e){return y(0,.2*e.windowWidth)+i*t.asset_id%(n+10)*(2*n%13+2)+parseInt(O(t)[0])},opacity:function(t,n,i,e){return y(0,y(0,1))},titleSize:function(t,n,i,e){return 1.5+e.windowWidth%(i+n)*.03},textEditFunction:function(t,n){return W(t,.3,.6)}},{idx:21,top:function(t,n,i,e){return Math.abs(i-n)/2*(e.windowWidth<768?80:60)+t.asset_id%13*10},left:function(t,n,i,e){return 10+i*t.asset_id%(n+10)*(2*n%13+2)+parseInt(O(t)[0])},opacity:function(t,n,i,e){return.3},titleSize:function(t,n,i,e){return 1.5+e.windowWidth%(i+n)*.03},textEditFunction:function(t,n){return W(t,.1,.8)}},{idx:22,top:function(t,n,i,e){return(i+n)/2*(e.windowWidth<768?80:60)+10},left:function(t,n,i,e){return 10+i*t.asset_id%(n+10)*(2*n%13+2)+parseInt(O(t)[0])},textEditFunction:function(t,n){return W(t,.7,.4)}},{idx:23,top:function(t,n,i,e){return n*(e.windowWidth<768?80:60)+10},left:function(t,n,i,e){return 10+i*t.asset_id%(n+10)*(2*n%13+2)+parseInt(O(t)[0])},textEditFunction:function(t,n){return W(t,.2,.4)}}],H=i(29),F=i(7),A=function(t){var n=t.pageIdx,i=t.news,e=t.j,r=t.i,o=t.size,u=[].concat(Object(h.a)(i.des_facet),Object(h.a)(i.geo_facet),Object(h.a)(i.org_facet),Object(h.a)(i.per_facet)),c=Object(w.useMemo)((function(){return E[n]}),[n]),a=c.top(i,r,e,o),d=c.left(i,r,e,o),f=c.opacity?c.opacity(i,r,e,o):.2,s=c.titleSize?c.titleSize(i,r,e,o):1.5,l=c.abstractSize?c.abstractSize(i,r,e,o):1,p=c.textEditFunction?c.textEditFunction:function(t){return t};return Object(F.jsxs)(x,{top:a,left:d,opacity:f,children:[Object(F.jsx)(M,{size:s,children:p(i.title,u)}),Object(F.jsx)(g,{size:l,children:p(i.abstract,u)})]},100*r+e)};function I(t){console.log(t.match.params);var n=Object(w.useState)(t.match.params?parseInt(t.match.params.id):0),i=Object(s.a)(n,2),e=i[0],r=i[1],o=Object(w.useState)(!0),u=Object(s.a)(o,2),c=(u[0],u[1]),a=Object(w.useState)([]),h=Object(s.a)(a,2),l=h[0],p=h[1],x=Object(S.a)(),M=Object(s.a)(x,2),g=M[0],m=M[1];Object(w.useEffect)((function(){function t(){return(t=Object(f.a)(d.a.mark((function t(){var n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,z.a.request({method:"GET",url:"https://api.nytimes.com/svc/mostpopular/v2/viewed/30.json?api-key=".concat("80GOFZe14tQYlGjepOwgAsSvrqijaSzo")});case 3:n=t.sent,p(n.data.results),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]);Object(H.f)();return Object(w.useEffect)((function(){r(t.match.params?parseInt(t.match.params.id):0)}),[t]),console.log("65",e),Object(w.useEffect)((function(){var t=document.addEventListener("click",(function(){return t=e,c(!0),console.log("clicked!"),console.log("60",t),void(window.location.href="/breaking-news/".concat((t+1)%24));var t}));return function(){return document.removeEventListener("click",t)}}),[e]),Object(F.jsx)(b,{children:new Array(10).fill(0).map((function(t,n){return l.map((function(t,i){return Object(F.jsx)(A,{pageIdx:e,news:t,i:i,j:n,size:{windowWidth:g,windowHeight:m}})}))}))})}}}]);
//# sourceMappingURL=3.fb7b3d1d.chunk.js.map