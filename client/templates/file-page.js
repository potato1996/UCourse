// created by zhaozewei
// TODO
Template.filePage.helpers({
  fileTitle: function(){
    return Session.get("fileTitle");
  },
  activeListClass: function() {
    var current = Router.current();
    if (current.route.name === 'listsShow' && current.params._id === this._id) {
      return 'active';
    }
  },
});

Template.filePage.events({
  'click .js-close-file': function() {
    // Router.go('current');
    history.back();
  }
});
