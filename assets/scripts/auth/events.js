'use strict';

const getFormFields = require('../../../lib/get-form-fields');

const api = require('./api');
const ui = require('./ui');


// SIGNIN / SIGNUP/ SIGNOUT / CHANGE PASSWORD
const onSignUp = function (event) {
  let data = getFormFields(this);
  // console.log("data:", data);
  event.preventDefault();
  api.signUp(data)
    .done(ui.success)
    .fail(ui.failure);
};

const onSignIn = function (event) {
  let data = getFormFields(this);
  event.preventDefault();
  api.signIn(data)
    .done(ui.signInSuccess)
    .fail(ui.failure);
};

const onChangePassword = function onChangePassword(event) {
  let data = getFormFields(this);
  event.preventDefault();
  api.changePassword(data)
    .done(ui.success)
    .fail(ui.failure);
};

const onSignOut = function (event) {
  event.preventDefault();
  api.signOut()
    .done(ui.signOutSuccess)
    .fail(ui.failure);
};
// SIGNIN / SIGNUP/ SIGNOUT / CHANGE PASSWORD END

// Add creation
const addMyCreation = function (event) {
  let data = getFormFields(this);
  // console.log('data:', data);
  event.preventDefault();
  api.addCreation(data)
    .done(ui.addCreationSuccess)
    .fail(ui.failure);
};
// Show all creations
const showCreations = function () {
  // console.log('HERE ARE YOUR CREATIONS');
  api.viewCreations()
    .done(ui.viewCreationsSuccess)
    .fail(ui.failure);
};

// Show artist info
const showArtist = function () {
  // console.log('HERE ARE YOUR ARTIST');
  api.viewArtist()
    .done(ui.viewArtistSuccess)
    .fail(ui.failure);
};


const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp);
  $('#sign-in').on('submit', onSignIn);
  $('#change-password').on('submit', onChangePassword);
  $('#sign-out').on('submit', onSignOut);
  $('.add-creation-form').on('submit', addMyCreation);
  $('.view-creations-btn').on('click', showCreations);
  $('.go-to-artist').on('click', showArtist);
  $('.home').on('click', function(){
    $('.table').hide();
    $('#creation-form-section').show();
    $('#body-describe').show();
    $('#main-photo').show();
  });
};

module.exports = {
  addHandlers,
};
