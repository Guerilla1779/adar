(self["webpackChunkpolkaswap_exchange_web"]=self["webpackChunkpolkaswap_exchange_web"]||[]).push([[6753],{44539:function(e){e.exports={functional:!0,render(e,t){const{_c:i,_v:a,data:s,children:o=[]}=t,{class:n,staticClass:r,style:l,staticStyle:c,attrs:d={},...h}=s;return i("svg",{class:["notif-option__bell",n,r],style:[l,c],attrs:Object.assign({width:"28",height:"28",fill:"currentcolor",xmlns:"http://www.w3.org/2000/svg"},d),...h},o.concat([i("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M21.221 22H6.78c-2.286 0-3.59-2.299-2.22-3.91a4.57 4.57 0 001.083-2.446L6.2 10.72c.301-2.656 2.284-4.835 4.962-5.752v-.13a2.837 2.837 0 115.674 0v.13c2.678.917 4.661 3.096 4.962 5.752l.56 4.925a4.57 4.57 0 001.081 2.446c1.372 1.611.067 3.91-2.219 3.91zm-3.506 2.59C17.143 25.998 15.695 27 14 27c-1.696 0-3.143-1.001-3.715-2.41a.53.53 0 01.494-.714h6.442a.53.53 0 01.494.713z"}})]))}}},66753:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return B}});var a,s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"app-header-menu"},[e.isLargeDesktop?i("div",{staticClass:"app-header-menu_panel"},e._l(e.headerMenuItems,(function(t){var a=t.value,s=t.icon,o=t.text;return i("s-button",{key:a,staticClass:"s-pressed app-header-menu__button",attrs:{type:"action",tooltip:o},on:{click:function(t){return e.handleSelectHeaderMenu(a)}}},[i("s-icon",{attrs:{name:s,size:e.iconSize}})],1)})),1):i("s-button",{staticClass:"settings-control s-pressed",attrs:{type:"action",tooltip:e.t("headerMenu.settings")},on:{click:e.handleClickHeaderMenu}},[i("s-dropdown",{ref:"headerMenu",staticClass:"header-menu__button",attrs:{"popper-class":"header-menu",icon:"grid-block-align-left-24",type:"ellipsis",placement:"bottom-start"},on:{select:e.handleSelectHeaderMenu},scopedSlots:e._u([{key:"menu",fn:function(){return[e._l(e.dropdownHeaderMenuItems,(function(t){var a=t.value,s=t.icon,o=t.text;return i("s-dropdown-item",{key:a,staticClass:"header-menu__item",attrs:{icon:s,value:a}},[e._v(" "+e._s(o)+" ")])})),!e.notificationActivated&&e.isBrowserNotificationApiAvailable?i("div",{staticClass:"notif-option el-dropdown-menu__item header-menu__item",on:{click:e.openNotificationDialog}},[i("bell-icon",{staticClass:"notif-option__bell notif-option__bell--dropdown"}),i("span",{staticClass:"notif-option__text"},[e._v(e._s(e.t("browserNotificationDialog.title")))])],1):e._e()]},proxy:!0}],null,!1,2314977259)})],1)],1)},o=[],n=i(60760),r=i(70655),l=i(53545),c=i(72305),d=i(59832),h=i(44539),u=i.n(h),p=i(32806),g=i(74614);(function(e){e["HideBalances"]="hide-balances",e["Theme"]="theme",e["Language"]="language",e["Notification"]="notification"})(a||(a={}));const m=1440;let v=class extends((0,l.Wr)(p.Z)){constructor(...e){super(...e),(0,n.Z)(this,"iconSize",28),(0,n.Z)(this,"HeaderMenuType",a),(0,n.Z)(this,"shouldBalanceBeHidden",void 0),(0,n.Z)(this,"isBrowserNotificationApiAvailable",void 0),(0,n.Z)(this,"libraryTheme",void 0),(0,n.Z)(this,"notificationActivated",void 0),(0,n.Z)(this,"toggleHideBalance",void 0),(0,n.Z)(this,"setBrowserNotifsPopupEnabled",void 0),(0,n.Z)(this,"setBrowserNotifsPopupBlocked",void 0),(0,n.Z)(this,"setLanguageDialogVisibility",void 0),(0,n.Z)(this,"isLargeDesktop",window.innerWidth>=m)}updateLargeDesktopFlag(e){this.isLargeDesktop=e.matches}get mediaQueryList(){return window.matchMedia(`(min-width: ${m}px)`)}get isNotificationOptionShown(){return!this.notificationActivated}getThemeIcon(e=!1){return e?this.libraryTheme===c.Z.LIGHT?"various-moon-24":"various-brightness-low-24":this.libraryTheme===c.Z.LIGHT?"various-brightness-low-24":"various-moon-24"}get themeTitle(){return this.libraryTheme===c.Z.LIGHT?c.Z.DARK:c.Z.LIGHT}get themeText(){const e=this.t(this.themeTitle);return this.t("headerMenu.switchTheme",{theme:e})}getHideBalancesIcon(e=!1){return e?this.shouldBalanceBeHidden?"basic-eye-no-24":"basic-filterlist-24":this.shouldBalanceBeHidden?"basic-filterlist-24":"basic-eye-no-24"}get hideBalancesText(){return this.t("headerMenu."+(this.shouldBalanceBeHidden?"showBalances":"hideBalances"))}getHeaderMenuItems(e=!1){return[{value:a.HideBalances,icon:this.getHideBalancesIcon(e),text:this.hideBalancesText},{value:a.Theme,icon:this.getThemeIcon(e),text:this.themeText},{value:a.Language,icon:"basic-globe-24",text:this.t("headerMenu.switchLanguage")}]}get headerMenuItems(){return this.getHeaderMenuItems()}get dropdownHeaderMenuItems(){return this.getHeaderMenuItems(!0)}mounted(){this.mediaQueryList.addEventListener("change",this.updateLargeDesktopFlag)}beforeDestroy(){this.mediaQueryList.removeEventListener("change",this.updateLargeDesktopFlag)}openNotificationDialog(){this.isBrowserNotificationApiAvailable&&("denied"===Notification.permission?this.setBrowserNotifsPopupBlocked(!0):"default"===Notification.permission&&this.setBrowserNotifsPopupEnabled(!0))}handleClickHeaderMenu(){const e=this.$refs.headerMenu.dropdown;e.visible?e.hide():e.show()}handleSelectHeaderMenu(e){switch(e){case a.HideBalances:this.toggleHideBalance();break;case a.Theme:(0,d.tj)();break;case a.Language:this.setLanguageDialogVisibility(!0);break}}};(0,r.__decorate)([g.SB.wallet.settings.shouldBalanceBeHidden],v.prototype,"shouldBalanceBeHidden",void 0),(0,r.__decorate)([g.SB.settings.isBrowserNotificationApiAvailable],v.prototype,"isBrowserNotificationApiAvailable",void 0),(0,r.__decorate)([g.Yn.libraryTheme],v.prototype,"libraryTheme",void 0),(0,r.__decorate)([g.Yn.settings.notificationActivated],v.prototype,"notificationActivated",void 0),(0,r.__decorate)([g.QF.wallet.settings.toggleHideBalance],v.prototype,"toggleHideBalance",void 0),(0,r.__decorate)([g.QF.settings.setBrowserNotifsPopupEnabled],v.prototype,"setBrowserNotifsPopupEnabled",void 0),(0,r.__decorate)([g.QF.settings.setBrowserNotifsPopupBlocked],v.prototype,"setBrowserNotifsPopupBlocked",void 0),(0,r.__decorate)([g.QF.settings.setSelectLanguageDialogVisibility],v.prototype,"setLanguageDialogVisibility",void 0),v=(0,r.__decorate)([(0,l.wA)({components:{BellIcon:u()}})],v);var f=v,_=f,b=i(1001),w=(0,b.Z)(_,s,o,!1,null,"011228ad",null),B=w.exports}}]);