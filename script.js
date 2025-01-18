// Initialize Lucide icons
lucide.createIcons();

// Packages data
const packages = {
    basic: {
        name: "BASIC",
        price: "350K",
        duration: "1 jam",
        template: "Hai kak! Aku tertarik dengan Paket BASIC✨ (350K/1jam). Mau tanya-tanya dulu dong~"
    },
    signature: {
        name: "SIGNATURE",
        price: "650K",
        duration: "2 jam",
        template: "Hai kak! Pengen banget booking Paket SIGNATURE💫 (650K/2jam). Info more please~"
    },
    duo: {
        name: "DUO",
        price: "450K",
        duration: "1 jam",
        template: "Hai kak! Aku sama bestie tertarik sama Paket DUO👯 (450K/1jam). Boleh info lebih?"
    }
};

// WhatsApp contact number
const whatsappNumber = "6282345695620";

// Function to handle package booking
function bookPackage(packageType) {
    const selectedPackage = packages[packageType];
    if (!selectedPackage) return;

    // Create WhatsApp link with message template
    const message = encodeURIComponent(selectedPackage.template);
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${message}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappLink, '_blank');
}

// Function to handle promo booking
function bookWithPromo() {
    const message = encodeURIComponent("Hai kak! Aku mau booking bareng teman nih buat dapet promo potongan 50K. Boleh info lebih detail? ✨");
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(whatsappLink, '_blank');
}

// Add hover effects to pricing cards
document.querySelectorAll('.pricing-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.02)';
        card.style.borderColor = 'rgba(13, 148, 136, 0.3)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';
        card.style.borderColor = '';
    });
});

// Add click effect to book buttons
document.querySelectorAll('.book-button').forEach(button => {
    button.addEventListener('mousedown', () => {
        button.style.transform = 'scale(0.95)';
    });

    button.addEventListener('mouseup', () => {
        button.style.transform = 'scale(1)';
    });

    button.addEventListener('mouseleave', () => {
        button.style.transform = 'scale(1)';
    });
});

// Handle promo banner click
document.querySelector('.promo-card').addEventListener('click', () => {
    bookWithPromo();
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

// Optional: Add loading animation for images
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('load', () => {
        img.classList.add('loaded');
    });
});

// Optional: Add simple form validation if needed
function validateForm(formElement) {
    const inputs = formElement.querySelectorAll('input[required], textarea[required]');
    let isValid = true;

    inputs.forEach(input => {
        if (!input.value.trim()) {
            isValid = false;
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    });

    return isValid;
}

// Optional: Add success message after booking
function showBookingSuccess() {
    const successMessage = document.createElement('div');
    successMessage.className = 'success-message';
    successMessage.textContent = 'Redirecting to WhatsApp...';
    document.body.appendChild(successMessage);

    setTimeout(() => {
        successMessage.remove();
    }, 2000);
}

// Event listener for booking buttons
document.addEventListener('DOMContentLoaded', () => {
    // Add click handlers for all booking buttons
    document.querySelectorAll('[data-package]').forEach(button => {
        button.addEventListener('click', (e) => {
            const packageType = e.target.dataset.package;
            bookPackage(packageType);
            showBookingSuccess();
        });
    });

    // Initialize any additional UI enhancements
    initializeUI();
});

function initializeUI() {
    // Add any additional UI initialization here
    // For example, tooltip initialization, modal setup, etc.
    
    // Add smooth transitions
    document.body.classList.add('loaded');
}