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
