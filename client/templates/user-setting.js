// 用于检测几个下级菜单是否打开的本地变量
Session.setDefault("settingStatus", "home");

// 菜单项目
// 账号
//     邮箱
//     学号
//     密码
//         更改密码
// 通知
// 隐私
// 通用
//     背景
// 帮助&反馈
// 关于

var changePassword = function(newPassword){}；
var checkPassword = function(username,password){};

Template.userSetting.helpers({
  settingItems: function(){
    switch (Session.get("settingStatus")) {
      case "account":
      return [
        {text: "邮箱"     , jsAct: "" },
        {text: "学号"     , jsAct: "" },
        {text: "密码"     , jsAct: "js-page-password" },
      ];
      case "password":
      return [
        {text: "更改密码"  , jsAct: "js-set-password" },
      ];
      case "common":
      return [
        {text: "背景"    , jsAct: "" },
      ];
      default:
      return [
        {text: "账号"     , jsAct: "js-page-account" },
        {text: "通知"     , jsAct: "" },
        {text: "隐私"     , jsAct: "" },
        {text: "通用"     , jsAct: "js-page-common" },
        {text: "帮助与反馈", jsAct: "" },
        {text: "关于"     , jsAct: "" },
      ];
    }
  }
});


Template.userSetting.events({
  'click .js-page-password': function() {
    Session.set("settingStatus", "password");
  },
  'click .js-page-account': function() {
    Session.set("settingStatus", "account");
  },
  'click .js-page-common': function() {
    Session.set("settingStatus", "common");
  },
  'click .js-page-back': function() {
    var backPage = {
      "home":"home",
      "password":"account",
      "common":"home"
    };
    var status = Session.get("settingStatus")
    Session.set("settingStatus",backPage[status]);
  },
  'click .js-set-password': function() {

  },
});
