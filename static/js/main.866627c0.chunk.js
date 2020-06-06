(this["webpackJsonphomework-013"]=this["webpackJsonphomework-013"]||[]).push([[0],{62:function(e,t,a){e.exports=a(98)},67:function(e,t,a){},98:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(22),c=a.n(r),i=(a(67),a(14)),o=a(5),s=a(105),m=a(101),u=a(106),d=a(104),p=a(59),h=a(102);function E(){return l.a.createElement(s.a,{bg:"dark",variant:"dark"},l.a.createElement(m.a,null,l.a.createElement(s.a.Brand,{as:i.b,to:"/"},"AMS"),l.a.createElement(u.a,{className:"mr-auto"},l.a.createElement(u.a.Link,{as:i.b,to:"/home"},"Home")),l.a.createElement(d.a,{inline:!0},l.a.createElement(p.a,{type:"text",placeholder:"Search",className:"mr-sm-2"}),l.a.createElement(h.a,{variant:"outline-info"},"Search"))))}var g=a(16),f=a(17),b=a(19),v=a(18),C=a(12),N=a.n(C),S=a(61),I=a.n(S);function y(e){var t=e.pagination.TOTAL_PAGES;return l.a.createElement(I.a,{previousLabel:"prev",nextLabel:"next",breakLabel:"...",breakClassName:"break-me",pageCount:t,marginPagesDisplayed:2,pageRangeDisplayed:10,onPageChange:e.handlePageChange,containerClassName:"pagination",subContainerClassName:"pages pagination",activeClassName:"active"})}var T=function(e){Object(b.a)(a,e);var t=Object(v.a)(a);function a(){var e;return Object(g.a)(this,a),(e=t.call(this)).handleClose=function(){e.setState({show:!0})},e.loadData=function(){var t=e.state,a=t.page,n=t.limit,l="http://110.74.194.124:15011/v1/api/articles?page=".concat(a,"&limit=").concat(n);N.a.get(l).then((function(t){var a=t.data.DATA;e.setState({loading:!1,articles:a,pagination:t.data.PAGINATION})}))},e.onDelete=function(t){N.a.delete("http://110.74.194.124:15011/v1/api/articles/".concat(t)).then((function(t){alert(t.data.MESSAGE),e.loadData()}))},e.handlePageChange=function(t){var a=t.selected+1;e.setState({page:a},(function(){e.loadData()})),console.log(a)},e.onPageChange=function(t){e.setState({limit:t.target.value},(function(){return e.loadData()}))},e.state={loading:!0,articles:[],show:!1,page:1,limit:5,pagination:{}},e}return Object(f.a)(a,[{key:"componentWillMount",value:function(){this.loadData()}},{key:"render",value:function(){var e=this;return this.state.loading?l.a.createElement("h2",null,"Loading..."):l.a.createElement("div",null,l.a.createElement("div",{className:"d-flex justify-content-center flex-column m-3"},l.a.createElement("h1",{className:"m-auto"},"Article Management"),l.a.createElement(i.b,{className:"my-bt",to:"/add"},l.a.createElement("button",{className:"btn btn-dark"},"Add New Article"))),l.a.createElement("table",{className:"table table-striped table-hover"},l.a.createElement("thead",{className:"thead-dark"},l.a.createElement("tr",null,l.a.createElement("th",null,"#"),l.a.createElement("th",null,"TITLE"),l.a.createElement("th",null,"DESCRIPTION"),l.a.createElement("th",null,"CREATE DATE"),l.a.createElement("th",null,"IMAGE"),l.a.createElement("th",null,"ACTION"))),l.a.createElement("tbody",null,this.state.articles.map((function(t){return l.a.createElement("tr",{key:t.ID},l.a.createElement("td",null,t.ID),l.a.createElement("td",null,l.a.createElement("div",{className:"cell"},t.TITLE)),l.a.createElement("td",null,l.a.createElement("div",{className:"cell"},t.DESCRIPTION)),l.a.createElement("td",null,t.CREATED_DATE),l.a.createElement("td",null,l.a.createElement("div",{style:{width:100,height:100}},l.a.createElement("img",{className:"w-100 h-100",src:t.IMAGE||"https://iwfstaff.com.au/wp-content/uploads/2017/12/placeholder-image.png",alt:"profile"}))),l.a.createElement("td",null,l.a.createElement(i.b,{to:"/view/".concat(t.ID)},l.a.createElement("button",{className:"btn btn-info m-1"},"View")),l.a.createElement(i.b,{to:"/edit/".concat(t.ID)},l.a.createElement("button",{className:"btn btn-outline-primary m-1"},"Edit")),l.a.createElement("button",{onClick:function(){return e.onDelete(t.ID)},className:"btn btn-danger m-1"},"Delete")))})))),l.a.createElement("div",{className:"d-flex justify-content-end"},l.a.createElement("h5",{className:"show-page"},"show page"),l.a.createElement(d.a.Control,{as:"select",style:{width:100},onChange:this.onPageChange},l.a.createElement("option",{value:5},"5"),l.a.createElement("option",{value:10},"10"),l.a.createElement("option",{value:15},"15"))),l.a.createElement("div",{className:"d-flex justify-content-center"},l.a.createElement(y,{pagination:this.state.pagination,handlePageChange:this.handlePageChange})))}}]),a}(n.Component),D=a(23),w=a(103),A=a(60),j=a(30),k=a.n(j);a(99);k.a.initializeApp({apiKey:"AIzaSyAqLkP7FaACy35_E_IjCZg1uX0Z0HtP0Vo",authDomain:"react-js-upload-images.firebaseapp.com",databaseURL:"https://react-js-upload-images.firebaseio.com",projectId:"react-js-upload-images",storageBucket:"react-js-upload-images.appspot.com",messagingSenderId:"311390949241",appId:"1:311390949241:web:d0854f5fa42d7b0ad529a8",measurementId:"G-W5LZESKKF6"});var O=k.a.storage(),x=function(e){Object(b.a)(a,e);var t=Object(v.a)(a);function a(){var e;return Object(g.a)(this,a),(e=t.call(this)).onChange=function(t){var a;e.setState((a={},Object(D.a)(a,t.target.name,t.target.value),Object(D.a)(a,"error",""),a))},e.onSubmit=function(t){if(t.preventDefault(),""===e.state.title||""===e.state.description)e.setState({error:"* Title can't be blank"});else{var a={TITLE:e.state.title,DESCRIPTION:e.state.description,IMAGE:e.state.url};N.a.post("http://110.74.194.124:15011/v1/api/articles",a).then((function(t){alert(t.data.MESSAGE),e.props.history.push("/")})).catch((function(e){return alert(e)}))}},e.handleChange=function(t){t.target.files[0]&&e.setState({image:t.target.files[0]})},e.handleUplaod=function(){e.setState({uploading:!0}),O.ref("images/".concat(e.state.image.name)).put(e.state.image).on("state_changed",(function(e){Math.round(e.bytesTransferred/e.totalBytes*100)}),(function(e){console.log(e)}),(function(){O.ref("images").child(e.state.image.name).getDownloadURL().then((function(t){e.setState({url:t,uploading:!1,uploadSuccess:!0})}))}))},e.state={title:"",description:"",error:"",image:"",url:"",uploading:!1,uploadSuccess:!1},e}return Object(f.a)(a,[{key:"render",value:function(){return l.a.createElement(w.a,null,l.a.createElement(A.a,{md:8},l.a.createElement(d.a,{onSubmit:this.onSubmit},l.a.createElement(d.a.Group,null,l.a.createElement(d.a.Label,null,"Title"),l.a.createElement(d.a.Control,{type:"text",placeholder:"Enter title",name:"title",value:this.state.title,onChange:this.onChange}),l.a.createElement(d.a.Text,{className:"text-danger"},this.state.error)),l.a.createElement(d.a.Group,null,l.a.createElement(d.a.Label,null,"Description"),l.a.createElement(d.a.Control,{as:"textarea",rows:"2",placeholder:"Eneter Description",name:"description",value:this.state.description,onChange:this.onChange}),l.a.createElement(d.a.Text,{className:"text-danger"},this.state.error)),l.a.createElement(h.a,{variant:"primary",type:"submit"},"Submit"))),l.a.createElement(A.a,{md:4},l.a.createElement("div",{className:"d-flex flex-column"},l.a.createElement("input",{className:"p-2",type:"file",onChange:this.handleChange}),l.a.createElement("div",{className:"img-box p-2"},l.a.createElement("img",{className:"w-100 h-100",src:this.state.url||"https://iwfstaff.com.au/wp-content/uploads/2017/12/placeholder-image.png",alt:"profile"})),l.a.createElement("div",{className:"inline-block p-2"},l.a.createElement("button",{className:"w-25",onClick:this.handleUplaod},"uplaod"),this.state.uploading?l.a.createElement("span",null,"Uplaoding..."):this.state.uploadSuccess?l.a.createElement("span",null,"Completed"):""))))}}]),a}(n.Component),L=function(e){Object(b.a)(a,e);var t=Object(v.a)(a);function a(){var e;Object(g.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={article:{},loading:!0},e}return Object(f.a)(a,[{key:"componentWillMount",value:function(){var e=this,t=this.props.match.params.vId,a="http://110.74.194.124:15011/v1/api/articles/".concat(t);N.a.get(a).then((function(t){var a=t.data.DATA;e.setState({loading:!1,article:a})}))}},{key:"render",value:function(){var e=this.state,t=e.article;return e.loading?l.a.createElement("h2",null,"Loading..."):l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",null,"Article"),l.a.createElement("div",{className:"card mb-3"},l.a.createElement("div",{className:"row no-gutters "},l.a.createElement("div",{className:"col-md-4 "},l.a.createElement("img",{src:t.IMAGE||"https://iwfstaff.com.au/wp-content/uploads/2017/12/placeholder-image.png",className:"card-img h-100",alt:"..."})),l.a.createElement("div",{className:"col-md-8 "},l.a.createElement("div",{className:"card-body"},l.a.createElement("h5",{className:"card-title"},t.TITLE),l.a.createElement("p",{className:"card-text"},t.DESCRIPTION))))))}}]),a}(n.Component),P=function(e){Object(b.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(g.a)(this,a),(n=t.call(this,e)).onChange=function(e){var t;n.setState((t={},Object(D.a)(t,e.target.name,e.target.value),Object(D.a)(t,"error",""),t))},n.onSubmit=function(e){if(e.preventDefault(),""===n.state.title||""===n.state.description)n.setState({error:" * Title can't be blank"});else{var t={TITLE:n.state.title,DESCRIPTION:n.state.description,IMAGE:n.state.url};N.a.put("http://110.74.194.124:15011/v1/api/articles/".concat(n.id),t).then((function(e){alert(e.data.MESSAGE),n.props.history.push("/")})).catch((function(e){return alert(e)}))}},n.laodData=function(){var e="http://110.74.194.124:15011/v1/api/articles/".concat(n.id);N.a.get(e).then((function(e){var t=e.data.DATA;n.setState({loading:!1,title:t.TITLE,description:t.DESCRIPTION,url:t.IMAGE})}))},n.handleChange=function(e){e.target.files[0]&&n.setState({image:e.target.files[0]})},n.handleUplaod=function(){n.setState({uploading:!0}),O.ref("images/".concat(n.state.image.name)).put(n.state.image).on("state_changed",(function(e){Math.round(e.bytesTransferred/e.totalBytes*100)}),(function(e){console.log(e)}),(function(){O.ref("images").child(n.state.image.name).getDownloadURL().then((function(e){n.setState({url:e,uploading:!1,uploadSuccess:!0})}))}))},n.state={title:"",description:"",error:"",image:"",url:"",uploading:!1,uploadSuccess:!1},n.id=n.props.match.params.eId,n}return Object(f.a)(a,[{key:"componentWillMount",value:function(){this.laodData()}},{key:"render",value:function(){return l.a.createElement(w.a,null,l.a.createElement(A.a,{md:8},l.a.createElement(d.a,{onSubmit:this.onSubmit},l.a.createElement(d.a.Group,null,l.a.createElement(d.a.Label,null,"Title"),l.a.createElement(d.a.Control,{type:"text",placeholder:"Enter title",name:"title",value:this.state.title,onChange:this.onChange}),l.a.createElement(d.a.Text,{className:"text-danger"},this.state.error)),l.a.createElement(d.a.Group,null,l.a.createElement(d.a.Label,null,"Description"),l.a.createElement(d.a.Control,{as:"textarea",rows:"4",placeholder:"Eneter Description",name:"description",value:this.state.description,onChange:this.onChange}),l.a.createElement(d.a.Text,{className:"text-danger"},this.state.error)),l.a.createElement(h.a,{variant:"warning",type:"submit"},"Update Article"))),l.a.createElement(A.a,{md:4},l.a.createElement("div",{className:"d-flex flex-column"},l.a.createElement("input",{className:"p-2",type:"file",onChange:this.handleChange}),l.a.createElement("div",{className:"img-box p-2"},l.a.createElement("img",{className:"w-100 h-100",src:this.state.url||"https://iwfstaff.com.au/wp-content/uploads/2017/12/placeholder-image.png",alt:"profile"})),l.a.createElement("div",{className:"inline-block p-2"},l.a.createElement("button",{className:"w-25",onClick:this.handleUplaod},"uplaod"),this.state.uploading?l.a.createElement("span",null,"Uplaoding..."):this.state.uploadSuccess?l.a.createElement("span",null,"Completed"):""))))}}]),a}(n.Component);var M=function(){return l.a.createElement(i.a,null,l.a.createElement(E,null),l.a.createElement(m.a,{className:"content"},l.a.createElement(o.c,null,l.a.createElement(o.a,{exact:!0,path:"/",component:T}),l.a.createElement(o.a,{path:"/home",component:T}),l.a.createElement(o.a,{path:"/add",component:x}),l.a.createElement(o.a,{path:"/view/:vId",component:L}),l.a.createElement(o.a,{path:"/edit/:eId",component:P}))))};a(97);c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(M,null)),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.866627c0.chunk.js.map