const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const unstyledList = document.querySelector("#ingredients");

ingredients.forEach((ing) => {
  const li = document.createElement("li");
  li.textContent = ing;
  unstyledList.appendChild(li);
});
