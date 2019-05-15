cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-actionsheet/www/ActionSheet.js",
        "id": "cordova-plugin-actionsheet.ActionSheet",
        "pluginId": "cordova-plugin-actionsheet",
        "clobbers": [
            "window.plugins.actionsheet"
        ]
    },
    {
        "file": "plugins/cordova-plugin-actionsheet/src/browser/ActionSheetProxy.js",
        "id": "cordova-plugin-actionsheet.ActionSheetProxy",
        "pluginId": "cordova-plugin-actionsheet",
        "merges": [
            ""
        ]
    },
    {
        "file": "plugins/cordova-plugin-native-keyboard/www/NativeKeyboard.js",
        "id": "cordova-plugin-native-keyboard.NativeKeyboard",
        "pluginId": "cordova-plugin-native-keyboard",
        "clobbers": [
            "window.NativeKeyboard"
        ]
    },
    {
        "file": "plugins/cordova-plugin-ionic-keyboard/www/keyboard.js",
        "id": "cordova-plugin-ionic-keyboard.keyboard",
        "pluginId": "cordova-plugin-ionic-keyboard",
        "clobbers": [
            "cordova.plugins.Keyboard"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-actionsheet": "2.3.3",
    "cordova-plugin-console": "1.1.0",
    "cordova-plugin-native-keyboard": "2.0.3",
    "cordova-plugin-whitelist": "1.3.3",
    "cordova-plugin-ionic-keyboard": "1.0.5"
}
// BOTTOM OF METADATA
});