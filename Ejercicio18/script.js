let currentPage = 1;

$(document).ready(function () {
  loadPokemonList();

  $("#prev-btn").on("click", function () {
    if (currentPage > 1) {
      currentPage--;
      loadPokemonList();
    }
  });

  $("#next-btn").on("click", function () {
    currentPage++;
    loadPokemonList();
  });
});

function loadPokemonList() {
  const apiUrl = `https://pokeapi.co/api/v2/pokemon?offset=${(currentPage - 1) * 20}&limit=20`;

  $("#pokemon-list").empty();

  $.get(apiUrl, function (data) {
    data.results.forEach(function (pokemon) {
      loadPokemonDetails(pokemon.url);
    });

    $("#prev-btn").prop("disabled", currentPage === 1);
  });
}

function loadPokemonDetails(url) {
  $.get(url, function (pokemon) {
    const abilities = pokemon.abilities.map((ability) => ability.ability.name).join(", ");
    const imageUrl = pokemon.sprites.front_default;

    const cardHtml = `<div class="pokemon-card">
                        <h3>${pokemon.name}</h3>
                        <img src="${imageUrl}" alt="${pokemon.name}">
                        <p>Peso: ${pokemon.weight}</p>
                        <p>Experiencia: ${pokemon.base_experience}</p>
                        <p>Habilidades: ${abilities}</p>
                      </div>`;

    $("#pokemon-list").append(cardHtml);

    animatePokemonCards();
  });
}

function animatePokemonCards() {
  $(".pokemon-card").addClass("animate__animated animate__fadeIn");
}
