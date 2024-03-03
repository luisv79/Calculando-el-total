let precio = 400000

precioSpan = document.querySelector(".precio-inicial")
precioSpan.innerHTML = precio

let cantidadSpan = document.querySelector(".cantidad");
let totalSpan = document.querySelector(".valor-total");


function cantidadMas() {
    span = document.querySelector('.cantidad')
    cuentaMas = Number(span.innerHTML)
    cuentaMas = cuentaMas + 1
    span.innerHTML = cuentaMas;
    cantidadTotal();
  }

  function cantidadMenos(){
  span = document.querySelector('.cantidad')
  cuentaMenos = Number(span.innerHTML)
  cuentaMenos = cuentaMenos - 1
  span.innerHTML = cuentaMenos
  cantidadTotal();
}

function cantidadTotal() {
    let cantidad = Number(cantidadSpan.innerHTML);
    let total = precio * cantidad;
    totalSpan.innerHTML = total;
}