// created by zhaozewei
var FILE_NAME = 'fileName';
Session.setDefault(FILE_NAME, "无标题文档");	//利用Session实现变量值传递

var FILE_PATH = 'filePath';
Session.setDefault(FILE_PATH, "");

Template.fileItem.helpers({
  fileTime: function(create_time) {
    Y = create_time.getFullYear() + '-';
    M = (create_time.getMonth()+1 < 10 ? '0'+(create_time.getMonth()+1) : create_time.getMonth()+1) + '-';
    _D = create_time.getDate();
    D = (_D < 10 ? '0'+ _D : _D) + ' ';
    h = create_time.getHours() + ':';
    m = create_time.getMinutes();
    myTime = Y+M+D+h+m;
    return myTime;
  },

  showFileSize: function(filesize) {
    if(filesize < 1024)
      return filesize + ' ' + 'KB';
    if(filesize < 1024 * 1024)
      return (filesize / 1024).toFixed(1) + ' ' + 'MB';
    if(filesize < 1024 * 1024 * 1024)
      return (filesize / 1024 / 1024).toFixed(1) + ' ' + 'GB';
    return (filesize / 1024 / 1024 / 1024).toFixed(1) + ' ' + 'TB';
  }
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
