// Centraliza las requisiciones
const API_URL = "http://localhost:3000/productos";

// Método GET
export async function fetchProducts() {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error("Error al obtener los productos");
    return await response.json();
  } catch (error) {
    console.error(error);
  }
}

// Método POST
export async function addProduct(product) {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    });
    return response.ok;
  } catch (error) {
    console.error(error);
  }
}

// Método DELETE
export async function deleteProduct(id) {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });
    return response.ok;
  } catch (error) {
    console.error(error);
  }
}

// Renderizado de productos
document.addEventListener("DOMContentLoaded", async () => {
  const productList = document.querySelector("#product-list");
  const products = await fetchProducts();

  if (!products || products.length === 0) {
    productList.innerHTML = "<p>No se han agregado productos!</p>";
    return;
  }

  productList.innerHTML = "";
  products.forEach((product) => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <div class="card-body">
        <img src="${product.imagen}" alt="${product.nombre}" style="width: 176px; height: 168px;">
        <div class="card-header">
          <h5>${product.nombre}</h5>
        </div>
        <div class="card-footer">
          <p>$ ${product.precio}</p>
          <img src="assets/img/trash-icon.png" alt="Eliminar" class="trash-icon" data-id="${product.id}">
        </div>
      </div>
    `;

    const trashIcon = card.querySelector(".trash-icon");
    trashIcon.addEventListener("click", async () => {
      const isDeleted = await deleteProduct(product.id);
      if (isDeleted) card.remove();
    });

    productList.appendChild(card);
  });
});
