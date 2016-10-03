const REQUEST = 'REQUEST'
const SUCCESS = 'SUCCESS'
const FAILURE = 'FAILURE'

export const createRequestTypes = base => {
  return [REQUEST, SUCCESS, FAILURE].reduce((acc, type) => {
    acc[type] = `${base}_${type}`
    return acc
  }, {})
}

export const createRequestActions = actionType => ({
  request: (payload = {}) =>
    action(actionType.REQUEST, { payload, fetching: true }),
  success: (payload, response) =>
    action(actionType.SUCCESS, { payload, response, fetching: false }),
  failure: (error, response) =>
    action(actionType.FAILURE, { error, response, fetching: false })
})

export const action = (type, payload = {}) => ({ type, ...payload })
