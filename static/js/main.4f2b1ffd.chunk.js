(this.webpackJsonpreact_keyboard=this.webpackJsonpreact_keyboard||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(3),r=n.n(a),s=n(4),c=n(5),o=n(7),i=n(6),u=n(1),d=n(0),l=function(e){Object(o.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={key:null},e.handlerKeyboardEvent=function(t){e.setState({key:t.key})},e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){document.addEventListener("keyup",this.handlerKeyboardEvent)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keyup",this.handlerKeyboardEvent)}},{key:"render",value:function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)("p",{className:"App__message",children:this.state.key?"The last pressed key is [".concat(this.state.key,"]"):"Nothing was pressed yet"})})}}]),n}(u.Component);n(13);r.a.render(Object(d.jsx)(l,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.4f2b1ffd.chunk.js.map