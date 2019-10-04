# Comprobación dinámica de tipos (PropTypes)

A medida que tu aplicación crece, puedes capturar una gran cantidad de errores con verificación de tipos. Para algunas aplicaciones, puedes usar extensiones de Javascript como Flow o TypeScript para verificar los tipos en tu aplicación. Pero incluso si no usas alguno de ellos, React tiene algunas habilidades de verificación de tipos incorporadas. Para usar verificación de tipos en las props de un componente, puedes asignar la propiedad especial PropTypes:

```js
import PropTypes from 'prop-types';

class Greeting extends React.Component {
  render() {
    return (
      <h1>Hello, {this.props.name}</h1>
    );
  }
}

Greeting.propTypes = {
  name: PropTypes.string
};
```


## PropTypes

Aquí hay un ejemplo que documenta los diferentes tipos de validadores:

```js
import PropTypes from 'prop-types';

MyComponent.propTypes = {
  // Puedes declarar que una propiedad es un tipo específico de JS. Por defecto, estas
  // son todas opcionales.
  optionalArray: PropTypes.array,
  optionalBool: PropTypes.bool,
  optionalFunc: PropTypes.func,
  optionalNumber: PropTypes.number,
  optionalObject: PropTypes.object,
  optionalString: PropTypes.string,
  optionalSymbol: PropTypes.symbol,

  // Cualquier cosa que sea interpretada: números, cadenas, elementos o un array
  // (o fragment) que contengan estos tipos.
  optionalNode: PropTypes.node,

  // Un elemento de React
  optionalElement: PropTypes.element,

  // Un tipo de elemento React (ej. MyComponent).
  optionalElementType: PropTypes.elementType,

  // Además puedes declarar que una prop es una instancia de una clase. Este usa
  // el operador instanceof de JS.
  optionalMessage: PropTypes.instanceOf(Message),

  // Puedes asegurar que una prop esta limitada a valores específicos si se
  // considera como enum.
  optionalEnum: PropTypes.oneOf(['News', 'Photos']),

  // Un objeto que puede ser de diferentes tipos
  optionalUnion: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.instanceOf(Message)
  ]),

  // Un array de determinado tipo
  optionalArrayOf: PropTypes.arrayOf(PropTypes.number),

  // Un objeto con valores de propiedad de determinado tipo
  optionalObjectOf: PropTypes.objectOf(PropTypes.number),

  // Un objeto que tenga determinada estructura
  optionalObjectWithShape: PropTypes.shape({
    color: PropTypes.string,
    fontSize: PropTypes.number
  }),

  // Un objeto con advertencias sobre propiedades adicionales
  optionalObjectWithStrictShape: PropTypes.exact({
    name: PropTypes.string,
    quantity: PropTypes.number
  }),

  // Puedes encadenar cualquiera de los anteriores con `isRequired` para asegurar
  // que se muestre una advertencia si la prop no se suministra.
  requiredFunc: PropTypes.func.isRequired,

  // Un valor de cualquier tipo
  requiredAny: PropTypes.any.isRequired,

  // También puedes suministrar un validador personalizado. Debe retornar un objeto Error
  // si la validación falla. No uses `console.warn` o throw, porque no va a funcionar en
  // `oneOfType`
  customProp: function(props, propName, componentName) {
    if (!/matchme/.test(props[propName])) {
      return new Error(
        'Invalid prop `' + propName + '` supplied to' +
        ' `' + componentName + '`. Validation failed.'
      );
    }
  },

  // También puedes suministrar un validador personalizado a `arrayOf` y `objectOf`.
  // Debe retornar un objeto Error si la validación falla. El validador se llamará
  // por cada key en el array o el objeto. Los primeros dos arguments del validador
  // son el array o el objeto, y la key del elemento actual.
  customArrayProp: PropTypes.arrayOf(function(propValue, key, componentName, location, propFullName) {
    if (!/matchme/.test(propValue[key])) {
      return new Error(
        'Invalid prop `' + propFullName + '` supplied to' +
        ' `' + componentName + '`. Validation failed.'
      );
    }
  })
};
```

## Valores por defecto de props

Puedes definir los valores por defecto de tus props al asignar la propiedad especial defaultProps:

```js
class Greeting extends React.Component {
  render() {
    return (
      <h1>Hello, {this.props.name}</h1>
    );
  }
}

// Especifica los valores por defecto de props:
Greeting.defaultProps = {
  name: 'Stranger'
};

// Renderiza "Hello, Stranger":
ReactDOM.render(
  <Greeting />,
  document.getElementById('example')
);
```

## Ejercicios:

1. Crear un componente que se llame ShowServerConfig. Debe validar lo siguiente:
  * La config que se le pasa por props debe tener la siguiente estructura:
      - minConnections: boolean
      - maxConnections: boolean
      - restartAlways: boolean
  * El environment solo puede ser dev, play o live
  * SSL debe ser obligatorio si el entorno es live.


[<- Volver al índice](./../README.md)
