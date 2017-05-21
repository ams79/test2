Ext.define('Test.view.main.WinEditForm', {
    extend: 'Ext.window.Window',
    xtype: 'wineditform',
    width: 500,
    bind: {
        title: 'Edit {editRecord.first_name}'
    },
    bodyPadding: 5,
    layout: 'fit',
    modal : true,
    autroDestroy:true,
    items: {
        xtype: 'editfrom'
    },
    closable: true
});