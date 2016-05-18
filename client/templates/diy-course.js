// created by zhaozewei

Template.DIYCourse.helpers({
  
});

Template.DIYCourse.events({
  'click .js-close-notice': function() {
    // Router.go('home');
    history.back();
  }
});
