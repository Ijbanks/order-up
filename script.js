const tags = ["fresh", "spicy", "late night"];
const prices = [ 9.50, 13, 9.25, 3];



console.log(tags);
console.log(prices);

const tagText = document.querySelector("#tags");
tagText.textContent = "";

for(let i = 0; i < tags.length; i++)){
   tagText.textContent = tagText.textContent + tags[i] + " . ";
}
