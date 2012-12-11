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
                        .connectOutlet('container', 'cellProfile', router.get('store').findAll(App.CellProfile));
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

