const API_URL = "http://localhost:3000/productos";

// Obtener productos (GET)
export const getProductos = async () => {
    try {
        const response = await fetch(API_URL);
        return response.json();
    } catch (error) {
        console.error("Error al obtener los productos:", error);
    }
};

// Crear producto (POST)
export const crearProducto = async (producto) => {
    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(producto)
        });
        return response.json();
    } catch (error) {
        console.error("Error al crear el producto:", error);
    }
};

// Eliminar producto (DELETE)
export const eliminarProducto = async (id) => {
    try {
        await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    } catch (error) {
        console.error("Error al eliminar el producto:", error);
    }
};
