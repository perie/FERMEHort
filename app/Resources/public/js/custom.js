var Util={uuid:function(){var a,e,c=[];for(e=0;36>e;e+=1)c[e]=(16*Math.random()|0).toString(16);c[8]=c[13]=c[18]=c[23]="-";c[14]="4";c[19]="89ab".charAt(4*Math.random()|0);a=c.join("");return{toString:function(){return a},valueOf:function(){return a}}},isIOS6:function(){return/(iPhone|iPod|iPad)/i.test(navigator.userAgent)&&/OS [6](.*) like Mac OS X/i.test(navigator.userAgent)?!0:!1},isOpera:function(){return window.opera||jQuery.browser.opera},isIE:function(){return jQuery.browser.msie},isChrome:function(){return"object"===
typeof window.chrome||/chrome/.test(navigator.userAgent.toLowerCase())||/chrom(e|ium)/.test(navigator.userAgent.toLowerCase())},closeDDLevelsMenu:function(a,e){var c=!0,d=ddlevelsmenu.topitems.nav;if(d)for(var f=0;f<d.length;f++)0<jQuery(d[f].parentNode).has(e).length&&(c=!1);if(c&&(d=ddlevelsmenu.subuls.nav))for(f=0;f<d.length;f++)0<jQuery(d[f]).has(e).length&&(c=!1);if(c&&(d=ddlevelsmenu.subuls.nav))for(f=0;f<d.length;f++)ddlevelsmenu.hidemenu(d[f].parentNode)}};
(function(a){a.fn.flexSliderInitializer=function(e){function c(c){c=a(c);l=c.find("iframe");c.fitVids().flexslider({animation:d,smoothHeight:"slide"==d,pauseOnHover:!0,video:"slide"==d,slideshow:f,controlsContainer:j,before:function(){0<l.length&&window.$f&&l.each(function(){try{$f(this).api("pause")}catch(a){}})}});if(Modernizr.touch&&a().swipe){var e=c.find("a.flex-next"),b=c.find("a.flex-prev"),m=function(a,c){"left"==c.toLowerCase()&&e.trigger("click");"right"==c.toLowerCase()&&b.trigger("click")};
c.swipe({click:function(c,b){a(b).trigger("click")},swipeLeft:m,swipeRight:m,allowPageScroll:"auto"})}}var d=e.effect,f=e.slideshow,j=e.selector;e=a(j);var l;0<e.length&&e.each(function(){var d=this,e=!1,b=0,m=[];a(d).find("img").each(function(){!this.complete&&void 0!=this.complete&&(m.push(this),b++)});if(0==b)c(d);else{var f=0;a(m).bind("load",function(){f++;f===b&&!e&&(e=!0,c(d))});var l=window.setTimeout(function(){window.clearTimeout(l);a(m).each(function(){(this.complete||void 0===this.complete)&&
a(this).trigger("load")})},50)}})}})(jQuery);(function(a){a.fn.responsiveSearch=function(e){function c(a){a?j.fadeIn(f.animSpeed):j.fadeOut(f.animSpeed)}var d=a.fn.responsiveSearch,f=a.extend({},d.defaults,e),j=a(this);a("#search-submit").bind("click",function(){return"none"==j.css("display")?(c(!0),!1):""==a.trim(j.val())?(c(!1),!1):!0});d.hide=function(a){"s"!=a.id&&"search-submit"!=a.id&&"none"!=j.css("display")&&c(!1)};return d};a.fn.responsiveSearch.defaults={animSpeed:500}})(jQuery);
Util.isIOS6()&&function(a){function e(c,b,d){var e,f=d[0],h=c===l;d[0]=function(){f&&(f.apply(a,arguments),h||(delete b[e],f=null))};e=c.apply(a,d);b[e]={args:d,created:Date.now(),cb:f,id:e};return e}function c(c,b,d,e){function f(){h.cb&&(h.cb.apply(a,arguments),j||(delete d[e],h.cb=null))}var h=d[e];if(h){var j=c===l;b(h.id);if(!j){b=h.args[1];var n=Date.now()-h.created;0>n&&(n=0);b-=n;0>b&&(b=0);h.args[1]=b}h.args[0]=f;h.created=Date.now();h.id=c.apply(a,h.args)}}var d={},f={},j=a.setTimeout,l=
a.setInterval,t=a.clearTimeout,p=a.clearInterval;if(!a.addEventListener)return!1;a.setTimeout=function(){return e(j,d,arguments)};a.setInterval=function(){return e(l,f,arguments)};a.clearTimeout=function(a){var b=d[a];b&&(delete d[a],t(b.id))};a.clearInterval=function(a){var b=f[a];b&&(delete f[a],p(b.id))};for(var b=a;b.location!=b.parent.location;)b=b.parent;b.addEventListener("scroll",function(){for(var a in d)c(j,t,d,a);for(a in f)c(l,p,f,a)})}(window);
jQuery(document).ready(function(a){function e(a){a.data("resizing")&&a.css("left","0")}function c(){var k=a(window).width();return 480>k?1:768>k?2:960>k?3:4}function d(k,b){var g=a(k.currentTarget).parents().eq(2);"left"==b.toLowerCase()&&g.find(".jcarousel-next").trigger("click");"right"==b.toLowerCase()&&g.find(".jcarousel-prev").trigger("click")}function f(k,b){var g=k.customSettings,y=a(k.selector);0<y.length&&(y.each(function(){var k=a(this),b=a.extend({},{scroll:1,visible:1,wrap:"last",easing:"swing",
itemVisibleInCallback:function(){e(k);e(k)}},g);b.scroll=Math.min(c(),b.scroll);k.jcarousel(b)}),b&&(Modernizr.touch&&a().swipe)&&y.swipe({click:function(k,b){a(b).trigger("click")},swipeLeft:d,swipeRight:d,allowPageScroll:"auto"}))}function j(k){var b=a(k.selector);0<b.length&&b.each(function(){var b=a(this),c=b.children("li"),d=c.first().outerWidth(!0),c=c.length*d+100;if(b.width()!==c){b.css("width",c).data("resizing","true");f(k,!1);b.jcarousel("scroll",1);var e=window.setTimeout(function(){window.clearTimeout(e);
b.data("resizing",null)},600)}})}function l(){if(0<q.length){var a=q.width(),a=Math.round(0.425*a);q.height(a)}}function t(){var b=a("body"),c=a("#wrap"),g=a("#content");g.css("min-height",a(window).outerHeight(!0)-(b.outerHeight(!0)-b.height())-(c.outerHeight(!0)-c.height())-a("#header").outerHeight(!0)-a("#slider-home").outerHeight(!0)-a("#page-title").outerHeight(!0)-(g.outerHeight(!0)-g.height())-a("#footer").outerHeight(!0))}Util.isOpera()&&a(".flexslider .slides > li").each(function(){a(this).css("overflow",
"hidden")});var p=[{selector:".post-carousel",customSettings:{}},{selector:".testimonial-carousel",customSettings:{auto:5}},{selector:".project-carousel",customSettings:{scroll:4,visible:null}}];if(a().jcarousel&&p)for(var b=0;b<p.length;b++)f(p[b],!0);a().tinyNav&&(a("html").addClass("js"),a("#navlist").tinyNav());b=a("#s");if(0<b.length)var m=b.responsiveSearch();a().fitVids&&a(".entry-video").fitVids();
	b=
	[
		{selector:"#flexslider-home",effect:"fade",slideshow:!0},
		{selector:"#flexslider-about-us", effect:"slide",slideshow:!1},
		{selector:"#flexslider-region", effect:"slide",slideshow:!1},
		{selector:"#flexslider-portfolio-item",effect:"slide",slideshow:!1}
	];
	if(a().flexslider&&b)for(var u=0;u<b.length;u++)a().flexSliderInitializer(b[u]);if(a().revolution){var r=jQuery;r.noConflict();r(document).ready(function(){void 0!=r.fn.cssOriginal&&(r.fn.css=r.fn.cssOriginal);r(".fullwidthbanner").revolution({delay:9E3,startwidth:940,startheight:400,onHoverStop:"on",thumbWidth:100,thumbHeight:50,thumbAmount:3,hideThumbs:200,navigationType:"bullet",navigationArrows:"verticalcentered",
navigationStyle:"round",touchenabled:"on",navOffsetHorizontal:0,navOffsetVertical:20,stopAtSlide:-1,stopAfterLoops:-1,hideCaptionAtLimit:0,hideAllCaptionAtLilmit:0,hideSliderAtLimit:0,fullWidth:"on",shadow:0})})}if(a().fancybox){var v=function(b,c){var g=a("#fancybox-buttons"),d=g.find(".btnNext"),g=g.find(".btnPrev");"left"==c.toLowerCase()&&d&&d.trigger("click");"right"==c.toLowerCase()&&g&&g.trigger("click")},A=function(b,c){var g=a(window).width();return g<1.3*b?(g*=0.75,{width:g,height:g*c/b}):
!1};a(".lightbox-video").each(function(){var b=a(this),c=b.data("width")?b.data("width"):800,g=b.data("height")?b.data("height"):450;b.fancybox({autoScale:!1,transitionIn:"none",transitionOut:"none",title:this.title,width:c,height:g,type:"iframe",fitToView:!1,openEffect:"fade",closeEffect:"fade",nextEffect:"fade",prevEffect:"fade",arrows:!Modernizr.touch,helpers:{title:{type:"inside"},buttons:{},media:{}},beforeShow:function(){var a=A(c,g);a&&(this.width=a.width,this.height=a.height)},onUpdate:function(){var a=
A(c,g);a&&(this.width=a.width,this.height=a.height)},beforeLoad:function(){this.title="Image "+(this.index+1)+" of "+this.group.length+(this.title?" - "+this.title:"")},afterShow:function(){if(Modernizr.touch&&a().swipe){var b=a(".fancybox-wrap");"true"!==b.data("swipe")&&(b.data("swipe","true"),b.swipe({click:function(b,c){a(c).trigger("click")},swipeLeft:v,swipeRight:v,allowPageScroll:"auto"}))}}})});var h=[];a(".lightbox").each(function(){var b=a(this).parent(),c=!0;b&&b.hasClass("clone")&&(c=
!1);c&&h.push(this)});a(h).fancybox({openEffect:"fade",closeEffect:"fade",nextEffect:"fade",prevEffect:"fade",arrows:!Modernizr.touch,helpers:{title:{type:"inside"},buttons:{},media:{}},beforeLoad:function(){this.title="Image "+(this.index+1)+" of "+this.group.length+(this.title?" - "+this.title:"")},afterShow:function(){if(Modernizr.touch&&a().swipe){var b=a(".fancybox-wrap");"true"!==b.data("swipe")&&(b.data("swipe","true"),b.swipe({click:function(b,c){a(c).trigger("click")},swipeLeft:v,swipeRight:v,
allowPageScroll:"auto"}))}}})}a().tipsy&&a(".clients img[title], .social-links a[title], .entry-slider img[title]").tipsy({fade:!0,gravity:a.fn.tipsy.autoNS,offset:3});a().UItoTop&&a().UItoTop({scrollSpeed:400});a("iframe").each(function(){var b=a(this).attr("src");if(-1!=b.indexOf("?")){var c=b.split("?"),b=c[1],c=c[0];a(this).attr("src",c+"?wmode=transparent&"+b)}else a(this).attr("src",b+"?wmode=transparent")});a(".notification-close-info").click(function(){a(".notification-box-info").fadeOut("fast");
return!1});a(".notification-close-success").click(function(){a(".notification-box-success").fadeOut("fast");return!1});a(".notification-close-warning").click(function(){a(".notification-box-warning").fadeOut("fast");return!1});a(".notification-close-error").click(function(){a(".notification-box-error").fadeOut("fast");return!1});a().tabs&&a(".tabs").tabs();a().toggle&&a(".toggle").each(function(){"open"==a(this).attr("data-id")?a(this).accordion({header:".toggle-title",collapsible:!0,heightStyle:"content"}):
a(this).accordion({header:".toggle-title",collapsible:!0,heightStyle:"content",active:!1})});a().accordion&&a(".accordion").accordion({header:".accordion-title",collapsible:!0,heightStyle:"content"});var B=a("#gallery");a.isotope&&B.isotope({itemSelector:".entry"});a("#filter").find("a").click(function(){var b=a(this).attr("data-filter");B.isotope({filter:b});return!1});a(".option-set").find("a").click(function(){var b=a(this);if(b.hasClass("selected"))return!1;b.parents(".option-set").find(".selected").removeClass("selected");
b.addClass("selected")});a().validate&&a("#comment-form").validate();var n=a("#contact-form");if(n&&0<n.length){var w=n.find("#submit");w.bind("click",function(b){function c(){var g="timestamp="+b.timeStamp;n.find(":input").each(function(){var b=a(this),c=!0;b.is(":checkbox")&&!b.is(":checked")&&(c=!1);c&&(c=b.attr("name"),b=a.trim(b.val()),0<b.length&&(g+="&"+c+"="+b))});return g}n.valid()&&(w.attr("disabled","disabled"),a.ajax({type:"POST",url:"contact-processor.php",data:c(),statusCode:{200:function(){a("#contact-notification-box-success").css("display",
"");w.removeAttr("disabled","");n.find(":input").each(function(){var b=a(this);if("select"==b.prop("nodeName").toLowerCase())b.prop("selectedIndex",0);else if(b.is(":checkbox"))b.attr("checked",b.prop("defaultChecked"));else{var c=b.prop("defaultValue");c?b.val(c):b.val("")}})},500:function(b){var c=a("#contact-notification-box-error-msg");b=b.responseText;if(!b||0==b.length)b=c.data("default-msg");c.text(b);a("#contact-notification-box-error").css("display","");w.removeAttr("disabled")}}}));return!1})}a().validate&&
a("#send-newsletter-form").validate();if((b=a("#newsletter-form"))&&0<b.length){var z=b.find("#subscribe"),s=b.find("#newsletter");z.bind("click",function(){function b(){var a="action=subscribe";s&&0<s.length&&(a+="&email="+s.attr("value"));return a}a("#newsletter-form").valid()&&(a("#subscribe").attr("disabled","disabled"),jQuery.ajax({type:"POST",url:"newsletter.php",data:b(),statusCode:{200:function(){a("#newsletter-notification-box-success").css("display","");z.removeAttr("disabled","");s&&0<
s.length&&s.attr("value","")},500:function(){a("#newsletter-notification-box-error").css("display","");z.removeAttr("disabled")}}}));return!1})}a().tweet&&a(".tweet").tweet({username:"ixtendo",join_text:!1,avatar_size:!1,count:2,view_text:"view tweet on twitter",seconds_ago_text:"about %d seconds ago",a_minutes_ago_text:"about a minute ago",minutes_ago_text:"about %d minutes ago",a_hours_ago_text:"about an hour ago",hours_ago_text:"about %d hours ago",a_day_ago_text:"about a day ago",days_ago_text:"about %d days ago",
template:"{avatar}{text}{join}{time}"});a().jflickrfeed&&a(".flickr-feed").jflickrfeed({limit:6,qstrings:{id:"52617155@N08"},itemTemplate:'<li><a href="{{link}}" title="{{title}}" target="_blank"><img src="{{image_s}}" alt="{{title}}" /></a></li>'});var q=a("#map");if(a().gMap&&0<q.length){var b=q.data("lat"),u=q.data("lng"),C=q.data("address"),D=q.data("zoom"),x={};C?x.address=C:(x.latitude=b,x.longitude=u);q.gMap({markers:[x],zoom:D})}l();t();a(window).on("resize",function(){var b=window.setTimeout(function(){window.clearTimeout(b);
t();if(a().jcarousel&&p)for(var c=0;c<p.length;c++)j(p[c]);l()},30)});if(Modernizr.touch)a(document).on("touchstart",function(a){var b=a.target;m&&m.hide(b);Util.closeDDLevelsMenu(a,b)});else a(document).click(function(a){Util.closeDDLevelsMenu(a,"");m&&m.hide(a.target)});480<a(window).width()&&(b=0>window.location.href.indexOf("#nosw"),a().styleSwitcher&&b&&(b=a().styleSwitcher(),b.loadStyleSwitcher(),b.applySettings()))});