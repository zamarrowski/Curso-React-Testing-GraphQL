# Jest

![Jest logo](https://cdn.auth0.com/blog/testing-react-with-jest/logo.png)

* Zero config
* Permite snapshots
* Aislados
* API sencilla
* Por defecto con create-react-app
* Coverage

## Common matchers

La forma más sencilla de comprobar el valor de un test es:

```js
test('two plus two is four', () => {
  expect(2 + 2).toBe(4);
});
```

Si queremos comparar objectos deberiamos usar `toEqual` ya que este comprueba cada campo y valor de un objeto o de un array:

```js
test('object assignment', () => {
  const data = {one: 1};
  data['two'] = 2;
  expect(data).toEqual({one: 1, two: 2});
});
```

Hay diferencias entre `toEqual` y `toStrictEqual`:

* Las keys con propiedades undefined son comprobadas, es decir, `{a: undefined, b: 2}` no va a ser igual que `{b: 2}` cuando usas `toStrictEqual`
* Las posiciones ignoradas en un array son comprobadas, es decir, `[, 1]` no va a ser igual que `[undefined, 1]` cuando usas `toStrictEqual`
* Los tipos de objetos son comprobados, es decir, una clase con una propiedad `a` no va a ser igual que un objeto con una propiedad `a`

### Truthiness

Hay veces que en los tests que escribimos tenemos que distinguir entre `null`, `undefined` o `false` para ello existen los siguientes matchers:

* toBeNull
* toBeUndefined
* toBeDefined
* toBeTruthy
* toBeFalsy

### Numbers

Cuando estamos tratando con números hay veces que no solo queremos comprobar que el valor sea igual por lo que tenemos otros matchers:

```js
test('two plus two', () => {
  const value = 2 + 2;
  expect(value).toBeGreaterThan(3);
  expect(value).toBeGreaterThanOrEqual(3.5);
  expect(value).toBeLessThan(5);
  expect(value).toBeLessThanOrEqual(4.5);

  expect(value).toBe(4);
  expect(value).toEqual(4);
});
```

### Strings

Podemos jugar con los strings y ver si pasan una expresión regular:

```js
test('there is no I in team', () => {
  expect('team').not.toMatch(/I/);
});
```

### Arrays

Un test muy común es ver si un array contiene cierto elemento:

```js
const shoppingList = [
  'diapers',
  'kleenex',
  'trash bags',
  'paper towels',
  'beer',
];

test('the shopping list has beer on it', () => {
  expect(shoppingList).toContain('beer');
});
```

### Excepciones

Si una función lanza una excepción podemos comprobarlo:

```js
function compileAndroidCode() {
  throw new Error('you are using the wrong JDK');
}

test('compiling android goes as expected', () => {
  expect(compileAndroidCode).toThrow();
  expect(compileAndroidCode).toThrow('you are using the wrong JDK');
  expect(compileAndroidCode).toThrow(/JDK/);
});
```

## Usando Jest en create-react-app

create-react-app nos lo pone muy fácil ya que no tenemos que configurar nada para empezar a escribir y lanzar tests.

Para escribir un test lo primero que debemos hacer es crear un fichero `nombreDelTest.test.js` y Jest ya sabrá que ese fichero es un fichero de tests y lanzará los tests que escribamos.

Después simplemente debemos empezar a escribir los tests dentro del fichero con la siguiente sintáxis:

```js
//podemos importarnos lo que necesitemos

import sum from './sum'

test("nombre descriptivo del tests", () => {
  //comprobaciones que queramos hacer
  expect(sum(2, 2)).toBe(4)
})
```

Para lanzar los tests debemos ejecutar `yarn test` o `npm test` y lanzará todos los tests que detecte.

## Ejercicios

1. Comprobar que en el array que devuelve la función existe el elemento "blue":
```js
const getColors = () => {
  return ['yellow', 'red', 'blue']
}
```

2. Dado el siguiente código comprobar que el array tiene 2 elementos y que blue no existe:
```js
const getColors = () => {
  return ['yellow', 'red', 'blue']
}

const removeColorFromArray = (array, color) => {
  return array.filter(element => element !== color)
}

const result = removeColorFromArray(getColors(), 'blue')
```

3. Comprobar que la siguiente función devuelve el objeto que debería crear correctamente:

```js
const createUser = (name, age) => ({ name, age })
```

[<- Volver al índice](./../README.md)