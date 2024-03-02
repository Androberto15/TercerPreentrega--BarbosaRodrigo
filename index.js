//NAVBAR
document.addEventListener('DOMContentLoaded', function() {
    const navbarToggle = document.getElementById('navbar-toggle');
    const navbarMenu = document.getElementById('navbar-menu');
  
    navbarToggle.addEventListener('click', function() {
      if (navbarMenu.style.display === 'none' || navbarMenu.style.display === '') {
        navbarMenu.style.display = 'flex';
      } else {
        navbarMenu.style.display = 'none';
      }
    });
  });
  


//Jumbotron
//JUMBOTROn



const jumbotronDiv = document.getElementById("jumbotron");
  
function createJumbotron(title, description) {
  const jumbotronContent = `
    <div class="jumbotron-inner">
      <h1>${title}</h1>
      <p>${description}</p>
    </div>
  `;
  jumbotronDiv.innerHTML = jumbotronContent;
}

// Llamada a la función para crear el jumbotron con los datos deseados
const jumbotronTitle = "Bienvenido";
const jumbotronDescription = "Jumbotron";
const jumbotronImage = "https://placehold.co/900x900";
jumbotron.classList.add("jumbotron");
createJumbotron(jumbotronTitle, jumbotronDescription, jumbotronImage, jumbotronDiv);



//NAVBAR
document.addEventListener('DOMContentLoaded', function() {
    const navbarToggle = document.getElementById('navbar-toggle');
    const navbarMenu = document.getElementById('navbar-menu');
  
    navbarToggle.addEventListener('click', function() {
      if (navbarMenu.style.display === 'none' || navbarMenu.style.display === '') {
        navbarMenu.style.display = 'block';
      } else {
        navbarMenu.style.display = 'none';
      }
    });
  });
  






 // imagen: "https://placehold.co/200x200"

//PRODUCTOS
document.addEventListener('DOMContentLoaded', function() {
    const productos = [

        {
          id: 1,
          nombre: "Cafe1",
          precio: 1000,
          imagen: "https://placehold.co/200x200"
        },
        {
          id: 2,
          nombre: "Cafe2",
          precio: 1500,
          imagen: "https://placehold.co/200x200"
        },
        {
          id: 3,
          nombre: "Café3",
          precio: 750,
          imagen: "https://placehold.co/200x200"
        },
        {
          id: 4,
          nombre: "Café4",
          precio: 900,
          imagen: "https://placehold.co/200x200"
        },
        {
          id: 5,
          nombre: "Café 5",
          precio: 350,
          imagen: "https://placehold.co/200x200"
        },
        {
          id: 6,
          nombre: "Café 6",
          precio: 875,
          imagen: "https://placehold.co/200x200"
        }
      ];
    



    

    const contenedorProductos = document.getElementById('productos');



    productos.forEach(producto => {
        const divProducto = document.createElement('div');
        divProducto.classList.add('producto');

        const imagen = document.createElement('img');
        imagen.src = producto.imagen;
        imagen.alt = producto.nombre;

        const nombrePrecio = document.createElement('p');
        nombrePrecio.textContent = `${producto.nombre} - $${producto.precio}`;

        

        const botonAdd = document.createElement('button');
        botonAdd.classList.add('btn-add');
        botonAdd.setAttribute('id', 'producto_' + producto.id); // ID 
        botonAdd.setAttribute('data-producto', producto.nombre);
        botonAdd.setAttribute('data-precio', producto.precio);
        botonAdd.innerHTML = '<i class="fas fa-cart-plus"></i> Añadir al carro';
        botonAdd.addEventListener('click', addToCart);

        botonAdd.addEventListener('click', function() {
          Toastify({
              text: 'Producto añadido al carro: ' + producto.nombre,
              duration: 1000, // 
              gravity: 'top', // Posición del mensaj
              backgroundColor: 'linear-gradient(to right, #00b09b, #96c93d)', 
              stopOnFocus: true, // Detener el conteo cuando se hace clic en el mensaje
          }).showToast();
      });
      



        divProducto.appendChild(imagen);
        divProducto.appendChild(nombrePrecio);
        divProducto.appendChild(botonAdd);

        contenedorProductos.appendChild(divProducto);
        
    });



    //Funcion buscar elementos:: NO LO PUEDO HACER ANDAR AUN :@, si me podes ayudar lo agradeceria

 /*   const botonBuscar = document.getElementById('botonBuscar');
    botonBuscar.addEventListener('click', buscarProductos);

    function buscarProductos() {
        const busqueda = document.getElementById('busqueda').value.trim().toLowerCase();
        const resultados = productos.filter(producto => producto.nombre.toLowerCase().includes(busqueda));
        mostrarResultados(resultados);
    }

    function mostrarResultados(resultados) {
        const resultadosDiv = document.getElementById('resultados');
        resultadosDiv.innerHTML = '';

        resultados.forEach(producto => {
            const productoDiv = document.createElement('div');
            productoDiv.innerHTML = `
                <h3>${producto.nombre}</h3>
                <p>Precio: ${producto.precio}</p>
                <img src="${producto.imagen}" alt="${producto.nombre}">
            `;
            resultadosDiv.appendChild(productoDiv);
        });
    }

*/

const toastify = document.getElementById('botonBuscar');



document.getElementById('toastify').addEventListener('click', function() {
  Toastify({
      text: "Todavía no logro hacer andar el buscador",
      duration: 2000,
      newWindow: true,
      close: true,
      gravity: "top", 
      position: "right", 
      backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)", 
      stopOnFocus: true,
  }).showToast();
});




    

    function addToCart(event) {
        const producto = event.target.getAttribute('data-producto');
        const precio = parseFloat(event.target.getAttribute('data-precio'));

        // Obtener productos del localStorage
        let productosEnCarrito = JSON.parse(localStorage.getItem('productosEnCarrito')) || [];

        // Verificar si el producto ya está en el carrito
        let productoExistente = productosEnCarrito.find(item => item.producto === producto);

        if (productoExistente) {
            productoExistente.cantidad += 1;
        } else {
            productosEnCarrito.push({ producto: producto, precio: precio, cantidad: 1 });
        }

        // Guardar productos en el localStorage
        localStorage.setItem('productosEnCarrito', JSON.stringify(productosEnCarrito));

        actualizarCarrito();
    }

    function actualizarCarrito() {
        const listaCarrito = document.getElementById('lista-carrito');
        listaCarrito.innerHTML = '';

        let totalCompra = 0;

        let productosEnCarrito = JSON.parse(localStorage.getItem('productosEnCarrito')) || [];

        productosEnCarrito.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.producto} - Cantidad: ${item.cantidad} - Precio total: $${item.precio * item.cantidad}`;

            const botonEliminar = document.createElement('button');

            botonEliminar.innerHTML = '<i class="fas fa-trash-alt"></i> Eliminar';
            botonEliminar.addEventListener('click', () => eliminarProducto(item.producto));
            li.appendChild(botonEliminar);

            listaCarrito.appendChild(li);

            totalCompra += item.precio * item.cantidad;



            const toastify = document.getElementById
        });





        //  párrafo del total de la compra
let totalParrafo = document.getElementById('total-compra');

// Si el párrafo no existe, lo crea
if (!totalParrafo) {
    totalParrafo = document.createElement('p');
    totalParrafo.id = 'total-compra';
    document.getElementById('carrito').appendChild(totalParrafo);

    // Agregar botón "Finalizar compra" solo si no existe
    const botonFinalizarCompra = document.createElement('button');
    botonFinalizarCompra.textContent = 'Finalizar compra';
    botonFinalizarCompra.id = 'btn-finalizar-compra'; //  ID 
    botonFinalizarCompra.addEventListener('click', finalizarCompra);
    document.getElementById('carrito').appendChild(botonFinalizarCompra);
}

// Actualizar el contenido del párrafo con el nuevo total de compra
totalParrafo.textContent = `Total: $${totalCompra}`;

// Función para finalizar la compra
function finalizarCompra() {
  Swal.fire({
    icon: "success",
    iconColor: "green",
    title: "Felicitaciones",
    text: "Tu compra está en camino",
    footer: '<img src="https://placehold.co/100x100" alt="">'
  });
}

    }










    function eliminarProducto(nombreProducto) {
        let productosEnCarrito = JSON.parse(localStorage.getItem('productosEnCarrito')) || [];

        // Filtrar los productos para mantener solo aquellos que no coincidan con el nombre del producto a eliminar
        productosEnCarrito = productosEnCarrito.filter(item => item.producto !== nombreProducto);

        // Actualizar el localStorage con la nueva lista de productos
        localStorage.setItem('productosEnCarrito', JSON.stringify(productosEnCarrito));

        // Actualizar el carrito en la interfaz de usuario
        actualizarCarrito();
    }

    actualizarCarrito();





    
});






