(function(e){function t(t){for(var r,s,i=t[0],a=t[1],l=t[2],d=0,f=[];d<i.length;d++)s=i[d],Object.prototype.hasOwnProperty.call(c,s)&&c[s]&&f.push(c[s][0]),c[s]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);u&&u(t);while(f.length)f.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,i=1;i<n.length;i++){var a=n[i];0!==c[a]&&(r=!1)}r&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},c={app:0},o=[];function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/vue-table/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],a=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=a;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0403":function(e,t,n){"use strict";n("4de2")},"0433":function(e,t,n){"use strict";n("1b76")},"1b76":function(e,t,n){},"4de2":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),c=(n("b64b"),{class:"container-fluid px-4"}),o={key:0,class:"spinner-container d-flex justify-content-center align-items-center"},s=Object(r["f"])("div",{class:"spinner-border",role:"status"},[Object(r["f"])("span",{class:"visually-hidden"},"Loading...")],-1),i={class:"row"};function a(e,t,n,a,l,u){var d=Object(r["k"])("Controls"),f=Object(r["k"])("Table"),b=Object(r["k"])("Pagination"),m=Object(r["k"])("Form"),j=Object(r["k"])("RowView");return Object(r["g"])(),Object(r["c"])("section",c,[l.isLoading?(Object(r["g"])(),Object(r["c"])("div",o,[s])):Object(r["d"])("",!0),Object(r["f"])("div",i,[Object(r["f"])(d,{amountItems:l.items.length,onSetUrl:u.handleUrl,onSetQuery:u.handleQuery,onSetForm:u.handleForm},null,8,["amountItems","onSetUrl","onSetQuery","onSetForm"]),u.searchedItems.length>0?(Object(r["g"])(),Object(r["c"])(f,{key:0,items:u.offsetItems,onSetSort:u.handleSort,onSetRowView:u.handleRowView},null,8,["items","onSetSort","onSetRowView"])):Object(r["d"])("",!0),u.amountPages>1?(Object(r["g"])(),Object(r["c"])(b,{key:1,amountPages:u.amountPages,onSetPage:u.handlePage},null,8,["amountPages","onSetPage"])):Object(r["d"])("",!0),l.showForm?(Object(r["g"])(),Object(r["c"])(m,{key:2,onSetRow:u.handleInsertRow,onSetForm:u.handleForm},null,8,["onSetRow","onSetForm"])):Object(r["d"])("",!0),Object.keys(l.rowView).length>0?(Object(r["g"])(),Object(r["c"])(j,{key:3,row:l.rowView},null,8,["row"])):Object(r["d"])("",!0)])])}var l=n("1da1"),u=n("2909"),d=n("53ca"),f=(n("96cf"),n("4de4"),n("841c"),n("ac1f"),n("d3b7"),n("25f0"),n("a15b"),n("07ac"),n("fb6a"),{class:"col-lg-4 col-md-8 col-sm-12 mx-auto"}),b={class:"col-12 btn-group row gx-0 my-1"},m={class:"col-12 btn-group row gx-0 my-1"},j={key:0,class:"row g-0 my-1"};function p(e,t,n,c,o,s){return Object(r["g"])(),Object(r["c"])("header",null,[Object(r["f"])("fieldset",f,[Object(r["f"])("div",b,[(Object(r["g"])(!0),Object(r["c"])(r["a"],null,Object(r["j"])(o.urls,(function(e,t){return Object(r["g"])(),Object(r["c"])("button",{class:"col-lg-6 col-md-12 btn btn-outline-primary",onClick:function(t){return s.handleUrlSelection(e.url)},key:t},Object(r["m"])(e.text),9,["onClick"])})),128))]),Object(r["f"])("div",m,[n.amountItems>0?(Object(r["g"])(),Object(r["c"])("button",{key:0,class:"col-lg-6 col-md-12 btn btn-outline-primary",onClick:t[1]||(t[1]=function(){return s.handleSetForm&&s.handleSetForm.apply(s,arguments)})}," Добавить ")):Object(r["d"])("",!0)]),n.amountItems>0?(Object(r["g"])(),Object(r["c"])("div",j,[Object(r["o"])(Object(r["f"])("input",{class:"col-lg-9 col-md-8 col-sm-12","onUpdate:modelValue":t[2]||(t[2]=function(e){return o.query=e}),type:"text",placeholder:"Поиск"},null,512),[[r["n"],o.query]]),Object(r["f"])("button",{class:"col-lg-3 col-md-4 col-sm-12 btn btn-primary",onClick:t[3]||(t[3]=function(){return s.handleSetQuery&&s.handleSetQuery.apply(s,arguments)})},"Найти")])):Object(r["d"])("",!0)])])}n("a9e3");var O={name:"Selector",emits:["setUrl","setQuery"],props:{amountItems:Number},data:function(){return{query:"",urls:{small:{text:"Малый набор",url:"http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}"},big:{text:"Большой набор",url:"http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}"}}}},computed:{},methods:{handleSetQuery:function(){this.$emit("setQuery",this.query)},handleSetForm:function(){this.$emit("setForm",!0)},handleUrlSelection:function(e){this.$emit("setUrl",e)}}};O.render=p;var h=O,v=Object(r["p"])("data-v-3bbcd43a");Object(r["i"])("data-v-3bbcd43a");var g={class:" table-responsive"},w={class:"table table-striped table-hover"},y={scope:"row"};Object(r["h"])();var x=v((function(e,t,n,c,o,s){return Object(r["g"])(),Object(r["c"])("div",g,[Object(r["f"])("table",w,[Object(r["f"])("thead",null,[Object(r["f"])("tr",y,[(Object(r["g"])(!0),Object(r["c"])(r["a"],null,Object(r["j"])(s.titles,(function(e,t){return Object(r["g"])(),Object(r["c"])("th",{scope:"col",key:t,onClick:function(t){return s.handleSort(e)}},[Object(r["e"])(Object(r["m"])(e)+" ",1),Object(r["f"])("span",{class:"sort-pointer",innerHTML:s.showDirectionPointer(e)},null,8,["innerHTML"])],8,["onClick"])})),128))])]),Object(r["f"])("tbody",null,[(Object(r["g"])(!0),Object(r["c"])(r["a"],null,Object(r["j"])(n.items,(function(e,t){return Object(r["g"])(),Object(r["c"])("tr",{scope:"row",key:t,onClick:function(t){return s.handleRowClick(e)}},[(Object(r["g"])(!0),Object(r["c"])(r["a"],null,Object(r["j"])(Object.values(e),(function(e,t){return Object(r["g"])(),Object(r["c"])("td",{scope:"col",key:t},Object(r["m"])("object"===Object(d["a"])(e)?Object.values(e).join(" "):e),1)})),128))],8,["onClick"])})),128))])])])})),k={name:"Table",emits:["setSort","setRowView"],props:{items:Array},data:function(){return{selectedRow:{},sort:{direction:"",value:""}}},computed:{titles:function(){return Object.keys(this.items[0])}},methods:{handleRowClick:function(e){var t={};e!==this.selectedRow&&(t=e),this.selectedRow=t,this.$emit("setRowView",t)},handleSort:function(e){var t="";this.sort.value=e,t="asc"===this.sort.direction?"desc":"asc",this.sort.direction=t,this.$emit("setSort",this.sort)},showDirectionPointer:function(e){if(e===this.sort.value)return"asc"===this.sort.direction?"&#9650;":"&#9660;"}},mounted:function(){}};n("f1ee");k.render=x,k.__scopeId="data-v-3bbcd43a";var S=k,P={class:"pagination"};function N(e,t,n,c,o,s){return Object(r["g"])(),Object(r["c"])("footer",null,[Object(r["f"])("nav",null,[Object(r["f"])("ul",P,[(Object(r["g"])(!0),Object(r["c"])(r["a"],null,Object(r["j"])(n.amountPages,(function(e){return Object(r["g"])(),Object(r["c"])("li",{key:e,class:["page-item",{active:e===o.currentPage}]},[Object(r["f"])("a",{href:"#"+e,onClick:function(t){return s.handleClick(e)},class:"page-link"},Object(r["m"])(e),9,["href","onClick"])],2)})),128))])])])}var F={name:"Pagination",emits:["setPage"],props:{amountPages:Number},data:function(){return{currentPage:1}},computed:{},methods:{handleClick:function(e){this.currentPage=e,this.$emit("setPage",e)}},mounted:function(){}};F.render=N;var R=F,V=(n("a4d3"),n("e01a"),Object(r["p"])("data-v-56d09686"));Object(r["i"])("data-v-56d09686");var U={class:"container p-4 shadow-lg"},C={class:"container__inner-wrapper"},I={class:"row g-2 my-2"},q={class:"col-md"},z={class:"form-floating"},A=Object(r["f"])("label",{for:"id"},"ID",-1),_={class:"col-md"},Q={class:"form-floating"},T=Object(r["f"])("label",{for:"firstName"},"firstName",-1),$={class:"col-md"},L={class:"form-floating"},M=Object(r["f"])("label",{for:"lastName"},"lastName",-1),D={class:"row g-2 my-2"},E={class:"col-md"},Z={class:"form-floating"},H=Object(r["f"])("label",{for:"email"},"email",-1),J={class:"col-md"},G={class:"form-floating"},B=Object(r["f"])("label",{for:"phone"},"phone",-1),K={class:"row g-2 my-2"},W={class:"form-floating"},X=Object(r["f"])("label",{for:"description"},"description",-1),Y={class:"row g-2 my-2"},ee={class:"col-md"},te={class:"form-floating"},ne=Object(r["f"])("label",{for:"city"},"city",-1),re={class:"col-md"},ce={class:"form-floating"},oe=Object(r["f"])("label",{for:"state"},"state",-1),se={class:"row g-2 my-2"},ie={class:"col-md"},ae={class:"form-floating"},le=Object(r["f"])("label",{for:"streetAddress"},"streetAddress",-1),ue={class:"col-md"},de={class:"form-floating"},fe=Object(r["f"])("label",{for:"zip"},"zip",-1),be=Object(r["f"])("button",{class:"btn btn-outline-primary",type:"sumbit"},"Добавить",-1),me={key:1},je=Object(r["f"])("p",null,"Данные добавлены в текущий набор.",-1);Object(r["h"])();var pe=V((function(e,t,n,c,o,s){var i=Object(r["l"])("mask");return Object(r["g"])(),Object(r["c"])("div",U,[Object(r["f"])("div",C,[o.isCompleted?Object(r["d"])("",!0):(Object(r["g"])(),Object(r["c"])("form",{key:0,class:"form",action:"#",onSubmit:t[11]||(t[11]=function(){return s.checkForm&&s.checkForm.apply(s,arguments)})},[Object(r["f"])("div",I,[Object(r["f"])("div",q,[Object(r["f"])("div",z,[Object(r["o"])(Object(r["f"])("input",{id:"id",class:"form-control",type:"number","onUpdate:modelValue":t[1]||(t[1]=function(e){return o.fields.id=e}),placeholder:"ID",required:""},null,512),[[r["n"],o.fields.id]]),A])]),Object(r["f"])("div",_,[Object(r["f"])("div",Q,[Object(r["o"])(Object(r["f"])("input",{id:"firstName",class:"form-control",type:"text","onUpdate:modelValue":t[2]||(t[2]=function(e){return o.fields.firstName=e}),placeholder:"firstName",pattern:"[A-Za-zА-Яа-я]+",required:""},null,512),[[r["n"],o.fields.firstName]]),T])]),Object(r["f"])("div",$,[Object(r["f"])("div",L,[Object(r["o"])(Object(r["f"])("input",{id:"lastName",class:"form-control",type:"text","onUpdate:modelValue":t[3]||(t[3]=function(e){return o.fields.lastName=e}),placeholder:"lastName",pattern:"[A-Za-zА-Яа-я]+",required:""},null,512),[[r["n"],o.fields.lastName]]),M])])]),Object(r["f"])("div",D,[Object(r["f"])("div",E,[Object(r["f"])("div",Z,[Object(r["o"])(Object(r["f"])("input",{id:"email",class:"form-control",type:"email","onUpdate:modelValue":t[4]||(t[4]=function(e){return o.fields.email=e}),placeholder:"email",pattern:"^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$",required:""},null,512),[[r["n"],o.fields.email]]),H])]),Object(r["f"])("div",J,[Object(r["f"])("div",G,[Object(r["o"])(Object(r["f"])("input",{id:"phone",class:"form-control",type:"text","onUpdate:modelValue":t[5]||(t[5]=function(e){return o.fields.phone=e}),placeholder:"phone",required:""},null,512),[[i],[r["n"],o.fields.phone]]),B])])]),Object(r["f"])("div",K,[Object(r["f"])("div",W,[Object(r["o"])(Object(r["f"])("textarea",{id:"description",class:"form-control","onUpdate:modelValue":t[6]||(t[6]=function(e){return o.fields.description=e}),cols:"20",rows:"5",placeholder:"description"},null,512),[[r["n"],o.fields.description]]),X])]),Object(r["f"])("div",Y,[Object(r["f"])("div",ee,[Object(r["f"])("div",te,[Object(r["o"])(Object(r["f"])("input",{id:"city",class:"form-control",type:"text","onUpdate:modelValue":t[7]||(t[7]=function(e){return o.fields.address.city=e}),placeholder:"city",pattern:"[A-Za-zА-Яа-я ]+"},null,512),[[r["n"],o.fields.address.city]]),ne])]),Object(r["f"])("div",re,[Object(r["f"])("div",ce,[Object(r["o"])(Object(r["f"])("input",{id:"state",class:"form-control",type:"text","onUpdate:modelValue":t[8]||(t[8]=function(e){return o.fields.address.state=e}),placeholder:"state",pattern:"[A-Za-zА-Яа-я ]+"},null,512),[[r["n"],o.fields.address.state]]),oe])])]),Object(r["f"])("div",se,[Object(r["f"])("div",ie,[Object(r["f"])("div",ae,[Object(r["o"])(Object(r["f"])("input",{id:"streetAddress",class:"form-control",type:"text","onUpdate:modelValue":t[9]||(t[9]=function(e){return o.fields.address.streetAddress=e}),placeholder:"streetAddress"},null,512),[[r["n"],o.fields.address.streetAddress]]),le])]),Object(r["f"])("div",ue,[Object(r["f"])("div",de,[Object(r["o"])(Object(r["f"])("input",{id:"zip",class:"form-control",type:"number","onUpdate:modelValue":t[10]||(t[10]=function(e){return o.fields.address.zip=e}),placeholder:"zip"},null,512),[[r["n"],o.fields.address.zip]]),fe])])]),be],32)),o.isCompleted?(Object(r["g"])(),Object(r["c"])("div",me,[je])):Object(r["d"])("",!0),Object(r["f"])("div",{class:"btn-close",onClick:t[12]||(t[12]=function(){return s.closeForm&&s.closeForm.apply(s,arguments)})})])])})),Oe=(n("466d"),n("5319"),{name:"Form",emits:["setRow","setForm"],props:{},data:function(){return{isCompleted:!1,fields:{id:0,firstName:"",lastName:"",email:"",phone:"",address:{streetAddress:"",city:"",state:"",zip:0},description:""}}},computed:{},methods:{checkForm:function(e){e.preventDefault();var t={};Object.assign(t,this.fields),this.isCompleted=!0,this.$emit("setRow",t)},closeForm:function(){this.$emit("setForm",!1)}},watch:{},directives:{mask:{mounted:function(e){e.addEventListener("input",(function(e){if(e.isTrusted){var t=this.value.replace(/\D/g,"").match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);t[1]="+7",this.value=t[3]?t[1]+" "+t[2]+" "+t[3]+(t[4]?"-"+t[4]:"")+(t[5]?"-"+t[5]:""):t[1]+" "+t[2]}}))}}},mounted:function(){}});n("0433");Oe.render=pe,Oe.__scopeId="data-v-56d09686";var he=Oe,ve={class:""},ge=Object(r["e"])("Выбран пользователь "),we=Object(r["f"])("p",null,"Описание:",-1),ye=Object(r["e"])("Адрес проижвания: "),xe=Object(r["e"])("Город: "),ke=Object(r["e"])("Провинция/штат: "),Se=Object(r["e"])("Индекс: ");function Pe(e,t,n,c,o,s){return Object(r["g"])(),Object(r["c"])("div",ve,[Object(r["f"])("p",null,[ge,Object(r["f"])("b",null,Object(r["m"])(n.row.firstName)+" "+Object(r["m"])(n.row.lastName),1)]),we,Object(r["o"])(Object(r["f"])("textarea",{"onUpdate:modelValue":t[1]||(t[1]=function(e){return o.description=e}),readonly:""},null,512),[[r["n"],o.description]]),Object(r["f"])("p",null,[ye,Object(r["f"])("b",null,Object(r["m"])(n.row.address.streetAddress),1)]),Object(r["f"])("p",null,[xe,Object(r["f"])("b",null,Object(r["m"])(n.row.address.city),1)]),Object(r["f"])("p",null,[ke,Object(r["f"])("b",null,Object(r["m"])(n.row.address.state),1)]),Object(r["f"])("p",null,[Se,Object(r["f"])("b",null,Object(r["m"])(n.row.address.state),1)])])}var Ne={name:"Row-view",props:{row:Object},data:function(){return{description:""}},computed:{},methods:{},watch:{row:function(){this.description=this.row.description}}};Ne.render=Pe;var Fe=Ne,Re={name:"Root",data:function(){return{dataUrl:"",rowView:{},isLoading:!1,items:[],page:1,limit:50,query:"",sort:{direction:"",value:""},showForm:!1}},computed:{searchedItems:function(){var e=this;if(this.query){var t=this.items.filter((function(t){var n=Object.keys(t).some((function(n){return-1!==t[n].toString().search(e.query)}));return n}));return t}return this.items},sortedItems:function(){var e=this;if(this.sort.value){var t=this.searchedItems;return t.sort((function(t,n){return"object"===Object(d["a"])(t[e.sort.value])&&(t[e.sort.value]=Object.values(t[e.sort.value]).join(" ")),"object"===Object(d["a"])(n[e.sort.value])&&(n[e.sort.value]=Object.values(n[e.sort.value]).join(" ")),t[e.sort.value]>n[e.sort.value]?"asc"===e.sort.direction?1:-1:t[e.sort.value]<n[e.sort.value]?"asc"===e.sort.direction?-1:1:0}))}return this.searchedItems},offsetItems:function(){return this.sortedItems.slice(this.limit*(this.page-1),this.limit*this.page)},amountPages:function(){return Math.ceil(this.sortedItems.length/this.limit)}},methods:{handleForm:function(e){this.showForm=e},handleInsertRow:function(e){var t=[];t.push(e),t.push.apply(t,Object(u["a"])(this.items)),this.items=t},handleRowView:function(e){this.rowView=e},handlePage:function(e){this.page=e},handleSearch:function(e){this.query=e},handleSort:function(e){this.sort=e},handleQuery:function(e){this.query=e},handleUrl:function(e){this.dataUrl=e,this.resetState()},resetState:function(){this.page=1,this.rowView={},this.query="",this.sort={direction:"",value:""}}},components:{Controls:h,Table:S,Pagination:R,Form:he,RowView:Fe},watch:{dataUrl:function(){var e=Object(l["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.isLoading=!0,e.prev=1,e.next=4,this.request(this.dataUrl);case 4:t=e.sent,this.items=t,e.next=11;break;case 8:throw e.prev=8,e.t0=e["catch"](1),new Error(e.t0);case 11:return e.prev=11,this.isLoading=!1,e.finish(11);case 14:case"end":return e.stop()}}),e,this,[[1,8,11,14]])})));function t(){return e.apply(this,arguments)}return t}()},mounted:function(){}};n("0403");Re.render=a;var Ve=Re,Ue=function(){var e=Object(l["a"])(regeneratorRuntime.mark((function e(){var t,n,r,c,o=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=o.length>0&&void 0!==o[0]?o[0]:"",n=o.length>1&&void 0!==o[1]?o[1]:"GET",e.prev=2,e.next=5,fetch(t,{method:n});case 5:return r=e.sent,e.next=8,r.json();case 8:return c=e.sent,e.abrupt("return",c);case 12:throw e.prev=12,e.t0=e["catch"](2),new Error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(){return e.apply(this,arguments)}}(),Ce=Ue;n("ab8b");Object(r["b"])(Ve).mixin({created:function(){this.request=Ce}}).mount("#app")},9607:function(e,t,n){},f1ee:function(e,t,n){"use strict";n("9607")}});
//# sourceMappingURL=app.fd548fa3.js.map