"use strict";(self["webpackChunkpolkaswap_exchange_web"]=self["webpackChunkpolkaswap_exchange_web"]||[]).push([[5166],{8969:function(t,e,s){s.r(e),s.d(e,{default:function(){return y}});var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"failed-transaction-dialog"},[s("dialog-base",{attrs:{visible:t.isVisible,title:"Failed transactions","custom-class":"dialog__failed-transaction"},on:{"update:visible":function(e){t.isVisible=e}}},[s("div",[s("s-table",{staticClass:"failed-transactions-table",attrs:{data:t.tableData,"highlight-current-row":!1,size:"big"}},[s("s-table-column",{attrs:{width:"40"},scopedSlots:t._u([{key:"header",fn:function(){return[s("span",[t._v(t._s("#"))])]},proxy:!0},{key:"default",fn:function(e){var a=e.$index;return[s("div",[s("span",[t._v(t._s(a+1))])])]}}])}),s("s-table-column",{attrs:{width:"60"},scopedSlots:t._u([{key:"header",fn:function(){return[s("span",[t._v("⬥")])]},proxy:!0},{key:"default",fn:function(e){var a=e.row;return[s("div",{staticClass:"name-label"},[s("div",[t._v(t._s(t.getInitials(a)))])])]}}])}),s("s-table-column",{attrs:{prop:"name",sortable:""},scopedSlots:t._u([{key:"header",fn:function(){return[s("span",[t._v(t._s("name"))])]},proxy:!0}])}),s("s-table-column",{attrs:{prop:"wallet",width:"130"},scopedSlots:t._u([{key:"header",fn:function(){return[s("span",[t._v(t._s("wallet"))])]},proxy:!0},{key:"default",fn:function(e){var a=e.row;return[s("s-dropdown",{staticClass:"wallet-address",attrs:{type:"button",buttonType:"link",placement:"bottom-start"},on:{select:function(e){return t.handleCopyAddress(a.wallet)}}},[s("div",[t._v(t._s(t.formatAddress(a.wallet)))]),s("template",{slot:"menu"},[s("s-dropdown-item",[s("div",{staticClass:"wallet-tooltip"},[s("div",[t._v(t._s(a.wallet))]),s("div",[s("s-icon",{staticClass:"icon-divider scale-icon",attrs:{name:"copy-16"}})],1)])])],1)],2)]}}])}),s("s-table-column",{staticClass:"usd-column",attrs:{prop:"usd",sortable:""},scopedSlots:t._u([{key:"header",fn:function(){return[s("span",[t._v(t._s("usd"))])]},proxy:!0},{key:"default",fn:function(e){var a=e.row;return[s("div",[s("span",{staticClass:"usd-column__data"},[t._v(t._s(t.formatNumber(a.usd)))])])]}}])}),s("s-table-column",{scopedSlots:t._u([{key:"header",fn:function(){return[s("span",[t._v(t._s("In tokens"))])]},proxy:!0},{key:"default",fn:function(e){var a=e.row;return[s("div",{staticClass:"in-tokens"},[s("div",[t._v(t._s(t.getAmount(a)))]),s("div",{staticClass:"in-tokens__asset"},[s("div",[s("token-logo",{staticClass:"token-logo",attrs:{token:a.asset}})],1),s("div",[t._v(t._s(a.asset.symbol))])])])]}}])}),s("s-table-column",{staticClass:"status-property",attrs:{prop:"status",width:"158"},scopedSlots:t._u([{key:"header",fn:function(){return[s("span",[t._v(t._s("status"))])]},proxy:!0},{key:"default",fn:function(e){var a=e.row;return[s("div",{staticClass:"status-property__data"},[s("div",{class:"status-property__label status-property__label_"+t.getStatusClass(a)},[t._v(" "+t._s(t.getStatus(a)||"valid")+" ")])])]}}])}),s("s-table-column",{scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[s("s-button",{staticClass:"s-typography-button--big rerun-button",attrs:{type:"primary",disabled:t.isButtonDisabled(a)},on:{click:function(e){return e.stopPropagation(),t.reRunTransaction(a)}}},[t._v(" "+t._s("RE-RUN")+" ")])]}}])})],1),s("s-pagination",{staticClass:"failed-transactions-table-pagination",attrs:{layout:"prev, total, next","current-page":t.currentPage,"page-size":t.pageAmount,total:t.filteredItems.length},on:{"update:currentPage":function(e){t.currentPage=e},"update:current-page":function(e){t.currentPage=e},"prev-click":t.handlePrevClick,"next-click":t.handleNextClick}})],1),s("s-button",{staticClass:"s-typography-button--big rerun-all-button",attrs:{type:"primary",disabled:t.rerunAllButtonDisabled},on:{click:function(e){return e.stopPropagation(),t.reRunAll.apply(null,arguments)}}},[t._v(" "+t._s("RE-RUN ALL")+" ")])],1)],1)},n=[],r=s(60760),i=s(70655),o=s(53545),l=s(37365),u=s(74614),c=s(63545),p=s(85530),d=s(82753);let g=class extends((0,o.Wr)(l.tA.TransactionMixin,l.tA.DialogMixin,l.tA.PaginationSearchMixin)){constructor(...t){super(...t),(0,r.Z)(this,"recipients",void 0),(0,r.Z)(this,"repeatTransaction",void 0),(0,r.Z)(this,"runAssetsRouting",void 0)}async handleCopyAddress(t){try{await(0,p.vQ)(t),this.$notify({message:`${this.t("account.successCopy")}`,type:"success",title:""})}catch(e){this.$notify({message:`${this.t("warningText")} ${e}`,type:"warning",title:""})}}async reRunTransaction(t){this.repeatTransaction(t.id).catch((t=>{this.$notify({message:`${this.t("warningText")} ${t}`,type:"warning",title:""})}))}async reRunAll(){this.runAssetsRouting().then((()=>{this.recipients.length<1&&this.$emit("update:visible",!1)})).catch((t=>{this.$notify({message:`${this.t("warningText")} ${t}`,type:"warning",title:""})}))}formatAddress(t){return(0,p.Tg)(t,10)}getStatus(t){return t.status}getStatusClass(t){return t.status.toLowerCase().split(" ").join("-")}getAmount(t){return this.formatNumber(t.amount)}getInitials(t){return t.name.split(" ").map((t=>t[0])).slice(0,3).join("")}formatNumber(t){return t.toLocaleString("en-US",{maximumFractionDigits:4})}handleResetSearch(){this.resetPage(),this.resetSearch()}isButtonDisabled(t){return t.status!==c.p.FAILED}get rerunAllButtonDisabled(){return this.recipients.some((t=>t.status===c.p.PENDING))}get filteredItems(){const t=this.query.toLowerCase().trim();return t?this.recipients?.filter((t=>t.name.toLowerCase().includes(this.query.toLowerCase())))||[]:this.recipients}get tableData(){return this.getPageItems(this.filteredItems)||[]}get xor(){return d.XOR}get recipientsLength(){return this.recipients.length}recipientsLengthHandler(t){0===t&&this.$emit("update:visible",!1)}};(0,i.__decorate)([u.Yn.routeAssets.incompletedRecipients],g.prototype,"recipients",void 0),(0,i.__decorate)([u.aD.routeAssets.repeatTransaction],g.prototype,"repeatTransaction",void 0),(0,i.__decorate)([u.aD.routeAssets.runAssetsRouting],g.prototype,"runAssetsRouting",void 0),(0,i.__decorate)([(0,o.RL)("recipientsLength")],g.prototype,"recipientsLengthHandler",null),g=(0,i.__decorate)([(0,o.wA)({components:{DialogBase:l.wx.DialogBase,TokenLogo:l.wx.TokenLogo}})],g);var _=g,h=_,f=s(1001),v=(0,f.Z)(h,a,n,!1,null,"393cecf3",null),y=v.exports}}]);