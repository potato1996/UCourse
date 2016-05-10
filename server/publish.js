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
Meteor.publish('fetch_uc_fake_alert',function(){
    return uc_fake_alert.find();
});

// added by zhaozewei
Meteor.publish('fetch_uc_course_by_course_id', function(course_id_array) {
    return uc_course.find({_id: {$in : course_id_array}});
});
// 2016-4-26 by potato
Meteor.publish('fetch_rec_course_by_name', function(course_name){
    //return uc_course.find({coursename:course_name,isRecommend:1});
    
    return of_course.find({coursename:{$regex:course_name}});
});
Meteor.publish('add_course_by_rec_course_id',function(rec_course_id){
    if(uc_student_rl_course.find({student_id: this.userId,course_id:rec_course_id}).count() === 0)
        {
            uc_student_rl_course.insert({student_id: this.userId,course_id:rec_course_id,rank:1});
            if(uc_student_rl_course.find({student_id:this.userId,rank:0}).count() === 0)
                {
                    return uc_student_rl_course.find({student_id:this.userId});
                }
            else
                {
                    var recentId = uc_student_rl_course.find({student_id:this.userId,rank:0}).fetch()[0]['course_id'];
                    var this_links = uc_course_rl_link.find({course_id:rec_course_id}).fetch();
                    var this_links_length = this_links.length;
                    for (var j = 0;j<this_links_length;j++)
                        {
                            var temp_linkid = this_links[j]['link_id'];
                            uc_course_rl_link.insert({course_id:recentId,link_id:temp_linkid});
                        }
                }
        }
    return uc_student_rl_course.find({student_id:this.userId});
    
});
Meteor.publish('remove_single_course_from_recent',function(single_course_id){
    if(uc_student_rl_course.find({student_id:this.userId,rank:0}).count() === 0)
                {
                    return uc_student_rl_course.find({student_id:this.userId});
                }
            else
                {
                    var recentId = uc_student_rl_course.find({student_id:this.userId,rank:0}).fetch()[0]['course_id'];
                    var this_links = uc_course_rl_link.find({course_id:single_course_id}).fetch();
                    var this_links_length = this_links.length;
                    for (var j = 0;j<this_links_length;j++)
                        {
                            var temp_linkid = this_links[j]['link_id'];
                            var temp_rl_id = uc_course_rl_link.find({course_id:recentId,link_id:temp_linkid}).fetch()[0]['_id'];
                            uc_course_rl_link.remove(temp_rl_id);
                        }
                    return uc_student_rl_course.find({student_id:this.userId});
                }
});
Meteor.publish('fetch_single_course_by_id',function(single_course_id){
   return uc_course.find({_id:single_course_id}); 
});
// add by potato
Meteor.publish('fetch_uc_student_rl_course',function(){
/* by zhaozewei
    if(uc_student_rl_course.find({student_id:this.userId,rank:0}).count()===0)
        {
                var temp_recent_id = uc_course.insert({coursename:"Recent",school:"Unknown",departmentname:"Unknown",description:"最新的通知和文件",isRecommend:0});
            uc_student_rl_course.insert({student_id:this.userId,course_id:temp_recent_id,rank:0});
            
        }     
*/
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
Meteor.publish('fetch_all_notifications',function(){
    
});
Meteor.publish('fetch_notification_by_course_id_list',function(course_id_list){
    var this_links = uc_course_rl_link.find({course_id:{$in:course_id_list}}).fetch();
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
Meteor.publish('fetch_file_by_course_id_list',function(course_id_list){
    var this_links = uc_course_rl_link.find({course_id:{$in:course_id_list}}).fetch();
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


Meteor.publish('fetch_student_rl_course_by_id',function(course_id){
    return uc_student_rl_course.find({course_id:course_id,student_id:Meteor.userId()});
});
