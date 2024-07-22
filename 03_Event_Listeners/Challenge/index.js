document.querySelector("title").innerText = "Random Joke from Ellie";
document.querySelector("body").appendChild(document.createElement("h1")).innerText = "Random Joke from Ellie";

const button = document.createElement("button");
button.textContent = "Get Joke!";
button.id = "_button";
document.querySelector("body").appendChild(button);

const container = document.createElement("div")
container.id = "_container"
document.querySelector("body").appendChild(container);

const buttonListener = () => {
    document.querySelector('#_button').addEventListener('click', () => {
        document.getElementById("_container").replaceChildren();
        fetch("https://official-joke-api.appspot.com/random_joke")
            .then((response) => response.json())
            .then((data) => {
                document.querySelector("#_container").appendChild(document.createElement("h5")).innerText = data["setup"];
                document.querySelector("#_container").appendChild(document.createElement("p")).innerText = data["punchline"];
            });
    });
}

buttonListener();