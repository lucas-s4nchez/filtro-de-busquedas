//Variables
//contenedor donde se muestran los resultados de busqueda
const $resultado = document.querySelector("#resultado");

const marca = document.querySelector("#marca");
const precioMinimo = document.querySelector("#minimo");
const precioMaximo = document.querySelector("#maximo");
const genero = document.querySelector("#genero");
const color = document.querySelector("#color");
const year = document.querySelector("#year");
//para llenar el select de años
const maxYears = new Date().getFullYear();
const minYears = 2017;

//Objeto con los parametros de busqueda
const datosBusqueda = {
  marca: "",
  year: "",
  minimo: "",
  maximo: "",
  genero: "",
  color: "",
};

//Eventos
document.addEventListener("DOMContentLoaded", () => {
  //Imprime las zapatillas en el html
  generarProductos(stockProductos);
  //Llena el select de años
  llenarSelect();
});
marca.addEventListener("change", (e) => {
  //se le asigna a datosBusqueda.marca el valor del option que elejimos
  datosBusqueda.marca = e.target.value;
  filtrarProductos();
});
year.addEventListener("change", (e) => {
  //se le asigna a datosBusqueda.year el valor numerico del option que elejimos
  datosBusqueda.year = parseInt(e.target.value);
  filtrarProductos();
});
precioMinimo.addEventListener("change", (e) => {
  datosBusqueda.minimo = e.target.value;
  filtrarProductos();
});
precioMaximo.addEventListener("change", (e) => {
  datosBusqueda.maximo = e.target.value;
  filtrarProductos();
});
genero.addEventListener("change", (e) => {
  datosBusqueda.genero = e.target.value;
  filtrarProductos();
});
color.addEventListener("change", (e) => {
  datosBusqueda.color = e.target.value;
  filtrarProductos();
});

//Funciones
const borrarHtmlPrevio = () => {
  while ($resultado.firstChild) {
    $resultado.removeChild($resultado.firstChild);
  }
};
const generarProductos = (productos) => {
  borrarHtmlPrevio();
  productos.forEach((producto) => {
    const div = document.createElement("div");
    div.classList.add(
      "w-full",
      "p-6",
      "bg-white",
      "rounded-xl",
      "shadow-xl",
      "md:w-80",
      "bg-gray-100"
    );
    div.innerHTML = `
  <img src="${producto.imagen}" alt='Imagen del Producto'>
  <div class='mt-4 info-producto'>
    <div class='flex text-xs justify-between text-gray-700 font-bold' meta-info>
    <p class='marca'>${producto.marca}</p>
    <p class='genero'>${producto.genero}</p>
    </div>
    <h2 class="text-2xl font-bold text-gray-700">${producto.nombre}</h2>
    <p class=' year text-sm font-bold text-gray-700' >${producto.year}</p>
    <p class='text-xs font-bold text-gray-700'>Color: <span class='color' >${producto.color}</span></p>
    <p class="block text-xl font-semibold text-gray-700 mb-4">$ <span class='precio'>${producto.precio}</span> </p>
    <a href="./productDetails.html?id=${producto.id}" class="py-2 px-4 bg-blue-400 rounded text-white">
      Ver Detalles
    </a>
  </div>
  `;
    $resultado.appendChild(div);
  });
};
const llenarSelect = () => {
  for (let i = maxYears; i >= minYears; i--) {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = i;
    year.appendChild(option);
  }
};
const filtrarProductos = () => {
  const productosFiltrados = stockProductos
    .filter(filtrarMarca)
    .filter(filtrarYaer)
    .filter(filtrarMinimo)
    .filter(filtrarMaximo)
    .filter(filtrarGenero)
    .filter(filtrarColor);

  if (productosFiltrados.length) {
    //si el array no está vacio:
    generarProductos(productosFiltrados);
  } else {
    //de lo contrario:
    sinResultados();
  }
};
const sinResultados = () => {
  borrarHtmlPrevio();
  const noResultados = document.createElement("div");
  noResultados.classList.add(
    "font-bold",
    "text-xl",
    "bg-red-600",
    "text-center",
    "py-2",
    "px-1",
    "my-0",
    "w-full"
  );
  noResultados.textContent = "No encontramos las zapatilas que buscas 😢😭";
  $resultado.appendChild(noResultados);
};
//El parametro "producto" seria cada producto del array stockProductos
const filtrarMarca = (producto) => {
  if (datosBusqueda.marca) {
    return producto.marca === datosBusqueda.marca;
  }
  return producto;
};
const filtrarYaer = (producto) => {
  if (datosBusqueda.year) {
    return producto.year === datosBusqueda.year;
  }
  return producto;
};
const filtrarMinimo = (producto) => {
  if (datosBusqueda.minimo) {
    //si el precio es mayor o igual al minimo
    return producto.precio >= datosBusqueda.minimo;
  }
  return producto;
};
const filtrarMaximo = (producto) => {
  if (datosBusqueda.maximo) {
    //si el precio es mayor o igual al minimo
    return producto.precio <= datosBusqueda.maximo;
  }
  return producto;
};
const filtrarGenero = (producto) => {
  if (datosBusqueda.genero) {
    return producto.genero === datosBusqueda.genero;
  }
  return producto;
};
const filtrarColor = (producto) => {
  if (datosBusqueda.color) {
    return producto.color === datosBusqueda.color;
  }
  return producto;
};
