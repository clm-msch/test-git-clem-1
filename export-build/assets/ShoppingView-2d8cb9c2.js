import{i as d,o,d as l,e as t,F as i,k as n,b as a,t as e}from"./index-0c582f15.js";const r={class:"pt-8 pb-16"},_=t("div",{class:"mb-2 flex items-center justify-center sm:justify-start gap-4"},[t("img",{src:"https://res.cloudinary.com/diurvm1bd/image/upload/v1683323057/Amazitruc_pqz6nb.svg"}),t("p",null," Tous le matos dont tu as besoin et même ce dont tu n'as pas besoin ")],-1),u={class:"flex flex-col"},f=t("h2",{class:"text-2xl font-bold mb-4 sm:text-left text-center"}," Bureaux : ",-1),x={class:"flex flex-wrap gap-4 sm:justify-start justify-center"},h={class:"flex justify-center"},m=["src"],p={class:"p-4"},b={class:"font-bold text-xl mb-2"},g={class:"text-gray-700 text-base"},v={class:"font-bold text-xl mb-2"},w=t("button",{class:"bg-amazitruc hover:bg-dark_amazitruc w-full font-bold text-white py-2 px-4 rounded-lg"}," Acheter ",-1),y={class:"flex flex-col mt-4"},j=t("h2",{class:"text-2xl font-bold mb-4 sm:text-left text-center"}," Serveurs : ",-1),k={class:"flex flex-wrap gap-4 sm:justify-start justify-center"},z={class:"flex justify-center"},B=["src"],S={class:"p-4"},A={class:"font-bold text-xl mb-2"},D={class:"text-gray-700 text-base"},F={class:"font-bold text-xl mb-2"},V=t("button",{class:"bg-amazitruc hover:bg-dark_amazitruc w-full font-bold text-white py-2 px-4 rounded-lg"}," Acheter ",-1),T={__name:"ShoppingView",setup(q){const c=d();return(E,L)=>(o(),l("div",r,[_,t("div",u,[f,t("div",x,[(o(!0),l(i,null,n(a(c).workplaces,s=>(o(),l("div",{key:a(c).workplaces.id,class:"bg-white flex flex-col justify-between w-60 shadow-lg rounded-lg overflow-hidden"},[t("div",h,[t("img",{src:s.image,class:"w-16"},null,8,m)]),t("div",p,[t("h3",b,e(s.name),1),t("p",g,e(s.description),1),t("p",v,e(s.price)+"€ ",1),w])]))),128))])]),t("div",y,[j,t("div",k,[(o(!0),l(i,null,n(a(c).servers,s=>(o(),l("div",{key:a(c).servers.id,class:"bg-white flex flex-col justify-between w-60 shadow-lg rounded-lg overflow-hidden"},[t("div",z,[t("img",{src:s.image,class:"w-16"},null,8,B)]),t("div",S,[t("h3",A,e(s.name),1),t("p",D,e(s.description),1),t("p",F,e(s.price)+"€ ",1),V])]))),128))])])]))}};export{T as default};
