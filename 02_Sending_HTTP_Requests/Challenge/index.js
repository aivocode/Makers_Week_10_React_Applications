document.querySelector("title").innerText = "Random Joke from Ellie";
document.querySelector("body").appendChild(document.createElement("h1")).innerText = "Random Joke from Ellie";

const randomJoke = () => {
    fetch("https://official-joke-api.appspot.com/random_joke")
        .then((response) => response.json())
        .then((data) => {
            document.querySelector("body").appendChild(document.createElement("h5")).innerText = data["setup"];
            document.querySelector("body").appendChild(document.createElement("p")).innerText = data["punchline"];
        });
};

randomJoke();
