document.addEventListener('DOMContentLoaded', function() {
    const jobTitles = document.querySelectorAll('.job-title');
    const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
    const visitorCountElement = document.getElementById("visitor-count");

    // Function to toggle job duties visibility
    function toggleJobDuties(event) {
        const duties = event.target.nextElementSibling.nextElementSibling;
        duties.style.display = duties.style.display === 'block' ? 'none' : 'block';
    }

    // Function to switch theme
    function switchTheme(e) {
        const theme = e.target.checked ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }
});