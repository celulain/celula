var brush = function() {
    x.domain(brush.empty() ? x2.domain() : brush.extent());
    focus.select("path").attr("d", area);
    focus.select(".x.axis").call(xAxis);
}

var App = Em.Application.create();

// BEGIN Participants Controller
App.ParticipantsController = Em.ArrayController.extend({
    content: []
});
// END Participants Controller
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
App.ApplicationController = Em.Controller.extend({
    content: null
});
App.FrequencyController = Em.ArrayController.extend({
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
App.NewParticipantController = Em.Controller.extend({
    content: null,
    name: null,
});
App.SettingsAddressController = Em.Controller.extend();
App.SettingsContactController = Em.Controller.extend();
App.SettingsPasswordController = Em.Controller.extend();
App.SettingsProfileController = Em.Controller.extend();
App.SettingsController = Em.Controller.extend();
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
App.SuggestionsController = Em.Controller.extend({

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
App.FrequencyView = Em.View.extend({
    templateName: 'frequency'
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
App.NewParticipantView = Em.View.extend({
    templateName: 'new-participant-window'
});
App.ResourcesDynamicsView = Em.View.extend({
    templateName: 'resources-dynamics'
});
App.ResourcesLessonsView = Em.View.extend({
    templateName: 'resources-lessons'
});
App.ResourcesPraiseView = Em.View.extend({
    templateName: 'resources-praise'
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
App.SubgoalsView = Em.View.extend({
    templateName: 'subgoals'
});
App.SuggestionsView = Em.View.extend({
    templateName: 'suggestions'
});
// Router
App.Router = Em.Router.extend({
    enableLogging: true,

    root: Em.Route.extend({

        gotoFrequency: Em.Route.transitionTo('cell.frequency'),
        gotoParticipants: Em.Route.transitionTo('cell.participants'),
        gotoRegister: Em.Route.transitionTo('cell.register'),
        gotoProfile: Em.Route.transitionTo('cell.profile'),
        gotoLessons: Em.Route.transitionTo('resources.lessons'),
        gotoPraise: Em.Route.transitionTo('resources.praise'),
        gotoDynamics: Em.Route.transitionTo('resources.dynamics'),

        gotoSettings: Em.Route.transitionTo('settings.index'),
        gotoSettingsProfile: Em.Route.transitionTo('settings.profile'),
        gotoSettingsAddress: Em.Route.transitionTo('settings.address'),
        gotoSettingsContact: Em.Route.transitionTo('settings.contact'),
        gotoSettingsPassword: Em.Route.transitionTo('settings.password'),

        openSuggestionsWindow: function(router, event) {
            router.get('applicationController')
                .connectOutlet('window', 'suggestions')
        },

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
            router.get('applicationController')
                .connectOutlet('window', 'newParticipant');


            console.log( "YEYE!");
            // $('.add-new-visitor-box').show();
            // $('.add-visitor').hide();
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

        // Cell state
        cell: Em.Route.extend({
            route: '/celula',

            index: Em.Route.extend({
                route: '/',
                redirectsTo: 'frequency'
            }),

            frequency: Em.Route.extend({
                route: '/frequencia',
                connectOutlets: function(router) {
                    router.get('applicationController')
                        .connectOutlet('container','frequency');

                    router.get('frequencyController')
                        .connectOutlet('subgoals','subgoals', App.Subgoals.find());

                    router.get('frequencyController')
                        .connectOutlet('newParticipant','newParticipant');

                    // Outlet gráfico de presença de Deus
                    router.get('subgoalsController')
                        .connectOutlet('godPresence', 'godPresence');
                }
            }),

            participants: Em.Route.extend({
                route: '/participantes',
                connectOutlets: function(router) {
                    router.get('applicationController')
                        .connectOutlet('container', 'cellParticipants');
                }
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
                router.get('applicationController')
                        .connectOutlet('container', 'resourcesLessons');
                }
            }),

            praise: Em.Route.extend({
                route: '/louvor',
                connectOutlets: function(router) {
                router.get('applicationController')
                        .connectOutlet('container', 'resourcesDynamics');
                }
            }),

            dynamics: Em.Route.extend({
                route: '/dinamica',
                connectOutlets: function(router) {
                router.get('applicationController')
                        .connectOutlet('container', 'resourcesPraise');
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
        })
    })
});

App.initialize();
Ember.TEMPLATES["application"] = Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
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
  data.buffer.push(escapeExpression(stack1) + ">Perfil</a></li>\n                        </ul>\n                    </li>\n                    <!--\n                    <li class=\"dropdown\">\n                        <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\"> Setor\n                            <b class=\"caret\"></b>\n                        </a>\n                        <ul class=\"dropdown-menu\">\n                            <li><a href=\"/setor/celulas\">Células</a></li>\n                            <li><a href=\"/setor/perfil\">Perfil</a></li>\n                        </ul>\n                    </li>\n\n                    <li class=\"dropdown\">\n                        <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\"> Área\n                            <b class=\"caret\"></b>\n                        </a>\n                        <ul class=\"dropdown-menu\">\n                            <li><a href=\"/area/setores\">Setores</a></li>\n                            <li><a href=\"/area/perfil\">Perfil</a></li>\n                        </ul>\n                    </li>\n                    <li class=\"dropdown\">\n                        <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\"> Rede\n                            <b class=\"caret\"></b>\n                        </a>\n                        <ul class=\"dropdown-menu\">\n                            <li><a href=\"/rede/areas\">Áreas</a></li>\n                            <li><a href=\"/rede/perfil\">Perfil</a></li>\n                        </ul>\n                    </li>\n                  -->\n                    <li class=\"dropdown\">\n                        <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\"> Recursos\n                            <b class=\"caret\"></b>\n                        </a>\n                        <ul class=\"dropdown-menu\">\n                            <!-- <li><a ");
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
  data.buffer.push(escapeExpression(stack1) + ">Dinâmicas</a></li> -->\n                            <li><a href=\"/recursos/licoes-de-celula\">Lições de Célula</a></li>\n                            <li><a href=\"/recursos/louvor\">Louvor</a></li>\n                            <li><a href=\"/recursos/dinamicas\">Dinâmicas</a></li>\n                        </ul>\n                    </li>\n                </ul>\n            </div><!--/.nav-collapse -->\n        </div><!--/.conatiner-fluid -->\n    </div>\n</div><!--/.navbar -->\n\n");
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
});Ember.TEMPLATES["cell-participants"] = Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
helpers = helpers || Ember.Handlebars.helpers;
  var buffer = '', stack1, stack2, stack3, foundHelper, tmp1, self=this, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"span8 offset2\">\n      <a class=\"btn btn-block btn-large\" ");
  stack1 = depth0;
  stack2 = "addNewVisitor";
  stack3 = helpers.action;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">\n        Adicionar Participante\n      </a>\n    </div>\n  </div>\n  <hr class=\"space\">\n  <div class=\"row\">\n    <div class=\"span8 offset2\">\n      <table class=\"table table-striped table-bordered\">\n        <thead>\n          <tr>\n            <th class=\"th-left\">Nome</th>\n            <th>Função</th>\n            <th>Membresia</th>\n          </tr>\n        </thead>\n\n        <tbody>\n          <tr>\n            <td class=\"td-left\"><a ");
  stack1 = depth0;
  stack2 = "editParticipant";
  stack3 = helpers.action;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">Fabrício</a></td>\n            <td>Lider</td>\n            <td>IBCBH</td>\n          </tr>\n          <tr>\n            <td class=\"td-left\"><a ");
  stack1 = depth0;
  stack2 = "editParticipant";
  stack3 = helpers.action;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">Fabrício</a></td>\n            <td>Anfitrião</td>\n            <td>Getsêmani</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>");
  return buffer;
});Ember.TEMPLATES["cell-profile"] = Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
helpers = helpers || Ember.Handlebars.helpers;
  var foundHelper, self=this;


  data.buffer.push("<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"span8 offset2\">\n            <img src=\"\" class=\"img-polaroid\">\n        </div>\n    </div>\n\n    <div class=\"row\">\n        <div class=\"span8 offset2\">\n            <table class=\"table table-bordered\">\n                <tr>\n                    <td>\n                        <strong>Líder</strong>\n                    </td>\n                    <td>\n                        Fabrício\n                    </td>\n                </tr>\n                <tr>\n                    <td>\n                        <strong>Gênero</strong>\n                    </td>\n                    <td>\n                        Masculina Par\n                    </td>\n                </tr>\n                <tr>\n                    <td>\n                        <strong>Faixa etária</strong>\n                    </td>\n                    <td>\n                        Masculina Par\n                    </td>\n                </tr>\n                <tr>\n                    <td>\n                        <strong>Bairro</strong>\n                    </td>\n                    <td>\n                        Masculina Par\n                    </td>\n                </tr>\n                <tr>\n                    <td>\n                        <strong>Discipulador</strong>\n                    </td>\n                    <td>\n                        Masculina Par\n                    </td>\n                </tr>\n                <tr>\n                    <td>\n                        <strong>Coordenador</strong>\n                    </td>\n                    <td>\n                        Masculina Par\n                    </td>\n                </tr>\n                <tr>\n                    <td>\n                        <strong>Rede</strong>\n                    </td>\n                    <td>\n                        Masculina Par\n                    </td>\n                </tr>\n                <tr>\n                    <td>\n                        <strong>Congregação</strong>\n                    </td>\n                    <td>\n                        Igreja Batista Central\n                    </td>\n                </tr>\n            </table>\n        </div>\n    </div>\n</div>");
});Ember.TEMPLATES["cell-register"] = Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
helpers = helpers || Ember.Handlebars.helpers;
  var foundHelper, self=this;


  data.buffer.push("cadastro");
});Ember.TEMPLATES["cell_application"] = Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
helpers = helpers || Ember.Handlebars.helpers;
  var buffer = '', stack1, stack2, stack3, foundHelper, tmp1, self=this, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"navbar navbar-inverse navbar-fixed-top\">\n    <div class=\"navbar-inner\">\n        <div class=\"container\">\n            <a class=\"btn btn-navbar\" data-toggle=\"collapse\" data-target=\".nav-collapse\">\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n            </a>\n            <a class=\"brand\" href=\"/app\">Nome da Igreja</a>\n            <div class=\"btn-group pull-right\">\n                <a class=\"btn btn-inverse dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">\n                    <i class=\"icon-user icon-white\"></i>\n                    <span class=\"caret\"></span>\n                </a>\n                <ul class=\"dropdown-menu\">\n                <li>\n                    <a ");
  stack1 = depth0;
  stack2 = "goSettings";
  stack3 = helpers.action;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">Configurações</a>\n                </li>\n                <li class=\"divider\"></li>\n                <li>\n                    <a href=\"/\">Sair</a>\n                </li>\n                </ul>\n            </div>\n\n            <div class=\"nav-collapse\">\n                <ul class=\"nav\">\n                    <li class=\"dropdown\">\n                        <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\"> Célula\n                            <b class=\"caret\"></b>\n                        </a>\n                        <ul class=\"dropdown-menu\">\n                            <li><a ");
  stack1 = depth0;
  stack2 = "goCelulaFrequencia";
  stack3 = helpers.action;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">Frequência</a></li>\n                            <li><a ");
  stack1 = depth0;
  stack2 = "goCelulaParticipantes";
  stack3 = helpers.action;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">Participantes</a></li>\n                            <li><a ");
  stack1 = depth0;
  stack2 = "goCelulaCadastro";
  stack3 = helpers.action;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">Cadastro</a></li>\n                            <li><a ");
  stack1 = depth0;
  stack2 = "goCelulaPerfil";
  stack3 = helpers.action;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">Perfil</a></li>\n                        </ul>\n                    </li>\n                    <li><a ");
  stack1 = depth0;
  stack2 = "goRecursos";
  stack3 = helpers.action;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">Recursos</a></li>\n\n                </ul>\n            </div><!--/.nav-collapse -->\n        </div><!--/.conatiner -->\n    </div>\n</div><!--/.navbar -->\n\n<div class=\"container\">\n    ");
  stack1 = depth0;
  stack2 = "outlet";
  stack3 = helpers._triageMustache;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "\n\n\n    <hr>\n    <footer>\n        <p>Copyright 2012 <a href=\"http://twitter.com/andrehigher\">André</a> & <a href=\"http://twitter.com/fabriciotav\">Fabrício</a></p>\n    </footer>\n</div><!--/.fluid-container-->");
  return buffer;
});Ember.TEMPLATES["cell_celula-cadastro"] = Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
helpers = helpers || Ember.Handlebars.helpers;
  var foundHelper, self=this;


  data.buffer.push("<div class=\"row-fluid\">\n    <form class=\"form-horizontal\" method=\"post\" name=\"registerCell\" action=\"/celula/cadastro\">\n    <input type=\"hidden\" id=\"cell_id\" name=\"cell_id\" value=\"<?=$this->cell_id?>\" />\n        <fieldset>\n            <legend>Reuniões</legend>\n            <div class=\"control-group\">\n                <label class=\"control-label\" for=\"input01\">Dia da semana</label>\n                <div class=\"controls\">\n                    <select class=\"span2\" name=\"\" id=\"\">\n                        <option value=\"1\">Segunda-feira</option>\n                        <option value=\"2\">Terça-feira</option>\n                        <option value=\"3\">Quarta-feira</option>\n                        <option value=\"4\">Quinta-feira</option>\n                        <option value=\"5\">Sexta-feira</option>\n                        <option value=\"6\">Sábado</option>\n                    </select>\n                </div><!--/.controls -->\n            </div><!--/.control-group -->\n            <div class=\"control-group\">\n                <label class=\"control-label\" for=\"input01\">Hora início</label>\n                <div class=\"controls\">\n                    <input type=\"text\" class=\"span1\" id=\"input01\" placeholder=\"hh:mm\" value=\"\">\n                </div><!--/.controls -->\n            </div><!--/.control-group -->\n        </fieldset>\n        <fieldset>\n            <legend>Endereço</legend>\n            <div class=\"control-group\">\n                <label class=\"control-label\" for=\"input01\">Endereço</label>\n                <div class=\"controls\">\n                    <input type=\"text\" class=\"input-xlarge\" id=\"address\" name=\"address\" value=\"<?=$this->address?>\">\n                </div><!--/.controls -->\n            </div><!--/.control-group -->\n            <div class=\"control-group\">\n                <label class=\"control-label\" for=\"input01\">Número</label>\n                <div class=\"controls\">\n                    <input type=\"text\" class=\"input-xlarge\" id=\"number\" name=\"number\" value=\"<?=$this->number?>\">\n                </div><!--/.controls -->\n            </div><!--/.control-group -->\n            <div class=\"control-group\">\n                <label class=\"control-label\" for=\"input01\">Complemento</label>\n                <div class=\"controls\">\n                    <input type=\"text\" class=\"input-xlarge\" id=\"apartament\" name=\"apartament\" value=\"<?=$this->apartament?>\">\n                </div><!--/.controls -->\n            </div><!--/.control-group -->\n            <div class=\"control-group\">\n                <label class=\"control-label\" for=\"input01\">Bairro</label>\n                <div class=\"controls\">\n                    <input type=\"text\" class=\"input-xlarge\" id=\"district\" name=\"district\" value=\"<?=$this->district?>\">\n                </div><!--/.controls -->\n            </div><!--/.control-group -->\n            <div class=\"control-group\">\n                <label class=\"control-label\" for=\"input01\">Município</label>\n                <div class=\"controls\">\n                    <select class=\"\" name=\"city\" id=\"city\">\n                        <option value=\"0\">Belo Horizonte</option>\n                        <option value=\"0\">Contagem</option>\n                        <option value=\"0\">Nova Lima</option>\n                        <option value=\"0\">Betim</option>\n                    </select>\n                </div><!--/.controls -->\n            </div><!--/.control-group -->\n            <div class=\"control-group\">\n                <label class=\"control-label\" for=\"input01\">CEP</label>\n                <div class=\"controls\">\n                    <input type=\"text\" class=\"span2\" id=\"zip_code\" name=\"zip_code\" placeholder=\"ex.: 30330-333\"  value=\"<?=$this->zip_code?>\">\n                </div><!--/.controls -->\n            </div><!--/.control-group -->\n        </fieldset>\n        <div class=\"form-actions\">\n            <button type=\"submit\" class=\"btn btn-primary\">Salvar alterações</button>\n            <button class=\"btn\">Cancelar</button>\n        </div>\n    </form>\n</div><!--/.row-fluid -->");
});Ember.TEMPLATES["cell_celula-frequencia"] = Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
helpers = helpers || Ember.Handlebars.helpers;
  var foundHelper, self=this;


  data.buffer.push("<div class=\"row-fluid\">\n    <div class=\"span8\">\n        <div class=\"row-fluid\">\n            <div class=\"span12\">\n                <div class=\"page-header\">\n                    <h1>Lançamento de frequência</h1>\n                </div>                    \n            </div>\n        </div><!--/.row-fluid -->\n            \n        <div class=\"row-fluid\">\n            <div class=\"span12\">\n                <ul class=\"nav nav-tabs\">\n                    <li class=\"active\">\n                        <a href=\"#frequencia\" data-toggle=\"tab\">Célula</a>\n                    </li>\n                    <!--  <li><a href=\"#frequencia-cultos\" data-toggle=\"tab\">Cultos</a></li>-->\n                </ul>\n\n                <div class=\"tab-content\">\n                    <div class=\"tab-pane active\" id=\"frequencia\">\n                        <div class=\"span12\">\n                            <table class=\"table table-bordered\">\n                                <thead>\n                                    <tr>\n                                        <th></th>\n                                        <th class=\"th-left\">Nome</th>\n                                        <th>17-11</th>\n                                        <th>24-11</th>\n                                        <th>01-12</th>\n                                        <th>08-12</th>\n                                        <th>15-12</th>\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                    <tr>\n                                        <td colspan=\"8\">Membros IBC</td>\n                                    </tr>\n                                                                        <tr>\n                                        <td>Participante</td>\n                                        <td class=\"td-left\">M?rio C?sar Gon?alves Moreira</td>\n                                        <td class=\"frequencia\">\n                                          <i class=\"icon-ok frequencia-presente\"></i>\n                                        </td>\n                                        <td class=\"frequencia\">\n                                          <i class=\"icon-ok frequencia-presente\"></i>\n                                        </td>\n                                        <td class=\"frequencia\">\n                                          <i class=\"icon-ok frequencia-presente\"></i>\n                                        </td>\n                                        <td class=\"frequencia\">\n                                          <i class=\"icon-ok frequencia-presente\"></i>\n                                        </td>\n                                        <td></td>\n                                    </tr>\n                                                                        <tr>\n                                        <td>LÃ­der</td>\n                                        <td class=\"td-left\">Fabr?cio Tavares de Oliveira</td>\n                                        <td class=\"frequencia\">\n                                          <i class=\"icon-ok frequencia-presente\"></i>\n                                        </td>\n                                        <td class=\"frequencia\">\n                                          <i class=\"icon-ok frequencia-presente\"></i>\n                                        </td>\n                                        <td class=\"frequencia\">\n                                          <i class=\"icon-ok frequencia-presente\"></i>\n                                        </td>\n                                        <td class=\"frequencia\">\n                                          <i class=\"icon-ok frequencia-presente\"></i>\n                                        </td>\n                                        <td></td>\n                                    </tr>\n                                                                    </tbody>\n                            </table>\n                        </div><!--/.span12 -->\n                    </div><!--/.tab-pane -->\n                    \n                    <div class=\"tab-pane\" id=\"frequencia-cultos\">\n                        <div class=\"span12\">\n                            <table class=\"table table-bordered\">\n                                <thead>\n                                    <tr>\n                                        <th></th>\n                                        <th class=\"th-left\">Nome</th>\n                                        <th>Mar 2012</th>\n                                        <th>Abr 2012</th>\n                                        <th>Mai 2012</th>\n                                        <th>Jun 2012</th>\n                                        <th>Jul 2012</th>\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                    <tr>\n                                      <td colspan=\"8\">Membros IBC</td>\n                                    </tr>\n                                    <tr>\n                                      <td>Líder</td>\n                                      <td class=\"td-left\">Luiz Carlos Menezes</td>\n                                      <td class=\"frequencia\">\n                                        <i class=\"icon-ok frequencia-presente\"></i>\n                                      </td>\n                                      <td class=\"frequencia\">\n                                        <i class=\"icon-ok frequencia-presente\"></i>\n                                      </td>\n                                      <td class=\"frequencia\">\n                                        <i class=\"icon-ok frequencia-presente\"></i>\n                                      </td>\n                                      <td class=\"frequencia\">\n                                        <i class=\"icon-remove frequencia-ausente\"></i>\n                                      </td>\n                                      <td class=\"frequencia\"></td>\n                                    </tr>\n                                    <tr>\n                                      <td></td>\n                                      <td class=\"td-left\">Rodrigo Ferreira</td>\n                                      <td class=\"frequencia\">\n                                        <i class=\"icon-ok frequencia-presente\"></i>\n                                      </td>\n                                      <td class=\"frequencia\">\n                                        <i class=\"icon-ok frequencia-presente\"></i>\n                                      </td>\n                                      <td class=\"frequencia\">\n                                        <i class=\"icon-ok frequencia-presente\"></i>\n                                      </td>\n                                      <td class=\"frequencia\">\n                                        <i class=\"icon-ok frequencia-presente\"></i>\n                                      </td>\n                                      <td class=\"frequencia\"></td>\n                                    </tr>\n                                    <tr>\n                                      <td>LT 1</td>\n                                      <td class=\"td-left\">Weliton Rodrigues</td>\n                                      <td class=\"frequencia\">\n                                        <i class=\"icon-remove frequencia-ausente\"></i>\n                                      </td>\n                                      <td class=\"frequencia\">\n                                        <i class=\"icon-ok frequencia-presente\"></i>\n                                      </td>\n                                      <td class=\"frequencia\">\n                                        <i class=\"icon-ok frequencia-presente\"></i>\n                                      </td>\n                                      <td class=\"frequencia\">\n                                        <i class=\"icon-remove frequencia-ausente\"></i>\n                                      </td>\n                                      <td class=\"frequencia\"></td>\n                                    </tr>\n                                  <tr>\n                                    <td colspan=\"8\">Batizados Não-Membros</td>\n                                  </tr>\n                                    <tr>\n                                      <td>LT 2</td>\n                                      <td class=\"td-left\">Allyson Martins</td>\n                                      <td class=\"frequencia\">\n                                        <i class=\"icon-ok frequencia-presente\"></i>\n                                      </td>\n                                      <td class=\"frequencia\">\n                                        <i class=\"icon-ok frequencia-presente\"></i>\n                                      </td>\n                                      <td class=\"frequencia\">\n                                        <i class=\"icon-ok frequencia-presente\"></i>\n                                      </td>\n                                      <td class=\"frequencia\">\n                                        <i class=\"icon-ok frequencia-presente\"></i>\n                                      </td>\n                                      <td class=\"frequencia\"></td>\n                                    </tr>\n                                    <tr>\n                                      <td></td>\n                                      <td class=\"td-left\">Breno Ferrari</td>\n                                      <td class=\"frequencia\">\n                                        <i class=\"icon-ok frequencia-presente\"></i>\n                                      </td>\n                                      <td class=\"frequencia\">\n                                        <i class=\"icon-remove frequencia-ausente\"></i>\n                                      </td>\n                                      <td class=\"frequencia\">\n                                        <i class=\"icon-ok frequencia-presente\"></i>\n                                      </td>\n                                      <td class=\"frequencia\">\n                                        <i class=\"icon-ok frequencia-presente\"></i>\n                                      </td>\n                                      <td class=\"frequencia\"></td>\n                                    </tr>\n                                    <tr>\n                                      <td>Anfitrião</td>\n                                      <td class=\"td-left\">Daniel Mazoni</td>\n                                      <td class=\"frequencia\">\n                                        <i class=\"icon-ok frequencia-presente\"></i>\n                                      </td>\n                                      <td class=\"frequencia\">\n                                        <i class=\"icon-ok frequencia-presente\"></i>\n                                      </td>\n                                      <td class=\"frequencia\">\n                                        <i class=\"icon-ok frequencia-presente\"></i>\n                                      </td>\n                                      <td class=\"frequencia\">\n                                        <i class=\"icon-ok frequencia-presente\"></i>\n                                      </td>\n                                      <td class=\"frequencia\"></td>\n                                    </tr>\n                                  <tr>\n                                    <td colspan=\"8\">Não Batizados</td>\n                                  </tr>\n                                    <tr>\n                                      <td></td>\n                                      <td class=\"td-left\">João Paulo Santos</td>\n                                      <td class=\"frequencia\">\n                                        <i class=\"icon-remove frequencia-ausente\"></i>\n                                      </td>\n                                      <td class=\"frequencia\">\n                                        <i class=\"icon-ok frequencia-presente\"></i>\n                                      </td>\n                                      <td class=\"frequencia\">\n                                        <i class=\"icon-ok frequencia-presente\"></i>\n                                      </td>\n                                      <td class=\"frequencia\">\n                                        <i class=\"icon-ok frequencia-presente\"></i>\n                                      </td>\n                                      <td class=\"frequencia\"></td>\n                                    </tr>\n                                  <tr>\n                                    <td colspan=\"8\">Visitantes</td>\n                                  </tr>\n                                    <tr>\n                                      <td></td>\n                                      <td class=\"td-left\">Leonardo Matos</td>\n                                      <td class=\"frequencia\">\n                                        <i class=\"icon-remove frequencia-ausente\"></i>\n                                      </td>\n                                      <td class=\"frequencia\">\n                                        <i class=\"icon-ok frequencia-presente\"></i>\n                                      </td>\n                                      <td class=\"frequencia\">\n                                        <i class=\"icon-ok frequencia-presente\"></i>\n                                      </td>\n                                      <td class=\"frequencia\">\n                                        <i class=\"icon-remove frequencia-ausente\"></i>\n                                      </td>\n                                      <td class=\"frequencia\"></td>\n                                    </tr>\n                                    <tr>\n                                      <td></td>\n                                      <td class=\"td-left\">Paulo Eduardo Melo</td>\n                                      <td class=\"frequencia\">\n                                        <i class=\"icon-remove frequencia-ausente\"></i>\n                                      </td>\n                                      <td class=\"frequencia\">\n                                        <i class=\"icon-remove frequencia-ausente\"></i>\n                                      </td>\n                                      <td class=\"frequencia\">\n                                        <i class=\"icon-remove frequencia-ausente\"></i>\n                                      </td>\n                                      <td class=\"frequencia\">\n                                        <i class=\"icon-ok frequencia-presente\"></i>\n                                      </td>\n                                      <td class=\"frequencia\"></td>\n                                    </tr>\n                                    <tr>\n                                      <td></td>\n                                      <td class=\"td-left\">Renato Vargas</td>\n                                      <td class=\"frequencia\">\n                                        <i class=\"icon-ok frequencia-presente\"></i>\n                                      </td>\n                                      <td class=\"frequencia\">\n                                        <i class=\"icon-remove frequencia-ausente\"></i>\n                                      </td>\n                                      <td class=\"frequencia\">\n                                        <i class=\"icon-ok frequencia-presente\"></i>\n                                      </td>\n                                      <td class=\"frequencia\">\n                                        <i class=\"icon-ok frequencia-presente\"></i>\n                                      </td>\n                                      <td class=\"frequencia\"></td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                        </div><!--/.span12 -->\n                    </div><!--/.tab-pane -->\n                </div><!--/.tab-content -->\n            </div><!--/.span12 -->\n        </div><!--/.row-fluid -->\n    </div><!--/span8 -->\n    \n    <div class=\"span4\">\n        <div class=\"page-header\">\n            <h1>5 Submetas</h1>\n        </div>\n\n        <div class=\"accordion\" id=\"submetas\">\n            <div class=\"accordion-group\">\n                <div class=\"accordion-heading\">\n                    <a href=\"#submeta1\" class=\"accordion-toggle submetas-info\" data-toggle=\"collapse\" data-parent=\"#submetas\">\n                        Data de multiplicação\n                    </a>\n                </div>\n                <div id=\"submeta1\" class=\"accordion-body collapse\">\n                    <div class=\"accordion-inner\">\n                        <div class=\"row-fluid\">\n                            <div class=\"span12\">\n                                Faltam <strong>142</strong> dias\n                            </div>\n                        </div>\n                        \n                        <div class=\"row-fluid\">\n                            <div class=\"span12\">\n                                <form action=\"\">\n                                    <div class=\"input-append\">\n                                        <span class=\"input-small uneditable-input\">\n                                            24-12-2012\n                                        </span><button class=\"btn\"><i class=\"icon-pencil\"></i></button>\n                                    </div>\n                                    \n                                </form>\n                            </div>\n                        </div>\n\n                        \n                    </div>\n                </div>\n            </div><!--/.accordion-group -->\n            <div class=\"accordion-group\">\n                <div class=\"accordion-heading\">\n                    <a href=\"#submeta2\" class=\"accordion-toggle submetas-info\" data-toggle=\"collapse\" data-parent=\"#submetas\">\n                        Presença de Deus\n                    </a>\n                </div>\n                <div id=\"submeta2\" class=\"accordion-body collapse\">\n                    <div class=\"accordion-inner\">\n                        <input class=\"span12\" type=\"range\">\n                    </div>\n                </div>\n            </div><!--/.accordion-group -->\n            <div class=\"accordion-group\">\n                <div class=\"accordion-heading\">\n                    <a href=\"#submeta3\" class=\"accordion-toggle submetas-info\" data-toggle=\"collapse\" data-parent=\"#submetas\">\n                        Novo Líder\n                    </a>\n                </div>\n                <div id=\"submeta3\" class=\"accordion-body collapse\">\n                    <div class=\"accordion-inner\">\n                        <div class=\"row-fluid\">\n                            <div class=\"span8\">\n                                <p>Weliton Rodrigues</p>\n                            </div>\n                            <div class=\"span4\">\n                                <span class=\"avaliacao-star\">\n                                    <a href=\"\">\n                                        <i class=\"icon-star\"></i>\n                                    </a>\n                                    <a href=\"\">\n                                        <i class=\"icon-star\"></i>\n                                    </a>\n                                    <a href=\"\">\n                                        <i class=\"icon-star\"></i>\n                                    </a>\n                                    <a href=\"\">\n                                        <i class=\"icon-star\"></i>\n                                    </a>\n                                    <a href=\"\">\n                                        <i class=\"icon-star-empty\"></i>\n                                    </a>\n                                </span>\n                            </div>\n                        </div>\n                        <div class=\"row-fluid\">\n                            <div class=\"span8\">\n                                <p>Allyson Martins</p>\n                            </div>\n                            <div class=\"span4\">\n                                <span class=\"avaliacao-star\">\n                                    <a href=\"\">\n                                        <i class=\"icon-star\"></i>\n                                    </a>\n                                    <a href=\"\">\n                                        <i class=\"icon-star\"></i>\n                                    </a>\n                                    <a href=\"\">\n                                        <i class=\"icon-star-empty\"></i>\n                                    </a>\n                                    <a href=\"\">\n                                        <i class=\"icon-star-empty\"></i>\n                                    </a>\n                                    <a href=\"\">\n                                        <i class=\"icon-star-empty\"></i>\n                                    </a>\n                                </span>\n                            </div>\n                        </div>\n                        \n                    </div>\n                </div>\n            </div><!--/.accordion-group -->\n            <div class=\"accordion-group\">\n                <div class=\"accordion-heading\">\n                    <a href=\"#submeta4\" class=\"accordion-toggle submetas-info\" data-toggle=\"collapse\" data-parent=\"#submetas\">\n                        Novos Frequentadores\n                    </a>\n                </div>\n                <div id=\"submeta4\" class=\"accordion-body collapse\">\n                    <div class=\"accordion-inner\">\n                        <div class=\"row-fluid\">\n                            <div class=\"span4\">\n                                <div class=\"row-fluid\">\n                                    <div class=\"span12\">\n                                        Atual\n                                    </div>\n                                </div>\n                                <div class=\"row-fluid\">\n                                    <div class=\"span12\">\n                                        <strong>7</strong>\n                                    </div>\n                                </div>\n                                \n                            </div><!--/.span4 -->\n                            <div class=\"span4\">\n                                <div class=\"row-fluid\">\n                                    <div class=\"span12\">\n                                        Alvo\n                                    </div>\n                                </div>\n                                <div class=\"row-fluid\">\n                                    <div class=\"span12\">\n                                        <strong>12</strong>\n                                    </div>\n                                </div>\n                                \n                            </div><!--/.span4 -->\n                            <div class=\"span4\">\n                                <div class=\"row-fluid\">\n                                    <div class=\"span12\">\n                                        Faltam\n                                    </div>\n                                </div>\n                                <div class=\"row-fluid\">\n                                    <div class=\"span12\">\n                                        <strong>5</strong>\n                                    </div>\n                                </div>\n                                \n                            </div><!--/.span4 -->\n\n                        </div>\n\n                    </div>\n                </div>\n            </div><!--/.accordion-group -->\n            <div class=\"accordion-group\">\n                <div class=\"accordion-heading\">\n                    <a href=\"#submeta5\" class=\"accordion-toggle submetas-info\" data-toggle=\"collapse\" data-parent=\"#submetas\">\n                        Novo Anfitrião\n                    </a>\n                </div>\n                <div id=\"submeta5\" class=\"accordion-body collapse\">\n                    <div class=\"accordion-inner\">\n                        <div class=\"row-fluid\">\n                            <form action=\"\">\n                                <div class=\"input-append\">\n                                    <span class=\"input-large uneditable-input\">\n                                        João Paulo Santos\n                                    </span><button class=\"btn\"><i class=\"icon-pencil\"></i></button>\n                                </div>\n                                \n                            </form>\n                        </div>\n                        \n                    </div>\n                </div>\n            </div><!--/.accordion-group -->\n        </div><!--/.accordion -->\n    </div><!--/span-->\n</div><!--/.row-fluid -->");
});Ember.TEMPLATES["cell_celula-participantes"] = Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
helpers = helpers || Ember.Handlebars.helpers;
  var foundHelper, self=this;


  data.buffer.push("<div class=\"row-fluid\">\n    <div class=\"span12\">\n        <div class=\"page-header\">\n            <h1>Participantes</h1>\n        </div>\n    </div>\n</div><!--/.row-fluid -->\n<div class=\"row-fluid\">\n    <div class=\"span12\">\n        <a class=\"btn btn-primary\" href=\"#add_participante\" data-toggle=\"modal\">\n            <i class=\"icon-plus icon-white\"></i> Participante\n        </a>\n        <hr />\n    </div>\n</div><!--/.row-fluid -->\n<div class=\"row-fluid\">\n    <div class=\"span9\">\n        <table class=\"table table-striped table-bordered\">\n            <thead>\n                <tr>\n                    <th class=\"th-left\">Nome</th>\n                    <th>Função</th>\n                    <th>Categoria</th>\n                    <th>Presença</th>\n                </tr>\n            </thead>\n            <tbody>\n                                <tr>\n                    <td class=\"td-left\">\n                        <a href=\"#participante1\" data-toggle=\"modal\">\n                            M?rio C?sar Gon?alves Moreira                        </a>\n                    </td>\n                    <td>Participante</td>\n                    <td>Membro IBC</td>\n                    <td>0</td>\n                </tr>\n                                <tr>\n                    <td class=\"td-left\">\n                        <a href=\"#participante1\" data-toggle=\"modal\">\n                            Fabr?cio Tavares de Oliveira                        </a>\n                    </td>\n                    <td>LÃ­der</td>\n                    <td>Membro IBC</td>\n                    <td>0</td>\n                </tr>\n                            </tbody>\n        </table>\n    </div>\n    \n</div><!--/.row-fluid -->\n\n<!-- MODAL ADICIONAR PARTICIPANTE -->\n<div class=\"modal hide\" id=\"add_participante\">\n    <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">×</button>\n        <h3>Adicionar Participante</h3>\n    </div>\n    <div class=\"modal-body\">\n        <form class=\"form-horizontal\" action=\"/celula/membros\" method=\"post\" name=\"addMember\">\n        <input type=\"hidden\" id=\"cell_id\" name=\"cell_id\" value=\"625\" />\n            <div class=\"control-group\">\n                <label class=\"control-label\" for=\"input01\">Nome</label>\n                <div class=\"controls\">\n                    <input type=\"text\" class=\"input-large typeahead\" id=\"input01\" name=\"new_name\" placeholder=\"nome completo\" data-provide=\"typeahead\">\n                </div><!--/.controls -->\n            </div><!--/.control-group -->\n                        <div class=\"control-group\">\n                            <label class=\"control-label\" for=\"input01\">Apelido</label>\n                            <div class=\"controls\">\n                                <input type=\"text\" class=\"input-large\" id=\"input01\" name=\"new_nick\" placeholder=\"como quer ser chamado\">\n                            </div><!--/.controls -->\n                        </div><!--/.control-group -->\n                        <div class=\"control-group\">\n                            <label class=\"control-label\" for=\"input01\">Sexo</label>\n                            <div class=\"controls\">\n                                <label for=\"male\" class=\"radio\">\n                                    <input type=\"radio\" value=\"1\" name=\"new_sex\" id=\"male\">\n                                    Masculino\n                                </label>\n                                <label for=\"female\" class=\"radio\">\n                                    <input type=\"radio\" value=\"2\" name=\"new_sex\" id=\"female\">\n                                    Feminino\n                                </label>\n                            </div><!--/.controls -->\n                        </div><!--/.control-group -->\n                        <div class=\"control-group\">\n                            <label class=\"control-label\" for=\"input01\">Data de nascimento</label>\n                            <div class=\"controls\">\n                                <input type=\"text\" class=\"input-large\" id=\"input01\" name=\"new_birthday\" placeholder=\"dd/mm/aaaa (não obrigatório)\">\n                            </div><!--/.controls -->\n                        </div><!--/.control-group -->\n                        <div class=\"control-group\">\n                            <label class=\"control-label\" for=\"input01\">Batizado</label>\n                            <div class=\"controls\">\n                                <label for=\"baptized_ibc\" class=\"radio\">\n                                    <input type=\"radio\" value=\"1\" name=\"baptized\" id=\"baptized_ibc\">\n                                    Na IBC\n                                </label>\n                                <label for=\"baptized_other\" class=\"radio\">\n                                    <input type=\"radio\"  value=\"2\" name=\"baptized\" id=\"baptized_other\">\n                                    Em outra igreja\n                                </label>\n                                <label for=\"baptized_no\" class=\"radio\">\n                                    <input type=\"radio\"  value=\"3\" name=\"baptized\" id=\"baptized_no\">\n                                    Não\n                                </label>\n                            </div><!--/.controls -->\n                        </div><!--/.control-group -->\n                         <div class=\"control-group\">\n                            <label class=\"control-label\" for=\"input01\">Função</label>\n                            <div class=\"controls\">\n                                <label for=\"baptized_ibc\" class=\"radio\">\n                                    <input type=\"radio\" value=\"4\" name=\"role\" id=\"role\">\n                                    Líder em Treinamento\n                                </label>\n                                <label for=\"baptized_other\" class=\"radio\">\n                                    <input type=\"radio\" value=\"2\" name=\"role\" id=\"role\">\n                                    Participante\n                                </label>\n                                <label for=\"baptized_no\" class=\"radio\">\n                                    <input type=\"radio\"  value=\"5\"  name=\"role\" id=\"role\">\n                                    Visitante\n                                </label>\n                                <label for=\"baptized_no\" class=\"radio\">\n                                    <input type=\"radio\"  value=\"3\"  name=\"role\" id=\"role\">\n                                    Anfitrião\n                                </label>\n                            </div><!--/.controls -->\n                        </div><!--/.control-group -->\n    </div>\n    <div class=\"modal-footer\">\n        <a href=\"#\" class=\"btn\" data-dismiss=\"modal\">Cancelar</a>\n        <a href=\"#\" class=\"btn btn-primary\" onclick=\"document.addMember.submit();\">Salvar</a>\n    </div>\n        </form>\n</div>\n\n<!-- MODAIS PARTICIPANTES-->\n\n<div class=\"modal hide\" id=\"participante1\">\n  <div class=\"modal-header\">\n    <button type=\"button\" class=\"close\" data-dismiss=\"modal\">×</button>\n    <h3>Luiz Carlos Menezes</h3>\n  </div>\n  <div class=\"modal-body\">\n    <p>Dados do participante</p>\n  </div>\n  <div class=\"modal-footer\">\n    <a href=\"#\" class=\"btn\" data-dismiss=\"modal\">Cancelar</a>\n    <a href=\"#\" class=\"btn btn-primary\">Salvar alterações</a>\n  </div>\n</div>\n\n<div class=\"modal hide\" id=\"participante2\">\n  <div class=\"modal-header\">\n    <button type=\"button\" class=\"close\" data-dismiss=\"modal\">×</button>\n    <h3>Nome</h3>\n  </div>\n  <div class=\"modal-body\">\n    <p>Dados do participante</p>\n  </div>\n  <div class=\"modal-footer\">\n    <a href=\"#\" class=\"btn\" data-dismiss=\"modal\">Cancelar</a>\n    <a href=\"#\" class=\"btn btn-primary\">Salvar alterações</a>\n  </div>\n</div>\n\n<div class=\"modal hide\" id=\"participante3\">\n  <div class=\"modal-header\">\n    <button type=\"button\" class=\"close\" data-dismiss=\"modal\">×</button>\n    <h3>Nome</h3>\n  </div>\n  <div class=\"modal-body\">\n    <p>Dados do participante</p>\n  </div>\n  <div class=\"modal-footer\">\n    <a href=\"#\" class=\"btn\" data-dismiss=\"modal\">Cancelar</a>\n    <a href=\"#\" class=\"btn btn-primary\">Salvar alterações</a>\n  </div>\n</div>\n\n<div class=\"modal hide\" id=\"participante4\">\n  <div class=\"modal-header\">\n    <button type=\"button\" class=\"close\" data-dismiss=\"modal\">×</button>\n    <h3>Nome</h3>\n  </div>\n  <div class=\"modal-body\">\n    <p>Dados do participante</p>\n  </div>\n  <div class=\"modal-footer\">\n    <a href=\"#\" class=\"btn\" data-dismiss=\"modal\">Cancelar</a>\n    <a href=\"#\" class=\"btn btn-primary\">Salvar alterações</a>\n  </div>\n</div>\n\n<div class=\"modal hide\" id=\"participante5\">\n  <div class=\"modal-header\">\n    <button type=\"button\" class=\"close\" data-dismiss=\"modal\">×</button>\n    <h3>Nome</h3>\n  </div>\n  <div class=\"modal-body\">\n    <p>Dados do participante</p>\n  </div>\n  <div class=\"modal-footer\">\n    <a href=\"#\" class=\"btn\" data-dismiss=\"modal\">Cancelar</a>\n    <a href=\"#\" class=\"btn btn-primary\">Salvar alterações</a>\n  </div>\n</div>\n\n<div class=\"modal hide\" id=\"participante6\">\n  <div class=\"modal-header\">\n    <button type=\"button\" class=\"close\" data-dismiss=\"modal\">×</button>\n    <h3>Nome</h3>\n  </div>\n  <div class=\"modal-body\">\n    <p>Dados do participante</p>\n  </div>\n  <div class=\"modal-footer\">\n    <a href=\"#\" class=\"btn\" data-dismiss=\"modal\">Cancelar</a>\n    <a href=\"#\" class=\"btn btn-primary\">Salvar alterações</a>\n  </div>\n</div>\n\n<div class=\"modal hide\" id=\"participante7\">\n  <div class=\"modal-header\">\n    <button type=\"button\" class=\"close\" data-dismiss=\"modal\">×</button>\n    <h3>Nome</h3>\n  </div>\n  <div class=\"modal-body\">\n    <p>Dados do participante</p>\n  </div>\n  <div class=\"modal-footer\">\n    <a href=\"#\" class=\"btn\" data-dismiss=\"modal\">Cancelar</a>\n    <a href=\"#\" class=\"btn btn-primary\">Salvar alterações</a>\n  </div>\n</div>\n\n<div class=\"modal hide\" id=\"participante8\">\n  <div class=\"modal-header\">\n    <button type=\"button\" class=\"close\" data-dismiss=\"modal\">×</button>\n    <h3>Nome</h3>\n  </div>\n  <div class=\"modal-body\">\n    <p>Dados do participante</p>\n  </div>\n  <div class=\"modal-footer\">\n    <a href=\"#\" class=\"btn\" data-dismiss=\"modal\">Cancelar</a>\n    <a href=\"#\" class=\"btn btn-primary\">Salvar alterações</a>\n  </div>\n</div>\n\n<div class=\"modal hide\" id=\"participante9\">\n  <div class=\"modal-header\">\n    <button type=\"button\" class=\"close\" data-dismiss=\"modal\">×</button>\n    <h3>Nome</h3>\n  </div>\n  <div class=\"modal-body\">\n    <p>Dados do participante</p>\n  </div>\n  <div class=\"modal-footer\">\n    <a href=\"#\" class=\"btn\" data-dismiss=\"modal\">Cancelar</a>\n    <a href=\"#\" class=\"btn btn-primary\">Salvar alterações</a>\n  </div>\n</div>\n\n<div class=\"modal hide\" id=\"participante10\">\n  <div class=\"modal-header\">\n    <button type=\"button\" class=\"close\" data-dismiss=\"modal\">×</button>\n    <h3>Renato Vargas</h3>\n  </div>\n  <div class=\"modal-body\">\n    <p>Dados do participante</p>\n  </div>\n  <div class=\"modal-footer\">\n    <a href=\"#\" class=\"btn\" data-dismiss=\"modal\">Cancelar</a>\n    <a href=\"#\" class=\"btn btn-primary\">Salvar alterações</a>\n  </div>\n</div>");
});Ember.TEMPLATES["cell_celula-perfil"] = Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
helpers = helpers || Ember.Handlebars.helpers;
  var foundHelper, self=this;


  data.buffer.push("<div class=\"row-fluid\">\n    <div class=\"span12\">\n        <div class=\"form-horizontal\">\n            <div class=\"control-group\">\n                <div class=\"controls\">\n                    <div class=\"span2\">\n                        <div class=\"thumbnail\">\n                            <img src=\"http://placehold.it/140x140\" alt=\"\">\n                        </div>\n                    </div>\n                </div><!--/.controls -->\n            </div><!--/.control-group -->\n            <div class=\"control-group\">\n                <label class=\"control-label\" for=\"input01\">Líder</label>\n                <div class=\"controls\">\n                    <span class=\"input-xlarge uneditable-input\">\n                        Luiz Carlos Menezes\n                    </span>\n                </div><!--/.controls -->\n            </div><!--/.control-group -->\n            <div class=\"control-group\">\n                <label class=\"control-label\" for=\"input01\">Gênero</label>\n                <div class=\"controls\">\n                    <span class=\"input-xlarge uneditable-input\">\n                        Masculina Par\n                    </span>\n                </div><!--/.controls -->\n            </div><!--/.control-group -->\n            <div class=\"control-group\">\n                <label class=\"control-label\" for=\"input01\">Faixa etária</label>\n                <div class=\"controls\">\n                    <span class=\"input-xlarge uneditable-input\">\n                        25 a 32 anos\n                    </span>\n                </div><!--/.controls -->\n            </div><!--/.control-group -->\n            <div class=\"control-group\">\n                <label class=\"control-label\" for=\"input01\">Bairro</label>\n                <div class=\"controls\">\n                    <span class=\"input-xlarge uneditable-input\">\n                        Nova Granada\n                    </span>\n                </div><!--/.controls -->\n            </div><!--/.control-group -->\n            <div class=\"control-group\">\n                <label class=\"control-label\" for=\"input01\">Discipulador</label>\n                <div class=\"controls\">\n                    <span class=\"input-xlarge uneditable-input\">João Paulo</span>\n                </div><!--/.controls -->\n            </div><!--/.control-group -->\n            <div class=\"control-group\">\n                <label class=\"control-label\" for=\"input01\">Coordenador</label>\n                <div class=\"controls\">\n                    <span class=\"input-xlarge uneditable-input\">João Paulo</span>\n                </div><!--/.controls -->\n            </div><!--/.control-group -->\n            <div class=\"control-group\">\n                <label class=\"control-label\" for=\"input01\">Rede</label>\n                <div class=\"controls\">\n                    <span class=\"input-xlarge uneditable-input\">Zoe</span>\n                </div><!--/.controls -->\n            </div><!--/.control-group -->\n            <div class=\"control-group\">\n                <label class=\"control-label\" for=\"input01\">Congregação</label>\n                <div class=\"controls\">\n                    <span class=\"input-xlarge uneditable-input\">Igreja Batista Central</span>\n                </div><!--/.controls -->\n            </div><!--/.control-group -->\n        </div><!--/.form-horizontal -->\n    </div><!--/.span12 -->\n</div><!--/.row-fluid -->\n        ");
});Ember.TEMPLATES["cell_celula"] = Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
helpers = helpers || Ember.Handlebars.helpers;
  var foundHelper, self=this;


  data.buffer.push("<div class=\"row\">\n    <div class=\"span3\">\n        <ul class=\"nav nav-tabs nav-stacked\">\n            <li><a href=\"\">Hierarquia</a></li>\n            <li class=\"active\"><a href=\"\">Pastores</a></li>\n        </ul>\n    </div>\n\n    <div class=\"span9\">\n        <ul class=\"nav nav-tabs\">\n            <li class=\"active\"><a href=\"#\">Adicionar</a></li>\n            <li><a href=\"#\">Remover</a></li>\n        </ul>\n    </div>\n</div>");
});Ember.TEMPLATES["cell_home"] = Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
helpers = helpers || Ember.Handlebars.helpers;
  var foundHelper, self=this;


  data.buffer.push("cell home");
});Ember.TEMPLATES["cell_recursos-dinamicas"] = Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
helpers = helpers || Ember.Handlebars.helpers;
  var foundHelper, self=this;


  data.buffer.push("din");
});Ember.TEMPLATES["cell_recursos-home"] = Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
helpers = helpers || Ember.Handlebars.helpers;
  var foundHelper, self=this;


  data.buffer.push("home rec");
});Ember.TEMPLATES["cell_recursos-licoes-de-celula"] = Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
helpers = helpers || Ember.Handlebars.helpers;
  var foundHelper, self=this;


  data.buffer.push("licoes de celula");
});Ember.TEMPLATES["cell_recursos-louvor"] = Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
helpers = helpers || Ember.Handlebars.helpers;
  var foundHelper, self=this;


  data.buffer.push("louvor");
});Ember.TEMPLATES["cell_recursos"] = Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
helpers = helpers || Ember.Handlebars.helpers;
  var buffer = '', stack1, stack2, stack3, foundHelper, tmp1, self=this, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"row\">\n    <div class=\"span3\">\n        <ul class=\"nav nav-tabs nav-stacked\">\n            <li><a ");
  stack1 = depth0;
  stack2 = "goRecursosDinamicas";
  stack3 = helpers.action;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">Dinâmicas</a></li>\n            <li><a ");
  stack1 = depth0;
  stack2 = "goRecursosLicoesDeCelula";
  stack3 = helpers.action;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">Lições de Célula</a></li>\n            <li><a ");
  stack1 = depth0;
  stack2 = "goRecursosLouvor";
  stack3 = helpers.action;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">Louvor</a></li>\n        </ul>\n    </div>\n\n    <div class=\"span9\">\n        ");
  stack1 = depth0;
  stack2 = "outlet";
  stack3 = helpers._triageMustache;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "\n    </div>\n</div>");
  return buffer;
});Ember.TEMPLATES["cell_settings-address"] = Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
helpers = helpers || Ember.Handlebars.helpers;
  var foundHelper, self=this;


  data.buffer.push("<div class=\"page-header\">\n            <h1>Endereço</h1>\n        </div>\n        <div class=\"row-fluid\">\n            <div class=\"span12\">\n                <form class=\"form-horizontal\" method=\"post\" action=\"\">\n                                            <div class=\"control-group\">\n                <label class=\"control-label\" for=\"input01\">Endereço</label>\n                <div class=\"controls\">\n                    <input type=\"text\" class=\"input-xlarge\" id=\"input01\" name=\"address\" id=\"address\" value=\"<?=$this->address?>\">\n                </div><!--/.controls -->\n            </div><!--/.control-group -->\n            <div class=\"control-group\">\n                <label class=\"control-label\" for=\"input01\">Número</label>\n                <div class=\"controls\">\n                    <input type=\"text\" class=\"input-xlarge\" id=\"input01\" name=\"number\" id=\"number\" value=\"<?=$this->number?>\">\n                </div><!--/.controls -->\n            </div><!--/.control-group -->\n            <div class=\"control-group\">\n                <label class=\"control-label\" for=\"input01\">Complemento</label>\n                <div class=\"controls\">\n                    <input type=\"text\" class=\"input-xlarge\" id=\"input01\" name=\"apartament\" id=\"apartament\" value=\"<?=$this->apartament?>\">\n                </div><!--/.controls -->\n            </div><!--/.control-group -->\n            <div class=\"control-group\">\n                <label class=\"control-label\" for=\"input01\">Bairro</label>\n                <div class=\"controls\">\n                    <input type=\"text\" class=\"input-xlarge\" id=\"input01\" name=\"district\" id=\"district\" value=\"<?=$this->district?>\">\n                </div><!--/.controls -->\n            </div><!--/.control-group -->\n            <div class=\"control-group\">\n                <label class=\"control-label\" for=\"input01\">Município</label>\n                <div class=\"controls\">\n                    <select class=\"\" name=\"city\" id=\"city\">\n                        <option value=\"1\">Belo Horizonte</option>\n                        <option value=\"2\">Contagem</option>\n                        <option value=\"3\">Nova Lima</option>\n                        <option value=\"4\">Betim</option>\n                    </select>\n                </div><!--/.controls -->\n            </div><!--/.control-group -->\n            <div class=\"control-group\">\n                <label class=\"control-label\" for=\"input01\">CEP</label>\n                <div class=\"controls\">\n                    <input type=\"text\" class=\"span2\" id=\"input01\" name=\"zip_code\" id=\"zip_code\" placeholder=\"ex.: 30330-333\" value=\"<?=$this->zip_code?>\">\n                </div><!--/.controls -->\n            </div><!--/.control-group -->\n                        <div class=\"form-actions\">\n                            <button type=\"submit\" class=\"btn btn-primary\">Salvar alterações</button>\n                            <button class=\"btn\">Cancelar</button>\n                        </div>\n                </form>\n            </div>\n        </div>");
});Ember.TEMPLATES["cell_settings-contact"] = Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
helpers = helpers || Ember.Handlebars.helpers;
  var foundHelper, self=this;


  data.buffer.push("<div class=\"page-header\">\n            <h1>Contato</h1>\n        </div>\n        <div class=\"row-fluid\">\n            <div class=\"span12\">\n                <form class=\"form-horizontal\" method=\"post\" action=\"\">\n            \n                        <div class=\"control-group\">\n                            <label class=\"control-label\" for=\"input01\">Telefone</label>\n                            <div class=\"controls\">\n                                <input type=\"text\" class=\"input-large\" id=\"input01\" name=\"phone\" id=\"phone\" value=\"<?=$this->phone?>\" placeholder=\"(DDD) 9999-9999\">\n                            </div><!--/.controls -->\n                        </div><!--/.control-group -->\n\n                        <div class=\"form-actions\">\n                            <button type=\"submit\" class=\"btn btn-primary\">Salvar alterações</button>\n                            <button class=\"btn\">Cancelar</button>\n                        </div>\n                </form>\n            </div>\n        </div>");
});Ember.TEMPLATES["cell_settings-password"] = Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
helpers = helpers || Ember.Handlebars.helpers;
  var foundHelper, self=this;


  data.buffer.push("<div class=\"page-header\">\n            <h1>Senha</h1>\n        </div>\n        <div class=\"row-fluid\">\n            <div class=\"span12\">\n                <form class=\"form-horizontal\" action=\"\" method=\"post\">\n                        <div class=\"control-group\">\n                            <label class=\"control-label\" for=\"input01\">Senha atual</label>\n                            <div class=\"controls\">\n                                <input type=\"password\" class=\"input-large\" id=\"input01\" name=\"old_password\" id=\"old_password\">\n                            </div><!--/.controls -->\n                        </div><!--/.control-group -->\n                        <div class=\"control-group\">\n                            <label class=\"control-label\" for=\"input01\">Nova senha</label>\n                            <div class=\"controls\">\n                                <input type=\"password\" class=\"input-large\" id=\"input01\" name=\"new_password\" id=\"new_password\" placeholder=\"mín. 6 caracteres\">\n                            </div><!--/.controls -->\n                        </div><!--/.control-group -->\n                        <div class=\"control-group\">\n                            <label class=\"control-label\" for=\"input01\">Repita nova senha</label>\n                            <div class=\"controls\">\n                                <input type=\"password\" class=\"input-large\" id=\"input01\" name=\"confirm_password\" id=\"confirm_password\" placeholder=\"mín. 6 caracteres\">\n                            </div><!--/.controls -->\n                        </div><!--/.control-group -->\n                        <div class=\"form-actions\">\n                            <button type=\"submit\" class=\"btn btn-primary\">Salvar alterações</button>\n                            <button class=\"btn\">Cancelar</button>\n                        </div>\n                </form>\n            </div>\n        </div>");
});Ember.TEMPLATES["cell_settings-profile"] = Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
helpers = helpers || Ember.Handlebars.helpers;
  var foundHelper, self=this;


  data.buffer.push("<div class=\"page-header\">\n            <h1>Perfil</h1>\n        </div>\n        <div class=\"row-fluid\">\n            <div class=\"span12\">\n             <form class=\"form-horizontal\" action=\"\" method=\"post\" name=\"form_perfil\">\n             <div class=\"control-group\">\n                <div class=\"controls\">\n                    <div class=\"span2\">\n                        <div class=\"thumbnail\">\n                            <img src=\"http://placehold.it/140x140\" alt=\"\">\n                        </div>\n                    </div>\n                </div><!--/.controls -->\n            </div><!--/.control-group -->\n            <div class=\"control-group\">\n                <label class=\"control-label\" for=\"input01\">Alterar foto</label>\n                <div class=\"controls\">\n                    <input class=\"input-file\" type=\"file\" name=\"photo\" id=\"photo\">\n                </div><!--/.controls -->\n            </div><!--/.control-group -->\n                        <div class=\"control-group\">\n                            <label class=\"control-label\" for=\"input01\">Nome</label>\n                            <div class=\"controls\">\n                                <input type=\"text\" name=\"name\" value=\"<?=$this->name?>\" class=\"input-large\" id=\"name\" placeholder=\"nome completo\">\n                            </div><!--/.controls -->\n                        </div><!--/.control-group -->\n                        <div class=\"control-group\">\n                            <label class=\"control-label\" for=\"input01\">Sobrenome</label>\n                            <div class=\"controls\">\n                                <input type=\"text\" name=\"surname\" value=\"<?=$this->surname?>\" class=\"input-large\" id=\"input01\" placeholder=\"nome completo\">\n                            </div><!--/.controls -->\n                        </div><!--/.control-group -->\n                        <div class=\"control-group\">\n                            <label class=\"control-label\" for=\"input01\">Apelido</label>\n                            <div class=\"controls\">\n                                <input type=\"text\" name=\"nickname\" value=\"<?=$this->nickname?>\" class=\"input-large\" id=\"input01\" placeholder=\"como quer ser chamado\">\n                            </div><!--/.controls -->\n                        </div><!--/.control-group -->\n                        <div class=\"control-group\">\n                            <label class=\"control-label\" for=\"input01\">Sexo</label>\n                            <div class=\"controls\">\n                                <label for=\"male\" class=\"radio\">\n                                    <input type=\"radio\" name=\"gender\" id=\"male\" <?if ($this->gender == 1){?>checked=\"checked\"<?}?> value=\"1\">\n                                    Masculino\n                                </label>\n                                <label for=\"female\" class=\"radio\">\n                                    <input type=\"radio\"  name=\"gender\" id=\"female\" <?if ($this->gender == 2){?>checked=\"checked\"<?}?> value=\"2\">\n                                    Feminino\n                                </label>\n                            </div><!--/.controls -->\n                        </div><!--/.control-group -->\n                        <div class=\"control-group\">\n                            <label class=\"control-label\" for=\"input01\">Data de nascimento</label>\n                            <div class=\"controls\">\n                                <input type=\"text\" name=\"birthday\" value=\"<?=$this->birthday?>\" class=\"input-large\" id=\"birthday\" placeholder=\"data de nascimento\">\n                            </div><!--/.controls -->\n                        </div><!--/.control-group -->\n                        <div class=\"form-actions\">\n                            <button type=\"submit\" class=\"btn btn-primary\">Salvar alterações</button>\n                            <button class=\"btn\">Cancelar</button>\n                        </div>\n                </form>\n            </div>\n        </div>");
});Ember.TEMPLATES["cell_settings"] = Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
helpers = helpers || Ember.Handlebars.helpers;
  var buffer = '', stack1, stack2, stack3, foundHelper, tmp1, self=this, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"row\">\n    <div class=\"span3\">\n        <ul class=\"nav nav-tabs nav-stacked\">\n            <li>\n            <a ");
  stack1 = depth0;
  stack2 = "goSettingsProfile";
  stack3 = helpers.action;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "><i class=\"icon-user\"></i> Perfil</a>\n          </li>\n          <li>\n            <a ");
  stack1 = depth0;
  stack2 = "goSettingsContact";
  stack3 = helpers.action;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "><i class=\"icon-bullhorn\"></i> Contato</a>\n          </li>\n          <li>\n            <a ");
  stack1 = depth0;
  stack2 = "goSettingsAddress";
  stack3 = helpers.action;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "><i class=\"icon-map-marker\"></i> Endereço</a>\n          </li>\n          <li>\n            <a ");
  stack1 = depth0;
  stack2 = "goSettingsPassword";
  stack3 = helpers.action;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "><i class=\"icon-lock\"></i> Senha</a>\n          </li>\n      </ul>\n    </div>\n\n    <div class=\"span9\">\n        ");
  stack1 = depth0;
  stack2 = "outlet";
  stack3 = helpers._triageMustache;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "\n    </div>\n    \n</div><!--/.row -->\n");
  return buffer;
});Ember.TEMPLATES["conteudo"] = Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
helpers = helpers || Ember.Handlebars.helpers;
  var foundHelper, self=this;


  data.buffer.push("<div class=\"row\">\n    <div class=\"span3\">\n        <ul class=\"nav nav-tabs nav-stacked\">\n            <li class=\"active\"><a href=\"\">Dinâmicas</a></li>\n            <li><a href=\"\">Lições de Célula</a></li>\n            <li><a href=\"\">Louvor</a></li>\n        </ul>\n    </div>\n\n    <div class=\"span9\">\n        <ul class=\"nav nav-tabs\">\n            <li class=\"active\"><a href=\"#\">Listar</a></li>\n            <li><a href=\"#\">Adicionar</a></li>\n            <li><a href=\"#\">Remover</a></li>\n        </ul>\n    </div>\n</div>");
});Ember.TEMPLATES["frequency"] = Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
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
  data.buffer.push("\n                  <th>");
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
  
  var buffer = '', stack1, stack2, stack3;
  data.buffer.push("\n                <tr>\n                  <td>");
  stack1 = depth0;
  stack2 = "funcao";
  stack3 = helpers._triageMustache;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "</td>\n                  <td>");
  stack1 = depth0;
  stack2 = "nome";
  stack3 = helpers._triageMustache;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "</td>\n                  ");
  stack1 = depth0;
  stack2 = "dateMeetings";
  stack3 = helpers.each;
  tmp1 = self.program(8, program8, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                </tr>\n              ");
  return buffer;}
function program8(depth0,data) {
  
  
  data.buffer.push("\n                    <td>\n                      <input type=\"checkbox\">\n                    </td>\n                  ");}

function program10(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3;
  data.buffer.push("\n                <tr>\n                  <td>");
  stack1 = depth0;
  stack2 = "funcao";
  stack3 = helpers._triageMustache;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "</td>\n                  <td>");
  stack1 = depth0;
  stack2 = "nome";
  stack3 = helpers._triageMustache;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "</td>\n                  ");
  stack1 = depth0;
  stack2 = "dateMeetings";
  stack3 = helpers.each;
  tmp1 = self.program(11, program11, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                </tr>\n              ");
  return buffer;}
function program11(depth0,data) {
  
  
  data.buffer.push("\n                    <td>\n                      <input type=\"checkbox\">\n                    </td>\n                  ");}

  data.buffer.push("<div class=\"container-fluid\">\n  <div class=\"row-fluid\">\n    <div class=\"span8\">\n           \n      <div class=\"row-fluid\">\n        <div class=\"span12\">\n              \n          Selecionar reunião:\n          ");
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
  data.buffer.push(escapeExpression(stack1) + "\n          \n          ");
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
  data.buffer.push("\n          \n          <table class=\"table table-bordered\">\n            <thead>\n              <tr>\n                <th></th>\n                <th class=\"th-left\">Nome</th>\n                ");
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
  data.buffer.push("\n              </tr>\n            </thead>\n            \n            <tbody>\n              <tr>\n                <td colspan=\"8\">Membros IBC</td>\n              </tr>\n              ");
  stack1 = depth0;
  stack2 = "members";
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
  data.buffer.push("\n          \n              <tr>\n                <td colspan=\"8\">Visitantes</td>\n              </tr>\n              ");
  stack1 = depth0;
  stack2 = "visitors";
  stack3 = helpers.each;
  tmp1 = self.program(10, program10, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            </tbody>\n          </table>\n\n\n      <p class=\"add-visitor\">\n        <a ");
  stack1 = depth0;
  stack2 = "addNewVisitor";
  stack3 = helpers.action;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + " class=\"btn btn-block btn-large\">Adicionar Visitante</a>\n      </p>\n\n      </div><!--/.span12 -->\n    </div><!--/.row-fluid -->\n  </div><!--/span8 -->\n\n  ");
  stack1 = depth0;
  stack2 = "subgoals";
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
  data.buffer.push(escapeExpression(stack1) + "\n  </div><!--/.row-fluid -->\n\n</div><!--/.container-fluid -->");
  return buffer;
});Ember.TEMPLATES["god-presence"] = Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
helpers = helpers || Ember.Handlebars.helpers;
  var buffer = '', foundHelper, self=this;


  return buffer;
});Ember.TEMPLATES["home"] = Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
helpers = helpers || Ember.Handlebars.helpers;
  var foundHelper, self=this;


  data.buffer.push("home");
});Ember.TEMPLATES["igreja"] = Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
helpers = helpers || Ember.Handlebars.helpers;
  var foundHelper, self=this;


  data.buffer.push("<div class=\"row\">\n    <div class=\"span3\">\n        <ul class=\"nav nav-tabs nav-stacked\">\n            <li><a href=\"\">Hierarquia</a></li>\n            <li class=\"active\"><a href=\"\">Pastores</a></li>\n        </ul>\n    </div>\n\n    <div class=\"span9\">\n        <ul class=\"nav nav-tabs\">\n            <li class=\"active\"><a href=\"#\">Adicionar</a></li>\n            <li><a href=\"#\">Remover</a></li>\n        </ul>\n    </div>\n</div>");
});Ember.TEMPLATES["membresia"] = Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
helpers = helpers || Ember.Handlebars.helpers;
  var foundHelper, self=this;


  data.buffer.push("<div class=\"row\">\n    <div class=\"span3\">\n        <ul class=\"nav nav-tabs nav-stacked\">\n            <li class=\"active\"><a href=\"\">Membros</a></li>\n        </ul>\n    </div>\n\n    <div class=\"span9\">\n        <ul class=\"nav nav-tabs\">\n            <li class=\"active\"><a href=\"#\">Listar</a></li>\n            <li><a href=\"#\">Adicionar</a></li>\n            <li><a href=\"#\">Remover</a></li>\n        </ul>\n    </div>\n</div>");
});Ember.TEMPLATES["new-participant-box"] = Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
helpers = helpers || Ember.Handlebars.helpers;
  var foundHelper, self=this;


  data.buffer.push("<div class=\"window-overlay\">\n    <div class=\"window\">\n        <div class=\"window-wrapper\">\n            fdfdf\n        </div>\n    </div>\n</div>");
});Ember.TEMPLATES["new-participant-window"] = Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
helpers = helpers || Ember.Handlebars.helpers;
  var buffer = '', stack1, stack2, stack3, foundHelper, tmp1, self=this, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"window-overlay\">\n    <div class=\"window\">\n        <div class=\"window-wrapper\">\n            <div class=\"clearfix\">\n                <div class=\"window-header\">\n                    <div class=\"window-utils\">\n                        <a ");
  stack1 = depth0;
  stack2 = "closeWindow";
  stack3 = helpers.action;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">\n                            <i class=\"icon-remove\"></i>\n                        </a>\n                    </div>\n                </div>\n\n                <div class=\"window-main-col\">\n                    <div class=\"form-horizontal\">\n                      <div class=\"control-group\">\n                        <label class=\"control-label\" for=\"participantName\">Nome</label>\n                        <div class=\"controls\">\n                          <input type=\"text\" class=\"input-xlarge\" id=\"participantName\">\n                        </div>\n                      </div>\n\n                      <div class=\"control-group\">\n                        <label class=\"control-label\" for=\"participantNickname\">Como quer ser chamado</label>\n                        <div class=\"controls\">\n                          <input type=\"text\" class=\"input-xlarge\" id=\"participantNickname\">\n                        </div>\n                      </div>\n\n                      <div class=\"control-group\">\n                        <label class=\"control-label\" for=\"participantEmail\">Email</label>\n                        <div class=\"controls\">\n                          <input type=\"text\" class=\"input-xlarge\" id=\"participantEmail\">\n                        </div>\n                      </div>\n\n                      <div class=\"control-group\">\n                        <label class=\"control-label\" for=\"participantPhone\">Telefone</label>\n                        <div class=\"controls\">\n                          <input type=\"text\" class=\"input-xlarge\" id=\"participantPhone\">\n                        </div>\n                      </div>\n\n                      <div class=\"control-group\">\n                        <label class=\"control-label\" for=\"participantSex\">Sexo</label>\n                        <div class=\"controls\">\n                          \n                          <div class=\"btn-group\" data-toggle=\"buttons-radio\">\n                          <button type=\"button\" class=\"btn\">Masculino</button>\n                          <button type=\"button\" class=\"btn\">Feminino</button>\n                        </div>\n\n                        </div>\n                      </div>\n\n                      <div class=\"control-group\">\n                        <label class=\"control-label\" for=\"participantBaptism\">Batismo</label>\n                        <div class=\"controls\">\n                          \n                          <div class=\"btn-group\" data-toggle=\"buttons-radio\">\n                          <button type=\"button\" class=\"btn\">IBCBH</button>\n                          <button type=\"button\" class=\"btn\">Outra Igreja</button>\n                          <button type=\"button\" class=\"btn\">Não foi batizado</button>\n                        </div>\n\n                        </div>\n                      </div>\n\n                      <div class=\"control-group\">\n                        <label class=\"control-label\" for=\"participantPosition\">Posição</label>\n                        <div class=\"controls\">\n                          \n                          <div class=\"btn-group\" data-toggle=\"buttons-checkbox\">\n                          <button type=\"button\" class=\"btn\">Líder em Treinamento</button>\n                          <button type=\"button\" class=\"btn\">Anfitrião</button>\n                        </div>\n\n                        </div>\n                      </div>\n\n\n                      <div class=\"control-group\">\n                        <div class=\"controls\">\n                          <button class=\"btn btn-success\">Salvar</button>\n                        </div>\n                      </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");
  return buffer;
});Ember.TEMPLATES["new-participant"] = Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
helpers = helpers || Ember.Handlebars.helpers;
  var buffer = '', stack1, stack2, stack3, stack4, foundHelper, tmp1, self=this, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"add-new-visitor-box\">\n  ");
  stack1 = depth0;
  stack2 = "Em.TextField";
  stack3 = {};
  stack4 = "name";
  stack3['valueBinding'] = stack4;
  stack4 = "Nome do visitante";
  stack3['placeholder'] = stack4;
  stack4 = helpers.view;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack4.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "\n\n  <div>\n  <a ");
  stack1 = depth0;
  stack2 = "saveNewVisitor";
  stack3 = helpers.action;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + " class=\"btn btn-success\">Salvar</a>\n  <a ");
  stack1 = depth0;
  stack2 = "closeNewVisitor";
  stack3 = helpers.action;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">\n    <i class=\"icon-remove style-icon-remove\"></i>\n  </a>\n  </div>\n</div>\n\n\n");
  return buffer;
});Ember.TEMPLATES["resources-dynamics"] = Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
helpers = helpers || Ember.Handlebars.helpers;
  var foundHelper, self=this;


  data.buffer.push("<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"span8 offset2\">\n            Dinamicas\n        </div>\n    </div>\n</div>");
});Ember.TEMPLATES["resources-lessons"] = Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
helpers = helpers || Ember.Handlebars.helpers;
  var foundHelper, self=this;


  data.buffer.push("<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"span8 offset2\">\n            lições\n        </div>\n    </div>\n</div>");
});Ember.TEMPLATES["resources-praise"] = Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
helpers = helpers || Ember.Handlebars.helpers;
  var foundHelper, self=this;


  data.buffer.push("<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"span8 offset2\">\n            louvor\n        </div>\n    </div>\n</div>");
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
});Ember.TEMPLATES["subgoals"] = Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
helpers = helpers || Ember.Handlebars.helpers;
  var buffer = '', stack1, stack2, stack3, stack4, foundHelper, tmp1, self=this, escapeExpression=this.escapeExpression, functionType="function", helperMissing=helpers.helperMissing, undef=void 0;

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

function program3(depth0,data) {
  
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
  tmp1 = self.program(4, program4, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.program(6, program6, data);
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
  tmp1 = self.program(8, program8, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.program(10, program10, data);
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
  tmp1 = self.program(12, program12, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.program(14, program14, data);
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
  tmp1 = self.program(16, program16, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.program(18, program18, data);
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
  tmp1 = self.program(20, program20, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.program(22, program22, data);
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
  tmp1 = self.program(24, program24, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.program(26, program26, data);
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
  tmp1 = self.program(28, program28, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.program(30, program30, data);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          </span>\n        </div>\n      ");
  return buffer;}
function program4(depth0,data) {
  
  
  data.buffer.push("\n              <i class=\"icon-star\"></i>\n            ");}

function program6(depth0,data) {
  
  
  data.buffer.push("\n              <i class=\"icon-star-empty\"></i>\n            ");}

function program8(depth0,data) {
  
  
  data.buffer.push("\n              <i class=\"icon-star\"></i>\n            ");}

function program10(depth0,data) {
  
  
  data.buffer.push("\n              <i class=\"icon-star-empty\"></i>\n            ");}

function program12(depth0,data) {
  
  
  data.buffer.push("\n              <i class=\"icon-star\"></i>\n            ");}

function program14(depth0,data) {
  
  
  data.buffer.push("\n              <i class=\"icon-star-empty\"></i>\n            ");}

function program16(depth0,data) {
  
  
  data.buffer.push("\n              <i class=\"icon-star\"></i>\n            ");}

function program18(depth0,data) {
  
  
  data.buffer.push("\n              <i class=\"icon-star-empty\"></i>\n            ");}

function program20(depth0,data) {
  
  
  data.buffer.push("\n              <i class=\"icon-star\"></i>\n            ");}

function program22(depth0,data) {
  
  
  data.buffer.push("\n              <i class=\"icon-star-empty\"></i>\n            ");}

function program24(depth0,data) {
  
  
  data.buffer.push("\n              <i class=\"icon-star\"></i>\n            ");}

function program26(depth0,data) {
  
  
  data.buffer.push("\n              <i class=\"icon-star-empty\"></i>\n            ");}

function program28(depth0,data) {
  
  
  data.buffer.push("\n              <i class=\"icon-star\"></i>\n            ");}

function program30(depth0,data) {
  
  
  data.buffer.push("\n              <i class=\"icon-star-empty\"></i>\n            ");}

  data.buffer.push("<div class=\"span4\">\n\n  <div class=\"\" id=\"submetas\">\n    <div class=\"submeta-1\">\n      <h3 class=\"subgoal-title\">Data de Multiplicação</h3>\n\n      <p ");
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
  data.buffer.push("\n    </div><!-- /.submeta-1 -->\n\n\n    <div class=\"submeta-2\">\n      <h3 class=\"subgoal-title\">Presença de Deus</h3>\n\n      ");
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
  data.buffer.push(escapeExpression(stack1) + "\n    </div>\n\n    <!-- SUBGOAL 3: Novo líder -->\n    <div class=\"submeta-3\">\n      <h3 class=\"subgoal-title\">Novo Líder</h3>\n\n      ");
  stack1 = depth0;
  stack2 = "futureLeader";
  stack3 = helpers.each;
  tmp1 = self.program(3, program3, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n    </div>\n    <div class=\"submeta-4\">\n      <h3 class=\"subgoal-title\">Novos Participantes</h3>\n\n      <div class=\"edit-field\">\n        <span class=\"\"><i class=\"icon-sign-blank\"></i></span>\n        <span class=\"\"><i class=\"icon-sign-blank\"></i></span>\n        <span class=\"\"><i class=\"icon-sign-blank\"></i></span>\n        <span class=\"\"><i class=\"icon-sign-blank\"></i></span>\n        <span class=\"\"><i class=\"icon-sign-blank\"></i></span>\n        <span class=\"\"><i class=\"icon-sign-blank\"></i></span>\n        <span class=\"\"><i class=\"icon-sign-blank\"></i></span>\n        <span class=\"\"><i class=\"icon-sign-blank\"></i></span>\n        <span class=\"\"><i class=\"icon-sign-blank\"></i></span>\n        <span class=\"\"><i class=\"icon-sign-blank\"></i></span>\n        <span class=\"\"><i class=\"icon-sign-blank\"></i></span>\n        <span class=\"\"><i class=\"icon-sign-blank\"></i></span>\n      </div>\n\n    </div>\n    <div class=\"submeta-5\">\n      <h3 class=\"subgoal-title\">Novo Anfitrião</h3>\n\n      <p ");
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
  data.buffer.push(escapeExpression(stack1) + ">\n                <i class=\"icon-remove style-icon-remove\"></i>\n              </a>\n            </div><!-- /.edit-subgoal-5 -->\n    </div>\n  </div>\n\n  <hr class=\"hr-subgoal\">\n\n  <div class=\"suggestions\" ");
  stack1 = depth0;
  stack2 = "openSuggestionsWindow";
  stack3 = helpers.action;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">\n    <i class=\"icon-comment-alt\"></i> <span>Sugestões?</span>\n  </div>\n\n\n</div><!--/span4 -->");
  return buffer;
});Ember.TEMPLATES["suggestions"] = Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
helpers = helpers || Ember.Handlebars.helpers;
  var buffer = '', stack1, stack2, stack3, foundHelper, tmp1, self=this, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"window-overlay\">\n    <div class=\"window\">\n        <div class=\"window-wrapper\">\n            <div class=\"clearfix\">\n                <div class=\"window-header\">\n                    <div class=\"window-utils\">\n                        <a ");
  stack1 = depth0;
  stack2 = "closeWindow";
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
  stack3 = helpers.view;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "\n                  </div>\n\n                  <div>\n                    <a class=\"btn btn-block\">Enviar</a>\n                  </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");
  return buffer;
});