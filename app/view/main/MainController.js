/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('Test.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onrowdblclick( grid, record, element, rowIndex, e, eOpts ){
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
    ,
    calcAge(value, metaData, record){
        var born=record.get('born');
        var birthDate = new Date(born);
        var otherDate = new Date();

        var years = (otherDate.getFullYear() - birthDate.getFullYear());

        if (otherDate.getMonth() < birthDate.getMonth() ||
            otherDate.getMonth() == birthDate.getMonth() && otherDate.getDate() < birthDate.getDate()) {
            years--;
        }
        return years;
    }
});
