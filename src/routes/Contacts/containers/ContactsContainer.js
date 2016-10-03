import { connect } from 'react-redux'
import { actions } from '../modules/contacts'
import { reduxForm } from 'redux-form'

import Contacts from '../components/Contacts'

const mapActionCreators = {
  create: actions.create.request
}

const mapStateToProps = (state) => ({
  contacts: state.contacts.list
})

const ContactsForm = reduxForm({ form: 'contact' })(Contacts)

export default connect(
  // { form: 'contact'},
  mapStateToProps,
  mapActionCreators
)(ContactsForm)
