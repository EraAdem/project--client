const config = require('../config')
const store = require('../store')

const successMessage = function (newText) {
  $('#message').text(newText).hide(2000).show().hide(2000)
  $('#message').removeClass('failure')
  $('#message').addClass('success')
}
const successMessageCreate = function (newText) {
  $('#create-message').text(newText).hide(2000).show().hide(2000)
  $('#create-message').removeClass('failure')
  $('#create-message').addClass('success')
}
const successMessageUpdate = function (newText) {
  $('#update-message').text(newText).hide(2000).show().hide(2000)
  $('#update-message').removeClass('failure')
  $('#update-message').addClass('success')
}
const successMessageDelete = function (newText) {
  $('#delete-message').text(newText).hide(2000).show().hide(2000)
  $('#delete-message').removeClass('failure')
  $('#delete-message').addClass('success')
}
const successMessageGetFlight = function (newText) {
  $('#get-flight-message').text(newText).hide(2000).show().hide(2000)
  $('#get-flight-message').removeClass('failure')
  $('#get-flight-message').addClass('success')
}
const failureMessage = function (newText) {
  $('#message').text(newText).hide(2000).show().hide(2000)
  $('#message').removeClass('success')
  $('#message').addClass('failure')
}
const failureMessageUpdate = function (newText) {
  $('#update-message').text(newText).hide(2000).show().hide(2000)
  $('#update-message').removeClass('success')
  $('#update-message').addClass('failure')
}
const failureMessageCreate = function (newText) {
  $('#create-message').text(newText).hide(2000).show().hide(2000)
  $('#create-message').removeClass('success')
  $('#create-message').addClass('failure')
}
const failureMessageDelete = function (newText) {
  $('#delete-message').text(newText).hide(2000).show().hide(2000)
  $('#delete-message').removeClass('success')
  $('#delete-message').addClass('failure')
}
const failureMessageGetFlight = function (newText) {
  $('#get-flight-message').text(newText).hide(2000).show().hide(2000)
  $('#get-flight-message').removeClass('success')
  $('#get-flight-message').addClass('failure')
}
const onCreateSuccess = function (id) {
  successMessageCreate('Created Successfully!')
  $('.clearForm').val('')
}

const onCreateFailure = function () {
  failureMessageCreate('Created Failed')
  $('.clearForm').val('')
}

const onDeleteFlightSuccess = function () {
  successMessageDelete('Deleted Successfully!')
  $('.clearForm').val('')
}
const onDeleteFlightFailure = function () {
  failureMessageDelete('Deleted Unsuccessfully!')
  $('.clearForm').val('')
}

const onUpdateFlightSuccess = function () {
  successMessageUpdate('Updated Successfully!')
  $('.clearForm').val('')
}
const onUpdateFlightFailure = function () {
  failureMessageUpdate('Updated Unsuccessfully!')
  $('.clearForm').val('')
}

const onGetFlightsSuccess = function (data) {
  console.log(data.flights)
  $('.allFlights').text(' ')
  data.flights.forEach(function (flight) {
    $('.allFlights').append('<li>' + 'ID: ' + flight.id + ' ' + ' Place: ' + flight.place + ' Date: ' + flight.date + ' Description: ' + flight.description + '</li>')
  })
  successMessage('Showing Flights')
}

const onGetFlightsFailure = function () {
  failureMessage('Cannot Show Flights')
}
const onGetFlightSuccess = function (data) {
  // console.log(data)
  $('.oneFlight').text(' ')
  $('.oneFlight').append('ID: ' + data.flight.id + ' ' + 'Place: ' + data.flight.place + ' ' + 'Date:' + data.flight.date + ' ' + 'Description: ' + data.flight.description)
  successMessageGetFlight('Showing Flight ')
  $('.clearForm').val('')
}
const onGetFlightFailure = function () {
  failureMessageGetFlight('Cannot Show Flight')
  $('.clearForm').val('')
}

module.exports = {
  onCreateSuccess,
  onCreateFailure,
  onGetFlightsSuccess,
  onGetFlightsFailure,
  onGetFlightSuccess,
  onGetFlightFailure,
  onDeleteFlightSuccess,
  onDeleteFlightFailure,
  onUpdateFlightSuccess,
  onUpdateFlightFailure
}
