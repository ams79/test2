/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('Test.view.login.Login', {
    extend: 'Ext.window.Window',
    xtype: 'login',

    requires: [
        'Test.view.login.LoginController',
        'Ext.form.Panel'
    ],


    controller: 'login',
    bodyPadding: 10,
    title: 'Login Window',
    closable: false,


    autoShow: true,
    items: {
        xtype: 'form',
        reference: 'form',
        frame:false,

        items: [{
            xtype: 'textfield',
            name: 'username',
            fieldLabel: 'Логин',
            allowBlank: false,
            bind: {
                value: '{username}'
            }

        }, {
            xtype: 'textfield',
            name: 'password',
            inputType: 'password',
            fieldLabel: 'Пароль',
            allowBlank: false,
            bind: {
                value: '{password}'
            }
        }, {
            xtype: 'checkbox',
            hideEmptyLabel: false,
            name:'remember',
            fieldLabel:'Запонмить меня',
            bind: {
                value: '{remember}'
            }
        }],
        buttons: [{
            text: 'Login',

            formBind: true,
            listeners: {
                click: 'onLoginClick'
            }
        }]
    }
});
