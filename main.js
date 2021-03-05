// Matas Pieczulis

function scrollToId(id) {
    var element = document.getElementById(id);
    const y = element.getBoundingClientRect().top + window.scrollY;
    window.scroll({
    top: y,
    behavior: 'smooth'});
}
