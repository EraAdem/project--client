const store = require('../store')

const cssPage = function () {
  $('body').css('background-image', 'url("./public/clouds.jpeg")')
}
const successMessage = function (newText) {
  $('#message').text(newText)
  $('#message').removeClass('failure')
  $('#message').addClass('success')
}

const failureMessage = function (newText) {
  $('#message').text(newText)
  $('#message').removeClass('success')
  $('#message').addClass('failure')
}

const onSignInSuccess = function (responseData) {
  successMessage('Signed in successfully!')
  store.user = responseData.user
  $('.clearForm').val('')
  setTimeout(function () { $('#message').text('') }, 1000)
  $('#change-password').show()
  $('#sign-out').show()
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#create-flight').show()
  $('#update-flight').show()
  $('#get-flight').show()
  $('#get-flights').show()
  $('#delete-flight').show()
  cssPage()
}
const onSignInFailure = function () {
  failureMessage('Sign in failed!')

  setTimeout(function () { $('#message').text('') }, 1000)
  $('.clearForm').val('')
}
const onSignUpSuccess = function () {
  successMessage('Signed up successfully!')

  setTimeout(function () { $('#message').text('') }, 1000)
  $('.clearForm').val('')
}
const onSignUpFailure = function () {
  failureMessage('Sign up failed!')
  setTimeout(function () { $('#message').text('') }, 1000)

  $('.clearForm').val('')
}

const onChangePasswordSuccess = function () {
  successMessage('Changed password successfully!')

  setTimeout(function () { $('#message').text('') }, 1000)
  $('.clearForm').val('')
}
const onChangePasswordFailure = function () {
  failureMessage('Change password failed!')

  setTimeout(function () { $('#message').text('') }, 1000)
  $('.clearForm').val('')
}

const onSignOutSuccess = function () {
  successMessage('Signed out successfully!')

  setTimeout(function () { $('#message').text('') }, 1000)
  $('#change-password').hide()
  $('#sign-out').hide()
  $('#sign-up').show()
  $('#sign-in').show()
  $('#create-flight').hide()
  $('#update-flight').hide()
  $('#get-flight').hide()
  $('#get-flights').hide()
  $('#delete-flight').hide()
  $('.oneFlight').hide()
}
const onSignOutFailure = function () {
  failureMessage('Sign out failed!')
  setTimeout(function () { $('#message').text('') }, 1000)
}

module.exports = {
  onSignUpFailure,
  onSignUpSuccess,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordFailure,
  onChangePasswordSuccess,
  onSignOutFailure,
  onSignOutSuccess

}
