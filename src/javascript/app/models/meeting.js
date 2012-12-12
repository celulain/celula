App.Meeting = DS.Model.extend({
    cell: DS.belongsTo('App.Cell'),
    date: DS.attr('date')
});
