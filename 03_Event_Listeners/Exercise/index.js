const button = document.createElement("button");
button.textContent = "Click!";
button.id = "_button";
document.querySelector("body").appendChild(button);

const container = document.createElement("div")
container.id = "_container"
document.querySelector("body").appendChild(container);

const buttonListener = () => {
    document.querySelector('#_button').addEventListener('click', () => {
        document.getElementById("_container").replaceChildren();
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then((response) => response.json())
            .then((data) => {
                data.forEach(element => {
                    document.querySelector("#_container").appendChild(document.createElement("p")).innerHTML = `<strong>Task:</strong> ${element["title"]}, <strong>Completed:</strong> ${element["completed"]}`;
                });
            });
    });
}

buttonListener();