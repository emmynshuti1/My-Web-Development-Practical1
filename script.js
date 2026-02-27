document.addEventListener('DOMContentLoaded', function () {

    // ===== PERSISTENT DARK MODE =====
    // Check localStorage for saved preference
    const savedDarkMode = localStorage.getItem('darkMode');
    const allDarkModeBtns = document.querySelectorAll('#darkModeBtn');

    // Apply dark mode if previously enabled
    if (savedDarkMode === 'enabled') {
        document.body.classList.add('dark-mode');
    }

    // Update all dark mode buttons' text based on current mode
    function updateDarkModeButtons() {
        const isDark = document.body.classList.contains('dark-mode');
        const buttonText = isDark ? 'Switch to Light Mode' : 'Toggle Dark Mode';
        allDarkModeBtns.forEach(btn => {
            btn.textContent = buttonText;
        });
    }

    // Initial button text update
    updateDarkModeButtons();

    // Dark mode toggle function
    function toggleDarkMode() {
        document.body.classList.toggle('dark-mode');
        const isDark = document.body.classList.contains('dark-mode');
        localStorage.setItem('darkMode', isDark ? 'enabled' : 'disabled');
        updateDarkModeButtons();
    }

    // Attach event listeners to all dark mode buttons
    allDarkModeBtns.forEach(btn => {
        btn.addEventListener('click', toggleDarkMode);
    });

    // ===== TASK 5: JAVASCRIPT INTERACTIVITY (5 FEATURES) =====

    // 1. Alert button
    const alertBtn = document.getElementById('alertBtn');
    if (alertBtn) {
        alertBtn.addEventListener('click', () => alert('🎉 Hello! This is a button click alert.'));
    }

    // 2. Change greeting text
    const changeTextBtn = document.getElementById('changeTextBtn');
    const greeting = document.getElementById('greeting');
    if (changeTextBtn && greeting) {
        const messages = [
            'Hello! Welcome to my page.',
            'Thanks for visiting! 😊',
            'JavaScript makes websites interactive!',
            'Keep coding and learning!',
            'You clicked the button!'
        ];
        let index = 0;
        changeTextBtn.addEventListener('click', () => {
            index = (index + 1) % messages.length;
            greeting.textContent = messages[index];
        });
    }

    // 3. Display current date and time
    const showDateTimeBtn = document.getElementById('showDateTimeBtn');
    const dateTimeDisplay = document.getElementById('dateTimeDisplay');
    if (showDateTimeBtn && dateTimeDisplay) {
        showDateTimeBtn.addEventListener('click', () => {
            const now = new Date();
            dateTimeDisplay.textContent = '📅 ' + now.toLocaleString();
        });
        // Show on load
        const now = new Date();
        dateTimeDisplay.textContent = '📅 ' + now.toLocaleString();
    }

    // 4. Show/hide the marks table section
    const toggleSectionBtn = document.getElementById('toggleSectionBtn');
    const marksSection = document.getElementById('marksSection');
    if (toggleSectionBtn && marksSection) {
        toggleSectionBtn.addEventListener('click', () => {
            const isHidden = marksSection.style.display === 'none';
            marksSection.style.display = isHidden ? 'block' : 'none';
            toggleSectionBtn.textContent = isHidden ? 'Hide Table' : 'Show Table';
        });
        // Initialize
        toggleSectionBtn.textContent = 'Hide Table';
    }

    // ===== TASK 4: FORM VALIDATION =====
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const fullname = document.getElementById('fullname').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            if (!fullname || !email || !message) {
                alert('❌ Error: All fields must be filled out.');
            } else if (!email.includes('@')) {
                alert('❌ Error: Email must contain "@".');
            } else {
                alert('✅ Success: Form submitted! (Validation passed)');
                // Optionally reset
                // contactForm.reset();
            }
        });
    }

});