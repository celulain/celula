var App = Em.Application.create();

// ------------------------------------------------------------ MODELS

// BEGIN Participant Model
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
// END Participant model





// Subgoals Model
App.Subgoals = Em.Object.extend({
    multiplicationDate: null,
    goalParticipants: null,
    newHost: null,
    trainingLeaders: null
});
App.Subgoals.reopenClass({
    url: '/api/subgoals'
});
App.Subgoals.reopenClass({
    subgoals: [],

    find: function() {
        $.ajax(this.url, {
            type: 'GET',
            timeout: 5000,
            dataType: 'json',
            context: this,
            success: function(data, textStatus, jqXHR) {
                var date = data.data.multiplicationDate,
                    format = d3.time.format("%Y-%m-%d"),
                    toDate = format.parse(date),
                    today = new Date();

                var days =  Math.floor(( toDate - today ) / 86400000);
                var beautyPrint = d3.time.format("%d/%m/%Y");

                // returns a Date
                console.log(beautyPrint(toDate), days);

                this.subgoals.addObject({
                    date: beautyPrint(toDate),
                    remainingDays: days
                });

            },
            error: function(jqXHR, textStatus, errorThrown) {

            }
        });

        return this.subgoals;   
    }
});


// ------------------------------------------------------------ VIEWS
// Frequência View
App.FrequenciaView = Em.View.extend({
    templateName: 'frequencia'
});

// Subgoals View
App.SubgoalsView = Em.View.extend({
    templateName: 'subgoals'
});

// New Participant View
App.NewParticipantView = Em.View.extend({
    templateName: 'new-participant'
});

// ------------------------------------------------------------ CONTROLLERS
// Application controller
App.ApplicationController = Em.Controller.extend({
    content: null
});

// Frequencia controller
App.FrequenciaController = Em.ArrayController.extend({
    content: [
        {
            funcao: 'Líder de célula',
            categoria: '1',
            nome: 'André',
            dateMeetings: [
                {
                    date: '30-11-2012',
                    present: true
                },
                {
                    date: '23-11-2012',
                    present: true
                },
                {
                    date: '16-11-2012',
                    present: false
                },
                {
                    date: '09-11-2012',
                    present: false
                }
            ]
        },
        {
            funcao: 'Visitante',
            categoria: '2',
            nome: 'Fabrício',
            dateMeetings: [
                {
                    date: '30-11-2012',
                    present: true
                },
                {
                    date: '23-11-2012',
                    present: false
                },
                {
                    date: '16-11-2012',
                    present: false
                },
                {
                    date: '09-11-2012',
                    present: false
                }
            ]
        },
        {
            funcao: 'Líder em treinamento',
            categoria: '2',
            nome: 'Fabrício',
            dateMeetings: [
                {
                    date: '30-11-2012',
                    present: true
                },
                {
                    date: '23-11-2012',
                    present: false
                },
                {
                    date: '16-11-2012',
                    present: false
                },
                {
                    date: '09-11-2012',
                    present: false
                }
            ]
        }
    ],

    // Frequencia salva
    salvo: true,

    bola: 'bolinha',

    allMeetings: [
        {date: '14-12-2012'},
        {date: '07-12-2012'},
        {date: '30-11-2012'},
        {date: '23-11-2012'},
        {date: '16-11-2012'},
        {date: '09-11-2012'}
    ],

    lastSelectedMeeting: '23-11-2012',

    dateMeetings: function() {
        var allMeetings = this.get('allMeetings'),
            lastSelectedMeeting = this.get('lastSelectedMeeting'),
            selectedMeetings = [];


        allMeetings.forEach(function(element, index) {
            if (element.date === lastSelectedMeeting) {

                for (var i = 0; i < 4; i++) {
                    selectedMeetings[i] = allMeetings[index + i];
                    console.log("i = ", i, "index = ", index);
                }
            }
        });
        return selectedMeetings;
    }.property('allMeetings', 'lastSelectedMeeting'),

    members: function() {
        // Categoria == 1
        var content = this.get('content');
        var members = [];
        console.log(content);

        content.forEach(function(element, index){
            if (element.categoria === '1') {
                members.addObject(element);
            }
        });

        return members;
    }.property('content'),

    visitors: function() {
        // Categoria 2
        var content = this.get('content'),
            visitors = [];

        content.forEach(function(element, index) {
            if (element.categoria === '2') {
                visitors.addObject(element);
            }
        });

        return visitors;
    }.property('content')
});

// Subgoals controller
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
    newHostInput: null

});


// New Participant Controller
App.NewParticipantController = Em.Controller.extend({
    content: null,
    name: null,
});

// BEGIN Participants Controller
App.ParticipantsController = Em.ArrayController.extend({
    content: []
});
// END Participants Controller

// ------------------------------------------------------------ ROUTER
// Router
App.Router = Em.Router.extend({
    enableLogging: true,

    root: Em.Route.extend({
        editSubgoal1: function(router, event) {
            $('.edit-subgoal-1').show();
        },
        saveSubgoal1: function(router, event) {
            var date = router.get('subgoalsController').get('newMultiplicationDate');
            router.get('subgoalsController').set('multiplicationDate', date);
            router.get('subgoalsController').set('newMultiplicationDate', null);
            // App.Subgoals.

            $('.edit-subgoal-1').hide();
        },
        closeSubgoal1: function(router, event) {
            App.router.subgoalsController.set('getMultiplicationDate');

            $('.edit-subgoal-1').hide();
        },

        editSubgoal5: function(router, event) {
            $('.edit-subgoal-5').show();
        },
        saveSubgoal5: function(router, event) {
            var host = router.get('subgoalsController').get('newHostInput');
            router.get('subgoalsController').set('newHost', host);
            router.get('subgoalsController').set('newHostInput', null);
            // App.Subgoals.update()

            $('.edit-subgoal-5').hide();
        },
        closeSubgoal5: function(router, event) {
            $('.edit-subgoal-5').hide();  
        },


        // Adicionar visitante
        addNewVisitor: function(router, event) {
            console.log( "YEYE!");
            $('.add-new-visitor-box').show();
            $('.add-visitor').hide();
        },
        // Salvar visitante
        saveNewVisitor: function(router, event) {
            $('.add-new-visitor-box').hide();
            $('.add-visitor').show();

            var name = router.get('newParticipantController').get('name');

            var participant = App.Participant.create({
                name: name
            });

            router.get('participantsController').get('content').addObject(participant);

        },
        // Fechar box de visitante
        closeNewVisitor: function(router, event) {
            $('.add-new-visitor-box').hide();
            $('.add-visitor').show();
        },

        index: Em.Route.extend({
            route: '/',
            connectOutlets: function(router) {
                router.get('applicationController')
                    .connectOutlet('frequencia','frequencia');

                router.get('applicationController')
                    .connectOutlet('subgoals','subgoals', App.Subgoals.find());

                router.get('applicationController')
                    .connectOutlet('newParticipant','newParticipant');                
            }
        })
    })
});

App.initialize();
