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

var changePassword = function(newPassword){
  // alert("function changePassword get password:" + newPassword);
  return true;
};
var checkPassword = function(password){
  // alert("fun checkPassword get password:" + password);
  return true;
};

Template.userSetting.helpers({
  showBack: function(){
    return Session.get("settingStatus") !== "home";
  },
  settingItems: function(){
    switch (Session.get("settingStatus")) {
      case "account":
      return [
        {text: "邮箱", jsAct: "js-set-email" },
        {text: "学号", jsAct: "js-set-schoolID" },
        {text: "密码", jsAct: "js-page-password", icon:"icon-arrow-right" },
      ];
      case "password":
      return [
        {text: "更改密码"  , jsAct: "js-set-password" },
      ];
      case "common":
      return [
        {text: "背景"    , jsAct: "" },
      ];
      case "setPassword":
      return [
        {
          text: "输入旧密码：",
          input: "oldPassword",
          inputType: "password",
          inputPlaceHolder: "旧密码"
        },
        {
          text: "输入新密码：",
          input: "newPassword1",
          inputType: "password",
          inputPlaceHolder: "新密码"
        },
        {
          text: "确认新密码：",
          input: "newPassword2",
          inputType: "password",
          inputPlaceHolder: "新密码"
        },
        {
          text: "提交",
          jsAct: "js-change-password"
        }
      ];
      case "setEmail":
      return [
        {
          text: "输入新邮箱：",
          input: "newEmail",
          inputType: "email",
          inputPlaceHolder: "Email"
        },
        {
          text: "提交",
          jsAct: "js-change-email"
        }
      ];
      case "setID":
      return [
        {
          text: "输入学号：",
          input: "newID",
          inputType: "email",
          inputPlaceHolder: "学号"
        },
        {
          text: "提交",
          jsAct: "js-change-schoolID"
        }
      ];
      default:
      return [
        {text: "账号"     , jsAct: "js-page-account" ,  icon:"icon-arrow-right"},
        {text: "通知"     , jsAct: "" },
        {text: "隐私"     , jsAct: "" },
        {text: "通用"     , jsAct: "js-page-common",    icon:"icon-arrow-right"},
        {text: "帮助与反馈", jsAct: "" },
        {text: "关于"     , jsAct: "js-page-about" },
      ];
    }
  }
});


Template.userSetting.events({
  'click .js-page-about': function() {
    Router.go("about");
  },
  'click .js-page-password': function() {
    Session.set("settingStatus", "password");
  },
  'click .js-page-account': function() {
    Session.set("settingStatus", "account");
  },
  'click .js-page-common': function() {
    Session.set("settingStatus", "common");
  },
  'click .js-set-email': function() {
    Session.set("settingStatus", "setEmail");
  },
  'click .js-set-schoolID': function() {
    Session.set("settingStatus", "setID");
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
    Session.set("settingStatus","setPassword");
  },
  'click .js-change-password': function() {
    var oldpd = document.getElementsByName("oldPassword")[0].value;
    var newpd1 = document.getElementsByName("newPassword1")[0].value;
    var newpd2 = document.getElementsByName("newPassword2")[0].value;
    if(!checkPassword(oldpd)){
      alert("旧密码不正确！");
    }else if(newpd1.length < 6){
      alert("新密码不足六位！");
    }else if(newpd1 != newpd2){
      alert("两次输入的新密码不匹配！");
    }else {
      changePassword(newpd1);
    }
  },
  'click .js-change-email': function() {
    var newEmail = document.getElementsByName("newEmail")[0].value;
  },
  'click .js-change-schoolID': function() {
    var newEmail = document.getElementsByName("newID")[0].value;
  },
});
