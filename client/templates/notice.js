// created by zhaozewei

Template.notice.helpers({

});

Template.notice.events({
  'click .js-close-notice': function() {
    Router.go('home');
  }
});
