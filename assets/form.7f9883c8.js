import{d as i,o as r,c as d,t as _,a as e,b as o,u as l,F as b,e as p,_ as h,s,f as x}from"./index.4f6df1fb.js";const a=i({__name:"bouton",props:{libelle:String},setup(n){return(c,t)=>(r(),d("button",null,_(n.libelle),1))}}),m=p('<div class="flex"><h1 class="uppercase bold bandeau okine_bold text-black"> Restez Connect\xE9 </h1><h1 class="uppercase bold bandeau okine_bold_outline text-black"> Restez Connect\xE9 </h1><h1 class="uppercase bold bandeau okine_bold text-black"> Restez Connect\xE9 </h1><h1 class="uppercase bold bandeau okine_bold_outline text-black"> Restez Connect\xE9 </h1></div>',1),g={class:"flex justify-center"},k={class:"flex bg-black px-8 py-4 justify-center gap-10 items-center mt-8 mb-16 rounded-3xl"},v=e("p",{class:"font-cano uppercase text-3xl bold text-white"}," Connectez-vous ",-1),f=e("br",null,null,-1),w=e("br",null,null,-1),y=e("br",null,null,-1),C=e("br",null,null,-1),z=e("label",{id:"status"},null,-1),E=e("img",{src:h,alt:"",class:"w-540 my-4 rounded-3xl"},null,-1),$=i({__name:"log",setup(n){return(c,t)=>(r(),d(b,null,[m,e("div",g,[e("div",k,[e("div",null,[v,o(a,{libelle:"Authentification avec Google",class:"mb-3 mt-16 rounded-2xl w-96 h-14 bg-white text-black okine_regular hover:bg-slate-200",onPointerdown:t[0]||(t[0]=u=>l(s).auth.signIn({provider:"google"}))}),f,o(a,{libelle:"Authentification avec Facebook",class:"mb-3 mt-4 rounded-2xl w-96 h-14 bg-blue-600 text-white okine_regular hover:bg-blue-800",onPointerdown:t[1]||(t[1]=u=>l(s).auth.signIn({provider:"facebook"}))}),w,o(a,{libelle:"Deconnexion",class:"border-2 mt-3 mb-28 rounded-2xl w-36 h-14 text-white okine_regular hover:bg-white hover:text-black",onPointerdown:t[2]||(t[2]=u=>l(s).auth.signOut())}),y,C,z]),E])])],64))}});const R=i({__name:"form",props:{id:null},setup(n){return(c,t)=>(r(),x($,{id:n.id},null,8,["id"]))}});export{R as default};
