const listWithItems = document.querySelectorAll(".item");
console.log(`Number of categories: ${listWithItems.length}`);

listWithItems.forEach(function (item, i) {
  const category = item.querySelector("h2");
  console.log("Category: " + category.textContent);
  const elements = item.querySelectorAll("li");
  console.log("Elements: " + elements.length);
});
