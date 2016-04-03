// created by zhaozewei
// TODO
Template.filePage.helpers({
  fileTitle: function(){
    return Session.get("fileTitle");
  },
});

Template.filePage.events({
  'click .js-close-file': function() {
    Router.go('current');
  }
});
