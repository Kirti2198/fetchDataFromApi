(this.webpackJsonpfetchdatafromapi=this.webpackJsonpfetchdatafromapi||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var a=n(0),s=n(1),r=n.n(s),c=n(7),i=n.n(c),o=(n(13),n(2)),l=n(3),j=n(5),u=n(4),d=(n(14),function(t){Object(j.a)(n,t);var e=Object(u.a)(n);function n(t){var a;return Object(o.a)(this,n),(a=e.call(this,t)).state={resData:{banners:[],restaurents:[]}},console.log(typeof a.state.resData),a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=this;fetch("https://eatoo.uberdoo.com/foodapp/public/api/guest/listRestaurant",{method:"POST",headers:{Accept:"application/json","Content-type":"application/json"},body:JSON.stringify({longitude:"80.244455",latitude:"13.0358481"})}).then((function(t){return t.json()})).then((function(e){var n=t.state.resData;n.banners=e.banners,n.restaurents=e.listRestaurants,console.log(e),console.log(n),t.setState({resData:n})}),(function(t){console.log(t)}))}},{key:"render",value:function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)("p",{children:" The Request Returned - "}),Object(a.jsx)("div",{children:this.state.resData.banners.length<=0?"No Data to Show":this.state.resData.banners.map((function(t,e){return Object(a.jsxs)("div",{children:[Object(a.jsx)("img",{src:t.bannerImage,alt:"banner image"}),Object(a.jsx)("p",{children:t.bannerImage}),Object(a.jsx)("p",{children:t.bannerId})]},t.bannerId)}))}),Object(a.jsx)("h1",{children:"Restaurents"}),this.state.resData.restaurents.map((function(t,e){return Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{style:{textAlign:"center"},children:t.restaurantName}),Object(a.jsxs)("div",{style:{display:"flex",padding:"2%"},children:[Object(a.jsx)("img",{src:t.restaurantImage,alt:"restaurent image",style:{height:"200px",width:"300px"}}),t.outlet.map((function(t,e){return Object(a.jsxs)("table",{children:[Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{children:"Dish"}),Object(a.jsx)("th",{children:"Outlet Name"}),Object(a.jsx)("th",{children:"Total Amount"})]}),Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:Object(a.jsx)("img",{src:t.image,alt:"dish img"})}),Object(a.jsx)("td",{children:t.outletName}),Object(a.jsx)("td",{children:t.totalAmount})]})]},e)}))]})]},t.restaurantId)}))]})}}]),n}(r.a.Component)),h=function(t){Object(j.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(t=e.call.apply(e,[this].concat(s))).state={visible:!0},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsx)(d,{})})}}]),n}(s.Component),b=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(e){var n=e.getCLS,a=e.getFID,s=e.getFCP,r=e.getLCP,c=e.getTTFB;n(t),a(t),s(t),r(t),c(t)}))};i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(h,{})}),document.getElementById("root")),b()}},[[15,1,2]]]);
//# sourceMappingURL=main.105fd9e0.chunk.js.map