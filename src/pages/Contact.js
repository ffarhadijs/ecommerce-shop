import React from 'react'
import ContactForm from '../component/contactForm/ContactForm'
import LayoutWrapper from '../component/HOC/LayoutWrapper'

const Contact = () => {
  return (
    <div>
      <ContactForm/>
    </div>
  )
}

export default LayoutWrapper(Contact)