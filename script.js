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
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        
        // Stagger child elements
        const children = entry.target.querySelectorAll('.step-item, .ai-feature-card, .animate-on-scroll');
        children.forEach((child, i) => {
          setTimeout(() => {
            child.classList.add('in-view');
          }, i * 100);
        });
        
        // Add visual dots on scroll for "how" section
        if (entry.target.id === 'how') {
          addScrollVisualEffects(entry.target);
        }
        
        // Optional: trigger counter animation if present
        const counters = entry.target.querySelectorAll('.counter');
        counters.forEach(counter => animateCounter(counter));
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  });

  // Observe sections for scroll animations
  document.querySelectorAll('section, #how, #features, .ai-feature-section, .animate-on-scroll, .feature-card, .bg-white.py-16, .bg-white.border-y').forEach(el => {
    observer.observe(el);
  });

  // Make AI feature cards interactive (click to expand/demo)
  document.querySelectorAll('.ai-feature-card').forEach((card, index) => {
    card.style.cursor = 'pointer';
    card.addEventListener('click', () => {
      showAiDemo(card, index);
    });
    
    // Enhanced hover
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-8px) scale(1.02)';
      card.style.boxShadow = '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)';
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
      card.style.boxShadow = '';
    });
  });

  // Add initial floating visuals
  addFloatingVisuals();

  // Optional: add a global scroll progress or more effects
  addScrollProgress();
});

// Add subtle scroll progress bar for silky feel
function addScrollProgress() {
  const progressBar = document.createElement('div');
  progressBar.className = 'fixed top-0 left-0 h-0.5 bg-[#E7EB54] z-50 transition-all duration-100';
  progressBar.style.width = '0%';
  document.body.appendChild(progressBar);

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progressBar.style.width = scrollPercent + '%';
  });
}

// Animated counter (if we add stats later)
function animateCounter(element) {
  const target = parseInt(element.getAttribute('data-target') || element.textContent);
  let current = 0;
  const increment = Math.ceil(target / 30);
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      element.textContent = target + (element.textContent.includes('%') ? '%' : '');
      clearInterval(timer);
    } else {
      element.textContent = current + (element.textContent.includes('%') ? '%' : '');
    }
  }, 50);
}

// Floating visuals (firefly + banana theme)
function addFloatingVisuals() {
  const hero = document.querySelector('.max-w-6xl.mx-auto.px-6.pt-16');
  if (hero && hero.querySelectorAll('.visual-dot').length === 0) {
    for (let i = 0; i < 6; i++) {
      const dot = document.createElement('div');
      dot.className = 'visual-dot';
      dot.style.left = `${15 + Math.random() * 70}%`;
      dot.style.top = `${20 + Math.random() * 50}%`;
      dot.style.animationDelay = `-${Math.random() * 4}s`;
      dot.style.width = `${6 + Math.random() * 6}px`;
      dot.style.height = dot.style.width;
      hero.appendChild(dot);
    }
  }

  const aiSection = document.querySelector('.ai-feature-section') || document.querySelector('#features');
  if (aiSection && aiSection.querySelectorAll('.visual-banana').length === 0) {
    for (let i = 0; i < 4; i++) {
      const banana = document.createElement('div');
      banana.className = 'visual-banana';
      banana.textContent = ['🍌', '🪲', '✨'][i % 3];
      banana.style.left = `${5 + i * 25}%`;
      banana.style.top = `${5 + Math.random() * 10}%`;
      banana.style.fontSize = '12px';
      banana.style.animationDelay = `-${i * 1.2}s`;
      aiSection.appendChild(banana);
    }
  }
}

function addScrollVisualEffects(section) {
  if (section.querySelector('.scroll-visual')) return;

  for (let i = 0; i < 5; i++) {
    const dot = document.createElement('div');
    dot.className = 'visual-dot scroll-visual';
    dot.style.left = `${10 + i * 18 + Math.random() * 5}%`;
    dot.style.top = `${80 + Math.random() * 10}%`;
    dot.style.animationDuration = `${1.8 + Math.random() * 1.5}s`;
    section.appendChild(dot);
    setTimeout(() => {
      if (dot.parentNode) dot.parentNode.removeChild(dot);
    }, 6000);
  }
}

// Interactive AI demo on card click
function showAiDemo(card, index) {
  const responses = [
    "根據你的目標，我建議把「準備期中考」拆成 3 個小任務：複習講義、刷題、模擬考。",
    "你的上週專注時間不錯！下週可以試著把物理和化學安排在早上黃金時段。",
    "為了達成校排前30，我幫你生成了本週優先清單，包含 2 個重要社團活動。",
    "檢測到你最近連勝 5 天，繼續保持！需要我調整你的時間塊嗎？"
  ];
  
  const originalText = card.innerHTML;
  const demoText = responses[index % responses.length];
  
  card.style.transition = 'all 0.3s ease';
  card.innerHTML = `
    <div class="text-2xl mb-3">🪲</div>
    <h4 class="font-semibold text-lg mb-2">AI 回應</h4>
    <p class="text-sm text-gray-700 leading-relaxed">${demoText}</p>
    <div class="mt-4 text-xs text-[#E7EB54] font-medium">點擊卡片重置</div>
  `;
  
  // Auto reset after 5s or on click again
  setTimeout(() => {
    if (card.innerHTML.includes('AI 回應')) {
      card.innerHTML = originalText;
    }
  }, 5500);
  
  // Re-attach click to reset
  card.onclick = () => {
    card.innerHTML = originalText;
    // Rebind for future clicks
    card.onclick = () => showAiDemo(card, index);
  };
}

// Utility
function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    const toast = document.createElement('div');
    toast.className = 'fixed bottom-4 right-4 bg-[#141414] text-white px-4 py-2 rounded-2xl text-sm z-[100]';
    toast.textContent = '已複製到剪貼簿';
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 1800);
  });
}

// Simple AI demo (static responses for interaction)
function triggerAiDemo() {
  const input = document.getElementById('ai-input');
  const output = document.getElementById('ai-output');
  if (!input || !output || !input.value.trim()) return;

  const responses = [
    "好的！我幫你把「這週要準備數學考試」拆成 4 個小任務：複習講義 → 刷 50 題 → 模擬考 → 錯題複習。",
    "根據你的習慣，建議把數學安排在早上 8-10 點的黃金時段，使用 2 個番茄鐘。",
    "你的上週完成率不錯！這週可以再加 1 個社團練習時間塊。",
    "已為你生成本週優先清單，包含 3 個高價值任務。"
  ];

  output.classList.remove('hidden');
  output.innerHTML = `<span class="text-[#E7EB54]">螢火蟲：</span> 思考中...`;

  // Simulate typing effect
  setTimeout(() => {
    const random = responses[Math.floor(Math.random() * responses.length)];
    output.innerHTML = `<span class="text-[#E7EB54]">螢火蟲：</span> ${random} <span class="text-xs opacity-60 ml-2">(這是示範回應)</span>`;
    input.value = '';
  }, 650);
}

// Bonus: allow Enter key for demo
document.addEventListener('DOMContentLoaded', () => {
  const aiInput = document.getElementById('ai-input');
  if (aiInput) {
    aiInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') triggerAiDemo();
    });
  }
});


// Example utility: copy text (can be used in HTML onclick)
function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    alert('已複製到剪貼簿');
  });
}
