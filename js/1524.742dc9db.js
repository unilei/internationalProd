"use strict";(self["webpackChunkeslweb"]=self["webpackChunkeslweb"]||[]).push([[1524],{1524:function(e,s,t){t.r(s),t.d(s,{default:function(){return h}});var n=t(6252),l=t(6612);const i=e=>((0,n.dD)("data-v-05581624"),e=e(),(0,n.Cn)(),e),a={class:"us-bg"},r=i((()=>(0,n._)("h1",null,"Industry News",-1))),d=i((()=>(0,n._)("div",{class:"news-t"},[(0,n._)("div",{class:"news-left-line"}),(0,n._)("div",{class:"news-label"},"Industry News")],-1))),c={class:"news-content"},u={class:"news-item-img-container"},o={class:"news-item-title"},w={class:"news-item-desc"},m={class:"news-item-operation"},g={class:"news-item-readmore"},_=(0,n.Uk)("Continue Reading");function f(e,s,t,i,f,v){const b=(0,n.up)("el-col"),p=(0,n.up)("el-row"),y=(0,n.up)("el-image"),h=(0,n.up)("el-button"),k=(0,n.Q2)("loading");return(0,n.wg)(),(0,n.iD)("div",a,[(0,n.Wm)(p,{class:"banner-row",gutter:0,align:"middle",justify:"center"},{default:(0,n.w5)((()=>[(0,n.Wm)(b,{class:"banner-bg",xs:24,sm:24,md:24,lg:24,xl:24},{default:(0,n.w5)((()=>[r])),_:1})])),_:1}),(0,n.wy)(((0,n.wg)(),(0,n.j4)(p,{class:"news-container",align:"middle",justify:"center"},{default:(0,n.w5)((()=>[(0,n.Wm)(b,{xs:24,sm:24,md:24,lg:24,xl:24},{default:(0,n.w5)((()=>[d,(0,n._)("div",c,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(f.articleListData,((e,s)=>((0,n.wg)(),(0,n.iD)("div",{class:"news-item",key:s},[(0,n._)("div",u,[(0,n.Wm)(y,{class:"news-item-img",src:""!=e.user_url?e.user_url:e.url,fit:"cover"},null,8,["src"])]),(0,n._)("div",o,(0,l.zw)(e.title),1),(0,n._)("div",w,(0,l.zw)(e.desc),1),(0,n._)("div",m,[(0,n._)("div",g,[(0,n.Wm)(h,{type:"primary",round:"",onClick:s=>v.turnDetail(e.link)},{default:(0,n.w5)((()=>[_])),_:2},1032,["onClick"])])])])))),128))])])),_:1})])),_:1})),[[k,f.articleListData.length<=0]])])}var v=t(1836),b={name:"list",data(){return{articleListData:[]}},mounted(){this.getAdsList()},methods:{getAdsList(){let e=localStorage.getItem("identity"),s={page:1,limit:1e4};(0,v.tb)(s).then((s=>{if(console.log(s),200==s.code){let t=s.message,n=[];0!=e&&e||(n=t.filter((e=>"guest_industry_news"==e.name))),1==e&&(n=t.filter((e=>"educator_industry_news"==e.name))),2==e&&(n=t.filter((e=>"business_industry_news"==e.name))),3==e&&(n=t.filter((e=>"vendor_industry_news"==e.name)));let l=n[0].data;this.articleListData=l}})).catch((e=>{console.log(e),this.$message.error(e.msg)}))},turnDetail(e){window.open(e,"_blank")}}},p=t(8118);const y=(0,p.Z)(b,[["render",f],["__scopeId","data-v-05581624"]]);var h=y}}]);
//# sourceMappingURL=1524.742dc9db.js.map