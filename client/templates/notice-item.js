// created by zhaozewei
Session.setDefault("showNotice", false);

Template.noticeItem.helpers({
  showNotice: function(){
    return Session.get("showNotice");
  }
});

Template.noticeItem.events({
  'click .js-show-notice': function() {
    Router.go('notice');
    Session.set("showNotice", true);
  }
});
