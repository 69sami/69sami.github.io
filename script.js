const year=document.getElementById('year');if(year)year.textContent=new Date().getFullYear();
const navLinks=[...document.querySelectorAll('.sidebar-nav a')];
const sections=navLinks.map(a=>document.querySelector(a.getAttribute('href'))).filter(Boolean);
if('IntersectionObserver' in window){const observer=new IntersectionObserver(entries=>{const visible=entries.filter(e=>e.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio);if(visible.length){navLinks.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+visible[0].target.id));}},{rootMargin:'-12% 0px -62% 0px',threshold:[0,.1,.3,.5]});sections.forEach(s=>observer.observe(s));}
