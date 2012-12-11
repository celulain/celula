App.Suggestion = DS.Model.extend({
    user_id: DS.attr('string'),
    date: DS.attr('date'),
    suggestion: DS.attr('string')
});
