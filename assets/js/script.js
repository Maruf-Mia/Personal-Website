const roles=["Software Engineer II","Full Stack Engineer","System Architect","Backend Engineer"];
let ri=0, ci=0, deleting=false;
const typing=document.getElementById("typing");
function type(){
  const word=roles[ri];
  typing.textContent=word.slice(0,ci);
  if(!deleting && ci<word.length){ci++;setTimeout(type,80)}
  else if(!deleting){deleting=true;setTimeout(type,1300)}
  else if(ci>0){ci--;setTimeout(type,45)}
  else{deleting=false;ri=(ri+1)%roles.length;setTimeout(type,250)}
}
type();

const menu=document.querySelector(".menu-btn");
const links=document.querySelector(".nav-links");
menu.addEventListener("click",()=>links.classList.toggle("open"));
document.querySelectorAll(".nav-links a").forEach(a=>a.addEventListener("click",()=>links.classList.remove("open")));

const observer=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("show")});
},{threshold:.12});
document.querySelectorAll(".reveal,.project,.skill-card,.edu,.timeline-item").forEach(el=>{
  el.classList.add("reveal"); observer.observe(el);
});

document.getElementById("contactForm").addEventListener("submit",e=>{
  e.preventDefault();
  document.getElementById("formMsg").textContent="Thanks! Connect a backend/email service to receive messages.";
});
