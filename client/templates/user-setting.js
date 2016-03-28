Session.setDefault("settingPassword", false);

Template.userSetting.helpers({
  settingPassword: function(){
    return Session.get("settingPassword");
  }
})


Template.userSetting.events({
  'click .js-set-password': function() {
    Session.set("settingPassword",!Session.get("settingPassword"));
  }
});
