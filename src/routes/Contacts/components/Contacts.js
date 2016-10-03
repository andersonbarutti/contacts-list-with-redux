import React from 'react'
import classes from './Contacts.scss'

import ContactForm from './ContactForm'

const Contact = ({ picture, name, email, phone }) => (
  <li>
    <div className="avatar">
      <img src={picture} alt=""/>
    </div>
    <div className="contact-info">
      <div className="contact-details">
        <div className="contact-name">
          {name}
        </div>
        <div className="contact-email">
          {email}
        </div>
      </div>
      <div className="contact-details">
        <div className="contact-phone">
          {phone}
        </div>
      </div>
    </div>
  </li>
)

export const Contacts = ({ contacts, create }) => (
  <div className={classes['Contacts']}>
    <h4>Contacts</h4>
    <ContactForm submit={create} />
    <ul>
      {contacts.map((contact, i) => <Contact {...contact} key={i} />)}
    </ul>
  </div>
)

export default Contacts
