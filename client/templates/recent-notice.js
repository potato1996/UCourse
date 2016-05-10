var NAME = "noticeName"
var DESCRIPTION = "noticeDescription"
var TIME = "noticeTime"

Template.recentNotice.helpers({
  fileTime: function(create_time) {
    return getMyTime(create_time);  // defined in file-item.js
  },
/*
  noticeName: function(){
  	//alert(list.coursename);
  	alert(uc_course.find().count());
  	return uc_notification.find({},{sort: {create_time: -1}});  
  }
*/
});
