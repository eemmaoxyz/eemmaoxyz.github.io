(function(){var __vite_style__=document.createElement("style");__vite_style__.innerHTML='@charset "UTF-8";.news-container[data-v-637be582]{--van-notice-bar-font-size: .2rem;--van-notice-bar-line-height: .32rem;--van-steps-background-color: #fff;min-height:calc(100vh - 2.4rem);font-family:Poppins-Regular,Haas Grot Text R,PingFangSC-Regular,Helvetica Neue,Microsoft YaHei,\\5fae\\8f6f\\96c5\\9ed1,Arial,sans-serif;font-size:.28rem;color:#333;letter-spacing:0;font-weight:400}.news-container .container[data-v-637be582]{overflow-y:auto;width:100%;margin-top:0}.news-container .van-step--vertical[data-v-637be582]:not(:last-child):after{border-bottom-width:0}.news-container .content .title[data-v-637be582]{font-family:PingFangSC-Medium;font-size:.28rem;color:#333;font-weight:bolder;display:flex}.news-container .content .title.padding[data-v-637be582]{padding:.3rem .3rem .06rem}.news-container .content .font-500[data-v-637be582]{font-weight:600}.news-container .content .blue[data-v-637be582]{color:#3f80f7;font-size:.28rem;margin-right:.1rem}.news-container .content .circle[data-v-637be582]{width:.18rem;height:.18rem;border-radius:100%;border:.03rem solid #666666;display:block;background:#fff}.news-container .content .item[data-v-637be582]{user-select:none}.news-container .content .item.active[data-v-637be582]{background:#eee}.news-container .content .item .flex-between[data-v-637be582]{display:flex;justify-content:space-between;align-content:center}.news-container .content .item .flex-end[data-v-637be582]{display:flex;justify-content:flex-end;align-content:center}.news-container .content .item .color-999[data-v-637be582]{color:#999}.news-container .content .item .color-333[data-v-637be582]{color:#333}.news-container .content .item .color-666[data-v-637be582]{color:#666}.news-container .content .item .font-10[data-v-637be582]{font-size:.2rem}.news-container .content .item .span1[data-v-637be582]{font-size:.24rem;color:#666}.news-container .content .item .tag[data-v-637be582]{padding:.08rem .16rem;font-size:.24rem;line-height:.32rem;border-radius:.08rem}.news-container .content .item .tag.rise[data-v-637be582]{background:rgba(18,184,134,.1019607843);color:#12b886}.news-container .content .item .tag.fall[data-v-637be582]{background:rgba(246,70,93,.1019607843);color:#f6465d;margin-left:.28rem}.news-container .content .item .mt-5[data-v-637be582]{margin-top:.1rem}.news-container .content .item .mt-10[data-v-637be582]{margin-top:.2rem}.news-container .content .item img[data-v-637be582]{width:100%}.news-container .content .item .flex-start[data-v-637be582]{display:flex;align-items:center}.news-container .content .item .icon-v[data-v-637be582]{color:#3f80f7;font-size:.32rem;vertical-align:middle}.news-container .ad[data-v-637be582]{padding:0 .3rem;position:relative}.news-container .ad .bg[data-v-637be582]{background:rgba(0,0,0,.4);padding:.06rem;border-radius:.04rem;font-size:.2rem;position:absolute;z-index:2;color:#fff}.news-container .ad .bg.absolute-left[data-v-637be582]{left:.4rem;top:.1rem}.news-container .ad .bg.absolute-right[data-v-637be582]{right:.4rem;top:.1rem}.news-container .ad .my-swipe[data-v-637be582]{margin-top:.6rem;margin-bottom:.6rem}.news-container .ad .my-swipe .van-swipe-item img[data-v-637be582]{width:100%}.news-container .ad .iconfont[data-v-637be582]{vertical-align:middle}.news-container .ml-5[data-v-637be582]{margin-left:.1rem}.news-container .overflow[data-v-637be582]{overflow:hidden}.news-container .lineHight20[data-v-637be582]{line-height:.4rem;font-size:.26rem;user-select:none}.news-container .flex-between-notice[data-v-637be582]{display:flex;align-items:center;justify-content:space-between;padding:.3rem .3rem .06rem}.news-container .flex-between-notice .notice[data-v-637be582]{width:.52rem}\n',document.head.appendChild(__vite_style__),System.register(["./index-legacy.f19bf61d.js","./utils-legacy.3d2885ca.js","./index-legacy.5c12ea0e.js"],(function(exports){"use strict";var service,_export_sfc,ImagePreview,resolveComponent,openBlock,createElementBlock,createBlock,createCommentVNode,createBaseVNode,withDirectives,vShow,toDisplayString,normalizeStyle,createVNode,withCtx,Fragment,renderList,normalizeClass,withModifiers,createTextVNode,pushScopeId,popScopeId,copy;return{setters:[function(e){service=e.s,_export_sfc=e._,ImagePreview=e.a0,resolveComponent=e.r,openBlock=e.o,createElementBlock=e.c,createBlock=e.e,createCommentVNode=e.j,createBaseVNode=e.h,withDirectives=e.v,vShow=e.y,toDisplayString=e.t,normalizeStyle=e.n,createVNode=e.b,withCtx=e.w,Fragment=e.F,renderList=e.d,normalizeClass=e.l,withModifiers=e.m,createTextVNode=e.k,pushScopeId=e.p,popScopeId=e.q},function(e){copy=e.c},function(){}],execute:function(){function getNewsList(e){return service({method:"get",url:"/v1api/v2/discover/news",params:{lang:e.lang,userAddress:e.userAddress,pageNO:e.pageNo,pageSize:e.pageSize}})}function newsVote(e){return service({method:"post",url:"/v1api/v2/discover/newsVote",params:{userAddress:e.userAddress,newsId:e.newsId,vote:e.vote}})}function getNewsAd(){return service({method:"get",url:"/v1api/v2/discover/newsAd"})}var _imports_0="/assets/ave-empty.a9f4da8d.png",news_vue_vue_type_style_index_0_scoped_true_lang="";const _sfc_main={name:"GlobalCommunity",components:{},data(){return{active:-1,list:[],loading:!1,images:[],showAd:eval(localStorage.getItem("showAd")||!0),showNotice:eval(localStorage.getItem("showNotice")||!0),conditions:{pageNo:1,pageSize:10,lang:"",userAddress:""},total:"",day:"",finished:!1,refreshing:!1,top:0,bottom:0,count:0,timer:null,copying:[],index:0,isShowNotice:!1,error:!1}},mounted(){this.$store.commit("switchTypeUpDown",this.$route.query?.typeUpDown||0),this.getNewsList(this.conditions),this.getNewsAd(),this.$nextTick((()=>{this.top=this.$refs?.top?.$el?.offsetHeight||0,this.bottom=this.$refs?.bottom?.$el?.offsetHeight||0})),this.getShowNotice()},computed:{language(){return this.$store.getters.language}},watch:{"$store.state.currentAccount"(e){this.refreshing=!1,this.loading=!1,this.list=[],this.conditions.pageNo=1,this.getNewsList(this.conditions)},showNotice(e){e||(this.top=0)},showAd(e){e||(this.bottom=0)}},methods:{async getShowNotice(){return this.isShowNotice=await this.$f.isShowNotice(),this.isShowNotice},clearTouch(){this.timer&&(clearTimeout(this.timer),this.copying[this.index]=!1)},longTap(e,t){this.copying[t]=!0,this.index=t,clearTimeout(this.timer),this.timer=setTimeout((()=>{this.timer=null;let o="";o=e.content?.items[0]?.legacy.full_text?.length>500&&"twitter"!==e.source?e.content?.items[0]?.legacy.full_text.slice(0,100)+"...":e.content?.items[0]?.legacy.full_text;let i=e.url;copy(`${o}\n\n${i}\n        `),this.copying[t]=!1}),500)},closeNotice(){this.showNotice=!1,localStorage.showNotice=!1},closeAd(){this.showAd=!1,localStorage.showAd=!1},getNewsList(e){return new Promise(((t,o)=>{this.loading=!0,this.conditions.userAddress=this.$store.state.currentAccount,this.conditions.lang="zh-cn"===this.language||"zh-tw"===this.language?"zh":"en",getNewsList(e).then((e=>{let o=e?.data?.list;this.total=e?.data?.total,1==this.refreshing&&(this.list=o),0==this.count&&(this.list=o,this.day=this.list[0]?.created_at?this.$f.formatDate(this.list[0]?.created_at||"","YYYY-MM-DD"):"",this.$nextTick((()=>{let e=this.$route.query.id;e&&document.getElementById(e)?.scrollIntoView()}))),this.copying=this.list.map((e=>!1)),this.count++,t(o)})).catch((e=>{this.error=!0,console.log(e)})).finally((()=>{this.loading=!1}))}))},async refresh(){this.refreshing=!0,this.conditions.pageNo=1,await this.getNewsList(this.conditions),this.refreshing=!1},async onLoad(){this.conditions.pageNo++;let e=await this.getNewsList(this.conditions);this.list.push(...e),this.list.length>=this.total&&(this.finished=!0)},dealDate(e){var t=Date.parse(new Date),o=e,i=parseInt(t)/1e3-parseInt(o);if((i=Math.abs(i))<10)return this.$t("justNow");if(i<60&&i>=10)return Math.floor(i)+this.$t("ss");var n=i/60;if(n<60)return Math.floor(n)+this.$t("min");var s=i/3600;return s<24?Math.floor(s)+this.$t("hour"):s>=24?this.$f.formatDate(e):void 0},view(e){this.$f.openBrowserAll(e.url)},getNewsAd(){getNewsAd().then((e=>{this.images=e?.data||[]})).finally((()=>{}))},newsVote(e,t,o){let i=this.$store.state.currentAccount;if(!i||"undefined"===i)return void this.$toast({message:this.$t("connectWalletFirst"),position:"top"});if(1==e.myVote&&1==t)return void this.$toast({message:this.$t("voted"),position:"top"});if(-1==e.myVote&&-1==t)return void this.$toast({message:this.$t("voted"),position:"top"});newsVote({userAddress:i,newsId:e.id,vote:t}).then((()=>{this.$toast({message:this.$t("success")}),this.list[o].myVote=t,1==t?(this.list[o].badCount=this.list[o].badCount>0?this.list[o].badCount-1:0,this.list[o].goodCount=this.list[o].goodCount+1):(this.list[o].badCount=this.list[o].badCount+1,this.list[o].goodCount=this.list[o].goodCount>0?this.list[o].goodCount-1:0)})).catch((e=>{this.$toast({message:e})}))},ImagePreview:ImagePreview}},_withScopeId=e=>(pushScopeId("data-v-637be582"),e=e(),popScopeId(),e),_hoisted_1={class:"news-container"},_hoisted_2={class:"content"},_hoisted_3={class:"flex-between-notice"},_hoisted_4={class:"title"},_hoisted_5=_withScopeId((()=>createBaseVNode("i",{class:"iconfont icon-calendar blue"},null,-1))),_hoisted_6={class:"font-500"},_hoisted_7=_withScopeId((()=>createBaseVNode("use",{"xlink:href":"#icon-kaiqitongzhi"},null,-1))),_hoisted_8=[_hoisted_7],_hoisted_9=_withScopeId((()=>createBaseVNode("span",{class:"circle"},null,-1))),_hoisted_10=["onTouchstartPassive"],_hoisted_11={class:"flex-between"},_hoisted_12={class:"color-999"},_hoisted_13={class:"color-999"},_hoisted_14={key:0,class:"flex-start mt-10"},_hoisted_15=_withScopeId((()=>createBaseVNode("img",{src:_imports_0,style:{width:"30px",height:"30px"},alt:"",srcset:""},null,-1))),_hoisted_16={class:"ml-5"},_hoisted_17={class:"block title"},_hoisted_18=_withScopeId((()=>createBaseVNode("i",{class:"iconfont icon-v"},null,-1))),_hoisted_19={key:0,class:"color-999 font-10"},_hoisted_20=_withScopeId((()=>createBaseVNode("i",{class:"iconfont icon-forward font-10"},null,-1))),_hoisted_21={key:1,class:"title mt-10 block"},_hoisted_22={class:"color-666 mt-10"},_hoisted_23=["innerHTML"],_hoisted_24={class:"flex-end mt-10"},_hoisted_25=["onClick"],_hoisted_26={key:1,class:"ad",ref:"bottom"},_hoisted_27={class:"bg absolute-left"},_hoisted_28=["src","alt"];function _sfc_render(e,t,o,i,n,s){const a=resolveComponent("van-notice-bar"),r=resolveComponent("van-image"),c=resolveComponent("van-col"),l=resolveComponent("van-row"),d=resolveComponent("van-step"),h=resolveComponent("van-steps"),m=resolveComponent("van-list"),g=resolveComponent("van-pull-refresh"),p=resolveComponent("van-icon"),_=resolveComponent("van-swipe-item"),u=resolveComponent("van-swipe");return openBlock(),createElementBlock("section",_hoisted_1,[n.showNotice?(openBlock(),createBlock(a,{key:0,ref:"top",wrapable:"",mode:"closeable",text:e.$t("newsTip"),onClose:s.closeNotice},null,8,["text","onClose"])):createCommentVNode("",!0),createBaseVNode("div",_hoisted_2,[createBaseVNode("div",_hoisted_3,[withDirectives(createBaseVNode("div",_hoisted_4,[_hoisted_5,createBaseVNode("span",_hoisted_6,toDisplayString(n.day),1)],512),[[vShow,n.day]]),n.isShowNotice?(openBlock(),createElementBlock("svg",{key:0,class:"icon-svg notice","aria-hidden":"true",onClick:t[0]||(t[0]=(...t)=>e.$f.jumpNotice&&e.$f.jumpNotice(...t))},_hoisted_8)):createCommentVNode("",!0)]),createBaseVNode("div",{class:"container",ref:"middle",style:normalizeStyle({height:`calc(100vh - ${n.top}px - ${n.bottom}px)`})},[createVNode(g,{modelValue:n.refreshing,"onUpdate:modelValue":t[6]||(t[6]=e=>n.refreshing=e),onRefresh:s.refresh,"loosing-text":e.$t("loosingText"),"pulling-text":e.$t("pullingText"),"loading-text":e.$t("loading")},{default:withCtx((()=>[createVNode(m,{loading:n.loading,"onUpdate:loading":t[4]||(t[4]=e=>n.loading=e),finished:n.finished,"loading-text":e.$t("loading"),"finished-text":e.$t("noMore"),error:n.error,"onUpdate:error":t[5]||(t[5]=e=>n.error=e),"error-text":e.$t("errorText"),onLoad:s.onLoad},{default:withCtx((()=>[createVNode(h,{direction:"vertical",active:"active"},{default:withCtx((()=>[(openBlock(!0),createElementBlock(Fragment,null,renderList(n.list,((o,i)=>(openBlock(),createBlock(d,{key:i,id:o.id},{"inactive-icon":withCtx((()=>[_hoisted_9])),default:withCtx((()=>[createBaseVNode("div",{class:normalizeClass(["item",{active:n.copying[i]}]),onContextmenu:t[1]||(t[1]=withModifiers((()=>{}),["prevent"])),onTouchstartPassive:e=>s.longTap(o,i),onTouchmovePassive:t[2]||(t[2]=(...e)=>s.clearTouch&&s.clearTouch(...e)),onTouchendPassive:t[3]||(t[3]=(...e)=>s.clearTouch&&s.clearTouch(...e))},[createBaseVNode("div",_hoisted_11,[createBaseVNode("span",_hoisted_12,toDisplayString(s.dealDate(o.created_at)),1),createBaseVNode("span",_hoisted_13,toDisplayString(e.$t("source"))+toDisplayString(o.source),1)]),"twitter"===o.source?(openBlock(),createElementBlock("div",_hoisted_14,[createVNode(r,{class:"logo",width:"30px",height:"30px",src:o.content?.items[0]?.user?.profile_image_url_https,fit:"contain","lazy-load":"","loading-icon":`${e.$store.state.s3BaseUrl}logo/ave_gray.png`,"error-icon":`${e.$store.state.s3BaseUrl}logo/ave_gray.png`,round:""},{error:withCtx((()=>[_hoisted_15])),_:2},1032,["src","loading-icon","error-icon"]),createBaseVNode("div",_hoisted_16,[createBaseVNode("span",_hoisted_17,[createTextVNode(toDisplayString(o.content?.items[0]?.user?.name),1),_hoisted_18]),o.content?.items[0]?.legacy?.retweeted_status_result?(openBlock(),createElementBlock("span",_hoisted_19,[_hoisted_20,createTextVNode(" "+toDisplayString(e.$t("forward"))+toDisplayString(o.content?.items[0]?.legacy?.retweeted_status_result.user.name),1)])):createCommentVNode("",!0)])])):(openBlock(),createElementBlock("span",_hoisted_21,toDisplayString(o.content?.items[0]?.legacy.title),1)),createBaseVNode("div",_hoisted_22,[createBaseVNode("div",{class:"overflow lineHight20",innerHTML:o.content?.items[0]?.legacy.full_text?.length>500&&"twitter"!==o.source?o.content?.items[0]?.legacy.full_text.slice(0,100)+"...":o.content?.items[0]?.legacy.full_text},null,8,_hoisted_23),o.content?.items[0]?.legacy.media?(openBlock(),createBlock(l,{key:0,gutter:"5",class:"mt-10"},{default:withCtx((()=>[(openBlock(!0),createElementBlock(Fragment,null,renderList(o.content?.items[0]?.legacy.media,((t,o)=>(openBlock(),createBlock(c,{span:"8",key:o},{default:withCtx((()=>["photo"===t.type?(openBlock(),createBlock(r,{key:0,src:t.media_url_https,width:"100%",fit:"contain","lazy-load":"","loading-icon":`${e.$store.state.s3BaseUrl}logo/ave_gray.png`,"error-icon":`${e.$store.state.s3BaseUrl}logo/ave_gray.png`,onClick:withModifiers((e=>s.ImagePreview({images:[t.media_url_https],closeable:!0})),["stop"])},null,8,["src","loading-icon","error-icon","onClick"])):createCommentVNode("",!0)])),_:2},1024)))),128))])),_:2},1024)):createCommentVNode("",!0)]),createBaseVNode("div",_hoisted_24,[o.url?(openBlock(),createElementBlock("span",{key:0,class:"span1",onClick:e=>s.view(o)},toDisplayString(e.$t("view")),9,_hoisted_25)):createCommentVNode("",!0)])],42,_hoisted_10)])),_:2},1032,["id"])))),128)),createVNode(d,null,{"inactive-icon":withCtx((()=>[])),_:1})])),_:1})])),_:1},8,["loading","finished","loading-text","finished-text","error","error-text","onLoad"])])),_:1},8,["modelValue","onRefresh","loosing-text","pulling-text","loading-text"])],4)]),n.showAd&&n.images.length>0?(openBlock(),createElementBlock("div",_hoisted_26,[createBaseVNode("span",_hoisted_27,toDisplayString(e.$t("ad")),1),createVNode(p,{class:"bg absolute-right",name:"cross",onClick:s.closeAd},null,8,["onClick"]),createVNode(u,{class:"my-swipe",autoplay:3e3,"indicator-color":"white"},{default:withCtx((()=>[(openBlock(!0),createElementBlock(Fragment,null,renderList(n.images,(e=>(openBlock(),createBlock(_,{key:e},{default:withCtx((()=>[createBaseVNode("img",{src:e.PictureLink,alt:e.remark},null,8,_hoisted_28)])),_:2},1024)))),128))])),_:1})],512)):createCommentVNode("",!0)])}var news=exports("default",_export_sfc(_sfc_main,[["render",_sfc_render],["__scopeId","data-v-637be582"]]))}}}))})();
