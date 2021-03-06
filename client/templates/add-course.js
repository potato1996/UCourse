Session.setDefault("addCoursePageStatus", "list");
Session.setDefault("searchCourseKeyword","");
Session.setDefault("courseID","123");

//==================================================
// 需要大有填充的三个函数！
var searchResult = new Array();

var searchCourse = function(keyword){
    searchResult = [];
    if(keyword === "")
        {
            return searchResult;
        }
  // 该函数接受 keyword 字符串，返回 对象数组，对象含有 text 和 id 两个属性。
  // text 是要显示的课程名、基本信息等， id 为请求详细信息、选课时用的 id。
  // id 是个字符串
    // alert(keyword);
    Meteor.subscribe('fetch_rec_course_by_name',keyword);
    var search_result_list = of_course.find({}).fetch();
    var listlen = search_result_list.length;

    for(var j = 0;j<listlen;j++)
    {
        var info = "  课程名: ";
        info += search_result_list[j]['coursename'];
        info += "  学校: ";
        info += search_result_list[j]['schoolname'];
        info += "  院系: ";
        info += search_result_list[j]['departmentname'];
        var tempdata = {text:info,id:search_result_list[j]['uc_course_id'],courseinfo:search_result_list[j]['description'],coursename:search_result_list[j]['coursename']};
        searchResult.push(tempdata);
    }

  //var searchResult = [
    //{text:"数学建模1", id:"123"},
    //{text:"数学建模2", id:"234"},
    //{text:"数学建模3", id:"345"},
    //{text:"数学建模4", id:"456"},
  //];
  return searchResult;
}

var getInfoById = function(){
  // 该函数从 Session.get("courseID") 中读取 id 字符串，返回该课程的名字。
 var courseId = Session.get("courseID");
 //Meteor.subscribe('fetch_single_course_by_id',courseId);
    resultlen = searchResult.length;
    for(var j = 0;j<resultlen;++j)
        {
           if(searchResult[j].id === courseId)
               {
                   return searchResult[j].courseinfo;
               }
        }
    return "Not found";
};

var getNameByID = function(){
  // 该函数从 Session.get("courseID") 中读取 id 字符串，返回该课程的名字。
 var courseId = Session.get("courseID");
 //Meteor.subscribe('fetch_single_course_by_id',courseId);
    resultlen = searchResult.length;
    for(var j = 0;j<resultlen;++j)
        {
           if(searchResult[j].id === courseId)
               {
                   return searchResult[j].coursename;
               }
        }
    return "Not found";
};

var addCourseByID = function(){
  var courseID = Session.get("courseID");

  Meteor.subscribe('add_course_by_rec_course_id',courseID)
  //alert('addCourseByID works.');
}

//==================================================

Template.addCourse.helpers({
  courseNameInput: function() {
    var nameStr = Session.get("searchCourseKeyword");
    return (nameStr ==  "") ? nameStr : ("：" + nameStr);
  },
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
    $("input#the-course-searcher")[0].value="";
    Session.set("searchCourseKeyword","");
  },
  'click .js-add-course': addCourseByID,
  'submit .js-course-new': function(event) {
    event.preventDefault();

    var $input = $(event.target).find('[id=the-course-searcher]');
    if (! $input.val())
      return;

    Session.set('addCoursePageStatus','list');
    Session.set('searchCourseKeyword',$input.val());
    Router.go('addCourse');
  },

// Added by zhaozewei
  'click .js-diy-course': function() {
    Router.go('DIYCourse');
  }
});
