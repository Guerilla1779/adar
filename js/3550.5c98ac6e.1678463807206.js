"use strict";(self["webpackChunkpolkaswap_exchange_web"]=self["webpackChunkpolkaswap_exchange_web"]||[]).push([[3550],{6710:function(e,t,s){s.r(t),s.d(t,{default:function(){return b}});var o=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{directives:[{name:"loading",rawName:"v-loading",value:e.parentLoading,expression:"parentLoading"}],staticClass:"route-assets"},[s(e.component,{tag:"component"})],1)},a=[],r=s(60760),n=s(70655),i=s(53545),c=s(37365),p=s(50592),u=s(67748),v=s(74614),d=s(32806);let l=class extends((0,i.Wr)(c.tA.LoadingMixin,d.Z)){constructor(...e){super(...e),(0,r.Z)(this,"subscribeOnReserves",void 0),(0,r.Z)(this,"cleanSwapReservesSubscription",void 0),(0,r.Z)(this,"setFeatureFlags",void 0),(0,r.Z)(this,"currentStageComponentName",void 0),(0,r.Z)(this,"nextStage",void 0),(0,r.Z)(this,"previousStage",void 0)}created(){this.withApi((async()=>{this.subscribeOnReserves(),this.setFeatureFlags({charts:!1,moonpay:!1})}))}beforeDestroy(){this.cleanSwapReservesSubscription()}get component(){return this.currentStageComponentName}};(0,n.__decorate)([v.aD.routeAssets.subscribeOnReserves],l.prototype,"subscribeOnReserves",void 0),(0,n.__decorate)([v.aD.routeAssets.cleanSwapReservesSubscription],l.prototype,"cleanSwapReservesSubscription",void 0),(0,n.__decorate)([v.QF.settings.setFeatureFlags],l.prototype,"setFeatureFlags",void 0),(0,n.__decorate)([v.Yn.routeAssets.currentStageComponentName],l.prototype,"currentStageComponentName",void 0),(0,n.__decorate)([v.aD.routeAssets.processingNextStage],l.prototype,"nextStage",void 0),(0,n.__decorate)([v.aD.routeAssets.processingPreviousStage],l.prototype,"previousStage",void 0),l=(0,n.__decorate)([(0,i.wA)({components:{Authorize:(0,u.y)(p.EC.RouteAssetsAuthorize),Done:(0,u.y)(p.EC.RouteAssetsDone),ProcessTemplate:(0,u.y)(p.EC.RouteAssetsProcessTemplate),ReviewDetails:(0,u.y)(p.EC.RouteAssetsReviewDetails),Routing:(0,u.y)(p.EC.RouteAssetsRouting),TransactionOverview:(0,u.y)(p.EC.RouteAssetsTransactionOverview),UploadTemplate:(0,u.y)(p.EC.RouteAssetsUploadTemplate)}})],l);var g=l,h=g,m=s(1001),_=(0,m.Z)(h,o,a,!1,null,"2bb40d9c",null),b=_.exports}}]);