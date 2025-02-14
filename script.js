document.addEventListener("DOMContentLoaded", function () {
    const textArray = [
        "Enjoy free delivery on all orders above ₹500.",
        "For international orders, reach out to us on Instagram or WhatsApp.",
        "We welcome bulk and wholesale orders with special discounts!"
    ];
    let textIndex = 0;
    const topTextElement = document.querySelector(".top-text");
    
    function updateText() {
        topTextElement.textContent = textArray[textIndex];
        textIndex = (textIndex + 1) % textArray.length;
    }
    
    setInterval(updateText, 4000);
    updateText();
});
