(this.webpackJsonpbitcoin=this.webpackJsonpbitcoin||[]).push([[0],{21:function(e,t,a){e.exports=a.p+"static/media/nofound.f0033b9e.png"},22:function(e,t,a){e.exports=a(34)},33:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(18),i=a.n(c),l=a(11),o=a(7),s=a(8),m=a(10),u=a(9),p=function(e){var t=e.children;return r.a.createElement("span",{className:"TitleForm"},t)},d=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={time:{},disclaimer:"",bpi:{}},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.coindesk.com/v1/bpi/currentprice.json").then((function(e){return e.json()})).then((function(t){var a=t.time,n=t.disclaimer,r=t.bpi;e.setState({time:a,disclaimer:n,bpi:r})}))}},{key:"htmlEntities",value:function(){return String(this).replace(/&amp;/g,"&")}},{key:"_renderCurrencies",value:function(){var e=this.state.bpi;return Object.keys(e).map((function(t){return r.a.createElement("div",{key:t},r.a.createElement("div",{className:"description"},"  ",e[t].description," "),e[t].symbol.htmlEntities," ",e[t].rate,r.a.createElement("span",null," ",t))}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"opacity"},r.a.createElement(p,null,"Bitcoin Price Index - BPI"),r.a.createElement("div",{className:"date"},this.state.time.updated),r.a.createElement("div",{className:"currencies"},this._renderCurrencies()),r.a.createElement("div",{className:"note"},this.state.disclaimer)))}}]),a}(n.Component),f=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(d,null)}}]),a}(n.Component),h=function(){return r.a.createElement(l.b,{className:"button is-info",to:"/"},"Back to home")},E=a(21),b=a.n(E),v=function(){return r.a.createElement("div",{className:"App NoFound"},r.a.createElement("h2",null,"Sorry! the page is not found"),r.a.createElement("figure",null,r.a.createElement("img",{src:b.a,alt:"404"})),r.a.createElement(h,null))},y=function(){return r.a.createElement("footer",{className:"pie "},r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"parrafo"},"By ",r.a.createElement("a",{href:"https://agrodriguezs.github.io/",target:"_blank"},"Adriana Rodriguez.")),r.a.createElement("div",{className:"parrafo"},"Done with ",r.a.createElement("a",{href:"https://es.reactjs.org/",target:"_blank"},"React JS.        "),"using ",r.a.createElement("a",{href:"https://www.coindesk.com/coindesk-api",target:"_blank"},"API Coindesk.")),r.a.createElement("div",null," Foto de Crypto Crow en Pexels"),r.a.createElement("div",{className:"parrafo"},"Udemy Course Project",r.a.createElement("a",{href:"https://www.udemy.com/course/aprendiendo-react/",target:"_blank"},'"Aprender React JS"'))))},k=a(5),g=(a(32),a(33),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(k.c,null,r.a.createElement(k.a,{exact:!0,path:"/",component:f}),r.a.createElement(k.a,{component:v})),r.a.createElement(y,null))}}]),a}(n.Component));i.a.render(r.a.createElement(l.a,null,r.a.createElement(g,null)),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.77dde23c.chunk.js.map