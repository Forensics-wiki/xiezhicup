!function(){var param={sel:{}};param.sel.bodier=$(".bodier"),param.sel.fixside=$(".fixside"),param.fig_base_url=window.base_url?window.base_url:$("#configs").attr("data-base")||"",param.fig_res_url=window.resources_url?window.resources_url:$("#configs").attr("data-res")||"",param.fig_uid=window.uid?window.uid:$("#configs").attr("data-uid")||"",param.fig_appId=$("#configs").attr("data-appId"),param.fig_timestamp=$("#configs").attr("data-timestamp"),param.fig_nonceStr=$("#configs").attr("data-nonceStr"),param.fig_signature=$("#configs").attr("data-signature"),param.sharetit=$('[itemprop="name"]').attr("content")||$("title").text(),param.sharecon=$('[itemprop="description"]').attr("content")||param.sharetit,param.shareimgurl=$('[itemprop="image"]').attr("content"),param.resizes=function(){var t={};t.sels_design=$("[data-resizes]"),t.resize_1=function(e){var i={};i.d_second=Date.parse(new Date)/1e3,i._year=e.attr("data-year"),1970<=i._year&&4==i._year.length?e.find("li").each(function(e,a){i._this=$(this),i.d_txt=i._this.attr("data-retime")||i._this.find("h6").text(),i.d_arrs=[],-1!=i.d_txt.indexOf("-")?i.d_arrs=i.d_txt.split("-"):-1!=i.d_txt.indexOf("至")?i.d_arrs=i.d_txt.split("至"):i.d_arrs=i.d_txt.split(" "),1==i.d_arrs.length&&(i.d_arrs[1]=i.d_arrs[0]),i.s_arrs=[],$.each(i.d_arrs,function(t,e){i._second=[],i._arr=[,e],i.ymdhms=["年","月","日",":"],i.ymdhms_default=[i._year,[0,11],[1,[31,[29,28],31,30,31,30,31,31,30,31,30,31]],[0,23],[0,59]],$.each(i.ymdhms,function(e,a){-1!=i._arr[1].indexOf(a)?(i._arr=i._arr[1].split(a),1==e&&(i._arr[0]=1*i._arr[0]-1)):0==e?i._arr[0]=i.ymdhms_default[e]:1==e||3==e?i._arr[0]=i.ymdhms_default[e][t]:2==e&&(i._arr[0]=i.ymdhms_default[e][t],i._arr[0]instanceof Array&&(i._arr[0]=i._arr[0][i._second[1]])),i._second[e]=1*i._arr[0],3==e&&(-1!=i._arr[1].indexOf("00")?i._arr[1]="00":i._arr[1]*=1,i._second[e+1]=i._arr[1],i._second[e+2]=i._arr[2])}),i._second[5]=i._second[5]||("00"===i._second[4]?0:i.ymdhms_default[4][t]),i._second[4]=i._second[4]||i.ymdhms_default[4][t],i.s_arrs[t]=Date.parse(new Date(i._second[0],i._second[1],i._second[2],i._second[3],i._second[4],i._second[5]))/1e3}),i.d_second>=i.s_arrs[0]&&i.d_second<=i.s_arrs[1]&&i._this.addClass("active")}):i._year=2018},t.resize_2=function(e){var t={};t.sel_fixside=param.sel.fixside,e.each(function(e,a){t.w_win=$(window).width(),t.w_con=$(".pcwidth").width()||1200,t.w_this=$(this).width(),t.w_term=20,t.w_extra=2*t.w_this,t.w_extra=t.w_win-t.w_extra,t.w_extra=t.w_extra-t.w_con,t.w_extra=t.w_extra/2,t.w_extra>t.w_term?t.sel_fixside.css("right",t.w_extra-t.w_term):t.sel_fixside.css("right",0)})},t.sels_design.each(function(e,a){t._this=$(this).attr("data-resizes"),t._this="resize_"+t._this,"function"==typeof t[t._this]&&t[t._this]($(this))})},param.on_events=function(e){var t={};t.sels_design=null!=e?e.find("[data-events]"):$("[data-events]"),t.click_login=function(e){e.on("click",function(e){if(window.ShowLoginDialog instanceof Function)return e.preventDefault(),void ShowLoginDialog(param.login_success);$(this).addClass("divnone"),$(this).siblings("[data-events]").addClass("divnone"),$(this).siblings("b").removeClass("divnone")})},t.click_register=function(e){e.on("click",function(e){if(window.ShowRegisterDialog instanceof Function)return e.preventDefault(),void ShowRegisterDialog(window.d_login_success);location.href="http://user.ichunqiu.com/register/"})},t.click_quit=function(e){e.on("click",function(e){if(window.ShowLoginDialog instanceof Function)return e.preventDefault(),void window.d_quitajax();var a={};a.sel_b=$(this).parents("b"),a.sel_b.addClass("divnone"),a.sel_b.siblings("[data-events]").removeClass("divnone")})},t.click_name=function(e){e.on("click",function(e){var a={};$(this).hasClass("pointer")&&(a._name=$(this).attr("data-clickname"),a.eq=$(this).attr("data-eq"),$('[data-clickname="'+a._name+'"]').addClass("pointer").removeClass("active"),$('[data-clickname="'+a._name+'"][data-eq="'+a.eq+'"]').removeClass("pointer").addClass("active"),$('[name="'+a._name+'"]').addClass("divnone"),$('[name="'+a._name+'"][data-eq="'+a.eq+'"]').removeClass("divnone"))})},t.sels_design.each(function(e,a){t._this=$(this).attr("data-events"),t[t._this]($(this))})},param.scrolls=function(){var t={};t.sel_fixside=param.sel.fixside,t.sels_scroll=t.sel_fixside.find('[data-scroll]:not([data-scroll="body"])'),t.sel_gotop=$('[data-scroll="body"]'),t.sel_gotop_hide=$("[data-scroll-body]"),t.h_head=$('[name="scroll_head"]').outerHeight()||0,t.h_foot=$('[name="scroll_foot"]').outerHeight()||0,t.win_top=$(window).scrollTop(),t.win_h=$(window).height(),50<t.win_top?t.sel_gotop_hide.removeClass("opacity0"):t.sel_gotop_hide.addClass("opacity0"),t.top_win=t.win_top+t.h_head,t.btm_win=t.win_top+t.win_h-t.h_foot,t.sel_max="",t._max=0,t.sels_scroll.each(function(e,a){if(t.dscroll=$(this).attr("data-scroll"),t._sel=$(t.dscroll),t.top_cur=t._sel.offset().top,t.btm_cur=t.top_cur+t._sel.outerHeight(),t.top_win<t.btm_cur&&t.btm_win>t.top_cur&&(t.top_extra=Math.max(t.top_cur,t.top_win),t.btm_extra=Math.min(t.btm_cur,t.btm_win),t.c_max=(t.btm_extra-t.top_extra)/(t.btm_cur-t.top_cur),t.c_max=t.c_max.toFixed(4),t.c_max>t._max&&(t._max=t.c_max,t.sel_max=$(this),1<=t._max)))return!1}),t.sel_light=t.sel_fixside.find("[data-light]"),t.sel_light.length?setTimeout(function(){t.sel_light.removeAttr("data-light")},500):(t.sel_fixside.find("[data-scroll]").removeClass("active"),t.sel_max.length&&t.sel_max.addClass("active")),$('[data-top="1"]').length&&(t.norm_font=parseInt(t.sel_fixside.css("font-size"))||12,t.max_top=$('[data-top="1"]').offset().top,t.max_top-=t.sel_fixside.outerHeight(),t.win_top<t.max_top?t.sel_fixside.css("top",((t.max_top-t.win_top)/t.norm_font).toFixed(3)+"em").removeClass("fixed"):t.sel_fixside.css("top",0).addClass("fixed"))},param.device=function(){var e={};e.sel=param.sel.fixside,e.nav=navigator.platform,e.win=0==e.nav.indexOf("Win"),e.mac=0==e.nav.indexOf("Mac"),e.x11="X11"==e.nav||0==e.nav.indexOf("Linux"),e.win||e.mac||e.xll||e.sel.remove()},param.fun_navors=function(){window.ActiveXObject||"ActiveXObject"in window?(param.fun_navors.ie=!0,1<=window.navigator.userAgent.indexOf("MSIE")?9==document.documentMode?param.fun_navors.ie9=!0:document.documentMode<=8&&(param.fun_navors.ie8=!0):param.fun_navors.ie10=!0):0<=navigator.userAgent.indexOf("Firefox")&&(param.fun_navors.ff=!0)},param.share=function(){var pf={};if(pf.sel_bdshare=$(".bdsharebuttonbox"),0<pf.sel_bdshare.length)with(param.share.src=param.fig_res_url?param.fig_res_url+"resources/js/plugin/":"http://bdimg.share.baidu.com/",window._bd_share_config={common:{bdText:param.sharetit,bdDesc:"",bdPic:param.shareimgurl,bdUrl:window.location.href+"?t="+(new Date).getTime(),bdSnsKey:{},bdMini:"2",bdMiniList:!1,bdStyle:"0",bdSize:"16",onBeforeClick:function(e,a){return"tsina"==e&&(a.bdText+="@i春秋"),a}},share:{}},document)(getElementsByTagName("head")[0]||body).appendChild(createElement("script")).src=param.share.src+"static/api/js/share.js?v=89860593.js?cdnversion="+~(-new Date/36e5);function Wx(e,a,t,i,n,s,r){var o={title:e,link:window.location.href,desc:a,imgUrl:t};wx.config({debug:!1,appId:i,timestamp:n,nonceStr:s,signature:r,jsApiList:["onMenuShareTimeline","onMenuShareAppMessage","onMenuShareQQ","onMenuShareWeibo","onMenuShareQZone"]}),wx.ready(function(){wx.onMenuShareTimeline({title:o.title,link:o.link,imgUrl:o.imgUrl,success:function(){},cancel:function(){}}),wx.onMenuShareAppMessage({title:o.title,desc:o.desc,link:o.link,imgUrl:o.imgUrl,success:function(){},cancel:function(){}}),wx.onMenuShareQQ({title:o.title,desc:o.desc,link:o.link,imgUrl:o.imgUrl,success:function(){},cancel:function(){}}),wx.onMenuShareWeibo({title:o.title,desc:o.desc,link:o.link,imgUrl:o.imgUrl}),wx.onMenuShareQZone({title:o.title,desc:o.desc,link:o.link,imgUrl:o.imgUrl})})}null!=param.fig_appId&&0<param.fig_appId.length&&Wx(param.sharetit,param.sharecon,param.shareimgurl,param.fig_appId,param.fig_timestamp,param.fig_nonceStr,param.fig_signature)},param.init=function(){param.on_events($(".bodier")),param.resizes(),$(window).resize(function(e){param.resizes()}),$("[data-scroll]").on("click",function(e){e.preventDefault();var a={};a.sel_str=$(this).attr("data-scroll"),a.head_top=$('[name="scroll_head"]').outerHeight()||0,a.termini=$(a.sel_str).offset().top-a.head_top,$("html,body").animate({scrollTop:a.termini},300),$(this).attr("data-light",1).addClass("active").siblings().removeClass("active")}),param.scrolls(),$(window).scroll(function(e){param.scrolls()}),param.device(),param.fun_navors(),param.fun_navors.ie&&$("body").attr("data-nav","ie"),param.share(),$(".jq_mcscroll").mCustomScrollbar({scrollbarPosition:"inside",autoHideScrollbar:!1,alwaysShowScrollbar:!0,scrollInertia:0})},param.init()}();