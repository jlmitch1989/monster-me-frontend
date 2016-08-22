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
  }
};

const signOutSuccess = () => {
  delete app.user;
  console.log(app);
  $('#creation-form-section').hide();
  $('#body-describe').hide();
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
  $('.table').empty();
  $('.table').html(creationTemplate({
    creations
  }));
};

// View Creations
const viewCreationsSuccess = (data) => {
  console.log(data);
  app.creations = data.creations;
  console.log(app);
  $('#main-photo').hide();
  $('#creation-form-section').hide();
  $('#body-describe').hide();
  displayCreations(data);
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
  $('#main-photo').hide();
  displayArtist(data);
};


module.exports = {
  failure,
  success,
  signInSuccess,
  signOutSuccess,
  addCreationSuccess,
  viewCreationsSuccess,
  viewArtistSuccess
};
