const faqs = document.querySelectorAll(".faq");

faqs.forEach(faq => {
    const button = faq.querySelector(".faq__question");
    
    button.addEventListener("click", () => {
        const isOpen = faq.classList.contains("active");
        faq.classList.toggle("active");
        button.setAttribute("aria-expanded", !isOpen);
    });
});