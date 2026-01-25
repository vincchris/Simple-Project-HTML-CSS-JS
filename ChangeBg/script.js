let colorChange = document.getElementById('btn')

colorChange.classList.add("changeColor")

document.addEventListener('click', () => {
    colorChange.classList.toggle("changeColor")
  }
)