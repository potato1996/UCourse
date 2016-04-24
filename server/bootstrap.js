// if the database is empty on server start, create some sample data.
// Edited by zhaozewei
Meteor.startup(function () {
    if(uc_course.find().count() ===0 )
        {
            var temp_course_id = uc_course.insert({coursename:"test course",schoolname:"pku",departmentname:"Unknown"});
            uc_student_rl_course.insert({student_id:"ArpJBApm9S9c2o2R8",course_id:temp_course_id});
            var temp_link_id = uc_link.insert({linkname:"test link",linktype:0,url:"",account:"test account",passwd:"test passwd"});
            var temp_file_id = uc_file.insert({filename:"test file",path:"test path",description:"hhh",create_time:"Unknown"});
            uc_course_rl_link.insert({link_id:temp_link_id,course_id:temp_course_id});
            uc_link_rl_file.insert({link_id:temp_link_id,file_id:temp_file_id});
            
            var temp_notification_id1 = uc_notification.insert({notificationname:"test notice 1",description:"1",create_time:"Unknown"});
            var temp_notification_id2 = uc_notification.insert({notificationname:"test notice 2",description:"2",create_time:"Unknown"});
            var temp_notification_id3 = uc_notification.insert({notificationname:"test notice 3",description:"3",create_time:"Unknown"});
            
            uc_link_rl_notification.insert({link_id:temp_link_id,notification_id:temp_notification_id1});
            uc_link_rl_notification.insert({link_id:temp_link_id,notification_id:temp_notification_id2});
            uc_link_rl_notification.insert({link_id:temp_link_id,notification_id:temp_notification_id3});
            
        }
  //if (Lists.find().count() === 0) {
    /*
  if (uc_course.find().count() === 0) {
    var data = [
      {name: "软件工程",
       items: [
         "阅读材料：浪潮之巅",
         "阅读材料：人月神话",
         "第三周课件",
         "第二周课件",
         "第一周课件",
         "教学计划"
       ]
      },
      {name: "软件工程实习",
       items: [
         "教学计划",
         "第一周课件"
         ]
      },
      {name: "数学建模",
       items: [
         "第一周作业",
         "第一周课件",
         "教学计划"
       ]
      }
    ];

    var timestamp = (new Date()).getTime();
    _.each(data, function(list) {
      var list_id = Lists.insert({name: list.name,
        incompleteCount: list.items.length});

      _.each(list.items, function(text) {
        Todos.insert({listId: list_id,
                      text: text,
                      createdAt: new Date(timestamp)});
        timestamp += 1; // ensure unique timestamp.
      });
    });
    _.each(data, function(list) {
      var list_id = uc_course.insert({coursename: list.name});

      _.each(list.items, function(text) {
        Todos.insert({listId: list_id,
                      text: text,
                      createdAt: new Date(timestamp)});
        timestamp += 1; // ensure unique timestamp.
      });
    });
  }*/
});
