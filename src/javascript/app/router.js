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
                    .connectOutlet('frequencia','frequency');

                router.get('applicationController')
                    .connectOutlet('subgoals','subgoals', App.Subgoals.find());

                router.get('applicationController')
                    .connectOutlet('newParticipant','newParticipant');


                // Outlet gráfico de presença de Deus
                router.get('subgoalsController')
                    .connectOutlet('godPresence', 'godPresence');
            }
        }),

        // Cell state
        cell: Em.Route.extend({
            index: Em.Route.extend({
                route: '/celula',
                connectOutlets: function(router) {

                },
            }),

            frequency: Em.Route.extend({
                route: '/frequencia',
                connectOutlets: function(router) {

                }
            }),

            participants: Em.Route.extend({
                route: '/participantes',
                connectOutlets: function(router) {

                }
            }),

            register: Em.Route.extend({
                route: '/cadastro',
                connectOutlets: function(router) {

                }
            }),

            profile: Em.Route.extend({
                route: '/perfil',
                connectOutlets: function(router) {

                }
            })
        }),

        resources: Em.Route.extend({
            index: Em.Route.extend({
                route: '/recursos',
                connectOutlets: function(router) {

                },
            }),

            lessons: Em.Route.extend({
                route: '/licoes-de-celula',
                connectOutlets: function(router) {

                }
            }),

            praise: Em.Route.extend({
                route: '/louvor',
                connectOutlets: function(router) {

                }
            }),

            dynamics: Em.Route.extend({
                route: '/dinamica',
                connectOutlets: function(router) {

                }
            })
        })
    })
});

App.initialize();
