// Elementos del DOM
const productForm = document.getElementById("product-form");
const productList = document.getElementById("product-list");
const editModal = document.getElementById("edit-modal");
const deleteModal = document.getElementById("delete-modal");
const editForm = document.getElementById("edit-form");
const closeButtons = document.querySelectorAll(
  ".close, .cancel-btn, #cancel-delete"
);

// Estado de la aplicación
let products = [];
let currentProductId = null;

// Funciones de utilidad
function saveToLocalStorage() {
  try {
    const productsToSave = JSON.stringify(products);
    localStorage.setItem("products", productsToSave);
    console.log("Productos guardados:", productsToSave);
  } catch (error) {
    console.error("Error al guardar en localStorage:", error);
  }
}

function loadFromLocalStorage() {
  try {
    const savedProducts = localStorage.getItem("products");
    console.log("Productos cargados:", savedProducts);
    if (savedProducts) {
      products = JSON.parse(savedProducts);
      console.log("Productos parseados:", products);
    }
  } catch (error) {
    console.error("Error al cargar desde localStorage:", error);
    products = [];
  }
}

function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

function createProductCard(product) {
  const productCard = document.createElement("div");
  productCard.className = "card";
  productCard.dataset.id = product.id;

  productCard.innerHTML = `
        <div class="card-body">
            <img src="${product.image}" alt="${product.name}" style="width: 176px; height: 168px;">
            <div class="card-header">
                <h5>${product.name}</h5>
            </div>
            <div class="card-footer">
                <p style="flex: 1;">$ ${product.price}</p>
                <div class="action-buttons">
                    <button class="action-button edit-button">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="action-button delete-button">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        </div>
    `;

  return productCard;
}

function updateProductList() {
  productList.innerHTML = "";
  if (products.length === 0) {
    productList.innerHTML = "<p>No se han agregado productos!</p>";
    return;
  }

  products.forEach((product) => {
    productList.appendChild(createProductCard(product));
  });
}

// Event Listeners
productForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const product = {
    id: generateId(),
    name: document.getElementById("product-name").value,
    price: document.getElementById("product-price").value,
    image: document.getElementById("product-image").value,
  };

  products.push(product);
  saveToLocalStorage();
  updateProductList();
  productForm.reset();
});

productList.addEventListener("click", (e) => {
  const card = e.target.closest(".card");
  if (!card) return;

  const productId = card.dataset.id;
  const product = products.find((p) => p.id === productId);

  if (e.target.closest(".edit-button")) {
    currentProductId = productId;
    document.getElementById("edit-name").value = product.name;
    document.getElementById("edit-price").value = product.price;
    document.getElementById("edit-image").value = product.image;
    editModal.style.display = "block";
  } else if (e.target.closest(".delete-button")) {
    currentProductId = productId;
    deleteModal.style.display = "block";
  }
});

editForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const productIndex = products.findIndex((p) => p.id === currentProductId);
  if (productIndex !== -1) {
    products[productIndex] = {
      ...products[productIndex],
      name: document.getElementById("edit-name").value,
      price: document.getElementById("edit-price").value,
      image: document.getElementById("edit-image").value,
    };

    saveToLocalStorage();
    updateProductList();
    editModal.style.display = "none";
  }
});

document.getElementById("confirm-delete").addEventListener("click", () => {
  products = products.filter((p) => p.id !== currentProductId);
  saveToLocalStorage();
  updateProductList();
  deleteModal.style.display = "none";
});

// Cerrar modales
closeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    editModal.style.display = "none";
    deleteModal.style.display = "none";
  });
});

// Cerrar modales al hacer clic fuera
window.addEventListener("click", (e) => {
  if (e.target === editModal) editModal.style.display = "none";
  if (e.target === deleteModal) deleteModal.style.display = "none";
});

// Inicializar la aplicación
function initializeApp() {
  loadFromLocalStorage();
  updateProductList();
}

// Asegurarse de que el DOM esté completamente cargado
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeApp);
} else {
  initializeApp();
}
