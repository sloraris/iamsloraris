function initMobileMenu() {
    const details = document.getElementById('mobile-menu');
    const icon = document.getElementById('hamburger-icon');
    const paths = icon.querySelectorAll('path');
    const menu = details.querySelector('ul');

    // Function to toggle the icon animation
    const toggleIcon = (isOpen) => {
        if (isOpen) {
            paths[0].style.transform = 'rotate(45deg) translate(0px, 6px) scaleX(1.6)';
            paths[1].style.opacity = '0';
            paths[2].style.transform = 'rotate(-45deg) translate(0px, -6px) scaleX(1.6)';
            // Force animation restart
            menu.classList.remove('mobile-nav-menu');
            void menu.offsetWidth; // Trigger reflow
            menu.classList.add('mobile-nav-menu');
        } else {
            paths[0].style.transform = 'none';
            paths[1].style.opacity = '1';
            paths[2].style.transform = 'none';
            // Force animation restart after animation is complete
            setTimeout(() => {
                menu.classList.remove('mobile-nav-menu');
                void menu.offsetWidth; // Trigger reflow
                menu.classList.add('mobile-nav-menu');
            }, 200);
        }
    };

    // Reset animation state on page load/transition
    if (!details.hasAttribute('open')) {
        toggleIcon(false);
    }

    // Watch for details open/close
    details.addEventListener('toggle', (e) => {
        toggleIcon(details.open);
    });

    document.addEventListener('click', (e) => {
        if (!details.contains(e.target)) {
            details.removeAttribute('open');
            toggleIcon(false);
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            details.removeAttribute('open');
            toggleIcon(false);
        }
    });
}

// Initialize when the DOM is ready and after page transitions
document.addEventListener('astro:page-load', initMobileMenu);
