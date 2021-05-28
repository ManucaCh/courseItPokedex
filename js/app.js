async function fetchData() {
  const inputValue = document.getElementById("pokemonSearch").value;
  const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${inputValue}`);
  const json = await data.json();
  document.getElementById("pokemonResult").innerText = json.name;
  document.getElementById("pokemonImage").src = json.sprites.front_default;

  console.log(json);
}

function enterInput(e) {
  if (e.keycode === 13) {
    fetchData();
  }
}
