function a11yClick(e){if("click"===e.type)return!0;if("keypress"!==e.type)return!1;e=e.charCode||e.keyCode;return 32===e||13===e||void 0}function expanders(){document.querySelectorAll(".expander")&&$(".expander").on("click keypress",function(e){!0===a11yClick(e)&&$(this).toggleClass("visible")})}function isKeyboardUser(){"use strict";document.addEventListener("keydown",function e(t){if(9===t.keyCode)switch(t.target.nodeName.toLowerCase()){case"input":case"select":case"textarea":break;default:document.documentElement.classList.add("keyboard-focus"),document.removeEventListener("keydown",e,!1)}},!1)}var supportsTouch="ontouchstart"in window||navigator.msMaxTouchPoints;const mediaQuery=window.matchMedia("(prefers-reduced-motion: reduce)");function addFlickitySlider(){var e={};if(e=document.getElementsByClassName("slider__flickity"))for(var a,r,n=0,t=e.length;n<t;n++){let o=new Flickity(e[n],{cellAlign:"left",contain:!0,prevNextButtons:!0,pageDots:!1,wrapAround:!1,freeScroll:!0,freeScrollFriction:.06}),t=o.slider.parentElement.parentElement.parentElement.lastElementChild.lastElementChild.firstElementChild;if(t.style.width=0,o.on("scroll",function(e){e=Math.max(0,Math.min(1,e)),t.style.width=100*e+"%"}),!supportsTouch){let e=document.getElementById("loader"),t=document.querySelector(".drag-cursor");t.parentNode.removeChild(t),e.insertAdjacentHTML("beforebegin",'<div class="drag-cursor"></div>'),r=$("body").hasClass("white")?(a=document.querySelector(".drag-cursor"),bodymovin.loadAnimation({container:a,path:"/js/drag.json",renderer:"svg",loop:!1,autoplay:!1})):(a=document.querySelector(".drag-cursor"),bodymovin.loadAnimation({container:a,path:"/js/drag-dark.json",renderer:"svg",loop:!1,autoplay:!1}));var i=-1,s=-1;$(".slider").mousemove(function(e){var t;r.setDirection(1),r.play(),e=(t=e).pageX,t=t.pageY,(-1==i||2<Math.abs(i-e)||2<Math.abs(s-t))&&gsap.to(".drag-cursor",1,{left:e,top:t,ease:Power4.easeOut}),i=e,s=t}),o.on("pointerUp",function(e,t){gsap.to(".drag-cursor",.5,{height:"110px",width:"110px",ease:Power4.easeOut})}),o.on("pointerDown",function(e,t){gsap.to(".drag-cursor",.5,{height:"80px",width:"80px",ease:Power4.easeOut})}),$(".slider").mouseout(function(){r.setDirection(-1),r.play()})}}}{function loaderAnimation(){var e=document.querySelector(".loader-content-lottie");bodymovin.loadAnimation({container:e,path:"/js/loader.json",renderer:"svg",loop:!1,autoplay:!1});let t=gsap.timeline();t.to(window,{duration:0,scrollTo:0}),t.add(function(){let e=window.Scrollbar;var t=document.querySelector("#scrollWrapper");let o=e.init(t,{damping:.1});o.scrollTo(0,0,0)}),gsap.to("#loader",{delay:4,ease:Power4.easeInOut,duration:.75,top:"-100vh"})}function lgTextRipple(){var e=document.querySelectorAll(".lg-text-ripple");let t=new SplitText(e,{type:"chars,words,lines",position:"absolute"});$(".lg-text-ripple").hover(function(){gsap.to(t.chars,2,{css:{fontWeight:710},ease:Power4.easeOut,stagger:{yoyo:!0,each:.1,from:"start"}})},function(){gsap.to(t.chars,2,{css:{fontWeight:500},ease:Power4.easeOut,stagger:{yoyo:!0,each:.1,from:"start"}})})}function loaderAnimation(){var e=document.querySelector(".loader-content-lottie");bodymovin.loadAnimation({container:e,path:"/js/loader.json",renderer:"svg",loop:!1,autoplay:!0});let t=gsap.timeline();t.to(window,{duration:0,scrollTo:0}),t.add(function(){let e=window.Scrollbar;var t=document.querySelector("#scrollWrapper");let o=e.init(t,{damping:.1});o.scrollTo(0,0,0)}),gsap.to("#loader",{delay:4,ease:Power4.easeInOut,duration:.75,top:"-100vh"})}function swoopHeadingsIn(){var e=document.querySelectorAll(".page-heading:not(.do-not-animate) span"),e=new SplitText(e,{type:"chars, words, lines"});let t=gsap.timeline();t.from(e.lines,{delay:3,duration:1,top:"4vw",stagger:.1,ease:CustomEase.create("custom","M0,0 C0,0 0.062,0.758 0.286,0.91 0.452,1.022 1,1 1,1 ")})}function swoopCaseStudyImages(){AOS.init({duration:800,easing:"ease-out-quart",delay:200});let e=window.Scrollbar;var t=document.querySelector("#scrollWrapper");let o=e.init(t,{damping:.1});[].forEach.call(document.querySelectorAll("[data-aos]"),e=>{o.addListener(()=>{o.isVisible(e)&&e.classList.add("aos-animate")})})}mediaQuery&&mediaQuery.matches}function marquee(){var u=[],m=$(".marquee-v2__container").length;jQuery.each($(".marquee-v2__container__text"),function(t){$(this).append("&nbsp;&mdash;&nbsp;");var e,o=$(this),a=$(this).parent();o.clone().appendTo(a),o.clone().appendTo(a),o.clone().appendTo(a),u[t]=((e=new gsap.timeline).to(a,{x:-$(o).width(),ease:Linear.easeNone,repeat:-1,duration:40}),e);var r,n,i,s,l,d=(l={}.delay||50,c(),function(){let e=window.Scrollbar;var t=document.querySelector("#scrollWrapper"),t=e.init(t,{damping:.1});n=t.scrollTop,null!=r&&(s=n-r),r=n,clearTimeout(i),i=setTimeout(c,l);for(var o=1+Math.abs(s/5),a=0;a<m;a++)u[a].timeScale(o);return setTimeout(function(){for(var e=0;e<m;e++)u[e].timeScale(1)},300),s});function c(){r=null,s=0}window.onscroll=function(){d()},$(".play-pause-marquee").on("click",function(e){e.stopPropagation(),0==u[t].paused()?(u[t].paused(!0),$(".play-pause-marquee").removeClass("is--playing")):(u[t].paused(!u[t].paused()),$(".play-pause-marquee").addClass("is--playing"))})})}function manoverboardJumble(){let e=document.getElementById("mainFooter");e.insertAdjacentHTML("afterEnd",'<div id="matter-wrap"><div id="matter-gravity" class="border-top"></div></div>');var a=1,r=0,n=0;function t(){r=$("#matter-gravity").height(),n=$("#matter-gravity").width()}function o(){a=1600<n?1:1200<n&&n<=1600?.8:900<n&&n<=1200?.65:600<n&&n<=900?.45:430<n&&n<=600?.4:.35}t(),o();var i=Matter.Engine,s=Matter.Render,l=Matter.Runner,d=(Matter.Composites,Matter.Common,Matter.MouseConstraint),c=Matter.Mouse,u=Matter.World,m=Matter.Bodies,p=i.create(),g=p.world,h=s.create({element:document.getElementById("matter-gravity"),engine:p,options:{width:n,height:r,wireframes:!1,background:"transparent"}});s.run(h);i=l.create();l.run(i,p);var f={isStatic:!0,render:{fillStyle:"transparent"}};function y(){u.add(g,[m.rectangle(n/2,-10,n+20,50.5,f),m.rectangle(n/2,r+10,n+20,50.5,f),m.rectangle(n+10,r/2,50.5,r+20,f),m.rectangle(-10,r/2,50.5,r+20,f),m.rectangle(Math.random()*n*a,Math.random()*r*a,269*a,262*a,{angle:Math.PI*-Math.random(),render:{strokeStyle:"#ffffff",sprite:{texture:"./images/letters/m.svg",xScale:a,yScale:a}}}),m.rectangle(Math.random()*n,Math.random()*r,239*a,260*a,{angle:Math.PI*Math.random(),render:{strokeStyle:"#ffffff",sprite:{texture:"./images/letters/a.svg",xScale:a,yScale:a}}}),m.rectangle(Math.random()*n,Math.random()*r,213*a,261*a,{angle:Math.PI*Math.random(),render:{strokeStyle:"#ffffff",sprite:{texture:"./images/letters/n.svg",xScale:a,yScale:a}}}),m.circle(Math.random()*n,Math.random()*r,136*a,{angle:Math.PI*Math.random(),render:{strokeStyle:"#ffffff",sprite:{texture:"./images/letters/o.svg",xScale:a,yScale:a}}}),m.rectangle(Math.random()*n,Math.random()*r,234*a,261*a,{angle:Math.PI*Math.random(),render:{strokeStyle:"#ffffff",sprite:{texture:"./images/letters/v.svg",xScale:a,yScale:a}}}),m.rectangle(Math.random()*n,Math.random()*r,178*a,260*a,{angle:Math.PI*Math.random(),render:{strokeStyle:"#ffffff",sprite:{texture:"./images/letters/e.svg",xScale:a,yScale:a}}}),m.rectangle(Math.random()*n,Math.random()*r,200*a,260*a,{angle:Math.PI*Math.random(),render:{strokeStyle:"#ffffff",sprite:{texture:"./images/letters/r.svg",xScale:a,yScale:a}}}),m.rectangle(Math.random()*n,Math.random()*r,200*a,260*a,{angle:Math.PI*Math.random(),render:{strokeStyle:"#ffffff",sprite:{texture:"./images/letters/b.svg",xScale:a,yScale:a}}}),m.circle(Math.random()*n,Math.random()*r,136*a,{angle:Math.PI*Math.random(),render:{strokeStyle:"#ffffff",sprite:{texture:"./images/letters/o.svg",xScale:a,yScale:a}}}),m.rectangle(Math.random()*n,Math.random()*r,239*a,260*a,{angle:Math.PI*Math.random(),render:{strokeStyle:"#ffffff",sprite:{texture:"./images/letters/a.svg",xScale:a,yScale:a}}}),m.rectangle(Math.random()*n,Math.random()*r,200*a,260*a,{angle:Math.PI*Math.random(),render:{strokeStyle:"#ffffff",sprite:{texture:"./images/letters/r.svg",xScale:a,yScale:a}}}),m.rectangle(Math.random()*n,Math.random()*r,214*a,260*a,{angle:Math.PI*Math.random(),render:{strokeStyle:"#ffffff",sprite:{texture:"./images/letters/d.svg",xScale:a,yScale:a}}}),m.circle(Math.random()*n,Math.random()*r,87.5*a,{angle:Math.PI*Math.random(),render:{strokeStyle:"#ffffff",sprite:{texture:"./images/letters/dot.svg",xScale:a,yScale:a}}})]);var e=c.create(h.canvas),t=d.create(p,{mouse:e,constraint:{stiffness:.2,render:{visible:!1}}});function o(){p.world.gravity.y=.25*(2*Math.round(Math.random())-1),p.world.gravity.x=.25*(2*Math.round(Math.random())-1)}u.add(g,t),h.mouse=e,t.mouse.element.removeEventListener("mousewheel",t.mouse.mousewheel),t.mouse.element.removeEventListener("DOMMouseScroll",t.mouse.mousewheel),s.lookAt(h,{min:{x:0,y:0},max:{x:n,y:r}}),o();setInterval(o,800)}g.bodies=[],y(),window.addEventListener("resize",()=>{u.clear(g),o(),t(),h.bounds.max.x=n,h.bounds.max.y=r,h.options.width=n,h.options.height=r,h.canvas.width=n,h.canvas.height=r,y()})}function smoothScrollbar(){let e=window.Scrollbar;var t=document.querySelector("#scrollWrapper");let o=e.init(t,{damping:.1});o,$("html").css("overflow","hidden"),$("#scrollWrapper, body, html").css("height","100vh"),$("#toTop").on("click keypress",function(e){!0===a11yClick(e)&&o.scrollTo(0,0,1e3)}),$(".home-hero--down-arrow").on("click keypress",function(e){!0===a11yClick(e)&&o.scrollTo(0,1500,1e3)})}function comeAboardArrow(){let e=document.querySelector(".project-start-cta h3");var t,o;e&&(t=document.querySelector(".project-start-cta__arrow"),o=bodymovin.loadAnimation({container:t,path:"/js/home-page-down.json",renderer:"svg",loop:!1,autoplay:!1}),e.onmouseover=function(){o.setDirection(1),o.play()},e.onmouseout=function(){o.setDirection(-1),o.play()})}function workHeaderScroll(){let e=window.Scrollbar;var t=document.querySelector("#scrollWrapper");let a=e.init(t,{damping:.1});projectBGdiv=document.querySelector(".work-single-bg-color"),projectBGcolor=projectBGdiv.style.backgroundColor,a.addListener(e=>{var t=a.scrollTop,o=window.innerHeight;o<t?gsap.to(".main-header",{backgroundColor:projectBGcolor,duration:.3,ease:"power4.easeOut"}):t<o&&gsap.to(".main-header",{backgroundColor:"rgba(0, 0, 0, 0)",duration:.3,ease:"power4.easeOut"})})}!function(r){r.fn.clickToggle=function(e,t){var a=[e,t];return this.data("toggleclicked",0),this.click(function(e){var t=r(this).data(),o=t.toggleclicked;r.proxy(a[o],this)(),t.toggleclicked=(o+1)%2}),this}}(jQuery),document.addEventListener("DOMContentLoaded",function(){isKeyboardUser(),gsap.registerPlugin(ScrollToPlugin),expanders(),addFlickitySlider(),lgTextRipple(),comeAboardArrow(),marquee(),setTimeout(function(){smoothScrollbar()},1e3),swoopHeadingsIn(),swoopCaseStudyImages(),supportsTouch&&document.querySelector("body").classList.add("touch-device");var e=document.querySelector(".main-header__nav");function t(){e.classList.contains("is-active")?(gsap.to("#navToggle",.1,{rotation:0,transformOrigin:"center"}),gsap.to(".main-header__nav",.4,{height:"0",ease:Power4.easeInOut}),$("#navToggle").attr("aria-expanded","false"),e.classList.remove("is-active")):(gsap.to("#navToggle",.1,{rotation:45,transformOrigin:"center"}),gsap.to(".main-header__nav",.8,{height:"100vh",ease:Power4.easeInOut}),e.classList.add("is-active"),$("#navToggle").attr("aria-expanded","true")),$(".main-header__nav > li:first-child > a").focus()}$("#navToggle").click(function(){t()}),$(".main-header__nav__link").click(function(){t()});const a=new XMLHttpRequest;a.open("GET","https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/weatherdata/forecast?aggregateHours=1&combinationMethod=aggregate&includeAstronomy=true&contentType=json&unitGroup=metric&locationMode=single&key=63G45XFSWN2N4CTW17TJMIDGL&dataElements=default&locations=Winnipeg%2C%20MB%2C%20CA",!0),a.responseType="",a.onload=function(){if(200===a.status){var t=JSON.parse(this.responseText);if(null!=t.location){var o=t.location.currentConditions.moonphase,t=t.location.currentConditions.temp;document.getElementById("weather").innerHTML=Math.round(t)+"°C";let e="new-moon.svg";0==o?e="full-moon.svg":o<.25?e="waxing-crescent.svg":.25==o?e="first-quarter.svg":.25<o&&o<.5?e="waxing-gibbous.svg":.5==o?e="new-moon.svg":.5<o&&o<.75?e="waning-gibbous.svg":.75==o?e="last-quarter.svg":.75<o&&o<1&&(e="waning-crescent.svg");o=`<img class="white-only" src='/images/moons/white-${e}'><img class="black-only" src='/images/moons/black-${e}'>`;document.getElementById("moon").innerHTML=o}}},a.send(),barba.init({transitions:[{name:"loader",once(){loaderAnimation()}},{name:"quick",to:{namespace:["work-category","author-archive"]},leave(e){return gsap.to(e.current.container,{opacity:0,duration:.3}),gsap.to(e.current.container,{opacity:0,duration:.3})},afterEnter(e){gsap.from(e.next.container,{opacity:0,delay:.2,duration:.5})}},{name:"default",leave(e){let t=gsap.timeline();return t.to("#pageTransition",{delay:0,duration:0,height:"0",top:"100vh"}),t.to("#pageTransitionContent p",{delay:0,duration:.001,margin:0,padding:"30vh 0 0 0"}),t.to("#pageTransition",{delay:0,ease:Power4.easeInOut,duration:.8,height:"100vh",top:"0"}),t.to("#pageTransitionContent p",{ease:CustomEase.create("custom","M0,0 C0,0 0.062,0.758 0.286,0.91 0.452,1.022 1,1 1,1 "),duration:.8,margin:"0 0 0 0",padding:"0"}),t.to(window,{duration:0,scrollTo:0}),t.add(function(){let e=window.Scrollbar;var t=document.querySelector("#scrollWrapper");let o=e.init(t,{damping:.1});o.scrollTo(0,0,0)}),t.to("#pageTransitionContent p",{delay:1,ease:Power4.easeInOut,duration:.8,margin:"-30vh 0 0 0"}),t.to("#pageTransition",{delay:-.7,ease:Power4.easeInOut,duration:.8,top:"-100vh"}),gsap.to(e.current.container,{delay:.5,opacity:0,duration:0})},afterLeave(e){let t=e.next.html;var o=t.indexOf("<title>"),a=t.indexOf("|");let r=t.slice(o+7,a),n=e.next.namespace;"default"==e.next.namespace||"Project"==e.next.namespace?n=r.slice(0,20):"Post"==e.next.namespace&&(n=r.slice(0,20)+"…"),document.querySelector("#pageTransitionContent p").textContent=n}}],views:[{namespace:"Home",afterLeave(){let e=document.getElementById("matter-gravity");e.parentNode.remove()},afterEnter(){gsap.to([document.body,"#pageTransition",".main-header"],{backgroundColor:"#F9F2ED",duration:.5,delay:1}),setTimeout(function(){document.body.classList.remove("white")},1e3),manoverboardJumble();var e=document.querySelectorAll(".home-hero .mask > span"),t=new SplitText(e,{type:"chars,words,lines",position:"absolute"}),e=document.querySelectorAll(".home-hero h1 .ripple div div");let o=gsap.timeline();o.to(".home-hero h1",{visibility:"visible"}),o.from(t.lines,{delay:3.75,duration:1,marginTop:"6.6vw",ease:CustomEase.create("custom","M0,0 C0,0 0.062,0.758 0.286,0.91 0.452,1.022 1,1 1,1 "),stagger:.05}),o.to(e,2,{css:{fontWeight:710},ease:"Expo.easeInOut",stagger:{yoyo:!0,each:.1,from:"start",repeat:-1}})}},{namespace:"Project",beforeEnter(){projectBGdiv=document.querySelector(".work-single-bg-color"),projectBGcolor=projectBGdiv.style.backgroundColor,gsap.to([document.body,"#pageTransition",".main-header"],{backgroundColor:projectBGcolor,duration:.5,delay:1}),setTimeout(function(){document.body.classList.add("white")},1e3)}},{namespace:"Services",beforeEnter(){gsap.to([document.body,"#pageTransition",".main-header"],{backgroundColor:"#F9F2ED",duration:.5,delay:1.25}),setTimeout(function(){document.body.classList.remove("white")},1e3)}},{namespace:"About",beforeEnter(){if(gsap.to([document.body,"#pageTransition",".main-header"],{backgroundColor:"#23211E",duration:.5,delay:1}),setTimeout(function(){document.body.classList.add("white")},1e3),1270<$(window).width()){var e=document.querySelectorAll(".team-members__single__inner__window h5 .mask span");let n=new SplitText(e,{type:"chars,words,lines"});e=document.querySelectorAll(".team-members__single__inner__window h6 .mask span");let i=new SplitText(e,{type:"chars,words,lines"});var s=document.querySelectorAll(".team-members__single");gsap.to(s,{width:"calc(20% - 20px)",visibility:"visible"}),s.forEach((t,o)=>{t.style.left=20*o+"%";var a=gsap.timeline(),r=gsap.timeline();$(t).clickToggle(function(){var e=$(s).not(this);a.to($(".team-members__single__inner__temp-title > div",this),{delay:0,top:"-100%",duration:.5,ease:"Power4.easeOut"}),$(e).each(function(){o<$(this).index()?a.to($(this),{duration:.83,left:"+="+20*(5-(o+1))+"%",ease:"Power4.easeInOut"},0):a.to($(this),{duration:.83,left:"-="+20*o+"%",ease:"Power4.easeInOut"},0)}),a.to(t,{delay:.25,width:"100%",left:"0%",duration:1.8,ease:CustomEase.create("custom","M0,0 C0.17,0 0.313,0.033 0.384,0.104 0.456,0.176 0.498,0.3 0.5,0.5 0.502,0.706 0.543,0.827 0.618,0.902 0.687,0.971 0.794,1 1,1 ")},0),a.to($(".team-members__single__inner__window",this),{delay:-.5,display:"inline-block",opacity:1,duration:.75,ease:"Power4.easeOut"}),a.to(n,{visibility:"visible",delay:-.5}),a.to(n.lines,{delay:-.5,duration:1,marginTop:0,ease:CustomEase.create("custom",".25,.74,.22,.99")}),a.to(i,{delay:-1,visibility:"visible"}),a.to(i.lines,{delay:-1,duration:.7,marginTop:0,ease:CustomEase.create("custom",".25,.74,.22,.99")})},function(){var e=$(s).not(this);r.to(i,{delay:-1,visibility:"hidden"}),r.to(i.lines,{delay:-1,duration:.7,marginTop:"30px",ease:CustomEase.create("custom",".25,.74,.22,.99")}),r.to(n,{visibility:"hidden",delay:-.5}),r.to(n.lines,{delay:-.5,duration:1,marginTop:"6.6vw",ease:CustomEase.create("custom",".25,.74,.22,.99")}),r.to($(".team-members__single__inner__window",this),{delay:-.5,opacity:0,display:"none",duration:.75,ease:"Power4.easeOut"}),r.to(t,{delay:.25,width:"calc(20% - 20px)",left:20*o+"%",duration:1.8,ease:CustomEase.create("custom","M0,0 C0.17,0 0.313,0.033 0.384,0.104 0.456,0.176 0.498,0.3 0.5,0.5 0.502,0.706 0.543,0.827 0.618,0.902 0.687,0.971 0.794,1 1,1 ")},0),$(e).each(function(){o<$(this).index()?r.to($(this),{delay:1,duration:.83,left:"-="+20*(5-(o+1))+"%",ease:"Power4.easeInOut"},0):r.to($(this),{delay:1,duration:.83,left:"+="+20*o+"%",ease:"Power4.easeInOut"},0)}),r.to($(".team-members__single__inner__temp-title > div",this),{delay:0,top:0,duration:.5,ease:"Power4.easeOut"})})})}else document.querySelectorAll(".team-members__single__inner__window")&&$(".team-members__single__inner").on("click keypress",function(e){!0===a11yClick(e)&&$(this).find(".team-members__single__inner__window").toggleClass("visible")})}},{namespace:"Hello",beforeEnter(){gsap.to([document.body,"#pageTransition",".main-header"],{backgroundColor:"#23211E",duration:.5,delay:1}),setTimeout(function(){document.body.classList.add("white")},1e3)}},{namespace:"Work",beforeEnter(){gsap.to([document.body,"#pageTransition",".main-header"],{backgroundColor:"#000000",duration:.5,delay:1}),setTimeout(function(){document.body.classList.add("white")},1e3)}},{namespace:"work-category",beforeEnter(){gsap.to([document.body,"#pageTransition",".main-header"],{backgroundColor:"#000000",duration:.5,delay:1}),setTimeout(function(){document.body.classList.add("white")},1e3)}},{namespace:"Post",beforeEnter(){gsap.to([document.body,"#pageTransition",".main-header"],{backgroundColor:"#FFFFFF",duration:.5,delay:1}),setTimeout(function(){document.body.classList.remove("white")},1e3)}},{namespace:"Blog",beforeEnter(){gsap.to([document.body,"#pageTransition",".main-header"],{backgroundColor:"#FFFFFF",duration:.5,delay:1}),setTimeout(function(){document.body.classList.remove("white")},1e3)},afterEnter(){SimpleJekyllSearch({searchInput:document.getElementById("searchInput"),resultsContainer:document.getElementById("resultsContainer"),json:"/search.json",searchResultTemplate:'<a href="{url}" class="idea-posts__post wo-full"><p class="idea-posts__post__date col-1-to-3 m-col-1-to-3 s-col-1-to-3">Search Result</p><p aria-hidden="true" class="link right col-10-to-13 m-col-9-to-11 s-col-3-to-5">Read</p><h2 class="col-1-to-8 m-col-1-to-9 s-col-1-to-5 bottom">{title}</h2></a>',fuzzy:!0,noResultsText:'<h2 class="pv wo-single col-1-to-8 m-col-1-to-9 s-col-1-to-5">No search results.</h2>',exclude:["support"]});let e=document.getElementById("searchInput"),a=document.getElementById("existingResultsContainer"),t=document.getElementById("resultsContainer"),o=document.getElementById("searchResultsNum");e.addEventListener("click",function(){let e=window.Scrollbar;var t=document.querySelector("#scrollWrapper");let o=e.init(t,{damping:.1});t=a.offsetTop-250;o.scrollTo(0,t,600)}),e.addEventListener("input",function(){e.value?(a.classList.add("hide"),setTimeout(function(){document.querySelector(".filters__search__results").classList.add("show"),o.innerText=t.childElementCount},50)):(a.classList.remove("hide"),document.querySelector(".filters__search__results").classList.remove("show"))})}},{namespace:"author-archive",beforeEnter(){gsap.to([document.body,"#pageTransition",".main-header"],{backgroundColor:"#FFFFFF",duration:.5,delay:1}),setTimeout(function(){document.body.classList.remove("white")},1e3)}},{namespace:"Archive",beforeEnter(){gsap.to([document.body,"#pageTransition",".main-header"],{backgroundColor:"#FFFFFF",duration:.5,delay:1}),setTimeout(function(){document.body.classList.remove("white")},1e3)}},{namespace:"default",beforeEnter(){gsap.to([document.body,"#pageTransition",".main-header"],{backgroundColor:"#FFFFFF",duration:.5,delay:1}),setTimeout(function(){document.body.classList.remove("white")},1e3)}},{namespace:"Come Aboard",beforeEnter(){gsap.to([document.body,"#pageTransition",".main-header"],{backgroundColor:"#807369",duration:.5,delay:1}),setTimeout(function(){document.body.classList.add("white")},1e3),hyperform(window);let e=1,t=0,o=2,a=".form-page--"+e,r=".form-page--"+o,n=".form-page--"+t,i=0,s=i+"vw";$(".form-previous").click(function(){1!=e&&(e--,t--,o--,a=".form-page--"+e,r=".form-page--"+o,n=".form-page--"+t,i-=17.666,s=i+"vw",gsap.to(a,{visibility:"visible"}),gsap.to(a,{opacity:1,duration:.5,ease:Power4.easeInOut}),gsap.to(r,{opacity:0,duration:.5,ease:Power4.easeInOut}),gsap.to(r,{visibility:"hidden",delay:.5}),gsap.to(".mob-form__progress-bar__bar__progress",{width:s,duration:1,ease:Power4.easeInOut}),1==e?(gsap.to(".form-previous",{transform:"scale(0.2)",ease:Power4.easeInOut,duration:.3,pointerEvents:"none"}),gsap.to(".form-previous img",{opacity:0,ease:Power4.easeInOut,duration:.2,delay:.2})):4==e&&(gsap.to(".specific-form-next",{display:"flex",duration:1e-31}),gsap.to(".form-submit",{display:"none",duration:1e-31})))}),$(".form-next").click(function(){6!=o&&0!=$(a).find(".hf-validated").length&&0==$(a).find(".hf-invalid").length&&(e++,o++,t++,a=".form-page--"+e,r=".form-page--"+o,n=".form-page--"+t,i+=17.666,s=i+"vw",gsap.to(a,{visibility:"visible"}),gsap.to(a,{opacity:1,duration:.5,ease:Power4.easeInOut}),gsap.to(n,{opacity:0,duration:.5,ease:Power4.easeInOut}),gsap.to(n,{visibility:"hidden",delay:.5}),gsap.to(".mob-form__progress-bar__bar__progress",{width:s,duration:1,ease:Power4.easeInOut}),1<e&&(gsap.to(".form-previous",{transform:"scale(1)",ease:Power4.easeInOut,duration:.3,pointerEvents:"auto"}),gsap.to(".form-previous img",{opacity:1,ease:Power4.easeInOut,duration:.2,delay:.2})),5==e&&(gsap.to(".specific-form-next",{display:"none",duration:0}),gsap.to(".form-submit",{display:"flex",duration:0})))});let l=document.getElementById("mainFooter");l.parentNode.removeChild(l)}}]}),barba.hooks.beforeEnter(e=>{isKeyboardUser(),gsap.registerPlugin(ScrollToPlugin),expanders(),lgTextRipple(),swoopHeadingsIn(),swoopCaseStudyImages(),setTimeout(function(){smoothScrollbar()},1e3),supportsTouch&&document.querySelector("body").classList.add("touch-device");let t=e.next.url.path,o=document.querySelectorAll(".main-header__nav__link"),a=window.location.pathname;let r="/"+a.split("/")[1]+"/";o.forEach(e=>{e.classList.remove("active"),e.pathname!=t&&e.attributes.href.nodeValue!=r||e.classList.add("active")})}),barba.hooks.once(e=>{fathom.trackPageview({url:e.next.url.href})}),barba.hooks.after(e=>{marquee(),addFlickitySlider(),comeAboardArrow(),fathom.trackPageview({url:e.next.url.href})})});