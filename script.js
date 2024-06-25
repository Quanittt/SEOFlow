document.addEventListener('DOMContentLoaded', function() {
    const ddBtn = document.getElementById('dropdown-btn');
    const ddList = document.getElementById('dropdown-menu');

    function toggleMenu() {
        if (window.innerWidth < 928) {
            ddList.classList.toggle('active');
        }
    }

    function handleResize() {
        if (window.innerWidth >= 928) {
            ddList.classList.remove('active');
        }
    }

    ddBtn.addEventListener('click', toggleMenu);
    window.addEventListener('resize', handleResize);

    // Initial check
    handleResize();
});
