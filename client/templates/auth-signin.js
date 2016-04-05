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
      
      recentInit();
      
      Router.go('home');
    });
  }
});

/*
 * added by Sam, 2016.03.29, start
 */
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
      /*
      if (count == 0) {
        recent[p] = new Array();
        recent[p]['text'] = todos[j]['text'];
        recent[p++]['createdAt'] = todos[j]['createdAt'];
        recent_date = todos[j]['createdAt'];
      }
      else if (todos[j]['createdAt'] >= recent_date) {
        */
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
/*
 * added by Sam, 2016.03.29, end
 */
