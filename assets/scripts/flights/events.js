const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onCreate = function (event) {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)
  api.createFlight(formData)
    .then(ui.onCreateSuccess)
    .catch(ui.onCreateFailure)
}

const onGetFlights = function (event) {
  event.preventDefault()
  api.getFlights()
    .then(ui.onGetFlightsSuccess)
    .catch(ui.onGetFlightsFailure)
}

const onGetFlight = function (event) {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)

  api.getFlight(formData)
    .then(ui.onGetFlightSuccess)
    .catch(ui.onGetFlightFailure)
}

const onDeleteFlight = function (event) {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)
  api.deleteFlight(formData)
    .then(ui.onDeleteFlightSuccess)
    .catch(ui.onDeleteFlightFailure)
}

const onUpdateFlight = function (event) {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)
  api.updateFlight(formData)
    .then(ui.onUpdateFlightSuccess)
    .catch(ui.onUpdateFlightFailure)
}

module.exports = {
  onCreate,
  onGetFlights,
  onGetFlight,
  onDeleteFlight,
  onUpdateFlight
}
