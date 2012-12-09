App.SubgoalsController = Em.ArrayController.extend({
    content: [],
    getMultiplicationDate: function(){
        var content = this.get('content');
        var date = "Data à definir"
        console.log(content[0]);
        if (content[0]) {
            date = content[0].date;
            this.set('multiplicationDate', date);
        }

        return date;
    }.property('content'),
    multiplicationDate: 'Data à definir',
    newMultiplicationDate: null,
    hasMultiplicationDate: function() {
        var date = this.get('multiplicationDate');

        if (date == 'Data à definir') {
            var retorno = false;
        } else {
            var retorno = true;
        }

        return retorno;
    }.property('multiplicationDate'),
    remainingDays: function() {
        var hasMultiplicationDate = this.get('hasMultiplicationDate');

        if (hasMultiplicationDate) {
            var date = this.get('multiplicationDate'),
            format = d3.time.format("%d/%m/%Y"),
            toDate = format.parse(date),
            today = new Date();

            var days =  Math.floor(( toDate - today ) / 86400000);
            var beautyPrint = d3.time.format("%d/%m/%Y");

            var retorno = days;

        } else {
            var retorno = null;
        }

        return retorno;

    }.property('multiplicationDate', 'hasMultiplicationDate'),
    remainingWeeks: function() {
        var days = this.get('remainingDays');

        return Math.round(days / 7);
    }.property('remainingDays'),

    newHost: 'Fabricio',
    newHostInput: null,

    futureLeader: [
        Ember.Object.create({
            name: "Fabrício",
            requirements: Ember.Object.create({
                requirement1: true,
                requirement2: false,
                requirement3: false,
                requirement4: false,
                requirement5: false,
                requirement6: false,
                requirement7: false
            })
         }),
        Ember.Object.create({
            name: "André",
            requirements: Ember.Object.create({
                requirement1: false,
                requirement2: false,
                requirement3: false,
                requirement4: false,
                requirement5: false,
                requirement6: false,
                requirement7: false
            })
        })
    ]

});
