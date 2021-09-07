(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{19:function(t,e,n){t.exports={item:"ContactList_item__2KK43",button:"ContactList_button__3a93z"}},24:function(t,e,n){t.exports={form:"Filter_form__1XhZi",input:"Filter_input__3QIZW"}},33:function(t,e,n){},65:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n.n(c),r=n(12),o=n.n(r),s=n(6),u=n(4),i=n(13),b=n(14),l=n(17),j=n(16),f=n(7),d=n.n(f),h=n(18),m=n(2),p=Object(m.b)("contacts/fetchContactsRequest"),O=Object(m.b)("contacts/fetchContactsSuccess"),C=Object(m.b)("contacts/fetchContactsError"),v=Object(m.b)("contacts/addContactRequest"),x=Object(m.b)("contacts/addContactSuccess"),_=Object(m.b)("contacts/addContactError"),y=Object(m.b)("contacts/deleteContactRequest"),g=Object(m.b)("contacts/deleteContactSuccess"),k=Object(m.b)("contacts/deleteContactError"),w=Object(m.b)("contacts/changeFilter"),N=n(11),F=n.n(N);F.a.defaults.baseURL="http://localhost:4040";var L,S,E={fetchContacts:function(){return F.a.get("/contacts")},addContact:function(t){return F.a.post("/contacts",t)},deleteContact:function(t){return F.a.delete("/contacts/".concat(t))}},T=n(10),I=function(t){return t.contacts.loading},D=function(t){return t.contacts.items},R=function(t){return t.contacts.filter},q=Object(T.a)([D,R],(function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))})),V=n(8),A=n.n(V),P=n(1),z=function(t){Object(l.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(i.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={name:"",number:""},t.handleInputChange=function(e){var n=e.target,c=n.name,a=n.value;t.setState(Object(u.a)({},c,a))},t.handleSubmit=function(e){e.preventDefault();var n=t.state.name,c=t.props.contacts;t.state.name&&t.state.number?c.find((function(t){return t.name.toLowerCase()===n.toLowerCase()}))?alert("".concat(n," already exists. Try another name")):(t.props.onSubmit(t.state),t.resetForm()):alert("Enter the name!")},t.resetForm=function(){t.setState({name:"",number:""})},t}return Object(b.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(P.jsxs)("form",{className:A.a.form,onSubmit:this.handleSubmit,children:[Object(P.jsxs)("label",{className:A.a.labelTitle,children:["Name:",Object(P.jsx)("input",{type:"text",name:"name",className:A.a.input,value:e,onChange:this.handleInputChange})]}),Object(P.jsxs)("label",{className:A.a.labelTitle,children:["Phone:",Object(P.jsx)("input",{type:"text",name:"number",className:A.a.input,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"The telephone number must contain numbers and may contain spaces, dashes, parentheses and may start with +",required:!0,value:n,onChange:this.handleInputChange})]}),Object(P.jsx)("button",{type:"submit",className:A.a.button,children:"Add contact"})]})}}]),n}(c.Component),J=Object(s.b)((function(t){return{contacts:D(t)}}),(function(t){return{onSubmit:function(e){return t(function(t){var e=t.name,n=t.number;return function(){var t=Object(h.a)(d.a.mark((function t(c){var a,r,o;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a={name:e,number:n},c(v()),t.prev=2,t.next=5,E.addContact(a);case 5:r=t.sent,o=r.data,c(x(o)),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(2),c(_(t.t0));case 13:case"end":return t.stop()}}),t,null,[[2,10]])})));return function(e){return t.apply(this,arguments)}}()}(e))}}}))(z),K=n(24),M=n.n(K),U=Object(s.b)((function(t){return{filterValue:R(t)}}),(function(t){return{onFilter:function(e){return t(w(e.target.value))}}}))((function(t){var e=t.filterValue,n=t.onFilter;return Object(P.jsx)("form",{className:M.a.form,children:Object(P.jsxs)("label",{children:["Find contacts by name",Object(P.jsx)("input",{type:"text",className:M.a.input,value:e,onChange:n})]})})})),Z=n(19),B=n.n(Z),Q=function(t){Object(l.a)(n,t);var e=Object(j.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(b.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchContacts()}},{key:"render",value:function(){var t=this.props,e=t.contactList,n=t.onDeleteContact,c=t.isLoadingContacts;return Object(P.jsxs)(P.Fragment,{children:[c&&Object(P.jsx)("h1",{children:"Loading.."}),Object(P.jsx)("ul",{className:B.a.list,children:e.map((function(t){var e=t.id,c=t.name,a=t.number;return Object(P.jsxs)("li",{className:B.a.item,children:[Object(P.jsxs)("p",{children:[c,": "]}),Object(P.jsx)("p",{children:a}),Object(P.jsx)("button",{type:"button",className:B.a.button,onClick:function(){return n(e)},children:"Delete"})]},e)}))})]})}}]),n}(c.Component),W=Object(s.b)((function(t){return{isLaodingContacts:I(t),contactList:q(t)}}),(function(t){return{onDeleteContact:function(e){return t((n=e,function(){var t=Object(h.a)(d.a.mark((function t(e){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(y()),t.prev=1,t.next=4,E.deleteContact(n);case 4:e(g(n)),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(1),e(k(t.t0));case 10:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(e){return t.apply(this,arguments)}}()));var n},fetchContacts:function(){return t(function(){var t=Object(h.a)(d.a.mark((function t(e){var n,c;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(p()),t.prev=1,t.next=4,E.fetchContacts();case 4:n=t.sent,c=n.data,e(O(c)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),e(C(t.t0));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}())}}}))(Q),X=(n(33),function(){return Object(P.jsxs)("div",{className:"container",children:[Object(P.jsx)("h1",{className:"title",children:"Phonebook"}),Object(P.jsx)(J,{}),Object(P.jsx)("h2",{className:"title",children:"Contacts"}),Object(P.jsx)(U,{}),Object(P.jsx)(W,{})]})}),G=n(15),H=n(34),Y=n.n(H),$=n(9),tt=n(3),et=Object(m.c)([],(L={},Object(u.a)(L,O,(function(t,e){return e.payload})),Object(u.a)(L,x,(function(t,e){var n=e.payload;return[].concat(Object(G.a)(t),[n])})),Object(u.a)(L,g,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),L)),nt=Object(m.c)(!1,(S={},Object(u.a)(S,p,(function(){return!0})),Object(u.a)(S,O,(function(){return!1})),Object(u.a)(S,C,(function(){return!1})),Object(u.a)(S,v,(function(){return!0})),Object(u.a)(S,x,(function(){return!1})),Object(u.a)(S,_,(function(){return!1})),Object(u.a)(S,y,(function(){return!0})),Object(u.a)(S,g,(function(){return!1})),Object(u.a)(S,k,(function(){return!1})),S)),ct=Object(m.c)("",Object(u.a)({},w,(function(t,e){return e.payload}))),at=Object(tt.b)({items:et,filter:ct,loading:nt}),rt=[].concat(Object(G.a)(Object(m.d)({serializableCheck:{ignoredActions:[$.a,$.f,$.b,$.c,$.d,$.e]}})),[Y.a]),ot=Object(m.a)({reducer:{contacts:at},middleware:rt,devTools:!1});o.a.render(Object(P.jsx)(a.a.StrictMode,{children:Object(P.jsx)(s.a,{store:ot,children:Object(P.jsx)(X,{})})}),document.getElementById("root"))},8:function(t,e,n){t.exports={form:"ContactForm_form__2EkEL",labelTitle:"ContactForm_labelTitle__h_CPu",input:"ContactForm_input__UViIV",button:"ContactForm_button__25_Rc"}}},[[65,1,2]]]);
//# sourceMappingURL=main.70a117d8.chunk.js.map