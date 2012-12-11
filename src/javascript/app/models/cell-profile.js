App.CellProfile = DS.Model.extend({
    leader: DS.attr('string'),
    gender: DS.attr('string'),
    min_age: DS.attr('string'),
    max_age: DS.attr('string'),
    address: DS.attr('string'),
    church: DS.attr('string')
});

App.CellProfile.reopenClass({
    url: 'cell-profile'
});
