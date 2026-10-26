(()=>{'use strict';
const menu=document.querySelector('[data-menu]');const nav=document.querySelector('[data-nav]');
if(menu&&nav){const close=()=>{menu.setAttribute('aria-expanded','false');nav.classList.remove('open');};menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));nav.classList.toggle('open',open);});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',close));document.addEventListener('keydown',e=>{if(e.key==='Escape'&&menu.getAttribute('aria-expanded')==='true'){close();menu.focus();}});}
document.querySelectorAll('[data-year]').forEach(el=>el.textContent=String(new Date().getFullYear()));
const hero=document.getElementById('hero-check');if(hero){hero.addEventListener('click',()=>{const status=document.getElementById('hero-result');document.querySelectorAll('[data-hero-valid]').forEach(el=>{const valid=el.dataset.heroValid==='true';el.textContent=valid?'Ready':'Review';el.className='badge '+(valid?'good':'warn');});const checked=window.BurnsDemo.validateCSV(window.BurnsDemo.SAMPLE);document.getElementById('hero-ready').textContent=checked.ready.length;document.getElementById('hero-review').textContent=checked.review.length;status.textContent=checked.ready.length+' rows ready. '+checked.review.length+' held for review. Open the full validator in Working examples.';hero.textContent='Checks complete ✓';hero.disabled=true;});}
const form=document.getElementById('project-form');if(form){
 const select=form.querySelector('[name="service"]');const wanted=new URLSearchParams(window.location.search).get('service');if(wanted&&select){[...select.options].forEach(option=>{if(option.value===wanted)select.value=wanted;});}
 // Keep provider-hosted spam verification enabled; only intercept empty descriptions.
 form.addEventListener('submit',e=>{const message=form.querySelector('[name="message"]');if(!message.value.trim()){e.preventDefault();message.setCustomValidity('Please describe the process you would like to improve.');message.reportValidity();}});
 form.querySelector('[name="message"]').addEventListener('input',e=>e.target.setCustomValidity(''));
}
})();
