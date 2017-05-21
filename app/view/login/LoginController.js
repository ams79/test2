

Ext.define('Test.view.login.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',

    onLoginClick: function() {

        // This would be the ideal location to verify the user's credentials via
        // a server-side lookup. We'll just move forward for the sake of this example.

        // Set the localStorage value to true
        var values=this.view.down('form').getValues();
        if (values.remember) {
            for (var k in values) {
                console.log(k,values[k]);
                this.view.store.setItem(k, values[k])
            }
        } else {
            for (var k in values) {
                this.view.store.removeItem(k)
            }
        }

        // Remove Login Window
        this.getView().destroy();

        // Add the main view to the viewport
        Ext.create({
            xtype: 'app-main'
        });

    }
});