(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{234:function(e,t,s){var r;window,r=function(e,t,s,r,i,a,n){return function(e){var t={};function s(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,s),i.l=!0,i.exports}return s.m=e,s.c=t,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)s.d(r,i,function(t){return e[t]}.bind(null,i));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/assets/vendor/",s(s.s=21)}([function(t,s){t.exports=e},function(e,t,s){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var s=function(e,t){var s,r,i,a=e[1]||"",n=e[3];if(!n)return a;if(t&&"function"==typeof btoa){var o=(s=n,r=btoa(unescape(encodeURIComponent(JSON.stringify(s)))),i="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),"/*# ".concat(i," */")),c=n.sources.map((function(e){return"/*# sourceURL=".concat(n.sourceRoot||"").concat(e," */")}));return[a].concat(c).concat([o]).join("\n")}return[a].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(s,"}"):s})).join("")},t.i=function(e,s){"string"==typeof e&&(e=[[null,e,""]]);for(var r=0;r<e.length;r++){var i=[].concat(e[r]);s&&(i[2]?i[2]="".concat(s," and ").concat(i[2]):i[2]=s),t.push(i)}},t}},function(e,t,s){"use strict";function r(e,t){for(var s=[],r={},i=0;i<t.length;i++){var a=t[i],n=a[0],o={id:e+":"+i,css:a[1],media:a[2],sourceMap:a[3]};r[n]?r[n].parts.push(o):s.push(r[n]={id:n,parts:[o]})}return s}s.r(t),s.d(t,"default",(function(){return h}));var i="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!i)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var a={},n=i&&(document.head||document.getElementsByTagName("head")[0]),o=null,c=0,d=!1,l=function(){},u=null,p="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function h(e,t,s,i){d=s,u=i||{};var n=r(e,t);return m(n),function(t){for(var s=[],i=0;i<n.length;i++){var o=n[i];(c=a[o.id]).refs--,s.push(c)}for(t?m(n=r(e,t)):n=[],i=0;i<s.length;i++){var c;if(0===(c=s[i]).refs){for(var d=0;d<c.parts.length;d++)c.parts[d]();delete a[c.id]}}}}function m(e){for(var t=0;t<e.length;t++){var s=e[t],r=a[s.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](s.parts[i]);for(;i<s.parts.length;i++)r.parts.push(f(s.parts[i]));r.parts.length>s.parts.length&&(r.parts.length=s.parts.length)}else{var n=[];for(i=0;i<s.parts.length;i++)n.push(f(s.parts[i]));a[s.id]={id:s.id,refs:1,parts:n}}}}function _(){var e=document.createElement("style");return e.type="text/css",n.appendChild(e),e}function f(e){var t,s,r=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(r){if(d)return l;r.parentNode.removeChild(r)}if(p){var i=c++;r=o||(o=_()),t=v.bind(null,r,i,!1),s=v.bind(null,r,i,!0)}else r=_(),t=y.bind(null,r),s=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else s()}}var g,b=(g=[],function(e,t){return g[e]=t,g.filter(Boolean).join("\n")});function v(e,t,s,r){var i=s?"":r.css;if(e.styleSheet)e.styleSheet.cssText=b(t,i);else{var a=document.createTextNode(i),n=e.childNodes;n[t]&&e.removeChild(n[t]),n.length?e.insertBefore(a,n[t]):e.appendChild(a)}}function y(e,t){var s=t.css,r=t.media,i=t.sourceMap;if(r&&e.setAttribute("media",r),u.ssrId&&e.setAttribute("data-vue-ssr-id",t.id),i&&(s+="\n/*# sourceURL="+i.sources[0]+" */",s+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),e.styleSheet)e.styleSheet.cssText=s;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(s))}}},function(e,t,s){var r=s(14);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals),(0,s(2).default)("36d272bd",r,!0,{})},function(e,t,s){var r=s(16);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals),(0,s(2).default)("05bb3383",r,!0,{})},function(e,t,s){var r=s(18);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals),(0,s(2).default)("07f6a160",r,!0,{})},function(e,t,s){var r=s(20);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals),(0,s(2).default)("22865a34",r,!0,{})},function(e,s){e.exports=t},function(e,t){e.exports=s},function(e,t){e.exports=r},function(e,t){e.exports=i},function(e,t){e.exports=a},function(e,t){e.exports=n},function(e,t,s){"use strict";var r=s(3);s.n(r).a},function(e,t,s){(t=s(1)(!1)).push([e.i,".ec-image img{max-width:100%;height:auto}",""]),e.exports=t},function(e,t,s){"use strict";var r=s(4);s.n(r).a},function(e,t,s){(t=s(1)(!1)).push([e.i,".ec-prices{line-height:1.2}.ec-prices:not(.ec-prices--big){font-size:.95rem}.ec-prices:not(.ec-prices--big) .ec-prices__installments{font-weight:300}.ec-prices__value{display:block;font-size:1.25rem}.ec-prices--big .ec-prices__value{font-size:250%;margin-bottom:.25rem}.ec-prices--literal .ec-prices__discount span,.ec-prices--literal .ec-prices__installments span{font-weight:700}.ec-prices--literal small{font-size:100%}.ec-prices:not(.ec-prices--literal) .ec-prices__compare{color:var(--gray)}",""]),e.exports=t},function(e,t,s){"use strict";var r=s(5);s.n(r).a},function(e,t,s){(t=s(1)(!1)).push([e.i,".ec-product-card{position:relative;padding-bottom:.1rem;margin-bottom:0}.ec-product-card--inactive,.ec-product-card--inactive img{opacity:.7}.ec-product-card__offer-stamp{background-color:var(--success);color:var(--success-yiq);min-width:40px;font-size:.78rem;line-height:1.8;text-align:center;position:absolute;z-index:9;top:.35rem;right:.35rem;border-radius:.125rem;opacity:.9}.ec-product-card__link:hover h3{text-decoration:underline}.ec-product-card__name{margin-top:.5rem;font-size:.88rem;line-height:1.2;height:3.168rem;overflow:hidden;font-weight:400;display:block;z-index:1}.ec-product-card__pictures{display:-webkit-box;display:flex;background-color:var(--body-bg);-webkit-box-align:center;align-items:center;text-align:center;overflow:hidden}@media (max-width:575.98px){.ec-product-card__pictures{height:180px}}@media (min-width:576px) and (max-width:991.98px){.ec-product-card__pictures{height:200px}}@media (min-width:992px){.ec-product-card__pictures{height:250px}}.ec-product-card__picture{display:block;-webkit-box-flex:0;flex:0 0 100%;opacity:0;-webkit-transition:opacity .25s;transition:opacity .25s}.ec-product-card__picture:first-child{opacity:1}@media (max-width:300px){.ec-product-card__picture{max-width:100px}}@media (max-width:575.98px){.ec-product-card__picture img{max-height:180px}}@media (min-width:576px) and (max-width:991.98px){.ec-product-card__picture img{max-height:200px}}@media (min-width:992px){.ec-product-card__picture img{max-height:250px}}.ec-product-card__prices{margin-bottom:.15rem;height:4.95rem;overflow:hidden;white-space:nowrap}.ec-product-card__prices .ec-prices__value:first-child{margin-top:1.14rem}.ec-product-card:hover .ec-product-card__picture{display:none}.ec-product-card:hover .ec-product-card__picture:last-child{display:block;opacity:1}.ec-product-card:hover .ec-product-card__buy{opacity:1}",""]),e.exports=t},function(e,t,s){"use strict";var r=s(6);s.n(r).a},function(e,t,s){(t=s(1)(!1)).push([e.i,".ec-search__popover{max-width:calc(100vw - 2rem);max-height:calc(100vh - 200px);margin-top:10px;overflow-y:auto;box-shadow:0 0 .75rem rgba(0,0,0,.075)}@media (min-width:576px){.ec-search__popover{min-width:400px}}@media (min-width:850px){.ec-search__popover{max-height:calc(100vh - 100px)}}@media (min-width:1200px){.ec-search__popover{max-width:1100px;min-width:800px}}.ec-search__head{display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between;-webkit-box-align:start;align-items:flex-start}.ec-search__close{padding:0 .25rem}.ec-search__close:focus{box-shadow:none}.ec-search__history,.ec-search__info{font-weight:300;margin-bottom:.25rem;font-size:1.15rem;overflow-x:auto;white-space:nowrap;color:var(--gray)}.ec-search__info em{color:var(--secondary);margin-right:.5rem}.ec-search__info span{display:inline-block}.ec-search__history__link{margin-left:.5rem}.ec-search__items{display:-webkit-box;display:flex;overflow-x:auto}@media (min-width:992px){.ec-search__items{margin-top:1rem;width:850px}}.ec-search__item{padding-right:1rem}.ec-search__item:last-child{padding-right:0}@media (max-width:849.98px){.ec-search__item{width:200px;-webkit-box-flex:0;flex:0 0 200px}}@media (min-width:850px){.ec-search__item{width:25%}}.ec-search__item .btn,.ec-search__item button{display:none}.ec-search__item .ec-prices{height:auto;white-space:normal}",""]),e.exports=t},function(e,t,s){"use strict";s.r(t);var r=s(7),i=s.n(r),a=(s(12),s(0)),n=s(8),o=s.n(n);const c={did_you_mean:{en_us:"Did you mean",pt_br:"Você quis dizer"},no_results_for:{en_us:"No results for",pt_br:"Nenhum produto encontrado para"},total_results_for:{en_us:"products found for",pt_br:"produtos encontrados para"},see_all:{en_us:"See all",pt_br:"Ver todos"}};var d=s(9),l=s(10),u=s.n(l);const p={from:{en_us:"from",pt_br:"de"},to:{en_us:"to",pt_br:"por"},unavailable:{en_us:"Unavailable",pt_br:"Indisponível"},out_of_stock:{en_us:"Out of stock",pt_br:"Sem estoque"},buy:{en_us:"Buy",pt_br:"Comprar"},up_to:{en_us:"up to",pt_br:"até"},zip:{en_us:"Zip code",pt_br:"CEP"},calculate_shipping:{en_us:"Calculate shipping",pt_br:"Calcular frete e prazo"},days:{en_us:"days",pt_br:"dias"},working_days:{en_us:"working days",pt_br:"dias úteis"},free_shipping:{en_us:"free shipping",pt_br:"frete grátis"},interest_free:{en_us:"interest free",pt_br:"sem juros"},discount_of:{en_us:"discount of",pt_br:"desconto de"}};var h=function(e,t){return t||(t=this&&this.lang||"en_us"),p[e]&&p[e][t]||""},m=s(11),_=s.n(m),f={name:"EcImage",props:{src:{type:[String,Object]},alt:{type:String,default:""},fade:{type:Boolean,default:!0},placeholder:{type:String,default:"/assets/img-placeholder.png"},pictureBreakpoint:{type:Number,default:576}},data(){return{imgClasses:`lozad ${this.fade?"fade":"show"}`}},computed:{imgObj(){return Object(a.img)(this.src)}},mounted(){const e=this.$refs.lazyImg;e&&_()(e,{loaded(e){e.classList.add("show")}}).observe()}};function g(e,t,s,r,i,a,n,o){var c,d="function"==typeof e?e.options:e;if(t&&(d.render=t,d.staticRenderFns=s,d._compiled=!0),r&&(d.functional=!0),a&&(d._scopeId="data-v-"+a),n?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(n)},d._ssrRegister=c):i&&(c=o?function(){i.call(this,this.$root.$options.shadowRoot)}:i),c)if(d.functional){d._injectStyles=c;var l=d.render;d.render=function(e,t){return c.call(t),l(e,t)}}else{var u=d.beforeCreate;d.beforeCreate=u?[].concat(u,c):[c]}return{exports:e,options:d}}s(13);var b=g(f,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"ec-image"},["string"==typeof e.src?s("img",{ref:"lazyImg",class:e.imgClasses,attrs:{alt:e.alt,"data-src":e.src}}):e.src&&e.imgObj?s("picture",{ref:"lazyImg",class:e.imgClasses,attrs:{"data-iesrc":e.imgObj.url,"data-alt":e.imgObj.alt}},[e.src.small?s("source",{attrs:{srcset:e.src.small.url,media:"(max-width: "+(e.pictureBreakpoint-.02)+"px)"}}):e._e(),s("source",{attrs:{srcset:e.imgObj.url,media:"(min-width: "+e.pictureBreakpoint+"px)"}})]):s("img",{attrs:{src:e.placeholder,alt:"No image"}})])}),[],!1,null,null,null).exports,v={name:"EcPrices",props:{lang:{type:String,default:a.$ecomConfig.get("lang")},product:{type:Object,required:!0},literal:{type:Boolean},big:{type:Boolean},installmentsOption:{type:Object},discountOption:{type:Object},discountText:{type:[String,Boolean],default:""}},data(){return{interestFreeInstallments:0,discount:{type:null,value:0},discountLabel:this.discountText}},methods:{dictionary:h,onPromotion:a.onPromotion,formatMoney:a.formatMoney,updateInstallments(e){if(e&&!e.monthly_interest){const t=e.min_installment||5,s=parseInt(this.price/t,10);this.interestFreeInstallments=Math.min(s,e.max_number)}},updateDiscount(e){e&&(!e.min_amount||e.min_amount<=this.price)&&(this.discount=e,!this.discountText&&!1!==this.discountText&&e.label&&(this.discountLabel=`via ${e.label}`))}},computed:{price(){return Object(a.price)(this.product)},priceWithDiscount(){const{type:e,value:t}=this.discount;if(t)return"percentage"===e?this.price*(100-t)/100:this.price-t}},created(){if(this.installmentsOption||this.discountOption)this.updateInstallments(this.installmentsOption),this.updateDiscount(this.discountOption);else{const{storefront:e}=window;if(e){const t=()=>{const t=e.info&&e.info.list_payments;return!!t&&(this.updateInstallments(t.installments_option),this.updateDiscount(t.discount_option),Object.keys(t).length>0)};t()||e.on("info:list_payments",t)}}}},y=(s(15),{name:"EcProductCard",components:{EcImage:b,EcPrices:g(v,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"ec-prices",class:{"ec-prices--literal":e.literal,"ec-prices--big":e.big}},[e.onPromotion(e.product)?s("span",{staticClass:"ec-prices__compare"},[e.literal?[e._v(" "+e._s(e.dictionary("from"))+" "),s("s",[e._v(e._s(e.formatMoney(e.product.base_price)))]),e._v(" "+e._s(e.dictionary("to"))+" ")]:s("s",[e._v(e._s(e.formatMoney(e.product.base_price)))])],2):e._e(),s("strong",{staticClass:"ec-prices__value"},[e._v(" "+e._s(e.formatMoney(e.price))+" ")]),s("transition-group",{attrs:{"enter-active-class":"animated slideInDown"}},[e.interestFreeInstallments>1?s("div",{key:"installments",staticClass:"ec-prices__installments"},[e._v(" "+e._s(e.interestFreeInstallments)+"x "),s("span",[e._v(" "+e._s(e.formatMoney(e.price/e.interestFreeInstallments))+" ")]),e.literal?s("small",[e._v(" "+e._s(e.dictionary("interest_free"))+" ")]):e._e()]):e._e(),"number"==typeof e.priceWithDiscount&&e.priceWithDiscount<e.price?s("div",{key:"discount",staticClass:"ec-prices__discount"},[s("span",[e._v(" "+e._s(e.formatMoney(e.priceWithDiscount))+" ")]),"string"==typeof e.discountLabel?s("small",[e._v(" "+e._s(e.discountLabel)+" ")]):e._e()]):e._e()])],1)}),[],!1,null,null,null).exports},props:{lang:{type:String,default:a.$ecomConfig.get("lang")},storeId:{type:Number,default:a.$ecomConfig.get("store_id")},productId:String,product:Object,buyText:String,canAddToCart:{type:Boolean,default:!0},isLoaded:Boolean,prerenderedHTML:String},data:()=>({body:{},isLoading:!1,error:""}),computed:{strBuy(){return this.buyText||this.dictionary("buy")},isActive(){const{body:e}=this;return e.available&&e.visible&&Object(a.inStock)(e)},discount(){const{body:e}=this;return Object(a.onPromotion)(e)?Math.round(100*(e.base_price-Object(a.price)(e))/e.base_price):0}},methods:{dictionary:h,name:a.name,inStock:a.inStock,setBody(e){this.body=Object.assign({},e),delete this.body.body_html,delete this.body.body_text},fetchItem(){if(this.productId){this.isLoading=!0;const{storeId:e,productId:t}=this;Object(d.store)({url:`/products/${t}.json`,storeId:e}).then(({data:e})=>{this.$emit("update:product",e),this.setBody(e),this.$emit("update:is-loaded",!0)}).catch(e=>{console.error(e),this.body.name&&this.body.slug&&this.body.pictures||(this.error="pt_br"===this.lang?"Erro de conexão, clique no produto para tentar novamente":"Connection error, click product to try again")}).finally(()=>{this.isLoading=!1})}},buy(){const e=this.body;if(this.$emit("buy",{product:e}),this.canAddToCart){const{variations:t,slug:s}=e;t&&t.length?window.location=`/${s}`:u.a.addProduct(e)}}},created(){this.product&&(this.setBody(this.product),void 0===this.product.available&&(this.body.available=!0),void 0===this.product.visible&&(this.body.visible=!0)),this.isLoaded||this.fetchItem()}}),x=(s(17),{name:"EcSearch",components:{EcProductCard:g(y,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"ec-product-card",class:e.body._id&&!e.isActive?"ec-product-card--inactive":null},[s("transition",{attrs:{"enter-active-class":"animated fadeIn"}},[e.isLoading?e._e():s("section",[e.isActive&&e.discount>0?s("span",{staticClass:"ec-product-card__offer-stamp"},[e._v(" -"),s("b",[e._v(e._s(e.discount))]),e._v("% ")]):e._e(),s("a",{staticClass:"ec-product-card__link",attrs:{href:"/"+e.body.slug,title:e.name(e.body)}},[s("div",{staticClass:"ec-product-card__pictures"},[e.body.pictures&&e.body.pictures.length?e._l(e.body.pictures.slice(0,2),(function(e,t){return s("ec-image",{key:t,staticClass:"ec-product-card__picture",attrs:{src:e,pictureBreakpoint:300}})})):s("ec-image",{staticClass:"ec-product-card__picture"})],2),s("h3",{staticClass:"ec-product-card__name"},[e._v(" "+e._s(e.name(e.body))+" ")])]),e.body.available&&e.body.visible?e.inStock(e.body)?[s("ec-prices",{staticClass:"ec-product-card__prices",attrs:{lang:e.lang,product:e.body}}),s("div",{staticClass:"ec-product-card__buy fade",on:{click:e.buy}},[e._t("buy",[s("button",{staticClass:"btn btn-block btn-primary",attrs:{type:"button"}},[s("i",{staticClass:"fas fa-shopping-bag mr-1"}),e._v(" "+e._s(e.strBuy)+" ")])])],2)]:s("p",{staticClass:"badge badge-dark"},[e._v(" "+e._s(e.dictionary("out_of_stock"))+" ")]):s("p",{staticClass:"badge badge-warning"},[e._v(" "+e._s(e.dictionary("unavailable"))+" ")])],2)]),e.isLoading?[e._t("default",[s("div",{domProps:{innerHTML:e._s(e.prerenderedHTML)}})]),e.error?s("div",{staticClass:"alert alert-warning small",attrs:{role:"alert"}},[e._v(" "+e._s(e.error)+" ")]):e._e()]:e._e()],2)}),[],!1,null,null,null).exports},props:{lang:{type:String,default:a._config.get("lang")},storeId:{type:Number,default:a._config.get("store_id")},term:{type:String,default:""},maxItems:{type:Number,default:4},autoFixScore:{type:[Number,Boolean],default:.83},popoverPlacement:{type:String,default:"bottom"}},data(){return{ecomSearch:new o.a(this.storeId),searchTerm:this.term,searchedTerm:null,searching:!1,suggestedItems:[],suggestedTerm:"",totalSearchResults:0,elInput:null,showPopover:!1}},computed:{history(){return this.ecomSearch.history.filter(e=>e.length>2&&-1===this.searchTerm.indexOf(e)).slice(0,5)}},methods:{dictionary:function(e,t){return t||(t=this&&this.lang||"en_us"),c[e]&&c[e][t]||""},setSearchTerm(e){this.elInput.value=e;const t=this.$el.parentElement;t&&"FORM"===t.tagName?t.submit():this.searchTerm=e},checkCurrentTerm(e){return!e&&!this.elInput.value||this.elInput.value===e},handleSuggestions(e){let t=e,s=!1;this.suggestedTerm="",this.ecomSearch.getTermSuggestions().forEach(({options:r,text:i})=>{if(r.length){const a=r[0];!this.totalSearchResults&&this.autoFixScore>0&&a.score>=this.autoFixScore&&-1===a.text.indexOf(e)&&(s=!0),t=t.replace(i,a.text)}}),t!==e&&(s?this.elInput.value=this.searchTerm=t:this.suggestedTerm=t,this.ecomSearch.history.shift())},fetchItems(e){const{ecomSearch:t}=this;!1!==e?(e||(e=this.searchTerm),t.setSearchTerm(e)):t.reset().setPageSize(this.maxItems),this.searching=!0,t.fetch().then(()=>{if(this.checkCurrentTerm(e)){const{getItems:s,getTotalCount:r}=t;this.searchedTerm=e,this.suggestedItems=s(),this.totalSearchResults=r(),this.handleSuggestions(e)}}).catch(e=>{console.error(e)}).finally(()=>{this.searching=!1})},instantSearch(e){null===this.searchedTerm?this.fetchItems(e):this.searchedTerm!==e&&(this.showPopover=!1,setTimeout(()=>{this.checkCurrentTerm(e)&&this.fetchItems(e),setTimeout(()=>{this.checkCurrentTerm(e)&&(this.showPopover=!0)},100)},400))}},created(){let e,t=window.pageYOffset;window.addEventListener("scroll",()=>{clearTimeout(e),e=setTimeout(()=>{Math.abs(window.pageYOffset-t)>50&&this.elInput===document.activeElement&&this.elInput.blur(),t=window.pageYOffset},50)}),this.ecomSearch.setPageSize(this.maxItems)},mounted(){let e;for(let t=0;t<this.$el.childNodes.length;t++)if("INPUT"===this.$el.childNodes[0].tagName){e=this.$el.childNodes[0];break}e?(e.addEventListener("keyup",t=>{this.searchTerm=e.value,this.showPopover||(this.showPopover=!0)}),e.addEventListener("focus",e=>{this.totalSearchResults||this.instantSearch(!1)}),this.term?this.fetchItems():this.searchTerm=e.value,e.setAttribute("autocomplete","off"),this.elInput=e):this.fetchItems()},watch:{searchTerm(e){e?e.length>2&&this.instantSearch(e):this.instantSearch(!1)}}}),w=(s(19),g(x,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"ec-search"},[e._t("input",[s("input",{staticClass:"form-control",attrs:{type:"search"}})]),e.elInput?[s("b-popover",{attrs:{triggers:"focus","custom-class":"ec-search__popover",target:e.elInput.id,show:e.showPopover,placement:e.popoverPlacement,"fallback-placement":[e.popoverPlacement]},on:{"update:show":function(t){e.showPopover=t}}},[s("div",{staticClass:"ec-search__head"},[s("div",[e.searching?s("div",{staticClass:"spinner-border m-4",attrs:{role:"status"}},[s("span",{staticClass:"sr-only"},[e._v("Loading...")])]):e._e(),s("transition",{attrs:{"enter-active-class":"animated fadeIn"}},[!e.searching&&e.searchedTerm?s("div",{staticClass:"ec-search__info"},[e.suggestedTerm?[e._v(" "+e._s(e.dictionary("did_you_mean"))+" "),s("a",{staticClass:"ec-search__suggestion",attrs:{href:"#"},domProps:{textContent:e._s(e.suggestedTerm)},on:{click:function(t){return t.preventDefault(),e.setSearchTerm(e.suggestedTerm)}}}),e._v(" ? ")]:e._e(),e.totalSearchResults?s("span",{staticClass:"ec-search__count-results"},[s("strong",[e._v(e._s(e.totalSearchResults))]),e._v(" "+e._s(e.dictionary("total_results_for"))+" "),s("em",[e._v(e._s(e.searchedTerm))]),e.totalSearchResults>e.maxItems?s("a",{attrs:{href:"#"},domProps:{textContent:e._s("+"+e.dictionary("see_all"))},on:{click:function(t){return t.preventDefault(),e.setSearchTerm(e.searchedTerm)}}}):e._e()]):s("span",{staticClass:"ec-search__no-results"},[e._v(" "+e._s(e.dictionary("no_results_for"))+" "),s("em",[e._v(e._s(e.searchedTerm))])])],2):e._e()]),s("transition",{attrs:{"enter-active-class":"animated fadeInLeft"}},[e.history.length?s("div",{staticClass:"ec-search__history"},[s("i",{staticClass:"fas fa-history"}),e._l(e.history,(function(t){return s("a",{staticClass:"ec-search__history__link",attrs:{href:"#"},domProps:{textContent:e._s(t)},on:{click:function(s){return s.preventDefault(),e.setSearchTerm(t)}}})}))],2):e._e()])],1),s("button",{staticClass:"btn ec-search__close",attrs:{type:"button"},on:{click:function(t){e.showPopover=!1}}},[s("i",{staticClass:"fas fa-times"})])]),s("transition",{attrs:{"enter-active-class":"animated fadeIn slow"}},[!e.searching&&e.suggestedItems.length?s("div",{staticClass:"ec-search__items"},e._l(e.suggestedItems,(function(t){return s("ec-product-card",{key:t._id,staticClass:"ec-search__item",attrs:{lang:e.lang,storeId:e.storeId,product:t}})})),1):e._e()])],1)]:e._e()],2)}),[],!1,null,null,null).exports);t.default=(e={},t="search-input")=>{const s=document.getElementById(t);if(s){const t={};for(let e=s.attributes.length-1;e>=0;e--){const{name:r,value:i}=s.attributes[e];t[r]=i}new i.a({render:s=>s(w,{props:e.props,scopedSlots:{input:()=>s("input",{attrs:t})}})}).$mount(s)}}}]).default},e.exports=r(s(4),s(70),s(167),s(10),s(121),s(122),s(161))}}]);
//# sourceMappingURL=36fdd927e5fd22a470ae.js.map