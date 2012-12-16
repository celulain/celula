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
})


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
})

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