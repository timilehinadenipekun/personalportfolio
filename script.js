/* PERSONALIZE HERE. Never publish personal phone numbers or private information. */
const SETTINGS = {
  email: 'timiadenipekun@outlook.com', // Example: 'hello@example.com'. Empty uses a safe placeholder link.
  linkedin: 'https://www.linkedin.com/in/timilehinadenipekun/', // Your full LinkedIn URL, e.g. 'https://www.linkedin.com/in/yourname/'
  resumeFile: 'assets/resume.pdf' // Add this file to activate your resume buttons.
};

const projects = {
  coachme: { kicker:'MOBILE APPLICATION · IoT', title:'COACHME', subtitle:'Athlete monitoring, made accessible.', overview:'COACHME is an IoT-based athlete monitoring application developed with .NET MAUI. It brings athlete performance information into an interface intended for athletes and coaches.', details:['Explored collecting and presenting athlete performance data.', 'Built mobile application functionality using .NET MAUI and C#.', 'Focused on making complex information easier to view and use.'], tech:['.NET MAUI','C#','IoT'], note:'Project details can be expanded with screenshots, demo videos and a repository link.' },
  imagine: { kicker:'FULL STACK · INTERACTIVE STORYTELLING', title:'IMAGINE', subtitle:'Technology meets storytelling.', overview:'IMAGINE is an interactive storytelling platform with a .NET backend and PostgreSQL database. It explores how responsive web technology can support creative, user-driven experiences.', details:['Designed a database-backed interactive experience.', 'Worked with .NET backend logic and PostgreSQL storage.', 'Combined storytelling interactions with application architecture.'], tech:['.NET','PostgreSQL','Web development'], note:'Add a demo or repository link when you are ready to share it.' },
  roll: { kicker:'UNITY · GAME DEVELOPMENT', title:'Roll-a-Lemon', subtitle:'A little lemon with a big adventure.', overview:'A Unity game built as part of VR/AR coursework. A lemon character collects pickups while navigating obstacles and avoiding a bee enemy.', details:['Implemented movement and collectible mechanics.', 'Added obstacles, ramps, game feedback and win/lose states.', 'Built enemy navigation using Unity NavMesh.'], tech:['Unity','C#','NavMesh'], note:'Add a gameplay recording or repository URL to showcase this project.' },
  vision: { kicker:'COMPUTER VISION · EXPLORATION', title:'Vision Explorations', subtitle:'Learning to see beyond the pixels.', overview:'Graduate-level exploration of machine learning and computer vision concepts, including autoencoders, image reconstruction and video enhancement.', details:['Experimented with image representations and neural networks.', 'Explored PyTorch-based image reconstruction.', 'Investigating enhancement approaches for older or low-quality video.'], tech:['Python','PyTorch','Computer vision'], note:'Ongoing exploration — replace with verified results and demos as projects mature.' }
};
const $ = (sel) => document.querySelector(sel);
const init = () => {
  $('#year').textContent = new Date().getFullYear();
  if(SETTINGS.email){ $('#emailLink').href=`mailto:${SETTINGS.email}`; }
  else {$('#emailLink').href='mailto:'; $('#emailLink').title='Add your email address to script.js';}
  if(SETTINGS.linkedin){$('#linkedInLink').href=SETTINGS.linkedin; $('#linkedInLink').target='_blank'; $('#linkedInLink').rel='noopener noreferrer'; $('#linkedInLink').removeAttribute('aria-disabled');$('#linkedInLink').removeAttribute('title');}
  document.querySelectorAll('[data-resume]').forEach(link => { link.href=SETTINGS.resumeFile; link.addEventListener('click', e=>{ /* file added later */ }); });
  const menu=$('#menuToggle'), nav=$('#navLinks');
  menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));menu.textContent=open?'✕':'☰';});
  nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.textContent='☰';}));
  const stored=localStorage.getItem('portfolio-theme');
  if(stored==='light'){document.documentElement.classList.add('light');}
  const updateTheme=()=>{$('#themeIcon').textContent=document.documentElement.classList.contains('light')?'☾':'☀';};updateTheme();
  $('#themeToggle').addEventListener('click',()=>{const light=document.documentElement.classList.toggle('light');localStorage.setItem('portfolio-theme',light?'light':'dark');updateTheme();});
  const dialog=$('#projectDialog');
  const openProject=(key)=>{const p=projects[key];if(!p)return;$('#dialogContent').innerHTML=`<p class="eyebrow">${p.kicker}</p><h2 id="dialogTitle">${p.title}</h2><p class="dialog-subtitle">${p.subtitle}</p><p>${p.overview}</p><h3>Highlights</h3><ul>${p.details.map(d=>`<li>${d}</li>`).join('')}</ul><div class="techs">${p.tech.map(t=>`<span>${t}</span>`).join('')}</div><p class="dialog-note">${p.note}</p>`;dialog.showModal();};
  document.querySelectorAll('[data-project]').forEach(card=>{card.addEventListener('click',()=>openProject(card.dataset.project));card.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();openProject(card.dataset.project);}});});
  $('#dialogClose').addEventListener('click',()=>dialog.close());dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close();});
  if ('IntersectionObserver' in window){const obs=new IntersectionObserver((entries)=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');obs.unobserve(e.target);}}),{threshold:.09});document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));}else{document.querySelectorAll('.reveal').forEach(el=>el.classList.add('visible'));}
};
document.addEventListener('DOMContentLoaded',init);
