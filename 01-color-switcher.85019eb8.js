const t=document.querySelector("body"),e=document.querySelector("button[data-start]"),o=document.querySelector("button[data-stop]");o.disabled=!0,e.addEventListener("click",(function(){d=setInterval((()=>{const e=`#${Math.floor(16777215*Math.random()).toString(16)}`;console.log(e),t.style.backgroundColor=e}),1e3),e.disabled=!0,o.disabled=!1})),o.addEventListener("click",(function(){clearInterval(d),e.disabled=!1,o.disabled=!0}));let d=null;
//# sourceMappingURL=01-color-switcher.85019eb8.js.map