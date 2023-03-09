var _ = require('lodash');


const form = document.querySelector('.feedback-form')
const input = document.querySelector('input')
const textArea = document.querySelector('textarea')

function setFormInputs() {
  const raw = localStorage.getItem("feedback-form-state")
  const inputValues = JSON.parse(raw)
  if (inputValues.email !== '' || inputValues.message !== '') {
    input.value = inputValues.email
    textArea.value = inputValues.message
  }
}

setFormInputs()

form.addEventListener('input', _.throttle(event => {
  event.preventDefault()
  const {email, message} = event.currentTarget.elements
  console.log(email.value);
  console.log(message.value);
  const formData = {
    email : email.value,
    message : message.value,
  }
  localStorage.setItem("feedback-form-state", JSON.stringify(formData))
}, 0))




form.addEventListener('submit', event => {
  event.preventDefault() 
  const {email, message} = event.currentTarget.elements
  const formData = {
    email : email.value,
    message : message.value,
  }
  console.log(formData);
  form.reset()
}) 