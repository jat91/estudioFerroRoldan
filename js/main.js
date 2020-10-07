$(document).ready(function () {
    //MENSAJE WHATSAPP
    $('#btn_whatsapp').floatingWhatsApp({
        phone: '5491121631030',
        popupMessage: 'En qué podemos ayudarte?',
        showPopup: false,
        headerTitle: 'Estudio Ferro&Roldan',
        zIndex: 3,
        position: 'right'
    });

    // DETECTAR POSICION PARA ACTIVE DE MENU
    $(window).scroll(function () {
        var Scroll = $(window).scrollTop() + 1,
            SectionOneOffset = $('#header').offset().top,
            SectionTwoOffset = $('#servicios').offset().top-45,
            SectionThreeOffset = $('#nosotros').offset().top-45,
            SectionFourOffset = $('#contacto').offset().top-45;

        if (Scroll >= SectionOneOffset) { 
            $("#link_inicio").addClass("active");
        } else {
            $("#link_inicio").removeClass("active");
        }
        if (Scroll >= SectionTwoOffset) {
            $("#link_servicios").addClass("active"); 
            $("#link_inicio").removeClass("active");
            $("#link_nosotros").removeClass("active");
            $("#link_contacto").removeClass("active");
        } else { 
            $("#link_servicios").removeClass("active");
        }
        if (Scroll >= SectionThreeOffset) {
            $("#link_nosotros").addClass("active"); 
            $("#link_inicio").removeClass("active");
            $("#link_servicios").removeClass("active");
            $("#link_contacto").removeClass("active");
        } else { 
            $("#link_nosotros").removeClass("active");
        }
        if (Scroll >= SectionFourOffset) {
            $("#link_contacto").addClass("active"); 
            $("#link_inicio").removeClass("active");
            $("#link_nosotros").removeClass("active");
            $("#link_servicios").removeClass("active");
        } else { 
            $("#link_contacto").removeClass("active");
        }
    });
});

//FUNCION IR A DESDE EL MENU
function irA(id) {
    var element = document.getElementById(id);
    var collapse = document.getElementById('navbarSupportedContent');
    const offset = 45;
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    collapse.classList.remove('show');
    window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
    });
};



