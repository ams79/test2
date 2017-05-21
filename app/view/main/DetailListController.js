/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('Test.view.main.DetailListController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.detaillist',

    onrowdblclick: function( grid, record, element, rowIndex, e, eOpts ){

        var win;
        if (!win)
            win=Ext.create({
                xtype:'wineditform',
                viewModel : {
                    data : {
                        editRecord : record
                    }
                }
            });
        if (!win.isVisible()) {
            win.show();
        }

    }

});
