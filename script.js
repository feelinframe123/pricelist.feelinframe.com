// Initialize when document is ready
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Lucide icons with custom settings
    lucide.createIcons({
        attrs: {
            'stroke-width': '1.5',
            'class': 'icon-large'
        }
    });

    // Package data with enhanced message templates
    const packages = {
        basic: {
            name: "BASIC",
            price: "350K",
            duration: "1 jam",
            template: "✨ Hai kak! Aku tertarik dengan Paket BASIC (350K/1jam).\n\nMau tanya:\n- Lokasi foto dimana ya?\n- Kapan kira-kira bisa booking?\n- Proses bookingnya gimana?\n\nThank you! 📸"
        },
        signature: {
            name: "SIGNATURE",
            price: "650K",
            duration: "2 jam",
            template: "💫 Hai kak! Tertarik banget sama Paket SIGNATURE (650K/2jam).\n\nMau tanya:\n- Lokasi yang available dimana aja?\n- Kapan jadwal tersedia?\n- Gimana proses bookingnya?\n\nThank you! 📸"
        },
        duo: {
            name: "DUO",
            price: "450K",
            duration: "1 jam",
            template: "👯 Hai kak! Aku dan temen tertarik sama Paket DUO (450K/1jam).\n\nMau tanya:\n- Lokasi yang recommended dimana?\n- Kapan bisa booking?\n- Proses bookingnya gimana?\n\nThank you! 📸"
        }
    };

    // WhatsApp contact number
    const whatsappNumber = "6282345695620";

    // Function to handle booking with animation
    function bookPackage(packageType) {
        const selectedPackage = packages[packageType];
        if (!selectedPackage) return;

        // Add animation class to button
        const button = document.querySelector(`[data-package="${packageType}"]`);
        const buttonContent = button.querySelector('.button-content');

        // Animate button
        buttonContent.classList.add('booking');
        button.classList.add('active');

        // Create and encode WhatsApp message
        const message = encodeURIComponent(selectedPackage.template);
        const whatsappLink = `https://wa.me/${whatsappNumber}?text=${message}`;

        // Delay opening WhatsApp to show animation
        setTimeout(() => {
            window.open(whatsappLink, '_blank');
            buttonContent.classList.remove('booking');
            button.classList.remove('active');
        }, 300);
    }

    // Function to handle promo inquiry
    function bookWithPromo() {
        const promoTemplate = "✨ Hai kak!\n\nMau tanya tentang promo foto graduation bareng temen (diskon 50K).\n\nBoleh tau:\n- Syarat & ketentuannya apa aja?\n- Kapan bisa booking?\n- Prosesnya gimana?\n\nThank you! 📸";
        const message = encodeURIComponent(promoTemplate);
        const whatsappLink = `https://wa.me/${whatsappNumber}?text=${message}`;
        window.open(whatsappLink, '_blank');
    }

    // Add event listeners to booking buttons
    document.querySelectorAll('[data-package]').forEach(button => {
        button.addEventListener('click', (e) => {
            const packageType = e.currentTarget.dataset.package;
            bookPackage(packageType);
        });

        // Add hover effects
        button.addEventListener('mouseenter', () => {
            button.classList.add('hover');
        });

        button.addEventListener('mouseleave', () => {
            button.classList.remove('hover');
        });
    });

    // Add event listener to promo card
    const promoCard = document.querySelector('.promo-card');
    if (promoCard) {
        promoCard.addEventListener('click', bookWithPromo);
        
        // Add hover effect
        promoCard.addEventListener('mouseenter', () => {
            promoCard.classList.add('hover');
        });

        promoCard.addEventListener('mouseleave', () => {
            promoCard.classList.remove('hover');
        });
    }

    // Add hover effects to feature cards
    document.querySelectorAll('.feature-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.classList.add('hover');
        });

        card.addEventListener('mouseleave', () => {
            card.classList.remove('hover');
        });
    });

    // Add hover effects to pricing cards
    document.querySelectorAll('.pricing-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.classList.add('hover');
        });

        card.addEventListener('mouseleave', () => {
            card.classList.remove('hover');
        });
    });

    // Add smooth scroll for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
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

    // Add loading animation for dynamic content
    function addLoadingAnimation() {
        document.querySelectorAll('.feature-card, .pricing-card, .promo-card').forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
            setTimeout(() => {
                element.style.transition = 'all 0.5s ease';
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, 100);
        });
    }

    // Initialize animations
    addLoadingAnimation();
});