document.querySelector("h1").textContent = "🥗 Zoe's Cooking Blog! 🥙";

const recipeList = document.createElement("ol");
recipeList.appendChild(document.createElement("li")).innerText = "Toast some bread";
recipeList.appendChild(document.createElement("li")).innerText = "Spread butter on the toast";
document.querySelector("body").appendChild(recipeList);

const stepsArray = ["Toast some bread", "Toast some more", "Let it burn", "Yeet it through the window"];
const addRecipe = (title, stepsArray) => {
    document.querySelector("body").appendChild(document.createElement("p")).innerText = title;
    const recipeList = document.createElement("ol");
    stepsArray.forEach(element => {
        recipeList.appendChild(document.createElement("li")).innerText = element;
    });
    document.querySelector("body").appendChild(recipeList);
};

addRecipe("Old Recipe:", stepsArray);
