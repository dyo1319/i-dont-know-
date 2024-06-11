const showMenu = (toggleId,navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    toggle.addEventListener('click',() =>{
        //add show-menu class to nav menu
        nav.classList.toggle('show-menu')
        // Add show-icon to show and hide menu icon
        toggle.classList.toggle('show-icon')
    })
}
showMenu('nav-toggle','nav-menu')




// JavaScript to handle modal visibility
document.addEventListener("DOMContentLoaded", function() {
    const loginLink = document.getElementById('signin-link');
    const modal = document.getElementById('loginModal');
    const closeModal = document.querySelector('.modal .close');

    // Show the modal when login link is clicked
    loginLink.addEventListener('click', function(event) {
        event.preventDefault();
        modal.style.display = 'block';
    });

    // Hide the modal when the close button is clicked
    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    // Hide the modal when clicking outside the modal content
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});

