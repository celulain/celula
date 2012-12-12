App.FrequencyController = Em.ArrayController.extend({
    content: [],
    date1: Ember.Object.create({id: '7',  date: '23/11/2012', presents: 0}),
    date2: Ember.Object.create({id: '8',  date: '30/11/2012', presents: 0}),
    date3: Ember.Object.create({id: '9',  date: '07/12/2012', presents: 0}),
    date4: Ember.Object.create({id: '10',  date: '14/12/2012', presents: 0}),
    dummy: [
        {id: "1", name: "Fulano",  position: "",         meetings: [{id: 8, date: '30/11/2012'} ]},
        {id: "2", name: "Ciclano", position: "",         meetings: [{id: 8, date: '30/11/2012'}, {id: 9, date: '07/12/2012'}]},
        {id: "3", name: "Beltrano",position: "",         meetings: [{id: 8, date: '30/11/2012'}, {id: 9, date: '07/12/2012'}]},
        {id: "4", name: "Morgano", position: "Líder",    meetings: [{id: 8, date: '30/11/2012'}, {id: 9, date: '07/12/2012'}]},
        {id: "5", name: "Borano",  position: "",         meetings: [{id: 8, date: '30/11/2012'} ]},
        {id: "6", name: "Juliano", position: "Anfitrião",meetings: [{id: 8, date: '30/11/2012'} ]},
        {id: "7", name: "Bolano",  position: "",         meetings: [{id: 8, date: '30/11/2012'} ]}
    ],
    processedDummy: [
        Ember.Object.create({id: "1", name: "Fulano",  position: "",         date1: false, meeting_id1: '7', meeting_id2: '8', meeting_id3: '9', meeting_id4: '10', date2: false, date3: false, date4: true}),
        Ember.Object.create({id: "2", name: "Ciclano", position: "",         date1: false, meeting_id1: '7', meeting_id2: '8', meeting_id3: '9', meeting_id4: '10', date2: false, date3: false, date4: true}),
        Ember.Object.create({id: "3", name: "Beltrano",position: "",         date1: true, meeting_id1: '7', meeting_id2: '8', meeting_id3: '9', meeting_id4: '10', date2: false, date3: false, date4: true}),
        Ember.Object.create({id: "4", name: "Morgano", position: "Líder",    date1: false, meeting_id1: '7', meeting_id2: '8', meeting_id3: '9', meeting_id4: '10', date2: false, date3: false, date4: true}),
        Ember.Object.create({id: "5", name: "Borano",  position: "",         date1: false, meeting_id1: '7', meeting_id2: '8', meeting_id3: '9', meeting_id4: '10', date2: false, date3: false, date4: true}),
        Ember.Object.create({id: "6", name: "Juliano", position: "Anfitrião",date1: true, meeting_id1: '7', meeting_id2: '8', meeting_id3: '9', meeting_id4: '10', date2: false, date3: false, date4: true}),
        Ember.Object.create({id: "7", name: "Bolano",  position: "",         date1: false, meeting_id1: '7', meeting_id2: '8', meeting_id3: '9', meeting_id4: '10', date2: false, date3: false, date4: true})
    ],
    checkPresence: function(event) {
        var user_id = $(event.currentTarget).data('user-id'),
            meeting_id = $(event.currentTarget).data('meeting-id'),
            position = $(event.currentTarget).data('position');

        var date = 'date' + position;
        console.log(date);
        this.get('processedDummy').forEach(function(e, i) {
            // console.log('processedDummy = ', e.id);
            if (user_id == e.id) {
                
                if (this.get('processedDummy')[i].get(date)) {
                    this.get('processedDummy').objectAt(i).set(date, false);
                } else {
                    this.get('processedDummy').objectAt(i).set(date, true);
                }
                
                qtdeDate = this.get('processedDummy').filterProperty(date, true).get('length');
                this.get(date).set('presents', qtdeDate);
            }
        }, this),

        console.log("checar presença", user_id, meeting_id);
    },






    isPresent1: true,
    displayedMeetings: Ember.A([
        {id: '7',  date: '23/11/2012'},
        {id: '8',  date: '30/11/2012'},
        {id: '9',  date: '07/12/2012'},
        {id: '10',  date: '14/12/2012'}
    ]),
    previousMeeting: function(event) {
        console.log("PREVIOUS");
        // var array = this.get('displayedMeetings'); 
        // var last = array[3];
        // this.get('displayedMeetings').removeObject(last);
        
        // var all = this.get( 'allMeetings');
        // var index = null;
        // all.forEach(function(e, i) {
        //     if (e === last) {
        //         index = i + 4;
        //     }
        // })
        var a = this.get('displayedMeetings')[0];
        var all = this.get('allMeetings');
        var index = null;
        all.forEach(function(e, i) {
            if (a.date === e.date) {
                index = i;
            }
        });

        if (index === 0) {
            this.set('noPrevious', true);
        } else {
            (index === 1) ? this.set('noPrevious', true) : '';
            this.set('noNext', false);
            this.get('displayedMeetings').popObject();
            this.get('displayedMeetings').unshiftObject(this.get('allMeetings')[index - 1]);
        }
    },
    nextMeeting: function(event) {
        console.log("NEXT");
        var length = this.get('allMeetings').length;
        var a = this.get('displayedMeetings')[3];

        var all = this.get('allMeetings');
        var index = null;
        all.forEach(function(e, i) {
            if (a.date === e.date) {
                index = i;
            }
        });

        if (index === length - 1) {
            this.set('noNext', true);
        } else {
            (index === length - 2) ? this.set('noNext', true) : '';
            this.set('noPrevious', false);
            this.get('displayedMeetings').removeAt(0);
            this.get('displayedMeetings').addObject(this.get('allMeetings')[index + 1]);
        }
        
    },
    noNext: false,
    noPrevious: false,

    allMeetings: [
        {id: '1', date: '12/10/2012'},
        {id: '2', date: '19/10/2012'},
        {id: '3', date: '26/10/2012'},
        {id: '4', date: '02/11/2012'},
        {id: '5', date: '09/11/2012'},
        {id: '6', date: '16/11/2012'},
        {id: '7', date: '23/11/2012'},
        {id: '8', date: '30/11/2012'},
        {id: '9', date: '07/12/2012'},
        {id: '10', date: '14/12/2012'},
        {id: '11', date: '21/12/2012'},
        {id: '12', date: '28/12/2012'}
    ]
});
