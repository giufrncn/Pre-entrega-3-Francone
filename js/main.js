const boton1 = document.querySelector(".boton1");
const boton2 = document.querySelector(".boton2");
const boton3 = document.querySelector(".boton3");
const btnCleaner = document.querySelector(".btnCleaner");
const inventario = document.querySelector(".inventario");



boton1 && boton1.addEventListener("click", function () { location.href = "./pages/inventario.html"; });


boton2 && boton2.addEventListener("click", function () { location.href = "./pages/form.html"; });

boton3 && boton3.addEventListener("click", function () { location.href = "./pages/pedidos.html"; });


btnCleaner && btnCleaner.addEventListener("click", function () {
  localStorage.clear();
  location.reload()
});

/*
if (boton1) {
  boton1.addEventListener("click", function () {
    location.href = "./pages/inventario.html";
  });
}

if (boton2) {
  boton2.addEventListener("click", function () {
    location.href = "./pages/form.html";
  });
}

if (boton3) {
  boton3.addEventListener("click", function () {
    location.href = "./pages/pedidos.html";
  });
}

if (btnCleaner) {
  btnCleaner.addEventListener("click", function () {

    localStorage.clear();
    location.reload()
    
  });
} */

const botonEnviar = document.querySelector('.botonEnviar');
const infoPedidos = document.querySelector('.infoPedidos');

botonEnviar && botonEnviar.addEventListener('click', function (event) {
  event.preventDefault();
  guardarArrayEnLocalStorage();
  Swal.fire({
    title: '¡Genial! ',
    text: 'Pedido ingresado a la base de datos',
    icon: 'success',
    confirmButtonText: 'Listo'
  })
});

function guardarArrayEnLocalStorage() {
  const pedido = {
    nombre: document.querySelector('#cliente').value,
    mixes: document.querySelector('#mixes').value,
    medioDePago: document.querySelector('#medioDePago').value,
    valorTotal: document.querySelector('#valorTotal').value,
    whatsapp: document.querySelector('#whatsapp').value
  };

  let arrayPedidos = [...JSON.parse(localStorage.getItem('pedidos') || '[]'), pedido];

  localStorage.setItem('pedidos', JSON.stringify(arrayPedidos));

  document.querySelectorAll('#cliente, #mixes, #medioDePago, #valorTotal, #whatsapp').forEach(input => input.value = '');
}

const content = document.querySelector('.content');

function mostrarPedidos() {
  const pedidoContent = localStorage.getItem('pedidos');
  const arrayPedidos = JSON.parse(pedidoContent);

  if (arrayPedidos && arrayPedidos.length > 0) {

    let newTr = '';

    for (let i = 0; i < arrayPedidos.length; i++) {
      const pedido = arrayPedidos[i];

      newTr += `
        <tr>
          <td>${pedido.nombre}</td>
          <td>${pedido.mixes}</td>
          <td>${pedido.medioDePago}</td>
          <td>${pedido.valorTotal}</td>
          <td>${pedido.whatsapp}</td>
        </tr>`;
    }

    content.innerHTML = newTr;
  }
}

mostrarPedidos();


const imagenes = ['IMG_1.JPG', 'IMG_2.JPG', 'IMG_3.JPG', 'IMG_4.JPG', 'IMG_5.JPG', 'IMG_6.JPG', 'IMG_7.JPG', 'IMG_8.JPG', 'IMG_9.JPG', 'IMG_10.JPG'];
let i = 0;

function slider() {
  if (i >= imagenes.length) {
    i = 0;
  }
  const imagen = document.getElementById("imagen");
  imagen.src = 'img/' + imagenes[i];
  i++;
}

const carrusel = setInterval(slider, 1500);



const contenedorHora = document.querySelector(".contenedorHora");
const URLhora = "http://worldtimeapi.org/api/timezone/America/Argentina/Buenos_Aires";

fetch(URLhora) 
  .then(response => response.json())
  .then((hora) => {
    mostrarHora(hora);
  })
  .catch((error) => {
    console.error(error);
  });

function mostrarHora(hora) {
  const contenedorHora = document.querySelector(".contenedorHora");
  const horaActual = hora.datetime;
  contenedorHora.textContent = horaActual;
}

