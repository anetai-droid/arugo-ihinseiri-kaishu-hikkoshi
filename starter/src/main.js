function init(){
  const mb=document.querySelector('.menu-button'),mn=document.querySelector('#mobile-nav');
  mb&&mb.addEventListener('click',()=>{const o=mb.getAttribute('aria-expanded')==='true';mb.setAttribute('aria-expanded',String(!o));mn.hidden=o;});
  mn&&mn.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{mb.setAttribute('aria-expanded','false');mn.hidden=true;}));
  if(!('IntersectionObserver'in window)){document.querySelectorAll('.reveal').forEach(e=>e.classList.add('is-visible'));return;}
  const gmap=new Map();
  document.querySelectorAll('.reveal').forEach(e=>{const p=e.parentElement;const i=gmap.get(p)||0;e.style.setProperty('--d',Math.min(i,6)*90+'ms');gmap.set(p,i+1);});
  const ob=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('is-visible');ob.unobserve(e.target);}}),{threshold:.12});
  document.querySelectorAll('.reveal').forEach(e=>ob.observe(e));
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
