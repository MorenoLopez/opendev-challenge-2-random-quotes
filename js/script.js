async function generateQuote() {
    try {
        const response = await fetch('../data/quotes.json');
        const data = await response.json();
        const quotes = data.quotes;
        const randomIndex = Math.floor(Math.random() * quotes.length);
        let quote = quotes[randomIndex]?.text;
        let author = quotes[randomIndex]?.author;

        const quoteElement = document.getElementById("quote");

        const animations = ["fade-in", "slide-in", "zoom-in", "flip-in", "bounce-in", "rotate-in", "glitch", "spiral", "flash"];
        const randomAnimation = animations[Math.floor(Math.random() * animations.length)];

        quoteElement.style.opacity = "0";

        setTimeout(() => {
            quoteElement.innerHTML = `« ${quote.replace(/\?/g, "?<br>")} » <br><br>~ <strong>${author}</strong> ~`;
            quoteElement.className = "";
            quoteElement.classList.add(randomAnimation);
            console.log(randomAnimation);
            quoteElement.style.opacity = "1";
        }, 300);
    } catch (error) {
        console.error("Erreur lors du chargement :", error);
        document.getElementById("quote").innerHTML = "Désolé, impossible de charger les citations pour le moment.";
    }
}

window.onload = generateQuote;