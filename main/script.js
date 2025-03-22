// This is the logic of my code
const inputBox = document.getElementById("input");
const createBtn = document.getElementById("btn");
let notes = document.querySelectorAll(".p_input");
function display() {
  inputBox.innerHTML = localStorage.getItem("notes");
}
display();
function updateLocalStorage() {
  localStorage.setItem("notes", inputBox.innerHTML);
}

createBtn.addEventListener("click", () => {
  let box = `
  ${inputBox.innerHTML}
  <div class="p_input">
    <p class="w-full min-h-[150px] text-[#333] bg-white rounded-[5px] focus:outline-none" contenteditable="true">
    </p>
    <img src="/images/delete.png" class="img_delete" />
  </div>
  `;
  inputBox.innerHTML = box;
  updateLocalStorage();
});

inputBox.addEventListener("click", function (e) {
  console.log(e.target.tagName);
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    updateLocalStorage();
  } else if (e.target.tagName === "P") {
    notes = document.querySelectorAll(".p_input");
    notes.forEach((nt) => {
      nt.addEventListener("keyup", updateLocalStorage);
    });
  }
});
function display() {
  inputBox.innerHTML = localStorage.getItem("notes");
}
document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    document.execCommand("insertLineBreak");
  }
});
