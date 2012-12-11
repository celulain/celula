App.SubgoalMultiplicationDate = DS.Model.extend({
    multiplication_date: DS.attr('date'),
    days_remaining: function() {
        var date = this.get('multiplication_date'),
            format = d3.time.format("%d/%m/%Y"),
            toDate = format.parse(date),
            today = new Date();

        var days =  Math.floor(( toDate - today ) / 86400000);
        var beautyPrint = d3.time.format("%d/%m/%Y");

        return days;
    }.property('multiplication_date')
});
