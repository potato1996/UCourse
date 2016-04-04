var EDITING_KEY = 'editingList';
Session.setDefault(EDITING_KEY, false);

// 用于标记是否是课程信息显示状态的变量
var INFO = "showInfo";
Session.setDefault(INFO, false);

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
});

Template.listsShow.helpers({
  editing: function() {
    return Session.get(EDITING_KEY);
  },

  todosReady: function() {
    return Router.current().todosHandle.ready();
  },

  todos: function(listId) {
    return Todos.find({listId: listId}, {sort: {createdAt : -1}});
  },
  // 协助获取当前是否正在显示课程信息的 Helper
  showInfo: function(){
    return Session.get(INFO);
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
  Lists.update(list._id, {$set: {name: template.$('[name=name]').val()}});
}

var deleteList = function(list) {
  // ensure the last public list cannot be deleted.
  if (! list.userId && Lists.find({userId: {$exists: false}}).count() === 1) {
    return alert("Sorry, you cannot delete the final public list!");
  }

  var message = "Are you sure you want to delete the list " + list.name + "?";
  if (confirm(message)) {
    // we must remove each item individually from the client
    Todos.find({listId: list._id}).forEach(function(todo) {
      Todos.remove(todo._id);
    });
    Lists.remove(list._id);

    Router.go('home');
    return true;
  } else {
    return false;
  }
};

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
      Session.set(INFO, !Session.get(INFO));
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
    // if(!Session.get(INFO)){
    //   // 非信息显示状态下点击按钮，显示课程信息
    //
    // }
    // else{
    //
    // }
    Session.set(INFO, !Session.get(INFO));
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

    Todos.insert({
      listId: this._id,
      text: $input.val(),
      checked: false,
      createdAt: new Date()
    });
    Lists.update(this._id, {$inc: {incompleteCount: 1}});
    $input.val('');
  }
});
