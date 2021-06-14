(this["webpackJsonpcnn-coverage-vis"]=this["webpackJsonpcnn-coverage-vis"]||[]).push([[0],{101:function(e,t,n){},242:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(21),o=n.n(r),s=(n(101),n(6)),c=n(267),l=n(274),d=n(275),u=n(244),p=n(277),f=n(269),h=n(276),j=(n(55),n(2)),b={ping:1,upload_speed:1,download_speed:1};function m(e){return Object(j.jsx)("div",{className:"App",children:Object(j.jsx)(c.a,{children:Object(j.jsxs)(h.a,{component:"fieldset",disabled:e.loading,children:[Object(j.jsx)(u.a,{variant:"overline",children:"Map Type"}),Object(j.jsxs)(p.a,{row:!0,"aria-label":"gender",name:"gender1",value:e.mapType,onChange:function(t){var n=t.target.value;if(!(n in b))throw new Error("Invalid map type selection: "+n);e.setMapType(n)},children:[Object(j.jsx)(f.a,{value:"upload_speed",control:Object(j.jsx)(d.a,{}),label:"Upload Speed"}),Object(j.jsx)(f.a,{value:"download_speed",control:Object(j.jsx)(d.a,{}),label:"Download Speed"}),Object(j.jsx)(f.a,{value:"ping",control:Object(j.jsx)(d.a,{}),label:"Ping"})]})]})})})}var g=n(271),v=n(278),y=n(279),x=n(272),O=n(273),w=n(270),S=n(103),M=n.n(S),k=Object(g.a)((function(e){return Object(v.a)({root:{flexGrow:1,marginBottom:"20px"},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}})}));function A(){var e=k();return Object(j.jsx)("div",{className:e.root,children:Object(j.jsx)(y.a,{position:"static",children:Object(j.jsxs)(x.a,{children:[Object(j.jsx)(w.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"menu",children:Object(j.jsx)(M.a,{})}),Object(j.jsx)(u.a,{variant:"h6",className:e.title,children:"CCN - Performance Evaluation"}),Object(j.jsx)(O.a,{color:"inherit",children:"About"})]})})})}var T=n(105),L=n(44),C=L.map((function(e){var t=e.name;return{label:t,value:t}})),_=function(e){return Object(j.jsxs)("div",{children:[Object(j.jsx)(u.a,{variant:"overline",children:"Select Sites"}),Object(j.jsx)(T.a,{options:C,value:e.selectedSites,onChange:e.setSelectedSites,labelledBy:"Select",disabled:e.loading})]})},E=n(10),B=n.n(E),D=n(28),N=n(16),W=n(14),z=n(8);function R(e){return Math.round(100*e)/100}var U=new Map([["active","green"],["confirmed","yellow"],["in-conversation","red"]]);function P(e){return e.every(G)}function G(e){return"string"===typeof(null===e||void 0===e?void 0:e.name)||"number"===typeof(null===e||void 0===e?void 0:e.latitude)||"number"===typeof(null===e||void 0===e?void 0:e.longitude)||"string"===typeof(null===e||void 0===e?void 0:e.address)||(null===e||void 0===e?void 0:e.status)in U}function J(e,t){return W.marker([e.latitude,e.longitude]).bindTooltip("".concat(e.name,' <span style="background-color: ').concat(U.get(e.status),'">[').concat(e.status,"]</span><br />").concat(e.address,"<br/>ping: ").concat(R((null===t||void 0===t?void 0:t.ping)*te.ping)," ").concat(ee.ping,"<br/>upload speed: ").concat(R((null===t||void 0===t?void 0:t.upload_speed)*te.upload_speed)," ").concat(ee.upload_speed,"<br/>download speed: ").concat(R((null===t||void 0===t?void 0:t.download_speed)*te.download_speed)," ").concat(ee.download_speed))}function q(e){var t=e.map,n=e.center,a=e.minLat,i=e.minLon,r=e.maxLat,o=e.maxLon,s=e.width,c=e.height,l=t.project(n),d=l.x,u=l.y,p=t.project([a,i]),f=[Math.floor(Math.min(d-s/2,p.x-s/10)),Math.ceil(Math.max(u+c/2,p.y+c/10))],h=t.project([r,o]),j=[Math.ceil(Math.max(d+s/2,h.x+s/10)),Math.floor(Math.min(u-c/2,h.y-c/10))],b=t.unproject(f),m=t.unproject(j),g=W.latLngBounds(b,m);return t.setMaxBounds(g).on("drag",(function(){return t.panInsideBounds(g,{animate:!1})})),{width:j[0]-f[0],height:f[1]-j[1],left:f[0],top:j[1]}}var H=n(104),F=150,I=40,K=F/64;var V=function(e){var t=e.colorDomain,n=e.title,i=e.width,r=Object(a.useRef)(null);if(t&&r.current){var o=z.n(t,z.f),s=z.d(".2f"),c=z.q(r.current).attr("width",i).attr("height",F).attr("viewBox",[0,0,i,F].join(" ")).style("overflow","visible").style("display","block");c.selectAll("*").remove();var l=Object.assign(o.copy().interpolator(z.e(I,F-0)),{range:function(){return[F-0,I]}});c.append("image").attr("x",0).attr("y",I).attr("width",i-0-15).attr("height",F-I-0).attr("preserveAspectRatio","none").attr("xlink:href",function(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:256,n=Object(H.createCanvas)(1,t),a=n.getContext("2d"),i=0;i<t;++i)a.fillStyle=e(i/(t-1)),a.fillRect(0,i,1,1);return n}(o.interpolator(),F-I-0).toDataURL());var d=Math.round(K+1),u=z.k(d).map((function(e){var t;return null!==(t=z.j(o.domain(),e/(d-1)))&&void 0!==t?t:NaN}));c.append("g").attr("transform","translate(".concat(0,",",0,")")).call(z.b(l).ticks(K,"string"===typeof s?s:void 0).tickSize(6).tickValues(u)).call((function(e){return e.selectAll(".tick line").attr("x1",i-15-0)})).call((function(e){return e.select(".domain").remove()})).call((function(e){return e.append("text").attr("y",28).attr("x",i-15-0-2).attr("fill","currentColor").attr("text-anchor","begin").attr("font-weight","bold").attr("class","title").text(n)}))}return Object(j.jsx)("svg",{id:"map-legend",ref:r,className:"leaflet-control"})};function Y(e){return Z.apply(this,arguments)}function Z(){return(Z=Object(N.a)(B.a.mark((function e(t){return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return e.next=4,e.sent.json();case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var X=function(e){return Object(j.jsx)("img",{src:"./loading.gif",style:{position:"absolute",left:e.left-e.size/2,top:e.top-e.size/2,height:e.size,opacity:.5,display:e.loading?"inline":"none"},alt:"source: https://tenor.com/view/loading-buffering-spinning-waiting-gif-17313179"})},Q="https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}".concat(devicePixelRatio>1?"@2x":"",".png"),$="http://localhost:7593/",ee={ping:"ms",download_speed:"Mbps",upload_speed:"Mbps"},te={ping:1,download_speed:1e-6,upload_speed:1e-6},ne={ping:"Ping",download_speed:"Download Speed",upload_speed:"Upload Speed"},ae=function(e){var t=e.mapType,n=e.selectedSites,i=e.setLoading,r=e.width,o=e.height,c=e.loading,l=Object(a.useState)(),d=Object(s.a)(l,2),u=d[0],p=d[1],f=Object(a.useState)(),h=Object(s.a)(f,2),b=h[0],m=h[1],g=Object(a.useState)(),v=Object(s.a)(g,2),y=v[0],x=v[1],O=Object(a.useState)(new Map),w=Object(s.a)(O,2),S=w[0],M=w[1],k=Object(a.useState)(),A=Object(s.a)(k,2),T=A[0],L=A[1];return Object(a.useEffect)((function(){Object(N.a)(B.a.mark((function e(){var t,n,a,s,c,l;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Y($+"dataRange");case 2:return t=e.sent,e.next=5,Y($+"sites");case 5:return n=e.sent,e.next=8,Y($+"sitesSummary");case 8:if(a=e.sent,s=W.map("map-id").setView(t.center,10),c=q(Object(D.a)(Object(D.a)({},t),{},{map:s,width:r,height:o})),l=new Map,P(n)){e.next=14;break}throw new Error("data has incorrect type");case 14:n.forEach((function(e){return l.set(e.name,J(e,a[e.name]).addTo(s))})),W.tileLayer(Q,{attribution:'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://www.openstreetmap.org/copyright">ODbL</a>.',maxZoom:15,minZoom:10,opacity:.5}).addTo(s),M(l),x(c),m(s),L(W.layerGroup().addTo(s)),i(!1);case 21:case"end":return e.stop()}}),e)})))()}),[i,r,o]),Object(a.useEffect)((function(){b&&S&&S.forEach((function(e,t){n.some((function(e){return e.label===t}))?e.setOpacity(1):e.setOpacity(.5)}))}),[n,b,S]),Object(a.useEffect)((function(){b&&y&&T&&(i(!0),Object(N.a)(B.a.mark((function e(){var a,r,o,s,c;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Y($+"data?"+new URLSearchParams([["width",y.width+""],["height",y.height+""],["left",y.left+""],["top",y.top+""],["binSizeShift","1"],["zoom","10"],["selectedSites",n.map((function(e){return e.label})).join(",")],["mapType",t]]));case 2:o=e.sent,s=[null!==(a=z.h(o,(function(e){return e*te[t]})))&&void 0!==a?a:1,null!==(r=z.i(o,(function(e){return e*te[t]})))&&void 0!==r?r:0],c=z.n(s,z.f),p(s),T.clearLayers(),o.forEach((function(e,n){if(e){var a=(n/y.height<<1)+y.left,i=(n%y.height<<1)+y.top,r=b.unproject([a,i],10),o=b.unproject([a+2,i+2],10);W.rectangle(W.latLngBounds(r,o),{fillColor:c(e*te[t]),fillOpacity:.75,stroke:!1}).addTo(T)}})),i(!1);case 9:case"end":return e.stop()}}),e)})))())}),[n,t,i,b,T,y]),Object(j.jsxs)("div",{style:{position:"relative"},children:[Object(j.jsx)("div",{id:"map-id",style:{height:o,width:r,position:"absolute"}}),Object(j.jsx)("div",{style:{position:"absolute",left:r-25},children:Object(j.jsx)(V,{colorDomain:u,title:"".concat(ne[t]," (").concat(ee[t],")"),width:25})}),Object(j.jsx)(X,{left:r/2,top:o/2,size:70,loading:c})]})},ie=z.m().domain(L.map((function(e){return e.name}))).range(z.p),re=50,oe=20,se=0,ce=20,le={ping:"Ping (ms)",upload_speed:"Upload Speed (Mbps)",download_speed:"Download Speed (Mbps)"},de=function(e){var t=e.mapType,n=e.offset,i=e.width,r=e.height,o=e.selectedSites,c=e.setLoading,l=e.loading,d=Object(a.useState)(),u=Object(s.a)(d,2),p=u[0],f=u[1],h=Object(a.useState)(),b=Object(s.a)(h,2),m=b[0],g=b[1],v=Object(a.useState)(),y=Object(s.a)(v,2),x=y[0],O=y[1],w=Object(a.useState)(),S=Object(s.a)(w,2),M=S[0],k=S[1];return Object(a.useEffect)((function(){var e=z.q("#line-chart").append("g").attr("transform","translate(".concat(re,", ").concat(ce,")"));f(e.append("g")),g(e.append("g")),O(e.append("g")),k(e.append("g").attr("transform","translate(0,10)").append("text")),e.append("g").attr("transform","translate(0,0)").append("text"),c(!1)}),[f,g,O,k,c]),Object(a.useEffect)((function(){p&&m&&x&&M&&Object(N.a)(B.a.mark((function e(){var n,a,s,l,d,u,f,h,j,b,g,v,y;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(!0),a=o.map((function(e){return e.label})),e.next=4,Y($+"lineSummary?"+new URLSearchParams([["mapType",t],["selectedSites",a.join(",")]]));case 4:s=e.sent.map((function(e){return{site:e.site,values:e.values.map((function(e){return{date:new Date(e.date),value:e.value}}))}})),l=i-re-se,d=r-ce-oe,u=s.map((function(e){return e.values})).flat(),f=z.o().domain(z.c(u,(function(e){return new Date(e.date)})).map((function(e){return null!==e&&void 0!==e?e:new Date(0)}))).range([0,l]),h=z.l().domain([0,(null!==(n=z.h(u,(function(e){return e.value})))&&void 0!==n?n:1)*te[t]]).range([d,0]),j=z.a(f),b=z.b(h),g=z.g().x((function(e){return f(e.date)})).y((function(e){return h(e.value*te[t])})),v=z.q("#line-chart"),y=z.q("#line-tooltip").style("position","absolute").style("background-color","white").style("border","solid").style("border-width","2px").style("border-radius","3px").style("padding","3px").style("font-size","small").style("opacity",1).style("display","none"),v.attr("width",i).attr("height",r),p.attr("transform","translate(0, ".concat(d,")")).style("user-select","none").transition().duration(1e3).call(j),m.style("user-select","none").transition().duration(1e3).call(b),M.attr("x",3).style("user-select","none").attr("font-size",12).attr("text-anchor","start").attr("font-weight","bold").text(le[t]),x.selectAll(".line").data(s,(function(e){return e.site})).join((function(e){return e.append("path").attr("d",(function(e){return g(e.values.map((function(e){return{date:e.date,value:0}})))})).attr("class","line").style("fill","none").style("stroke",(function(e){return ie(e.site)+""})).style("stroke-width",2).style("stroke-linejoin","round").style("opacity",0).on("mouseover",(function(e,t){return y.style("display","inline").html(t.site)})).on("mousemove",(function(e,t){return y.html(t.site).style("left",e.pageX+10+"px").style("top",e.pageY+20+"px")})).on("mouseout",(function(){return y.style("display","none")}))}),(function(e){return e}),(function(e){return e.remove()})).transition().duration(1e3).style("opacity",1).attr("d",(function(e){return g(e.values)})),c(!1);case 21:case"end":return e.stop()}}),e)})))()}),[t,p,m,x,M,o,r,c,i]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{style:{height:r,width:i,position:"relative",top:n},children:[Object(j.jsx)("svg",{id:"line-chart"}),Object(j.jsx)(X,{left:i/2,top:r/2,size:70,loading:l})]}),Object(j.jsx)("div",{id:"line-tooltip",style:{position:"absolute",opacity:0}})]})};var ue=function(){var e=Object(a.useState)("ping"),t=Object(s.a)(e,2),n=t[0],i=t[1],r=Object(a.useState)([]),o=Object(s.a)(r,2),d=o[0],u=o[1],p=Object(a.useState)(!0),f=Object(s.a)(p,2),h=f[0],b=f[1],g=Object(a.useState)(!0),v=Object(s.a)(g,2),y=v[0],x=v[1];return document.title="Performance Evaluation",Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(A,{}),Object(j.jsx)(c.a,{children:Object(j.jsxs)(l.a,{container:!0,spacing:3,children:[Object(j.jsx)(l.a,{item:!0,xs:3,children:Object(j.jsx)(_,{selectedSites:d,setSelectedSites:u,loading:y||h})}),Object(j.jsxs)(l.a,{item:!0,xs:9,children:[Object(j.jsx)(m,{mapType:n,setMapType:i,loading:y||h}),Object(j.jsx)(ae,{mapType:n,selectedSites:d,setLoading:b,width:910,height:500,loading:h}),Object(j.jsx)(de,{mapType:n,offset:500,width:910,height:200,selectedSites:d,setLoading:x,loading:y})]})]})})]})};o.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(ue,{})}),document.getElementById("root"))},44:function(e){e.exports=JSON.parse('[{"name":"David-TCN","latitude":47.23911,"longitude":-122.44989,"status":"active","address":"2309 S L St, Tacoma, WA 98405"},{"name":"SURGEtacoma","latitude":47.23854,"longitude":-122.44094,"status":"confirmed","address":"2367 Tacoma Ave S, Tacoma, WA 98402"},{"name":"Filipino Community Center","latitude":47.5501,"longitude":-122.2872,"status":"confirmed","address":"5740 Martin Luther King Jr Way S, Seattle, WA 98118"},{"name":"Oareao OCC Masjid","latitude":47.52391,"longitude":-122.27636,"status":"in-conversation","address":"8812 Renton Ave S, Seattle, WA 98118"},{"name":"ALTSpace","latitude":47.60816,"longitude":-122.30192,"status":"in-conversation","address":"2318 E Cherry St, Seattle, WA 98122"},{"name":"Franklin High School","latitude":47.576,"longitude":-122.29307,"status":"in-conversation","address":"3013 S Mt Baker Blvd, Seattle, WA 98144"},{"name":"Garfield High School","latitude":47.60533,"longitude":-122.3018,"status":"in-conversation","address":"400 23rd Ave, Seattle, WA 98122"},{"name":"Skyway Library","latitude":47.49049,"longitude":-122.23853,"status":"in-conversation","address":"12601 76th Ave S, Seattle, WA 98178"},{"name":"University Heights Center","latitude":47.66613,"longitude":-122.31374,"status":"in-conversation","address":"5031 University Way NE, Seattle, WA 98105"},{"name":"Hillside Church Kent","latitude":47.38639,"longitude":-122.22205,"status":"in-conversation","address":"930 E James St, Kent, WA 98031"}]')}},[[242,1,2]]]);
//# sourceMappingURL=main.28d33071.chunk.js.map