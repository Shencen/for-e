document.addEventListener("DOMContentLoaded", function() {
    const caption = document.getElementById("caption");
    const text = caption.textContent;
    caption.innerHTML = "";
    const colors = ["#1976d2", "#81c784"]; // Darker blue and softer orange

    for (let i = 0; i < text.length; i++) {
        const span = document.createElement("span");
        span.textContent = text[i];
        span.style.color = colors[i % colors.length];
        caption.appendChild(span);
    }

    let index = 0;
    setInterval(() => {
        const spans = caption.querySelectorAll("span");
        spans.forEach((span, i) => {
            span.style.transition = "color 0.5s ease";
            span.style.color = colors[(i + index) % colors.length];
        });
        index++;
    }, 500); // Adjust the interval for smoother gradient effect
});
