// Progressive enhancement only: every page works without this file.
const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;

// Scroll reveal + count-up
const fmt=(v,dec)=>v.toFixed(dec).replace('.',',');
const countUp=el=>{const to=parseFloat(el.dataset.count),dec=+(el.dataset.dec||0),suf=el.dataset.suffix||'',t0=performance.now(),dur=1400;
 const tick=t=>{const p=Math.min(1,(t-t0)/dur),e=1-Math.pow(1-p,4);el.textContent=fmt(to*e,dec)+suf;if(p<1)requestAnimationFrame(tick);};requestAnimationFrame(tick);};
if('IntersectionObserver' in window&&!reduced){
 const io=new IntersectionObserver(es=>{for(const e of es){if(!e.isIntersecting)continue;e.target.classList.add('in');e.target.querySelectorAll('[data-count]').forEach(countUp);io.unobserve(e.target);}},{threshold:.15,rootMargin:'0px 0px -6% 0px'});
 document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
}else document.querySelectorAll('.reveal').forEach(el=>el.classList.add('in'));

// Hero pointer parallax (fine pointers only)
const stage=document.querySelector('.hero-stage');
if(stage&&!reduced&&matchMedia('(hover:hover) and (pointer:fine)').matches){
 const hero=stage.closest('.hero');
 hero.addEventListener('pointermove',e=>{const r=hero.getBoundingClientRect();stage.style.setProperty('--px',((e.clientX-r.left)/r.width-.5)*36+'px');stage.style.setProperty('--py',((e.clientY-r.top)/r.height-.5)*28+'px');},{passive:true});
 hero.addEventListener('pointerleave',()=>{stage.style.setProperty('--px','0px');stage.style.setProperty('--py','0px');});
}

// Screenshot lightbox
const box=document.querySelector('.lightbox');
if(box&&box.showModal){
 const img=box.querySelector('img');
 document.querySelectorAll('.g-item').forEach(a=>a.addEventListener('click',e=>{e.preventDefault();img.src=a.href;img.alt=a.querySelector('img').alt;box.showModal();}));
 box.addEventListener('click',e=>{if(e.target===box)box.close();});
}

// Close mobile menu after choosing a link
document.querySelectorAll('.menu-panel a').forEach(a=>a.addEventListener('click',()=>a.closest('details').open=false));
