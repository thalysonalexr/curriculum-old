// Rolagem entre tópicos suavemente no navbar

$(document).ready( function() {

	function scrollPage(link, section) {

        $(link).click(function() {
            $('html, body').animate({
                scrollTop: $(section).offset().top
            }, 600);
        });
    }

    scrollPage('#link-dados-pessoais',  '#dados-pessoais');
    scrollPage('#link-contato',  '#contato');
    scrollPage('#link-qualificacao',  '#qualificacao');
    scrollPage('#link-info-compl',  '#info-compl');
    scrollPage('#link-situacao',  '#situacao');
    scrollPage('#link-formacao',  '#formacao');
    scrollPage('#link-experiencia',  '#experiencia');
    scrollPage('#link-cursos',  '#cursos');
    scrollPage('#link-informatica',  '#informatica');
})