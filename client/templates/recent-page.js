// Created by zhaozewei
// Sam
var RECENT = "showRecent"
Session.setDefault(RECENT, false);

var COURSENAME_KEY = "CourseName";

// Track if this is the first time the list template is rendered
var firstRender = true;
var listRenderHold = LaunchScreen.hold();
listFadeInHold = null;

Template.recentPage.onRendered(function() {
  if (firstRender) {
    // Released in app-body.js
    listFadeInHold = LaunchScreen.hold();

    // Handle for launch screen defined in app-body.js
    listRenderHold.release();

    firstRender = false;
  }

  this.find('.js-title-nav')._uihooks = {
    insertElement: function(node, next) {
      $(node)
        .hide()
        .insertBefore(next)
        .fadeIn();
    },
    removeElement: function(node) {
      $(node).fadeOut(function() {
        this.remove();
      });
    }
  };
});

Template.recentPage.helpers({
  todosReady: function() {
    return true;//Router.current().reNoticelistHandle.ready();
  },

  todos: function(listId) {
      Meteor.subscribe('fetch_uc_student_rl_course');
      var this_courses = uc_student_rl_course.find().fetch();
      var this_courses_length = this_courses.length;
      var courses_id_array = new Array();
      for(var j = 0 ;j < this_courses_length; j++)
      {
        courses_id_array.push(this_courses[j]['course_id']);
      }
      //alert(courses_id_array.length);
      Meteor.subscribe('fetch_notification_by_course_id_list',courses_id_array);
      //alert(uc_notification.find({},{sort: {create_time: -1}}).count());
      return uc_notification.find({},{sort: {create_time: -1}});
  },

  filelistReady: function() {
    return true;//Router.current().reFilelistHandle.ready();
  },

  filelist: function(listId) {
      Meteor.subscribe('fetch_uc_student_rl_course');
      var this_courses = uc_student_rl_course.find().fetch();
      var this_courses_length = this_courses.length;
      var courses_id_array = new Array();
      for(var j = 0 ;j < this_courses_length; j++)
      {
        courses_id_array.push(this_courses[j]['course_id']);
      }
      Meteor.subscribe('fetch_file_by_course_id_list', courses_id_array);
      return uc_file.find({},{sort: {create_time: -1}});
  },

  // Sam
  showRecent: function(list){
    //var course = uc_course.find({coursename: 'Recent'}).fetch();
    //alert(listId.coursename);
    if (list.coursename == 'Recent')
      return true;
    else
      return false;
   // return Session.get(RECENT);
  }
});

Template.recentPage.events({
// added by zhaozewei, to implement the switch(notice/file) function
  'click .js-switch-re-notice': function(event, template) {
    //alert("switch to notice");
    $("#col-re-notice").css("display", "block");       // show notice column
    $("#col-re-file").css("display", "none");          // hide file column

    $("#btn-re-notice").attr("disabled", "disabled");  // disable the pressed button
    $("#btn-re-notice").css({"background-color": "#598ea9", "cursor": "unset"});
    $("#btn-re-file").attr("disabled", false);         // enable the other button
    $("#btn-re-file").css({"background-color": "#79aec9", "cursor": "pointer"});
  },

  'click .js-switch-re-file': function(event, template) {
    //alert("switch to file");
    $("#col-re-file").css("display", "block");
    $("#col-re-notice").css("display", "none");

    $("#btn-re-file").attr("disabled", "disabled");
    $("#btn-re-file").css({"background-color": "#598ea9", "cursor": "unset"});
    $("#btn-re-notice").attr("disabled", false);
    $("#btn-re-notice").css({"background-color": "#79aec9", "cursor": "pointer"});
  },
// end added

});
