document.addEventListener('DOMContentLoaded', function() {
    const jobTitles = document.querySelectorAll('.job-title');
    const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
    
    // Function to toggle job duties visibility
    function toggleJobDuties(event) {
        const jobElement = event.target.closest('.job');
        const duties = jobElement.querySelector('ul');
        if (duties) {
            duties.style.display = duties.style.display === 'block' ? 'none' : 'block';
        }
    }

    // Function to switch theme
    function switchTheme(e) {
        const theme = e.target.checked ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }

    // Add click event listeners to all job titles
    jobTitles.forEach(title => {
        title.addEventListener('click', toggleJobDuties);
    });

    // Add event listener for theme switch
    toggleSwitch.addEventListener('change', switchTheme);

    // Check for saved theme preference
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);
        if (currentTheme === 'dark') {
            toggleSwitch.checked = true;
        }
    }
});