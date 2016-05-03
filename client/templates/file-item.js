// created by zhaozewei
var FILE_NAME = 'fileName';
Session.setDefault(FILE_NAME, "无标题文档");	//利用Session实现变量值传递

var FILE_PATH = 'filePath';
Session.setDefault(FILE_PATH, "");

Template.fileItem.helpers({

});

var showFile = function (fileitem, template) {
  Session.set(FILE_NAME, fileitem.filename);
  Session.set(FILE_PATH, fileitem.path);
  Router.go('file-page');
};

Template.fileItem.events({
  'click .js-show-file': function(event, template) {
    showFile(this, template);
  }
});
