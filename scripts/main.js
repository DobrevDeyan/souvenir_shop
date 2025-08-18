// Initialize GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeAnimations();
    initializeNavigation();
    initializeGallery();
    
    // Initialize custom image viewer
    initializeCustomImageViewer();
});

// GSAP Animations
function initializeAnimations() {
    // Ensure hero elements are always visible
    gsap.set(['.hero-title', '.hero-subtitle', '.hero-description', '.cta-button'], {
        opacity: 1,
        y: 0,
        clearProps: "all"
    });

    // Simple entrance animation without opacity changes
    gsap.from('.hero-title', {
        duration: 1,
        y: 30,
        ease: 'power2.out',
        delay: 0.2
    });

    gsap.from('.hero-subtitle', {
        duration: 1,
        y: 20,
        ease: 'power2.out',
        delay: 0.4
    });

    gsap.from('.hero-description', {
        duration: 1,
        y: 20,
        ease: 'power2.out',
        delay: 0.6
    });

    gsap.from('.cta-button', {
        duration: 0.8,
        y: 15,
        ease: 'power2.out',
        delay: 0.8
    });

    // Floating shells animation
    gsap.to('.shell', {
        y: -20,
        rotation: 360,
        duration: 3,
        ease: 'power2.inOut',
        stagger: 1,
        repeat: -1,
        yoyo: true
    });

    // Section headers animation
    gsap.from('.section-header', {
        scrollTrigger: {
            trigger: '.section-header',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        },
        duration: 1,
        y: 50,
        opacity: 0,
        ease: 'power3.out'
    });

    // About section animations
    gsap.from('.about-text', {
        scrollTrigger: {
            trigger: '.about-text',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        },
        duration: 1,
        x: -100,
        opacity: 0,
        ease: 'power3.out'
    });

    gsap.from('.feature', {
        scrollTrigger: {
            trigger: '.about-features',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        },
        duration: 0.8,
        y: 50,
        opacity: 0,
        ease: 'power3.out',
        stagger: 0.2
    });

    // Gallery animations
    gsap.from('.gallery-item', {
        scrollTrigger: {
            trigger: '.gallery-grid',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        },
        duration: 0.8,
        y: 50,
        opacity: 0,
        ease: 'power3.out',
        stagger: 0.1
    });

    // Contact section animations
    gsap.from('.contact-item', {
        scrollTrigger: {
            trigger: '.contact-info',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        },
        duration: 0.8,
        x: -50,
        opacity: 0,
        ease: 'power3.out',
        stagger: 0.2
    });

    gsap.from('.contact-form', {
        scrollTrigger: {
            trigger: '.contact-form',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        },
        duration: 1,
        x: 100,
        opacity: 0,
        ease: 'power3.out'
    });

    // Footer animations
    gsap.from('.footer-section', {
        scrollTrigger: {
            trigger: '.footer',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        },
        duration: 0.8,
        y: 30,
        opacity: 0,
        ease: 'power3.out',
        stagger: 0.2
    });
}

// Navigation functionality
function initializeNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Mobile menu toggle
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Navbar background on scroll
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });
}

// Gallery functionality
function initializeGallery() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    // Filter functionality
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            // Filter gallery items
            galleryItems.forEach(item => {
                const category = item.getAttribute('data-category');
                
                if (filter === 'all' || category === filter) {
                    item.style.display = 'block';
                    gsap.to(item, {
                        duration: 0.5,
                        opacity: 1,
                        scale: 1,
                        ease: 'power3.out'
                    });
                } else {
                    gsap.to(item, {
                        duration: 0.3,
                        opacity: 0,
                        scale: 0.8,
                        ease: 'power3.out',
                        onComplete: () => {
                            item.style.display = 'none';
                        }
                    });
                }
            });
        });
    });

    // Gallery item hover effects
    galleryItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            gsap.to(this, {
                duration: 0.3,
                scale: 1.05,
                ease: 'power2.out'
            });
        });

        item.addEventListener('mouseleave', function() {
            gsap.to(this, {
                duration: 0.3,
                scale: 1,
                ease: 'power2.out'
            });
        });
    });
}



// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#38b2ac' : type === 'error' ? '#e53e3e' : '#3182ce'};
        color: white;
        padding: 15px 20px;
        border-radius: 10px;
        box-shadow: 0 5px 20px rgba(0,0,0,0.2);
        z-index: 10000;
        transform: translateX(400px);
        transition: transform 0.3s ease;
        max-width: 300px;
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            notification.remove();
        }, 300);
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.transform = 'translateX(400px)';
            setTimeout(() => {
                notification.remove();
            }, 300);
        }
    }, 5000);
}

// Custom image viewer initialization
function initializeCustomImageViewer() {
    console.log('Initializing custom image viewer');
    createSimpleImageViewer();
}

// Custom image viewer
function createSimpleImageViewer() {
    const galleryItems = document.querySelectorAll('.gallery-item a');
    
    galleryItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            
            const imageUrl = this.getAttribute('href');
            const imageTitle = this.getAttribute('data-title') || 'Изображение';
            
            // Create modal
            const modal = document.createElement('div');
            modal.className = 'custom-modal';
            modal.innerHTML = `
                <div class="custom-modal-content">
                    <span class="custom-modal-close">&times;</span>
                    <div class="custom-modal-image-container">
                        <img src="${imageUrl}" alt="${imageTitle}" loading="lazy">
                    </div>
                    <div class="custom-modal-title">
                        <h3>${imageTitle}</h3>
                    </div>
                    <div class="custom-modal-nav">
                        <button class="custom-modal-prev" title="Предишно изображение">‹</button>
                        <button class="custom-modal-next" title="Следващо изображение">›</button>
                    </div>
                </div>
            `;
            
            // Add styles
            modal.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0,0,0,0.95);
                z-index: 10000;
                display: flex;
                align-items: center;
                justify-content: center;
                opacity: 0;
                transition: all 0.3s ease;
                backdrop-filter: blur(5px);
            `;
            
            document.body.appendChild(modal);
            
            // Show modal with animation
            setTimeout(() => {
                modal.style.opacity = '1';
            }, 10);
            
            // Close functionality
            const closeBtn = modal.querySelector('.custom-modal-close');
            closeBtn.addEventListener('click', () => {
                closeModal(modal);
            });
            
            // Close on background click
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    closeModal(modal);
                }
            });
            
            // Close on Escape key
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape') {
                    closeModal(modal);
                }
            });
            
            // Navigation functionality
            setupModalNavigation(modal, item);
        });
    });
}

// Close modal function
function closeModal(modal) {
    modal.style.opacity = '0';
    modal.style.transform = 'scale(0.9)';
    setTimeout(() => {
        modal.remove();
    }, 300);
}

// Setup modal navigation
function setupModalNavigation(modal, currentItem) {
    const prevBtn = modal.querySelector('.custom-modal-prev');
    const nextBtn = modal.querySelector('.custom-modal-next');
    const allItems = Array.from(document.querySelectorAll('.gallery-item a'));
    const currentIndex = allItems.indexOf(currentItem);
    
    // Previous button
    if (currentIndex > 0) {
        prevBtn.addEventListener('click', () => {
            const prevItem = allItems[currentIndex - 1];
            showImageInModal(prevItem, modal);
        });
    } else {
        prevBtn.style.opacity = '0.5';
        prevBtn.disabled = true;
    }
    
    // Next button
    if (currentIndex < allItems.length - 1) {
        nextBtn.addEventListener('click', () => {
            const nextItem = allItems[currentIndex + 1];
            showImageInModal(nextItem, modal);
        });
    } else {
        nextBtn.style.opacity = '0.5';
        nextBtn.disabled = true;
    }
}

// Show image in existing modal
function showImageInModal(item, modal) {
    const imageUrl = item.getAttribute('href');
    const imageTitle = item.getAttribute('data-title') || 'Изображение';
    
    const imageContainer = modal.querySelector('.custom-modal-image-container img');
    const titleElement = modal.querySelector('.custom-modal-title h3');
    
    // Fade out current image
    imageContainer.style.opacity = '0';
    titleElement.style.opacity = '0';
    
    setTimeout(() => {
        imageContainer.src = imageUrl;
        imageContainer.alt = imageTitle;
        titleElement.textContent = imageTitle;
        
        // Fade in new image
        imageContainer.style.opacity = '1';
        titleElement.style.opacity = '1';
        
        // Update navigation
        setupModalNavigation(modal, item);
    }, 150);
}

// Parallax effect for hero section
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const heroBackground = document.querySelector('.hero-background');
    
    if (heroBackground) {
        heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Loading animation
window.addEventListener('load', function() {
    const loadingElements = document.querySelectorAll('.loading');
    loadingElements.forEach(element => {
        element.classList.add('loaded');
    });
});

// Intersection Observer for lazy loading animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    const animateElements = document.querySelectorAll('.feature, .gallery-item, .contact-item');
    animateElements.forEach(element => {
        observer.observe(element);
    });
});

// Add CSS for animations and fallback modal
const style = document.createElement('style');
style.textContent = `
    .animate-in {
        animation: fadeInUp 0.8s ease forwards;
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .notification-content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 15px;
    }
    
    .notification-close {
        background: none;
        border: none;
        color: white;
        font-size: 20px;
        cursor: pointer;
        padding: 0;
        line-height: 1;
    }
    
    .notification-close:hover {
        opacity: 0.8;
    }
    
    /* Custom modal styles */
    .custom-modal-content {
        position: relative;
        max-width: 95%;
        max-height: 95%;
        text-align: center;
        color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
    }
    
    .custom-modal-image-container {
        position: relative;
        max-width: 100%;
        max-height: 80vh;
    }
    
    .custom-modal-image-container img {
        max-width: 100%;
        max-height: 80vh;
        object-fit: contain;
        border-radius: 15px;
        box-shadow: 0 15px 40px rgba(0,0,0,0.6);
        transition: opacity 0.3s ease;
    }
    
    .custom-modal-title h3 {
        margin: 0;
        font-size: 1.3rem;
        font-weight: 600;
        text-shadow: 2px 2px 4px rgba(0,0,0,0.8);
        transition: opacity 0.3s ease;
    }
    
    .custom-modal-close {
        position: absolute;
        top: -50px;
        right: 0;
        color: white;
        font-size: 35px;
        font-weight: bold;
        cursor: pointer;
        background: none;
        border: none;
        padding: 0;
        line-height: 1;
        transition: all 0.3s ease;
        z-index: 10001;
    }
    
    .custom-modal-close:hover {
        opacity: 0.8;
        transform: scale(1.1);
    }
    
    .custom-modal-nav {
        display: flex;
        gap: 20px;
        margin-top: 20px;
    }
    
    .custom-modal-nav button {
        background: rgba(255,255,255,0.2);
        border: 2px solid rgba(255,255,255,0.3);
        color: white;
        font-size: 24px;
        font-weight: bold;
        padding: 10px 15px;
        border-radius: 50%;
        cursor: pointer;
        transition: all 0.3s ease;
        backdrop-filter: blur(10px);
    }
    
    .custom-modal-nav button:hover:not(:disabled) {
        background: rgba(255,255,255,0.3);
        border-color: rgba(255,255,255,0.5);
        transform: scale(1.1);
    }
    
    .custom-modal-nav button:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
    
    /* Responsive design for modal */
    @media (max-width: 768px) {
        .custom-modal-content {
            max-width: 98%;
            gap: 15px;
        }
        
        .custom-modal-image-container img {
            max-height: 70vh;
        }
        
        .custom-modal-title h3 {
            font-size: 1.1rem;
        }
        
        .custom-modal-nav button {
            padding: 8px 12px;
            font-size: 20px;
        }
    }
`;
document.head.appendChild(style);

// GSAP Parallax effect
function initializeParallaxEffect() {
    const hero = document.querySelector('.hero');
    const heroContent = document.querySelector('.hero-content');
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const heroDescription = document.querySelector('.hero-description');
    const ctaButton = document.querySelector('.cta-button');
    
    if (!hero) return;

    // Scroll-based parallax using GSAP ScrollTrigger
    gsap.to(hero, {
        yPercent: -50,
        ease: "none",
        scrollTrigger: {
            trigger: hero,
            start: "top bottom",
            end: "bottom top",
            scrub: 1
        }
    });

    // Parallax for different elements with different speeds
    gsap.to(heroTitle, {
        yPercent: -30,
        ease: "none",
        scrollTrigger: {
            trigger: hero,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5
        }
    });

    gsap.to(heroSubtitle, {
        yPercent: -20,
        ease: "none",
        scrollTrigger: {
            trigger: hero,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2
        }
    });

    gsap.to(heroDescription, {
        yPercent: -15,
        ease: "none",
        scrollTrigger: {
            trigger: hero,
            start: "top bottom",
            end: "bottom top",
            scrub: 1
        }
    });

    gsap.to(ctaButton, {
        yPercent: -25,
        ease: "none",
        scrollTrigger: {
            trigger: hero,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.3
        }
    });

    // Mouse move parallax effect
    let mouseX = 0;
    let mouseY = 0;

    hero.addEventListener('mousemove', function(e) {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        
        mouseX = (clientX - innerWidth / 2) / innerWidth;
        mouseY = (clientY - innerHeight / 2) / innerHeight;
        
        // Smooth mouse parallax with GSAP
        gsap.to(hero, {
            x: mouseX * 20,
            y: mouseY * 10,
            duration: 0.5,
            ease: "power2.out"
        });

        gsap.to(heroTitle, {
            x: mouseX * 30,
            y: mouseY * 15,
            duration: 0.5,
            ease: "power2.out"
        });

        gsap.to(heroSubtitle, {
            x: mouseX * 25,
            y: mouseY * 12,
            duration: 0.5,
            ease: "power2.out"
        });

        gsap.to(heroDescription, {
            x: mouseX * 20,
            y: mouseY * 10,
            duration: 0.5,
            ease: "power2.out"
        });

        gsap.to(ctaButton, {
            x: mouseX * 35,
            y: mouseY * 18,
            duration: 0.5,
            ease: "power2.out"
        });
    });

    // Reset on mouse leave
    hero.addEventListener('mouseleave', function() {
        gsap.to([hero, heroTitle, heroSubtitle, heroDescription, ctaButton], {
            x: 0,
            y: 0,
            duration: 0.8,
            ease: "power2.out"
        });
    });

    // Subtle floating animation
    gsap.to(hero, {
        y: -15,
        duration: 4,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1
    });

    // Ensure elements are visible (no entrance animation to avoid conflicts)
    gsap.set([heroTitle, heroSubtitle, heroDescription, ctaButton], {
        opacity: 1,
        y: 0,
        clearProps: "all"
    });
}

// Initialize parallax effect
document.addEventListener('DOMContentLoaded', function() {
    initializeParallaxEffect();
}); 