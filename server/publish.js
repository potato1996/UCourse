/* Deleted by zhaozewei, we never need them!
Meteor.publish('publicLists', function() {
  return Lists.find({userId: {$exists: false}});
});

Meteor.publish('privateLists', function() {
  if (this.userId) {
    return Lists.find({userId: this.userId});
  } else {
    this.ready();
  }
});
*/
Meteor.publish('todos', function(listId) {
  check(listId, String);

  return Todos.find({listId: listId});
});

// added by zhaozewei
Meteor.publish('fetch_uc_course_by_course_id', function(course_id_array) {
    return uc_course.find({_id: {$in : course_id_array}});
});
// 2016-4-26 by potato
Meteor.publish('fetch_rec_course_by_name', function(course_name){
    return uc_course.find({coursename:course_name,isRecommend:1});
});
Meteor.publish('add_course_by_rec_course_id',function(rec_course_id){
    uc_student_rl_course.insert({student_id: this.userId,course_id:rec_course_id});
    return uc_student_rl_course.find({student_id:this.userId});
    
});
Meteor.publish('fetch_single_course_by_id',function(single_course_id){
   return uc_course.find({_id:single_course_id}); 
});
// add by potato
Meteor.publish('fetch_uc_student_rl_course',function(){
    return uc_student_rl_course.find({student_id: this.userId});          
});

Meteor.publish('fetch_uc_link_by_course_id',function(course_id){
    var this_links = uc_course_rl_link.find({course_id:course_id}).fetch();
    var this_links_length = this_links.length;
    var links_id_array = new Array();
    for (var j = 0;j<this_links_length;j++)
        {
            links_id_array.push(this_links[j]['link_id']);
        }
    return uc_link.find({_id: {$in :links_id_array}});
});
Meteor.publish('fetch_notification_by_link_id',function(link_id_list){
    var this_notification_rls = uc_link_rl_notification.find({link_id:{$in:link_id_list}}).fetch();
    var this_notification_length = this_notification_rls.length;
    var notification_id_array = new Array();
    for (var j = 0;j<this_notification_length;j++)
        {
            notification_id_array.push(this_notification_rls[j]['notification_id']);
        }
    return uc_notification.find({_id:{$in: notification_id_array}});
});
Meteor.publish('fetch_notification_by_course_id',function(course_id){
    var this_links = uc_course_rl_link.find({course_id:course_id}).fetch();
    var this_links_length = this_links.length;
    var links_id_array = new Array();
    for (var j = 0;j<this_links_length;j++)
        {
            links_id_array.push(this_links[j]['link_id']);
        }
    var this_notification_rls = uc_link_rl_notification.find({link_id:{$in:links_id_array}}).fetch();
    var this_notification_length = this_notification_rls.length;
    var notification_id_array = new Array();
    for (var j = 0;j<this_notification_length;j++)
        {
            notification_id_array.push(this_notification_rls[j]['notification_id']);
        }
    return uc_notification.find({_id:{$in: notification_id_array}});
});
// TODO
Meteor.publish('fetch_file_by_course_id',function(course_id){
    var this_links = uc_course_rl_link.find({course_id:course_id}).fetch();
    var this_links_length = this_links.length;
    var links_id_array = new Array();
    for (var j = 0;j<this_links_length;j++)
        {
            links_id_array.push(this_links[j]['link_id']);
        }
    var this_files_rls = uc_link_rl_file.find({link_id:{$in:links_id_array}}).fetch();
    var this_files_length = this_files_rls.length;
    var file_id_array = new Array();
    for (var j = 0;j<this_files_length;j++)
    {
        file_id_array.push(this_files_rls[j]['file_id']);
    }
    return uc_file.find({_id:{$in: file_id_array}});
});
//2016-4-26 by potato
