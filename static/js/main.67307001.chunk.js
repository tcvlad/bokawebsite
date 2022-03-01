(this["webpackJsonpbokawebsite-1"]=this["webpackJsonpbokawebsite-1"]||[]).push([[0],{34:function(e,s,t){},35:function(e,s,t){},39:function(e,s,t){"use strict";t.r(s);var a=t(3),c=t.n(a),i=t(21),n=t.n(i),r=(t(34),t.p+"static/media/Forest.7fa0b463.jpg"),o=t.p+"static/media/NodeBoard.86f4e5dd.png",l=t.p+"static/media/schematic.4acd7458.png",j=t.p+"static/media/NodeDesign.af0fffaf.png",d=t.p+"static/media/NodeShell.494456d5.jpg",b=t.p+"static/media/BokaLogo.b26b1ff9.png",h=t.p+"static/media/fire.79f32221.png",m=(t(35),t(11)),O=t(24),x=t(28).a.initializeApp({apiKey:"AIzaSyC3hnKOPSGbzUIFRjLCICjDGSMqwTqs0qs",authDomain:"boka-f89ec.firebaseapp.com",databaseURL:"https://boka-f89ec-default-rtdb.firebaseio.com",projectId:"boka-f89ec",storageBucket:"boka-f89ec.appspot.com",messagingSenderId:"574835943981",appId:"1:574835943981:web:73d06a9d7db7df90a9e6a4"}),p=(t(40),t(4)),f=function(){var e=Object(a.useState)(),s=Object(m.a)(e,2),t=s[0],c=s[1];Object(a.useEffect)((function(){x.database().ref("sensors").on("value",(function(e){var s=e.val(),t=[];for(var a in s)t.push(s[a]);c(t)}))}),[]);var i=Object(a.useState)({}),n=Object(m.a)(i,2),r=n[0],o=n[1];return console.log(t),Object(p.jsx)(O.c,{googleMapsApiKey:"AIzaSyBDl7Fh7j9laMAUSMFiYxfAwkhuz_hjGSA",children:Object(p.jsxs)(O.a,{mapContainerStyle:{height:"80vh",width:"100%"},zoom:18,scrollWheelZoom:!1,center:{lat:33.6459,lng:-117.8428},children:[t?t.map((function(e){return Object(p.jsx)(O.d,{position:e.gps,onClick:function(){return function(e){o(e)}(e)}},e.name)})):"",r.gps&&Object(p.jsx)(O.b,{position:r.gps,clickable:!0,onCloseClick:function(){return o({})},children:Object(p.jsxs)("p",{children:["Name: ",r.name,Object(p.jsx)("br",{}),"Temperature: ",r.temp,"\xb0C",Object(p.jsx)("br",{}),"Humidity: ",r.humidity,Object(p.jsx)("br",{}),"CO2: ",r.co2,"ppm"]})})]})})};function u(){return Object(p.jsxs)("body",{className:"whole-page",children:[Object(p.jsx)("header",{role:"banner",className:"sticky-top",children:Object(p.jsx)("nav",{id:"navbar-primary",className:"navbar sticky-top",role:"navigation",children:Object(p.jsx)("div",{className:"container-fluid",children:Object(p.jsx)("div",{className:"collapse navbar-collapse",id:"navbar-primary-collapse",children:Object(p.jsxs)("ul",{className:"nav navbar-nav",children:[Object(p.jsx)("li",{children:Object(p.jsx)("a",{href:"index.html",children:Object(p.jsx)("img",{id:"logo-navbar",src:b,width:"200",alt:"Logo"})})}),Object(p.jsx)("li",{children:Object(p.jsx)("a",{href:"index.html",className:"navButton",children:"home"})}),Object(p.jsx)("li",{children:Object(p.jsx)("a",{href:"#prod",className:"navButton",children:"product"})}),Object(p.jsx)("li",{children:Object(p.jsx)("a",{href:"#map",className:"navButton",children:"map"})})]})})})})}),Object(p.jsx)("div",{className:"landing-container",children:Object(p.jsx)("img",{className:"background",src:r,alt:""})}),Object(p.jsxs)("div",{className:"caption",children:[Object(p.jsx)("img",{src:b,id:"logo",alt:"",className:"logoMain"}),Object(p.jsx)("h3",{className:"fireMonitoring",children:"a fire monitoring system"}),Object(p.jsx)("hr",{}),Object(p.jsx)("a",{className:"button1",href:"#map",children:"see locations"})]}),Object(p.jsxs)("div",{className:"information-section",children:[Object(p.jsxs)("div",{className:"backgroundInfo",children:[Object(p.jsx)("h2",{children:"The Problem"}),Object(p.jsx)("hr",{}),Object(p.jsxs)("div",{className:"about",children:[Object(p.jsxs)("div",{className:"info1",children:[Object(p.jsxs)("p",{children:["Forest fires have environmental, economic, and ",Object(p.jsx)("br",{}),"health related repercussions: "]}),Object(p.jsxs)("ol",{children:[Object(p.jsxs)("li",{children:["In the United States, 10,122,336 acres of land were ",Object(p.jsx)("br",{})," burned by forest fires in 2020"]}),Object(p.jsxs)("li",{children:["From 2015-2020, fire suppression costs averaged",Object(p.jsx)("br",{})," an annual $2.3 billion in the U.S."]}),Object(p.jsxs)("li",{children:["Wildfire smoke can pollute the air up to 1000 km",Object(p.jsx)("br",{})," away, endangering the short and long-term health",Object(p.jsx)("br",{})," of those exposed"]})]})]}),Object(p.jsx)("div",{className:"info2",children:Object(p.jsx)("img",{src:h,alt:"fire"})})]}),Object(p.jsxs)("h5",{children:[" Watchtowers and satellite observation are among the traditional methods of forest fire detection. ",Object(p.jsx)("br",{})," However, watchtowers rely on a labor force to regularly monitor during fire seasons and satellites can ",Object(p.jsx)("br",{}),"only provide images every two days (assuming weather has not affected the image quality)."]})]}),Object(p.jsxs)("div",{className:"goalSection",id:"prod",children:[Object(p.jsx)("div",{className:"columnOne",children:Object(p.jsx)("img",{src:o,id:"node",alt:""})}),Object(p.jsxs)("div",{className:"columnTwo",children:[Object(p.jsx)("img",{src:b,id:"goalLogo",alt:""}),Object(p.jsxs)("p",{id:"right-text",children:["The goal of Boka is to provide an effective low-",Object(p.jsx)("br",{}),"cost solution to early forest fire detection. Boka",Object(p.jsx)("br",{}),"offers real-time fire risk assessment by utilizing a",Object(p.jsx)("br",{}),"high quality CO2, temperature, and humidity",Object(p.jsx)("br",{}),"sensor paired with LoRaWAN a long-range low-",Object(p.jsx)("br",{}),"power wireless communication system perfect",Object(p.jsx)("br",{}),"for vast forest environments."]})]})]}),Object(p.jsxs)("div",{className:"schematicInfo",children:[Object(p.jsx)("h1",{children:"Schematics"}),Object(p.jsx)("hr",{}),Object(p.jsx)("p",{children:"evolution of our shell"}),Object(p.jsxs)("div",{className:"shellProgression",children:[Object(p.jsx)("div",{className:"column",children:Object(p.jsx)("img",{src:l,id:"schematics",alt:"Node Scehmatic"})}),Object(p.jsx)("div",{className:"column",children:Object(p.jsx)("img",{src:j,alt:"Node CAD"})}),Object(p.jsx)("div",{className:"column",children:Object(p.jsx)("img",{src:d,alt:"Node Encasing"})})]})]}),Object(p.jsxs)("div",{className:"map-container",id:"map",children:[Object(p.jsx)("h1",{children:"Interactive Map"}),Object(p.jsx)("hr",{}),Object(p.jsx)("p",{children:"map of nodes and their live readings"}),Object(p.jsx)("div",{className:"map",children:Object(p.jsx)(f,{})})]}),Object(p.jsx)("div",{className:"credits",children:Object(p.jsxs)("h5",{children:["Hardware Team: Nathanial D., Adrian D.",Object(p.jsx)("br",{}),"Software Team: Jaie P., Tetsuya V."]})})]})]})}var g=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,41)).then((function(s){var t=s.getCLS,a=s.getFID,c=s.getFCP,i=s.getLCP,n=s.getTTFB;t(e),a(e),c(e),i(e),n(e)}))};n.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(u,{})}),document.getElementById("root")),g()}},[[39,1,2]]]);
//# sourceMappingURL=main.67307001.chunk.js.map