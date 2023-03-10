"use strict";(self["webpackChunkpolkaswap_exchange_web"]=self["webpackChunkpolkaswap_exchange_web"]||[]).push([[5765],{65765:function(t,e,a){a.r(e),a.d(e,{default:function(){return y}});var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"amount-table"},[a("div",{staticClass:"amount-table-item"},[a("div",{staticClass:"amount-table-item__title"},[t._v(t._s(t.formatted.title))]),t.showTable?[t.formatted.subtitle?a("div",{staticClass:"amount-table-item__subtitle"},[t._v(t._s(t.formatted.subtitle))]):t._e(),a("el-checkbox-group",{model:{value:t.innerModel,callback:function(e){t.innerModel=e},expression:"innerModel"}},[a(t.tableGroupComponent,{tag:"component",staticClass:"amount-table-item-group",attrs:{disabled:t.disabled,size:"big"}},[a("div",{staticClass:"amount-table-item-content"},[a("div",{staticClass:"amount-table-item-content__header"},t._l(t.formatted.limit,(function(e,o){return a("div",{key:o,staticClass:"amount-table-item__amount"},[a("formatted-amount-with-fiat-value",{attrs:{"value-class":"amount-table-value","with-left-shift":"","value-can-be-hidden":"",value:t.isCodecString?t.getFPNumberFromCodec(e.amount,e.asset.decimals).toLocaleString():e.amount,"font-size-rate":t.FontSizeRate.MEDIUM,"asset-symbol":e.asset.symbol,"fiat-value":t.isCodecString?t.getFiatAmountByCodecString(e.amount,e.asset):t.getFiatAmountByString(e.amount,e.asset),"fiat-font-size-rate":t.FontSizeRate.MEDIUM}},[t.formatted.total&&0===o?a("reward-item-tooltip",{attrs:{value:t.formatted.total.amount,asset:t.formatted.total.asset}}):t._e()],1)],1)})),0),t.formatted.rewards&&0!==t.formatted.rewards.length?a("div",{staticClass:"amount-table-item-content__body"},t._l(t.formatted.rewards,(function(e,o){return a(t.tableItemComponent,{key:e.type,tag:"component",class:["amount-table-subitem",{complex:t.complexGroup}],attrs:{label:e.type,disabled:t.isDisabledRewardItem(e)}},[t.simpleGroup&&0!==o?t._e():a("s-divider",{class:["amount-table-divider",t.theme]}),a("div",{staticClass:"amount-table-subitem__title"},[t.simpleGroup?[t._v("—")]:t.formatted.total?[t._v(" "+t._s(t.t("rewards.totalVested"))+" "+t._s(t.t("rewards.forText"))+" ")]:t._e(),t.complexGroup?t._e():[t._v(" "+t._s(e.title)+" ")]],2),!t.simpleGroup&&e.limit?t._l(e.limit,(function(e,o){return a("div",{key:o,staticClass:"amount-table-subitem__row"},[a("formatted-amount-with-fiat-value",{attrs:{"value-class":"amount-table-value","with-left-shift":"","value-can-be-hidden":"",value:t.formatCodecNumber(e.amount),"font-size-rate":t.FontSizeRate.MEDIUM,"asset-symbol":e.asset.symbol,"fiat-value":t.getFiatAmountByCodecString(e.amount,e.asset),"fiat-font-size-rate":t.FontSizeRate.MEDIUM}},[e.total?a("reward-item-tooltip",{attrs:{value:e.total,asset:e.asset}}):t._e()],1)],1)})):t._e()],2)})),1):t._e()])])],1)]:t._e()],2),t._t("default")],2)},i=[],s=a(60760),r=a(70655),l=a(53545),n=a(37365),d=a(72305),m=a(32806),u=a(85530),p=a(80710),c=a(16546);let _=class extends((0,l.Wr)(n.tA.FormattedAmountMixin,m.Z)){constructor(...t){super(...t),(0,s.Z)(this,"FontSizeRate",n.it.FontSizeRate),(0,s.Z)(this,"item",void 0),(0,s.Z)(this,"showTable",void 0),(0,s.Z)(this,"simpleGroup",void 0),(0,s.Z)(this,"complexGroup",void 0),(0,s.Z)(this,"value",void 0),(0,s.Z)(this,"isCodecString",void 0),(0,s.Z)(this,"disabled",void 0),(0,s.Z)(this,"theme",void 0),(0,s.Z)(this,"innerModel",void 0)}get formatted(){return this.formatItem(this.item)}get tableGroupComponent(){return this.complexGroup?"div":"el-checkbox"}get tableItemComponent(){return this.complexGroup?"el-checkbox":"div"}formatItem(t){const e=(t,e,a)=>({amount:e,asset:t,total:a}),a=`rewards.events.${t.type}`,o=this.te(a)?this.t(a):t.type,i="title"in t?t.title:"",s="total"in t?t.total:void 0,r="rewards"in t&&Array.isArray(t.rewards)?t.rewards.map(this.formatItem):[],l="rewards"in t&&Array.isArray(t.rewards)?t.limit:[e(t.asset,t.amount,t.total)];return{type:t.type,title:o,subtitle:i,limit:l,total:s,rewards:r}}isDisabledRewardItem(t){return(0,u.yA)(t.limit?.[0]?.amount)}};(0,r.__decorate)([(0,l.fI)({default:()=>{},type:Object})],_.prototype,"item",void 0),(0,r.__decorate)([(0,l.fI)({default:!0,type:Boolean})],_.prototype,"showTable",void 0),(0,r.__decorate)([(0,l.fI)({default:!1,type:Boolean})],_.prototype,"simpleGroup",void 0),(0,r.__decorate)([(0,l.fI)({default:!1,type:Boolean})],_.prototype,"complexGroup",void 0),(0,r.__decorate)([(0,l.fI)({default:!1,type:[Boolean,Array]})],_.prototype,"value",void 0),(0,r.__decorate)([(0,l.fI)({default:!1,type:Boolean})],_.prototype,"isCodecString",void 0),(0,r.__decorate)([(0,l.fI)({default:!1,type:Boolean})],_.prototype,"disabled",void 0),(0,r.__decorate)([(0,l.fI)({default:d.Z.LIGHT,type:String})],_.prototype,"theme",void 0),(0,r.__decorate)([(0,l.yU)("value","input",{type:[Boolean,Array]})],_.prototype,"innerModel",void 0),_=(0,r.__decorate)([(0,l.wA)({components:{FormattedAmount:n.wx.FormattedAmount,FormattedAmountWithFiatValue:n.wx.FormattedAmountWithFiatValue,RewardItemTooltip:(0,p.kF)(c.z8.RewardItemTooltip)}})],_);var f=_,v=f,b=a(1001),h=(0,b.Z)(v,o,i,!1,null,"f16e54a0",null),y=h.exports}}]);