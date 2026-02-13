// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
        
        // Change icon based on state
        const icon = hamburger.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
}

// Booking Form Logic
const bookingForm = document.getElementById('bookingForm');

if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const pickup = document.getElementById('pickup').value;
        const dropoff = document.getElementById('dropoff').value;
        
        if (!pickup || !dropoff) {
            alert('Please select both pickup and drop-off locations.');
            return;
        }

        if (pickup === dropoff) {
            alert('Pickup and drop-off locations cannot be the same!');
            return;
        }

        // Simulate Booking Request
        const btn = bookingForm.querySelector('button[type="submit"]');
        const originalText = btn.innerText;
        
        btn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> Finding Driver...';
        btn.disabled = true;

        setTimeout(() => {
            alert(`Ride Confirmed! \n\nDriver: Ramesh Kumar\nVehicle: HR-07-E-1234\nPickup: ${pickup}\nETA: 2 mins`);
            btn.innerText = originalText;
            btn.disabled = false;
            bookingForm.reset();
        }, 2000);
    });
}

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
            // Close mobile menu if open
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                const icon = hamburger.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        }
    });
});
