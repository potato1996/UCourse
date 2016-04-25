// created by zhaozewei
var FILE_NAME = 'fileName';
Session.setDefault(FILE_NAME, "无标题文档");	//利用Session实现变量值传递

var FILE_PATH = 'filePath';
Session.setDefault(FILE_PATH, "");

Template.fileItem.helpers({
  setFile: function(filename, filepath){ 
    Session.set(FILE_NAME, filename);
    Session.set(FILE_PATH, filepath);
    return Session.get(FILE_NAME);
  }
});

Template.fileItem.events({
  'click .js-show-file': function() {
    Router.go('file-page');
  }
});
