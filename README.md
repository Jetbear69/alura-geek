# AluraGeek

## Descripción del Proyecto

AluraGeek es una aplicación web que permite a los usuarios agregar, visualizar y eliminar productos. Está diseñada para gestionar una lista de productos con características como nombre, precio e imagen. La aplicación utiliza una base de datos JSON para almacenar los productos y ofrece una interfaz de usuario interactiva para la gestión de estos.

## Tecnologías Utilizadas

- **HTML5**: Para la estructura básica de la aplicación.
- **CSS3**: Para el diseño y la presentación visual de la aplicación.
- **JavaScript (ES6+)**: Para la lógica del cliente y la interacción con la API.
- **JSON Server**: Para simular una API RESTful y manejar la base de datos de productos.
- **Fetch API**: Para realizar solicitudes HTTP a la API.
- **Vercel**: Para el despliegue de la aplicación en la web.

## Características

- **Agregar Productos**: Los usuarios pueden agregar nuevos productos proporcionando un nombre, precio e imagen.
- **Visualizar Productos**: Los productos se muestran en una lista con su imagen, nombre y precio.
- **Eliminar Productos**: Los usuarios pueden eliminar productos de la lista.
- **Persistencia de Datos**: Los productos se almacenan en un archivo `db.json` que actúa como una base de datos.
- **Despliegue en Vercel**: La aplicación está configurada para ser desplegada en Vercel, utilizando JSON Server como una función de servidor.

## Estructura del Proyecto

- **index.html**: Archivo principal que contiene la estructura HTML de la aplicación.
- **styles.css**: Archivo de estilos CSS que define la apariencia de la aplicación.
- **script.js**: Archivo JavaScript que maneja la lógica del cliente, como la adición y eliminación de productos.
- **js/app.js**: Módulo JavaScript que centraliza las solicitudes a la API y renderiza los productos.
- **js/api.js**: Módulo JavaScript que define funciones para interactuar con la API (GET, POST, DELETE).
- **db.json**: Archivo JSON que actúa como base de datos para almacenar los productos.
- **api/server.js**: Archivo que configura JSON Server para ser utilizado como una función de servidor en Vercel.

## Instalación y Configuración

1. **Clonar el Repositorio**: 
   ```bash
   git clone https://github.com/tu-usuario/alurageek.git
   cd alurageek
   ```

2. **Instalar JSON Server**:
   ```bash
   npm install -g json-server
   ```

3. **Iniciar el Servidor JSON**:
   ```bash
   json-server --watch db.json
   ```

4. **Abrir `index.html` en un Navegador**: Simplemente abre el archivo `index.html` en tu navegador para ver la aplicación en acción.

## Uso

- **Agregar un Producto**: Completa el formulario de "Agregar Producto" y presiona "Enviar".
- **Eliminar un Producto**: Haz clic en el icono de la papelera en la tarjeta del producto que deseas eliminar.

## Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue o un pull request para discutir cualquier cambio que desees realizar.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.
