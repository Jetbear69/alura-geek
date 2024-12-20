const productForm = document.getElementById("product-form");
const productList = document.getElementById("product-list");

productForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("product-name").value;
    const price = document.getElementById("product-price").value;
    const image = document.getElementById("product-image").value;

    const productCard = document.createElement("div");
    productCard.className = "card";

    productCard.innerHTML = `
    <div class="card-body">
        <img src="${image}" alt="${name}" style="width: 176px; height: 168px;">
        <div class="card-header">
            <h5>${name}</h5>
        </div>
        <div class="card-footer">
            <p style="flex: 1;">$ ${price}</p>
            <img src="./assets/img/trash-icon.png" alt="Eliminar" class="trash-icon">
        </div>
    </div>
`;

    productList.appendChild(productCard);
    productForm.reset();

    // Elimina el mensaje "No se han agregado productos" si existe
    const emptyMessage = productList.querySelector("p");
    if (emptyMessage && emptyMessage.parentNode === productList) {
        productList.removeChild(emptyMessage);
    }
});

productList.addEventListener("click", (e) => {
    if (e.target.classList.contains("trash-icon")) {
        e.target.parentElement.parentElement.parentElement.remove();

        // Mostrar mensaje si no hay productos
        if (!productList.querySelector(".card")) {
            productList.innerHTML = "<p>No se han agregado productos!</p>";
        }
    }
});
