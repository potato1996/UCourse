var NAME = "noticeName"
var DESCRIPTION = "noticeDescription"
var TIME = "noticeTime"

Template.recentNotice.helpers({
  noticeName: function(){
  	//alert(list.coursename);
  	alert(uc_course.find().count());
  	return uc_notification.find({},{sort: {create_time: -1}});  
  }
});