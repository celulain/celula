$(document).ready(function() {
	$("#cpf").mask("999.999.999-99");
	$("#birthday").mask("99/99/9999");
	$("#zipcode").mask("99.999-999");
	$("#phone").mask("(99) 9999-9999"); 
});

$( "#name" ).autocomplete({
    source: "/api/getmember",
    minLength: 3,
    select: function (event, ui) {
        $("#name").val(ui.item.label);
        $("#idmember").val(ui.item.id);
        return ui.item.label;
    }
});