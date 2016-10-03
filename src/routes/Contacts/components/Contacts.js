import React from 'react'
import { Field } from 'redux-form'

import classes from './Contacts.scss'

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

export const Contacts = (props) => {
  console.log(props)
  const {
    contacts,
    create,
    handleSubmit,
    submitting
  } = props

  return (
    <div className={classes['Contacts']}>

      <h4>Create a contact</h4>

      <div className="contact-form">
        <form onSubmit={handleSubmit(create)}>
          <div className="form-group">
            <label>Name:</label>
            <Field
              name="name"
              component="input"
              className="form-control"
              required />
          </div>

          <div className="form-group">
            <label>Email:</label>
            <Field
              name="email"
              component="input"
              className="form-control" />
          </div>

          <div className="form-group">
            <label>Phone:</label>
            <Field
              name="phone"
              component="input"
              className="form-control" />
          </div>

          {/* input/upload picture */}

          <button
            type="submit"
            className="btn btn-primary"
            disabled={submitting}>
            Add
          </button>
        </form>
      </div>

      <h4>Contacts</h4>

      <ul>
        {contacts.map((contact, i) => <Contact {...contact} key={i} />)}
      </ul>
    </div>
  )
}

export default Contacts
