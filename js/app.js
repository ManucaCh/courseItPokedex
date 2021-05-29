async function fetchData() {
  const inputValue = document.getElementById("pokemonSearch").value;
  const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${inputValue}`);
  const json = await data.json();
  //   console.log(typeof data);

  if (0 < inputValue && inputValue < 898) {
    document.getElementById("pokemonResult").innerText = json.name;
    document.getElementById("pokemonImage").src = json.sprites.front_default;
  } else {
    alert("Pokemon does not exist");
  }
}

function enterInput(e) {
  if (e.keyCode == 13) {
    fetchData();
  }
}
