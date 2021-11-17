const $ = (id) => document.getElementById(id)

const ocultarFiltros = () =>{
    $('caja-filtros').classList.toggle('mostrar')
    $('caja-filtros').classList.toggle('ocultar')
    const modeStatus = document.getElementsByClassName('mostrar');
    $('filter-text').textContent = modeStatus.length > 0 ? "Ocultar filtros" : "Mostrar filtros"
}
$('filter-text').addEventListener('click', ocultarFiltros)


/////////////////////////
/// INICIALIZACIONES ///
///////////////////////

const inicializar = () => {
    ocultarFiltros()
}
window.onload = inicializar



/*const chageToImage = () => {
    let sectionImagen = document.getElementById('section-imagen')
    sectionImagen.classList.remove('oculto')

    let aside = document.getElementById('aside')
    console.log(aside)
    aside.style.display='block'

    let sectionTexto = document.getElementById('section-texto')
    sectionTexto.classList.add('oculto')
}

imageToggle.addEventListener('click', chageToImage)

const changeToText = () => {

    let sectionTexto = document.getElementById('section-texto')
    sectionTexto.classList.remove('oculto')
    
    let aside = document.getElementById('aside')
    aside.style.display='block'

    let sectionImagen = document.getElementById('section-imagen')
    sectionImagen.classList.add('oculto')
}
textAsideToggle.addEventListener('click', changeToText) */

//