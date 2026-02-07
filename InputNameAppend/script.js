let inpTxt = document.getElementById('inpTxt')
let sendBtn = document.getElementById('sendBtn')
let txtResult = document.getElementById('txtResult')

sendBtn.addEventListener('click', () => {
  txtResult.textContent = "Hello " + inpTxt.value;
})