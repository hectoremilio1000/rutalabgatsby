(self.webpackChunkrutalab=self.webpackChunkrutalab||[]).push([[264],{9264:function(t,e,r){"use strict";r.r(e),r.d(e,{amplify_s3_text:function(){return h}});var n=r(527),o=r(2303),a=r(6651),i=r(932),l=r(2969),c=(r(7309),r(9409)),u=function(t,e,r,n){return new(r||(r=Promise))((function(o,a){function i(t){try{c(n.next(t))}catch(e){a(e)}}function l(t){try{c(n.throw(t))}catch(e){a(e)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(i,l)}c((n=n.apply(t,e||[])).next())}))},s=function(t,e){var r,n,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function l(a){return function(l){return function(a){if(r)throw new TypeError("Generator is already executing.");for(;i;)try{if(r=1,n&&(o=2&a[0]?n.return:a[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,a[1])).done)return o;switch(n=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,n=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=i.trys,(o=o.length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=e.call(t,i)}catch(l){a=[6,l],n=0}finally{r=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,l])}}},f=new o.k("S3Text"),h=function(){function t(t){(0,n.r)(this,t),this.contentType="text/*",this.level=i.A.Public,this.fallbackText=l.T.TEXT_FALLBACK_CONTENT}return t.prototype.watchHandler=function(){return u(this,void 0,void 0,(function(){return s(this,(function(t){switch(t.label){case 0:return[4,this.load()];case 1:return t.sent(),[2]}}))}))},t.prototype.componentWillLoad=function(){return u(this,void 0,void 0,(function(){return s(this,(function(t){switch(t.label){case 0:return[4,this.load()];case 1:return t.sent(),[2]}}))}))},t.prototype.load=function(){return u(this,void 0,void 0,(function(){var t,e,r,n,o,a,i,l,u,h,p;return s(this,(function(s){switch(s.label){case 0:return e=(t=this).path,r=t.textKey,n=t.body,o=t.contentType,a=t.level,i=t.track,l=t.identityId,r||e?(u=r||e,f.debug("loading "+u+"..."),n?[4,(0,c.p)(r,n,a,i,o,f)]:[3,2]):(f.debug("empty textKey and path"),[2]);case 1:s.sent(),s.label=2;case 2:return s.trys.push([2,4,,5]),h=this,[4,(0,c.a)(u,a,i,l,f)];case 3:return h.src=s.sent(),[3,5];case 4:throw p=s.sent(),f.debug(p),new Error(p);case 5:return[2]}}))}))},t.prototype.render=function(){return(0,n.h)("div",null,(0,n.h)("div",{class:"text-container"},this.src?(0,n.h)("pre",null,this.src):(0,n.h)("pre",null,a.o.get(this.fallbackText))))},Object.defineProperty(t,"watchers",{get:function(){return{textKey:["watchHandler"],body:["watchHandler"]}},enumerable:!1,configurable:!0}),t}();h.style=":host{--container-color:var(--amplify-smoke-white);--border-color:var(--amplify-light-grey);--font-size:var(--amplify-text-md);--text-color:var(--amplify-secondary-color)}.text-container{background-color:var(--container-color);border:1px solid var(--border-color);border-radius:5px;margin-bottom:10px}pre{display:block;margin:0.5rem 0;padding:0.5rem;line-height:1rem;max-height:50rem;font-size:var(--font-size);color:var(--text-color);word-break:break-all;overflow-y:scroll;overflow-x:auto}"}}]);
//# sourceMappingURL=264-366371229dd35c6b6742.js.map