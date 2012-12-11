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
