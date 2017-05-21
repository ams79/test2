Ext.define('Test.view.main.EditForm', {
    extend: 'Ext.form.Panel',
    xtype: 'editfrom',
    title: false,
    border: false,
    frame: false,
    bodyPadding: 0,
    layout: {
        type: 'hbox',
        align: 'stretchmax'
    },
    /*viewModel:{
        record:this._reocrd
    },*/

    items: [
        {
            xtype: 'fieldset',
            title: 'Image',
            items: [{
                xtype: 'image',

                bind:{
                    src:'{editRecord.image}'
                }
            }],
            width: 128,
            margin: 5

        }, {
            xtype: 'fieldset',
            flex: 1,
            title: 'Data',
            defaultType: 'textfield',
            margin: 5,
            items: [{
                allowBlank: false,
                fieldLabel: 'First Name',
                name: 'first_name',
                bind:'{editRecord.first_name}'
            }, {
                allowBlank: false,
                fieldLabel: 'Last Name',
                name: 'last_name',
                bind:'{editRecord.last_name}'
            }, {
                xtype: 'datefield',
                fieldLabel: 'Born',
                name: 'born',
                dateFormat: 'm/d/Y',
                bind:'{editRecord.born}'
            }, {
                allowBlank: false,
                fieldLabel: 'popularity',
                name: 'popularity',
                value: 0.0,
                inputType: 'number',
                bind:'{editRecord.popularity}'
            }],
        }
    ],

    buttons: [
        {
            text: 'Close',
            handler:function(me){
                me.up('window').close();
            }
        }
    ],

    initComponent: function () {
        this.defaults = {
            anchor: '100%',
            labelWidth: 120
        };

        this.callParent();
    }
});