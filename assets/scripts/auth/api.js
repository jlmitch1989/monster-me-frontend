'use strict';

const app = require('../app');

const signUp = (data) => {
  return $.ajax({
    url: app.api + '/sign-up/',
    method: 'POST',
    data,
  });
};
const signIn = (data) => $.ajax({
    url: app.api + '/sign-in/',
    method: 'POST',
    data,
  });

const changePassword = (data) => $.ajax({
    url: app.api + '/change-password/' + app.user.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data,
  });

const signOut = () => $.ajax({
    url: app.api + '/sign-out/' + app.user.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });

// ADD CREATION AJAX
const addCreation = (data) => $.ajax({
  url: app.api + '/creations',
  method: 'POST',
  headers: {
    Authorization: 'Token token=' + app.user.token,
  },
  data,
});

// View Creations
const viewCreations = () => $.ajax({
  url: app.api + '/creations',
  method: 'GET',
  headers: {
    Authorization: 'Token token=' + app.user.token,
  },
});

const viewUserCreations = () => $.ajax({
  url: app.api + '/creations?user_creations=true',
  method: 'GET',
  headers: {
    Authorization: 'Token token=' + app.user.token,
  },
});

// view Artist
const viewArtist = () => $.ajax({
  url: app.api + '/users',
  method: 'GET',
  headers: {
    Authorization: 'Token token=' + app.user.token,
  },
});

// Delete creation
const deleteCreation = (creationID) => $.ajax({
  url: app.api + '/creations/' + creationID,
  method: 'DELETE',
  headers: {
    Authorization: 'Token token=' + app.user.token,
  },
});


module.exports = {
    signUp,
    signIn,
    changePassword,
    signOut,
    addCreation,
    viewCreations,
    viewArtist,
    deleteCreation,
    viewUserCreations
  };
