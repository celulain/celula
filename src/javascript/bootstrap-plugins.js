    // Enabling Collapse
    $(".collapse").collapse({

    })

    $('.typeahead').typeahead({
        source: [
        "Fabrício Tavares de Oliveira",
        "André Lopes Gonzaga",
        "Roberto Bottrel",
        "Francisco Alves de Oliveira",
        "Luiz Carlos Menezes Líder",
        "Rodrigo Ferreira",
        "Paulo Eduardo Melo",
        "Leonardo Matos",
        "João Paulo Santos",
        "Daniel Mazoni",
        "Breno Ferrari",
        "Allyson Martins",
        "Weliton Rodrigues",
        "Renato Vargas"
        ],
        items: 8
    })


    // Script para frequência

    $('td.frequencia').on('click', function(){

        var presente = $(this).children('i').hasClass('frequencia-presente');
        var ausente = $(this).children('i').hasClass('frequencia-ausente');

        if(presente) {
            $(this).children('i').removeClass('icon-ok');
            $(this).children('i').removeClass('frequencia-presente');
            $(this).children('i').addClass('icon-remove');
            $(this).children('i').addClass('frequencia-ausente');
        } else if (ausente) {
            $(this).children('i').removeClass('icon-remove');
            $(this).children('i').removeClass('frequencia-ausente');
            $(this).children('i').addClass('icon-ok');
            $(this).children('i').addClass('frequencia-presente');
        } else {
            $(this).children('i').addClass('hide');
        }

    });

// jQuery Plugin para Multi toggle
// by Fabricio Tavares

(function( $ ) {
    $.fn.multiToggle = function(options) {

        var settings = $.extend({
            'items': 4
        }, options);

        return this.each(function() {
            for (i = 0; i < settings.items; i++) {
                console.log("bola = ", i);
            }
        });
  };
})( jQuery );

// Rating System

