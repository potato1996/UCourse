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
Meteor.publish('uc_course', function() {
  if (this.userId) {
    return uc_course.find({userId: this.userId});
  } else {
    this.ready();
  }
});
