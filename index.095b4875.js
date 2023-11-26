var e=document.querySelector(".logo"),n=document.body,r=function(){n.insertAdjacentHTML("beforeend",'\n    <div class="message">Promise was resolved!</div>\n  ')},t=function(){n.insertAdjacentHTML("beforeend",'\n  <div class="message error-message">Promise was rejected!</div>\n')},o=new Promise(function(n,r){e.addEventListener("click",n)}),s=new Promise(function(e,n){setTimeout(function(){return n(Error())},3e3)});o.then(r).catch(t),s.then(r).catch(t);//# sourceMappingURL=index.095b4875.js.map

//# sourceMappingURL=index.095b4875.js.map
