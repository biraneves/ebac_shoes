$(document).ready(() => {
    $('div.menu-hamburguer').on('click', () => {
        $('nav').slideToggle();
    });

    $('nav a').on('click', function () {
        const destino = $($(this).attr('href'));

        $('html').animate({
            scrollTop: destino.offset().top - 120,
        }, 500);
    });

    $('button').on('click', function () {
        const produto = $(this).parent().find('h3').text();

        alert(`Você adicionou ${produto} ao carrinho!`);
    });
});