const input = document.querySelector("input");
const submitBtn = document.querySelector(".btn");
const listContainer = document.querySelector(".to-do__list_container");

function addItem() {
  let inputValue = input.value.trim();
  if (inputValue !== "") {
    input.value = "";
    listContainer.innerHTML += `<div class="list_item"><p>${inputValue}</p>
        <div class="icons_container">
        <i class="fa-solid fa-square-check"></i>
        <i class="fa-solid fa-trash"></i>
        </div>`;
  } 
  else {
    alert("Please input something");
  }
}

submitBtn.addEventListener("click", addItem);

input.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    addItem();
  }
});

listContainer.addEventListener("click", (event) => {
  const target = event.target;

  if (target.classList.contains("fa-square-check")) {
    target.classList.toggle("done");
  } 
  else if (target.classList.contains("fa-trash")) {
    const listItem = target.closest(".list_item");
    if (listItem) {
      listItem.remove();
    }
  }
});
