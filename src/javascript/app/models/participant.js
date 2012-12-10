App.Participant = Em.Object.extend({
    name: null
});
App.Participant.reopenClass({
    // url: '/api/participant'
    get: '/api/getparticipants'
});
App.Participant.reopenClass({
    participants: [],

    find: function() {
        $.ajax(this.get, {
            type: 'GET',
            dataType: 'json',
            context: this,
            success: function(data) {
                console.log(data.data);
                data.data.forEach(function(element) {
                    this.participants.addObject(App.Participant.create(element));
                }, this);
            }
        })

        return this.participants;
    }
});
