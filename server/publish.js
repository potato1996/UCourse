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

Meteor.publish('todos', function(listId) {
  check(listId, String);

  return Todos.find({listId: listId});
});

// added by zhaozewei
Meteor.publish('fetch_uc_course_by_course_id', function(course_id_array) {
    return uc_course.find({_id: {$in : course_id_array}});
    

});
// add by potato
Meteor.publish('fetch_uc_student_rl_course',function(){
    return uc_student_rl_course.find({student_id: this.userId});          
});
