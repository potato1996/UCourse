// if the database is empty on server start, create some sample data.
// Edited by zhaozewei
Meteor.startup(function () {
    if((uc_course.find().count() ===0))
        /*{
            var temp_course_id = uc_course.insert({
              coursename:"Recent",
              schoolname:"北京大学",
              departmentname:"信息科学技术学院",
              description:"软件工程（英语：Software Engineering[1]）1968年秋季，NATO（北約）的科技委員會召集了近50名一流的編程人員、計算機科學家和工業界巨頭，討論和制定擺脫“軟體危機”的對策。在那次會議上第一次提出了軟體工程（software engineering）這個概念，研究和应用如何以系统性的、规范化的、可定量的过程化方法去开发和维护软件，以及如何把经过时间考验而证明正确的管理技术和当前能够得到的最好的技术方法结合起来的学科。它涉及到程序设计语言、数据库、软件开发工具、系统平台、标准、设计模式等方面。",
              isRecommend:1,
            });
            uc_student_rl_course.insert({student_id:"ArpJBApm9S9c2o2R8",course_id:temp_course_id,rank:1});
            //uc_student_rl_course.insert({student_id:"PkxyARbRauLtWTjqR", course_id:temp_course_id, rank:1});  //zzw

            var temp_of_course_id = of_course.insert({
              coursename:"Recent",
              schoolname:"北京大学",
              departmentname:"信息科学技术学院",
              description:"软件工程（英语：Software Engineering[1]）1968年秋季，NATO（北約）的科技委員會召集了近50名一流的編程人員、計算機科學家和工業界巨頭，討論和制定擺脫“軟體危機”的對策。在那次會議上第一次提出了軟體工程（software engineering）這個概念，研究和应用如何以系统性的、规范化的、可定量的过程化方法去开发和维护软件，以及如何把经过时间考验而证明正确的管理技术和当前能够得到的最好的技术方法结合起来的学科。它涉及到程序设计语言、数据库、软件开发工具、系统平台、标准、设计模式等方面。",
              uc_course_id: temp_course_id});

            var temp_link_id = uc_link.insert({linkname:"test link",linktype:0,url:"",account:"test account",passwd:"test passwd"});
            var temp_file_id1 = uc_file.insert({filename:"第一周课件",path:"http://121.42.173.75:9000/week0.pdf",description:"第一周课件",create_time:new Date()});
            uc_course_rl_link.insert({link_id:temp_link_id,course_id:temp_course_id});
            uc_link_rl_file.insert({link_id:temp_link_id,file_id:temp_file_id1});
            
            var temp_file_id2 = uc_file.insert({filename:"第二周课件",path:"http://121.42.173.75:9000/week1.pdf",description:"第二周课件",create_time:new Date()});
            uc_link_rl_file.insert({link_id:temp_link_id,file_id:temp_file_id2});

            var temp_file_id3 = uc_file.insert({filename:"第三周课件", path:"http://xxgk.pku.edu.cn/docs/20151110194557498920.pdf", description:"第三周课件", create_time:new Date()});
            uc_link_rl_file.insert({link_id:temp_link_id, file_id:temp_file_id3});

            var temp_notification_id1 = uc_notification.insert({
              notificationname:"第一周作业",
              description:"第一周作业为课本 1.1,1.2,1.3(1)(3), 请在下周三前提交！",
              create_time:new Date()
            });
            uc_link_rl_notification.insert({link_id:temp_link_id,notification_id:temp_notification_id1});

            var temp_notification_id2 = uc_notification.insert({
              notificationname:"第二周作业",
              description:"第二周大作业已经布置在 OpenJudge, 请尽快完成！",
              create_time:new Date()
            });
            uc_link_rl_notification.insert({link_id:temp_link_id,notification_id:temp_notification_id2});

            var temp_notification_id3 = uc_notification.insert({
              notificationname:"上课地点更改",
              description:"本周四上课地点临时更改在四教404！",
              create_time:new Date()});
            uc_link_rl_notification.insert({link_id:temp_link_id,notification_id:temp_notification_id3});

        }*/
        {
            var temp_course_id = uc_course.insert({
              coursename:"软件工程",
              schoolname:"北京大学",
              departmentname:"信息科学技术学院",
              description:"软件工程（英语：Software Engineering[1]）1968年秋季，NATO（北約）的科技委員會召集了近50名一流的編程人員、計算機科學家和工業界巨頭，討論和制定擺脫“軟體危機”的對策。在那次會議上第一次提出了軟體工程（software engineering）這個概念，研究和应用如何以系统性的、规范化的、可定量的过程化方法去开发和维护软件，以及如何把经过时间考验而证明正确的管理技术和当前能够得到的最好的技术方法结合起来的学科。它涉及到程序设计语言、数据库、软件开发工具、系统平台、标准、设计模式等方面。",
              isRecommend:1,
            });
            uc_student_rl_course.insert({student_id:"ArpJBApm9S9c2o2R8",course_id:temp_course_id,rank:1});
            //uc_student_rl_course.insert({student_id:"PkxyARbRauLtWTjqR", course_id:temp_course_id, rank:1});  //zzw

            var temp_of_course_id = of_course.insert({
              coursename:"软件工程",
              schoolname:"北京大学",
              departmentname:"信息科学技术学院",
              description:"软件工程（英语：Software Engineering[1]）1968年秋季，NATO（北約）的科技委員會召集了近50名一流的編程人員、計算機科學家和工業界巨頭，討論和制定擺脫“軟體危機”的對策。在那次會議上第一次提出了軟體工程（software engineering）這個概念，研究和应用如何以系统性的、规范化的、可定量的过程化方法去开发和维护软件，以及如何把经过时间考验而证明正确的管理技术和当前能够得到的最好的技术方法结合起来的学科。它涉及到程序设计语言、数据库、软件开发工具、系统平台、标准、设计模式等方面。",
              uc_course_id: temp_course_id});

            var temp_link_id = uc_link.insert({linkname:"test link",linktype:0,url:"",account:"test account",passwd:"test passwd"});
            var temp_file_id1 = uc_file.insert({filename:"第一周课件",path:"http://121.42.173.75:9000/week0.pdf",description:"第一周课件",create_time:new Date(),filetype:"pdf",fileszie:668});
            uc_course_rl_link.insert({link_id:temp_link_id,course_id:temp_course_id});
            uc_link_rl_file.insert({link_id:temp_link_id,file_id:temp_file_id1});
            
            var temp_file_id2 = uc_file.insert({filename:"第二周课件",path:"http://121.42.173.75:9000/week1.pdf",description:"第二周课件",create_time:new Date(),filetype:"pdf",filesize:1020});
            uc_link_rl_file.insert({link_id:temp_link_id,file_id:temp_file_id2});

            var temp_file_id3 = uc_file.insert({filename:"第三周课件", path:"http://xxgk.pku.edu.cn/docs/20151110194557498920.pdf", description:"第三周课件", create_time:new Date(),filetype:"pdf",filesize:924});
            uc_link_rl_file.insert({link_id:temp_link_id, file_id:temp_file_id3});

            var temp_notification_id1 = uc_notification.insert({
              notificationname:"第一周作业",
              description:"第一周作业为课本 1.1,1.2,1.3(1)(3), 请在下周三前提交！",
              create_time:new Date()
            });
            uc_link_rl_notification.insert({link_id:temp_link_id,notification_id:temp_notification_id1});

            var temp_notification_id2 = uc_notification.insert({
              notificationname:"第二周作业",
              description:"第二周大作业已经布置在 OpenJudge, 请尽快完成！",
              create_time:new Date()
            });
            uc_link_rl_notification.insert({link_id:temp_link_id,notification_id:temp_notification_id2});

            var temp_notification_id3 = uc_notification.insert({
              notificationname:"上课地点更改",
              description:"本周四上课地点临时更改在四教404！",
              create_time:new Date()});
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
