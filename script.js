// =========================================
//   BHARATNATYAM GROUNDS — script.js
// =========================================

document.addEventListener('DOMContentLoaded', () => {
    
    // HAMBURGER MENU
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    const navItems = document.querySelectorAll('.nav-link');

    const toggleMenu = () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
        // Prevent body scroll when menu is open
        document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
    };

    hamburger.addEventListener('click', toggleMenu);

    // Close menu when clicking a link
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) toggleMenu();
        });
    });

    // LIGHTBOX AND LIGHTHOUSE EFFECT
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxClose = document.getElementById('lightboxClose');

    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            // Lighthouse Sweep Animation
            item.classList.add('clicked');
            
            // Wait for sweep to finish slightly then open lightbox
            setTimeout(() => {
                const imgPath = item.getAttribute('data-img');
                lightboxImg.src = imgPath;
                lightbox.classList.add('active');
                item.classList.remove('clicked');
            }, 300);
        });
    });

    // Close Lightbox
    const closeLightbox = () => {
        lightbox.classList.remove('active');
    };

    if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightbox();
    });

    // Close with Escape key
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeLightbox();
            if (navLinks.classList.contains('active')) toggleMenu();
        }
    });

    // BUTTON CLICK HANDLERS (TOGGLE/SUCCES EFFECT)
    const buttons = document.querySelectorAll('button:not(.hamburger)');
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            btn.style.transform = 'scale(0.95)';
            setTimeout(() => {
                btn.style.transform = '';
            }, 100);
        });
    });

    // FORM SUBMISSION MOCKUP
    const btnSubmitTop = document.getElementById('btnSubmitTop');
    const registrationForm = document.getElementById('registrationForm');

    if (btnSubmitTop && registrationForm) {
        btnSubmitTop.addEventListener('click', (e) => {
            e.preventDefault();
            const inputs = registrationForm.querySelectorAll('input');
            let allFilled = true;
            inputs.forEach(input => {
                if (!input.value) {
                    allFilled = false;
                    input.style.borderColor = 'red';
                    setTimeout(() => input.style.borderColor = '', 2000);
                }
            });

            if (allFilled) {
                alert('Registration Submitted Successfully! We will contact you soon. 🙏');
                registrationForm.reset();
            } else {
                alert('Please fill in all fields before submitting.');
            }
        });
    }

    // NAVIGATION SMOOTH SCROLL (Responsive offset)
    navLinks.addEventListener('click', (e) => {
        if (e.target.classList.contains('nav-link')) {
            e.preventDefault();
            const targetId = e.target.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                const headerOffset = 70;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }
    });

    // SOCIAL AND WHATSAPP CLICKS
    const socialIcons = document.querySelectorAll('.social-icon');
    socialIcons.forEach(icon => {
        icon.addEventListener('click', () => {
            icon.style.transform = 'scale(1.3) rotate(10deg)';
            setTimeout(() => icon.style.transform = '', 300);
        });
    });

    const waLinks = document.querySelectorAll('.philosophy-wa-img, .footer-wa-img');
    waLinks.forEach(link => {
        link.addEventListener('click', () => {
            window.open('https://wa.me/919999123456', '_blank');
        });
    });

    const btnDiscover = document.getElementById('btnDiscover');
    if (btnDiscover) {
        btnDiscover.addEventListener('click', () => {
            alert('Opening Full Gallery... 🙏');
        });
    }

    const btnJoin = document.getElementById('btnJoin');
    if (btnJoin) {
        btnJoin.addEventListener('click', () => {
            const enrollment = document.getElementById('enrollment');
            if (enrollment) {
                const headerOffset = 70;
                const elementPosition = enrollment.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    }

});
