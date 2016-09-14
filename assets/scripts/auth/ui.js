'use strict';
// stores user data
const app =require('../app');

const success = (data) => {
  $('#sign-up-modal').hide();
  console.log(data);
};
// stores user data
const signInSuccess = (data) => {
  console.log(data.user);
  app.user = data.user;
  console.log(app);
  $('#body-describe').show();
  // Displays the Creation Form only if users declared to be an artist
  if (data.user.artist === true) {
    $('#creation-form-section').show();
    $('#user-creations').show();
  // } else{
  //   $('#creation-form-section').hide();
  //   $('#user-creations').hide();
  }
};

const signOutSuccess = () => {
  delete app.user;
  console.log(app);
};

const failure = (error) => {
  console.error(error);
};

// Add creation
const addCreationSuccess = (data) => {
  app.creation = data.creation;
  console.log(app);
};

// handlebars view creations
let displayCreations = function(creations) {
  // console.log('creations' + creations);
  let creationTemplate = require('../templates_creations/creations.handlebars');
  $('.all-creations').empty();
  $('.all-creations').html(creationTemplate({
    creations
  }));
};

// View Creations
const viewCreationsSuccess = (data) => {
  console.log(data);
  app.creations = data.creations;
  console.log(app);
  displayCreations(data);
};

// handlebars view creations
let displayUserCreations = function(creations) {
  // console.log('creations' + creations);
  let userCreationTemplate = require('../templates_user_creations/user_creations.handlebars');
  $('.table').empty();
  $('.table').html(userCreationTemplate({
    creations
  }));
};

const viewUserCreationsSuccess = (data) => {
  console.log(data);
displayUserCreations(data);
};

// handlebars view artist
let displayArtist = function(users) {
  console.log('Artist' + users);
  let artistTemplate = require('../templates_artist/artist.handlebars');
  $('.table').empty();
  $('.table').html(artistTemplate({
    users
  }));
};

// View artist
const viewArtistSuccess = (data) => {
  console.log(data);
  app.users = data.users;
  console.log(app);
  displayArtist(data);
};

// delete creation
const deleteCreationSuccess = () => {
  console.log(app);
};

const addPatchCreationTitleSuccess = () => {
  console.log(app);
};

module.exports = {
  failure,
  success,
  signInSuccess,
  signOutSuccess,
  addCreationSuccess,
  viewCreationsSuccess,
  viewArtistSuccess,
  deleteCreationSuccess,
  viewUserCreationsSuccess,
  addPatchCreationTitleSuccess
};
