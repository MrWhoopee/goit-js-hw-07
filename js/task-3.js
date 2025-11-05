const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", () => {
  const newValue = input.value.trim();
  output.textContent = newValue === "" ? "Anonymous" : newValue;
});
