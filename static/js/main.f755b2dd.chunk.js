(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{119:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(17),c=a.n(r),i=(a(68),a(19)),o=a(20),s=a(24),m=a(21),u=a(25),p=a(37),h=a.n(p),d=(a(34),a(14)),E=a.n(d),b=a(22),f=a.n(b),g=a(40),k=a.n(g),v=a(42),y=a.n(v),w=a(38),j=a.n(w),O=a(30),C=a(36),S=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={ingredients:[],scalingToggle:!1,display:"WIP",tempDisplay:""},a.handleChange=function(e){a.setState({tempDisplay:e.target.value})},a.handleClick=function(){a.setState({display:a.state.tempDisplay})},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"recipewrapper"},l.a.createElement("label",null," Recipe Scaler "),l.a.createElement("br",null),l.a.createElement("label",null," ",this.state.display," "),l.a.createElement("br",null),l.a.createElement("input",{type:"text",onChange:this.handleChange.bind(this)})," ",l.a.createElement("input",null),l.a.createElement("br",null),l.a.createElement("input",null)," ",l.a.createElement("input",null),l.a.createElement("br",null),l.a.createElement("input",null)," ",l.a.createElement("input",null),l.a.createElement("br",null),l.a.createElement("input",null)," ",l.a.createElement("input",null),l.a.createElement("br",null),l.a.createElement("input",null)," ",l.a.createElement("input",null),l.a.createElement("br",null),l.a.createElement("input",null)," ",l.a.createElement("input",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(E.a,{onClick:this.handleClick},"Finalize!"))}}]),t}(l.a.Component),_=a(43),x=a.n(_),A=a(57),N=a(44),I=a.n(N);I.a.initializeApp({apiKey:"AIzaSyCaK8JIurUT8bFCSTLOUlrUmspABLdtchU",authDomain:"idlegame-1f133.firebaseapp.com",databaseURL:"https://idlegame-1f133.firebaseio.com",projectId:"idlegame-1f133",storageBucket:"idlegame-1f133.appspot.com",messagingSenderId:"799768587608"});var L=I.a,R=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={number:0},a.testClick=function(){a.setState({number:Math.floor(Math.random()*Math.floor(101))}),console.log("HELLO")},a.handleClick=Object(A.a)(x.a.mark(function e(){var t,n,l,r,c,i;return x.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a.setState({number:"yeet"}),t=[],n=[],e.prev=3,l=L.database().ref("students").orderByKey(),e.next=7,l.once("value").then(function(e){e.forEach(function(e){var a=e.key,l=e.val();t.push(a),n.push(l)})});case 7:e.next=13;break;case 9:e.prev=9,e.t0=e.catch(3),a.setState({number:e.t0}),console.log(e.t0);case 13:r=0;case 14:if(!(r<n.length)){e.next=23;break}return c=Math.floor(Math.random()*Math.floor(101)),(i={})[t[r]]=c,e.next=20,L.database().ref("students/").update(i);case 20:r++,e.next=14;break;case 23:case"end":return e.stop()}},e,this,[[3,9]])})),a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("p",null,"Follow @ ",l.a.createElement("a",{className:"App-link",href:"https://twitter.com/elyseshackleton",target:"_blank",rel:"noopener noreferrer"},"Twitter"),",  ",l.a.createElement("a",{className:"App-link",href:"https://instagram.com/elyshack",target:"_blank",rel:"noopener noreferrer"},"Instagram")),l.a.createElement("div",null,l.a.createElement("img",{flex:"1",src:h.a,className:"App-logo",alt:"logo"})),l.a.createElement("p",null,l.a.createElement("highlight",null,"Fight me irl")),l.a.createElement("a",{className:"App-link",href:"https://elyshack.github.io/testpage",target:"_blank",rel:"noopener noreferrer"},"Test Page Link"),l.a.createElement("div",null),l.a.createElement(E.a,{onClick:this.handleClick},"Randomize!"),l.a.createElement("div",null),l.a.createElement("label",null,this.state.number))}}]),t}(l.a.Component),B=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:"App-header"},l.a.createElement(O.a,null,l.a.createElement("div",null,l.a.createElement("view",{width:"98vw"},l.a.createElement("code",null,l.a.createElement("h3",{className:"Title"},"Elyse Shackleton Code Portfolio "),l.a.createElement("div",{className:"Button-bar"},l.a.createElement(E.a,{href:"https://elyshack.github.io/portfolio",variant:"outline-primary"},l.a.createElement(O.b,{className:"link",to:"/portfolio/"}," Home ")),l.a.createElement(k.a,{variant:"outline-primary",as:y.a,title:"Projects",id:"bg-nested-dropdown"},l.a.createElement(f.a.Item,{eventKey:"1",href:"https://elyshack.github.io/testpage",target:"_blank",rel:"noopener noreferrer"},"Html test page"),l.a.createElement(f.a.Item,{eventKey:"2"}," ",l.a.createElement(O.b,{className:"sublink",to:"/portfolio/recipe"},"Recipe Scaler")," "),l.a.createElement(f.a.Item,{eventKey:"3"},"Album")),l.a.createElement(E.a,{href:j.a,variant:"outline-primary",download:"Elyse_Shackleton_Resume_June_2018.pdf"},"Resume")))),l.a.createElement("div",null,l.a.createElement("hr",{className:"Line-break"}))),l.a.createElement(C.a,{exact:!0,path:"/portfolio/",component:R}),l.a.createElement(C.a,{path:"/portfolio/recipe",component:S}))))}}]),t}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(116);c.a.render(l.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},34:function(e,t,a){},37:function(e,t,a){e.exports=a.p+"static/media/inner_pi.cf5106c3.png"},38:function(e,t,a){e.exports=a.p+"static/media/Elyse_Shackleton_Resume_June_2018.1819b79a.pdf"},63:function(e,t,a){e.exports=a(119)},68:function(e,t,a){}},[[63,2,1]]]);
//# sourceMappingURL=main.f755b2dd.chunk.js.map