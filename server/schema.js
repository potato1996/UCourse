/**
uc_ 用户的数据库
of_ 官方的数据库

numid 递增标识，从1开始递增
id 随机标识，系统生成
rank 排序，用于显示顺序
**/

/***  Entity  ***/
uc_student = new Mongo.Collection("db_student");
uc_course = new Mongo.Collection("db_course");
uc_link = new Mongo.Collection("db_link");
uc_file = new Mongo.Collection("db_file");
uc_notification = new Mongo.Collection("db_notification");

/***  Relation  ***/
uc_student_rl_course = new Mongo.Collection("db_student_rl_course");
uc_course_rl_link = new Mongo.Collection("db_course_rl_link");
uc_link_rl_file = new Mongo.Collection("db_link_rl_file");
uc_link_rl_notification = new Mongo.Collection("db_link_rl_notification");

/***  Entity  ***/
of_course = new Mongo.Collection("db_of_course");
of_link = new Mongo.Collection("db_of_link");
of_file = new Mongo.Collection("db_of_file");
of_notification = new Mongo.Collection("db_of_notification");

/***  Relation  ***/
of_course_rl_link = new Mongo.Collection("db_of_course_rl_link");
of_link_rl_file = new Mongo.Collection("db_of_link_rl_file");
of_link_rl_notification = new Mongo.Collection("db_of_link_rl_notification");

/*** 在更新，插入数据时，请检查schema
例如：插入course_list时使用
course_schema.namedContext("myContext").validate(course_list)
进行判断
***/
uc_student_schema = new SimpleSchema({
    numid: {type: Number},
    id: {type: String, regEx: SimpleSchema.RegEx.Id},
    username: {type: String},
    passwd: {type: String, regEx: SimpleSchema.RegEx.Id},
    });

uc_course_schema = new SimpleSchema({
    numid: {type: Number},
    id: {type: String, regEx: SimpleSchema.RegEx.Id},
    rank: {type: Number},
    schoolname: {type: String},
    departmentname: {type: String},
    coursename: {type: String},
    });

uc_link_schema = new SimpleSchema({
    numid: {type: Number},
    id: {type: String, regEx: SimpleSchema.RegEx.Id},
    linkname: {type: String},
    linktype: {type: Number}, //0=pku教学网，1=163邮箱，2=百度网盘，
    url:{type: String, regEx: SimpleSchema.RegEx.Url},
    account:{type: String},
    passwd: {type: String},
    });

uc_file_schema = new SimpleSchema({
    numid: {type: Number},
    id: {type: String, regEx: SimpleSchema.RegEx.Id},
    filename: {type: String},
    path:{type: String},
    description:{type: String}
    });

uc_notification_schema = new SimpleSchema({
    numid: {type: Number},
    id: {type: String, regEx: SimpleSchema.RegEx.Id},
    notificationname: {type: String},
    description:{type: String}
    });

uc_student_rl_course_schema = new SimpleSchema({
    studentnumid: {type: Number},
    coursenumid: {type: Number},
    studentid: {type: Number},
    courseid: {type: Number},
    });

uc_course_rl_link_schema = new SimpleSchema({
    linknumid: {type: Number},
    coursenumid: {type: Number},
    linkid: {type: Number},
    courseid: {type: Number},
    });

uc_link_rl_file_schema = new SimpleSchema({
    linknumid: {type: Number},
    filenumid: {type: Number},
    linkid: {type: Number},
    fileid: {type: Number},
    });

uc_link_rl_notification_schema = new SimpleSchema({
    linknumid: {type: Number},
    notificationnumid: {type: Number},
    linkid: {type: Number},
    notificationid: {type: Number},
    });

/*****  official schemas *****/
of_course_schema = new SimpleSchema({
    numid: {type: Number},
    id: {type: String, regEx: SimpleSchema.RegEx.Id},
    rank: {type: Number},
    schoolname: {type: String},
    departmentname: {type: String},
    coursename: {type: String},
    });

of_link_schema = new SimpleSchema({
    numid: {type: Number},
    id: {type: String, regEx: SimpleSchema.RegEx.Id},
    linkname: {type: String},
    linktype: {type: Number}, //0=pku教学网，1=163邮箱，2=百度网盘，
    url:{type: String, regEx: SimpleSchema.RegEx.Url},
    account:{type: String},
    passwd: {type: String},
    });

of_file_schema = new SimpleSchema({
    numid: {type: Number},
    id: {type: String, regEx: SimpleSchema.RegEx.Id},
    filename: {type: String},
    path:{type: String},
    description:{type: String}
    });

of_notification_schema = new SimpleSchema({
    numid: {type: Number},
    id: {type: String, regEx: SimpleSchema.RegEx.Id},
    notificationname: {type: String},
    description:{type: String}
    });

of_course_rl_link_schema = new SimpleSchema({
    linknumid: {type: Number},
    coursenumid: {type: Number},
    linkid: {type: Number},
    courseid: {type: Number},
    });

of_link_rl_file_schema = new SimpleSchema({
    linknumid: {type: Number},
    filenumid: {type: Number},
    linkid: {type: Number},
    fileid: {type: Number},
    });

of_link_rl_notification_schema = new SimpleSchema({
    linknumid: {type: Number},
    notificationnumid: {type: Number},
    linkid: {type: Number},
    notificationid: {type: Number},
    });