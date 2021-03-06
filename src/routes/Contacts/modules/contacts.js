import {
  createRequestTypes,
  createRequestActions,
  action
} from 'actions/actionTypes'

// ------------------------------------
// Constants
// ------------------------------------
export const CONTACTS = {
  LIST: createRequestTypes('CONTACTS_LIST'),
  CREATE: createRequestTypes('CONTACTS_CREATE')
}

// ------------------------------------
// Actions
// ------------------------------------


export const actions = {
  list: createRequestActions(CONTACTS.LIST),
  create: createRequestActions(CONTACTS.CREATE),
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [CONTACTS.LIST.REQUEST]: (state, { ...props }) =>
    Object.assign({}, state, { ...props }),

  [CONTACTS.LIST.SUCCESS]: (state, { payload: list, ...props }) =>
    Object.assign({}, state, { list, ...props }),

  [CONTACTS.CREATE.SUCCESS]: (state, { payload, ...props }) =>
    Object.assign({}, state, {
      list: [...state.list, payload],
      ...props
    })
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  list: [],
  fetching: false,
  fetched: false
}

export default function counterReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
