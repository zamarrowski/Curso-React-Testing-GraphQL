# Creando referencias a elementos DOM

Las referencias proporcionan una forma de acceder a los nodos del DOM o a elementos React creados en el método de renderizado.

En un flujo normal en datos de React, las propiedades son la única forma en la que los componentes padres pueden interactuar con sus hijos. Para modificar un hijo, vuelves a renderizarlo con propiedades nuevas. Sin embargo, hay ciertos casos donde necesitarás modificar imperativamente un hijo fuera del flujo de datos típico. El hijo a ser modificado puede ser una instancia de un componente React, o un elemento del DOM. Para ambos casos, React proporciona una via de escape.

## Cuando usar referencias

Existen unos cuantos buenos casos de uso para referencias:

* Controlar enfoques, selección de texto, o reproducción de medios.
* Activar animaciones imperativas.
* Integración con bibliotecas DOM de terceros.

Evita usar referencias en cualquier cosa que pueda ser hecha declarativamente.

Por ejemplo, en lugar de exponer los métodos `open()` y `close()` en un componente Dialog, pasa una propiedad isOpen a este en su lugar.


## Creando referencias

Las referencias son creadas usando `React.createRef()` y agregándolas a elementos de React mediante el atributo `ref`. Las referencias son asignadas comúnmente a una propiedad de instancia cuando un componente es construido, así pueden ser referenciadas por el componente.

```js
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  render() {
    return <div ref={this.myRef} />;
  }
}
```

## Accediendo a referencias

Cuando una referencia es pasada a un elemento en el renderizado, una referencia al nodo pasa a ser accesible en el atributo `current` de la referencia.

```js
const node = this.myRef.current;
```

El valor de la referencia es diferente dependiendo del tipo de nodo:

* Cuando el atributo ref es usado en un elemento HTML, la referencia creada en el constructor con `React.createRef()` recibe el elemento DOM adyacente como su propiedad current.
* Cuando el atributo ref es usado en un componente de clase personalizado, el objeto de la referencia recibe la instancia montada del componente como su atributo current.
* No puedes hacer uso de referencias en componentes de función debido a que no tienen instancias.


## Ejercicios:

1. Crear un pequeño formulario con dos campos de texto. Cuando se le de a enviar obtener los valores de los inputs e imprimirlos en la consola.


[<- Volver al índice](./../README.md)
