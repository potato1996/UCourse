// created by zhaozewei
//Session.setDefault("noticeTitle", "title");

Template.noticeItem.helpers({
  noticeTime: function(create_time) {
    return getMyTime(create_time);
  }
});

Template.noticeItem.events({
  'click .js-show-notice': function(text) {
    //Router.go('notice');
    //Session.set("noticeTitle", text);
  },
});
