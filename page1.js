function toggleRecommended() {
    let hiddenEvents = document.querySelectorAll('.event-card.hidden');
    hiddenEvents.forEach(event => event.classList.toggle('hidden'));
    let button = document.querySelector('.view-more');
    button.textContent = button.textContent === "View More" ? "View Less" : "View More";
}