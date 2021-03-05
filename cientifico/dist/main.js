(()=>{"use strict";const n="https://rickandmortyapi.com/api/character/",a=async a=>{const e=a?`${n}${a}`:n;try{const n=await fetch(e);return await n.json()}catch(n){console.log(n)}},e=()=>location.hash.slice(1).toLocaleLowerCase().split("/")[1]||"/",t=()=>'\n  <div class="Error404">\n    <h2>ERROR 404</h2>\n  </div>\n  ',s={"/":async()=>`\n  <div class="Characters">\n    ${(await a()).results.map((n=>`\n      <article class="Characters-item">\n      <a href="#/${n.id}/">\n        <img src="${n.image}" alt="${n.name}">\n        <h2>${n.name}</h2>\n      </a>\n    </article>\n  `)).join("")}\n  </div>\n  `,"/:id":async()=>{const n=e(),t=await a(n);return`\n  <div class="Characters-inner">\n      <article class="Characters-card">\n        <img src="${t.image}" alt="${t.name}">\n        <h2>${t.name}</h2>\n      </article>\n      <article class="Characters-card">\n        <h3>Episodes: <span>${t.episode.length}</span></h3>\n        <h3>Status: <span>${t.status}</span></h3>\n        <h3>Species: <span>${t.species}</span></h3>\n        <h3>Gender: <span>${t.gender}</span></h3>\n        <h3>Origin: <span>${t.origin.name}</span></h3>\n        <h3>Last Location: ${t.location.name}</h3>\n      </article>\n    </div>\n  `},"/contact":"contact"},i=async()=>{const n=document.getElementById("header"),a=document.getElementById("content");n.innerHTML=await'\n  <div class="Header-main">\n    <div class="Header-logo">\n      <h1>\n        <a href="/">\n          100tifi.co\n        </a>\n      </h1>\n    </div>\n    <div class="Header-nav">\n      <a href="#/about/">About</a>\n    </div>\n  </div>\n  ';let i=e(),c=await(n=>n.length<=3?"/"===n?n:"/:id":`/${n}`)(i),r=s[c]?s[c]:t;a.innerHTML=await r()};window.addEventListener("load",i),window.addEventListener("hashchange",i)})();