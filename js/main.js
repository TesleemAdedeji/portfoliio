// ========================================
// MAIN JAVASCRIPT FOR PORTFOLIO
// ========================================

// DOM Elements
const loadingScreen = document.getElementById('loadingScreen');
const hamburger = document.getElementById('hamburger');
const navbarMenu = document.querySelector('.navbar-menu');
const navLinks = document.querySelectorAll('.nav-link');
const themeToggle = document.getElementById('themeToggle');
const scrollToTopBtn = document.getElementById('scrollToTop');
const prevTestimonial = document.getElementById('prevTestimonial');
const nextTestimonial = document.getElementById('nextTestimonial');
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');
const contactForm = document.getElementById('contactForm');

// ========================================
// 1. LOADING SCREEN
// ========================================
window.addEventListener('load', () => {
    setTimeout(() => {
        loadingScreen.style.opacity = '0';
        loadingScreen.style.pointerEvents = 'none';
    }, 2500);
});

// ========================================
// 2. HAMBURGER MENU
// ========================================
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navbarMenu.style.display = navbarMenu.style.display === 'flex' ? 'none' : 'flex';
});

// Close menu when link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navbarMenu.style.display = 'none';
    });
});

// ========================================
// 3. DARK/LIGHT MODE TOGGLE
// ========================================
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    
    // Save preference to localStorage
    if (document.body.classList.contains('light-mode')) {
        localStorage.setItem('theme', 'light');
        themeToggle.querySelector('.theme-icon').textContent = '☀️';
    } else {
        localStorage.setItem('theme', 'dark');
        themeToggle.querySelector('.theme-icon').textContent = '🌙';
    }
});

// Load saved theme
window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
        themeToggle.querySelector('.theme-icon').textContent = '☀️';
    }
});

// ========================================
// 4. TYPING ANIMATION
// ========================================
const typingText = document.querySelector('.typing-text');
const text = 'Adedeji Tesleem';
let index = 0;

function typeWriter() {
    if (index < text.length) {
        typingText.textContent = text.substring(0, index + 1);
        index++;
        setTimeout(typeWriter, 100);
    }
}

// Reset and start typing on page load
window.addEventListener('load', () => {
    index = 0;
    typingText.textContent = '';
    typeWriter();
});

// ========================================
// 5. SCROLL TO TOP BUTTON
// ========================================
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.classList.add('show');
    } else {
        scrollToTopBtn.classList.remove('show');
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ========================================
// 6. ANIMATED STATISTICS COUNTER
// ========================================
function animateCounter(element, target) {
    const duration = 2000;
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// Trigger counter animation on scroll
const observerOptions = {
    threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && entry.target.classList.contains('stat-card')) {
            const statNumber = entry.target.querySelector('.stat-number');
            const target = parseInt(statNumber.dataset.target);
            
            if (statNumber.textContent === '0') {
                animateCounter(statNumber, target);
            }
        }
    });
}, observerOptions);

// Observe all stat cards
document.querySelectorAll('.stat-card').forEach(card => {
    observer.observe(card);
});

// ========================================
// 7. PROJECT FILTERING
// ========================================
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        btn.classList.add('active');

        const filter = btn.dataset.filter;

        // Filter projects
        projectCards.forEach(card => {
            if (filter === 'all' || card.dataset.category === filter) {
                card.style.display = 'block';
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'scale(1)';
                }, 10);
            } else {
                card.style.opacity = '0';
                card.style.transform = 'scale(0.8)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
    });
});

// ========================================
// 8. TESTIMONIALS CAROUSEL
// ========================================
const testimonialCards = document.querySelectorAll('.testimonial-card');
const indicators = document.querySelectorAll('.indicator');
let currentSlide = 0;

function showSlide(n) {
    // Hide all slides
    testimonialCards.forEach(card => card.classList.remove('active'));
    indicators.forEach(ind => ind.classList.remove('active'));

    // Show current slide
    testimonialCards[n].classList.add('active');
    indicators[n].classList.add('active');
}

prevTestimonial.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + testimonialCards.length) % testimonialCards.length;
    showSlide(currentSlide);
});

nextTestimonial.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % testimonialCards.length;
    showSlide(currentSlide);
});

// Indicator click
indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        currentSlide = index;
        showSlide(currentSlide);
    });
});

// Auto rotate testimonials
setInterval(() => {
    currentSlide = (currentSlide + 1) % testimonialCards.length;
    showSlide(currentSlide);
}, 6000);

// ========================================
// 9. CONTACT FORM
// ========================================
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formInputs = contactForm.querySelectorAll('.form-input');
    const name = formInputs[0].value;
    const email = formInputs[1].value;
    const subject = formInputs[2].value;
    const message = formInputs[3].value;

    // Basic validation
    if (!name || !email || !subject || !message) {
        showNotification('Please fill in all fields', 'error');
        return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showNotification('Please enter a valid email address', 'error');
        return;
    }

    // Here you would typically send the form data to a server
    // For now, we'll just show a success message
    showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');

    // Reset form
    contactForm.reset();
});

// ========================================
// 10. NOTIFICATION SYSTEM
// ========================================
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? 'linear-gradient(135deg, #00ff88, #00cc66)' : '#ff4444'};
        color: ${type === 'success' ? '#000' : '#fff'};
        padding: 15px 25px;
        border-radius: 12px;
        font-weight: 600;
        z-index: 10000;
        animation: slideInRight 0.3s ease-in-out;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
    `;

    document.body.appendChild(notification);

    // Remove notification after 4 seconds
    setTimeout(() => {
        notification.style.animation = 'slideInRight 0.3s ease-in-out reverse';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 4000);
}

// ========================================
// 11. SMOOTH SCROLL FOR NAV LINKS
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ========================================
// 12. SCROLL ANIMATIONS
// ========================================
function observeElements() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all cards and content elements
    const elementsToObserve = document.querySelectorAll(
        '.skill-card, .project-card, .service-card, .timeline-content, .info-card'
    );

    elementsToObserve.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease-in-out, transform 0.6s ease-in-out';
        observer.observe(element);
    });
}

// Start observing when DOM is ready
document.addEventListener('DOMContentLoaded', observeElements);

// ========================================
// 13. NAVBAR BACKGROUND ON SCROLL
// ========================================
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(26, 26, 46, 0.98)';
        navbar.style.boxShadow = '0 10px 30px rgba(0, 212, 255, 0.1)';
    } else {
        navbar.style.background = 'rgba(26, 26, 46, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// ========================================
// 14. ACTIVE NAV LINK
// ========================================
window.addEventListener('scroll', () => {
    let current = '';

    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Add CSS for active nav link
const style = document.createElement('style');
style.textContent = `
    .nav-link.active {
        color: var(--primary-color);
    }

    .nav-link.active::after {
        width: 100%;
    }
`;
document.head.appendChild(style);

// ========================================
// 15. PERFORMANCE OPTIMIZATION
// ========================================
// Lazy load images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
}

// ========================================
// 16. KEYBOARD NAVIGATION
// ========================================
document.addEventListener('keydown', (e) => {
    // Escape key closes mobile menu
    if (e.key === 'Escape' && hamburger.classList.contains('active')) {
        hamburger.classList.remove('active');
        navbarMenu.style.display = 'none';
    }

    // Keyboard navigation for testimonials
    if (e.key === 'ArrowLeft') {
        prevTestimonial.click();
    } else if (e.key === 'ArrowRight') {
        nextTestimonial.click();
    }
});

// ========================================
// 17. ACCESSIBILITY IMPROVEMENTS
// ========================================
// Add focus styles for keyboard navigation
const focusStyle = document.createElement('style');
focusStyle.textContent = `
    *:focus-visible {
        outline: 2px solid var(--primary-color);
        outline-offset: 2px;
    }

    button:focus-visible,
    a:focus-visible {
        outline: 2px solid var(--primary-color);
        outline-offset: 2px;
    }
`;
document.head.appendChild(focusStyle);

// ========================================
// 18. PAGE TRANSITION EFFECTS
// ========================================
// Smooth page transitions
window.addEventListener('beforeunload', () => {
    document.body.style.opacity = '0.5';
    document.body.style.transition = 'opacity 0.3s ease-in-out';
});

// ========================================
// 19. DEVICE DETECTION
// ========================================
const isMobile = window.innerWidth <= 768;

// Adjust animations based on device
if (isMobile) {
    document.querySelectorAll('[style*="animation"]').forEach(element => {
        element.style.animationDuration = '0.3s';
    });
}

// ========================================
// 20. CONSOLE MESSAGE
// ========================================
console.log('%c Welcome to Adedeji Tesleem\'s Portfolio! ', 'background: linear-gradient(135deg, #00d4ff, #0099cc); color: #000; padding: 10px; border-radius: 5px; font-weight: bold; font-size: 14px;');
console.log('%c Built with HTML5, CSS3 & JavaScript ', 'background: #1a1a2e; color: #00d4ff; padding: 8px; border-radius: 3px; font-size: 12px;');
console.log('%c Feel free to check out the source code! ', 'background: #00d4ff; color: #000; padding: 8px; border-radius: 3px; font-size: 12px; font-weight: bold;');

// ========================================
// 21. FORM FOCUS EFFECTS
// ========================================
const formInputs = document.querySelectorAll('.form-input');

formInputs.forEach(input => {
    input.addEventListener('focus', function() {
        this.parentElement.style.borderColor = 'var(--primary-color)';
    });

    input.addEventListener('blur', function() {
        this.parentElement.style.borderColor = 'rgba(0, 212, 255, 0.2)';
    });
});

// ========================================
// 22. SCROLL PROGRESS INDICATOR
// ========================================
function updateScrollProgress() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

    // This can be used to update a progress bar if needed
    document.documentElement.style.setProperty('--scroll-progress', scrollPercent + '%');
}

window.addEventListener('scroll', updateScrollProgress);

// ========================================
// 24. RESUME DOWNLOAD
// ========================================
const downloadBtn = document.querySelector('.btn[download]');
if (downloadBtn) {
    downloadBtn.addEventListener('click', (e) => {
        // This would typically link to a resume file
        // For now, we'll show a message
        showNotification('Resume download starting...', 'success');
    });
}

// ========================================
// 24. PROJECT CARD INTERACTIONS
// ========================================
projectCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        if (window.innerWidth > 768) {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        }
    });

    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// ========================================
// 25. UTILITY FUNCTIONS
// ========================================

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for performance
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// ========================================
// 26. SEO & METADATA
// ========================================
// Update page title and meta tags dynamically if needed
function updatePageMetadata(title, description) {
    document.title = title;
    document.querySelector('meta[name="description"]').setAttribute('content', description);
}

// ========================================
// INITIALIZATION
// ========================================
console.log('Portfolio loaded successfully!');
console.log('All interactive features are ready to use.');