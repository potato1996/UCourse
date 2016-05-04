// created by zhaozewei
//Session.setDefault("noticeTitle", "title");

Template.noticeItem.helpers({
  noticeTime: function(create_time) {
    Y = create_time.getFullYear() + '-';
    M = (create_time.getMonth()+1 < 10 ? '0'+(create_time.getMonth()+1) : create_time.getMonth()+1) + '-';
    _D = create_time.getDate();
    D = (_D < 10 ? '0'+ _D : _D) + ' ';
    h = create_time.getHours() + ':';
    m = create_time.getMinutes();
    myTime = Y+M+D+h+m;
    return myTime;
  }
});

Template.noticeItem.events({
  'click .js-show-notice': function(text) {
    //Router.go('notice');
    //Session.set("noticeTitle", text);
  },
});
