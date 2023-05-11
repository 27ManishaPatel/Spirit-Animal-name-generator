//Spirit animal name generator

const hoverBtn = document.getElementById("hoverInput");
const typingBtn = document.getElementById("whenTyping");
const clickBtn = document.getElementById("btnClick");

const hoverOver = document.getElementById("inputName");

const generateBtn = document.getElementById("generateNameBtn");

const spiritAnimalName = document.getElementById("animalNamePara");

hoverBtn.addEventListener("change", function () {
  if (hoverBtn.checked) {
    hoverOver.value = '';
    spiritAnimalName.innerText = '';
    hoverOver.addEventListener("mouseover", generateNameAnimal);
    hoverOver.removeEventListener("keypress", generateNameAnimal);
    generateBtn.removeEventListener("click", generateNameAnimal);
  }
});

typingBtn.addEventListener("change", function () {
  if (typingBtn.checked) {
    hoverOver.value = '';
    spiritAnimalName.innerText = '';
    hoverOver.addEventListener("keypress", generateNameAnimal);
    hoverOver.removeEventListener("mouseover", generateNameAnimal);
    generateBtn.removeEventListener("click", generateNameAnimal);

  }

});

clickBtn.addEventListener("change", function () {
  if (clickBtn.checked) {
    hoverOver.value = '';
    spiritAnimalName.innerText = '';
    generateBtn.addEventListener("click", generateNameAnimal);
    hoverOver.removeEventListener("keypress", generateNameAnimal);
    hoverOver.removeEventListener("mouseover", generateNameAnimal);
  }
});

function generateNameAnimal() {
  const personName = document.getElementById("inputName").value;
  const spiritAnimals = [
    "Eagle - Freedom and Courage",
    "Swan - The symbol of total grace, serenity, and innocence",
    "Sparrow - Desire and fertility",
    "Seahorse - Confidence and grace",
    "Fox - Cunning, intelligent and providing animal",
    "Frog - Renewal, fertility and springtime",
    "Horse - Journey",
    "Lizard - Dreaming, agility and conversation",
    "Duck - Sees clearly through emotions; graceful on the water",
    "Rabbit - Fear and overcoming limiting beliefs"
  ];

  let displayAnimal = spiritAnimals[Math.floor(Math.random() * spiritAnimals.length)];
  if (!personName) {
    spiritAnimalName.innerText = "Please enter your Name";
  } else {
    spiritAnimalName.innerText = `${personName}: ${displayAnimal}`
  }
};