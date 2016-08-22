'use strict';
// stores user data
const app =require('../app');

const success = (data) => {
  console.log(data);
};
// stores user data
const signInSuccess = (data) => {
  app.user = data.user;
  console.log(app);
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
  console.log('creations' + creations);
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
  displayCreations(data);
};


module.exports = {
  failure,
  success,
  signInSuccess,
  signOutSuccess,
  addCreationSuccess,
  viewCreationsSuccess
};
