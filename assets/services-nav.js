(()=>{'use strict';
const details=document.querySelector('.nav-services');if(!details)return;
const summary=details.querySelector('summary');
document.addEventListener('click',event=>{if(!details.contains(event.target))details.open=false;});
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&details.open){details.open=false;const menu=document.querySelector('[data-menu]');if(!menu||getComputedStyle(menu).display==='none')summary.focus();}});
details.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{details.open=false;}));
})();
