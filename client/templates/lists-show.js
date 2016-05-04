var EDITING_KEY = 'editingList';
Session.setDefault(EDITING_KEY, false);

// 用于标记是否是课程信息显示状态的变量
//var INFO = "showInfo";
//Session.setDefault(INFO, false);

// Sam
var RECENT = "showRecent"
Session.setDefault(RECENT, false);

// Added by zhaozewei
var INFO_KEY = "Info";
var COURSENAME_KEY = "CourseName";

// Track if this is the first time the list template is rendered
var firstRender = true;
var listRenderHold = LaunchScreen.hold();
listFadeInHold = null;

Template.listsShow.onRendered(function() {
  if (firstRender) {
    // Released in app-body.js
    listFadeInHold = LaunchScreen.hold();

    // Handle for launch screen defined in app-body.js
    listRenderHold.release();

    firstRender = false;
  }

  this.find('.js-title-nav')._uihooks = {
    insertElement: function(node, next) {
      $(node)
        .hide()
        .insertBefore(next)
        .fadeIn();
    },
    removeElement: function(node) {
      $(node).fadeOut(function() {
        this.remove();
      });
    }
  };


// zzw
  $('.ui.accordion')
    .accordion()
  ;
});

Template.listsShow.helpers({
  editing: function() {
    return Session.get(EDITING_KEY);
  },

  todosReady: function() {
    return Router.current().todosHandle.ready();
  },

  todos: function(listId) {
    //return Todos.find({listId: listId}, {sort: {createdAt : -1}});
      Meteor.subscribe('fetch_notification_by_course_id',listId);
      return uc_notification.find({},{sort: {create_time: -1}});
      //alert(uc_notification.find().count());
      //return uc_notification.find().sort({create_time:-1});
      
  },

// Added by zhaozewei
// TODO
  filelistReady: function() {
    return Router.current().filelistHandle.ready();
  },

  filelist: function(listId) {
    //return Todos.find({listId: listId}, {sort: {createdAt : -1}});
      //alert("hhh");
    Meteor.subscribe('fetch_file_by_course_id', listId);
    return uc_file.find({},{sort: {create_time: -1}});
      //alert(uc_file.find().count());
      //return uc_file.find().sort({create_time:-1});
  },
// End added

  // 协助获取当前是否正在显示课程信息的 Helper
  //showInfo: function(){
    //return Session.get(INFO);
  //}

  // Sam
  showRecent: function(list){
    //var course = uc_course.find({coursename: 'Recent'}).fetch();
    //alert(listId.coursename);
    if (list.coursename == 'Recent')
      return true;
    else
      return false;
   // return Session.get(RECENT);
  }
});

var editList = function(list, template) {
  Session.set(EDITING_KEY, true);

  // force the template to redraw based on the reactive change
  Tracker.flush();
  template.$('.js-edit-form input[type=text]').focus();
};

var saveList = function(list, template) {
  Session.set(EDITING_KEY, false);
// Edited by zhaozewei
  //Lists.update(list._id, {$set: {name: template.$('[name=name]').val()}});
  uc_course.update(list._id, {$set: {coursename: template.$('[name=coursename]').val()}});
}
//changed by Potato
var deleteList = function(list) {
  // ensure the last public list cannot be deleted.
  //if (! list.userId && Lists.find({userId: {$exists: false}}).count() === 1) {
    //return alert("Sorry, you cannot delete the final public list!");
  //}

  var message = "您确定要删除课程 " + list.coursename + " 吗?";
  if (confirm(message)) {
    // we must remove each item individually from the client
    //Todos.find({listId: list._id}).forEach(function(todo) {
      //Todos.remove(todo._id);
    //});
    curr_rl = uc_student_rl_course.find({course_id:list._id,student_id:Meteor.userId()}).fetch();
    uc_student_rl_course.remove(curr_rl[0]['_id']);
    //uc_student_rl_course.remove({course_id:list._id});
    //if(uc_student_rl_course.find({course_id:list._id}).count() === 0)
    //{
    //    uc_course.remove(list._id);
    //}

    Router.go('home');
    return true;
  } else {
    return false;
  }
};
/* Deleted by zhaozewei, never use this function
var toggleListPrivacy = function(list) {
  if (! Meteor.user()) {
    return alert("Please sign in or create an account to make private lists.");
  }

  if (list.userId) {
    Lists.update(list._id, {$unset: {userId: true}});
  } else {
    // ensure the last public list cannot be made private
    if (Lists.find({userId: {$exists: false}}).count() === 1) {
      return alert("Sorry, you cannot make the final public list private!");
    }

    Lists.update(list._id, {$set: {userId: Meteor.userId()}});
  }
};
*/

// Added by zhaozewei
var showInformation = function (list, template) {
  Session.set(COURSENAME_KEY, list.coursename);
  Session.set(INFO_KEY, list.description);
  Router.go('course-info');
};

Template.listsShow.events({
  'click .js-cancel': function() {
    Session.set(EDITING_KEY, false);
  },

  'keydown input[type=text]': function(event) {
    // ESC
    if (27 === event.which) {
      event.preventDefault();
      $(event.target).blur();
    }
  },

  'blur input[type=text]': function(event, template) {
    // if we are still editing (we haven't just clicked the cancel button)
    if (Session.get(EDITING_KEY))
      saveList(this, template);
  },

  'submit .js-edit-form': function(event, template) {
    event.preventDefault();
    saveList(this, template);
  },

  // handle mousedown otherwise the blur handler above will swallow the click
  // on iOS, we still require the click event so handle both
  'mousedown .js-cancel, click .js-cancel': function(event) {
    event.preventDefault();
    Session.set(EDITING_KEY, false);
  },

  'change .list-edit': function(event, template) {
    if ($(event.target).val() === 'edit') {
      editList(this, template);
    } else if ($(event.target).val() === 'delete') {
      deleteList(this, template);
    } else {
// edited by zhaozewei, to change the function of the 'option', TODO
      //toggleListPrivacy(this, template);
      //Session.set(INFO, !Session.get(INFO));
      showInformation(this, template);
    }

    event.target.selectedIndex = 0;
  },

  'click .js-edit-list': function(event, template) {
    editList(this, template);
  },

  'click .js-toggle-list-privacy': function(event, template) {
    toggleListPrivacy(this, template);
  },

  'click .js-delete-list': function(event, template) {
    deleteList(this, template);
  },

  'click .js-todo-add': function(event, template) {
    template.$('.js-todo-new input').focus();
  },

  // 注册显示列表功能
  'click .js-show-info': function(event, template) {
    //Session.set(INFO, !Session.get(INFO));
    showInformation(this, template);
  },

// added by zhaozewei, to implement the switch(notice/file) function
  'click .js-switch-notice': function(event, template) {
    //alert("switch to notice");
    $("#col-notice").css("display", "block");       // show notice column
    $("#col-file").css("display", "none");          // hide file column

    $("#btn-notice").attr("disabled", "disabled");  // disable the pressed button
    $("#btn-notice").css({"background-color": "#598ea9", "cursor": "unset"});
    $("#btn-file").attr("disabled", false);         // enable the other button
    $("#btn-file").css({"background-color": "#79aec9", "cursor": "pointer"});
  },

  'click .js-switch-file': function(event, template) {
    //alert("switch to file");
    $("#col-file").css("display", "block");
    $("#col-notice").css("display", "none");

    $("#btn-file").attr("disabled", "disabled");
    $("#btn-file").css({"background-color": "#598ea9", "cursor": "unset"});
    $("#btn-notice").attr("disabled", false);
    $("#btn-notice").css({"background-color": "#79aec9", "cursor": "pointer"});
  },
// end added

  'submit .js-todo-new': function(event) {
    event.preventDefault();

    var $input = $(event.target).find('[type=text]');
    if (! $input.val())
      return;
/* Added by zhaozewei temporally */
/*
    uc_notification.insert({
      _id: this._id,
      notificationname: $input.val(),
      description: $input.val() + $input.val(),
      created_time: new Date()
    });
*/
    //Todos.insert({
    //  listId: this._id,
    //  text: $input.val(),
    //  checked: false,
    //  createdAt: new Date()
    //});
// Edited by zhaozewei
    //Lists.update(this._id, {$inc: {incompleteCount: 1}});
    //uc_course.update(this._id);
    $input.val('');
  }
});
