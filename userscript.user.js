// ==UserScript==
// @name         Kaguya Server Template
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the canvas!
// @author       Ship, kinda
// @match        https://hot-potato.reddit.com/embed*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=reddit.com
// @grant        none
// ==/UserScript==
if (window.top !== window.self) {
    window.addEventListener('load', () => {
            document.getElementsByTagName("mona-lisa-embed")[0].shadowRoot.children[0].getElementsByTagName("mona-lisa-canvas")[0].shadowRoot.children[0].appendChild(
        (function () {
            const i = document.createElement("img");
            i.src = "https://imgur.com/2be7Rpu.png?";
            i.style = "position: absolute;left: 0;top: 0;image-rendering: pixelated;width: 2000px;height: 2000px; transition: opacity 0.2s ease";
            console.log(i);
            var t;
            function a() {
              i.style.opacity = 0;
              t = setTimeout(b, 1300);
            }
            function b() {
              i.style.opacity = 1;
              t = setTimeout(a, 1300);
            }
            setInterval(() => {
              i.src += 'a';
            }, 120000)
            b();
            document.body.addEventListener('keypress', (e) => {
              if(e.code == 'KeyD') {
                if(t){
                  clearTimeout(t);
                  t = false;
                }else
                  b();
              } 
            })
          
            document.body.addEventListener('keypress', (e) => {
              if(e.code == 'KeyS') {
                i.style.opacity = (+i.style.opacity)?0:1;
              } 
            })
            return i;
        })())

    }, false);

}
