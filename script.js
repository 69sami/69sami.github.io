/* =========================================================
   This file renders PORTFOLIO_DATA (from data.js) into the page
   and handles animations. You don't need to edit this file to
   update your content — edit data.js instead.
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {
  const d = PORTFOLIO_DATA;

  /* ---------- HERO ---------- */
  document.title = `${d.name} — ${d.role}`;
  document.getElementById('navLogo').textContent = initials(d.name);
  document.getElementById('heroName').textContent = d.name;
  document.getElementById('heroRole').textContent = d.role;
  document.getElementById('heroTagline').textContent = d.tagline;
  document.getElementById('heroLocation').textContent = d.location || '';
  document.getElementById('heroOpenTo').textContent = d.openTo || '';
  const resumeBtn = document.getElementById('resumeBtn');
  if (d.resumeFile) { resumeBtn.href = d.resumeFile; } else { resumeBtn.style.display = 'none'; }

  const heroPhotoWrap = document.getElementById('heroPhotoWrap');
  const heroPhoto = document.getElementById('heroPhoto');
  if (d.photo) {
    heroPhoto.src = d.photo;
    heroPhoto.alt = d.name;
  } else {
    heroPhotoWrap.style.display = 'none';
  }

  /* ---------- STATS ---------- */
  const statsGrid = document.getElementById('statsGrid');
  (d.stats || []).forEach(s => {
    const item = document.createElement('div');
    item.className = 'stat-item';
    item.innerHTML = `<div class="stat-value">${escapeHTML(s.value)}</div><div class="stat-label">${escapeHTML(s.label)}</div>`;
    statsGrid.appendChild(item);
  });
  if (!(d.stats || []).length) {
    document.getElementById('statsStrip').style.display = 'none';
  }

  /* ---------- ABOUT ---------- */
  document.getElementById('aboutText').textContent = d.about;

  /* ---------- EXPERIENCE ---------- */
  renderTimeline('experienceList', d.experience, 'company');

  /* ---------- LEADERSHIP ---------- */
  renderTimeline('leadershipList', d.leadership, 'org');

  function renderTimeline(elId, entries, orgKey) {
    const container = document.getElementById(elId);
    if (!container) return;
    (entries || []).forEach(e => {
      const item = document.createElement('div');
      item.className = 'timeline-item';
      item.innerHTML = `
        <div class="timeline-head">
          <span class="timeline-role">${escapeHTML(e.role)}</span>
          <span class="timeline-period">${escapeHTML(e.period || '')}</span>
        </div>
        <div class="timeline-org">${escapeHTML(e[orgKey] || '')}</div>
        <span class="timeline-location">${escapeHTML(e.location || '')}</span>
        <ul class="timeline-bullets">${(e.bullets || []).map(b => `<li>${escapeHTML(b)}</li>`).join('')}</ul>
      `;
      container.appendChild(item);
    });
  }

  /* ---------- SKILLS ---------- */
  const skillsGrid = document.getElementById('skillsGrid');
  (d.skills || []).forEach(group => {
    const card = document.createElement('div');
    card.className = 'skill-card';
    card.innerHTML = `
      <h3>${escapeHTML(group.group)}</h3>
      <ul>${group.items.map(i => `<li>${escapeHTML(i)}</li>`).join('')}</ul>
    `;
    skillsGrid.appendChild(card);
  });

  /* ---------- PROJECTS ---------- */
  const projectsList = document.getElementById('projectsList');
  (d.projects || []).forEach(p => {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.innerHTML = `
      <div class="project-designator">${escapeHTML(p.designator || '')}</div>
      <div class="project-body">
        <h3>${escapeHTML(p.title)}</h3>
        <span class="project-period">${escapeHTML(p.period || '')}</span>
        ${p.image ? `<img class="project-image" src="${p.image}" alt="${escapeHTML(p.title)}">` : ''}
        <p>${escapeHTML(p.description)}</p>
        ${(p.tags && p.tags.length) ? `<div class="project-tags">${p.tags.map(t => `<span>${escapeHTML(t)}</span>`).join('')}</div>` : ''}
        ${p.link ? `<a class="project-link" href="${p.link}" target="_blank" rel="noopener">View project →</a>` : ''}
      </div>
    `;
    projectsList.appendChild(card);
  });

  /* ---------- EDUCATION ---------- */
  const eduList = document.getElementById('educationList');
  (d.education || []).forEach(e => {
    const item = document.createElement('div');
    item.className = 'education-item';
    item.innerHTML = `
      <h3>${escapeHTML(e.degree)}</h3>
      <div class="institute">${escapeHTML(e.institute)}</div>
      <span class="period">${escapeHTML(e.period || '')}</span>
      <p class="details">${escapeHTML(e.details || '')}</p>
    `;
    eduList.appendChild(item);
  });

  /* ---------- ACHIEVEMENTS ---------- */
  const achList = document.getElementById('achievementsList');
  (d.achievements || []).forEach(a => {
    const item = document.createElement('div');
    item.className = 'achievement-item';
    item.innerHTML = `
      <div class="achievement-year">${escapeHTML(a.year || '')}</div>
      <div>
        <h3>${escapeHTML(a.title)}</h3>
        <p>${escapeHTML(a.description || '')}</p>
      </div>
    `;
    achList.appendChild(item);
  });

  /* ---------- CONTACT ---------- */
  const contactLinks = document.getElementById('contactLinks');
  const links = [];
  if (d.email) links.push({ label: 'Email', href: `mailto:${d.email}` });
  if (d.phone) links.push({ label: 'Phone', href: `tel:${d.phone}` });
  if (d.linkedin) links.push({ label: 'LinkedIn', href: d.linkedin });
  if (d.github) links.push({ label: 'GitHub', href: d.github });
  if (d.resumeFile) links.push({ label: 'Résumé (PDF)', href: d.resumeFile });
  links.forEach(l => {
    const a = document.createElement('a');
    a.href = l.href;
    a.textContent = l.label;
    if (l.href.startsWith('http')) { a.target = '_blank'; a.rel = 'noopener'; }
    contactLinks.appendChild(a);
  });

  /* ---------- FOOTER ---------- */
  document.getElementById('footerText').textContent =
    `© ${new Date().getFullYear()} ${d.name} — built with HTML, CSS & a little JS.`;

  /* ---------- helpers ---------- */
  function initials(name) {
    return (name || '')
      .split(' ')
      .filter(Boolean)
      .slice(0, 2)
      .map(w => w[0].toUpperCase())
      .join('') || 'EE';
  }
  function escapeHTML(str) {
    if (!str) return '';
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  /* =========================================================
     ANIMATIONS
     ========================================================= */

  // Scroll-reveal for section elements
  const revealTargets = document.querySelectorAll(
    '.section-tag, .section-title, .about-text, .stat-item, .skill-card, .project-card, .timeline-item, .education-item, .achievement-item, .contact-sub, .contact-links a'
  );
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('reveal'), i * 40 % 200);
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });
  revealTargets.forEach(el => io.observe(el));

  // Trace spine: draws down the page as user scrolls
  const tracePath = document.getElementById('tracePath');
  const traceSpine = document.getElementById('traceSpine');
  const pulseWrap = document.getElementById('tracePulseWrap');
  function sizeTrace() {
    const h = document.body.scrollHeight;
    traceSpine.setAttribute('viewBox', `0 0 100 ${h}`);
    traceSpine.style.height = h + 'px';
    tracePath.setAttribute('d', `M50,0 L50,${h}`);
    const len = h;
    tracePath.style.strokeDasharray = `6 ${len}`;
    tracePath.style.strokeDashoffset = len;
    tracePath.dataset.length = len;
    if (pulseWrap) pulseWrap.style.height = h + 'px';
  }
  function updateTrace() {
    const len = parseFloat(tracePath.dataset.length || 0);
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const progress = Math.min(scrollTop / Math.max(docHeight, 1), 1);
    tracePath.style.strokeDashoffset = len - (len * progress);
  }
  sizeTrace();
  window.addEventListener('resize', sizeTrace);
  window.addEventListener('scroll', updateTrace, { passive: true });
  updateTrace();

  // Nav: hide on scroll down, show on scroll up + shrink background
  const nav = document.getElementById('nav');
  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const current = window.scrollY;
    if (current > lastScroll && current > 120) {
      nav.classList.add('nav-hidden');
    } else {
      nav.classList.remove('nav-hidden');
    }
    lastScroll = current;
  }, { passive: true });

  // Mobile nav toggle
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));
});
