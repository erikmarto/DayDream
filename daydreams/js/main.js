/* var app = angular.module("app",[]);

app.controller("metodoPago", function($scope){
    $scope.mensaje = "Metodo de pagodfdhfhhhte";
});

var metodoPago={
    tarjeta = false,
    paypal = false,
  } */

$('#metodoPago').on('change', function () {
    $('.formulario').hide();
    $('#' + this.value).show();
});

/* $('.pago').hide();
$('.pagar').click(function (e){
    $('.pago').show();
    e.preventDefault();
}); */

$('input[type="submit"]').click(function (e) {
    let precio = "";
    var producto = $('input[name="packFiesta"]:checked').val();
    
    switch(producto){
        case 'bronce':
        precio = "99";
        $('#productoCarrito').replaceWith('<h6 class="my-0" id="productoCarrito">Has seleccionado el pack fiesta ' + producto + '.</h6>');
        $('#descProducto').replaceWith('<div id="descProducto"><ul class="list-unstyled mt-3 mb-4"><li>PACK DE ALTAVOCES</li><li>REPRODUCTOR</li></ul></div>');
        $('.precioCarrito').replaceWith('<strong class="precioCarrito">'+ precio + ' €</strong>');
        break;
        case 'plata':
        precio = "199";
        $('#productoCarrito').replaceWith('<h6 class="my-0" id="productoCarrito">Has seleccionado el pack fiesta ' + producto + '.</h6>');
        $('#descProducto').replaceWith('<div id="descProducto"><ul class="list-unstyled mt-3 mb-4"><li>PACK DE ALTAVOCES</li><li>REPRODUCTOR</li><li>EFECTOS DE ILUMINACIÓN</li></ul></div>');
        $('.precioCarrito').replaceWith('<strong class="precioCarrito">'+ precio + ' €</strong>');
        break;
        case 'oro':
        precio = "380";
        $('#productoCarrito').replaceWith('<h6 class="my-0" id="productoCarrito">Has seleccionado el pack fiesta ' + producto + '.</h6>');
        $('#descProducto').replaceWith('<div id="descProducto"><ul class="list-unstyled mt-3 mb-4"><li>PACK DE ALTAVOCES</li><li>REPRODUCTOR DJ</li><li>EFECTOS DE ILUMINACIÓN</li><li>MÁQUINA DE HUMO</li></ul></div>');
        $('.precioCarrito').replaceWith('<strong class="precioCarrito">'+ precio + ' €</strong>');
        break;
        
    }
    e.preventDefault();
});
