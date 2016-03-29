// created by zhaozewei
Session.setDefault("noticeTitle", "title");

Template.noticeItem.helpers({
  showNotice: function(){
    return Session.get("noticeTitle");
  }
});

Template.noticeItem.events({
  'click .js-show-notice': function(text) {
    Router.go('notice');
    Session.set("noticeTitle", text);
  }
});
