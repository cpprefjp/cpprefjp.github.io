webpackJsonp([0],{110:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.Query=void 0;var r=a(21),i=n(r),s=a(70),l=n(s),u=a(12),o=n(u),c=a(18),d=function e(t,a){(0,o.default)(this,e),this.log=t.make_context(this.constructor.name),this.original_text=a,this.frags=a.normalize("NFKC").split(/\s+/).filter(Boolean),this.filters=new l.default,this.frags[0].match(/^</)&&(this.filters.add(e.Filter.header),this.frags=this.frags.map(function(e){return e.replace(/[<>]/,"").split(/\//)}).reduce(function(e,t){return e.concat(t)}).filter(Boolean));var n=[],r=!0,s=!1,u=void 0;try{for(var d,f=(0,i.default)(this.frags);!(r=(d=f.next()).done);r=!0){var h=d.value,p=h.split(/:/);if("type"===p[0]){if(!p[1])continue;var _=p[1].split(/,/),v=!0,y=!1,g=void 0;try{for(var m,k=(0,i.default)(_);!(v=(m=k.next()).done);v=!0){var w=m.value,b=null;switch(w){case"header":b=c.Result.HEADER;break;case"namespace":b=c.Result.NAMESPACE;break;case"class":b=c.Result.CLASS;break;case"function":b=c.Result.FUNCTION;break;case"mem_fun":b=c.Result.MEM_FUN;break;case"enum":b=c.Result.ENUM;break;case"variable":b=c.Result.VARIABLE;break;case"type-alias":b=c.Result.TYPE_ALIAS;break;case"macro":b=c.Result.MACRO;break;case"article":b=c.Result.ARTICLE;break;case"meta":b=c.Result.META;break;default:this.log.error("unhandled type in query",w)}b&&this.filters.add(b)}}catch(e){y=!0,g=e}finally{try{!v&&k.return&&k.return()}finally{if(y)throw g}}}else n.push(h)}}catch(e){s=!0,u=e}finally{try{!r&&f.return&&f.return()}finally{if(s)throw u}}this.frags=n.reduce(function(e,t){return"-"===t[0]?e.not.add(t.substring(1)):e.and.add(t),e},{and:new l.default,not:new l.default}),this.frags.not.delete(""),this.log.debug("parsed query "+this.original_text,this.frags,this.filters)};d.Filter={header:c.Result.HEADER},t.Query=d},116:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Result=void 0;var n=a(71),r=function(e){return e&&e.__esModule?e:{default:e}}(n),i={HEADER:(0,r.default)("cpp-header"),NAMESPACE:(0,r.default)("cpp-namespace"),CLASS:(0,r.default)("cpp-class"),FUNCTION:(0,r.default)("cpp-function"),MEM_FUN:(0,r.default)("cpp-mem_fun"),ENUM:(0,r.default)("cpp-enum"),VARIABLE:(0,r.default)("cpp-variable"),TYPE_ALIAS:(0,r.default)("cpp-type-alias"),MACRO:(0,r.default)("cpp-macro"),ARTICLE:(0,r.default)("article"),META:(0,r.default)("meta"),GOOGLE_FALLBACK:(0,r.default)("google-fallback")};t.Result=i},118:function(e,t,a){(function(t){e.exports=t.CRSearch=a(119)}).call(t,a(6))},119:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.Database=void 0;var r=a(120),i=n(r),s=a(70),l=n(s),u=a(21),o=n(u),c=a(48),d=n(c),f=a(28),h=n(f),p=a(12),_=n(p),v=a(17),y=n(v),g=a(18),m=a(73),k=a(74),w=a(127),b=a(69),x=(function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);t.default=e}(b),function(){function e(t,a){var n=this;(0,_.default)(this,e),this.log=t.make_context(this.constructor.name),this.name=a.database_name,this.base_url=new URL(a.base_url),this.namespaces=[],this.default_ns=new h.default,this.ids=[];var r=!0,i=!1,s=void 0;try{for(var u,c=(0,o.default)(a.ids.entries());!(r=(u=c.next()).done);r=!0){var f=u.value,p=(0,d.default)(f,2),v=p[0],y=p[1];this.ids.push(new m.IndexID(this.log,v,y))}}catch(e){i=!0,s=e}finally{try{!r&&c.return&&c.return()}finally{if(i)throw s}}var b=!0,x=!1,R=void 0;try{for(var E,A=(0,o.default)(a.namespaces.entries());!(b=(E=A.next()).done);b=!0){var S=E.value,L=(0,d.default)(S,2),C=L[0],T=L[1],M=new w.Namespace(this.log,C,T,this.ids,this.make_url.bind(this));this.log.info("got Namespace: '"+M.pretty_name()+"'",M),this.namespaces.push(M),M.cpp_version||(this.log.info("setting default namespace version for '"+M.namespace.join("/")+"'",M.pretty_name()),this.default_ns.set(M.namespace.join("/"),M))}}catch(e){x=!0,R=e}finally{try{!b&&A.return&&A.return()}finally{if(x)throw R}}var j=!0,P=!1,I=void 0;try{for(var U,O=(0,o.default)(this.namespaces);!(j=(U=O.next()).done);j=!0){var M=U.value,N=!0,F=!1,B=void 0;try{for(var D,K=(0,o.default)(M.indexes);!(N=(D=K.next()).done);N=!0){var q=D.value,H=(0,d.default)(q,2),G=H[0],V=H[1];if(V.related_to){var z=new l.default,W=!0,X=!1,Y=void 0;try{for(var Q,J=(0,o.default)(V.related_to);!(W=(Q=J.next()).done);W=!0){var Z=Q.value,$=this.ids[Z];if($.type===g.Result.HEADER){var ee=M.indexes.get($);if(!ee){var te=!0,ae=!1,ne=void 0;try{for(var re,ie=(0,o.default)(this.namespaces);!(te=(re=ie.next()).done);te=!0){var se=re.value;if(se.indexes.has($)){ee=se.indexes.get($);break}}}catch(e){ae=!0,ne=e}finally{try{!te&&ie.return&&ie.return()}finally{if(ae)throw ne}}ee||function(){var e=n.default_ns.get(M.namespace.join("/")),t=new k.Index(n.log,null,null,function(t){return n.make_url(e.make_path(t))});t.id=$,t.id_cache=t.id.key.map(function(e){return e.name}).join(),ee=t,n.log.warn("no namespace has this index; fake indexing '"+t.id.join()+"' --\x3e '"+G.join()+"'","default namespace:",e.pretty_name(),"\nfake index:",t,"\nself:",G.join()),e.indexes.set($,t)}()}V.in_header=ee,z.add(ee)}}}catch(e){X=!0,Y=e}finally{try{!W&&J.return&&J.return()}finally{if(X)throw Y}}V.related_to=z}}}catch(e){F=!0,B=e}finally{try{!N&&K.return&&K.return()}finally{if(F)throw B}}}}catch(e){P=!0,I=e}finally{try{!j&&O.return&&O.return()}finally{if(P)throw I}}}return(0,y.default)(e,[{key:"query",value:function(e,t,a){var n=[],r=!0,s=!1,l=void 0;try{for(var u,c=(0,o.default)(this.namespaces);!(r=(u=c.next()).done);r=!0){var d=u.value,f=d.query(e,t,a,this.make_url.bind(this));if(0!=f.targets.length&&(t=f.found_count,n.push.apply(n,(0,i.default)(f.targets)),t>a))return{targets:n,found_count:t}}}catch(e){s=!0,l=e}finally{try{!r&&c.return&&c.return()}finally{if(s)throw l}}return{targets:n,found_count:t}}},{key:"make_url",value:function(e){return new URL("/"+e+".html",this.base_url)}}]),e}());t.Database=x},125:function(e,t,a){"use strict";(function(e){function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.IndexID=void 0;var r=a(28),i=n(r),s=a(71),l=n(s),u=a(12),o=n(u),c=a(17),d=n(c),f=a(18),h=function(){function t(e,a,n){var r=this;(0,o.default)(this,t),this.log=e.make_context(this.constructor.name),this.s_key=a;var i=n.key;switch(this.type=["header","namespace","class","function","mem_fun","enum","variable","type-alias","macro"].includes(n.type)?(0,l.default)("cpp-"+n.type):(0,l.default)(n.type),this.type){case f.Result.CLASS:case f.Result.FUNCTION:case f.Result.MEM_FUN:case f.Result.ENUM:case f.Result.VARIABLE:case f.Result.TYPE_ALIAS:var s=["std"];n.cpp_namespace&&(s=n.cpp_namespace),i=s.concat(i)}this.key=i.map(function(e){return{name:e.normalize("NFKC")}}),t.VERBATIM_TRS.forEach(function(e,t){e.only&&e.only!==r.type||r.key[r.key.length-1].name.includes(t)&&(r.key[r.key.length-1]={name:r.key[r.key.length-1].name.replace(t,""+e.to),classes:["special"]},e.type&&(r.type=e.type,r.type===f.Result.CLASS&&"std"!==r.key[0]&&r.key.unshift({name:"std"})))})}return(0,d.default)(t,[{key:"equals",value:function(e){return this.s_key===e.s_key&&this.ns_id===e.ns_id}}]),(0,d.default)(t,[{key:"path_join",value:function(){return this.key.map(function(e){return e.name}).join("/")}},{key:"join",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.join_hint();return""+(e.wrap.left||"")+this.key.map(function(e){return e.name}).join(e.delim.text)+(e.wrap.right||"")}},{key:"join_html",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.join_hint(),a=e('<div class="key-container delim-'+t.delim.name+'" />');if(t.wrap.left){var n=e('<span class="wrap" />');n.text(t.wrap.left),n.appendTo(a)}var r=e('<div class="keys" />');if(r.appendTo(a),this.key.forEach(function(t){var a=e('<span class="key" />');t.classes&&t.classes.forEach(function(e){return a.addClass(e)}),a.text(t.name),a.appendTo(r)}),t.wrap.right){var i=e('<span class="wrap" />');i.text(t.wrap.right),i.appendTo(a)}return a}},{key:"join_hint",value:function(){var e={delim:{name:"none",text:""},wrap:{}};switch(this.type){case f.Result.HEADER:e={wrap:{left:"<",right:">"},delim:{name:"slash",text:"/"}};break;case f.Result.NAMESPACE:case f.Result.CLASS:case f.Result.FUNCTION:case f.Result.MEM_FUN:case f.Result.ENUM:case f.Result.VARIABLE:case f.Result.TYPE_ALIAS:e.delim={name:"ns",text:"::"}}return e}}]),t}();h.VERBATIM_TRS=new i.default([["コンストラクタ",{to:"(constructor)",only:f.Result.MEM_FUN}],["デストラクタ",{to:"(destructor)",only:f.Result.MEM_FUN}],["推論補助",{to:"(deduction guide)",type:f.Result.CLASS}],["非メンバ関数",{to:"non-member function",type:f.Result.FUNCTION}],["単項",{to:"unary"}]]),t.IndexID=h}).call(t,a(51))},126:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.Index=void 0;var r=a(12),i=n(r),s=a(17),l=n(s),u=a(18),o=(a(73),function(){function e(t,a,n,r){var s=this;(0,i.default)(this,e),this.log=t.make_context(this.constructor.name),this.in_header=null,this.url=function(){return r(s)},a&&(this.id=a,this.page_id=n.page_id,this.related_to=n.related_to,this.id_cache=this.join())}return(0,l.default)(e,[{key:"type",value:function(){return this.id.type}},{key:"join_html",value:function(){return this.id.join_html()}},{key:"join",value:function(){return this.id.join()}}],[{key:"ambgMatch",value:function(e,t){return[u.Result.ARTICLE,u.Result.META].includes(e.id.type)?e.id_cache.toLowerCase().includes(t.toLowerCase()):e.id_cache.includes(t)}}]),e}());t.Index=o},127:function(e,t,a){(function(t){e.exports=t.CRSearch=a(128)}).call(t,a(6))},128:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.Namespace=void 0;var r=a(129),i=n(r),s=a(72),l=n(s),u=a(48),o=n(u),c=a(21),d=n(c),f=a(28),h=n(f),p=a(12),_=n(p),v=a(17),y=n(v),g=a(74),m=(a(18),function(){function e(t,a,n,r,i){var s=this;(0,_.default)(this,e),this.log=t.make_context(this.constructor.name),this.ns_id=a,this.indexes=new h.default,this.namespace=n.namespace,this.cpp_version=n.cpp_version,n.path_prefixes?this.path_prefixes=n.path_prefixes.join("/"):this.path_prefixes=this.namespace.join("/");var l=!0,u=!1,o=void 0;try{for(var c,f=(0,d.default)(n.indexes);!(l=(c=f.next()).done);l=!0){var p=c.value,v=new g.Index(this.log,r[p.id],p,function(e){return i(s.make_path(e))});this.indexes.set(v.id,v)}}catch(e){u=!0,o=e}finally{try{!l&&f.return&&f.return()}finally{if(u)throw o}}}return(0,y.default)(e,[{key:"query",value:function(e,t,a,n){var r=this,s=[],u=!0,c=!1,f=void 0;try{for(var h,p=(0,d.default)(this.indexes);!(u=(h=p.next()).done);u=!0){var _=h.value,v=(0,o.default)(_,2),y=(v[0],v[1]),m=function(i,u){if(e.filters.size&&!(0,l.default)(e.filters).some(function(e){return u.id.type===e}))return"continue";if((0,l.default)(e.frags.and).every(function(e,t){return g.Index.ambgMatch(e,t)}.bind(null,u))&&!(0,l.default)(e.frags.not).some(function(e,t){return g.Index.ambgMatch(e,t)}.bind(null,u))){if(++t>a)return{v:{targets:s,found_count:t}};s.push({path:n(r.make_path(u)),index:u})}}(0,y);switch(m){case"continue":continue;default:if("object"===(void 0===m?"undefined":(0,i.default)(m)))return m.v}}}catch(e){c=!0,f=e}finally{try{!u&&p.return&&p.return()}finally{if(c)throw f}}return{targets:s,found_count:t}}},{key:"make_path",value:function(e){return e.page_id?this.path_prefixes+"/"+e.page_id.join("/"):this.path_prefixes+"/"+e.id.path_join()}},{key:"pretty_version",value:function(){return this.cpp_version?"C++"+this.cpp_version:"(no version)"}},{key:"pretty_name",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return this.namespace.join(" ≫")+(e?"["+this.pretty_version()+"]":"")}}]),e}());t.Namespace=m},136:function(e,t,a){(function(t){e.exports=t.CRSearch=a(137)}).call(t,a(6))},137:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.Logger=void 0;var r=a(138),i=n(r),s=a(143),l=n(s),u=a(12),o=n(u),c=a(17),d=n(c),f=function(){function e(t){(0,o.default)(this,e),this.kv=t}return(0,d.default)(e,[{key:"join",value:function(){var e=this;return(0,l.default)(this.kv).map(function(t){return t+":"+e.kv[t]}).join(";")}},{key:"clone",value:function(t){return new e((0,i.default)({},this.kv,t))}}]),e}(),h=function(){function e(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};(0,o.default)(this,e),this.orig_ctx=[].concat(t),this.ctx=[].concat(t),this.opts=(0,i.default)(e.defaultOptions,a)}return(0,d.default)(e,null,[{key:"default_level",value:function(){return this.Level.info}}]),(0,d.default)(e,[{key:"original_context",value:function(){return this.orig_ctx}},{key:"make_context",value:function(t){var a=new e(this.orig_ctx.concat(t),this.opts);return a.orig_ctx=(0,i.default)([],this.orig_ctx),a}},{key:"debug",value:function(){return this.log_impl.apply(this,[e.Level.debug].concat(Array.prototype.slice.call(arguments)))}},{key:"info",value:function(){return this.log_impl.apply(this,[e.Level.info].concat(Array.prototype.slice.call(arguments)))}},{key:"warn",value:function(){return this.log_impl.apply(this,[e.Level.warn].concat(Array.prototype.slice.call(arguments)))}},{key:"error",value:function(){return this.log_impl.apply(this,[e.Level.error].concat(Array.prototype.slice.call(arguments)))}},{key:"log_impl",value:function(t,a){if(this.need_log(t)){(t.intensity>=e.Level.error.intensity?console.group:console.groupCollapsed)("%c"+t.icon+" %c"+t.label+"%c [%c"+this.ctx.join("::")+"%c] %c"+a,t.style.clone({"text-decoration":"none"}).join(),t.style.join(),"",this.opts.ctx.style.join(),"",e.PartStyle.message_body.join());for(var n=arguments.length,r=Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];if(r.length){var s;console.group("%cmessage",e.PartStyle.message.join()),(s=console).log.apply(s,r),console.groupEnd()}console.groupCollapsed("%cbacktrace",e.PartStyle.backtrace.join()),console.trace(),console.groupEnd(),console.groupEnd()}}},{key:"need_log",value:function(t){return t.intensity!==e.Level.debug.intensity&&t.intensity>=this.opts.ctx.level.intensity}}]),e}();h.Level={debug:{intensity:-1,label:"DEBUG",out:console.debug,style:new f({"font-family":"sans-serif","font-weight":"bold","text-decoration":"underline",color:"#B40486"}),icon:"⚒️"},info:{intensity:0,label:"INFO ",out:console.info,style:new f({"font-family":"sans-serif",color:"gray"}),icon:"📝"},warn:{intensity:1,label:"WARN ",out:console.warn,style:new f({"font-family":"sans-serif","font-weight":"bold",color:"#ff8c00"}),icon:"⚠️"},error:{intensity:2,label:"ERROR",out:console.error,style:new f({"font-family":"sans-serif","font-weight":"bold",color:"#dc143c"}),icon:"🚫"}},h.PartStyle={message:new f({"font-weight":"bold","text-decoration":"underline",color:"#aaa"}),message_body:new f({"font-weight":"normal","text-decoration":"none",color:"#222"}),backtrace:new f({"font-weight":"bold","text-decoration":"underline",color:"#aaa"})},h.defaultOptions={ctx:{level:h.default_level(),style:new f({"font-weight":"bold",color:"#222222"})}},t.Logger=h},18:function(e,t,a){(function(t){e.exports=t.CRSearch=a(116)}).call(t,a(6))},69:function(e,t,a){(function(t){e.exports=t.CRSearch=a(110)}).call(t,a(6))},73:function(e,t,a){(function(t){e.exports=t.CRSearch=a(125)}).call(t,a(6))},74:function(e,t,a){(function(t){e.exports=t.CRSearch=a(126)}).call(t,a(6))},75:function(e,t,a){(function(t){e.exports=t.CRSearch=a(76)}).call(t,a(6))},76:function(e,t,a){"use strict";(function(n){function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=a(77),s=r(i),l=a(21),u=r(l),o=a(48),c=r(o),d=a(28),f=r(d),h=a(12),p=r(h),_=a(17),v=r(_),y=a(109),g=r(y),m=a(69),k=a(18),w=a(118),b=a(136),x=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e.OPTS_DEFAULT;(0,p.default)(this,e),this.opts=t,this.log=new b.Logger(e.APPNAME,t),this.loaded=!1,this.db=new f.default,this.last_id=0,this.last_input={},this.search_timer={},this.selectIndex=0,this.resultCount=0,this.hasFocus=!1,g.default.bind("/",function(){if(!this.hasFocus)return this.select_default_input()}.bind(this)),g.default.bind("esc",function(){return this.hide_all_result()}.bind(this)),this.log.info("initialized.")}return(0,v.default)(e,[{key:"load",value:function(){var e=this,t=1,a=!0,r=!1,i=void 0;try{for(var s,l=(0,u.default)(this.db);!(a=(s=l.next()).done);a=!0){var o=s.value,d=(0,c.default)(o,2),f=d[0];d[1];!function(a,r){"/"==a.pathname&&(a.pathname="/crsearch.json"),e.log.info("fetching database ("+t+"/"+e.db.size+"): "+a),n.ajax({url:a,success:function(t){e.log.info("fetched"),e.parse(a,t)},fail:function(t){e.log.error("fetch failed",t)}}),++t}(f)}}catch(e){r=!0,i=e}finally{try{!a&&l.return&&l.return()}finally{if(r)throw i}}}},{key:"parse",value:function(e,t){this.log.info("parsing...",t),this.db.set(e,new w.Database(this.log,t)),this.defaultUrl||(this.defaultUrl=new URL(this.db.get(e).base_url).hostname),this.updateSearchButton(""),this.log.info("parsed.",this.db.get(e))}},{key:"database",value:function(e){try{var t=new URL(e);this.db.set(t.toString(),null)}catch(t){var a=document.createElement("a");a.href=e,"/"==a.pathname&&(a.pathname="/crsearch.json");var n=new URL(a.toString());this.db.set(n.toString(),null)}}},{key:"selectChange",value:function(e,t){this.selectIndex+=e?-1:1,this.selectIndex<0?this.selectIndex=this.resultCount:this.selectIndex>this.resultCount&&(this.selectIndex=0);var a=!0,r=!1,i=void 0;try{for(var s,l=(0,u.default)(t.find(".results .result"));!(a=(s=l.next()).done);a=!0){var o=s.value,c=n(o).children("a");parseInt(n(o).attr("data-result-id"))===this.selectIndex?(c.addClass("focus"),c.focus()):(c.removeClass("focus"),c.blur())}}catch(e){r=!0,i=e}finally{try{!a&&l.return&&l.return()}finally{if(r)throw i}}}},{key:"do_search",value:function(e){clearTimeout(this.search_timer[e.data.id]),this.search_timer[e.data.id]=setTimeout(function(e){this.selectIndex=0,this.resultCount=this.do_search_impl(e)}.bind(this,e),20)}},{key:"do_search_impl",value:function(t){var a=new m.Query(this.log,this.last_input[t.data.id]);this.log.debug("query: '"+a.original_text+"'",a);var r=this.clear_results_for(t.target),i={},s=new f.default,l=!0,o=!1,d=void 0;try{for(var h,p=(0,u.default)(this.db);!(l=(h=p.next()).done);l=!0){var _=h.value,v=(0,c.default)(_,2),y=(v[0],v[1]),g=y.query(a,0,e.MAX_RESULT);if(i[y.name]={url:y.base_url},s.set(y.name,g.targets),0!=s.get(y.name).length){g.found_count>e.MAX_RESULT?i[y.name].html=n('<div class="message">Showing first<span class="match-count">'+e.MAX_RESULT+"</span>matches</div>"):i[y.name].html=n('<div class="message">Showing<span class="match-count">all</span>matches</div>')}else{var w=n('<div class="message">No matches for </div>'),b=n('<span class="query" />');b.text(a.original_text),b.appendTo(w),i[y.name].html=w}}}catch(e){o=!0,d=e}finally{try{!l&&p.return&&p.return()}finally{if(o)throw d}}var x=0,R=!0,E=!1,A=void 0;try{for(var S,L=(0,u.default)(s);!(R=(S=L.next()).done);R=!0){var C=S.value,T=(0,c.default)(C,2),M=T[0],j=T[1];r.append(this.make_site_header(M,i[M]));var P=j.reduce(function(e,t){var a=t.index.in_header;return e.set(a,e.get(a)||[]),e.get(a).push(t),e},new f.default);this.log.debug("gr",P);var I=!0,U=!1,O=void 0;try{for(var N,F=(0,u.default)(P);!(I=(N=F.next()).done);I=!0){var B=N.value,D=(0,c.default)(B,2),K=D[0],q=D[1];this.make_result_header(K).appendTo(r);var H=!0,G=!1,V=void 0;try{for(var z,W=(0,u.default)(q);!(H=(z=W.next()).done);H=!0){var X=z.value,Y=this.make_result(X.index.type(),X.index,X.path);Y.attr("data-result-id",x++),r.append(Y)}}catch(e){G=!0,V=e}finally{try{!H&&W.return&&W.return()}finally{if(G)throw V}}}}catch(e){U=!0,O=e}finally{try{!I&&F.return&&F.return()}finally{if(U)throw O}}}}catch(e){E=!0,A=e}finally{try{!R&&L.return&&L.return()}finally{if(E)throw A}}var Q=!0,J=!1,Z=void 0;try{for(var $,ee=(0,u.default)(this.db);!(Q=($=ee.next()).done);Q=!0){var te=$.value,ae=(0,c.default)(te,2),ne=(ae[0],ae[1]),re=this.make_result(k.Result.GOOGLE_FALLBACK,a.original_text,{name:ne.name,url:ne.base_url.host});re.attr("data-result-id",x++),r.append(re)}}catch(e){J=!0,Z=e}finally{try{!Q&&ee.return&&ee.return()}finally{if(J)throw Z}}return r.find('.result[data-result-id="0"] > a').addClass("focus"),x-1}},{key:"make_site_header",value:function(e,t){var a=n('<li class="result cr-meta-result cr-result-header" />');if(t.html){var r=n('<div class="extra" />');t.klass&&r.addClass(t.klass),t.html.appendTo(r),r.appendTo(a)}var i=n('<a class="db-name" />');return i.attr("href",t.url),i.attr("target","_blank"),i.text(e),i.appendTo(a),a}},{key:"make_google_url",value:function(e,t){var a=this.opts.google_url;return a.searchParams.set("q",e+" site:"+t),a}},{key:"make_result_header",value:function(e){var t=n('<li class="result cr-meta-result in-header" />'),a=null;return e?(a=n("<a />"),this.opts.force_new_window&&a.attr("target","_blank"),a.attr("href",e.url())):a=n("<div />"),a.text(e?e.join():"(no header)"),a.appendTo(t),t}},{key:"make_result",value:function(t,a){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0,i=e.RESULT_PROTO.clone();i.addClass((0,s.default)(t));var l=i.children("a"),u=n('<div class="content" />').appendTo(l);switch(t){case k.Result.GOOGLE_FALLBACK:l.attr("href",this.make_google_url(a,r.url)),l.attr("target","_blank"),n('<div class="query">'+a+"</div>").appendTo(u),n('<div class="fallback-site">'+r.url+"</div>").appendTo(u);break;default:l.attr("href",r),a.join_html().appendTo(u),this.opts.force_new_window&&l.attr("target","_blank")}return i}},{key:"updateSearchButton",value:function(e){this.searchButton.attr("href",this.make_google_url(e,this.defaultUrl))}},{key:"searchbox",value:function(t){var a=this;this.searchButton=n("<a />"),this.searchButton.attr("target","_blank"),this.searchButton.addClass("search");var r=!0,i=!1,s=void 0;try{for(var l,o=(0,u.default)(this.opts.klass.search_button);!(r=(l=o.next()).done);r=!0){var c=l.value;this.searchButton.addClass(c)}}catch(e){i=!0,s=e}finally{try{!r&&o.return&&o.return()}finally{if(i)throw s}}this.loaded||(this.loaded=!0,this.load());var d=this.last_id++;this.log.info("creating searchbox "+d);var f=n(t);f.attr("data-crsearch-id",d),this.last_input[d]="";var h=n('<div class="control" />');h.appendTo(f);var p=n('<input type="text" />');p.addClass("input"),p.addClass("mousetrap"),p.attr("autocomplete",!1),p.attr("placeholder",e.INPUT_PLACEHOLDER),p.appendTo(h),g.default.bind("up",function(e){0!=n(document.activeElement).closest('*[data-crsearch-id="'+d+'"]').length&&(e.preventDefault(),a.selectChange(!0,f))}),g.default.bind("down",function(e){0!=n(document.activeElement).closest('*[data-crsearch-id="'+d+'"]').length&&(e.preventDefault(),a.selectChange(!1,f))}),p.on("click",function(e){return this.show_result_wrapper_for(e.target),this.select_default_input()}.bind(this)),p.on("keyup",{id:d},function(e){this.show_result_wrapper_for(e.target);var t=n(e.target).val().replace(/\s+/g," ").trim();return this.last_input[e.data.id]!=t&&(this.last_input[e.data.id]=t,this.updateSearchButton(t),t.length>=2?(this.find_result_wrapper_for(e.target).removeClass("help"),this.msg_for(e.target),this.do_search(e)):0==t.length?(this.clear_results_for(e.target),this.msg_for(e.target),this.find_result_wrapper_for(e.target).addClass("help")):(this.clear_results_for(e.target),this.msg_for(e.target,0==t.length?"":"input >= 2 characters..."),this.find_result_wrapper_for(e.target).addClass("help"))),!1}.bind(this)),this.default_input=p,(0,g.default)(p.get(0)).bind("esc",function(e){return n(e.target).blur(),this.hide_all_result()}.bind(this));var _=n("<div />");_.addClass(e.RESULT_WRAPPER_KLASS),_.addClass("help"),_.appendTo(f);var v=n("<ul />");v.addClass(e.RESULTS_KLASS),v.appendTo(_),n(e.HELP).appendTo(_);var y=n('<div class="crsearch-info" />'),m=n("<a />");m.attr("href",e.HOMEPAGE),m.attr("target","_blank"),m.text(e.APPNAME+" v"+e.VERSION),m.appendTo(y),y.appendTo(_),p.on("focusin",function(){return this.hasFocus=!0,this.show_result_wrapper_for(this)}.bind(this)),p.on("focusout",function(){a.hasFocus=!1}),this.searchButton.appendTo(h)}},{key:"select_default_input",value:function(){return this.default_input.select(),!1}},{key:"find_cr_for",value:function(t){return n(t).closest("."+e.KLASS)}},{key:"find_result_wrapper_for",value:function(t){return this.find_cr_for(t).children("."+e.RESULT_WRAPPER_KLASS)}},{key:"find_results_for",value:function(t){return this.find_result_wrapper_for(t).children("."+e.RESULTS_KLASS)}},{key:"show_result_wrapper_for",value:function(e){return this.find_result_wrapper_for(e).addClass("visible"),!1}},{key:"msg_for",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return this.find_cr_for(e).find(".result-wrapper .help-content .message").text(t),!1}},{key:"hide_result_wrapper_for",value:function(e){return this.find_result_wrapper_for(e).removeClass("visible"),!1}},{key:"clear_results_for",value:function(e){var t=this.find_results_for(e);return t.empty(),t}},{key:"hide_all_result",value:function(){return n("."+e.KLASS+" ."+e.RESULT_WRAPPER_KLASS).removeClass("visible"),!1}}]),e}();x.APPNAME="CRSearch",x.VERSION="1.1.2",x.HOMEPAGE="https://github.com/cpprefjp/crsearch",x.OPTS_DEFAULT={klass:{search_button:["fa","fa-fw","fa-binoculars"]},google_url:new URL("https://www.google.co.jp/search"),force_new_window:!1},x.KLASS="crsearch",x.RESULT_WRAPPER_KLASS="result-wrapper",x.RESULTS_KLASS="results",x.INPUT_PLACEHOLDER='"std::...", "<header>", etc.',x.MAX_RESULT=5,x.RESULT_PROTO=n('<li class="result"><a href="#"></a></li>'),x.HELP='\n    <div class="help-content">\n      <div class="message"></div>\n      <ul class="examples">\n        <li>\n          <h3>Class / Function / Type</h3>\n          <div class="query">std::<span class="input"></span></div>\n        </li>\n        <li>\n          <h3>Header file</h3>\n          <div class="query">&lt;<span class="input"></span>&gt;</div>\n        </li>\n        <li>\n          <h3>Other / All</h3>\n          <div class="query"><span class="input"></span></div>\n        </li>\n      </ul>\n    </div>\n  ',t.default=x,e.exports=x}).call(t,a(51))}},[75]);