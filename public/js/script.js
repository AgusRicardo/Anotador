
let container = document.getElementById('contenedor-ul')
let sinListasCreadas = document.getElementById('sin-listas-creadas');
let nuevaLista = document.getElementById('modal-nueva-lista');
let iconoNuevaLista = document.getElementById('icono-nueva-lista')
let footerSummerHack = document.getElementById('summer-hack');
let divListas = document.getElementById('mostrar-listas')
let listaCreada = document.getElementById('lista-creada')

// Para que cuando presione el boton '+' aparezca la lista
let btnAdd = document.getElementById('add-list').addEventListener('click', function(){ // Creamos una variable y llamamos al id del botón. Le agregamos un addEventListener para que cuando clickee, aparezca y desaparezcan las cosas.
    sinListasCreadas.style.display = 'none';
    nuevaLista.style.display = 'block';
    iconoNuevaLista.style.display = 'none';
    footerSummerHack.style.display = 'flex';
    divListas.style.display = 'none';
    listaCreada.style.display = 'none'
})

// Para que cuando presione el botón 'Back', vuelva para atrás
let btnBack = document.getElementById('btn-back').addEventListener('click', function () {
    divListas.style.display = 'flex';
    nuevaLista.style.display = 'none';
    iconoNuevaLista.style.display = 'flex';
    detallesLista.style.display = 'none';
    footerSummerHack.style.display = 'none';
    listaCreada.style.display = 'block'
})

let btnBack2 = document.getElementById('btn-back2').addEventListener('click', function () {
    divListas.style.display = 'flex';
    nuevaLista.style.display = 'none';
    iconoNuevaLista.style.display = 'flex';
    detallesLista.style.display = 'none';
    footerSummerHack.style.display = 'none';
})

let mostrarLista = document.getElementById('mostrar')
let inputTitle = document.getElementById('text-value')
let inputIcon = document.getElementById('icon-select')
let inputDetalle = document.getElementById('product-descripcion');

// Para que se agreguen <li> a la lista
let addButton = document.getElementById('add').addEventListener('click', function(){ // Creamos una variable y llamamos al id del botón. Le agregamos un addEventListener para que cuando clickee, se active una función.
    inputTitle = document.getElementById('text-value').value;
    inputIcon = document.getElementById('icon-select').value;
    inputDetalle = document.getElementById('product-descripcion').value;
    document.getElementById('text-value').value = '';
    document.getElementById('icon-select').value = './img/iconos/viveres.png';
    document.getElementById('product-descripcion').value = '';
    nuevaLista.style.display = 'none';
    iconoNuevaLista.style.display = 'flex';
    if (inputTitle != '') {
        sinListasCreadas.style.display = 'none';
        divListas.style.display = 'flex';
        footerSummerHack.style.display = 'none';
        listaCreada.style.display = 'block'
        var liText = `<li itemprop="itemListElement" data-producto='${inputTitle}' data-icono='${inputIcon}' data-info='${inputDetalle}'><img src="${inputIcon}" alt="${inputTitle}" class="mostrar-lista-icono">${inputTitle}</li>`
        mostrarLista.innerHTML += liText;
    }else {
        alert('Rellene todos los campos por favor')
        nuevaLista.style.display = 'block';
    }
}); 


// Para que cuando clikee la lista ya creada, me lleve a una despcripción de la misma
let detallesLista = document.getElementById('detalles')

let pantallaListaDetalle = document.getElementById('mostrar').addEventListener('click', function(e) {
    document.getElementById('detalleTitulo').innerHTML = e.target.getAttribute('data-producto')
    document.getElementById('detalleIcono').src = e.target.getAttribute('data-icono')
    document.getElementById('detalleInfo').innerHTML = e.target.getAttribute('data-info')
    detallesLista.style.display = 'block';
    iconoNuevaLista.style.display = 'none';
    divListas.style.display = 'none';
    listaCreada.style.display = 'none';
    footerSummerHack.style.display = 'none';
})
