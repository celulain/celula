App.CellParticipantNewController = Em.ObjectController.extend({
    clear: function() {
        this.set('firstName', '');
        this.set('lastName', '');
        this.set('nickname', '');
        this.set('email', '');
        this.set('phone', '');
        this.set('sex', '');
        this.set('baptism', '');
        this.set('trainingLeader', false);
        this.set('host', false);

        this.set('isMale', false);
        this.set('isFemale', false);
        this.set('isBaptism1', false);
        this.set('isBaptism2', false);
        this.set('isBaptism3', false);
    },

    participant: function() {
        var usual_name = false;
        if (this.get('nickname')) {
            usual_name = true;
        }

        var participant = {
            first_name: this.get('firstName'),
            last_name: this.get('lastName'),
            nickname: this.get('nickname'),
            usual_name: usual_name,
            email: this.get('email'),
            phone: this.get('phone'),
            sex: this.get('sex'),
            baptism: this.get('baptism'),
            training_leader: this.get('trainingLeader'),
            host: this.get('host'),
            meetings: []
        };

        return participant;
    }.property('firstName', 'lastName', 'nickname', 'email', 'phone', 'sex', 'baptism', 'trainingLeader', 'host'),

    // Properties do novo participante
    firstName: '',
    lastName: '',
    nickname: '',
    email: '',
    phone: '',
    sex: '',
    baptism: '',
    trainingLeader: false,
    host: false,

    // Checkbox behavior for cell position
    toggleTrainingLeader: function() {
        this.toggleProperty('trainingLeader');
    },
    toggleHost: function() {
        this.toggleProperty('host');
    },

    // Radio behavior for sex
    isMale: false,
    isFemale: false,
    toggleSex: function(event) {
        var sex = $(event.currentTarget).data('sex');

        switch(sex) {
            case 1:
                this.set('isMale', true);
                this.set('isFemale', false);
                this.set('sex', 1);
            break;
            case 2:
                this.set('isMale', false);
                this.set('isFemale', true);
                this.set('sex', 2);
            break;
            default:
                this.set('isMale', false);
                this.set('isFemale', false);
            break;
        }
    },

    // Radio behavior for baptism
    isBaptism1: false,
    isBaptism2: false,
    isBaptism3: false,
    toggleBaptism: function(event) {
        var baptism = $(event.currentTarget).data('baptism');

        switch(baptism) {
            case 1:
                this.set('isBaptism1', true);
                this.set('isBaptism2', false);
                this.set('isBaptism3', false);
                this.set('baptism', 1);
            break;
            case 2:
                this.set('isBaptism1', false);
                this.set('isBaptism2', true);
                this.set('isBaptism3', false);
                this.set('baptism', 2);
            break;
            case 3:
                this.set('isBaptism1', false);
                this.set('isBaptism2', false);
                this.set('isBaptism3', true);
                this.set('baptism', 3);
            break;
            default:
                this.set('isBaptism1', false);
                this.set('isBaptism2', false);
                this.set('isBaptism3', false);
            break;
        }
    }
});
