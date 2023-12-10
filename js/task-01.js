const allCategories = document.querySelectorAll("li.item");
console.log("Number of categories: ", allCategories.length);
for (const category of allCategories) {
  const title = category.querySelector("h2");
  const items = category.querySelectorAll("li");
  console.log(`Category: ${title.textContent}`);
  console.log(`Elements: ${items.length}`);
}
