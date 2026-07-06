// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const tabNav = document.getElementById('tabNav');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('active');
    tabNav.classList.toggle('active');
});

// Tab functionality
document.querySelectorAll('.tab-button').forEach(button => {
    button.addEventListener('click', function() {
        // Get the tab name from data attribute
        const tabName = this.getAttribute('data-tab');
        
        // Remove active class from all buttons and panes
        document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll('.tab-pane').forEach(pane => pane.classList.remove('active'));
        
        // Add active class to clicked button and corresponding pane
        this.classList.add('active');
        document.getElementById(tabName).classList.add('active');
        
        // Close mobile menu after selection
        if (window.innerWidth <= 768) {
            hamburger.classList.remove('active');
            tabNav.classList.remove('active');
        }
    });
});
/* ============================================================
   SERVICE CARD EXPAND
   ============================================================ */
(function () {
  'use strict';

  var serviceDetails = {
    '01': {
      text: "Before any code ships, we document your system's data flow, service boundaries, and failure points — so the architecture holds up as you scale, not just at launch.",
      items: [
        'System architecture diagrams & documentation',
        'Database schema design',
        'Load handling & scalability planning',
        'Technical due diligence for investors or partners'
      ]
    },
    '02': {
      text: "We start with your users' actual workflows, not a template — wireframing, prototyping, and testing before a single pixel goes to production.",
      items: [
        'Wireframes & interactive prototypes',
        'Usability testing with real users',
        'Accessibility-compliant design (WCAG)',
        'Design systems & component libraries'
      ]
    },
    '03': {
      text: "New tools launch weekly. We evaluate what's actually production-ready versus what's hype, then integrate it cleanly into your existing stack.",
      items: [
        'Vendor & tool evaluation reports',
        'Proof-of-concept builds before commitment',
        'Legacy system integration',
        'Migration planning & execution'
      ]
    },
    '04': {
      text: "Security gets bolted on after a breach for most teams. We build it in from day one — authentication, encryption, and monitoring as core architecture, not an afterthought.",
      items: [
        'Authentication & access control systems',
        'Data encryption at rest & in transit',
        'Vulnerability scanning & penetration testing',
        'Compliance support (SOC 2, GDPR, etc.)'
      ]
    },
    '05': {
      text: "A slow site loses users before they see what you built. We benchmark real-world load times and fix the actual bottleneck, not just the symptom.",
      items: [
        'Core Web Vitals optimization',
        'Database query & indexing review',
        'CDN & caching strategy',
        'Load testing under real traffic conditions'
      ]
    },
    '06': {
      text: "Your API is a contract with every developer who touches it — internal or external. We design it to be predictable, documented, and stable across versions.",
      items: [
        'RESTful & GraphQL API design',
        'Versioning & backward compatibility',
        'Developer documentation',
        'Rate limiting & API security'
      ]
    }
  };

  var cards = document.querySelectorAll('.a-service-card');

  cards.forEach(function (card) {
    var num = card.getAttribute('data-num');
    var detail = serviceDetails[num];
    if (!detail) return;

    var wrap = document.createElement('div');
    wrap.className = 'a-service-expand-wrap';

    var inner = document.createElement('div');
    inner.className = 'a-service-expand-inner';

    var p = document.createElement('p');
    p.textContent = detail.text;
    inner.appendChild(p);

    var ul = document.createElement('ul');
    detail.items.forEach(function (itemText) {
      var li = document.createElement('li');
      li.textContent = itemText;
      ul.appendChild(li);
    });
    inner.appendChild(ul);

    wrap.appendChild(inner);
    card.appendChild(wrap);

    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-expanded', 'false');

    function toggleCard() {
      var isOpen = card.classList.toggle('is-expanded');
      card.setAttribute('aria-expanded', String(isOpen));
    }

    card.addEventListener('click', toggleCard);
    card.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleCard();
      }
    });
  });
})();
