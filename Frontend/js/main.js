/*
 * main.js
 * All interactive behaviour for the Kngu homepage. 
 */

document.addEventListener('DOMContentLoaded', () => {

  // ── 1. Announcement Bar Close ──────────────────────────
  const closeBar = document.getElementById('closeBar');
  if (closeBar) {
    closeBar.addEventListener('click', () => {
      const bar = document.getElementById('announcementBar');
      if (bar) bar.style.display = 'none';
    });
  }


  // ── 2. Featured Items Filter Tabs ──────────────────────
  
  const filterBtns = document.querySelectorAll('.filter-btn');
  const featuredItems = document.querySelectorAll('.featured-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      featuredItems.forEach(item => {
        const category = item.getAttribute('data-category');

        if (filter === 'all' || category === filter) {
          item.classList.remove('hidden');
        } else {
          item.classList.add('hidden');
        }
      });
    });
  });


  // ── 3. Newsletter Form Submit ───────────────────────────
  const newsletterForm = document.getElementById('newsletterForm');
  const newsletterMsg  = document.getElementById('newsletterMsg');

  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const emailInput = newsletterForm.querySelector('input[type="email"]');

      // Show success message and reset the input
      if (newsletterMsg) {
        newsletterMsg.classList.remove('d-none');
      }
      if (emailInput) {
        emailInput.value = '';
      }

      // Hide the message again after 4 seconds
      setTimeout(() => {
        if (newsletterMsg) newsletterMsg.classList.add('d-none');
      }, 4000);
    });
  }

});