/**
    STATES TREE
    -----------
.
└── root
    ├── index
    ├── igreja
    │   ├── hierarquia
    │   └── pastores
    ├── membresia
    │   ├── adicionar
    │   ├── remover
    │   └── atribuir função
    └── conteudo
        ├── licoes de celula
        ├── dinamicas
        └── louvor

*/

Adm.Router = Em.Router.extend({
    enableLogging: true,

    root: Em.Route.extend({
        index: Em.Route.extend({
            route: '/',
            connectOutlets: function(router) {
                router.get('applicationController').connectOutlet('view', 'home');
            }
        }),

        goIgreja: Em.Route.transitionTo('root.igreja'),
        igreja: Em.Route.extend({
            route: '/igreja',
            connectOutlets: function(router) {
                router.get('applicationController').connectOutlet('view', 'igreja');
            }
        }),

        goMembresia: Em.Route.transitionTo('root.membresia'),
        membresia: Em.Route.extend({
            route: '/membresia',
            connectOutlets: function(router) {
                router.get('applicationController').connectOutlet('view', 'membresia');
            }
        }),

        goConteudo: Em.Route.transitionTo('root.conteudo'),
        conteudo: Em.Route.extend({
            route: '/conteudo',
            connectOutlets: function(router) {
                router.get('applicationController').connectOutlet('view', 'conteudo');
            }
        })
    })
});

Adm.initialize();
