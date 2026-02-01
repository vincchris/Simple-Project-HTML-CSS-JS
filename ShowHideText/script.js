let showBtn = document.getElementById('show')
let hideBtn = document.getElementById('hide')

hideBtn.addEventListener('click', () => {
  document.getElementById('txt').style.display = 'none'
})

showBtn.addEventListener('click', () => {
  document.getElementById('txt').style.display = 'block'
})