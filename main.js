function main(){!function(){"use strict";$("a.page-scroll").click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var a=$(this.hash);if((a=a.length?a:$("[name="+this.hash.slice(1)+"]")).length)return $("html,body").animate({scrollTop:a.offset().top-50},900),!1}}),$("body").scrollspy({target:".navbar-default",offset:80}),$(".navbar-nav li a").click(function(a){$(".navbar-toggle").is(":visible")&&$(".navbar-collapse").collapse("hide")}),$(".portfolio-item a").nivoLightbox({effect:"slideDown",keyboardNav:!0})}()}main();