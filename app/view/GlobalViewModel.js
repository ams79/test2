
Ext.define('TestApp.view.main.GlobalViewModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.GlobalViewModel',

    data: {

        name:'Test'

    },
    formulas:{


        nameFromSelectedRecords: {
            bind:{
                bindTo: '{actorgrid.multiselection}',
                deep: true
            },
            get: function(selected) {

                if (!selected) return '';
                var l = selected.length;
                var title;
                switch(l){
                    case 0: title=''; break;
                    case 1: title=selected[0].data.first_name; break;
                    default:
                        var s = l != 1 ? 's' : '';
                        title='Selected '+l+' item'+s;
                }
                return title;
            }
        },
        selecteddata:{
            bind:{
                bindTo: '{actorgrid.multiselection}',
                deep: true
            },
            get: function(selected) {
                if (!selected) return [];
                return selected.map(v => v.data);
            }
        }

    },

    stores: {
        mainstore: {
            model: 'Test.model.Personnel',
            storeId: 'mainstore',
            proxy: {
                type: 'memory',
                reader: {
                    type: 'json',
                    rootProperty: 'data'
                },
                writer: {
                    type: 'json',
                    rootProperty: 'data'
                },


            },
            listeners:{
               update:function(){
                   console.log(arguments);
               }
            },
            pageSize:10,
            autoSync: true,
            autoLoad: true
        },
        substore: {

            model: 'Test.model.Personnel',
            storeId: 'substore',
            proxy: {
                type: 'memory',
                reader: {
                    type: 'json',
                    rootProperty: 'data'
                },
                writer: {
                    type: 'json',
                    rootProperty: 'data'
                }

            },

            data: '{selecteddata}',

            autoSync: true,
            autoLoad: true

        }
    }
});