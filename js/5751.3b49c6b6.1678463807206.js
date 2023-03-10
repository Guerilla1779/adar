"use strict";(self["webpackChunkpolkaswap_exchange_web"]=self["webpackChunkpolkaswap_exchange_web"]||[]).push([[5751],{55751:function(t,e,a){a.r(e),a.d(e,{default:function(){return x}});var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.parentLoading,expression:"parentLoading"}],staticClass:"container"},[a("generic-page-header",{staticClass:"page-header-title--moonpay-history",attrs:{"has-button-back":!t.isHistoryView},on:{back:t.handleBack}},[a("moonpay-logo",{attrs:{slot:"title",theme:t.libraryTheme},slot:"title"})],1),a("div",{staticClass:"moonpay-history"},[t.isHistoryView?[a("div",{staticClass:"moonpay-history-title"},[t._v(t._s(t.t("moonpay.history.title")))]),a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],class:["moonpay-history-list",{empty:t.emptyHistory}]},[t._l(t.formattedItems,(function(e){return a("div",{directives:[{name:"button",rawName:"v-button"}],key:e.id,staticClass:"moonpay-history-item",attrs:{tabindex:"0"},on:{click:function(a){return t.navigateToDetails(e)}}},[a("div",{staticClass:"moonpay-history-item-data"},[a("div",{staticClass:"moonpay-history-item__date"},[t._v(t._s(e.formatted.date))]),a("div",{staticClass:"moonpay-history-item__amount"},[e.formatted.cryptoAmount?[a("formatted-amount",{staticClass:"moonpay-history-item-amount",attrs:{"value-can-be-hidden":"",value:e.formatted.cryptoAmount,"font-size-rate":t.FontSizeRate.MEDIUM,"asset-symbol":e.formatted.crypto}}),a("i",{staticClass:"s-icon--network s-icon-eth"}),t._v("  "),a("span",[t._v(t._s(t.t("forText")))]),t._v("   ")]:t._e(),a("formatted-amount",{staticClass:"moonpay-history-item-amount",attrs:{"value-can-be-hidden":"",value:e.formatted.fiatAmount,"font-size-rate":t.FontSizeRate.MEDIUM,"asset-symbol":e.formatted.fiat}})],2),a("div",{staticClass:"moonpay-history-item__wallet-address"},[t._v(" "+t._s(e.walletAddress)+" ")])]),a("s-icon",{class:["moonpay-history-item-icon",e.status],attrs:{name:e.formatted.icon,size:"14"}})],1)})),t.emptyHistory?a("span",[t._v(t._s(t.t("moonpay.history.empty")))]):t._e()],2),t.emptyHistory?t._e():a("history-pagination",{staticClass:"moonpay-history-pagination",attrs:{"current-page":t.currentPage,"page-amount":t.pageAmount,total:t.total,loading:t.loading,"last-page":t.lastPage},on:{"pagination-click":t.handlePaginationClick}})]:[a("moonpay-widget",{attrs:{src:t.detailsWidgetUrl}}),t.isCompletedTransaction?a("s-button",{staticClass:"moonpay-details-button s-typography-button--large",attrs:{type:t.actionButtonType,disabled:t.actionButtonDisabled,loading:t.loading},on:{click:t.handleTransaction}},[t._v(" "+t._s(t.actionButtonText)+" ")]):t._e()]],2)],1)},o=[],s=a(60760),n=a(70655),r=a(53545),c=a(37365),d=a(68006),h=a(34686),l=a(63471),m=a(85530),u=a(16546),y=a(80710),p=a(82344),g=a(74614),w=a(25108);const v="history",b="details";let T=class extends((0,r.Wr)(c.tA.PaginationSearchMixin,d.Z)){constructor(...t){super(...t),(0,s.Z)(this,"FontSizeRate",c.it.FontSizeRate),(0,s.Z)(this,"transactions",void 0),(0,s.Z)(this,"isValidNetworkType",void 0),(0,s.Z)(this,"currenciesById",void 0),(0,s.Z)(this,"libraryTheme",void 0),(0,s.Z)(this,"getTransactions",void 0),(0,s.Z)(this,"getCurrencies",void 0),(0,s.Z)(this,"unwatchEthereum",void 0),(0,s.Z)(this,"pageAmount",5),(0,s.Z)(this,"currentView",v),(0,s.Z)(this,"selectedItem",{})}created(){this.withApi((async()=>{this.initMoonpayApi(),await Promise.all([this.getTransactions(),this.getCurrencies()]),this.setHistory(),this.unwatchEthereum=await l.ZP.watchEthereum({onAccountChange:t=>{t.length?this.changeExternalWallet({address:t[0]}):this.disconnectExternalAccount()},onNetworkChange:t=>{this.setEvmNetworkType(t)},onDisconnect:()=>{this.disconnectExternalAccount()}})}))}beforeDestroy(){"function"===typeof this.unwatchEthereum&&this.unwatchEthereum()}get emptyHistory(){return!this.transactions.length}get total(){return this.transactions.length}get historyItems(){return this.getPageItems(this.transactions)}get formattedItems(){const{currenciesById:t,historyItems:e,formatDate:a}=this,i=e=>(t[e]?.code??"").toUpperCase(),o=t=>Number.isFinite(t)?String(t):t,s=t=>t===p.D.Completed?"basic-check-mark-24":t===p.D.Failed?"basic-clear-X-24":"basic-more-horizontal-24";return e.map((t=>({...t,formatted:{fiat:i(t.baseCurrencyId),fiatAmount:o(t.baseCurrencyAmount),crypto:i(t.currencyId),cryptoAmount:o(t.quoteCurrencyAmount),date:a(new Date(t.updatedAt).getTime()),icon:s(t.status)}})))}get detailsWidgetUrl(){if(!this.selectedItem.id)return"";const t=(0,m.UK)({colorCode:(0,m.y_)("--s-color-theme-accent"),language:this.language,transactionId:this.selectedItem.id});return`${this.selectedItem.returnUrl}?${t}`}get bridgeTxToSora(){if(this.selectedItem.id)return this.getBridgeHistoryItemByMoonpayId(this.selectedItem.id)}get isCompletedTransaction(){return this.selectedItem?.status===p.D.Completed}get externalAccountIsMoonpayRecipient(){return this.selectedItem?.walletAddress?.toLowerCase?.()===this.evmAddress.toLowerCase()}get actionButtonType(){return this.bridgeTxToSora?"secondary":"primary"}get actionButtonDisabled(){return!this.bridgeTxToSora&&(!this.externalAccountIsMoonpayRecipient||!this.isValidNetworkType)}get actionButtonText(){return this.isExternalAccountConnected?this.bridgeTxToSora?this.t("moonpay.buttons.view"):this.externalAccountIsMoonpayRecipient?this.isValidNetworkType?this.t("moonpay.buttons.transfer"):this.t("bridgeTransaction.changeNetwork"):this.t("bridgeTransaction.changeAccount"):this.t("connectWalletText")}get isHistoryView(){return this.currentView===v}changeView(t){this.currentView=t}async handlePaginationClick(t){let e=1;switch(t){case c.it.PaginationButton.Prev:e=this.currentPage-1;break;case c.it.PaginationButton.Next:e=this.currentPage+1,e===this.lastPage&&(this.isLtrDirection=!1);break;case c.it.PaginationButton.First:this.isLtrDirection=!0;break;case c.it.PaginationButton.Last:e=this.lastPage,this.isLtrDirection=!1}this.currentPage=e}handleBack(){this.loading=!1,this.changeView(v)}async navigateToDetails(t){try{await this.checkConnectionToExternalAccount((async()=>{await this.prepareEvmNetwork(),this.selectedItem=t,this.changeView(b)}))}catch(e){w.error(e)}}async handleTransaction(){this.selectedItem.id&&(this.bridgeTxToSora?.id?(await this.prepareEvmNetwork(this.bridgeTxToSora.externalNetwork),await this.showHistory(this.bridgeTxToSora.id)):await this.prepareMoonpayTxForBridgeTransfer(this.selectedItem))}};(0,n.__decorate)([g.SB.moonpay.transactions],T.prototype,"transactions",void 0),(0,n.__decorate)([g.Yn.web3.isValidNetworkType],T.prototype,"isValidNetworkType",void 0),(0,n.__decorate)([g.Yn.moonpay.currenciesById],T.prototype,"currenciesById",void 0),(0,n.__decorate)([g.Yn.libraryTheme],T.prototype,"libraryTheme",void 0),(0,n.__decorate)([g.aD.moonpay.getTransactions],T.prototype,"getTransactions",void 0),(0,n.__decorate)([g.aD.moonpay.getCurrencies],T.prototype,"getCurrencies",void 0),T=(0,n.__decorate)([(0,r.wA)({components:{MoonpayLogo:h["default"],FormattedAmount:c.wx.FormattedAmount,GenericPageHeader:(0,y.kF)(u.z8.GenericPageHeader),MoonpayWidget:(0,y.kF)(u.z8.MoonpayWidget),HistoryPagination:c.wx.HistoryPagination}})],T);var _=T,f=_,C=a(1001),k=(0,C.Z)(f,i,o,!1,null,"64d2a904",null),x=k.exports}}]);