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

  // Scroll-triggered animations with IntersectionObserver (silky smooth reveals)
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        
        // Stagger child elements if they have .step-item or similar
        const children = entry.target.querySelectorAll('.step-item, .animate-on-scroll');
        children.forEach((child, i) => {
          setTimeout(() => {
            child.classList.add('in-view');
          }, i * 120); // 120ms stagger for silky effect
        });
        
        // Optional: add visual dots on scroll for "how" section
        if (entry.target.id === 'how') {
          addScrollVisualEffects(entry.target);
        }
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  });

  // Observe main sections and step containers
  document.querySelectorAll('#how, .animate-on-scroll, .feature-card, #features > div, .bg-white.py-16').forEach(el => {
    if (!el.classList.contains('in-view')) {
      observer.observe(el);
    }
  });

  // Add initial visual dots to hero and how section
  addFloatingVisuals();

  // Optional future interactivity
  // e.g. mobile menu, copy email, etc.
});

function addFloatingVisuals() {
  // Add small firefly/fruit visual dots to hero
  const hero = document.querySelector('.max-w-6xl.mx-auto.px-6.pt-16');
  if (hero) {
    for (let i = 0; i < 5; i++) {
      const dot = document.createElement('div');
      dot.className = 'visual-dot';
      dot.style.left = `${20 + Math.random() * 60}%`;
      dot.style.top = `${30 + Math.random() * 40}%`;
      dot.style.animationDelay = `-${Math.random() * 3}s`;
      hero.appendChild(dot);
    }
  }

  // Subtle banana icons
  const features = document.querySelector('#features');
  if (features) {
    for (let i = 0; i < 3; i++) {
      const banana = document.createElement('div');
      banana.className = 'visual-banana';
      banana.textContent = '🍌';
      banana.style.left = `${10 + i * 35}%`;
      banana.style.top = '10%';
      banana.style.animationDelay = `-${i * 1.5}s`;
      features.appendChild(banana);
    }
  }
}

function addScrollVisualEffects(section) {
  // Add dynamic small glowing effects when "how" section scrolls into view
  const existing = section.querySelectorAll('.scroll-visual');
  if (existing.length > 0) return;

  for (let i = 0; i < 4; i++) {
    const dot = document.createElement('div');
    dot.className = 'visual-dot scroll-visual';
    dot.style.left = `${15 + i * 20}%`;
    dot.style.top = '85%';
    dot.style.animationDuration = `${2.5 + Math.random()}s`;
    section.appendChild(dot);
    
    // Auto remove after animation for cleanliness
    setTimeout(() => {
      if (dot.parentNode) dot.parentNode.removeChild(dot);
    }, 4500);
  }
}

// Example utility: copy text (can be used in HTML onclick)
function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    alert('已複製到剪貼簿');
  });
}

// Example utility: copy text (can be used in HTML onclick)
function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    alert('已複製到剪貼簿');
  });
}
