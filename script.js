const joke = document.getElementById("joke");
const button = document.getElementById("jokeBtn");

joke.textContent = "";

const h4 = document.createElement("h4");
h4.style.color = "#8D3DAF";
joke.append(h4);

const h5 = document.createElement("h5");
h5.style.color = "#383CC1";
joke.append(h5);

function showJoke() {
  fetch("https://official-joke-api.appspot.com/random_joke")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const setup = data.setup;
      const punchline = data.punchline;

      h4.textContent = setup;
      h5.textContent = punchline;
    })
    .catch((err) => console.error(err));
}

button.addEventListener("click", showJoke);

/* Another way of fetching api data and showing it without using .then

async function fetchJokes() {
  const data = await fetch("https://official-joke-api.appspot.com/random_joke");
  return await data.json();
}

async function showJoke() {
  const jokeData = await fetchJokes();
  h4.textContent = jokeData.setup;
  h5.textContent = jokeData.punchline;
} */
