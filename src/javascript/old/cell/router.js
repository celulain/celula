/**
    STATES TREE
    -----------
.
└── root
    ├── index
    ├── celula
    │   ├── frequencia
    │   ├── participantes
    │   ├── cadastro
    │   └── perfil
    └── recursos
        ├── dinamicas
        ├── licoes de celula
        └── louvor

*/

Cell.Router = Em.Router.extend({
    enableLogging: true,

    root: Em.Route.extend({
        index: Em.Route.extend({
            route: '/',
            redirectsTo: 'root.celula.frequencia',
            // connectOutlets: function(router) {
            //     router.get('applicationController').connectOutlet('view', 'home');
            // }
        }),

        goSettings: Em.Route.transitionTo('root.settings.profile'),
        goSettingsContact: Em.Route.transitionTo('root.settings.contact'),
        goSettingsAddress: Em.Route.transitionTo('root.settings.address'),
        goSettingsProfile: Em.Route.transitionTo('root.settings.profile'),
        goSettingsPassword: Em.Route.transitionTo('root.settings.password'),

        settings: Em.Route.extend({
            route: '/configuracoes',
            connectOutlets: function(router) {
                router.get('applicationController').connectOutlet('view', 'settings');
            },

            contact: Em.Route.extend({
                route: '/contato',
                connectOutlets: function(router) {
                    router.get('settingsController').connectOutlet('view', 'settingsContact');
                }
            }),

            address: Em.Route.extend({
                route: '/endereco',
                connectOutlets: function(router) {
                    router.get('settingsController').connectOutlet('view', 'settingsAddress');
                }
            }),

            profile: Em.Route.extend({
                route: '/perfil',
                connectOutlets: function(router) {
                    router.get('settingsController').connectOutlet('view', 'settingsProfile');
                }
            }),

            password: Em.Route.extend({
                route: '/senha',
                connectOutlets: function(router) {
                    router.get('settingsController').connectOutlet('view', 'settingsPassword');
                }
            }),
        }),

        goCelula: Em.Route.transitionTo('root.celula'),
        goCelulaFrequencia: Em.Route.transitionTo('root.celula.frequencia'),
        goCelulaParticipantes: Em.Route.transitionTo('root.celula.participantes'),
        goCelulaCadastro: Em.Route.transitionTo('root.celula.cadastro'),
        goCelulaPerfil: Em.Route.transitionTo('root.celula.perfil'),

        celula: Em.Route.extend({
            route: '/celula',
            connectOutlets: function(router) {
                router.get('applicationController').connectOutlet('view', 'celula');
            },

            frequencia: Em.Route.extend({
                route: '/frequencia',
                connectOutlets: function(router) {
                    router.get('applicationController').connectOutlet('view', 'celulaFrequencia');
                }
            }),

            participantes: Em.Route.extend({
                route: '/participantes',
                connectOutlets: function(router) {
                    router.get('applicationController').connectOutlet('view', 'celulaParticipantes');
                }
            }),

            cadastro: Em.Route.extend({
                route: '/cadastro',
                connectOutlets: function(router) {
                    router.get('applicationController').connectOutlet('view', 'celulaCadastro');
                }
            }),

            perfil: Em.Route.extend({
                route: '/perfil',
                connectOutlets: function(router) {
                    router.get('applicationController').connectOutlet('view', 'celulaPerfil');
                }
            })
        }),

        goRecursos: Em.Route.transitionTo('root.recursos.index'),
        recursos: Em.Route.extend({
            route: '/recursos',
            connectOutlets: function(router) {
                router.get('applicationController').connectOutlet('view', 'recursos');
            },

            index: Em.Route.extend({
                route: '/',
                connectOutlets: function(router) {
                    router.get('recursosController').connectOutlet('view', 'recursosHome');
                }
            }),

            goRecursosDinamicas: Em.Route.transitionTo('root.recursos.dinamicas'),
            dinamicas: Em.Route.extend({
                route: '/dinamicas',
                connectOutlets: function(router) {
                    router.get('recursosController').connectOutlet('view', 'recursosDinamicas');
                }
            }),

            goRecursosLicoesDeCelula: Em.Route.transitionTo('root.recursos.licoesDeCelula'),
            licoesDeCelula: Em.Route.extend({
                route: '/licoes-de-celula',
                connectOutlets: function(router) {
                    router.get('recursosController').connectOutlet('view', 'recursosLicoesDeCelula');
                }
            }),

            goRecursosLouvor: Em.Route.transitionTo('root.recursos.louvor'),
            louvor: Em.Route.extend({
                route: '/louvor',
                connectOutlets: function(router) {
                    router.get('recursosController').connectOutlet('view', 'recursosLouvor');
                }
            })
        })
    })
});

Cell.initialize();
