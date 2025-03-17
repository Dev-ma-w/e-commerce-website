document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const nav = document.querySelector('.nav');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        nav.classList.toggle('active');
    });
});
// Scroll smooth effect for hero buttons
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.btn');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        });
    });
});
// JavaScript for filtering portfolio items by category
document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filter = button.getAttribute('data-filter');

            // Show/Hide portfolio items based on the filter
            portfolioItems.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
});
// JavaScript for adding items to the shopping cart
document.addEventListener('DOMContentLoaded', () => {
    const cart = [];
    const buttons = document.querySelectorAll('.add-to-cart-btn');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const itemId = button.getAttribute('data-id');
            const item = {
                id: itemId,
                name: button.previousElementSibling.previousElementSibling.textContent,
                price: button.previousElementSibling.textContent
            };
            cart.push(item);
            alert(`${item.name} added to cart!`);
            console.log(cart); // You can handle cart functionality here.
        });
    });
});
// JavaScript for skills section (Optional for animations)
document.addEventListener('DOMContentLoaded', () => {
    const progressBars = document.querySelectorAll('.progress-bar');

    progressBars.forEach(bar => {
        // Simulate loading progress
        bar.style.width = bar.style.width; // Ensure the width is applied
    });
});
// JavaScript for contact form submission
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default form submission

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Simple validation (can be enhanced)
        if (name && email && message) {
            alert(`Thank you, ${name}! Your message has been sent.`);
            contactForm.reset(); // Clear the form
        } else {
            alert('Please fill in all fields.');
        }
    });
});
// JavaScript for newsletter signup
document.addEventListener('DOMContentLoaded', () => {
    const newsletterForm = document.getElementById('newsletter-form');
    const confirmationMessage = document.getElementById('confirmation-message');

    newsletterForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default form submission

        const email = document.getElementById('email').value;

        // Simple validation (can be enhanced)
        if (email) {
            confirmationMessage.textContent = `Thank you for subscribing, ${email}!`;
            confirmationMessage.style.color = "#a8e6cf"; // Change color of confirmation message
            newsletterForm.reset(); // Clear the form
        } else {
            confirmationMessage.textContent = 'Please enter a valid email address.';
            confirmationMessage.style.color = "#ff5722"; // Change color for error message
        }
    });
});
// JavaScript for footer functionality (if needed)
document.addEventListener('DOMContentLoaded', () => {
    // Example: Add event listeners for social media links (if needed)
    const socialLinks = document.querySelectorAll('.social-media a');

    socialLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            // Placeholder for potential tracking or additional functionality
            console.log(`Clicked on ${link.textContent}`);
        });
    });
});
