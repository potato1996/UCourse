Session.setDefault("addCoursePageStatus", "list");
Session.setDefault("searchCourseKeyword","");
Session.setDefault("courseID","123");

//==================================================
// 需要大有填充的三个函数！

var searchCourse = function(keyword){
  // 该函数接受 keyword 字符串，返回 对象数组，对象含有 text 和 id 两个属性。
  // text 是要显示的课程名、基本信息等， id 为请求详细信息、选课时用的 id。
  // id 是个字符串
  var searchResult = [
    {text:"数学建模1", id:"123"},
    {text:"数学建模2", id:"234"},
    {text:"数学建模3", id:"345"},
    {text:"数学建模4", id:"456"},
  ];
  return searchResult;
}

var getInfoById = function(){
  // 该函数从 Session.get("courseID") 中读取 id 字符串，返回该课程的名字。
  var courseId = Session.get("courseID");
  return courseId;
};

var getNameByID = function(){
  // 该函数从 Session.get("courseID") 中读取 id 字符串，返回该课程的简介。
  return Session.get("courseID");
};

//==================================================

Template.addCourse.helpers({
  courses: function(){
    return searchCourse(Session.get("searchCourseKeyword"));
  },
  showCourseList: function(){
    return Session.get("addCoursePageStatus")==="list";
  },
  courseInfo: function(){
    return getInfoById();
  },
  courseNameForInfo: function(){
    return getNameByID();
  },
});

todebug="";

Template.addCourse.events({
  'click .js-course-info': function(event,template) {
    // 下面两行代码从 事件对象 中提取 ID，使用正则表达式。
    var htmlCode = event.currentTarget.outerHTML.match("courseID-[^>]*>")[0];
    var courseID = htmlCode.slice(9,-2);
    Session.set("addCoursePageStatus","info");
    Session.set("courseID", courseID);
  },
  'click .js-page-back': function(){
    Session.set("addCoursePageStatus","list");
  }
});
