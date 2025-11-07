function updateClock() {
    const cards = document.querySelectorAll(".clock-card");

    cards.forEach(card => {
        const city = card.getAttribute("data-city");
        const timezone = card.getAttribute("data-timezone");

        const now = new Date().toLocaleString("en-US", {
            timeZone: timezone,
            hour: "2-digit",
            minute: "2-digit",
            hour12: true
        });

        const date = new Date().toLocaleString("en-US", {
            timeZone: timezone,
            weekday: "long",
            month: "short",
            day: "2-digit",
            year: "numeric"
        });

        card.innerHTML = `
            <div class="city">${city}</div>
            <div class="time">${now}</div>
            <div class="date">${date}</div>
        `;
    });
}

setInterval(updateClock, 1000);
updateClock();