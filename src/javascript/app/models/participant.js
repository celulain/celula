// Participante de célula
App.Participant = DS.Model.extend({
    first_name: DS.attr('string'),
    last_name: DS.attr('string'),
    nickname: DS.attr('string'),
    usual_name: DS.attr('boolean'),
    name: function() {
        if (this.get('usual_name')) {
            return this.get('nickname');
        } else {
            return this.get('first_name') + ' ' + this.get('last_name');
        }
    }.property('usual_name'),
    email: DS.attr('string'),
    phone: DS.attr('string'),
    sex: DS.attr('string'),
    baptism: DS.attr('string'),
    position: DS.attr('string'),
    meetings: DS.hasMany('App.Meeting')
});

App.Participant.reopenClass({
    url: '/fixtures/participants'
});

// App.Participant = Em.Object.extend({
//     name: null
// });
// App.Participant.reopenClass({
//     // url: '/api/participant'
//     get: '/api/getparticipants'
// });
// App.Participant.reopenClass({
//     participants: [],

//     find: function() {
//         $.ajax(this.get, {
//             type: 'GET',
//             dataType: 'json',
//             context: this,
//             success: function(data) {
//                 console.log(data.data);
//                 data.data.forEach(function(element) {
//                     this.participants.addObject(App.Participant.create(element));
//                 }, this);
//             }
//         })

//         return this.participants;
//     }
// });
