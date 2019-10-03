# Gestion de errores

En el pasado, los errores de JavaScript dentro de los componentes solían corromper el estado interno de React y hacían que emitiera errores crípticos en siguientes renderizados. Estos errores siempre eran causados por un error previo en el código de aplicación, pero React no proveía una manera de gestionarlos elegantemente en componentes, y no podía recuperarse de ellos.

Un error de JavaScript en una parte de la interfaz no debería romper toda la aplicación. Para resolver este problema, React 16 introduce el nuevo concepto de “límite de errores”.

Los límites de errores son componentes de React que capturan errores de JavaScript en cualquier parte de su árbol de componentes hijo, registran esos errores, y muestran una interfaz de repuesto en lugar del árbol de componentes que ha fallado. Los límites de errores capturan errores durante el renderizado, en métodos del ciclo de vida, y en constructores de todo el árbol bajo ellos.


```js
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, errorInfo) {
    // También puedes registrar el error en un servicio de reporte de errores
    logErrorToMyService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Puedes renderizar cualquier interfaz de repuesto
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}
```

Luego puedes usarlo como un componente normal:

```js
<ErrorBoundary>
  <MyWidget />
</ErrorBoundary>
```

Los límites de errores funcionan como un bloque catch{} de JavaScript, pero para componentes. Sólo los componentes de clase (class components) pueden ser límites de errores. En la práctica, la mayor parte del tiempo declararás un límite de errores una vez y lo usarás a lo largo de tu aplicación.


## Ejercicios:

1. Crear un contador que cuando el marcador sea 3 levante una excpeción y la capture un componente mostrando un mensaje de error.

[<- Volver al índice](./../README.md)
