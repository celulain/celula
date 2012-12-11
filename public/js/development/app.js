var brush = function() {
    x.domain(brush.empty() ? x2.domain() : brush.extent());
    focus.select("path").attr("d", area);
    focus.select(".x.axis").call(xAxis);
}

window.App = Em.Application.create();
App.Store = DS.Store.extend({
    revision: 8,
    // adapter: 'DS.fixtureAdapter'
    adapter: DS.RESTAdapter.create({
        bulkCommit: false,
        url: '/fixtures',
        mappings: {
            participants: 'App.Participant',
            lessons: 'App.Lesson',
            dynamics: 'App.Dynamic',
            praises: 'App.Praise',
            suggestions: 'App.Suggestion'
        }
    })
});
App.Cell = DS.Model.extend({
    start_date: DS.attr('date'),
    end_date: DS.attr('date'),
    week_day: DS.attr('string'),
    gender: DS.attr('string'),
    age_group: DS.attr('string'),
    hour_start: DS.attr('string')
});

App.Cell.FIXTURES = [
    {
        id: "1",
        
    }
];
App.Dynamic = DS.Model.extend({
    name: DS.attr('string'),
    min_participants: DS.attr('number'),
    max_participants: DS.attr('number'),
    goal: DS.attr('string'),
    stuff: DS.attr('string'),
    text: DS.attr('string')
});
// Lição de célula
App.Lesson = DS.Model.extend({
    name: DS.attr('string'),
    path: DS.attr('string'),
    date: DS.attr('string')
});


// App.Lesson.FIXTURES = [
//     {id: 1, name: "Agindo como Jesus nas Tentações", path: "", date: "04/08/2012 à 11/08/2012"},
// {id: 2, name: "A conduta do Cristão nos últimos dias", path: "", date: "04/08/2012 à 11/08/2012"},
// {id: 3, name: "Agindo como Jesus no sofrimento", path: "", date: "04/08/2012 à 11/08/2012"},
// {id: 4, name: "O que devemos esperar quando oramos?", path: "", date: "04/08/2012 à 11/08/2012"},
// {id: 5, name: "A Parábola do Fariseu e do Publicano", path: "", date: "04/08/2012 à 11/08/2012"},
// {id: 6, name: "Deus é o nosso Bom Pastor", path: "", date: "04/08/2012 à 11/08/2012"},
// {id: 7, name: "Bíblia, o manual de Deus", path: "", date: "04/08/2012 à 11/08/2012"},
// {id: 8, name: "Um Lugar ao Qual Pertencer ", path: "", date: "04/08/2012 à 11/08/2012"},
// {id: 9, name: "Confiança e paz interior", path: "", date: "04/08/2012 à 11/08/2012"},
// {id: 10, name: "O que estou fazendo neste mundo, afinal?", path: "", date: "04/08/2012 à 11/08/2012"},
// {id: 11, name: "Escolhas Eternas", path: "", date: "04/08/2012 à 11/08/2012"},
// {id: 12, name: "Jesus é a Porta", path: "", date: "04/08/2012 à 11/08/2012"}
// ];
 
App.Member = DS.Model.extend({
    name: DS.attr('string')
});
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
    position: DS.attr('string')
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
App.Praise = DS.Model.extend({
    name: DS.attr('string'),
    path: DS.attr('string')
});
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
App.Suggestion = DS.Model.extend({
    user_id: DS.attr('string'),
    date: DS.attr('date'),
    suggestion: DS.attr('string')
});
// Usuário que tem cadastro no sistema de célula
App.User = DS.Model.extend({
    firstName: DS.attr('string'),
    lastName: DS.attr('string'),
    nickname: DS.attr('string'),
    sex: DS.attr('string'),
    birthdate: DS.attr('date'),
    email: DS.attr('string'),
    phone: DS.attr('string'),
    avatar: DS.attr('string')
});

App.User.FIXTURE = [
    {
        id: "1",
        firstName: "",
        lastName: "",
        nickname: "",
        sex: "",
        birthdate: "",
        email: "",
        phone: "",
        avatar: ""
    }    
];

// Adicionar: id da célula a que pertence
App.AdminMembersView = Em.View.extend({
    tamplateName: 'admin-members'
});
App.FrequencyView = Em.View.extend({
    templateName: 'cell-frequency',
    didInsertElement: function() {
        // Adicionar date picker
    }
});
App.CellParticipantNewView = Em.View.extend({
    templateName: 'cell-participant-new'
});
App.CellParticipantView = Em.View.extend({
    templateName: 'cell-participant'
});
App.CellParticipantsView = Em.View.extend({
    templateName: 'cell-participants'
});
App.CellProfileView = Em.View.extend({
    templateName: 'cell-profile'
});
App.CellRegisterView = Em.View.extend({
    templateName: 'cell-register'
});
App.GodPresenceView = Em.View.extend({
    templateName: 'god-presence',
    data: function() {
        var bola = null;
        $.ajax('/js/app/data.csv', {
            context: bola,
            success: function(data) {
                console.log(data);
                bola = data;
            }
        });
        return bola;
    }.property(),
    // brush: function brush() {
    //     x.domain(brush.empty() ? x2.domain() : brush.extent());
    //     focus.select("path").attr("d", area);
    //     focus.select(".x.axis").call(xAxis);
    // },
    didInsertElement: function() {
        var brush = this.get('brush');
        var id = this.$().attr('id');

        var margin = {top: 10, right: 10, bottom: 100, left: 40},
            margin2 = {top: 130, right: 10, bottom: 20, left: 40},
            width = 260 - margin.left - margin.right,
            height = 200 - margin.top - margin.bottom,
            height2 = 200 - margin2.top - margin2.bottom;

        var parseDate = d3.time.format("%b %Y").parse;

        var x = d3.time.scale().range([0, width]),
            x2 = d3.time.scale().range([0, width]),
            y = d3.scale.linear().range([height, 0]),
            y2 = d3.scale.linear().range([height2, 0]);

        var xAxis = d3.svg.axis().scale(x).orient("bottom"),
            xAxis2 = d3.svg.axis().scale(x2).orient("bottom"),
            yAxis = d3.svg.axis().scale(y).orient("left").ticks(2);

        var brush = d3.svg.brush()
            .x(x2)
            .on("brush", brush);

        var area = d3.svg.area()
            .interpolate("monotone")
            .x(function(d) { return x(d.date); })
            .y0(height)
            .y1(function(d) { return y(d.presence); });

        var area2 = d3.svg.area()
            .interpolate("monotone")
            .x(function(d) { return x2(d.date); })
            .y0(height2)
            .y1(function(d) { return y2(d.presence); });

        var svg = d3.select('#' + id).append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom);

        svg.append("defs").append("clipPath")
            .attr("id", "clip")
            .append("rect")
            .attr("width", width)
            .attr("height", height);

        var focus = svg.append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        var context = svg.append("g")
            .attr("transform", "translate(" + margin2.left + "," + margin2.top + ")");

        // var data = this.get('data');


        d3.csv("/js/app/data.csv", function(data, error) {

            data.forEach(function(d) {
              d.date = parseDate(d.date);
              d.presence = +d.presence;
            });

            x.domain(d3.extent(data.map(function(d) { return d.date; })));
        y.domain([0, d3.max(data.map(function(d) { return d.presence; }))]);
        x2.domain(x.domain());
        y2.domain(y.domain());

        focus.append("path")
            .datum(data)
            .attr("clip-path", "url(#clip)")
            .attr("d", area);

        focus.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + height + ")")
            .call(xAxis);

        focus.append("g")
            .attr("class", "y axis")
            .call(yAxis);

        context.append("path")
            .datum(data)
            .attr("d", area2);

        context.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + height2 + ")")
            .call(xAxis2);

        context.append("g")
            .attr("class", "x brush")
            .call(brush)
          .selectAll("rect")
            .attr("y", -6)
            .attr("height", height2 + 7);
        });

        // data.forEach(function(d) {
            // d.date = parseDate(d.date);
            // d.presence = +d.presence;
        // });
    }
});
App.ResourcesDynamicsView = Em.View.extend({
    templateName: 'resources-dynamics'
});
App.ResourcesLessonsView = Em.View.extend({
    templateName: 'resources-lessons'
});
App.ResourcesPraisesView = Em.View.extend({
    templateName: 'resources-praises'
});
App.SettingsAddressView = Em.View.extend({
    templateName: 'settings-address'
});
App.SettingsContactView = Em.View.extend({
    templateName: 'settings-contact'
});
App.SettingsPasswordView = Em.View.extend({
    templateName: 'settings-password'
});
App.SettingsProfileView = Em.View.extend({
    templateName: 'settings-profile'
});
App.SettingsView = Em.View.extend({
    templateName: 'settings'
});
App.SubgoalFutureLeaderView = Em.View.extend({
    templateName: 'subgoal-future-leader'
});
App.SubgoalGodPresenceView = Em.View.extend({
    templateName: 'subgoal-god-presence'
});
App.SubgoalMultiplicationDateView = Em.View.extend({
    templateName: 'subgoal-multiplication-date'
});
App.SubgoalNewHostView = Em.View.extend({
    templateName: 'subgoal-new-host'
});
App.SubgoalNewParticipantsView = Em.View.extend({
    templateName: 'subgoal-new-participants'
});
App.SuggestionNewView = Em.View.extend({
    templateName: 'suggestion-new'
});
App.SuggestionsView = Em.View.extend({
    templateName: 'suggestions'
});
App.AdminMembersController = Em.ArrayController.extend();
App.ApplicationController = Em.Controller.extend({
    content: null
});
App.FrequencyController = Em.ArrayController.extend({
    content: [],
    bola: function() {
        var content = this.get('content');
        content.forEach(function(e) {
            console.log(e);
        });
    },
    // Frequencia salva
    salvo: true,

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
App.CellParticipantNewController = Em.ObjectController.extend({
    clear: function() {
        this.set('firstName', '');
        this.set('lastName', '');
        this.set('nickname', '');
        this.set('email', '');
        this.set('phone', '');
        this.set('sex', '');
        this.set('baptism', '');
        this.set('trainingLeader', false);
        this.set('host', false);

        this.set('isMale', false);
        this.set('isFemale', false);
        this.set('isBaptism1', false);
        this.set('isBaptism2', false);
        this.set('isBaptism3', false);
    },

    participant: function() {
        var usual_name = false;
        if (this.get('nickname')) {
            usual_name = true;
        }

        var participant = {
            first_name: this.get('firstName'),
            last_name: this.get('lastName'),
            nickname: this.get('nickname'),
            usual_name: usual_name,
            email: this.get('email'),
            phone: this.get('phone'),
            sex: this.get('sex'),
            baptism: this.get('baptism'),
            training_leader: this.get('trainingLeader'),
            host: this.get('host')
        };

        return participant;
    }.property('firstName', 'lastName', 'nickname', 'email', 'phone', 'sex', 'baptism', 'trainingLeader', 'host'),

    // Properties do novo participante
    firstName: '',
    lastName: '',
    nickname: '',
    email: '',
    phone: '',
    sex: '',
    baptism: '',
    trainingLeader: false,
    host: false,

    // Checkbox behavior for cell position
    toggleTrainingLeader: function() {
        this.toggleProperty('trainingLeader');
    },
    toggleHost: function() {
        this.toggleProperty('host');
    },

    // Radio behavior for sex
    isMale: false,
    isFemale: false,
    toggleSex: function(event) {
        var sex = $(event.currentTarget).data('sex');

        switch(sex) {
            case 1:
                this.set('isMale', true);
                this.set('isFemale', false);
                this.set('sex', 1);
            break;
            case 2:
                this.set('isMale', false);
                this.set('isFemale', true);
                this.set('sex', 2);
            break;
            default:
                this.set('isMale', false);
                this.set('isFemale', false);
            break;
        }
    },

    // Radio behavior for baptism
    isBaptism1: false,
    isBaptism2: false,
    isBaptism3: false,
    toggleBaptism: function(event) {
        var baptism = $(event.currentTarget).data('baptism');

        switch(baptism) {
            case 1:
                this.set('isBaptism1', true);
                this.set('isBaptism2', false);
                this.set('isBaptism3', false);
                this.set('baptism', 1);
            break;
            case 2:
                this.set('isBaptism1', false);
                this.set('isBaptism2', true);
                this.set('isBaptism3', false);
                this.set('baptism', 2);
            break;
            case 3:
                this.set('isBaptism1', false);
                this.set('isBaptism2', false);
                this.set('isBaptism3', true);
                this.set('baptism', 3);
            break;
            default:
                this.set('isBaptism1', false);
                this.set('isBaptism2', false);
                this.set('isBaptism3', false);
            break;
        }
    }
});
App.CellParticipantController = Em.ObjectController.extend();
App.CellParticipantsController = Em.ArrayController.extend();
App.ResourcesDynamicsController = Em.ArrayController.extend();
App.ResourcesLessonsController = Em.ObjectController.extend();
App.ResourcesPraisesController = Em.ArrayController.extend();
App.SettingsAddressController = Em.Controller.extend();
App.SettingsContactController = Em.Controller.extend();
App.SettingsPasswordController = Em.Controller.extend();
App.SettingsProfileController = Em.Controller.extend();
App.SettingsController = Em.Controller.extend();
App.SubgoalFutureLeaderController = Em.ObjectController.extend();
App.SubgoalGodPresenceController = Em.ObjectController.extend();
App.SubgoalMultiplicationDateController = Em.ObjectController.extend();
App.SubgoalNewHostController = Em.ObjectController.extend();
App.SubgoalNewParticipantsController = Em.ObjectController.extend();
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
App.SuggestionNewController = Em.ObjectController.extend({
    suggestion: null
});
App.SuggestionsController = Em.ArrayController.extend();
// Router
App.Router = Em.Router.extend({
    enableLogging: true,

    root: Em.Route.extend({

        gotoFrequency: Em.Route.transitionTo('cell.frequency'),
        gotoParticipants: Em.Route.transitionTo('cell.participants.index'),
        gotoRegister: Em.Route.transitionTo('cell.register'),
        gotoProfile: Em.Route.transitionTo('cell.profile'),
        gotoLessons: Em.Route.transitionTo('resources.lessons'),
        gotoPraise: Em.Route.transitionTo('resources.praises'),
        gotoDynamics: Em.Route.transitionTo('resources.dynamics'),

        gotoSettings: Em.Route.transitionTo('settings.index'),
        gotoSettingsProfile: Em.Route.transitionTo('settings.profile'),
        gotoSettingsAddress: Em.Route.transitionTo('settings.address'),
        gotoSettingsContact: Em.Route.transitionTo('settings.contact'),
        gotoSettingsPassword: Em.Route.transitionTo('settings.password'),

        gotoAdminMembers: Em.Route.transitionTo('admin.members'),

        // ------


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

        // Desconectar WINDOW outlet
        closeWindow: function(router, event) {
            router.get('applicationController').disconnectOutlet('window');
        },


        // 7 Estrelas (requerimentos) do futuro líder
        futureLeaderRequirement: function(router, event) {
            console.log("star 1");
            
            var reqNumber = $(event.currentTarget).data().requirement;
            var reqKey = 'requirement' + reqNumber;

            console.log(reqNumber);
            var name = event.context;
            var lts = router.get('subgoalsController').get('futureLeader');

            var i = null;
            lts.forEach(function(element, index) {
                if (element.name == name) {
                    i = index;
                }
            });

            console.log(i);
            switch(reqNumber) {
                case 1:
                    var req = App.router.subgoalsController.futureLeader[i].requirements.get(reqKey);
                    if (req) {
                       App.router.subgoalsController.futureLeader[i].requirements.set(reqKey, false);
                    } else {
                        App.router.subgoalsController.futureLeader[i].requirements.set(reqKey, true);
                    }
                    break;
                case 2:
                    console.log("CASO 2");
                    var req = App.router.subgoalsController.futureLeader[i].requirements.get(reqKey);
                    if (req) {
                       App.router.subgoalsController.futureLeader[i].requirements.set(reqKey, false);
                    } else {
                        App.router.subgoalsController.futureLeader[i].requirements.set(reqKey, true);
                    }
                    break;
                case 3:
                    var req = App.router.subgoalsController.futureLeader[i].requirements.get(reqKey);
                    if (req) {
                       App.router.subgoalsController.futureLeader[i].requirements.set(reqKey, false);
                    } else {
                        App.router.subgoalsController.futureLeader[i].requirements.set(reqKey, true);
                    }
                    break;
                case 4:
                    var req = App.router.subgoalsController.futureLeader[i].requirements.get(reqKey);
                    if (req) {
                       App.router.subgoalsController.futureLeader[i].requirements.set(reqKey, false);
                    } else {
                        App.router.subgoalsController.futureLeader[i].requirements.set(reqKey, true);
                    }
                    break;
                case 5:
                    var req = App.router.subgoalsController.futureLeader[i].requirements.get(reqKey);
                    if (req) {
                       App.router.subgoalsController.futureLeader[i].requirements.set(reqKey, false);
                    } else {
                        App.router.subgoalsController.futureLeader[i].requirements.set(reqKey, true);
                    }
                    break;
                case 6:
                    var req = App.router.subgoalsController.futureLeader[i].requirements.get(reqKey);
                    if (req) {
                       App.router.subgoalsController.futureLeader[i].requirements.set(reqKey, false);
                    } else {
                        App.router.subgoalsController.futureLeader[i].requirements.set(reqKey, true);
                    }
                    break;
                case 7:
                    var req = App.router.subgoalsController.futureLeader[i].requirements.get(reqKey);
                    if (req) {
                       App.router.subgoalsController.futureLeader[i].requirements.set(reqKey, false);
                    } else {
                        App.router.subgoalsController.futureLeader[i].requirements.set(reqKey, true);
                    }
                    break;
            }

            
        },

        index: Em.Route.extend({
            route: '/',
            redirectsTo: 'cell.frequency'
        }),


        gotoSuggestions: Em.Route.transitionTo('suggestions.index'),
        gotoNewSuggestion: Em.Route.transitionTo('suggestions.newSuggestion'),
        suggestions: Em.Route.extend({
            route: '/sugestoes',
            index: Em.Route.extend({
                route: '/',
                enter: function(router) {
                    router.get('applicationController').disconnectOutlet('window');
                },
                connectOutlets: function(router) {
                    router.get('applicationController')
                        .connectOutlet('container', 'suggestions', router.get('store').findAll(App.Suggestion));
                }
            }),
            newSuggestion: Em.Route.extend({
                route: '/nova',
                createSuggestion: function(router, event) {
                    var suggestion = router.get('suggestionNewController').get('suggestion');
                    App.Suggestion.createRecord({
                        user_id: '',
                        date: new Date(),
                        suggestion: suggestion
                    });

                    router.send('gotoSuggestions');
                },
                connectOutlets: function(router) {
                    router.get('applicationController')
                        .connectOutlet('window', 'suggestionNew');
                }
            })
        }),

        // Cell state
        cell: Em.Route.extend({
            route: '/celula',

            index: Em.Route.extend({
                route: '/',
                redirectsTo: 'frequency'
            }),

            gotoParticipant: Em.Route.transitionTo('participants.participant'),

            frequency: Em.Route.extend({
                route: '/frequencia',
                connectOutlets: function(router) {
                    router.get('applicationController')
                        .connectOutlet('container','frequency', router.get('store').findAll(App.Participant));

                    // Submetas
                    router.get('frequencyController').connectOutlet('subgoalMultiplicationDate','subgoalMultiplicationDate');
                    router.get('frequencyController').connectOutlet('subgoalGodPresence','subgoalGodPresence');
                    router.get('frequencyController').connectOutlet('subgoalFutureLeader','subgoalFutureLeader');
                    router.get('frequencyController').connectOutlet('subgoalNewParticipants','subgoalNewParticipants');
                    router.get('frequencyController').connectOutlet('subgoalNewHost','subgoalNewHost');

                    // Outlet gráfico de presença de Deus
                    // router.get('subgoalsController')
                        // .connectOutlet('godPresence', 'godPresence');
                }
            }),

            participants: Em.Route.extend({
                route: '/participantes',
                gotoNewParticipant: Em.Route.transitionTo('newParticipant'),

                index: Em.Route.extend({
                    route: '/',
                    connectOutlets: function(router) {
                        router
                            .get('applicationController')
                            .disconnectOutlet('window');
    
                        router
                            .get('applicationController')
                            .connectOutlet('container', 'cellParticipants', router.get('store').findAll(App.Participant));
                    }
                }),

                
                // Show just one participant
                participant: Em.Route.extend({
                    route: '/participante/:id',
                    connectOutlets: function(router, context) {
                        console.log("contexto do participante", context);
                        router.get('applicationController').connectOutlet('window', 'cellParticipant', context);
                    },
    
                    serialize: function(router, context){
                      return { id: context.id };
                    },
    
                    deserialize:  function(router, context){
                      return App.Participant.find( context.id );
                    },
                }),

                newParticipant: Em.Route.extend({
                    route: '/novo',
                    createParticipant: function(router, event) {
                        var obj = router.get('cellParticipantNewController')
                            .get('participant');


                        App.Participant.createRecord(obj);
                        router.send('gotoParticipants');
                        // Depois de salvar o novo participante, limpa os registros
                        router.get('cellParticipantNewController').clear();
                        console.log(obj);
                    },
                    connectOutlets: function(router) {
                        router
                            .get('applicationController')
                            .connectOutlet('window', 'cellParticipantNew');
                    }
                })
            }),

            

            register: Em.Route.extend({
                route: '/cadastro',
                connectOutlets: function(router) {
                    router.get('applicationController')
                        .connectOutlet('container', 'cellRegister');
                }
            }),

            profile: Em.Route.extend({
                route: '/perfil',
                connectOutlets: function(router) {
                    router.get('applicationController')
                        .connectOutlet('container', 'cellProfile');
                }
            })
        }),

        // Resources state
        resources: Em.Route.extend({
            route: '/recursos',
            index: Em.Route.extend({
                route: '/',
                redirectsTo: 'lessons'
            }),

            lessons: Em.Route.extend({
                route: '/licoes-de-celula',
                connectOutlets: function(router) {
                router.get('applicationController').connectOutlet('container', 'resourcesLessons', router.get('store').findAll(App.Lesson));
                }
            }),

            praises: Em.Route.extend({
                route: '/louvor',
                connectOutlets: function(router) {
                router.get('applicationController')
                        .connectOutlet('container', 'resourcesPraises', router.get('store').findAll(App.Praise));
                }
            }),

            dynamics: Em.Route.extend({
                route: '/dinamicas',
                connectOutlets: function(router) {
                router.get('applicationController')
                        .connectOutlet('container', 'resourcesDynamics', router.get('store').findAll(App.Dynamic));
                }
            })
        }),

        // Settings state
        settings: Em.Route.extend({
            route: '/configuracoes',
            index: Em.Route.extend({
                route: '/',
                connectOutlets: function(router) {
                    router.get('applicationController')
                        .connectOutlet('container', 'settings');
                }
            }),

            profile: Em.Route.extend({
                route: '/perfil',
                connectOutlets: function(router) {
                    router.get('settingsController')
                        .connectOutlet('container', 'settingsProfile');
                }
            }),

            address: Em.Route.extend({
                route: '/endereco',
                connectOutlets: function(router) {
                router.get('settingsController')
                        .connectOutlet('container', 'settingsAddress');
                }
            }),

            contact: Em.Route.extend({
                route: '/contato',
                connectOutlets: function(router) {
                router.get('settingsController')
                        .connectOutlet('container', 'settingsContact');
                }
            }),

            password: Em.Route.extend({
                route: '/senha',
                connectOutlets: function(router) {
                router.get('settingsController')
                        .connectOutlet('container', 'settingsPassword');
                }
            })
        }),
        
        // Painel administrativo
        admin: Em.Route.extend({
            route: '/admin',
            index: Em.Route.extend({
                route: '/',
                redirectsTo: 'members'
            }),

            members: Em.Route.extend({
                route: '/membros',
                connectOutlets: function(router) {
                    router.get('applicationController').connectOutlet('container', 'adminMembers');
                }
            }),
        })
    })
});

App.initialize();
Ember.TEMPLATES["admin-members"] = Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
helpers = helpers || Ember.Handlebars.helpers;
  var buffer = '', stack1, stack2, stack3, foundHelper, tmp1, self=this, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3;
  data.buffer.push("\n                <li>");
  stack1 = depth0;
  stack2 = "name";
  stack3 = helpers._triageMustache;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "</li>\n            ");
  return buffer;}

  data.buffer.push("<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"span12\">\n            <h3>Membresia</h3>\n            <ul>\n            <!-- ");
  stack1 = depth0;
  stack2 = "content";
  stack3 = helpers.each;
  tmp1 = self.program(1, program1, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" -->\n            </ul>\n        </div>\n    </div>\n</div>");
  return buffer;
});Ember.TEMPLATES["application"] = Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
helpers = helpers || Ember.Handlebars.helpers;
  var buffer = '', stack1, stack2, stack3, stack4, foundHelper, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression;


  stack1 = depth0;
  stack2 = "window";
  foundHelper = helpers.outlet;
  stack3 = foundHelper || depth0.outlet;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  if(typeof stack3 === functionType) { stack1 = stack3.call(depth0, stack2, tmp1); }
  else if(stack3=== undef) { stack1 = helperMissing.call(depth0, "outlet", stack2, tmp1); }
  else { stack1 = stack3; }
  data.buffer.push(escapeExpression(stack1) + "\n\n<div class=\"navbar navbar-inverse navbar-fixed-top\">\n    <div class=\"navbar-inner\">\n        <div class=\"container-fluid\">\n            <a class=\"btn btn-navbar\" data-toggle=\"collapse\" data-target=\".nav-collapse\">\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n            </a>\n            <a class=\"brand\" href=\"/\">Igreja Batista Central</a>\n            <div class=\"btn-group pull-right\">\n                <a class=\"btn btn-inverse dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">\n                    <i class=\"icon-user\"></i>\n                    <span class=\"caret\"></span>\n                </a>\n                <ul class=\"dropdown-menu\">\n                <li>\n                    <!-- <a ");
  stack1 = depth0;
  stack2 = "gotoSettings";
  stack3 = {};
  stack4 = "true";
  stack3['href'] = stack4;
  stack4 = helpers.action;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack4.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">\n                        <i class=\"icon-wrench\"></i> Configurações\n                    </a> -->\n                    <a href=\"/configuracoes/perfil\">\n                        <i class=\"icon-wrench\"></i> Configurações\n                    </a>\n                </li>\n                <li class=\"divider\"></li>\n                <li>\n                    <a href=\"/auth/logout\">\n                        <i class=\"icon-signout\"></i> Sair\n                    </a>\n                </li>\n                </ul>\n            </div>\n\n            <div class=\"nav-collapse\">\n                <ul class=\"nav\">\n                    <li class=\"dropdown\">\n                        <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\"> Célula\n                            <b class=\"caret\"></b>\n                        </a>\n                        <ul class=\"dropdown-menu\">\n                            <li><a ");
  stack1 = depth0;
  stack2 = "gotoFrequency";
  stack3 = {};
  stack4 = "true";
  stack3['href'] = stack4;
  stack4 = helpers.action;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack4.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">Frequência</a></li>\n                            <li><a ");
  stack1 = depth0;
  stack2 = "gotoParticipants";
  stack3 = {};
  stack4 = "true";
  stack3['href'] = stack4;
  stack4 = helpers.action;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack4.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">Participantes</a></li>\n                            <!-- <li><a ");
  stack1 = depth0;
  stack2 = "gotoRegister";
  stack3 = {};
  stack4 = "true";
  stack3['href'] = stack4;
  stack4 = helpers.action;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack4.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">Cadastro</a></li> -->\n                            <li><a href=\"/celula/cadastro\">Cadastro</a></li>\n                            <li><a ");
  stack1 = depth0;
  stack2 = "gotoProfile";
  stack3 = {};
  stack4 = "true";
  stack3['href'] = stack4;
  stack4 = helpers.action;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack4.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">Perfil</a></li>\n                        </ul>\n                    </li>\n                    <!--\n                    <li class=\"dropdown\">\n                        <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\"> Setor\n                            <b class=\"caret\"></b>\n                        </a>\n                        <ul class=\"dropdown-menu\">\n                            <li><a href=\"/setor/celulas\">Células</a></li>\n                            <li><a href=\"/setor/perfil\">Perfil</a></li>\n                        </ul>\n                    </li>\n\n                    <li class=\"dropdown\">\n                        <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\"> Área\n                            <b class=\"caret\"></b>\n                        </a>\n                        <ul class=\"dropdown-menu\">\n                            <li><a href=\"/area/setores\">Setores</a></li>\n                            <li><a href=\"/area/perfil\">Perfil</a></li>\n                        </ul>\n                    </li>\n                    <li class=\"dropdown\">\n                        <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\"> Rede\n                            <b class=\"caret\"></b>\n                        </a>\n                        <ul class=\"dropdown-menu\">\n                            <li><a href=\"/rede/areas\">Áreas</a></li>\n                            <li><a href=\"/rede/perfil\">Perfil</a></li>\n                        </ul>\n                    </li>\n                  -->\n                    <li class=\"dropdown\">\n                        <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\"> Recursos\n                            <b class=\"caret\"></b>\n                        </a>\n                        <ul class=\"dropdown-menu\">\n                            <li><a ");
  stack1 = depth0;
  stack2 = "gotoLessons";
  stack3 = {};
  stack4 = "true";
  stack3['href'] = stack4;
  stack4 = helpers.action;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack4.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">Lições de Célula</a></li>\n                            <li><a ");
  stack1 = depth0;
  stack2 = "gotoPraise";
  stack3 = {};
  stack4 = "true";
  stack3['href'] = stack4;
  stack4 = helpers.action;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack4.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">Louvor</a></li>\n                            <li><a ");
  stack1 = depth0;
  stack2 = "gotoDynamics";
  stack3 = {};
  stack4 = "true";
  stack3['href'] = stack4;
  stack4 = helpers.action;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack4.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">Dinâmicas</a></li>\n                        </ul>\n                    </li>\n\n\n                    <li class=\"dropdown\">\n                        <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\"> Admin\n                            <b class=\"caret\"></b>\n                        </a>\n                        <ul class=\"dropdown-menu\">\n                            <li><a ");
  stack1 = depth0;
  stack2 = "gotoAdminMembers";
  stack3 = {};
  stack4 = "true";
  stack3['href'] = stack4;
  stack4 = helpers.action;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack4.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">Membros</a></li>\n                        </ul>\n                    </li>\n                </ul>\n            </div><!--/.nav-collapse -->\n        </div><!--/.conatiner-fluid -->\n    </div>\n</div><!--/.navbar -->\n\n");
  stack1 = depth0;
  stack2 = "container";
  foundHelper = helpers.outlet;
  stack3 = foundHelper || depth0.outlet;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  if(typeof stack3 === functionType) { stack1 = stack3.call(depth0, stack2, tmp1); }
  else if(stack3=== undef) { stack1 = helperMissing.call(depth0, "outlet", stack2, tmp1); }
  else { stack1 = stack3; }
  data.buffer.push(escapeExpression(stack1) + "\n");
  return buffer;
});Ember.TEMPLATES["cell-frequency"] = Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
helpers = helpers || Ember.Handlebars.helpers;
  var buffer = '', stack1, stack2, stack3, stack4, foundHelper, tmp1, self=this, escapeExpression=this.escapeExpression, functionType="function", helperMissing=helpers.helperMissing, undef=void 0;

function program1(depth0,data) {
  
  
  data.buffer.push("\n            <a style=\"float: right;\" class=\"btn btn-success disabled\">Salvo</a>\n          ");}

function program3(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3;
  data.buffer.push("\n            <a style=\"float: right;\" ");
  stack1 = depth0;
  stack2 = "salvarFrequencia";
  stack3 = helpers.action;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + " class=\"btn btn-success\">Salvar</a>\n          ");
  return buffer;}

function program5(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3;
  data.buffer.push("\n                  <th class=\"date-meeting\">");
  stack1 = depth0;
  stack2 = "date";
  stack3 = helpers._triageMustache;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "</th>\n                ");
  return buffer;}

function program7(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3, stack4, stack5;
  data.buffer.push("\n                <tr>\n                  <td class=\"td-left\">");
  stack1 = depth0;
  stack2 = "position";
  stack3 = helpers._triageMustache;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "</td>\n                  <td class=\"td-left\">\n                    <a ");
  stack1 = depth0;
  stack2 = "";
  stack3 = depth0;
  stack4 = "gotoParticipant";
  stack5 = helpers.action;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack3);
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack5.call(depth0, stack4, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">");
  stack1 = depth0;
  stack2 = "name";
  stack3 = helpers._triageMustache;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "</a>\n                  </td>\n                  \n                    <td>\n                      <span class=\"frequency-checkbox\"><i class=\"icon-check-empty\"></i></span>\n                    </td>\n                  \n                </tr>\n              ");
  return buffer;}

  data.buffer.push("<div class=\"container-fluid\">\n  <div class=\"row-fluid\">\n    <div class=\"span7\">\n           \n      <div class=\"row-fluid\">\n        <div class=\"span12\">\n          \n              <a class=\"btn pull-left\"><i class=\"icon-arrow-left\"></i></a>\n              <a class=\"btn pull-right\"><i class=\"icon-arrow-right\"></i></a>\n\n              <br><br>\n          <!-- Selecionar reunião:\n          ");
  stack1 = depth0;
  stack2 = "Ember.Select";
  stack3 = {};
  stack4 = "allMeetings";
  stack3['contentBinding'] = stack4;
  stack4 = "content.date";
  stack3['optionLabelPath'] = stack4;
  stack4 = "content.date";
  stack3['optionValuePath'] = stack4;
  stack4 = "lastSelectedMeeting";
  stack3['valueBinding'] = stack4;
  stack4 = helpers.view;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack4.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + " -->\n          \n          <!-- ");
  stack1 = depth0;
  stack2 = "salvo";
  stack3 = helpers['if'];
  tmp1 = self.program(1, program1, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.program(3, program3, data);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" -->\n          \n\n\n          <table class=\"table table-bordered\">\n            <thead>\n              <tr>\n                <th></th>\n                <th class=\"th-left\">Nome</th>\n                ");
  stack1 = depth0;
  stack2 = "dateMeetings";
  stack3 = helpers.each;
  tmp1 = self.program(5, program5, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n              </tr>\n            </thead>\n            \n            <tbody>\n              <tr>\n                <td colspan=\"8\">Participantes</td>\n              </tr>\n              ");
  stack1 = depth0;
  stack2 = "content";
  stack3 = helpers.each;
  tmp1 = self.program(7, program7, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            </tbody>\n          </table>\n\n\n      <p class=\"add-visitor\">\n        <a class=\"btn btn-block btn-large\">Adicionar Visitante</a>\n      </p>\n\n      </div><!--/.span12 -->\n    </div><!--/.row-fluid -->\n  </div><!--/span8 -->\n\n  <div class=\"span4 offset1\">\n  <div class=\"\" id=\"submetas\">\n    <div class=\"submeta-1\">\n      ");
  stack1 = depth0;
  stack2 = "subgoalMultiplicationDate";
  foundHelper = helpers.outlet;
  stack3 = foundHelper || depth0.outlet;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  if(typeof stack3 === functionType) { stack1 = stack3.call(depth0, stack2, tmp1); }
  else if(stack3=== undef) { stack1 = helperMissing.call(depth0, "outlet", stack2, tmp1); }
  else { stack1 = stack3; }
  data.buffer.push(escapeExpression(stack1) + "\n    </div>\n\n    <div class=\"submeta-2\">\n      ");
  stack1 = depth0;
  stack2 = "subgoalGodPresence";
  foundHelper = helpers.outlet;
  stack3 = foundHelper || depth0.outlet;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  if(typeof stack3 === functionType) { stack1 = stack3.call(depth0, stack2, tmp1); }
  else if(stack3=== undef) { stack1 = helperMissing.call(depth0, "outlet", stack2, tmp1); }
  else { stack1 = stack3; }
  data.buffer.push(escapeExpression(stack1) + "\n    </div>\n\n    <!-- SUBGOAL 3: Novo líder -->\n    <div class=\"submeta-3\">\n      ");
  stack1 = depth0;
  stack2 = "subgoalFutureLeader";
  foundHelper = helpers.outlet;
  stack3 = foundHelper || depth0.outlet;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  if(typeof stack3 === functionType) { stack1 = stack3.call(depth0, stack2, tmp1); }
  else if(stack3=== undef) { stack1 = helperMissing.call(depth0, "outlet", stack2, tmp1); }
  else { stack1 = stack3; }
  data.buffer.push(escapeExpression(stack1) + "\n    </div>\n\n    <div class=\"submeta-4\">\n      ");
  stack1 = depth0;
  stack2 = "subgoalNewParticipants";
  foundHelper = helpers.outlet;
  stack3 = foundHelper || depth0.outlet;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  if(typeof stack3 === functionType) { stack1 = stack3.call(depth0, stack2, tmp1); }
  else if(stack3=== undef) { stack1 = helperMissing.call(depth0, "outlet", stack2, tmp1); }
  else { stack1 = stack3; }
  data.buffer.push(escapeExpression(stack1) + "\n    </div>\n\n    <div class=\"submeta-5\">\n      ");
  stack1 = depth0;
  stack2 = "subgoalNewHost";
  foundHelper = helpers.outlet;
  stack3 = foundHelper || depth0.outlet;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  if(typeof stack3 === functionType) { stack1 = stack3.call(depth0, stack2, tmp1); }
  else if(stack3=== undef) { stack1 = helperMissing.call(depth0, "outlet", stack2, tmp1); }
  else { stack1 = stack3; }
  data.buffer.push(escapeExpression(stack1) + "\n    </div>\n  </div>\n\n  <hr class=\"hr-subgoal\">\n\n  <div class=\"suggestions\" ");
  stack1 = depth0;
  stack2 = "gotoNewSuggestion";
  stack3 = helpers.action;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">\n    <div class=\"icone\">\n      <i class=\"icon-comment\"></i>\n    </div>\n\n    <div class=\"texto\">\n       Sugestões?\n    </div>\n  </div>\n</div>\n  </div><!--/.row-fluid -->\n\n</div><!--/.container-fluid -->");
  return buffer;
});Ember.TEMPLATES["cell-participant-new"] = Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
helpers = helpers || Ember.Handlebars.helpers;
  var buffer = '', stack1, stack2, stack3, stack4, foundHelper, tmp1, self=this, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"window-overlay\">\n    <div class=\"window\">\n        <div class=\"window-wrapper\">\n            <div class=\"clearfix\">\n                <div class=\"window-header\">\n                    <div class=\"window-utils\">\n                        <a ");
  stack1 = depth0;
  stack2 = "gotoParticipants";
  stack3 = helpers.action;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">\n                            <i class=\"icon-remove\"></i>\n                        </a>\n                    </div>\n                </div>\n\n                <div class=\"window-main-col\">\n                    <div class=\"form-horizontal\">\n                      <div class=\"control-group\">\n                        <label class=\"control-label\" for=\"firstName\">Nome</label>\n                        <div class=\"controls\">\n                          ");
  stack1 = depth0;
  stack2 = "Ember.TextField";
  stack3 = {};
  stack4 = "input-xlarge";
  stack3['class'] = stack4;
  stack4 = "firstName";
  stack3['id'] = stack4;
  stack4 = "firstName";
  stack3['valueBinding'] = stack4;
  stack4 = helpers.view;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack4.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "\n                          \n                        </div>\n                      </div>\n\n                      <div class=\"control-group\">\n                        <label class=\"control-label\" for=\"lastName\">Sobrenome</label>\n                        <div class=\"controls\">\n                          ");
  stack1 = depth0;
  stack2 = "Ember.TextField";
  stack3 = {};
  stack4 = "input-xlarge";
  stack3['class'] = stack4;
  stack4 = "lastName";
  stack3['id'] = stack4;
  stack4 = "lastName";
  stack3['valueBinding'] = stack4;
  stack4 = helpers.view;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack4.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "\n                          \n                        </div>\n                      </div>\n\n                      <div class=\"control-group\">\n                        <label class=\"control-label\" for=\"nickname\">Como quer ser chamado</label>\n                        <div class=\"controls\">\n                          ");
  stack1 = depth0;
  stack2 = "Ember.TextField";
  stack3 = {};
  stack4 = "input-xlarge";
  stack3['class'] = stack4;
  stack4 = "nickname";
  stack3['id'] = stack4;
  stack4 = "nickname";
  stack3['valueBinding'] = stack4;
  stack4 = helpers.view;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack4.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "\n                        </div>\n                      </div>\n\n                      <div class=\"control-group\">\n                        <label class=\"control-label\" for=\"email\">Email</label>\n                        <div class=\"controls\">\n                          ");
  stack1 = depth0;
  stack2 = "Ember.TextField";
  stack3 = {};
  stack4 = "input-xlarge";
  stack3['class'] = stack4;
  stack4 = "email";
  stack3['id'] = stack4;
  stack4 = "email";
  stack3['valueBinding'] = stack4;
  stack4 = helpers.view;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack4.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "\n                        </div>\n                      </div>\n\n                      <div class=\"control-group\">\n                        <label class=\"control-label\" for=\"phone\">Telefone</label>\n                        <div class=\"controls\">\n                          ");
  stack1 = depth0;
  stack2 = "Ember.TextField";
  stack3 = {};
  stack4 = "input-xlarge";
  stack3['class'] = stack4;
  stack4 = "phone";
  stack3['id'] = stack4;
  stack4 = "phone";
  stack3['valueBinding'] = stack4;
  stack4 = helpers.view;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack4.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "\n                        </div>\n                      </div>\n\n                      <div class=\"control-group\">\n                        <label class=\"control-label\" for=\"participantSex\">Sexo</label>\n                        <div class=\"controls\">\n                          \n                          <div class=\"btn-group\" data-toggle=\"buttons-radio\">\n                            <button type=\"button\" data-sex=\"1\" ");
  stack1 = {};
  stack2 = "isMale:active :btn";
  stack1['class'] = stack2;
  stack2 = helpers.bindAttr;
  tmp1 = {};
  tmp1.hash = stack1;
  tmp1.contexts = [];
  tmp1.data = data;
  stack1 = stack2.call(depth0, tmp1);
  data.buffer.push(escapeExpression(stack1) + " ");
  stack1 = depth0;
  stack2 = "toggleSex";
  stack3 = {};
  stack4 = "controller";
  stack3['target'] = stack4;
  stack4 = helpers.action;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack4.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">Masculino</button>\n                            <button type=\"button\" data-sex=\"2\" ");
  stack1 = {};
  stack2 = "isFemale:active :btn";
  stack1['class'] = stack2;
  stack2 = helpers.bindAttr;
  tmp1 = {};
  tmp1.hash = stack1;
  tmp1.contexts = [];
  tmp1.data = data;
  stack1 = stack2.call(depth0, tmp1);
  data.buffer.push(escapeExpression(stack1) + " ");
  stack1 = depth0;
  stack2 = "toggleSex";
  stack3 = {};
  stack4 = "controller";
  stack3['target'] = stack4;
  stack4 = helpers.action;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack4.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">Feminino</button>\n                          </div>\n\n                        </div>\n                      </div>\n\n                      <div class=\"control-group\">\n                        <label class=\"control-label\" for=\"participantBaptism\">Batismo</label>\n                        <div class=\"controls\">\n                          \n                          <div class=\"btn-group\" data-toggle=\"buttons-radio\">\n                          <button type=\"button\" data-baptism=\"1\" ");
  stack1 = {};
  stack2 = "isBaptism1:active :btn";
  stack1['class'] = stack2;
  stack2 = helpers.bindAttr;
  tmp1 = {};
  tmp1.hash = stack1;
  tmp1.contexts = [];
  tmp1.data = data;
  stack1 = stack2.call(depth0, tmp1);
  data.buffer.push(escapeExpression(stack1) + " ");
  stack1 = depth0;
  stack2 = "toggleBaptism";
  stack3 = {};
  stack4 = "controller";
  stack3['target'] = stack4;
  stack4 = helpers.action;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack4.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">IBCBH</button>\n                          <button type=\"button\" data-baptism=\"2\" ");
  stack1 = {};
  stack2 = "isBaptism2:active :btn";
  stack1['class'] = stack2;
  stack2 = helpers.bindAttr;
  tmp1 = {};
  tmp1.hash = stack1;
  tmp1.contexts = [];
  tmp1.data = data;
  stack1 = stack2.call(depth0, tmp1);
  data.buffer.push(escapeExpression(stack1) + " ");
  stack1 = depth0;
  stack2 = "toggleBaptism";
  stack3 = {};
  stack4 = "controller";
  stack3['target'] = stack4;
  stack4 = helpers.action;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack4.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">Outra Igreja</button>\n                          <button type=\"button\" data-baptism=\"3\" ");
  stack1 = {};
  stack2 = "isBaptism3:active :btn";
  stack1['class'] = stack2;
  stack2 = helpers.bindAttr;
  tmp1 = {};
  tmp1.hash = stack1;
  tmp1.contexts = [];
  tmp1.data = data;
  stack1 = stack2.call(depth0, tmp1);
  data.buffer.push(escapeExpression(stack1) + " ");
  stack1 = depth0;
  stack2 = "toggleBaptism";
  stack3 = {};
  stack4 = "controller";
  stack3['target'] = stack4;
  stack4 = helpers.action;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack4.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">Não foi batizado</button>\n                        </div>\n\n                        </div>\n                      </div>\n\n                      <div class=\"control-group\">\n                        <label class=\"control-label\" for=\"participantPosition\">Posição</label>\n                        <div class=\"controls\">\n                          \n                          <div class=\"btn-group\" data-toggle=\"buttons-checkbox\">\n                          <button type=\"button\" ");
  stack1 = {};
  stack2 = "trainingLeader:active :btn";
  stack1['class'] = stack2;
  stack2 = helpers.bindAttr;
  tmp1 = {};
  tmp1.hash = stack1;
  tmp1.contexts = [];
  tmp1.data = data;
  stack1 = stack2.call(depth0, tmp1);
  data.buffer.push(escapeExpression(stack1) + " ");
  stack1 = depth0;
  stack2 = "toggleTrainingLeader";
  stack3 = {};
  stack4 = "controller";
  stack3['target'] = stack4;
  stack4 = helpers.action;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack4.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">Líder em Treinamento</button>\n                          <button type=\"button\" ");
  stack1 = {};
  stack2 = "host:active :btn";
  stack1['class'] = stack2;
  stack2 = helpers.bindAttr;
  tmp1 = {};
  tmp1.hash = stack1;
  tmp1.contexts = [];
  tmp1.data = data;
  stack1 = stack2.call(depth0, tmp1);
  data.buffer.push(escapeExpression(stack1) + " ");
  stack1 = depth0;
  stack2 = "toggleHost";
  stack3 = {};
  stack4 = "controller";
  stack3['target'] = stack4;
  stack4 = helpers.action;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack4.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">Anfitrião</button>\n                        </div>\n\n                        </div>\n                      </div>\n\n\n                      <div class=\"control-group\">\n                        <div class=\"controls\">\n                          <button class=\"btn btn-success\" ");
  stack1 = depth0;
  stack2 = "createParticipant";
  stack3 = helpers.action;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">Salvar</button>\n                          <button class=\"btn\" ");
  stack1 = depth0;
  stack2 = "clear";
  stack3 = {};
  stack4 = "controller";
  stack3['target'] = stack4;
  stack4 = helpers.action;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack4.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">Limpar</button>\n                        </div>\n                      </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");
  return buffer;
});Ember.TEMPLATES["cell-participant"] = Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
helpers = helpers || Ember.Handlebars.helpers;
  var buffer = '', stack1, stack2, stack3, foundHelper, tmp1, self=this, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"window-overlay\">\n    <div class=\"window\">\n        <div class=\"window-wrapper\">\n            <div class=\"clearfix\">\n                <div class=\"window-header\">\n                    <div class=\"window-utils\">\n                        <a ");
  stack1 = depth0;
  stack2 = "gotoParticipants";
  stack3 = helpers.action;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">\n                            <i class=\"icon-remove\"></i>\n                        </a>\n                    </div>\n                </div>\n\n                <div class=\"window-main-col\">\n                    <div class=\"form-horizontal\">\n                      <div class=\"control-group\">\n                        <label class=\"control-label\" for=\"participantName\">Nome</label>\n                        <div class=\"controls\">\n                          <input type=\"text\" class=\"input-xlarge\" id=\"participantName\">\n                          \n                        </div>\n                      </div>\n\n                      <div class=\"control-group\">\n                        <label class=\"control-label\" for=\"participantNickname\">Como quer ser chamado</label>\n                        <div class=\"controls\">\n                          <input type=\"text\" class=\"input-xlarge\" id=\"participantNickname\">\n                        </div>\n                      </div>\n\n                      <div class=\"control-group\">\n                        <label class=\"control-label\" for=\"participantEmail\">Email</label>\n                        <div class=\"controls\">\n                          <input type=\"text\" class=\"input-xlarge\" id=\"participantEmail\">\n                        </div>\n                      </div>\n\n                      <div class=\"control-group\">\n                        <label class=\"control-label\" for=\"participantPhone\">Telefone</label>\n                        <div class=\"controls\">\n                          <input type=\"text\" class=\"input-xlarge\" id=\"participantPhone\">\n                        </div>\n                      </div>\n\n                      <div class=\"control-group\">\n                        <label class=\"control-label\" for=\"participantSex\">Sexo</label>\n                        <div class=\"controls\">\n                          \n                          <div class=\"btn-group\" data-toggle=\"buttons-radio\">\n                          <button type=\"button\" class=\"btn\">Masculino</button>\n                          <button type=\"button\" class=\"btn\">Feminino</button>\n                        </div>\n\n                        </div>\n                      </div>\n\n                      <div class=\"control-group\">\n                        <label class=\"control-label\" for=\"participantBaptism\">Batismo</label>\n                        <div class=\"controls\">\n                          \n                          <div class=\"btn-group\" data-toggle=\"buttons-radio\">\n                          <button type=\"button\" class=\"btn\">IBCBH</button>\n                          <button type=\"button\" class=\"btn\">Outra Igreja</button>\n                          <button type=\"button\" class=\"btn\">Não foi batizado</button>\n                        </div>\n\n                        </div>\n                      </div>\n\n                      <div class=\"control-group\">\n                        <label class=\"control-label\" for=\"participantPosition\">Posição</label>\n                        <div class=\"controls\">\n                          \n                          <div class=\"btn-group\" data-toggle=\"buttons-checkbox\">\n                          <button type=\"button\" class=\"btn\">Líder em Treinamento</button>\n                          <button type=\"button\" class=\"btn\">Anfitrião</button>\n                        </div>\n\n                        </div>\n                      </div>\n\n\n                      <div class=\"control-group\">\n                        <div class=\"controls\">\n                          <button class=\"btn btn-success\">Salvar</button>\n                        </div>\n                      </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");
  return buffer;
});Ember.TEMPLATES["cell-participants"] = Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
helpers = helpers || Ember.Handlebars.helpers;
  var buffer = '', stack1, stack2, stack3, foundHelper, tmp1, self=this, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3, stack4, stack5;
  data.buffer.push("\n          <tr>\n              <td class=\"td-left\"><a ");
  stack1 = depth0;
  stack2 = "";
  stack3 = depth0;
  stack4 = "gotoParticipant";
  stack5 = helpers.action;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack3);
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack5.call(depth0, stack4, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">");
  stack1 = depth0;
  stack2 = "name";
  stack3 = helpers._triageMustache;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "</a></td>\n              <td>");
  stack1 = depth0;
  stack2 = "position";
  stack3 = helpers._triageMustache;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "</td>\n              <td>");
  stack1 = depth0;
  stack2 = "baptism";
  stack3 = helpers._triageMustache;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "</td>\n          </tr>\n          ");
  return buffer;}

  data.buffer.push("<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"span8 offset2\">\n      <a class=\"btn btn-block btn-large\" ");
  stack1 = depth0;
  stack2 = "gotoNewParticipant";
  stack3 = helpers.action;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">\n        Adicionar Participante\n      </a>\n    </div>\n  </div>\n  <hr class=\"space\">\n  <div class=\"row\">\n    <div class=\"span8 offset2\">\n      <table class=\"table table-striped table-bordered\">\n        <thead>\n          <tr>\n            <th class=\"th-left\">Nome</th>\n            <th>Função</th>\n            <th>Membresia</th>\n          </tr>\n        </thead>\n\n        <tbody>\n\n          ");
  stack1 = depth0;
  stack2 = "content";
  stack3 = helpers.each;
  tmp1 = self.program(1, program1, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>");
  return buffer;
});Ember.TEMPLATES["cell-profile"] = Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
helpers = helpers || Ember.Handlebars.helpers;
  var foundHelper, self=this;


  data.buffer.push("<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"span8 offset2\">\n            <img src=\"\" class=\"img-polaroid\">\n        </div>\n    </div>\n\n    <div class=\"row\">\n        <div class=\"span8 offset2\">\n            <table class=\"table table-bordered\">\n                <tr>\n                    <td>\n                        <strong>Líder</strong>\n                    </td>\n                    <td>\n                        Fabrício\n                    </td>\n                </tr>\n                <tr>\n                    <td>\n                        <strong>Gênero</strong>\n                    </td>\n                    <td>\n                        Masculina Par\n                    </td>\n                </tr>\n                <tr>\n                    <td>\n                        <strong>Faixa etária</strong>\n                    </td>\n                    <td>\n                        Masculina Par\n                    </td>\n                </tr>\n                <tr>\n                    <td>\n                        <strong>Bairro</strong>\n                    </td>\n                    <td>\n                        Masculina Par\n                    </td>\n                </tr>\n                <tr>\n                    <td>\n                        <strong>Discipulador</strong>\n                    </td>\n                    <td>\n                        Masculina Par\n                    </td>\n                </tr>\n                <tr>\n                    <td>\n                        <strong>Coordenador</strong>\n                    </td>\n                    <td>\n                        Masculina Par\n                    </td>\n                </tr>\n                <tr>\n                    <td>\n                        <strong>Rede</strong>\n                    </td>\n                    <td>\n                        Masculina Par\n                    </td>\n                </tr>\n                <tr>\n                    <td>\n                        <strong>Congregação</strong>\n                    </td>\n                    <td>\n                        Igreja Batista Central\n                    </td>\n                </tr>\n            </table>\n        </div>\n    </div>\n</div>");
});Ember.TEMPLATES["cell-register"] = Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
helpers = helpers || Ember.Handlebars.helpers;
  var foundHelper, self=this;


  data.buffer.push("cadastro");
});Ember.TEMPLATES["god-presence"] = Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
helpers = helpers || Ember.Handlebars.helpers;
  var buffer = '', foundHelper, self=this;


  return buffer;
});Ember.TEMPLATES["resources-dynamics"] = Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
helpers = helpers || Ember.Handlebars.helpers;
  var buffer = '', stack1, stack2, stack3, foundHelper, tmp1, self=this, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3;
  data.buffer.push("\n            <div class=\"dynamic\">\n                <div class=\"dynamic-name\">");
  stack1 = depth0;
  stack2 = "name";
  stack3 = helpers._triageMustache;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "</div>\n                <div class=\"dynamic-participants\">De ");
  stack1 = depth0;
  stack2 = "min_participants";
  stack3 = helpers._triageMustache;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + " a ");
  stack1 = depth0;
  stack2 = "max_participants";
  stack3 = helpers._triageMustache;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + " pessoas</div>\n                <div class=\"dynamic-stuff\"><strong>Material:</strong> ");
  stack1 = depth0;
  stack2 = "stuff";
  stack3 = helpers._triageMustache;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "</div>\n                <div class=\"dynamic-goal\"><strong>Objetivo:</strong> ");
  stack1 = depth0;
  stack2 = "goal";
  stack3 = helpers._triageMustache;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "</div>\n                <div class=\"dynamic-description\">Dinâmica</div>\n                <div class=\"dynamic-text\">");
  stack1 = depth0;
  stack2 = "text";
  stack3 = helpers._triageMustache;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "</div>\n            </div>\n            ");
  return buffer;}

  data.buffer.push("<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"span8 offset2\">\n            <h3>Dinâmicas</h3>\n\n            <!-- <div>\n                Dinâmica para ");
  stack1 = depth0;
  stack2 = "Ember.TextField";
  stack3 = helpers.view;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + " pessoas <a class=\"btn\">Procurar</a>\n            </div> -->\n            \n            ");
  stack1 = depth0;
  stack2 = "content";
  stack3 = helpers.each;
  tmp1 = self.program(1, program1, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            \n        </div>\n    </div>\n</div>");
  return buffer;
});Ember.TEMPLATES["resources-lessons"] = Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
helpers = helpers || Ember.Handlebars.helpers;
  var buffer = '', stack1, stack2, stack3, foundHelper, tmp1, self=this, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3;
  data.buffer.push("\n                    <li>\n                        <span class=\"resource-date\">DATA</span>\n                        <a class=\"resource-download\" ");
  stack1 = {};
  stack2 = "name";
  stack1['href'] = stack2;
  stack2 = helpers.bindAttr;
  tmp1 = {};
  tmp1.hash = stack1;
  tmp1.contexts = [];
  tmp1.data = data;
  stack1 = stack2.call(depth0, tmp1);
  data.buffer.push(escapeExpression(stack1) + "><i class=\"icon-download-alt\"></i></a>\n                        <a class=\"resource-link\" ");
  stack1 = {};
  stack2 = "name";
  stack1['href'] = stack2;
  stack2 = helpers.bindAttr;
  tmp1 = {};
  tmp1.hash = stack1;
  tmp1.contexts = [];
  tmp1.data = data;
  stack1 = stack2.call(depth0, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">");
  stack1 = depth0;
  stack2 = "name";
  stack3 = helpers._triageMustache;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "</a>\n                    </li>\n                ");
  return buffer;}

  data.buffer.push("<div class=\"container\">\n    <div class=\"row\">\n    <div class=\"span8 offset2\">\n      <a class=\"btn btn-block btn-large\" ");
  stack1 = depth0;
  stack2 = "addNewVisitor";
  stack3 = helpers.action;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">\n        Lição de Célula da Semana\n      </a>\n    </div>\n  </div>\n\n  <hr class=\"space\">\n    <div class=\"row\">\n        <div class=\"span8 offset2\">\n            <h3>Lições de Célula</h3>\n            <ul class=\"resource-list\">\n                ");
  stack1 = depth0;
  stack2 = "content";
  stack3 = helpers.each;
  tmp1 = self.program(1, program1, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            </ul>\n        </div>\n    </div>\n\n    <div class=\"row\">\n        <div class=\"span8 offset2\">\n            <h3>Séries de Lições</h3>\n            <ul>\n                \n            </ul>\n        </div>\n    </div>\n</div>");
  return buffer;
});Ember.TEMPLATES["resources-praise"] = Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
helpers = helpers || Ember.Handlebars.helpers;
  var buffer = '', stack1, stack2, stack3, foundHelper, tmp1, self=this, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3;
  data.buffer.push("\n                ");
  stack1 = depth0;
  stack2 = "name";
  stack3 = helpers._triageMustache;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "\n            ");
  return buffer;}

  data.buffer.push("<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"span8 offset2\">\n            ");
  stack1 = depth0;
  stack2 = "content";
  stack3 = helpers.each;
  tmp1 = self.program(1, program1, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </div>\n    </div>\n</div>");
  return buffer;
});Ember.TEMPLATES["resources-praises"] = Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
helpers = helpers || Ember.Handlebars.helpers;
  var buffer = '', stack1, stack2, stack3, foundHelper, tmp1, self=this, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3;
  data.buffer.push("\n                ");
  stack1 = depth0;
  stack2 = "name";
  stack3 = helpers._triageMustache;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "\n            ");
  return buffer;}

  data.buffer.push("<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"span8 offset2\">\n            <h3>Louvor</h3>\n\n            <a href=\"http://www.cifraclub.com.br/\">Cifra Club</a>\n            \n            <!-- ");
  stack1 = depth0;
  stack2 = "content";
  stack3 = helpers.each;
  tmp1 = self.program(1, program1, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" -->\n        </div>\n    </div>\n</div>");
  return buffer;
});Ember.TEMPLATES["settings-address"] = Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
helpers = helpers || Ember.Handlebars.helpers;
  var foundHelper, self=this;


  data.buffer.push("set address");
});Ember.TEMPLATES["settings-contact"] = Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
helpers = helpers || Ember.Handlebars.helpers;
  var foundHelper, self=this;


  data.buffer.push("set conatct");
});Ember.TEMPLATES["settings-password"] = Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
helpers = helpers || Ember.Handlebars.helpers;
  var foundHelper, self=this;


  data.buffer.push("set pass");
});Ember.TEMPLATES["settings-profile"] = Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
helpers = helpers || Ember.Handlebars.helpers;
  var foundHelper, self=this;


  data.buffer.push("set profile");
});Ember.TEMPLATES["settings"] = Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
helpers = helpers || Ember.Handlebars.helpers;
  var buffer = '', stack1, stack2, stack3, stack4, foundHelper, tmp1, self=this, escapeExpression=this.escapeExpression, functionType="function", helperMissing=helpers.helperMissing, undef=void 0;


  data.buffer.push("<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"span8 offset2\">\n            <div class=\"row\">\n                <div class=\"span2\">\n                    <ul class=\"nav nav-pills nav-stacked\">\n                        <li>\n                            <a ");
  stack1 = depth0;
  stack2 = "gotoSettingsProfile";
  stack3 = {};
  stack4 = "true";
  stack3['href'] = stack4;
  stack4 = helpers.action;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack4.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">Perfil</a>\n                        </li>\n                        <li>\n                            <a ");
  stack1 = depth0;
  stack2 = "gotoSettingsAddress";
  stack3 = {};
  stack4 = "true";
  stack3['href'] = stack4;
  stack4 = helpers.action;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack4.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">Endereço</a>\n                        </li>\n                        <li>\n                            <a ");
  stack1 = depth0;
  stack2 = "gotoSettingsContact";
  stack3 = {};
  stack4 = "true";
  stack3['href'] = stack4;
  stack4 = helpers.action;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack4.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">Contato</a>\n                        </li>\n                        <li>\n                            <a ");
  stack1 = depth0;
  stack2 = "gotoSettingsPassword";
  stack3 = {};
  stack4 = "true";
  stack3['href'] = stack4;
  stack4 = helpers.action;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack4.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">Senha</a>\n                        </li>\n                    </ul>\n                </div>\n                <div class=\"span6\">\n                    ");
  stack1 = depth0;
  stack2 = "container";
  foundHelper = helpers.outlet;
  stack3 = foundHelper || depth0.outlet;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  if(typeof stack3 === functionType) { stack1 = stack3.call(depth0, stack2, tmp1); }
  else if(stack3=== undef) { stack1 = helperMissing.call(depth0, "outlet", stack2, tmp1); }
  else { stack1 = stack3; }
  data.buffer.push(escapeExpression(stack1) + "\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");
  return buffer;
});Ember.TEMPLATES["subgoal-future-leader"] = Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
helpers = helpers || Ember.Handlebars.helpers;
  var buffer = '', stack1, stack2, stack3, foundHelper, tmp1, self=this, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3, stack4, stack5;
  data.buffer.push("\n        <div class=\"edit-field\">\n          <span class=\"text-medium\">");
  stack1 = depth0;
  stack2 = "name";
  stack3 = helpers._triageMustache;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "</span>\n\n          <span class=\"ft-requirement\" data-requirement=\"1\" ");
  stack1 = depth0;
  stack2 = "name";
  stack3 = depth0;
  stack4 = "futureLeaderRequirement";
  stack5 = helpers.action;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack3);
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack5.call(depth0, stack4, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">\n            ");
  stack1 = depth0;
  stack2 = "requirements.requirement1";
  stack3 = helpers['if'];
  tmp1 = self.program(2, program2, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.program(4, program4, data);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          </span>\n\n          <span class=\"ft-requirement\" data-requirement=\"2\" ");
  stack1 = depth0;
  stack2 = "name";
  stack3 = depth0;
  stack4 = "futureLeaderRequirement";
  stack5 = helpers.action;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack3);
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack5.call(depth0, stack4, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">\n            ");
  stack1 = depth0;
  stack2 = "requirements.requirement2";
  stack3 = helpers['if'];
  tmp1 = self.program(6, program6, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.program(8, program8, data);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          </span>\n\n          <span class=\"ft-requirement\" data-requirement=\"3\" ");
  stack1 = depth0;
  stack2 = "name";
  stack3 = depth0;
  stack4 = "futureLeaderRequirement";
  stack5 = helpers.action;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack3);
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack5.call(depth0, stack4, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">\n            ");
  stack1 = depth0;
  stack2 = "requirements.requirement3";
  stack3 = helpers['if'];
  tmp1 = self.program(10, program10, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.program(12, program12, data);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          </span>\n\n          <span class=\"ft-requirement\" data-requirement=\"4\" ");
  stack1 = depth0;
  stack2 = "name";
  stack3 = depth0;
  stack4 = "futureLeaderRequirement";
  stack5 = helpers.action;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack3);
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack5.call(depth0, stack4, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">\n            ");
  stack1 = depth0;
  stack2 = "requirements.requirement4";
  stack3 = helpers['if'];
  tmp1 = self.program(14, program14, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.program(16, program16, data);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          </span>\n\n          <span class=\"ft-requirement\" data-requirement=\"5\" ");
  stack1 = depth0;
  stack2 = "name";
  stack3 = depth0;
  stack4 = "futureLeaderRequirement";
  stack5 = helpers.action;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack3);
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack5.call(depth0, stack4, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">\n            ");
  stack1 = depth0;
  stack2 = "requirements.requirement5";
  stack3 = helpers['if'];
  tmp1 = self.program(18, program18, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.program(20, program20, data);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          </span>\n\n          <span class=\"ft-requirement\" data-requirement=\"6\" ");
  stack1 = depth0;
  stack2 = "name";
  stack3 = depth0;
  stack4 = "futureLeaderRequirement";
  stack5 = helpers.action;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack3);
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack5.call(depth0, stack4, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">\n            ");
  stack1 = depth0;
  stack2 = "requirements.requirement6";
  stack3 = helpers['if'];
  tmp1 = self.program(22, program22, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.program(24, program24, data);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          </span>\n\n          <span class=\"ft-requirement\" data-requirement=\"7\" ");
  stack1 = depth0;
  stack2 = "name";
  stack3 = depth0;
  stack4 = "futureLeaderRequirement";
  stack5 = helpers.action;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack3);
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack5.call(depth0, stack4, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">\n            ");
  stack1 = depth0;
  stack2 = "requirements.requirement7";
  stack3 = helpers['if'];
  tmp1 = self.program(26, program26, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.program(28, program28, data);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          </span>\n        </div>\n      ");
  return buffer;}
function program2(depth0,data) {
  
  
  data.buffer.push("\n              <i class=\"icon-star\"></i>\n            ");}

function program4(depth0,data) {
  
  
  data.buffer.push("\n              <i class=\"icon-star-empty\"></i>\n            ");}

function program6(depth0,data) {
  
  
  data.buffer.push("\n              <i class=\"icon-star\"></i>\n            ");}

function program8(depth0,data) {
  
  
  data.buffer.push("\n              <i class=\"icon-star-empty\"></i>\n            ");}

function program10(depth0,data) {
  
  
  data.buffer.push("\n              <i class=\"icon-star\"></i>\n            ");}

function program12(depth0,data) {
  
  
  data.buffer.push("\n              <i class=\"icon-star-empty\"></i>\n            ");}

function program14(depth0,data) {
  
  
  data.buffer.push("\n              <i class=\"icon-star\"></i>\n            ");}

function program16(depth0,data) {
  
  
  data.buffer.push("\n              <i class=\"icon-star-empty\"></i>\n            ");}

function program18(depth0,data) {
  
  
  data.buffer.push("\n              <i class=\"icon-star\"></i>\n            ");}

function program20(depth0,data) {
  
  
  data.buffer.push("\n              <i class=\"icon-star-empty\"></i>\n            ");}

function program22(depth0,data) {
  
  
  data.buffer.push("\n              <i class=\"icon-star\"></i>\n            ");}

function program24(depth0,data) {
  
  
  data.buffer.push("\n              <i class=\"icon-star-empty\"></i>\n            ");}

function program26(depth0,data) {
  
  
  data.buffer.push("\n              <i class=\"icon-star\"></i>\n            ");}

function program28(depth0,data) {
  
  
  data.buffer.push("\n              <i class=\"icon-star-empty\"></i>\n            ");}

  data.buffer.push("      <h3 class=\"subgoal-title\">Novo Líder</h3>\n\n      ");
  stack1 = depth0;
  stack2 = "futureLeader";
  stack3 = helpers.each;
  tmp1 = self.program(1, program1, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  return buffer;
});Ember.TEMPLATES["subgoal-god-presence"] = Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
helpers = helpers || Ember.Handlebars.helpers;
  var buffer = '', stack1, stack2, stack3, foundHelper, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression;


  data.buffer.push("<h3 class=\"subgoal-title\">Presença de Deus</h3>\n\n      ");
  stack1 = depth0;
  stack2 = "godPresence";
  foundHelper = helpers.outlet;
  stack3 = foundHelper || depth0.outlet;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  if(typeof stack3 === functionType) { stack1 = stack3.call(depth0, stack2, tmp1); }
  else if(stack3=== undef) { stack1 = helperMissing.call(depth0, "outlet", stack2, tmp1); }
  else { stack1 = stack3; }
  data.buffer.push(escapeExpression(stack1));
  return buffer;
});Ember.TEMPLATES["subgoal-multiplication-date"] = Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
helpers = helpers || Ember.Handlebars.helpers;
  var buffer = '', stack1, stack2, stack3, stack4, foundHelper, tmp1, self=this, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3;
  data.buffer.push("\n        Faltam <strong>");
  stack1 = depth0;
  stack2 = "remainingDays";
  stack3 = helpers._triageMustache;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "</strong> dias ou <strong>");
  stack1 = depth0;
  stack2 = "remainingWeeks";
  stack3 = helpers._triageMustache;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "</strong> semanas\n      ");
  return buffer;}

  data.buffer.push("<h3 class=\"subgoal-title\">Data de Multiplicação</h3>\n\n      <p ");
  stack1 = depth0;
  stack2 = "editSubgoal1";
  stack3 = helpers.action;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + " class=\"edit-field\">\n        ");
  stack1 = depth0;
  stack2 = "multiplicationDate";
  stack3 = helpers._triageMustache;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "\n      </p>\n\n      <div class=\"edit-subgoal-1\">\n\n      ");
  stack1 = depth0;
  stack2 = "Ember.TextField";
  stack3 = {};
  stack4 = "dd/mm/aaaa";
  stack3['placeholder'] = stack4;
  stack4 = "newMultiplicationDate";
  stack3['valueBinding'] = stack4;
  stack4 = helpers.view;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack4.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "\n\n      <a ");
  stack1 = depth0;
  stack2 = "saveSubgoal1";
  stack3 = helpers.action;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + " class=\"btn btn-success\">Salvar</a>\n      <a ");
  stack1 = depth0;
  stack2 = "closeSubgoal1";
  stack3 = helpers.action;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">\n        <i class=\"icon-remove style-icon-remove\"></i>\n      </a>\n      </div><!-- /.edit-subgoal-1 -->\n\n      ");
  stack1 = depth0;
  stack2 = "hasMultiplicationDate";
  stack3 = helpers['if'];
  tmp1 = self.program(1, program1, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  return buffer;
});Ember.TEMPLATES["subgoal-new-host"] = Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
helpers = helpers || Ember.Handlebars.helpers;
  var buffer = '', stack1, stack2, stack3, stack4, foundHelper, tmp1, self=this, escapeExpression=this.escapeExpression;


  data.buffer.push("      <h3 class=\"subgoal-title\">Novo Anfitrião</h3>\n\n      <p ");
  stack1 = depth0;
  stack2 = "editSubgoal5";
  stack3 = helpers.action;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + " class=\"edit-field\">\n              ");
  stack1 = depth0;
  stack2 = "newHost";
  stack3 = helpers._triageMustache;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "\n            </p>\n            <div class=\"edit-subgoal-5\">\n              ");
  stack1 = depth0;
  stack2 = "Ember.TextField";
  stack3 = {};
  stack4 = "newHostInput";
  stack3['valueBinding'] = stack4;
  stack4 = "Nome do futuro anfitrião";
  stack3['placeholder'] = stack4;
  stack4 = helpers.view;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack4.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "\n\n              <a ");
  stack1 = depth0;
  stack2 = "saveSubgoal5";
  stack3 = helpers.action;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + " class=\"btn btn-success\">Salvar</a>\n              <a ");
  stack1 = depth0;
  stack2 = "closeSubgoal5";
  stack3 = helpers.action;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">\n                <i class=\"icon-remove style-icon-remove\"></i>\n              </a>\n            </div><!-- /.edit-subgoal-5 -->");
  return buffer;
});Ember.TEMPLATES["subgoal-new-participants"] = Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
helpers = helpers || Ember.Handlebars.helpers;
  var foundHelper, self=this;


  data.buffer.push("      <h3 class=\"subgoal-title\">Novos Participantes</h3>\n\n      <div class=\"edit-field\">\n        <span class=\"\"><i class=\"icon-sign-blank\"></i></span>\n        <span class=\"\"><i class=\"icon-sign-blank\"></i></span>\n        <span class=\"\"><i class=\"icon-sign-blank\"></i></span>\n        <span class=\"\"><i class=\"icon-sign-blank\"></i></span>\n        <span class=\"\"><i class=\"icon-sign-blank\"></i></span>\n        <span class=\"\"><i class=\"icon-sign-blank\"></i></span>\n        <span class=\"\"><i class=\"icon-sign-blank\"></i></span>\n        <span class=\"\"><i class=\"icon-sign-blank\"></i></span>\n        <span class=\"\"><i class=\"icon-sign-blank\"></i></span>\n        <span class=\"\"><i class=\"icon-sign-blank\"></i></span>\n        <span class=\"\"><i class=\"icon-sign-blank\"></i></span>\n        <span class=\"\"><i class=\"icon-sign-blank\"></i></span>\n      </div>");
});Ember.TEMPLATES["suggestion-new"] = Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
helpers = helpers || Ember.Handlebars.helpers;
  var buffer = '', stack1, stack2, stack3, stack4, foundHelper, tmp1, self=this, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"window-overlay\">\n    <div class=\"window-suggestion\">\n        <div class=\"window-wrapper\">\n            <div class=\"clearfix\">\n                <div class=\"window-header\">\n                    <div class=\"window-utils\">\n                        <a ");
  stack1 = depth0;
  stack2 = "gotoSuggestions";
  stack3 = helpers.action;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">\n                            <i class=\"icon-remove\"></i>\n                        </a>\n                    </div>\n                </div>\n\n                <div class=\"window-main-col\">\n                    \n                  <div>\n                    ");
  stack1 = depth0;
  stack2 = "Ember.TextArea";
  stack3 = {};
  stack4 = "suggestion";
  stack3['valueBinding'] = stack4;
  stack4 = "suggestion-textarea";
  stack3['class'] = stack4;
  stack4 = helpers.view;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack4.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "\n                  </div>\n\n                  <div>\n                    <a ");
  stack1 = depth0;
  stack2 = "createSuggestion";
  stack3 = helpers.action;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + " class=\"btn suggestion-btn\">Enviar</a>\n                  </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");
  return buffer;
});Ember.TEMPLATES["suggestions"] = Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
helpers = helpers || Ember.Handlebars.helpers;
  var buffer = '', stack1, stack2, stack3, foundHelper, tmp1, self=this, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3;
  data.buffer.push("\n            <div class=\"suggestion-item\">\n                \n            <p class=\"suggestion-date\">Enviada em ");
  stack1 = depth0;
  stack2 = "date";
  stack3 = helpers._triageMustache;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "</p>\n            <p class=\"\">");
  stack1 = depth0;
  stack2 = "suggestion";
  stack3 = helpers._triageMustache;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "</p>\n                \n            </div>\n            ");
  return buffer;}

  data.buffer.push("<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"span8 offset2\">\n            <h3>Sugestões enviadas</h3>\n            \n            ");
  stack1 = depth0;
  stack2 = "content";
  stack3 = helpers.each;
  tmp1 = self.program(1, program1, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </div>\n    </div>\n</div>");
  return buffer;
});