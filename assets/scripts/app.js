'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events')
const flightsEvents = require('./flights/events.js')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // your JS code goes here
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#update-flight').on('submit', flightsEvents.onUpdateFlight)
  $('#create-flight').on('submit', flightsEvents.onCreate)
  $('#get-flights').on('click', flightsEvents.onGetFlights)
  $('#get-flight').on('submit', flightsEvents.onGetFlight)
  $('#delete-flight').on('submit', flightsEvents.onDeleteFlight)
  $('#create-flight').hide()
  $('#update-flight').hide()
  $('#get-flight').hide()
  $('#get-flights').hide()
  $('#delete-flight').hide()
  $('#change-password').hide()
  $('#sign-out').hide()
})
