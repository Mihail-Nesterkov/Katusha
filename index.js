const modal = document.getElementById("mod")
const modalBlock = document.getElementById("modalB")
const name = document.getElementById("name")
const surname = document.getElementById("surname")
const tel = document.getElementById("tel")
function onModal() {
  modal.style.display = "grid"
  modalBlock.style.display = "block"
}
function offModal() {
  modal.style.display = "none"
  modalBlock.style.display = "none"

  name.value = ""
  surname.value = ""
  tel.value = ""
}
function toSend() {
  if (name.value.length > 0 && surname.value > 0 && tel.value > 0){
    // const letter = new XMLHttpRequest();
    // const person = JSON.stringify({myName: nameV, mySurname: surnameV, myTel: telV})
    // letter.open('POST', 'https://example.com/order', true);
    // letter.setRequestHeader('Content-Type', 'application/json');
    // letter.send(person);
    console.log("go go go")
  }else {
    noSend()
  }
}
function noSend() {
  if (name.value.length === 0) {
    name.classList.remove('active')
    name.classList.add('noActive')
  }
  if (surname.value.length === 0) {
    surname.classList.remove('active')
    surname.classList.add('noActive')
  }
  if (tel.value.length === 0) {
    tel.classList.remove('active')
    tel.classList.add('noActive')
  }
}
name.onkeyup = nameInput
surname.onkeyup = surnameInput
tel.onkeyup = telInput
let nameV = ""
let surnameV = ""
let telV
function nameInput() {
  nameV = name.value
  if (name.length < 1) {
    name.style.backgroundColor = "pink"
  } else {
    name.style.backgroundColor = "wight"
  }
}
function surnameInput() {
  surnameV = surname.value
  if (surname.length < 1) {
    surname.style.backgroundColor = "pink"
  } else {
    surname.style.backgroundColor = "wight"
  }
}
function telInput() {
  telV = tel.value
  if (tel.length < 1) {
    tel.style.backgroundColor = "pink"
  } else {
    tel.style.backgroundColor = "wight"
  }
}
if (nameV.length && surnameV.length && telV.length > 1) {
  const letter = new XMLHttpRequest();
  const person = JSON.stringify({myName: nameV, mySurname: surnameV, myTel: telV})
  letter.open('POST', 'https://example.com/order', true);
  letter.setRequestHeader('Content-Type', 'application/json');
  letter.send(person);
}
function mySite () {
  window.open("https://www.dieci-ekb.com", "_blank")
  console.log("123456789")
}
function inputClass(a) {
  if (document.getElementById(a).value.length > 0){
    document.getElementById(a).classList.remove('noActive')
    document.getElementById(a).classList.add('active')
  }
}