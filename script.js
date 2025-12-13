document.addEventListener('DOMContentLoaded', () => {
        const waButton = document.querySelector('.whatsapp-float');
        const scrollButton = document.getElementById('scroll-to-top');

        // --- 1. WhatsApp Fade-In Logic (UX Improvement) ---
        // Fades in the WhatsApp button after 2 seconds to ensure it doesn't immediately block content.
        setTimeout(() => {
            waButton.style.opacity = '1';
        }, 2000); 

        // --- 2. Scroll-to-Top Logic ---
        
        // Show/Hide the button based on scroll position
        window.onscroll = function() {
            // Check if the user has scrolled down past 200 pixels
            if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
                scrollButton.style.display = "flex"; // Show button
            } else {
                scrollButton.style.display = "none"; // Hide button
            }
        };

        // Smooth scrolling function when the button is clicked
        scrollButton.addEventListener('click', () => {
            // Smoothly scrolls the document to the top
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    });