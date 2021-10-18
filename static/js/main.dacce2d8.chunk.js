(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{19:function(e,t,n){},20:function(e,t,n){},23:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(9),o=n.n(c),s=(n(19),n(3)),i=n(4),u=n(6),l=n(5),h=n(8),d=(n(13),n(20),n(1)),p=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(s.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={request:""},e.handleChange=function(t){e.setState({request:t.currentTarget.value.toLowerCase()})},e.handleSubmit=function(t){if(t.preventDefault(),""===e.state.request.trim())return h.b.info("Type something to find a picture");e.props.onSubmit(e.state.request),e.setState({request:""})},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this.handleSubmit,t=this.handleChange;return Object(d.jsx)("header",{className:"Searchbar",children:Object(d.jsxs)("form",{className:"SearchForm",onSubmit:e,children:[Object(d.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(d.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(d.jsx)("input",{className:"SearchForm-input",onChange:t,type:"text",name:"request",value:this.state.request,autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})}}]),n}(r.Component),j=p,f=n(12),m=n(7),b=n.n(m),g=n(10);n(23);var v=function(e){var t=e.pictures,n=e.onClick;return t.map((function(e){return Object(d.jsx)("li",{className:"ImageGalleryItem",children:Object(d.jsx)("img",{onClick:function(){return n(e)},src:e.webformatURL,alt:e.tags,className:"ImageGalleryItem-image"})},e.id)}))},O=(n(24),n(14)),y=n.n(O);n(45);function x(){return Object(d.jsx)("div",{className:"Loader",children:Object(d.jsx)(y.a,{type:"Puff",color:"#046d0c",height:100,width:100,timeout:5e3,"margin-left":300})})}n(46);var w=function(e){var t=e.onClick;return Object(d.jsx)("button",{onClick:t,className:"Button",type:"button",children:"Load more"})};var S=function(e,t){return fetch("https://pixabay.com/api/?q=".concat(e,"&page=").concat(t,"&key=23157065-e1d5c0e7ddd229ceec096f468&image_type=photo&orientation=horizontal&per_page=12")).then((function(t){return t.ok?t.json():Promise.reject(new Error("There are no pictures with ".concat(e)))}))},k=(n(47),function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(s.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={pictures:[],error:null,page:1,status:"idle"},e.getPicturesAfterNewSearch=Object(g.a)(b.a.mark((function t(){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,S(e.props.query,e.state.page).then((function(t){e.setState({pictures:t.hits,status:"resolved"})})).catch((function(t){return e.setState({error:t,status:"rejected"})}));case 2:case"end":return t.stop()}}),t)}))),e.getPicturesFromNextPage=Object(g.a)(b.a.mark((function t(){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,S(e.props.query,e.state.page).then((function(t){var n=t.hits;e.setState((function(e){return{pictures:[].concat(Object(f.a)(e.pictures),Object(f.a)(n)),status:"resolved"}})),e.autoScroll()})).catch((function(t){return e.setState({error:t,status:"rejected"})}));case 2:case"end":return t.stop()}}),t)}))),e.autoScroll=function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})},e.handleLoadMore=function(){e.setState((function(e){return{page:e.page+1}}))},e}return Object(i.a)(n,[{key:"componentDidUpdate",value:function(){var e=Object(g.a)(b.a.mark((function e(t,n){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.query===this.props.query){e.next=4;break}return this.setState({status:"pending",pictures:[],page:1}),e.next=4,this.getPicturesAfterNewSearch();case 4:if(!(n.page!==this.state.page&&this.state.page>1)){e.next=8;break}return this.setState({status:"pending-ready"}),e.next=8,this.getPicturesFromNextPage();case 8:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.status,n=e.pictures,r=e.error;return"idle"===t?Object(d.jsx)("div",{className:"Warning",children:"Write down something to start searching for pictures"}):"pending"===t?Object(d.jsx)(x,{}):"pending-ready"===t?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("ul",{className:"ImageGallery",children:Object(d.jsx)(v,{pictures:n,onClick:this.props.onClick})}),Object(d.jsx)(x,{})]}):"rejected"===t?h.b.error(r.message):"resolved"===t?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("ul",{className:"ImageGallery",children:Object(d.jsx)(v,{pictures:n,onClick:this.props.onClick})}),n.length>0?Object(d.jsx)(w,{onClick:this.handleLoadMore}):Object(d.jsx)("div",{className:"Warning",children:"You should write down correct word for search"})]}):void 0}}]),n}(r.Component)),C=k,N=(n(48),function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(s.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.handleOverlayClick=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){var e=this.props.modalPicture;return Object(d.jsx)("div",{className:"Overlay",onClick:this.handleOverlayClick,children:Object(d.jsx)("div",{className:"Modal",children:Object(d.jsx)("img",{className:"Modal__Picture",src:e.largeImageURL,alt:e.tags})})})}}]),n}(r.Component)),P=N,F=(n(49),function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(s.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={pictureQuery:"",showModal:!1,modalPicture:""},e.handleFormSubmit=function(t){e.setState({pictureQuery:t})},e.openModal=function(t){e.setState({showModal:!0,modalPicture:t})},e.closeModal=function(){e.setState({showModal:!1})},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this.state,t=e.pictureQuery,n=e.showModal,r=e.modalPicture;return Object(d.jsxs)("div",{children:[Object(d.jsx)(j,{onSubmit:this.handleFormSubmit}),Object(d.jsx)(C,{query:t,onClick:this.openModal}),n&&Object(d.jsx)(P,{modalPicture:r,onClose:this.closeModal}),Object(d.jsx)(h.a,{position:"top-center",autoClose:2e3})]})}}]),n}(r.Component));F.defaultProps={};var M=F,q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,51)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),r(e),a(e),c(e),o(e)}))};o.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(M,{})}),document.getElementById("root")),q()}},[[50,1,2]]]);
//# sourceMappingURL=main.dacce2d8.chunk.js.map