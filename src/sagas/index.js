import { takeEvery } from 'redux-saga'
import { call, put, fork } from 'redux-saga/effects'
import { api, endpoints } from 'services/api'
import { CONTACTS, actions } from 'routes/Contacts/modules/contacts'

function* listContacts() {
  try {
    const response = yield call(api.get, endpoints.contacts())
    yield put(actions.list.success(response.body, response))
  } catch (e) {
    yield put(actions.list.failure(e, response))
  }
}

function* createContact(action) {
  console.log('Creating contact...')
  // try {
  //   const response = yield call(api.post, endpoints.contacts(), {
  //     body: action.payload
  //   })
  //   yield put(actions.create.success(response.body, response))
  // } catch (e) {
  //   yield put(actions.create.failure(e, response))
  // }
}

function* watchCreateContactRequest(action) {
  yield takeEvery(CONTACTS.CREATE.REQUEST, createContact)
}

function* watchListContactsRequest(action) {
  yield takeEvery(CONTACTS.LIST.REQUEST, listContacts)
}

export default function* root() {
  yield [
    fork(watchListContactsRequest),
    fork(watchCreateContactRequest)
  ]
}
