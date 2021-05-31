async function fetchData() {
  const inputValue = document.getElementById("searchInput").value;
  try {
    // console.log(typeof data);

    if (0 < inputValue && inputValue < 899) {
      const data = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${inputValue}`
      );
      const json = await data.json();
      document.getElementById("pokemonResult").innerText = json.name;
      document.getElementById("pokemonID").innerText = json.id;
      document.getElementById("pokemonType1").innerText =
        json.types[0].type.name;
      document.getElementById(
        "pokemonImage"
      ).src = `https://img.pokemondb.net/artwork/large/${json.name}.jpg`;
      if (json.types.length == 2) {
        document.getElementById("pokemonType2").innerText =
          json.types[1].type.name;
      } else {
        document.getElementById("pokemonType2").innerText = "---";
      }
    } else {
      alert("Pokemon does not exist");
    }
  } catch (err) {
    console.log(err);
  }
  clearInput();
}

function enterInput(e) {
  if (e.keyCode == 13) {
    fetchData();
    clearInput();
  }
}

function clearInput() {
  document.getElementById("searchInput").value = "";
}
