/**
 * This view is an example list of people.
 */
Ext.define('Test.view.main.DetailList', {
    extend: 'Ext.Panel',
    xtype: 'detaillist',
    requires: [
        'Ext.view.View',
        'Test.view.main.DetailListController'
    ],

    bind: {
        title: 'Actor Data View For: {nameFromSelectedRecords}',
    },
    flex:1,
    controller: 'detaillist',
    items:[
        {
            xtype: 'dataview',
            flex:1,
            reference:'detaillist',

            tpl: [
                '<tpl for=".">',
                '<div class="dataview-item x-unselectable">',
                '<img src="{image}" />',
                '<b>{first_name}&nbsp;{last_name}</b><br>',
                'Popularity:&nbsp;<b>{popularity}</b><br>',
                'Born:&nbsp;<b>{born:date("m/d/Y")}</b><br>',
                '</div>',
                '</tpl>'
            ],
            itemSelector: 'div.dataview-item',
            overItemCls: 'x-item-over',
            bind: {
                store:'{substore}'
            },
            listeners: {
                itemdblclick:'onrowdblclick'
            }
        }]


});
