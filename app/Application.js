/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('Test.Application', {
    extend: 'Ext.app.Application',



    name: 'Test',

    launch: function(){

        var store = new Ext.util.LocalStorage({
            id: 'test'
        });
        //console.log(store.getItem('remember'),store.getItem('username'));
        Ext.create({
            xtype: 'login',
            store: store,
            viewModel:{
                data:{
                    username: store.getItem('username'),
                    password: store.getItem('password'),
                    remember: store.getItem('remember')
                }
            }
        });
    },

    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
