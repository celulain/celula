App.Dynamic = DS.Model.extend({
    name: DS.attr('string'),
    min_participants: DS.attr('number'),
    max_participants: DS.attr('number'),
    goal: DS.attr('string'),
    stuff: DS.attr('string'),
    text: DS.attr('string')
});

App.Dynamic.reopenClass({
    url: '/fixtures/dynamics'
});
