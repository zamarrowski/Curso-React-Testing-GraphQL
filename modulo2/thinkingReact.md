# Pensando en React

Durante lo que llevamos de curso hemos hecho varios ejercicios en los que intentabamos hacer componentes que se pudieran reutilizar.

Una de las grandes ventaja de React es cómo te hace pensar acerca de la aplicación mientras la construyes. Hay unos pasos que deberíamos seguir para conseguir nuestro objetivo:

1.  Divide la interfaz de usuario en una jerarquía de componentes
2. Crea una versión estática en React
3. Identificar la versión mínima (pero completa) del estado de tu interfaz de usuario
4. Identificar donde debe vivir tu estado
5. Agregar flujo de datos inverso

## Ejercicios

1. Para practicar los pasos anteriormente citados vamos a hacer un carrito de la compra sencillo. Tendremos unos productos fuera del carrito y podremos:
    * Añadir productos
    * Borrar productos
    * Mostrar el precio unico de cada producto
    * Mostrar el precio total del carrito
    * Modificar las unidades de producto en el carrito
    * Canjear un codigo de descuento: `SAVE10` que restará un 10% al precio total
    * Si es un código erroneo mostrar un error
    * **BONUS:** Cuando cierre el navegador y vuelva a entrar debería de mostrar el carrito como estaba la última vez.


[<- Volver al índice](./../README.md)
