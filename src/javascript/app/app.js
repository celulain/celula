var brush = function() {
    x.domain(brush.empty() ? x2.domain() : brush.extent());
    focus.select("path").attr("d", area);
    focus.select(".x.axis").call(xAxis);
}

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
    templateName: 'frequency'
});

// Subgoals View
App.SubgoalsView = Em.View.extend({
    templateName: 'subgoals'
});

// New Participant View
App.NewParticipantView = Em.View.extend({
    templateName: 'new-participant'
});

// Presença de Deus
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
            nome: 'Fabrício ggg',
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
            connectOutlets: function(router) {
                router.get('applicationController')
                    .connectOutlet('frequencia','frequencia');

                router.get('applicationController')
                    .connectOutlet('subgoals','subgoals', App.Subgoals.find());

                router.get('applicationController')
                    .connectOutlet('newParticipant','newParticipant');


                // Outlet gráfico de presença de Deus
                router.get('subgoalsController')
                    .connectOutlet('godPresence', 'godPresence');
            }
        })
    })
});

App.initialize();
