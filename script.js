document.addEventListener('DOMContentLoaded', () => {
    function updateTime() {
        const now = new Date();
        const utcTime = now.toUTCString().split(' ')[4];
        document.getElementById('currentTimeUTC').textContent = utcTime;

        const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const currentDay = daysOfWeek[now.getUTCDay()];
        document.getElementById('currentDay').textContent = currentDay;
    }

    updateTime();
    setInterval(updateTime, 1000);  // Update the time every second

    // Toggle details visibility
    window.toggleDetails = function(id) {
        const details = document.getElementById(id);
        if (details.classList.contains('hidden')) {
            details.classList.remove('hidden');
        } else {
            details.classList.add('hidden');
        }
    };
});
