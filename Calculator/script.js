let firstNumber = document.getElementById("firstNumber")
let secondNumber = document.getElementById("secNumber")
let userBtn = document.getElementById("userBtn")
let result = document.getElementById("result")

userBtn.addEventListener('click', () => {
  let number1 = Number(firstNumber.value)
  let number2 = Number(secondNumber.value)
  let number = number1 + number2
  result.textContent = number
})