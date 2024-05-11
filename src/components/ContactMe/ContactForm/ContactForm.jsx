import React from 'react'
import './ContactForm.css'
const ContactForm = () => {
  return (
    <div className='contact-form-content'>
<form>
  <div className='name-container'>
    <input type="text" name="firstname" placeholder="First Name" />
    <input type="text" name="firstname" placeholder="Last Name" />
  </div>

  <input type="text" name="email" placeholder="Email" />
  <textarea type="text" name="message" placeholder="Mesaage" cols={3} ></textarea>
  <button>Send</button>
</form>
    </div>
  )
}

export default ContactForm