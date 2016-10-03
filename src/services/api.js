import Frisbee from 'frisbee'

const API_URL = 'http://localhost:4000/api'

export const endpoints = {
  contacts: (id) => id ? `/contacts${id}` : '/contacts'
}

export const api = new Frisbee({
  baseURI: API_URL,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
})
