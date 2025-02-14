document.addEventListener("DOMContentLoaded", function() {
    // Swiping Text
    const texts = [
        "Enjoy free delivery on all orders above ₹500.",
        "For international orders, reach out to us on Instagram or WhatsApp.",
        "We welcome bulk and wholesale orders with special discounts!"
    ];
    let index = 0;
    function changeText() {
        document.getElementById("swiping-text").innerText = texts[index];
        index = (index + 1) % texts.length;
    }
    setInterval(changeText, 4000); // Change every 4 seconds

    // Mobile Menu Toggle
    const menuButton = document.getElementById("menu-button");
    const navLinks = document.getElementById("nav-links");

    menuButton.addEventListener("click", function() {
        navLinks.classList.toggle("active");
    });
});
