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
