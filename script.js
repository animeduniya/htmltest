const searchButton = document.getElementById('searchButton');
const searchInput = document.getElementById('search');
const animeList = document.getElementById('animeList');

// Replace with the actual API URL
const API_BASE_URL = "https://justalk-api.com/";

searchButton.addEventListener('click', async () => {
    const query = searchInput.value.trim();
    if (!query) {
        alert('Please enter an anime name!');
        return;
    }

    const response = await fetch(`${API_BASE_URL}/search?title=${query}`);
    const data = await response.json();

    displayAnimes(data);
});

function displayAnimes(animes) {
    animeList.innerHTML = ''; // Clear previous results

    animes.forEach(anime => {
        const animeCard = document.createElement('div');
        animeCard.className = 'animeCard';

        animeCard.innerHTML = `
            <img src="${anime.image_url}" alt="${anime.title}">
            <h3>${anime.title}</h3>
            <p>${anime.synopsis}</p>
            <a href="${anime.streaming_link}" target="_blank">Watch Now</a>
        `;

        animeList.appendChild(animeCard);
    });
}
