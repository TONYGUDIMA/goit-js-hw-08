var _ = require('lodash');

const form = document.querySelector('.feedback-form')
const input = document.querySelector('input')
const textArea = document.querySelector('textarea')

function setFormInputs() {
  const raw = localStorage.getItem("feedback-form-state")
  const inputValues = JSON.parse(raw)
  input.value = inputValues.email
  textArea.value = inputValues.message
}

setFormInputs()

form.addEventListener('input', _.throttle(event => {
  event.preventDefault()
  const {email, textarea} = event.currentTarget.elements
  const formData = {
    email : email.value,
    message : textArea.value,
  }
  localStorage.setItem("feedback-form-state", JSON.stringify(formData))
}, 500))



form.addEventListener('submit', event => {
  event.preventDefault() 
  const {email, textarea} = event.currentTarget.elements
  const formData = {
    email : email.value,
    message : textArea.value,
  }
  console.log(formData);
  form.reset()
}) 