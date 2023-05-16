const boton1 = document.querySelector(".boton1");
const boton2 = document.querySelector(".boton2");
const boton3 = document.querySelector(".boton3");
const btnCleaner = document.querySelector(".btnCleaner");
const inventario = document.querySelector(".inventario");

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
}

const botonEnviar = document.querySelector('.botonEnviar');
const infoPedidos = document.querySelector('.infoPedidos');

if (botonEnviar) {
  botonEnviar.addEventListener('click', function (event) {
    event.preventDefault();

    guardarArrayEnLocalStorage();

  });
}


function guardarArrayEnLocalStorage() {
  const nombre = document.querySelector('#cliente').value;
  const mixes = document.querySelector('#mixes').value;
  const medioDePago = document.querySelector('#medioDePago').value;
  const valorTotal = document.querySelector('#valorTotal').value;
  const whatsapp = document.querySelector('#whatsapp').value;
  
  const pedido = {
    nombre,
    mixes,
    medioDePago,
    valorTotal
  };

  let arrayPedidos = JSON.parse(localStorage.getItem('pedidos')) || [];
  arrayPedidos.push(pedido);

  localStorage.setItem('pedidos', JSON.stringify(arrayPedidos));

  document.querySelector('#cliente').value = '';
  document.querySelector('#mixes').value = '';
  document.querySelector('#medioDePago').value = '';
  document.querySelector('#valorTotal').value = '';
  document.querySelector('#whatsapp').value = '';
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
        </tr>`;
    }
  
    content.innerHTML = newTr;
  }
}

mostrarPedidos();