let result = document.getElementById('result');
let sumBtn = document.getElementById('sum');
let minBtn = document.getElementById('min')

sumBtn.addEventListener("click", () => {
  let number = Number(result.textContent)
  number = number + 1
  result.textContent = number
})

minBtn.addEventListener("click", () => {
  let number = Number(result.textContent)
  number = number - 1
  result.textContent = number

  if (number < 0) {
    result.textContent = 0
  }
})
