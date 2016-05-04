var ERRORS_KEY = 'signinErrors';

Template.signin.onCreated(function() {
  Session.set(ERRORS_KEY, {});
});

Template.signin.helpers({
  errorMessages: function() {
    return _.values(Session.get(ERRORS_KEY));
  },
  errorClass: function(key) {
    return Session.get(ERRORS_KEY)[key] && 'error';
  }
});

Template.signin.events({
  'submit': function(event, template) {
    event.preventDefault();
    
    var email = template.$('[name=email]').val();
    var password = template.$('[name=password]').val();
    
    var errors = {};

    if (! email) {
      errors.email = 'Email is required';
    }

    if (! password) {
      errors.password = 'Password is required';
    }
    
    Session.set(ERRORS_KEY, errors);
    if (_.keys(errors).length) {
      return;
    }
    
    Meteor.loginWithPassword(email, password, function(error) {
      if (error) {
        return Session.set(ERRORS_KEY, {'none': error.reason});
      }
      
      //recentInit();
      
      Router.go('home');
    });
  }
});

/*
function recentInit() {
  alert("234");
  // alert(uc_notification.find().count());
  Meteor.subscribe('fetch_uc_student_rl_course');
  var courses = uc_student_rl_course.find().fetch();
  var courses_num = courses.length;
  for (var i = 0; i < courses_num; i++) {
    Meteor.subscribe('fetch_single_course_by_id', courses[i]['course_id']);
    Meteor.subscribe('fetch_notification_by_course_id', courses[i]['course_id']);
    Meteor.subscribe('fetch_file_by_course_id', courses[i]['course_id']);
    // alert(uc_notification.find().count());

  }
  var recent = uc_course.find({coursename: 'Recent'}).fetch();
  if (recent.length > 0) {
  // Meteor.subscribe('fetch_student_rl_course_by_id', recent[0]['_id']);
  // courses = uc_student_rl_course.find().fetch();
  // uc_student_rl_course.remove(curr_rl[0]['_id']);
  // uc_student_rl_course.find({course_id:course_id,student_id:Meteor.userId()});
    alert(recent.length);
    for (var i = 0; i < recent.length; i++) {
      var src = uc_student_rl_course.find({course_id:recent[i]['_id'], student_id:Meteor.userId()}).fetch();
      alert(src.length);
    }
  }
  else {
    alert(recent.length);

  var temp_course_id = uc_course.insert({coursename:"Recent",schoolname:"pku",departmentname:"Unknown",description:"啦啦啦啦",isRecommend:1});
  uc_student_rl_course.insert({student_id:Meteor.userId(),course_id:temp_course_id});
            
  var temp_link_id = uc_link.insert({linkname:"test link",linktype:0,url:"",account:"test account",passwd:"test passwd"});
  uc_course_rl_link.insert({link_id:temp_link_id,course_id:temp_course_id});

  var temp_file_id1 = uc_file.insert({filename:"test file1",path:"http://xxgk.pku.edu.cn/docs/20151110194557498920.pdf",description:"description1",create_time:new Date()});
  uc_link_rl_file.insert({link_id:temp_link_id,file_id:temp_file_id1});
            
  var temp_file_id2 = uc_file.insert({filename:"test file2",path:"http://xxgk.pku.edu.cn/docs/20151110194557498920.pdf",description:"description2",create_time:new Date()});
  uc_link_rl_file.insert({link_id:temp_link_id,file_id:temp_file_id2});
            
  var temp_file_id3 = uc_file.insert({filename:"test file3",path:"http://xxgk.pku.edu.cn/docs/20151110194557498920.pdf",description:"description3",create_time:new Date()});
  uc_link_rl_file.insert({link_id:temp_link_id,file_id:temp_file_id3});

  var temp_notification_id1 = uc_notification.insert({notificationname:"test notice 1",description:"description1",create_time:new Date()});
  uc_link_rl_notification.insert({link_id:temp_link_id,notification_id:temp_notification_id1});
            
  var temp_notification_id2 = uc_notification.insert({notificationname:"test notice 2",description:"description2",create_time:new Date()});
  uc_link_rl_notification.insert({link_id:temp_link_id,notification_id:temp_notification_id2});
            
  var temp_notification_id3 = uc_notification.insert({notificationname:"test notice 3",description:"description3",create_time:new Date()});
  uc_link_rl_notification.insert({link_id:temp_link_id,notification_id:temp_notification_id3});

  var temp_notification_id4 = uc_notification.insert({notificationname:"test notice 4",description:"description4",create_time:new Date()});
  uc_link_rl_notification.insert({link_id:temp_link_id,notification_id:temp_notification_id4});

  var temp_notification_id5 = uc_notification.insert({notificationname:"test notice 5",description:"description5",create_time:new Date()});
  uc_link_rl_notification.insert({link_id:temp_link_id,notification_id:temp_notification_id5});
}
}
*/


/*
 * added by Sam, 2016.03.29, start
 */
 /*
function recentInit() {
  var recent_name = "Recent";
  var show_num = 5;

  var lists = Lists.find({name: recent_name}).fetch();
  var lists_num = Lists.find({name: recent_name}).count();
  for (var i = 0; i < lists_num; i++) {
    Meteor.subscribe('todos', lists[i]['_id']);
    var todos = Todos.find({listId: lists[i]['_id']}).fetch();
    var todos_num = Todos.find({listId: lists[i]['_id']}).count();
    for (var j = 0; j < todos_num; j++) {
      Todos.remove(todos[j]['_id']);
    }
    Lists.remove(lists[i]['_id']);
  }

  //var recent_date;
  var recent = new Array();
  var p = 0;
  //var count = 0;
  
  var lists = Lists.find().fetch();
  var lists_num = Lists.find().count();

  for (var i = 0; i < lists_num; i++) {
    Meteor.subscribe('todos', lists[i]['_id']);
    var todos = Todos.find({listId: lists[i]['_id']}).fetch();
    var todos_num = Todos.find({listId: lists[i]['_id']}).count();
    //alert("id: " + lists[i]['_id'] + ", count: " + todos_num);
    for (var j = 0; j < todos_num; j++) {
        recent[p] = new Array();
        recent[p]['text'] = todos[j]['text'];
        recent[p++]['createdAt'] = todos[j]['createdAt'];
        //recent_date = todos[j]['createdAt'];
      //}
      //count++;
    }
  }

  recent.sort(function(b, a) {
    return a['createdAt'] - b['createdAt'];
  });



  if (Lists.find({name: recent_name}).count() === 0) {
    var list = {name: "Recent", incompleteCount: 0};
    list._id = Lists.insert(list);

    var n = p;
    if (n > show_num)
      n = show_num;

    for (var i = 0; i < n; i++) {
      Todos.insert({
        listId: list._id,
        text: recent[i]['text'],
        checked: false,
        createdAt: recent[i]['createdAt']
      });
      Lists.update(list._id, {$inc: {incompleteCount: 1}});
    } 
  }
}
*/
/*
 * added by Sam, 2016.03.29, end
 */
