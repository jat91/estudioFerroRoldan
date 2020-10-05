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
}