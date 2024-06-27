// JavaScript Document

//constants created to match form elements
const fname = document.getElementById('fname')
const lname = document.getElementById('lname')
const birth = document.getElementById('birth')
const address = document.getElementById('address')
const city = document.getElementById('city')
const state = document.getElementById('state')
const zip = document.getElementById('zip')
const area = document.getElementById('area')
const phone = document.getElementById('phone')
const email = document.getElementById('email')
const conf = document.getElementById('conf')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

//Submit listener to check for filled in areas
form.addEventListener("submit", (e) => {
   let messages = []
   //checks first name
   if (fname.value === '' || fname.value == null){
    messages.push('*First Name is Required*')
   }
   //checks last name
   if (lname.value === '' || lname.value ==null){
    messages.push('*Last Name is Required*')
   }
   //checks date of birth
   if (birth.value === '' || birth.value == null){
    messages.push('*Date of Birth is Required*')
   }
   //checks address
   if (address.value === '' || address.value == null){
    messages.push('*Street Address is Required*')
   }
   //checks city
   if (city.value === '' || city.value == null){
    messages.push('*City is Required*')
   }
   //checks zip
   if (zip.value === '' || zip.value == null){
    messages.push('*Zip Code is Required*')
   }
   //checks area code
   if (area.value === '' || area.value == null){
    messages.push('*Area Code is Required*')
   }
   //checks phone number
   if (phone.value === '' || phone.value == null){
    messages.push('*Phone Number is Required*')
   }
   //checks email
   if (email.value === '' || email.value == null){
    messages.push('*Email is Required*')
   }
   //checks confimation of email
   if (conf.value === '' || conf.value == null){
    messages.push('*Email Confirmation is Required*')
   }
   //checks email and confirmation match
   if (conf.value != email.value){
    messages.push('*Email Does Not Match*')
   }

   if (messages.length > 0){
    e.preventDefault()
    errorElement.innerText = messages.join(', ')
   }
})