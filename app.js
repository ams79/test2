/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'Test.Application',

    name: 'Test2',
    bind: {
        name:'{name}'
    },

    requires: [
        // This will automatically load all classes in the Test namespace
        // so that application classes do not need to require each other.
        'Test.*',
        'Test.view.main.WinEditForm',
        'Test.view.main.EditForm',
    ],

    // The name of the initial view to create.
    //mainView: 'Test.view.main.Main'
});
