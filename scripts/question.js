/*----------OPTION SELECT------------*/

//option
let options = document.querySelectorAll(".option");

//selectOption funtions
const selectOption = (option) => {
  options.forEach((option) => option.classList.remove("select-option"));
  option.classList.add("select-option");
};

options.forEach((option) => {
  option.addEventListener("click", () => selectOption(option));
});
