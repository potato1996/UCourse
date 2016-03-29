// created by zhaozewei

Template.notice.helpers({
  noticeTitle: function(){
    return Session.get("noticeTitle");
  },
});

Template.notice.events({
  'click .js-close-notice': function() {
    Router.go('home');
  }
});
