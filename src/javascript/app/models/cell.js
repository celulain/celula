App.Cell = DS.Model.extend({
    start_date: DS.attr('date'),
    end_date: DS.attr('date'),
    week_day: DS.attr('string'),
    gender: DS.attr('string'),
    age_group: DS.attr('string'),
    hour_start: DS.attr('string'),
    meetings: DS.hasMany('App.Meeting')
});
