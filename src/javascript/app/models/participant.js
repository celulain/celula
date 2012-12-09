App.Participant = Em.Object.extend({
    name: null
});
App.Participant.reopenClass({
    url: '/api/participant'
});
App.Participant.reopenClass({
    participants: [],

    find: function() {

    }
});
