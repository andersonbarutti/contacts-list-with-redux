import { connect } from 'react-redux'
import { actions } from '../modules/contacts'

import Contacts from '../components/Contacts'

const mapActionCreators = {
  create: actions.create.request
}

const mapStateToProps = (state) => ({
  contacts: state.contacts.list
})

export default connect(mapStateToProps, mapActionCreators)(Contacts)
