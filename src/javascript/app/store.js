App.Store = DS.Store.extend({
    revision: 8,
    // adapter: 'DS.fixtureAdapter'
    adapter: DS.LSAdapter.create({
        namespace: 'cell'
    })
});

// adapter: DS.RESTAdapter.create({
//         bulkCommit: false,
//         url: '/fixtures',
//         mappings: {
//             participants: 'App.Participant',
//             lessons: 'App.Lesson',
//             dynamics: 'App.Dynamic',
//             praises: 'App.Praise',
//             suggestions: 'App.Suggestion',
//             cellProfiles: 'App.CellProfile',
//             meetings: 'App.Meeting'
//         }
//     })
