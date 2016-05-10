var FILE_NAME = 'fileName';
Session.setDefault(FILE_NAME, "无标题文档");	//利用Session实现变量值传递

var FILE_PATH = 'filePath';
Session.setDefault(FILE_PATH, "");

Template.recentFile.helpers({
  fileTime: function(create_time) {
    return getMyTime(create_time);
  },

  showFileSize: function(filesize) {
    if(filesize < 1024)
      return filesize + ' ' + 'KB';
    if(filesize < 1024 * 1024)
      return (filesize / 1024).toFixed(1) + ' ' + 'MB';
    if(filesize < 1024 * 1024 * 1024)
      return (filesize / 1024 / 1024).toFixed(1) + ' ' + 'GB';
    return (filesize / 1024 / 1024 / 1024).toFixed(1) + ' ' + 'TB';
  },

  showFileName: function(filename) {
    var len = filename.gblen();
    var maxLen = 26;	//最多显示26字节
    var left = 16, right = 10;
    if(len <= maxLen)
      return filename;
    var lName = filename.gbcutstr(left);
    var rName = filename.myreverse().gbcutstr(right).myreverse();
    return lName + '...' + rName;
  },

  FileIconPath: function(filetype, path) {
    return getFileIconPath(filetype, path);
  }
});

var showFile = function (fileitem, template) {
/* test */
//fileitem.path = 'http://121.42.173.75:9000/test_doc.docx';
//fileitem.filetype = 'docx';
//fileitem.path = 'http://121.42.173.75:9000/2015f-12-1.pptx';
//fileitem.filetype = 'pptx';
  if(fileitem.filetype == 'pdf') {
    Session.set(FILE_NAME, fileitem.filename);
    Session.set(FILE_PATH, fileitem.path);
    Router.go('file-page');
  }
  else {
    //window.open(fileitem.path);
    window.location.href = fileitem.path;
  }
};

Template.recentFile.events({
  'click .js-show-file': function(event, template) {
    showFile(this, template);
  }
});
