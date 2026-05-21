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