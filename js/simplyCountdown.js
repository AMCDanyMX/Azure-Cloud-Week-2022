"use strict";function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}!function(t){
    /*!
       * Project : simply-countdown
       * Date : 27/06/2015
       * License : MIT
       * Version : 1.5.0
       * Author : Vincent Loy <vincent.loy1@gmail.com>
       * Contributors :
       *  - Justin Beasley <JustinB@harvest.org>
       *  - Nathan Smith <NathanS@harvest.org>
       */
    var e=function(t,e,n){var o=document.createElement
        ("div"),s=document.createElement("span"),r=document.createElement
        ("span"),a=document.createElement("div");return a.appendChild(s),
        a.appendChild(r),o.appendChild(a),o.classList.add(e.sectionClass),
        o.classList.add(n),s.classList.add(e.amountClass),r.classList.add(e.wordClass),
        t.appendChild(o),{full:o,amount:s,word:r}};t.simplyCountdown=function(t,n)
        {var o,s,r,a,d,c,i,l,u,m,p=function t(e){for(var n,o=e||{},s=1;s<arguments.length;s+=1)
        {n=arguments[s];var r=Object.keys(n);if(r.length)for(var a=0;a<r.length;a+=1){var d=r[a];
            Object.prototype.hasOwnProperty.call(n,d)&&("object"===_typeof(n[d])?t(o[d],n[d]):o[d]=n[d])}}return o}
            ({year:2015,month:6,day:28,hours:0,minutes:0,seconds:0,words:{days:"day",hours:"hour",minutes:"minute",seconds:"second",
            pluralLetter:"s"},plural:!0,inline:!1,enableUtc:!1,onEnd:function(){},refresh:1e3,inlineClass:"simply-countdown-inline",
            sectionClass:"simply-section",amountClass:"simply-amount",wordClass:"simply-word",zeroPad:!1,countUp:!1},n),
            y=document.querySelectorAll(t);r=new Date(p.year,p.month-1,p.day,p.hours,p.minutes,p.seconds),s=p.enableUtc?new Date(r.getUTCFullYear(),r.getUTCMonth(),r.getUTCDate(),r.getUTCHours(),r.getUTCMinutes(),r.getUTCSeconds()):r,Array.prototype.forEach.call(y,function(t){var n,r=t,y=function(t,n){var o;return t.inline?((o=document.createElement("span")).classList.add(t.inlineClass),o):{days:e(n,t,"simply-days-section"),hours:e(n,t,"simply-hours-section"),minutes:e(n,t,"simply-minutes-section"),seconds:e(n,t,"simply-seconds-section")}}(p,r);(n=function(){var t,e,n,w,f=function(){i=parseInt(c/86400,10),c%=86400,l=parseInt(c/3600,10),c%=3600,u=parseInt(c/60,10),m=parseInt(c%60,10)};a=new Date,p.enableUtc?(d=new Date(a.getFullYear(),a.getMonth(),a.getDate(),a.getHours(),a.getMinutes(),a.getSeconds()),c=(s-d.getTime())/1e3):c=(s-a.getTime())/1e3,c>0?f():p.countUp?(c=(a.getTime()-s)/1e3,f()):(i=0,l=0,u=0,m=0,window.clearInterval(o),p.onEnd()),p.plural?(t=i>1?p.words.days+p.words.pluralLetter:p.words.days,e=l>1?p.words.hours+p.words.pluralLetter:p.words.hours,n=u>1?p.words.minutes+p.words.pluralLetter:p.words.minutes,w=m>1?p.words.seconds+p.words.pluralLetter:p.words.seconds):(t=p.words.days,e=p.words.hours,n=p.words.minutes,w=p.words.seconds),p.inline?r.innerHTML="".concat(i," ").concat(t,", ")+"".concat(l," ").concat(e,", ")+"".concat(u," ").concat(n,", ")+"".concat(m," ").concat(w,"."):(y.days.amount.textContent=(p.zeroPad&&i.toString().length<2?"0":"")+i,y.days.word.textContent=t,y.hours.amount.textContent=(p.zeroPad&&l.toString().length<2?"0":"")+l,y.hours.word.textContent=e,y.minutes.amount.textContent=(p.zeroPad&&u.toString().length<2?"0":"")+u,y.minutes.word.textContent=n,y.seconds.amount.textContent=(p.zeroPad&&m.toString().length<2?"0":"")+m,y.seconds.word.textContent=w)})(),o=window.setInterval(n,p.refresh)})}}(window),window.jQuery&&function(t,e){t.fn.simplyCountdown=function(t){return function(t,n){e(t,n)}(this.selector,t)}}(jQuery,simplyCountdown);
    