/**
 * This view is an example list of people.
 */
Ext.define('Test.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',

    requires: [
         'Test.view.main.MainController',
    ],
    reference: 'actorgrid',

    title:'Actor Grid',

    flex:1,
    selModel: 'rowmodel',
    multiSelect: true,
    config: {
        selection: null,
        multiselection:null,
        editrecord:null,
        headerBorders: true
    },
    multiselection:null,
    controller: 'main',
    publishes: ['multiselection','selection','editrecord'],
    twoWayBindable: ['multiselection','selection','editrecord'],
    updateSelection: function(selection) {
        var me = this,
            sm;
        console.log('updateSelection');
        if (!me.ignoreNextSelection) {
            me.ignoreNextSelection = true;
            sm = me.getSelectionModel();
            if (selection) {
                sm.select(selection);
            } else {
                sm.deselectAll();
            }
            me.ignoreNextSelection = false;
        }

        me.publishState('selection', selection);
    },
    updateBindSelection: function(selModel, selection) {
        var me = this,
            selected = null,
            multiselected = null;
        if (!me.ignoreNextSelection) {
            me.ignoreNextSelection = true;
            if (selection.length) {
                selected = selModel.getLastSelected();
                multiselected=selModel.getSelection();
                me.hasHadSelection = true;
            }
            if (me.hasHadSelection) {
                me.setSelection(selected);
                me.setMultiselection(multiselected);
                me.publishState('multiselection', multiselected);
            }
            me.ignoreNextSelection = false;
        }
    },

    //store:{},
    bind: {
        //title: 'Actor Grid {currentRecord.first_name}',
        title: 'Actor Grid {nameFromSelectedRecords}',
        store: '{mainstore}'
    },
    columns: [
        { text: 'First Name',  dataIndex: 'first_name' },
        { text: 'Last Name', dataIndex: 'last_name', flex: 1 },
        { text: 'Born', dataIndex: 'born', flex: 1 , xtype: 'datecolumn', format: 'm/d/Y'},
        { text: 'popularity', dataIndex: 'popularity', flex: 1 },
        { text: 'Age', flex: 1,renderer : 'calcAge'},
        { text: 'Image', dataIndex: 'image',  xtype:'templatecolumn', tdCls:'gridphoto', width:80, tpl: '<img src="{image}" />'},

    ],

    listeners: {

        rowdblclick: 'onrowdblclick',

        afterrender:function() {
            var me = this;

            Ext.Ajax.request({
                url: 'data/data.json',
                success: function (result) {
                    var jsonData = Ext.util.JSON.decode(result.responseText);
                    //Ext.data.StoreManager.lookup('tablestore').loadData(jsonData.data)
                    //Ext.data.StoreManager.lookup('tablestore').proxy.data=jsonData.data;
                    Ext.data.StoreManager.lookup('mainstore').setProxy({
                        type: "memory",
                        enablePaging: true,
                        data: jsonData.data
                    });
                    Ext.data.StoreManager.lookup('mainstore').reload();

                }
            });
        }

    }
});
