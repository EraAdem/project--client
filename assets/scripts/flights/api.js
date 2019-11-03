const config = require('../config.js')
const store = require('../store.js')
const getFormFields = require('../../../lib/get-form-fields.js')

const createFlight = function (formData) {
//  console.log(formData.credentials.place)
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/flights',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      'flight': {
        'place': formData.credentials.place,
        'date': formData.credentials.date,
        'description': formData.credentials.description
      }
    }
  })
}

const getFlights = function () {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/flights',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const getFlight = function (formData) {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/flights/' + formData.flight.id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }

  })
}

const deleteFlight = function (formData) {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/flights/' + formData.credentials.id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateFlight = function (formData) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/flights/' + formData.flight.id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}
module.exports = {
  createFlight,
  getFlights,
  getFlight,
  deleteFlight,
  updateFlight
}
