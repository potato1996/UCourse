// Edited by zhaozewei
// 历史遗留注释太多了，影响阅读，被我删掉了，需要恢复的话从 git 里回滚吧。

var dev_courses = [
  {
    coursename:"软件工程",
    description:"软件工程（英语：Software Engineering[1]）1968年秋季，NATO（北約）的科技委員會召集了近50名一流的編程人員、計算機科學家和工業界巨頭，討論和制定擺脫“軟體危機”的對策。在那次會議上第一次提出了軟體工程（software engineering）這個概念，研究和应用如何以系统性的、规范化的、可定量的过程化方法去开发和维护软件，以及如何把经过时间考验而证明正确的管理技术和当前能够得到的最好的技术方法结合起来的学科。它涉及到程序设计语言、数据库、软件开发工具、系统平台、标准、设计模式等方面。",
    notices:[
      {
        notificationname:"第一周作业",
        description:"第一周作业为课本 1.1,1.2,1.3(1)(3), 请在下周三前提交！",
        create_time:new Date()
      },{
        notificationname:"第二周作业",
        description:"第二周大作业已经布置在 OpenJudge, 请尽快完成！",
        create_time:new Date()
      },{
        notificationname:"上课地点更改",
        description:"本周四上课地点临时更改在四教404！",
        create_time:new Date()
      }
    ],
    files:[
      {
        filename:"第一周课件",
        path:"http://121.42.173.75:9000/week0.pdf",
        description:"第一周课件",
        create_time:new Date(),
        filetype:"pdf",
        filesize:668
      },{
        filename:"第二周课件",
        path:"http://121.42.173.75:9000/week1.pdf",
        description:"第二周课件",
        create_time:new Date(),
        filetype:"pdf",filesize:1020
      },{
        filename:"第三周课件",
        path:"http://xxgk.pku.edu.cn/docs/20151110194557498920.pdf",
        description:"第三周课件",
        create_time:new Date(),
        filetype:"pdf",
        filesize:924
      }
    ]
  },{
    coursename:"计算概论",
    description:"计算概论A是针对“信息科学技术学科一年级本科生”开设的一门专业基础主干课程。本课程的教学目标有二：其一，帮助学习者建立起“学习计算机科学技术知识所需的基本知识背景”；其二，帮助学习者“掌握计算机程序设计的基础知识”，培养学习者“独立设计计算机程序解决问题”的基本技能。",
    notices:[
      {
        notificationname:"上机通知",
        description:"周日晚 6:40 在理科一号楼 1324 上机，请同学准时参加！",
        create_time:new Date()
      },{
        notificationname:"期中考试",
        description:"期中考试定于 4 月 23 号，在机房 1326 上机考试，请准时参加！",
        create_time:new Date()
      }
    ],
    files:[
      {
        filename:"助教信息",
        path:"http://121.42.173.75:9000/week0.pdf",
        description:"助教信息",
        create_time:new Date(),
        filetype:"pdf",
        filesize:668
      },{
        filename:"课程大纲",
        path:"http://121.42.173.75:9000/week1.pdf",
        description:"课程大纲",
        create_time:new Date(),
        filetype:"pdf",
        filesize:1020
      },
    ]
  },{
    coursename:"模拟电路",
    description:"模拟电路（英语：analogue electronics，美式：analog electronics）是涉及连续函数形式模拟信号的电子电路，与之相对的是数字电路，后者通常只关注0和1两个逻辑电平。“模拟”二字主要指电压（或电流）对于真实信号成比例的再现，它最初来源于希腊语词汇ανάλογος，意思是“成比例的”。",
    notices:[
      {
        notificationname:"本周作业 Deadline 推迟",
        description:"应同学要求，第 7 次作业推迟到最晚下周三交。",
        create_time:new Date()
      },
    ],
    files:[
      {
        filename:"讲座讲义",
        path:"http://121.42.173.75:9000/week1.pdf",
        description:"本周讲座的讲义！",
        create_time:new Date(),
        filetype:"pdf",
        filesize:1020
      },
    ]
  },{
    coursename:"数字电路",
    description:"数字电路或数字集成电路是由许多的逻辑门组成的复杂电路。与模拟电路相比，它主要进行数字信号的处理（即信号以0与1两个状态表示），因此抗干扰能力较强。数字集成电路有各种门电路、触发器以及由它们构成的各种组合逻辑电路和时序逻辑电路。一个数字系统一般由控制部件和运算部件组成，在时脉的驱动下，控制部件控制运算部件完成所要执行的动作。通过模拟数字转换器、数字模拟转换器，数字电路可以和模拟电路互相连接。",
    notices:[
      {
        notificationname:"期中考试成绩公布",
        description:"期中考试成绩已经公布。需要查分的同学在本周到 1670 查分！",
        create_time:new Date()
      },
    ],
    files:[
      {
        filename:"实验讲义",
        path:"http://121.42.173.75:9000/week1.pdf",
        description:"本周实验课的讲义，请同学们提前预习一下！",
        create_time:new Date(),
        filetype:"pdf",
        filesize:1020
      },
    ]
  },{
    coursename:"软件工程实习",
    description:"软件工程（英语：Software Engineering[1]）1968年秋季，NATO（北約）的科技委員會召集了近50名一流的編程人員、計算機科學家和工業界巨頭，討論和制定擺脫“軟體危機”的對策。在那次會議上第一次提出了軟體工程（software engineering）這個概念，研究和应用如何以系统性的、规范化的、可定量的过程化方法去开发和维护软件，以及如何把经过时间考验而证明正确的管理技术和当前能够得到的最好的技术方法结合起来的学科。它涉及到程序设计语言、数据库、软件开发工具、系统平台、标准、设计模式等方面。",
    notices:[
      {
        notificationname:"周二晚进行代码联调",
        description:"周二晚上在二号教学楼414进行代码联调！",
        create_time:new Date()
      },{
        notificationname:"周四讲 BP",
        description:"周四晚由各组产品经理试讲 BP!",
        create_time:new Date()
      }
    ],
    files:[
      {
        filename:"第七周课件",
        path:"http://121.42.173.75:9000/week0.pdf",
        description:"第七周周四的课件",
        create_time:new Date(),
        filetype:"pdf",
        filesize:668
      },{
        filename:"教学进度",
        path:"http://121.42.173.75:9000/week1.pdf",
        description:"修改后的教学进度表",
        create_time:new Date(),
        filetype:"pdf",
        filesize:1020
      },
    ]
  }
];

var dev_make_link = function(temp_course_id){
  // 创建一个 link 并跟课程 id 关联
  var temp_link_id = uc_link.insert({
    linkname:"test-link"+Math.random(),
    linktype:0,
    url:"",
    account:"test account",
    passwd:"test passwd"
  });
  uc_course_rl_link.insert({link_id:temp_link_id,course_id:temp_course_id});
  return temp_link_id;
}

var dev_add_file = function(link_id, file){
  // 向指定 link 添加一个文件
  var temp_file_id = uc_file.insert(file);
  uc_link_rl_file.insert({link_id:link_id,file_id:temp_file_id});
}

var dev_add_notice = function(link_id, notice){
  // 向指定 link 添加一个 notice
  var temp_notification_id = uc_notification.insert(notice);
  uc_link_rl_notification.insert({link_id:link_id,notification_id:temp_notification_id});
}

var dev_add_course = function(course){
  // 根据 js 类加课，类最低限度下需要课程名和描述。该函数会修改传入的参数!!!
  if(!('isRecommend' in course)){course.isRecommend = 1;}
  if(!('schoolname' in course)){course.schoolname = '北京大学';}
  if(!('departmentname' in course)){course.departmentname = '信息科学技术学院';}

  // 为 course 添加了 uc_course_id 属性！！！
  course.uc_course_id = uc_course.insert(course);
  of_course.insert(course);

  var linkid = dev_make_link(course.uc_course_id);
  if('notices' in course) for(var i=0;i<course.notices.length;i++){
      dev_add_notice(linkid, course.notices[i]);
    }
  if('files' in course) for(var i=0;i<course.files.length;i++){
      dev_add_file(linkid, course.files[i]);
    }

  return course.uc_course_id;
};

var clearall = function(){
  uc_course.remove({})
  uc_link.remove({})
  uc_file.remove({})
  uc_notification.remove({})
  uc_student_rl_course.remove({})
  uc_course_rl_link.remove({})
  uc_link_rl_file.remove({})
  uc_link_rl_notification.remove({})
  of_course.remove({})
}

Meteor.startup(function () {
    // !!! 临时取消了检查机制，每次重启都会清空数据库！
    // if((uc_course.find().count() ===0))
      clearall();
      {dev_courses.forEach(dev_add_course);}
});
