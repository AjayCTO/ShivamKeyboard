cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-actionsheet.ActionSheet",
      "file": "plugins/cordova-plugin-actionsheet/www/ActionSheet.js",
      "pluginId": "cordova-plugin-actionsheet",
      "clobbers": [
        "window.plugins.actionsheet"
      ]
    },
    {
      "id": "cordova-plugin-native-keyboard.NativeKeyboard",
      "file": "plugins/cordova-plugin-native-keyboard/www/NativeKeyboard.js",
      "pluginId": "cordova-plugin-native-keyboard",
      "clobbers": [
        "window.NativeKeyboard"
      ]
    },
    {
      "id": "cordova-plugin-ionic-keyboard.keyboard",
      "file": "plugins/cordova-plugin-ionic-keyboard/www/keyboard.js",
      "pluginId": "cordova-plugin-ionic-keyboard",
      "clobbers": [
        "cordova.plugins.Keyboard"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-actionsheet": "2.3.3",
    "cordova-plugin-console": "1.1.0",
    "cordova-plugin-native-keyboard": "2.0.3",
    "cordova-plugin-whitelist": "1.3.3",
    "cordova-plugin-ionic-keyboard": "1.0.5"
  };
});