function savePresence(meeting_id){
    var classes = $('.icon-ok').attr('class').split(' ');
    for (var i = 0; i < classes.length; i++) {
      var matches = /^frequencia\-(.+)/.exec(classes[i]);
      if (matches != null) {
        alert(matches[0]);
        alert(matches[1])
      }
    }
    alert(meeting_id);
}

$("#state").change(function(){
    $("#city").load('/admin/return-cities/state/'+this.value);
});

$(document).ready(function() {
    $("#cpf").mask("999.999.999-99");
    $("#birthday").mask("99/99/9999");
    $("#zipcode").mask("99999-999");
    $("#phone").mask("(99) 9999-9999"); 
});

/** DatePicker Jquery UI DateMultiplication**/
$("#showDateMultiplication").click(function(){
    $("#formDateMultiplication").show('slow');
});

jQuery(function ($) {
    $.datepicker.regional['pt'] = {
        closeText: 'Fechar',
        prevText: '<Anterior',
        nextText: 'Seguinte',
        currentText: 'Hoje',
        monthNames: ['Janeiro', 'Fevereiro', 'Mar&ccedil;o', 'Abril', 'Maio', 'Junho',
        'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
        monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun',
        'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
        dayNames: ['Domingo', 'Segunda-feira', 'Ter&ccedil;a-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'S&aacute;bado'],
        dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'S&aacute;b'],
        dayNamesMin: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'S&aacute;b'],
        weekHeader: 'Sem',
        dateFormat: 'dd/mm/yy',
        firstDay: 0,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: ''
    };
    $.datepicker.setDefaults($.datepicker.regional['pt']);
});
$(function() {
    $( ".datepicker" ).datepicker();
});

$("#dateMultiplication").click(function(){
    $("#buttonSaveDate").show();
});

$("#saveDateMultiplication").click(function(){
    $.ajax({
      url: '/api/date-multiplication',
      type: "post",
      data: 'cell_id='+ $("#cell_id").val() +'&dateMultiplication=' + $("#dateMultiplication").val(),
      success: function(data) {
        console.log(data);
        if(data == 1){
            document.location.reload(true);
        }
      }
    });
});
/** End DatePicker Jquery UI **/


/** Future Leader **/

$('.um').tooltip();
$('.dois').tooltip();
$('.tres').tooltip();
$('.quatro').tooltip();
$('.cinco').tooltip();
$('.seis').tooltip();
$('.sete').tooltip();

$('.um').click(function(){
    var str = this.toString();
    var n = str.split("#");
    if($('#'+n[1]+'_star_'+n[2]).hasClass('icon-star')){
        $('#'+n[1]+'_star_'+n[2]).removeClass('icon-star').addClass('icon-star-empty');
    }
    else{
        $('#'+n[1]+'_star_'+n[2]).removeClass('icon-star-empty').addClass('icon-star');
    }
    $('#buttonSaveFutureLeader').show();
});

$('.dois').click(function(){
    var str = this.toString();
    var n = str.split("#");
    if($('#'+n[1]+'_star_'+n[2]).hasClass('icon-star')){
        $('#'+n[1]+'_star_'+n[2]).removeClass('icon-star').addClass('icon-star-empty');
    }
    else{
        $('#'+n[1]+'_star_'+n[2]).removeClass('icon-star-empty').addClass('icon-star');
    }
    $('#buttonSaveFutureLeader').show();
});

$('.tres').click(function(){
    var str = this.toString();
    var n = str.split("#");
    if($('#'+n[1]+'_star_'+n[2]).hasClass('icon-star')){
        $('#'+n[1]+'_star_'+n[2]).removeClass('icon-star').addClass('icon-star-empty');
    }
    else{
        $('#'+n[1]+'_star_'+n[2]).removeClass('icon-star-empty').addClass('icon-star');
    }
    $('#buttonSaveFutureLeader').show();
});

$('.quatro').click(function(){
    var str = this.toString();
    var n = str.split("#");
    if($('#'+n[1]+'_star_'+n[2]).hasClass('icon-star')){
        $('#'+n[1]+'_star_'+n[2]).removeClass('icon-star').addClass('icon-star-empty');
    }
    else{
        $('#'+n[1]+'_star_'+n[2]).removeClass('icon-star-empty').addClass('icon-star');
    }
    $('#buttonSaveFutureLeader').show();
});

$('.cinco').click(function(){
    var str = this.toString();
    var n = str.split("#");
    if($('#'+n[1]+'_star_'+n[2]).hasClass('icon-star')){
        $('#'+n[1]+'_star_'+n[2]).removeClass('icon-star').addClass('icon-star-empty');
    }
    else{
        $('#'+n[1]+'_star_'+n[2]).removeClass('icon-star-empty').addClass('icon-star');
    }
    $('#buttonSaveFutureLeader').show();
});

$('.seis').click(function(){
    var str = this.toString();
    var n = str.split("#");
    if($('#'+n[1]+'_star_'+n[2]).hasClass('icon-star')){
        $('#'+n[1]+'_star_'+n[2]).removeClass('icon-star').addClass('icon-star-empty');
    }
    else{
        $('#'+n[1]+'_star_'+n[2]).removeClass('icon-star-empty').addClass('icon-star');
    }
    $('#buttonSaveFutureLeader').show();
});

$('.sete').click(function(){
    var str = this.toString();
    var n = str.split("#");
    if($('#'+n[1]+'_star_'+n[2]).hasClass('icon-star')){
        $('#'+n[1]+'_star_'+n[2]).removeClass('icon-star').addClass('icon-star-empty');
    }
    else{
        $('#'+n[1]+'_star_'+n[2]).removeClass('icon-star-empty').addClass('icon-star');
    }
    $('#buttonSaveFutureLeader').show();
});

$('#savefutureLeader').click(function(){
    var dataPost = '';
    $("*[class^='icon-star']").each(function(index) {
        dataPost += $(this).attr('id') + '|*|' + $(this).attr('class') + "|||";
    });
    $.ajax({
      url: '/api/future-leader',
      type: "post",
      data: 'cell_id='+ $("#cell_id").val() +'&data='+dataPost,
      success: function(data) {
        console.log(data);
        if(data == 1){
            document.location.reload(true);
        }
      }
    });
}); 

$('#showFutureLeader').click(function(){
    $('#formFutureLeader').show('slow');
});

$('#futureLeader').keyup(function(){
    $('#buttonFutureLeader').show();
    $('#futureLeader').autocomplete({
        source: "/api/getmemberscell",
        minLength: 3,
        select: function (event, ui) {
            $("#futureLeader").val(ui.item.label);
            $("#idFutureLeader").val(ui.item.id);
            return ui.item.label;
        }
    });
});

$('#saveAddFutureLeader').click(function(){
    $.ajax({
      url: '/api/save-future-leader',
      type: "post",
      data: 'cell_id='+ $("#cell_id").val() +'&idFutureLeader='+ $('#idFutureLeader').val(),
      success: function(data) {
        console.log(data);
        if(data == 1){
            document.location.reload(true);
        }
      }
    });
});
/** END Future Leader **/


/** Future Host **/

$('.um_host').tooltip();
$('.dois_host').tooltip();
$('.tres_host').tooltip();
$('.quatro_host').tooltip();
$('.cinco_host').tooltip();

$('.um_host').click(function(){
    var str = this.toString();
    var n = str.split("#");
    if($('#'+n[1]+'_star_'+n[2]).hasClass('icon-star')){
        $('#'+n[1]+'_star_'+n[2]).removeClass('icon-star').addClass('icon-star-empty');
    }
    else{
        $('#'+n[1]+'_star_'+n[2]).removeClass('icon-star-empty').addClass('icon-star');
    }
    $('#buttonSaveFutureHost').show();
});

$('.dois_host').click(function(){
    var str = this.toString();
    var n = str.split("#");
    if($('#'+n[1]+'_star_'+n[2]).hasClass('icon-star')){
        $('#'+n[1]+'_star_'+n[2]).removeClass('icon-star').addClass('icon-star-empty');
    }
    else{
        $('#'+n[1]+'_star_'+n[2]).removeClass('icon-star-empty').addClass('icon-star');
    }
    $('#buttonSaveFutureHost').show();
});

$('.tres_host').click(function(){
    var str = this.toString();
    var n = str.split("#");
    if($('#'+n[1]+'_star_'+n[2]).hasClass('icon-star')){
        $('#'+n[1]+'_star_'+n[2]).removeClass('icon-star').addClass('icon-star-empty');
    }
    else{
        $('#'+n[1]+'_star_'+n[2]).removeClass('icon-star-empty').addClass('icon-star');
    }
    $('#buttonSaveFutureHost').show();
});

$('.quatro_host').click(function(){
    var str = this.toString();
    var n = str.split("#");
    if($('#'+n[1]+'_star_'+n[2]).hasClass('icon-star')){
        $('#'+n[1]+'_star_'+n[2]).removeClass('icon-star').addClass('icon-star-empty');
    }
    else{
        $('#'+n[1]+'_star_'+n[2]).removeClass('icon-star-empty').addClass('icon-star');
    }
    $('#buttonSaveFutureHost').show();
});

$('.cinco_host').click(function(){
    var str = this.toString();
    var n = str.split("#");
    if($('#'+n[1]+'_star_'+n[2]).hasClass('icon-star')){
        $('#'+n[1]+'_star_'+n[2]).removeClass('icon-star').addClass('icon-star-empty');
    }
    else{
        $('#'+n[1]+'_star_'+n[2]).removeClass('icon-star-empty').addClass('icon-star');
    }
    $('#buttonSaveFutureHost').show();
});

$('#savefutureHost').click(function(){
    var dataPost = '';
    $("*[class^='icon-star']").each(function(index) {
        dataPost += $(this).attr('id') + '|*|' + $(this).attr('class') + "|||";
    });
    $.ajax({
      url: '/api/future-host',
      type: "post",
      data: 'id='+ $("#goal_future_host").val() +'cell_id='+ $("#cell_id").val() +'&data='+dataPost,
      success: function(data) {
        console.log(data);
        if(data == 1){
            document.location.reload(true);
        }
      }
    });
}); 

$('#showFutureHost').click(function(){
    $('#formFutureHost').show('slow');
});

$('#futureHost').keyup(function(){
    $('#buttonFutureHost').show();
    $('#futureHost').autocomplete({
        source: "/api/getmemberscell",
        minLength: 3,
        select: function (event, ui) {
            $("#futureHost").val(ui.item.label);
            return ui.item.label;
        }
    });
})

$('#saveAddFutureHost').click(function(){
    $.ajax({
      url: '/api/save-future-host',
      type: "post",
      data: 'cell_id='+ $("#cell_id").val() +'&futureHost='+ $('#futureHost').val(),
      success: function(data) {
        console.log(data);
        if(data == 1){
            document.location.reload(true);
        }
      }
    });
});
/** END Future Host **/


/** Goal Participants **/
$('#showGoalParticipants').click(function(){
    $('#formGoalParticipants').show('slow');
});

$('#goalParticipants').keyup(function(){
    $('#buttonSaveGoalParticipants').show();
})

$('#saveGoalParticipants').click(function(){
    $.ajax({
      url: '/api/save-goal-participants',
      type: "post",
      data: 'cell_id='+ $("#cell_id").val() +'&goalParticipants='+ $('#goalParticipants').val(),
      success: function(data) {
        console.log(data);
        if(data == 1){
            document.location.reload(true);
        }
      }
    });
});


/** END Goal Participants**/

/*** Frequency ***/

$('#addDateMeeting').click(function(){
    $('#addDateMeeting').hide();
    $('.formDateNewMeeting').show();
});

/*** END Frequency ***/




/*** Participants ***/

function saveParticipant(){
    $.ajax({
      url: '/api/save-participant',
      type: "post",
      data: 'cell_id='+ $("#cell_id").val() +'&goalParticipants='+ $('#goalParticipants').val(),
      success: function(data) {
        console.log(data);
        if(data == 1){
            document.location.reload(true);
        }
      }
    });
}

$('#submitbuttonNewParticipant').click(function(){
    if(checkParticipantData()){
        $('.form-horizontal').submit();
    }
    else{
        alert('faltam dados');
    }
});

function editMember(user_id){
    document.forms["participant" + user_id].submit();
}

$('#name').keyup(function(){
    if($('#baptized-1').attr("checked") == "checked"){
        $('#name').autocomplete({
            source: "/api/getmember",
            minLength: 3,
            select: function (event, ui) {
                $("#user_id").val(ui.item.id);
                $("#name").prop('disabled', true);
                $("#nickname").prop('disabled', true);
                $("#birthday").prop('disabled', true);
                $('input[name=gender]').attr('disabled','disabled');
                return ui.item.label;
            }
        });
    }
});


$("input[name='baptized']").change(function(){
    $("#name").prop('disabled', false);
    $("#nickname").prop('disabled', false);
    $("#birthday").prop('disabled', false);
    $("#user_id").val(0);
    $("#name").val('');
    $('input[name=gender]').val('');
    $('input[name=gender]:checked').length = 0;
    $('input[name=gender]').prop('disabled', false);
});

$("input[name='position']").change(function(){
    checkParticipantData();
});

$("input[name='gender']").change(function(){
    checkParticipantData();
});


function checkParticipantData(){
    if($("#name").val() != '' && $('input[name=position]:checked').length != 0 && $('input[name=gender]:checked').length != 0 && $('input[name=baptized]:checked').length != 0){
        $('#submitbuttonNewParticipant').prop('disabled', false);
        return true;
    }
    else{
        $('#submitbuttonNewParticipant').prop('disabled', true);
        return false;
    }
}

function removeParticipant(user_id){
    $.ajax({
      url: '/api/remove-participant-cell',
      type: "post",
      data: 'cell_id='+ $("#cell_id").val() +'&user_id='+user_id,
      success: function(data) {
        if(data == 1){
            document.location.reload(true);
        }
      }
    });
}
/*** END Participants ***/




/*** FREQUENCIA ***/

$('#addDateMeeting').tooltip();

$('#submitbutton').click(function(){
    console.log('1');
    var date = $('#dateNewMeeting').val();
    console.log('2');
    var presence = '';
    $(".checkNewPresence").each(function () {
        presence += this.checked + '||' + this.id + '*';
    });
    console.log('3');
    var licao = $('#licao').val();
    var ministrante = $('#ministrante').val();
    var acontecimentos = $('#acontecimentos').val();
    console.log('4');
    if(presence != '' && date != '' && licao != '' && ministrante != ''){
        $('#presenceMeeting').val(presence);
        $('#dateMeeting').val(date);
        document.form.submit();
    }
    else{
        console.log('5');
        if(date == ''){
            $("#alertErrorDate").show();
            
        }
        else if(licao == '' || ministrante == ''){
            $("#alertErrorData").show();
        }
        console.log('6');
    }

    return false;
});

/*** END FREQUENCIA ***/