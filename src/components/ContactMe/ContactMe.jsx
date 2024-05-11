import React from 'react'
import './ContactMe.css'
import ContactInfoCard from './ContactInfoCard/ContactInfoCard'
import ContactForm from './ContactForm/ContactForm'
const ContactMe = () => {
  return (
    <section className="contact-container">
      <h5>ContactMe</h5>

      <div className="contact-content">
        <div style={{flex: 1}}>
          <ContactInfoCard
          iconUrl={'./assets/images/logo.svg'}
          text={'ekweredaniel@gmail.com'}/>
          <ContactInfoCard
          iconUrl={'./assets/images/logo.svg'}
          text={'https//github.com/DANIEL-EKWERE.com'}/>
        </div>
        <div style={{flex: 1}}>
          <ContactForm /> 
        </div>
      </div>
    </section>
  )
}

export default ContactMe