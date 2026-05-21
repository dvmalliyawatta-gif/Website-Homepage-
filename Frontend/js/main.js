/**
 * main.js
 * All interactive JS that depends on components being loaded.
 * Runs after the 'componentsLoaded' event fired by components.js.
 */
document.addEventListener('componentsLoaded', () => {

  // ── Announcement Bar Close ─────────────────────────────
  const closeBar = document.getElementById('closeBar');
  if (closeBar) {
    closeBar.addEventListener('click', () => {
      const bar = document.querySelector('.announcement-bar');
      if (bar) bar.style.display = 'none';
    });
  }

  // ── Featured Items Filter Tabs ─────────────────────────
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      // Add your filter logic here
    });
  });

});

// ── Smooth Scroll for Our Experts link ────────────────
const ourExpertsLink = document.querySelector('a[href="#flower-experts"]');
if (ourExpertsLink) {
  ourExpertsLink.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.getElementById('flower-experts');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
}

// ── Smooth Scroll for About Us link ────────────────
const aboutUsLink = document.querySelector('a[href="#about-us"]');
if (aboutUsLink) {
  aboutUsLink.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.getElementById('about-us');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
}