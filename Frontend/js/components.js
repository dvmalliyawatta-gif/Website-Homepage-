/**
 * components.js
 * Loads HTML component files into [data-include] placeholders.
 * Usage: <div data-include="components/navbar.html"></div>
 */
async function loadComponents() {
  const elements = document.querySelectorAll('[data-include]');

  const promises = Array.from(elements).map(async (el) => {
    const file = el.getAttribute('data-include');
    try {
      const res = await fetch(file);
      if (!res.ok) throw new Error(`Failed to load ${file}: ${res.status}`);
      const html = await res.text();
      el.outerHTML = html; // Replace the placeholder div with the actual component HTML
    } catch (err) {
      console.error(err);
      el.innerHTML = `<div class="alert alert-danger">Could not load component: ${file}</div>`;
    }
  });

  await Promise.all(promises);

  // Re-initialise Bootstrap JS components after all HTML is inserted
  document.dispatchEvent(new Event('componentsLoaded'));
}

loadComponents();