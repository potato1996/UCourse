// created by zhaozewei
var ERRORS_KEY = 'diyErrors';

Template.DIYCourse.onCreated(function() {
  Session.set(ERRORS_KEY, {});
});

Template.DIYCourse.onRendered(function() {
  var $menuItem = $('.menu a.item, .menu .link.item');
  handler = {
    activate: function() {
      if(!$(this).hasClass('dropdown browse')) {
        $(this)
          .addClass('active')
          .closest('.ui.menu')
          .find('.item')
            .not($(this))
            .removeClass('active')
        ;
      }
    }
  }
  $menuItem
    .on('click', handler.activate)
  ;
});

Template.DIYCourse.helpers({
  errorMessages: function() {
    return _.values(Session.get(ERRORS_KEY));
  },
  errorClass: function(key) {
    return Session.get(ERRORS_KEY)[key] && 'error';
  }
});

Template.DIYCourse.events({
  'submit': function(event, template) {
    event.preventDefault();
    
    var email = template.$('[name=email]').val();
    var password = template.$('[name=password]').val();
    
    var errors = {};

    if (! email) {
      errors.email = 'Email is required';
    }

    if (! password) {
      errors.password = 'Password is required';
    }
    
    Session.set(ERRORS_KEY, errors);
    if (_.keys(errors).length) {
      return;
    }
  },

  'click .js-close-notice': function() {
    // Router.go('home');
    history.back();
  }
});
