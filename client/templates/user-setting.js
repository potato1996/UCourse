// 用于检测几个下级菜单是否打开的本地变量
Session.setDefault("settingAccount", false);
Session.setDefault("settingOthers", false);
Session.setDefault("settingPassword", false);

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

Template.userSetting.helpers({
  settingPassword: function(){
    return Session.get("settingPassword");
  },
  settingAccount: function(){
    return Session.get("settingAccount");
  },
  settingOthers: function(){
    return Session.get("settingOthers");
  },
  allSetting: function(){
    return !Session.get("settingPassword") && !Session.get("settingAccount") && !Session.get("settingOthers");
  },
  getAllSetting: [
    {text:"写在 js 中的设置"},
    {text:"写在 js 中的设置"},
    {text:"写在 js 中的设置"},
    {text:"写在 js 中的设置"},
  ]
});


Template.userSetting.events({
  'click .js-set-password': function() {
    Session.set("settingPassword",!Session.get("settingPassword"));
    Session.set("settingAccount",!Session.get("settingAccount"));
  },
  'click .js-set-account': function() {
    Session.set("settingAccount",!Session.get("settingAccount"));
  },
  'click .js-set-others': function() {
    Session.set("settingOthers",!Session.get("settingOthers"));
  }
});
