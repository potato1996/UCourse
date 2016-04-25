// created by zhaozewei
// TODO
var FILE_NAME = 'fileName';
var FILE_PATH = 'filePath';

Template.filePage.helpers({
  fileTitle: function() {
    return Session.get(FILE_NAME);
  },
  fileURL: function() {
    return Session.get(FILE_PATH);
  },
});

Template.filePage.events({
  'click .js-close-file': function() {
    // Router.go('current');
    history.back();
  }
});
