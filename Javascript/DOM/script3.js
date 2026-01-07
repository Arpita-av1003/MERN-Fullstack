const parentElement = document.getElementById("parent-container");
const cardContainer = document.createElement("div");
cardContainer.classList.add("card-container");

// creating card image element

const cardImageElement = document.createElement("img");
cardImageElement.classList.add("image");

cardImageElement.setAttribute("src","https://www.holidify.com/images/bgImages/INDIA.jpg");

cardImageElement.setAttribute("alt", "travel-card");
cardContainer.appendChild(cardImageElement);

// creating card text alemnt
const cardTextElement = document.createElement("span");
cardTextElement.innerText ="The journey of a thousand miles begins with a single step.";
cardContainer.appendChild(cardTextElement);
parentElement.appendChild(cardContainer);