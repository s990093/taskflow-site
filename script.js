// TaskFlow Site - JavaScript
// Split from HTML for better maintainability

// Tailwind CDN configuration
tailwind.config = {
  theme: {
    extend: {
      colors: {
        primary: '#E7EB54',
      },
      fontFamily: {
        sans: ['Noto Sans TC', 'Inter', 'system-ui', 'sans-serif'],
      }
    }
  }
};

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
  console.log('%c[TaskFlow Site] JS initialized - CSS/JS split complete', 'color:#E7EB54');

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Optional future interactivity
  // e.g. mobile menu, copy email, etc.
});

// Example utility: copy text (can be used in HTML onclick)
function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    alert('已複製到剪貼簿');
  });
}
