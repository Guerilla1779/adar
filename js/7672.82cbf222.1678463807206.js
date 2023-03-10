"use strict";(self["webpackChunkpolkaswap_exchange_web"]=self["webpackChunkpolkaswap_exchange_web"]||[]).push([[7672],{17672:function(t,e,s){s.r(e),s.d(e,{default:function(){return v}});var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("dialog-base",{attrs:{visible:t.isVisible,title:t.title},on:{"update:visible":function(e){t.isVisible=e}}},[s("div",{staticClass:"stake-dialog"},[t.poolAsset?s("s-row",{attrs:{flex:"",align:"middle"}},[t.baseAsset?s("pair-token-logo",{key:"pair",staticClass:"title-logo",attrs:{"first-token":t.baseAsset,"second-token":t.poolAsset}}):s("token-logo",{key:"token",staticClass:"title-logo",attrs:{token:t.poolAsset}}),s("span",{staticClass:"stake-dialog-title"},[t.baseAsset?[t._v(t._s(t.baseAsset.symbol)+"-")]:t._e(),t._v(t._s(t.poolAsset.symbol)+" ")],2)],1):t._e(),t.isAdding?s("div",{staticClass:"stake-dialog-info"},[t.pricesAvailable?[s("info-line",{attrs:{label:t.TranslationConsts.APR,value:t.apr}}),s("info-line",{attrs:{label:t.t("demeterFarming.info.totalLiquidityLocked"),value:t.tvl}})]:t._e(),s("info-line",{attrs:{label:t.t("demeterFarming.info.rewardToken"),value:t.rewardAssetSymbol}})],2):t._e(),s("s-form",{staticClass:"el-form--actions",attrs:{"show-message":!1}},[t.isFarm?s("s-float-input",{key:"farm-input",class:["s-input--stake-part","s-input--token-value",t.valuePartCharClass],attrs:{size:"medium",value:t.value,decimals:0,max:100},on:{input:t.handleValue}},[s("div",{staticClass:"amount",attrs:{slot:"top"},slot:"top"},[t._v(t._s(t.inputTitle))]),s("div",{staticClass:"el-buttons el-buttons--between",attrs:{slot:"right"},slot:"right"},[s("span",{staticClass:"percent"},[t._v("%")]),t.isMaxButtonAvailable?s("s-button",{staticClass:"el-button--max s-typography-button--small",attrs:{type:"primary",alternative:"",size:"mini","border-radius":"mini"},on:{click:function(e){return e.stopPropagation(),t.handleValue(100)}}},[t._v(" "+t._s(t.t("buttons.max"))+" ")]):t._e()],1),s("s-slider",{staticClass:"slider-container",attrs:{slot:"bottom",value:Number(t.value),"show-tooltip":!1},on:{input:t.handleValue},slot:"bottom"})],1):s("token-input",{key:"stake-input",attrs:{balance:t.stakingBalanceCodec,"is-max-available":t.isMaxButtonAvailable,title:t.inputTitle,token:t.poolAsset,value:t.value},on:{input:t.handleValue,max:t.handleMaxValue}})],1),t.hasStake?s("info-line",{attrs:{"value-can-be-hidden":"",label:t.poolShareText,value:t.poolShareFormatted,"fiat-value":t.poolShareFiat}}):t._e(),s("info-line",{attrs:{"value-can-be-hidden":"",label:t.poolShareAfterText,value:t.poolShareAfterFormatted,"fiat-value":t.poolShareAfterFiat}}),t.isAdding?s("info-line",{attrs:{label:t.t("demeterFarming.info.fee"),"label-tooltip":t.t("demeterFarming.info.feeTooltip"),value:t.depositFeeFormatted}}):t._e(),s("info-line",{attrs:{label:t.t("networkFeeText"),"label-tooltip":t.t("networkFeeTooltipText"),value:t.formattedNetworkFee,"asset-symbol":t.xorSymbol,"fiat-value":t.getFiatAmountByCodecString(t.networkFee),"is-formatted":""}}),s("s-button",{staticClass:"s-typography-button--large action-button",attrs:{type:"primary",loading:t.parentLoading,disabled:t.isInsufficientXorForFee||t.valueFundsEmpty||t.isInsufficientBalance},on:{click:t.handleConfirm}},[t.isInsufficientXorForFee?[t._v(" "+t._s(t.t("insufficientBalanceText",{tokenSymbol:t.xorSymbol}))+" ")]:t.isInsufficientBalance?[t._v(" "+t._s(t.t("insufficientBalanceText",{tokenSymbol:t.poolAssetSymbol}))+" ")]:t.valueFundsEmpty?[t._v(" "+t._s(t.t("buttons.enterAmount"))+" ")]:[t._v(" "+t._s(t.t("confirmText"))+" ")]],2)],1)])},a=[],o=s(60760),n=s(70655),l=s(53545),r=s(37365),u=s(36930),d=s(26181),h=s(80710),m=s(16546),p=s(85530);let c=class extends((0,l.Wr)(d.Z,r.tA.DialogMixin,r.tA.LoadingMixin)){constructor(...t){super(...t),(0,o.Z)(this,"isAdding",void 0),(0,o.Z)(this,"value","")}resetValue(){this.value=""}get networkFee(){const t=this.isAdding?u.Operation.DemeterFarmingDepositLiquidity:u.Operation.DemeterFarmingWithdrawLiquidity;return this.networkFees[t]}get title(){const t=this.isAdding?this.hasStake?"add":"start":"remove";return this.t(`demeterFarming.actions.${t}`)}get inputTitle(){const t=this.isAdding?"amountAdd":"amountRemove";return this.t(`demeterFarming.${t}`)}get valuePartCharClass(){const t={3:"three",2:"two"}[this.value.toString().length]??"one";return`${t}-char`}get part(){return new u.FPNumber(this.value).div(u.FPNumber.HUNDRED)}get poolShareAfter(){if(this.isAdding){const t=new u.FPNumber(this.depositFee),e=this.valueFunds.mul(t),s=this.lockedFunds.add(this.valueFunds.sub(e));return this.isFarm?s.div(this.funds.sub(e)).mul(u.FPNumber.HUNDRED):s}{const t=u.FPNumber.max(this.lockedFunds,this.funds),e=u.FPNumber.max(this.lockedFunds.sub(this.valueFunds),u.FPNumber.ZERO);return this.isFarm?e.div(t).mul(u.FPNumber.HUNDRED):e}}get poolShareAfterFiat(){return this.isFarm||!this.poolAsset?null:this.getFiatAmountByFPNumber(this.poolShareAfter,this.poolAsset)}get poolShareAfterFormatted(){return this.poolShareAfter.toLocaleString()+(this.isFarm?"%":"")}get poolShareAfterText(){return this.isFarm?this.t("demeterFarming.info.poolShareWillBe"):this.t("demeterFarming.info.stakeWillBe",{symbol:this.poolAssetSymbol})}get valueFunds(){if(!this.poolAsset)return u.FPNumber.ZERO;if(!this.isFarm)return new u.FPNumber(this.value);if(this.isAdding){const t=u.FPNumber.fromCodecValue(this.networkFee),e=(0,p.AN)(this.poolAsset)?this.availableFunds.sub(t):this.availableFunds;return e.mul(this.part)}return this.lockedFunds.mul(this.part)}get valueFundsEmpty(){return this.valueFunds.isZero()}get stakingBalance(){return this.isAdding?this.availableFunds:this.lockedFunds}get stakingBalanceCodec(){return this.stakingBalance.toCodecString()}get isMaxButtonAvailable(){if(!this.poolAsset)return!1;const t=u.FPNumber.fromCodecValue(this.networkFee),e=this.isAdding&&(0,p.AN)(this.poolAsset)?this.stakingBalance.sub(t):this.stakingBalance;return!u.FPNumber.eq(this.valueFunds,e)}get maxStake(){return this.poolAsset?this.isAdding?(0,p.MN)(this.poolAsset,this.networkFee):this.lockedFunds.toString():m.m8}get isInsufficientBalance(){if(this.isFarm)return!1;const t=new u.FPNumber(this.maxStake,this.poolAsset?.decimals);return u.FPNumber.lt(t,this.valueFunds)}handleValue(t){this.value=String(t)}handleMaxValue(){this.handleValue(this.maxStake)}handleConfirm(){const t={pool:this.pool,accountPool:this.accountPool,value:this.valueFunds},e=this.isAdding?"add":"remove";this.$emit(e,t)}};(0,n.__decorate)([(0,l.fI)({default:()=>!0,type:Boolean})],c.prototype,"isAdding",void 0),(0,n.__decorate)([(0,l.RL)("visible")],c.prototype,"resetValue",null),c=(0,n.__decorate)([(0,l.wA)({components:{PairTokenLogo:(0,h.kF)(m.z8.PairTokenLogo),TokenInput:(0,h.kF)(m.z8.TokenInput),DialogBase:r.wx.DialogBase,InfoLine:r.wx.InfoLine,TokenLogo:r.wx.TokenLogo}})],c);var b=c,g=b,F=s(1001),f=(0,F.Z)(g,i,a,!1,null,"49e0628f",null),v=f.exports}}]);