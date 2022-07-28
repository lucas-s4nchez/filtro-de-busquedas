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

//Funciones

const generarProductos = () => {
  stockProductos.forEach((producto) => {
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
    <p class="block text-xl font-semibold text-gray-700 mb-2">$ <span class='precio'>${producto.precio}</span> </p>
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
  const filtrado = stockProductos.filter(filtrarMarca);
  console.log(filtrado);
};
const filtrarMarca = (item) => {
  if (datosBusqueda.marca) {
    return item.marca === datosBusqueda.marca;
  }
  return item;
};
//Eventos
document.addEventListener("DOMContentLoaded", () => {
  //Imprime las zapatillas en el html
  generarProductos();
  //Llena el select de años
  llenarSelect();
});
// eventos para los select de busqueda
marca.addEventListener("change", (e) => {
  //se le asigna a datosBusqueda.marca el valor del option que elejimos
  datosBusqueda.marca = e.target.value;
  filtrarProductos();
});
year.addEventListener("change", (e) => {
  datosBusqueda.year = e.target.value;
  console.log(datosBusqueda);
});
genero.addEventListener("change", (e) => {
  datosBusqueda.genero = e.target.value;
  console.log(datosBusqueda);
});
precioMinimo.addEventListener("change", (e) => {
  datosBusqueda.minimo = e.target.value;
  console.log(datosBusqueda);
});
precioMaximo.addEventListener("change", (e) => {
  datosBusqueda.maximo = e.target.value;
  console.log(datosBusqueda);
});
color.addEventListener("change", (e) => {
  datosBusqueda.color = e.target.value;
  console.log(datosBusqueda);
});
