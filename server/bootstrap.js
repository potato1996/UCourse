// if the database is empty on server start, create some sample data.
// Edited by zhaozewei

var dev_add_notices = function(temp_course_id){
  var temp_link_id = uc_link.insert({linkname:"test link",linktype:0,url:"",account:"test account",passwd:"test passwd"});
  var temp_file_id1 = uc_file.insert({filename:"第一周课件",path:"http://121.42.173.75:9000/week0.pdf",description:"第一周课件",create_time:new Date(),filetype:"pdf",filesize:668});
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

var dev_add_course = function(course){
  // 自动完成加课操作，避免重复代码
  // 添加的课最低限度下只需要课程名和描述就行了
  // 注意，这个函数会修改传入的参数，为其增加默认信息和 uc_course_id 属性
  if(!('isRecommend' in course)){
      course.isRecommend = 1;
  }
  if(!('schoolname' in course)){
    course.schoolname = '北京大学';
  }
  if(!('departmentname' in course)){
    course.departmentname = '信息科学技术学院';
  }
  course.uc_course_id = uc_course.insert(course);
  dev_add_notices(course.uc_course_id);
  of_course.insert(course);
  // return course.uc_course_id;
};

var dev_courses = [
  {
    coursename:"软件工程",
    description:"软件工程（英语：Software Engineering[1]）1968年秋季，NATO（北約）的科技委員會召集了近50名一流的編程人員、計算機科學家和工業界巨頭，討論和制定擺脫“軟體危機”的對策。在那次會議上第一次提出了軟體工程（software engineering）這個概念，研究和应用如何以系统性的、规范化的、可定量的过程化方法去开发和维护软件，以及如何把经过时间考验而证明正确的管理技术和当前能够得到的最好的技术方法结合起来的学科。它涉及到程序设计语言、数据库、软件开发工具、系统平台、标准、设计模式等方面。",
  },{
    coursename:"计算概论",
    description:"计算概论A是针对“信息科学技术学科一年级本科生”开设的一门专业基础主干课程。本课程的教学目标有二：其一，帮助学习者建立起“学习计算机科学技术知识所需的基本知识背景”；其二，帮助学习者“掌握计算机程序设计的基础知识”，培养学习者“独立设计计算机程序解决问题”的基本技能。"
  },{
    coursename:"模拟电路",
    description:"模拟电路（英语：analogue electronics，美式：analog electronics）是涉及连续函数形式模拟信号的电子电路，与之相对的是数字电路，后者通常只关注0和1两个逻辑电平。“模拟”二字主要指电压（或电流）对于真实信号成比例的再现，它最初来源于希腊语词汇ανάλογος，意思是“成比例的”。"
  },{
    coursename:"数字电路",
    description:"数字电路或数字集成电路是由许多的逻辑门组成的复杂电路。与模拟电路相比，它主要进行数字信号的处理（即信号以0与1两个状态表示），因此抗干扰能力较强。数字集成电路有各种门电路、触发器以及由它们构成的各种组合逻辑电路和时序逻辑电路。一个数字系统一般由控制部件和运算部件组成，在时脉的驱动下，控制部件控制运算部件完成所要执行的动作。通过模拟数字转换器、数字模拟转换器，数字电路可以和模拟电路互相连接。"
  },{
    coursename:"软件工程实习",
    description:"软件工程（英语：Software Engineering[1]）1968年秋季，NATO（北約）的科技委員會召集了近50名一流的編程人員、計算機科學家和工業界巨頭，討論和制定擺脫“軟體危機”的對策。在那次會議上第一次提出了軟體工程（software engineering）這個概念，研究和应用如何以系统性的、规范化的、可定量的过程化方法去开发和维护软件，以及如何把经过时间考验而证明正确的管理技术和当前能够得到的最好的技术方法结合起来的学科。它涉及到程序设计语言、数据库、软件开发工具、系统平台、标准、设计模式等方面。"
  }
];

Meteor.startup(function () {
    // !!! 临时取消了检查机制，每次重启都会清空数据库！
    uc_course.remove({});
    of_course.remove({});
    // if((uc_course.find().count() ===0))
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
            // var temp_course_id = uc_course.insert({
            //   coursename:"软件工程",
            //   schoolname:"北京大学",
            //   departmentname:"信息科学技术学院",
            //   description:"软件工程（英语：Software Engineering[1]）1968年秋季，NATO（北約）的科技委員會召集了近50名一流的編程人員、計算機科學家和工業界巨頭，討論和制定擺脫“軟體危機”的對策。在那次會議上第一次提出了軟體工程（software engineering）這個概念，研究和应用如何以系统性的、规范化的、可定量的过程化方法去开发和维护软件，以及如何把经过时间考验而证明正确的管理技术和当前能够得到的最好的技术方法结合起来的学科。它涉及到程序设计语言、数据库、软件开发工具、系统平台、标准、设计模式等方面。",
            //   isRecommend:1,
            // });
            // //uc_student_rl_course.insert({student_id:"ArpJBApm9S9c2o2R8",course_id:temp_course_id,rank:1});
            // //uc_student_rl_course.insert({student_id:"PkxyARbRauLtWTjqR", course_id:temp_course_id, rank:1});  //zzw
            //
            // var temp_of_course_id = of_course.insert({
            //   coursename:"软件工程",
            //   schoolname:"北京大学",
            //   departmentname:"信息科学技术学院",
            //   description:"软件工程（英语：Software Engineering[1]）1968年秋季，NATO（北約）的科技委員會召集了近50名一流的編程人員、計算機科學家和工業界巨頭，討論和制定擺脫“軟體危機”的對策。在那次會議上第一次提出了軟體工程（software engineering）這個概念，研究和应用如何以系统性的、规范化的、可定量的过程化方法去开发和维护软件，以及如何把经过时间考验而证明正确的管理技术和当前能够得到的最好的技术方法结合起来的学科。它涉及到程序设计语言、数据库、软件开发工具、系统平台、标准、设计模式等方面。",
            //   uc_course_id: temp_course_id});

            // 添加全部调试课程，注意 dev_add_course 函数会为这些课程生成 id
            dev_courses.forEach(dev_add_course);
            // 下面的代码需要的课程 id ，对应第一门课程：软件工程
            // temp_course_id = dev_courses[0].uc_course_id;

            // var temp_link_id = uc_link.insert({linkname:"test link",linktype:0,url:"",account:"test account",passwd:"test passwd"});
            // var temp_file_id1 = uc_file.insert({filename:"第一周课件",path:"http://121.42.173.75:9000/week0.pdf",description:"第一周课件",create_time:new Date(),filetype:"pdf",filesize:668});
            // uc_course_rl_link.insert({link_id:temp_link_id,course_id:temp_course_id});
            // uc_link_rl_file.insert({link_id:temp_link_id,file_id:temp_file_id1});
            //
            // var temp_file_id2 = uc_file.insert({filename:"第二周课件",path:"http://121.42.173.75:9000/week1.pdf",description:"第二周课件",create_time:new Date(),filetype:"pdf",filesize:1020});
            // uc_link_rl_file.insert({link_id:temp_link_id,file_id:temp_file_id2});
            //
            // var temp_file_id3 = uc_file.insert({filename:"第三周课件", path:"http://xxgk.pku.edu.cn/docs/20151110194557498920.pdf", description:"第三周课件", create_time:new Date(),filetype:"pdf",filesize:924});
            // uc_link_rl_file.insert({link_id:temp_link_id, file_id:temp_file_id3});
            //
            // var temp_notification_id1 = uc_notification.insert({
            //   notificationname:"第一周作业",
            //   description:"第一周作业为课本 1.1,1.2,1.3(1)(3), 请在下周三前提交！",
            //   create_time:new Date()
            // });
            // uc_link_rl_notification.insert({link_id:temp_link_id,notification_id:temp_notification_id1});
            //
            // var temp_notification_id2 = uc_notification.insert({
            //   notificationname:"第二周作业",
            //   description:"第二周大作业已经布置在 OpenJudge, 请尽快完成！",
            //   create_time:new Date()
            // });
            // uc_link_rl_notification.insert({link_id:temp_link_id,notification_id:temp_notification_id2});
            //
            // var temp_notification_id3 = uc_notification.insert({
            //   notificationname:"上课地点更改",
            //   description:"本周四上课地点临时更改在四教404！",
            //   create_time:new Date()});
            // uc_link_rl_notification.insert({link_id:temp_link_id,notification_id:temp_notification_id3});
            //
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
