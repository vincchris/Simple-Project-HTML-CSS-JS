let text = document.getElementById("text")
let doneBtn = document.getElementById("doneBtn")

doneBtn.addEventListener("click", () => {
  text.textContent = "Selesai"
  text.style.color = "green"
  text.style.textDecoration = "line-through"
})