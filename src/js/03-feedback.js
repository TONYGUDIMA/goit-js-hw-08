const _ = require('lodash');

const form = document.querySelector('.feedback-form')
const input = document.querySelector('input')
const textArea = document.querySelector('textarea')

function setFormInputs() {
  const raw = localStorage.getItem("feedback-form-state")
  if (raw) {
    const inputValues = JSON.parse(raw)
    input.value = inputValues.email
    textArea.value = inputValues.message
  }

}
setFormInputs()

function settingStorage(target) {
  const {email, message} = target.elements
  const formData = {
    email : email.value,
    message : message.value,
  }
  localStorage.setItem("feedback-form-state", JSON.stringify(formData))
}

const throttleSettingStorage = _.throttle(settingStorage, 500)


form.addEventListener('input', event => {
  throttleSettingStorage(event.currentTarget)
})


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
