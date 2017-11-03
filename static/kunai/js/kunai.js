window.Kunai=webpackJsonpKunai([0],{100:function(t,e,n){"use strict";var i=n(192),a=n.n(i);n.d(e,"b",function(){return a.a});var r=n(193);n.d(e,"a",function(){return r.a})},104:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),function(t){n.d(e,"Kunai",function(){return x});var i=n(35),a=n.n(i),r=n(36),o=n.n(r),s=n(13),l=n.n(s),c=n(19),u=n.n(c),h=n(1),f=n.n(h),d=n(3),p=n.n(d),g=n(20),m=n(153),v=n(154),y=n(160),k=n(190),b=(n(100),n(194)),w=n(197),_=(n.n(w),n(26)),C=n(247),x=(n.n(C),function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};f()(this,e),this.opts=u()({},e.defaultOptions,t),this.log=new _.Logger("Kunai",new _.Logger.Option(u()({},this.opts,{icon:{text:"🗡",color:"#2244AA"}})));try{this.log.disableBacktrace(!0),this.log.info("version "+{version:"1.3.0",bugs_url:"https://github.com/cpprefjp/kunai/issues"}.version+" (https://github.com/cpprefjp/kunai/tree/v"+{version:"1.3.0",bugs_url:"https://github.com/cpprefjp/kunai/issues"}.version+")"),this.log.info("please report frontend bugs to: "+{version:"1.3.0",bugs_url:"https://github.com/cpprefjp/kunai/issues"}.bugs_url)}finally{this.log.disableBacktrace(!1)}this.opts.compat&&(this.compat=new m.a(this.log)),this.initUI(),this.wand=new k.a(this.log),this.yatas=new l.a}return p()(e,[{key:"cpprefjp",value:function(){function t(){return e.apply(this,arguments)}var e=o()(a.a.mark(function t(){return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.load_impl(["cpprefjp","site"]),t.next=3,this.initCRSearch(!0);case 3:this.crs=t.sent;case 4:case"end":return t.stop()}},t,this)}));return t}()},{key:"boostjp",value:function(){function t(){return e.apply(this,arguments)}var e=o()(a.a.mark(function t(){return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.load_impl(["boostjp","site"]),t.next=3,this.initCRSearch(!1);case 3:this.crs=t.sent;case 4:case"end":return t.stop()}},t,this)}));return t}()},{key:"load_impl",value:function(e){var n=e.join("/");this.log.info("loading ("+n+")"),t("body").addClass("kunai"),this.meta=new y.a(this.log,e,this.onCodeFound.bind(this)),this.log.info("loaded ("+n+")")}},{key:"onCodeFound",value:function(){function t(t){return e.apply(this,arguments)}var e=o()(a.a.mark(function t(e){var n,i;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e.serializeInDOM(this.meta.getDOM(y.a.PageKey.codes).get(e.key)),n=this.meta.getDOM(y.a.PageKey.codes,e),n.length){t.next=4;break}throw new g.a("[BUG] the original DOM element for code "+e+" not found",n);case 4:n.addClass("kunai-code"),this.yatas.set(e,new b.a(this.log,this.wand,this.meta.getCode(e))),i=this.meta.getDOM(y.a.PageKey.articleBody).children('h2:contains("例") ~ .yata'),i.length&&i.removeClass("hidden");case 8:case"end":return t.stop()}},t,this)}));return t}()},{key:"initUI",value:function(){function t(){return e.apply(this,arguments)}var e=o()(a.a.mark(function t(){var e;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e=new _.Logger(["Kunai","UI"],this.log.opts),this.ui={navbar:new v.b(e),treeview:new v.c(e),content:new v.a(e)};case 2:case"end":return t.stop()}},t,this)}));return t}()},{key:"initCRSearch",value:function(){function t(t){return e.apply(this,arguments)}var e=o()(a.a.mark(function t(e){var n;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e){t.next=2;break}return t.abrupt("return",null);case 2:return n=new C.CRSearch,n.database("https://cpprefjp.github.io/static/crsearch/crsearch.json"),n.searchbox(document.getElementsByClassName("crsearch")),t.abrupt("return",n);case 6:case"end":return t.stop()}},t,this)}));return t}()}]),e}());x.defaultOptions={compat:!0}}.call(e,n(6))},153:function(t,e,n){"use strict";(function(t){n.d(e,"a",function(){return s});var i=n(1),a=n.n(i),r=n(3),o=n.n(r),s=function(){function e(n){a()(this,e),this.log=n.makeContext("Compat"),this.log.info("applying..."),window.tree_onclick=function(t){t.stopPropagation()},t(".treespan").on("click",this.onTreeClick.bind(this)),this.log.info("applied.")}return o()(e,[{key:"onTreeClick",value:function(e){e.stopPropagation(),t(e.currentTarget).parent("li").toggleClass("active")}}]),e}()}).call(e,n(6))},154:function(t,e,n){"use strict";var i=n(155);n.d(e,"a",function(){return i.a});var a=n(158);n.d(e,"c",function(){return a.a});var r=n(159);n.d(e,"b",function(){return r.a})},155:function(t,e,n){"use strict";(function(t){n.d(e,"a",function(){return o});var i=n(1),a=n.n(i),r=n(95),o=function e(n){a()(this,e),this.log=n.makeContext("Content"),this.log.debug("initialzing..."),this.log.debug("found "+r.a(t('main[role="main"] div[itemtype="http://schema.org/Article"] .content-body span.cpp'))+" badges")}}).call(e,n(6))},158:function(t,e,n){"use strict";(function(t){n.d(e,"a",function(){return o});var i=n(1),a=n.n(i),r=n(95),o=function e(n){a()(this,e),this.log=n.makeContext("Treeview"),this.log.debug("initialzing...");var i=t('main[role="main"]'),o=i.find(".tree");if(!o.length)return void this.log.error("tree view DOM element not found (.tree)");this.log.debug("found "+r.a(o.find(".cpp-sidebar"))+" badges")}}).call(e,n(6))},159:function(t,e,n){"use strict";(function(t){n.d(e,"a",function(){return s});var i=n(1),a=n.n(i),r=n(3),o=n.n(r),s=function(){function e(n){a()(this,e),this.log=n.makeContext("Navbar"),this.log.debug("initializing..."),this.btn=t("nav.navbar button.navbar-toggle"),this.target=t(this.btn.attr("data-target")),this.btn.on("click",this.onNavbarToggle.bind(this))}return o()(e,[{key:"onNavbarToggle",value:function(t){this.log.debug("onNavbarToggle",t),t.preventDefault(),this.btn.toggleClass("collapsed"),this.target.toggleClass("collapse")}}]),e}()}).call(e,n(6))},160:function(t,e,n){"use strict";var i=(n(96),n(161));n.d(e,"a",function(){return i.a})},161:function(t,e,n){"use strict";(function(t){n.d(e,"a",function(){return R});var i=n(66),a=n.n(i),r=n(25),o=n.n(r),s=n(11),l=n.n(s),c=n(166),u=n.n(c),h=n(35),f=n.n(h),d=n(97),p=n.n(d),g=n(36),m=n.n(g),v=n(67),y=n.n(v),k=n(13),b=n.n(k),w=n(1),_=n.n(w),C=n(3),x=n.n(C),T=n(20),M=n(96),D=n(174),O=n(176),S=n(178),P=n(26),j=n(188),A={gfm:!0,tables:!0},R=function(){function e(t,n,i){_()(this,e),this.log=t.makeContext("Meta",new P.Logger.Option({icon:{text:"☯",color:"#AAA"}})),this.config=n,this.onCodeFound=i,this.last_key=0,this.codes=new S.d(this.log),this.dom=new b.a,this.andareMetaInfo=new b.a;try{this.parseHTML()}catch(t){try{if(!(t instanceof T.a))throw t;var a;(a=this.log).error.apply(a,[t.reason].concat(y()(t.args)))}catch(t){throw t}finally{this.log.error("parse failed")}}}return x()(e,[{key:"onMetaURLFound",value:function(){this.log.info("got meta URL: "+this.original_url,this.original_url),"https:"!=this.original_url.protocol&&(this.log.warn("protocol was not https, force setting to https",this.original_url.protocol),this.original_url.protocol="https:"),this.log.info("original_url: "+this.original_url,this.original_url),this.filename=[].concat(y()(this.original_url.pathname.split("/"))).pop(),this.raw_url=new URL(this.original_url),this.raw_url.host="raw.githubusercontent.com",this.raw_url.pathname=this.raw_url.pathname.replace(new RegExp("^/"+this.reponame()+"/edit/"),"/"+this.reponame()+"/"),this.log.info("raw_url: "+this.raw_url,this.raw_url),this.content_type=O.a.parse(this.raw_url),this.fetchMetaSource()}},{key:"fetchMetaSource",value:function(){function e(){return n.apply(this,arguments)}var n=m()(f.a.mark(function e(){var n=this;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:console.time(p()({fetchMetaSource:this.filename})),t.ajax({method:"GET",url:this.raw_url}).done(function(t){console.timeEnd(p()({fetchMetaSource:n.filename})),n.log.info("fetch success",t),console.time(p()({parse:n.filename}));try{n.parse(n.content_type,t)}catch(t){if(!(t instanceof T.a))throw t;var e;(e=n.log).error.apply(e,[t.reason].concat(y()(t.args)))}finally{console.timeEnd(p()({parse:n.filename}))}}).fail(function(t){console.timeEnd(p()({fetchMetaSource:n.filename})),n.log.error(t.name,t.message)});case 2:case"end":return e.stop()}},e,this)}));return e}()},{key:"parse",value:function(t,e){this.log.info("parsing markdown file '"+this.filename+"'"),this.parse_impl(t,e),this.log.info("parse success")}},{key:"parse_impl",value:function(t,e){if(t===O.a.MARKDOWN){var n=new j.Lexer(A);this.log.debug("lexer",n),this.tokens=n.lex(e).map(function(t){return new b.a(u()(t))}),this.log.debug("markdown ("+this.tokens.length+" tokens)",this.tokens),this.process(this.tokens)}}},{key:"getCode",value:function(t){if(!this.codes.has(t))throw new T.a("code "+t+" not found in Meta data");return this.codes.get(t)}},{key:"process",value:function(t){this.is_first_list=!0,this.is_inside_example=!1,this.single_bufs=[];var e=this.log.opts.data.ctx.level;this.log.opts.data.ctx.level=P.Logger.Level.info;try{var n=!0,i=!1,a=void 0;try{for(var r,o=l()(t);!(n=(r=o.next()).done);n=!0){var s=r.value;this.process_single(s)}}catch(t){i=!0,a=t}finally{try{!n&&o.return&&o.return()}finally{if(i)throw a}}}finally{this.log.opts.data.ctx.level=e}}},{key:"process_single",value:function(t){switch(this.log.debug("processing token <"+t.get("type")+">",t),t.get("type")){case"heading":this.heading_depth=t.depth,t.get("text").trim().match(/例|Example|Sample|サンプル/i)?this.is_inside_example=!0:this.is_inside_example=!1;break;case"list_item_start":this.single_bufs.push("");break;case"list_item_end":var e=this.single_bufs.pop();if(1===this.heading_depth&&this.is_first_list){var n=e.match(/([^\]]+)\[([^\] ]+) ([^\]]+)\]$/);if(n){this.log.debug("matched: '"+n[0]+"'",e,n);var i=o()(n,4),a=(i[0],i[1]),r=i[2],s=i[3];this.log.debug("matched (detailed): "+a+" "+r+" "+s,a,r,s),"meta"===r&&(this.andareMetaInfo.set(s,a),this.log.info("got meta: '"+s+"' --\x3e '"+a+"'"))}}break;case"list_end":this.is_first_list=!1;break;case"text":this.is_first_list&&(this.single_bufs[this.single_bufs.length-1]+=t.get("text"));break;case"code":try{var l=t.get("lang"),c=t.get("text");if(this.log.info("found a code section (#"+this.last_key+")"),!this.is_inside_example){this.log.info("got a code outside the example section, skipping...",l,c);break}if("cpp"===l){this.log.info("got C++ code (#"+this.last_key+")",c);var u=[this.andareMetaInfo.get("header")].filter(Boolean),h=new S.b("CPP",this.last_key);this.codes.add(new S.a(this.log,h,c,{headers:u})),this.onCodeFound(h)}else this.log.warn("got code for unknown language '"+l+"', skipping...",c)}finally{++this.last_key}}}},{key:"parseHTML",value:function(){this.log.info("parsing html source..."),this.setDOM(D.a.main,null,'main[role="main"]'),this.setDOM(D.a.article,D.a.main,'div[itemtype="http://schema.org/Article"]'),this.setDOM(D.a.articleBody,D.a.article,'div[itemprop="articleBody"]'),this.setDOM(D.a.codes,D.a.articleBody,"> .codehilite, > pre > code");var t=this.getDOM(D.a.article).find(".edit-button .edit");if(!t.length)throw new M.a("could not fetch GitHub source URL");this.original_url=new URL(t.attr("href")),this.onMetaURLFound()}},{key:"setDOM",value:function(e,n,i){this.log.info("fetching '"+a()(e)+"'... [parent: "+(n?"'"+a()(n)+"'":"(none)")+"]");var r=n?this.dom.get(n).find(i):t(i);if(!r)throw new M.a("could not fetch content",e,n,i);this.dom.set(e,r)}},{key:"getDOM",value:function(t,e){return e?this.dom.get(t).filter(function(t,n){var i=null;try{i=S.b.fromDOM(n)}catch(n){if(n instanceof S.c)return!1;throw n}return i.equals(e)}):this.dom.get(t)}},{key:"reponame",value:function(){return this.config.join("/")}}]),e}();R.PageKey=D.a}).call(e,n(6))},174:function(t,e,n){"use strict";n.d(e,"a",function(){return r});var i=n(34),a=n.n(i),r={main:a()("main"),article:a()("article"),articleBody:a()("articleBody"),codes:a()("codes")}},176:function(t,e,n){"use strict";var i=n(177);n.d(e,"a",function(){return i.a})},177:function(t,e,n){"use strict";n.d(e,"a",function(){return c});var i=n(92),a=n.n(i),r=n(1),o=n.n(r),s=n(3),l=n.n(s),c=function(){function t(){o()(this,t)}return l()(t,null,[{key:"parse",value:function(e){var n=e.pathname.match(/(?:\.[^.]+)+$/),i=t.UNKNOWN;switch(String(n)){case".md":i=t.MARKDOWN}return i}}]),t}();c.UNKNOWN=a()("unknown"),c.MARKDOWN=a()("markdown")},178:function(t,e,n){"use strict";var i=n(68);n.d(e,"c",function(){return i.b}),n.d(e,"b",function(){return i.a});var a=n(179);n.d(e,"d",function(){return a.a});var r=n(180);n.d(e,"a",function(){return r.a})},179:function(t,e,n){"use strict";n.d(e,"a",function(){return c});var i=n(13),a=n.n(i),r=n(1),o=n.n(r),s=n(3),l=n.n(s),c=(n(20),n(68),function(){function t(e){o()(this,t),this.log=e.makeContext("Pool"),this.langs=new a.a}return l()(t,[{key:"add",value:function(t){this.langs.has(t.id.lang)||this.langs.set(t.id.lang,new a.a),this.langs.get(t.id.lang).set(t.id.key,t)}},{key:"delete",value:function(t){if(!this.has(t))throw new Error("[BUG] attempt to remove a non existent code ("+t+")");this.langs.get(t.lang).delete(t.key)}},{key:"get",value:function(t){if(!this.has(t))throw new Error("[BUG] attempt to retrieve a non existent code ("+t+")");return this.langs.get(t.lang).get(t.key)}},{key:"has",value:function(t){return!!this.langs.has(t.lang)&&this.langs.get(t.lang).has(t.key)}}]),t}())},180:function(t,e,n){"use strict";n.d(e,"a",function(){return f});var i=n(25),a=n.n(i),r=n(11),o=n.n(r),s=n(1),l=n.n(s),c=n(3),u=n.n(c),h=(n(68),n(26)),f=function(){function t(e,n,i,a){l()(this,t),this.id=n,this.log=e.makeContext("CPP #"+this.id.key,new h.Logger.Option({icon:{text:"💻",color:"#2244FF"}})),this.buf=i,this.parse(a)}return u()(t,[{key:"parse",value:function(t){this.headers=[];var e=!0,n=!1,i=void 0;try{for(var r,s=o()(this.buf.split(/\n/));!(e=(r=s.next()).done);e=!0){var l=r.value,c=l.trim(),u=c.match(/^#include\s*<([^>]+)>/);if(u){var h=a()(u,2),f=(h[0],h[1]);this.log.debug("got C++ header '"+f+"' in code"),this.headers.push(f)}}}catch(t){n=!0,i=t}finally{try{!e&&s.return&&s.return()}finally{if(n)throw i}}if(t.headers){var d=!0,p=!1,g=void 0;try{for(var m,v=o()(t.headers);!(d=(m=v.next()).done);d=!0){var y=m.value;this.headers.includes(y)||(this.log.warn("already found header '"+y+"' in meta tag, but it was not written in this code snippet"),this.prepend_header(y),this.headers.push(y))}}catch(t){p=!0,g=t}finally{try{!d&&v.return&&v.return()}finally{if(p)throw g}}}this.log.info("parse ok",this)}},{key:"prepend_header",value:function(t){this.buf="#include <"+t+">\n"+this.buf}}]),t}()},190:function(t,e,n){"use strict";(function(t){n.d(e,"a",function(){return E});var i=n(67),a=n.n(i),r=n(13),o=n.n(r),s=n(11),l=n.n(s),c=n(25),u=n.n(c),h=n(19),f=n.n(h),d=n(66),p=n.n(d),g=n(97),m=n.n(g),v=n(3),y=n.n(v),k=n(34),b=n.n(k),w=n(43),_=n.n(w),C=n(1),x=n.n(C),T=n(44),M=n.n(T),D=n(45),O=n.n(D),S=n(20),P=n(191),j=n.n(P),A=n(26),R=(function(t){function e(){return x()(this,e),M()(this,(e.__proto__||_()(e)).apply(this,arguments))}O()(e,t)}(S.b),{get:b()("GET"),post:b()("POST")}),z=function(){function e(){x()(this,e)}return y()(e,null,[{key:"compile",value:function(t,n,i,a,r){return e.request(t,R.post,new URL("compile.json",e.Home),n,i,a,r)}},{key:"request",value:function(n,i,a,r,o,s,l){var c=m()({method:p()(i),url:String(a),id:n}),u=Date.now(),h=function(){return{id:n,elapsed:Date.now()-u}},d=function(t){return s(t,h())},g=function(t){return l(t,h())},v={dataType:"json",crossDomain:!0,cache:!1};try{switch(i){case R.get:return t.ajax(String(a),f()({},v,{type:"GET",data:e.make_request_json(r,o)})).done(d).fail(g);case R.post:return t.ajax(String(a),f()({},v,{type:"POST",data:e.make_request_json(r,o)})).done(d).fail(g)}}catch(t){throw console.timeEnd(c),t}}},{key:"make_request_json",value:function(t,e){var n={},i=!0,a=!1,r=void 0;try{for(var o,s=l()(t);!(i=(o=s.next()).done);i=!0){var c=o.value,h=u()(c,2),f=h[0],d=h[1];switch(f){case"compiler":n[f]=d;break;case"options":n[f]=d.join(",");break;case"compiler-option-raw":n[f]=d.join("\n")}}}catch(t){a=!0,r=t}finally{try{!i&&s.return&&s.return()}finally{if(a)throw r}}return n.code=e,m()(n)}}]),e}();z.Home=new URL("https://wandbox.org/api/");var E=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new o.a;x()(this,t),this.log=e.makeContext("Wand",new A.Logger.Option({icon:{text:"🌭",color:"#CCAA14"}})),this.opts=new o.a([].concat(a()(t.defaults),a()(n))),this.log.info("三へ( へ՞ਊ ՞)へ ﾊｯﾊｯ")}return y()(t,null,[{key:"elapsed",value:function(t){return j()(t/1e3).format("0.0")+" sec"}}]),y()(t,[{key:"compile",value:function(e,n,i){var a=this,r="#"+Date.now();return this.log.info("compiling: "+r,e),z.compile(r,this.opts,e,function(e,i){return a.log.info("success: "+r+" (took "+t.elapsed(i.elapsed)+")",e,i),n(e,i)},function(e,n){return a.log.error("failed: "+r+" (took "+t.elapsed(n.elapsed)+")",e,n),i(e,n)})}}]),t}();E.defaults=new o.a([["compiler","clang-head"],["options",["warning","c++2a","cpp-pedantic-errors"]],["compiler-option-raw",["-Wall","-Wextra"]]])}).call(e,n(6))},192:function(t,e){var n=["3024-day","3024-night","abcdef","ambiance-mobile","ambiance","base16-dark","base16-light","bespin","blackboard","cobalt","colorforth","dracula","duotone-dark","duotone-light","eclipse","elegant","erlang-dark","hopscotch","icecoder","isotope","lesser-dark","liquibyte","material","mbo","mdn-like","midnight","monokai","neat","neo","night","panda-syntax","paraiso-dark","paraiso-light","pastel-on-dark","railscasts","rubyblue","seti","solarized","the-matrix","tomorrow-night-bright","tomorrow-night-eighties","ttcn","twilight","vibrant-ink","xq-dark","xq-light","yeti","zenburn"];t.exports=n},193:function(t,e,n){"use strict";n.d(e,"a",function(){return i});var i={mode:"clike",theme:"paraiso-dark",autofocus:!0,lineNumbers:!0,tabSize:2,indentUnit:2,indentWithTabs:!1,smartIndent:!0,fixedGutter:!0,styleActiveLine:!0,gutters:["CodeMirror-linenumbers","breakpoints"]}},194:function(t,e,n){"use strict";(function(t){n.d(e,"a",function(){return O});var i=n(35),a=n.n(i),r=n(36),o=n.n(r),s=n(11),l=n.n(s),c=n(13),u=n.n(c),h=n(19),f=n.n(h),d=n(1),p=n.n(d),g=n(3),m=n.n(g),v=n(34),y=n.n(v),k=n(100),b=n(20),w=n(26),_=n(101),C=n.n(_),x=n(195),T=(n.n(x),n(196)),M=n.n(T),D={play:y()("play"),compile:y()("compile"),theme:y()("theme")},O=function(){function e(t,n,i){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};p()(this,e),this.wand=n,this.code=i,this.console=null,this.log=t.makeContext("Yata "+this.code.id,new w.Logger.Option({icon:{text:"🐦",color:"#222"}})),this.opts=f()({},k.a,a),this.tools=new u.a,this.themes=new u.a,this.currentTheme=k.a.theme,this.loadTheme(this.currentTheme),this.initElem(),this.initMirror()}return m()(e,[{key:"initElem",value:function(){if(this.orig_code=t(".kunai-code"+this.code.id.makeSelector(!0)),!this.orig_code.length)throw new b.a("original code element with id "+this.code.id+" not found");var e=t("<div />");e.addClass("yata"),e.addClass("hidden"),this.code.id.serializeInDOM(e),this.log.info("creating Yata toolbar for code snippet",e);var n=t("<div>").addClass("tools-all"),i=t('<div class="tooltip-wrapper"><div class="tooltip"></div></div>'),a=t("<li>").addClass("tool"),r=this.code.id.serializeInDOM(t("<button>")).prop("disabled",!0);i.clone().appendTo(r);var o=t("<ul />").addClass("tools left"),s=a.clone().addClass("play");this.tools.set(D.play,s);var c=r.clone().prop("disabled",!1);t("<i>").addClass("fa fa-fw fa-magic").appendTo(c),c.on("click",this.onEnable.bind(this)),c.appendTo(s),s.appendTo(o);var u=a.clone().addClass("compile");this.tools.set(D.compile,u);var h=r.clone();t("<i>").addClass("fa fa-fw fa-play").appendTo(h),h.on("click",this.onCompile.bind(this)),h.appendTo(u),u.appendTo(o),o.appendTo(n);var f=t("<ul />").addClass("tools right"),d=a.clone().addClass("theme");this.tools.set(D.theme,d);var p=t("<div>").addClass("not-a-button");t("<i>").addClass("fa fa-fw fa-adjust").appendTo(p),i.clone().appendTo(p),p.appendTo(d);var g=t("<select>"),m=!0,v=!1,y=void 0;try{for(var w,_=l()(k.b);!(m=(w=_.next()).done);m=!0){var C=w.value;t("<option>").val(C).text(C).appendTo(g)}}catch(t){v=!0,y=t}finally{try{!m&&_.return&&_.return()}finally{if(v)throw y}}g.val(this.currentTheme),g.on("change",this.onThemeChange.bind(this)),g.appendTo(d),d.appendTo(f),f.appendTo(n),n.appendTo(e),this.orig_code.before(e)}},{key:"initMirror",value:function(e){var n=this;this.buf=this.orig_code.next(".mirror"),this.log.info("creating textarea buffer..."),this.buf=t("<textarea>").addClass("mirror"),this.code.id.serializeInDOM(this.buf),this.buf.text(this.code.buf),this.orig_code.after(this.buf),this.log.info("initializing mirror data...",this.buf),this.log.info("creating CodeMirror element..."),this.cm=C.a.fromTextArea(this.buf.get(0),f()({},this.opts,{theme:this.currentTheme})),this.cm.on("gutterClick",function(t,e){var i=t.lineInfo(e);t.setGutterMarker(e,"breakpoints",i.gutterMarkers?null:n.makeMarker())}),this.cm.setSize(null,"380px"),this.log.info("CodeMirror element created",this.cm),this.cm.focus(),this.cmRefresh=setInterval(function(){n.cm.refresh()},250),this.console=t("<div>").addClass("yata-console"),t(this.cm.getWrapperElement()).after(this.console)}},{key:"onResize",value:function(t){return t.stopPropagation(),this.log.info("dragged "+t.offsetY,t),"mousedown"===t.type?(this.isDragging=!1,!1):"mousemove"===t.type?(this.isDragging=!0,!1):void(this.isDragging&&this.log.info("dragged "+t.offsetY,t))}},{key:"makeMarker",value:function(){return t("<div>").text("●").css(e.Style.Marker).get(0)}},{key:"loadTheme",value:function(){function t(t){return e.apply(this,arguments)}var e=o()(a.a.mark(function t(e){return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:this.themes.has(e)||(this.log.info("initial theme load for '"+e+"'"),this.themes.set(e,!0));case 1:case"end":return t.stop()}},t,this)}));return t}()},{key:"findRaw",value:function(){return t(".mirror"+this.code.id.makeSelector()+" + .CodeMirror")}},{key:"onCompile",value:function(t){this.tools.get(D.compile).addClass("compiling"),this.cm.save(),this.wand.compile(this.cm.getTextArea().value,this.onCompileSuccess.bind(this),this.onCompileFailure.bind(this))}},{key:"onCompileSuccess",value:function(){function t(t,n){return e.apply(this,arguments)}var e=o()(a.a.mark(function t(e,n){return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.onCompilePostPre(!0,e,n),t.abrupt("return",this.onCompilePostPost(e,n));case 2:case"end":return t.stop()}},t,this)}));return t}()},{key:"onCompileFailure",value:function(){function t(t,n){return e.apply(this,arguments)}var e=o()(a.a.mark(function t(e,n){return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.onCompilePostPre(!1,e,n),t.abrupt("return",this.onCompilePostPost(e,n));case 2:case"end":return t.stop()}},t,this)}));return t}()},{key:"onCompilePostPre",value:function(t,e,n){}},{key:"onCompilePostPost",value:function(){function t(t,e){return n.apply(this,arguments)}var n=o()(a.a.mark(function t(n,i){return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:this.tools.get(D.compile).removeClass("compiling"),this.console.html([].concat(e.processConsole(n.compiler_message)).concat(e.processConsole(n.program_message)));case 2:case"end":return t.stop()}},t,this)}));return t}()},{key:"onThemeChange",value:function(t){var e=t.target.value;this.log.info("onThemeChange (--\x3e '"+e+"')",t),this.loadTheme(e),this.currentTheme=e,this.applyRawThemeChange()}},{key:"applyRawThemeChange",value:function(){function t(){return e.apply(this,arguments)}var e=o()(a.a.mark(function t(){var e;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e=this.findRaw(),e.length&&(this.log.info("mirror found, dynamically changing theme...",e),e.get(0).className=e.get(0).className.split(/\s+/).filter(function(t){return!t.match(/^cm-s-/)}).concat("cm-s-"+this.currentTheme).join(" "));case 2:case"end":return t.stop()}},t,this)}));return t}()},{key:"onEnable",value:function(e){var n=t(e.srcElement||e.originalTarget||e.target),i=n.closest(".yata"),a=t(i.nextAll(".codehilite"+this.code.id.makeSelector()));if(i.hasClass("enabled")){this.log.info("disabling Yata mode");var r=a.next(".mirror");r.length&&r.removeClass("enabled");var o=i.find(".tools-all .tool"),s=!0,c=!1,u=void 0;try{for(var h,f=l()(o);!(s=(h=f.next()).done);s=!0){var d=h.value,p=t(d);p.hasClass("play")||p.find("button").prop("disabled",!0)}}catch(t){c=!0,u=t}finally{try{!s&&f.return&&f.return()}finally{if(c)throw u}}return void i.removeClass("enabled")}i.addClass("enabled"),this.log.info("enabling Yata mode");var g=i.find(".tools-all .tool"),m=!0,v=!1,y=void 0;try{for(var k,b=l()(g);!(m=(k=b.next()).done);m=!0){var w=k.value,_=t(w),C=_.find("button");C.length&&C.prop("disabled",!1)}}catch(t){v=!0,y=t}finally{try{!m&&b.return&&b.return()}finally{if(v)throw y}}this.buf.addClass("enabled")}}],[{key:"processConsole",value:function(e){return e?t("<span />").text(e).html().split(/\n/).map(function(e){return t("<p>").addClass("yata-console-line").html(M.a.ansiToHtml(e,{use_classes:!0}))}):[]}}]),e}();O.ToolID=D,O.Style={Marker:{color:"#ff2727"}}}).call(e,n(6))},197:function(t,e,n){var i={};!function(t){t.keys().forEach(function(e){return i[e]=t(e)})}(n(198))},20:function(t,e,n){"use strict";n.d(e,"a",function(){return h}),n.d(e,"b",function(){return f});var i=n(43),a=n.n(i),r=n(44),o=n.n(r),s=n(45),l=n.n(s),c=n(1),u=n.n(c),h=function t(e){u()(this,t),this.reason=e;for(var n=arguments.length,i=Array(n>1?n-1:0),a=1;a<n;a++)i[a-1]=arguments[a];this.args=i},f=(function(t){function e(){return u()(this,e),o()(this,(e.__proto__||a()(e)).apply(this,arguments))}l()(e,t)}(h),function(t){function e(){return u()(this,e),o()(this,(e.__proto__||a()(e)).apply(this,arguments))}return l()(e,t),e}(h))},68:function(t,e,n){"use strict";(function(t){n.d(e,"b",function(){return p}),n.d(e,"a",function(){return g});var i=n(3),a=n.n(i),r=n(43),o=n.n(r),s=n(1),l=n.n(s),c=n(44),u=n.n(c),h=n(45),f=n.n(h),d=n(20),p=function(t){function e(){return l()(this,e),u()(this,(e.__proto__||o()(e)).apply(this,arguments))}return f()(e,t),e}(d.a),g=function(){function e(t,n){l()(this,e),this.lang=String(t),this.key=n}return a()(e,[{key:"equals",value:function(t){if(!(t instanceof e))throw new Error("rhs must be instanceof ID",t);return this.lang===t.lang&&this.key===t.key}},{key:"toString",value:function(){return"#"+this.lang+"-"+this.key}},{key:"serialize",value:function(){return this.lang+"-"+this.key}},{key:"makeSelector",value:function(){return"["+e.DataAttr+'="'+this.serialize()+'"]'}},{key:"serializeInDOM",value:function(n){return t(n).attr(e.DataAttr,this.serialize())}}],[{key:"fromDOM",value:function(n){var i=t(n).attr(e.DataAttr);if(!i||!i.length)throw new p("specified dom element does not have yata key '"+e.DataAttr+"'",n);var a=i.match(e.R);if(!a)throw Error("unrecognized code id format '"+i+"'",n);return new e(a[1],parseInt(a[2]))}}]),e}();g.DataAttr="data-kunai-yata-id",g.R=/([a-zA-Z][a-zA-Z0-9_]+)-(\d+)/}).call(e,n(6))},95:function(t,e,n){"use strict";(function(t){n.d(e,"a",function(){return s});var i=n(11),a=n.n(i),r={11:"/lang/cpp11.html",14:"/lang/cpp14.html",17:"/lang/cpp17.html",20:"/lang/cpp20.html"},o=function(t){return r[t]},s=function(e){var n=0,i=!0,r=!1,s=void 0;try{for(var l,c=a()(e);!(i=(l=c.next()).done);i=!0){var u=l.value;++n;var h=t(u),f=h.text().trim().replace(/\(([^)]+)\)/,"$1"),d=h.text().trim().match(/C\+\+[a-zA-Z0-9]+/i),p=null;if(d)switch(d[0]){case"C++11":p=o("11");break;case"C++14":p=o("14");break;case"C++17":p=o("17");break;case"C++20":p=o("20")}p&&h.html(t("<a>").attr("href",p).text(f))}}catch(t){r=!0,s=t}finally{try{!i&&c.return&&c.return()}finally{if(r)throw s}}return n}}).call(e,n(6))},96:function(t,e,n){"use strict";n.d(e,"a",function(){return f});var i=n(43),a=n.n(i),r=n(1),o=n.n(r),s=n(44),l=n.n(s),c=n(45),u=n.n(c),h=n(20),f=function(t){function e(){return o()(this,e),l()(this,(e.__proto__||a()(e)).apply(this,arguments))}return u()(e,t),e}(h.a)}},[104]).Kunai;