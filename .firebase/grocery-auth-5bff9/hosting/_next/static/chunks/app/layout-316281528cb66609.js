(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{9514:function(e,t,r){Promise.resolve().then(r.bind(r,3430)),Promise.resolve().then(r.bind(r,1519)),Promise.resolve().then(r.bind(r,2906)),Promise.resolve().then(r.t.bind(r,4321,23)),Promise.resolve().then(r.t.bind(r,8877,23))},3430:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return shared_Navbar}});var n=r(7437),s=r(1519),i=r(1396),c=r.n(i),a=r(2265),o=r(6691),l=r.n(o),u={src:"/_next/static/media/spinner.3ed2ce77.gif",height:200,width:200,blurWidth:0,blurHeight:0},Snipper=()=>(0,n.jsx)("div",{className:"w-12 h-screen flex items-center justify-center",children:(0,n.jsx)(l(),{src:u,alt:"loading.."})}),shared_Navbar=()=>{let{user:e,googleSignIn:t,logOut:r}=(0,s.UserAuth)(),[i,o]=(0,a.useState)(!0),handleSignIn=async()=>{try{await t()}catch(e){console.log(e)}},handleSignOut=async()=>{try{await r()}catch(e){console.log(e)}};return(0,a.useEffect)(()=>{let checkAuthentication=async()=>{await new Promise(e=>setTimeout(e,50)),o(!1)};checkAuthentication()},[e]),(0,n.jsx)("header",{className:"text-gray-600 body-font",children:(0,n.jsxs)("div",{className:"container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center",children:[(0,n.jsx)(c(),{href:"/",className:"flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0",children:(0,n.jsx)("span",{className:"ml-3 text-xl",children:"AgroMart"})}),(0,n.jsxs)("nav",{className:"md:ml-auto flex flex-wrap items-center text-base justify-center",children:[(0,n.jsx)(c(),{href:"/components/contact",className:"mr-5 hover:bg-gray-100",children:"Contact"}),e?(0,n.jsx)(c(),{href:"/components/cart",className:"inline-flex items-center border-0  px-3 focus:outline-none hover:bg-gray-200 rounded text-base  md:mt-0",children:"Cart"}):null,i?(0,n.jsx)(Snipper,{}):e?(0,n.jsxs)("div",{className:"flex justify-center items-center",children:[(0,n.jsx)("p",{className:"pl-5 pr-5 hover:bg-gray-200 cursor-pointer",onClick:handleSignOut,children:"Sign out"}),(0,n.jsx)("p",{children:(0,n.jsx)("img",{alt:"ii",src:e.photoURL,className:"w-10 h-10 object-cover rounded-full "})})]}):(0,n.jsx)("ul",{className:"flex ",children:(0,n.jsx)("li",{onClick:handleSignIn,className:"p-2 hover:bg-gray-200 cursor-pointer",children:"Login"})})]})]})})}},1519:function(e,t,r){"use strict";r.r(t),r.d(t,{AuthContextProvider:function(){return AuthContextProvider},UserAuth:function(){return UserAuth}});var n=r(7437),s=r(2265),i=r(3085),c=r(994);let a=(0,c.ZF)({apiKey:"AIzaSyCrosuaB_V8Jgcz_4HheuK2pZRjCx8oxxs",authDomain:"grocery-auth-5bff9.firebaseapp.com",projectId:"grocery-auth-5bff9",storageBucket:"grocery-auth-5bff9.appspot.com",messagingSenderId:"529847101509",appId:"1:529847101509:web:6c984f61eaa019171b9b2c"}),o=(0,i.v0)(a),l=(0,s.createContext)(),AuthContextProvider=e=>{let{children:t}=e,[r,c]=(0,s.useState)(null);return(0,s.useEffect)(()=>{let e=(0,i.Aj)(o,e=>{c(e)});return()=>e()},[r]),(0,n.jsx)(l.Provider,{value:{user:r,googleSignIn:()=>{let e=new i.hJ;(0,i.rh)(o,e)},logOut:()=>{(0,i.w7)(o)}},children:t})},UserAuth=()=>(0,s.useContext)(l)},2906:function(e,t,r){"use strict";r.r(t),r.d(t,{QueryProvider:function(){return QueryProvider}});var n=r(7437),s=r(938),i=r(165);r(2265);let c=new s.S,QueryProvider=e=>{let{children:t}=e;return(0,n.jsx)(i.QueryClientProvider,{client:c,children:t})}},8877:function(){}},function(e){e.O(0,[214,103,564,971,864,744],function(){return e(e.s=9514)}),_N_E=e.O()}]);