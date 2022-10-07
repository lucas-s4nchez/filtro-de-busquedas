const container = document.getElementById("product-container");

window.addEventListener("load", () => {
  const url = new URLSearchParams(window.location.search);
  const product = parseInt(url.get("id"));
  findProduct(product);
});
function findProduct(id) {
  const searchedProduct = stockProductos.find((product) => product.id === id);
  console.log(searchedProduct);
  renderProduct(searchedProduct);
}

function renderProduct(product) {
  const { descripcion, imagen, nombre, marca, precio, color, genero, year } =
    product;
  container.innerHTML = `
  <div class="w-full p-6 rounded-xl shadow-xl md:w-80 my-8 bg-gray-100">
    <img src="${imagen}" alt='Imagen del Producto'>
    <div class='mt-4 info-producto'>
      <div class='flex text-xs justify-between text-gray-700 font-bold' meta-info>
      <p class='marca'>${marca}</p>
      <p class='genero'>${genero}</p>
      </div>
      <h2 class="text-2xl font-bold text-gray-700">${nombre}</h2>
      <p class=' year text-sm font-bold text-gray-700' >${year}</p>
      <p class='text-xs font-bold text-gray-700'>Color: <span class='color' >${color}</span></p>
      <p class="block text-xl font-semibold text-gray-700 mb-4">$ <span class='precio'>${precio}</span> </p>
      <p class="text-gray-700 font-semibold">${descripcion}</p>
    </div>
  </div>
  `;
}
