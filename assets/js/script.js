cantidad = document.querySelector('#cantidad');
preciounitario = document.querySelector('#prize');
precioTotal = document.querySelector('#preciototal');
precioTotal.innerHTML = Number(cantidad.value) * Number(preciounitario.innerHTML)

cantidadTotal = document.querySelector('#cantidadtotal');
cantidadTotal.innerHTML = Number(cantidad.value);

colorChoice = document.querySelector('.circle');
colorChoice.style.backgroundColor = color.value; 