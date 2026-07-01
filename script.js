// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const tabNav = document.getElementById('tabNav');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('active');
    tabNav.classList.toggle('active');
});

// Tab functionality
document.querySelectorAll('.tab-button').forEach(button => {
    button.addEventListener('click', function() {
        // Get the tab name from data attribute
        const tabName = this.getAttribute('data-tab');
        
        // Remove active class from all buttons and panes
        document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll('.tab-pane').forEach(pane => pane.classList.remove('active'));
        
        // Add active class to clicked button and corresponding pane
        this.classList.add('active');
        document.getElementById(tabName).classList.add('active');
        
        // Close mobile menu after selection
        if (window.innerWidth <= 768) {
            hamburger.classList.remove('active');
            tabNav.classList.remove('active');
        }
    });
});