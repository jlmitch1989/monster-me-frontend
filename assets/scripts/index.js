'use strict';

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// use require without a reference to ensure a file is bundled
const authEvents = require('./auth/events.js');

// START MODALS

// Sign Up Modal Click Events
$(()=>{
  // $('.sign-up').on('click', function(){
  //   // console.log('You clicked sign up');
  //   $('#sign-up-modal').modal('show');
  //   $('#sign-up').css('display', 'block');
    $('.save-sign-up').on('click', function(){
      // console.log('you clicked save sign out');
      $('#sign-up-modal').modal('hide');
    });
  // });
});

// Sign In Modal Click Events
$(()=>{
  $('#creation-form-section').hide();
  $('#body-describe').hide();
  $('.sign-in').on('click', function(){
    // console.log('You clicked Sign In!');
    $('#sign-in-modal').modal('show');
    $('.save-sign-in').on('click', function(){
      // console.log('You clicked Submit');
      // $('#sign-in-modal').modal('hide');
    });
  });
});

// Sign Out Modal Click Events
$(()=>{
  $('.sign-out').on('click', function(){
    // console.log('POPOVER');
    $('#sign-out-modal').modal('show');
  });
});

// Change password modal click events
$(()=>{
  $('.change-password').on('click', function(){
    $('#change-password-modal').modal('show');
    $('.save-change-password').on('click', function(){
      $('#change-password-modal').modal('hide');
    });
  });
});

// END MODALS


// On document ready
$(() => {
  authEvents.addHandlers();
});
