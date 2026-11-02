
const searchBox = document.getElementById("searchBox");


const genreFilter = document.getElementById("genreFilter");


const animeItems = document.querySelectorAll(".anime-item");


const resultCount = document.getElementById("resultCount");


const emptyMessage = document.getElementById("emptyMessage");



function filterAnime() {

    const searchText = searchBox.value.toLowerCase();

    const selectedGenre = genreFilter.value;

    let visible = 0;

    animeItems.forEach(function(item) {

        const title = item.dataset.title.toLowerCase();

        const genres = item.dataset.genre;

        const matchesText = title.includes(searchText);

        const matchesGenre =
            selectedGenre === "all" ||
            genres.includes(selectedGenre);

        if (matchesText && matchesGenre) {

            item.style.display = "";

            visible++;

        } else {

            item.style.display = "none";

        }

    });

    // DISPLAY NUMBER OF RESULTS
    resultCount.textContent = visible + " anime found";

    // DISPLAY MESSAGE IF NO ANIME IS FOUND
    emptyMessage.hidden = visible !== 0;

}


// RUN SEARCH WHEN USER TYPES
if (searchBox && genreFilter) {

    searchBox.addEventListener("input", filterAnime);

    genreFilter.addEventListener("change", filterAnime);

    filterAnime();

}


// ANIME INFORMATION BUTTONS
const infoButtons = document.querySelectorAll(".info-btn");

infoButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const animeName = button.dataset.title;

        alert("You selected " + animeName);

    });

});