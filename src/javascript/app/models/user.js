// Usuário que tem cadastro no sistema de célula
App.User = DS.Model.extend({
    firstName: DS.attr('string'),
    lastName: DS.attr('string'),
    nickname: DS.attr('string'),
    sex: DS.attr('string'),
    birthdate: DS.attr('date'),
    email: DS.attr('string'),
    phone: DS.attr('string'),
    avatar: DS.attr('string')
});

App.User.FIXTURE = [
    {
        id: "1",
        firstName: "",
        lastName: "",
        nickname: "",
        sex: "",
        birthdate: "",
        email: "",
        phone: "",
        avatar: ""
    }    
];

// Adicionar: id da célula a que pertence
