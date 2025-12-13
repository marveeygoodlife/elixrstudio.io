"use strict";

document.addEventListener('DOMContentLoaded', () => {
        const waButton = document.querySelector('.whatsapp-float');
        const scrollButton = document.getElementById('scroll-to-top');
        const h1Element = document.querySelector('.hero h1');
        const originalText = h1Element.textContent;
        h1Element.textContent = ''; // Clear H1 for typing effect

        // --dynamically type h1 ---
        function typeText(element, text, delay = 90) {
            let i = 0;
            const timer = setInterval(() => {
                if (i < text.length) {
                    element.textContent += text.charAt(i);
                    i++;
                } else {
                    clearInterval(timer);
                }
            }, delay);
        }

         typeText(h1Element, originalText); // 50ms per character for speed


        // --WhatsApp Fade-In Logic
        setTimeout(() => {
            waButton.style.opacity = '1';
        }, 2000); 

        // --Intersection Observer Scroll Reveal
        
        //  start observer when 10% of the element is visible
        const observerOptions = {
            root: null, // relative to the viewport
            rootMargin: '10px',
            threshold: 0.1 // 10% of the item is visible
        };
 // Target objects  for the reveal effect
    const elementToReveal = "section, p, h2, h3, .service-card, .link, .btn, .container";

    const revealElements = Array.from( document.querySelectorAll(elementToReveal));
    revealElements.forEach((element) => {element.classList.add("not-visible")});
    
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // When element scrolls into view, add the 'is-visible' class
                    entry.target.classList.add('is-visible');
                    // Stop observing the element once it's visible
                    observer.unobserve(entry.target); 
                }
            });
        }, observerOptions);

    revealElements.forEach((el) => { observer.observe(el);});

        // --- Scroll-to-Top Logic ---
        
        // Show/Hide the button based on scroll position
        window.onscroll = function() {
            if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
                scrollButton.style.display = "flex"; 
            } else {
                scrollButton.style.display = "none";
            }
        };

        // Smooth scrolling function when the button is clicked
        scrollButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    });
