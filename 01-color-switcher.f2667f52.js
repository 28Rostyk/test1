!function(){var t={start:document.querySelector("[data-start]"),stop:document.querySelector("[data-stop]"),body:document.body},e=null;function d(){t.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}t.start.addEventListener("click",(function(){e=setInterval(d,1e3),t.start.setAttribute("disabled","disabled"),t.stop.removeAttribute("disabled")})),t.stop.addEventListener("click",(function(){clearInterval(e),t.stop.setAttribute("disabled","disabled"),t.start.removeAttribute("disabled")})),t.stop.setAttribute("disabled","disabled")}();
//# sourceMappingURL=01-color-switcher.f2667f52.js.map