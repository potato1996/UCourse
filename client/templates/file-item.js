// created by zhaozewei
Session.setDefault("fileTitle", "file");

Template.fileItem.helpers({
  showFile: function(){
    return Session.get("fileTitle");
  }
});

Template.fileItem.events({
  'click .js-show-file': function(text) {
    //Router.go('file');
    Session.set("fileTitle", text);
  }
});
