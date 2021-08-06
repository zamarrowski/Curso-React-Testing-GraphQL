# Testing Library

Si usamos create-react-app ya viene por defecto instalado en cualquier otro caso haríamos:

```
npm install --save-dev @testing-library/react
```

## Ejemplos

1. Obtener un elemento

```js
test('Should return hola',  ()  => {
  render(<Greeting>hola</Greeting>)
  expect(screen.getByRole('heading')).toHaveTextContent('hola')
})
```

2. Obtener varios elementos

```js
  render(
    <>
      <Greeting>hola</Greeting>
      <Greeting>adios</Greeting>
    </>
  )
  expect(screen.getAllByRole('heading')[0]).toHaveTextContent('hola')
  expect(screen.getAllByRole('heading')[1]).toHaveTextContent('adios')
```

3. Probar eventos

```js
const fn = jest.fn()
  render(<Button onClick={fn}>click me</Button>)
  fireEvent.click(screen.getByRole('button'))
  expect(fn).toHaveBeenCalled()
  expect(fn).toHaveBeenCalledTimes(1)
  expect(fn).toHaveBeenCalledWith('mi valor')
```


## Queries

* ByLabelText find by label or aria-label text content
  * getByLabelText
  * queryByLabelText
  * getAllByLabelText
  * queryAllByLabelText
  * findByLabelText
  * findAllByLabelText

* ByPlaceholderText find by input placeholder value
  * getByPlaceholderText
  * queryByPlaceholderText
  * getAllByPlaceholderText
  * queryAllByPlaceholderText
  * findByPlaceholderText
  * findAllByPlaceholderText

* ByText find by element text content
  * getByText
  * queryByText
  * getAllByText
  * queryAllByText
  * findByText
  * findAllByText

* ByDisplayValue find by form element current value
  * getByDisplayValue
  * queryByDisplayValue
  * getAllByDisplayValue
  * queryAllByDisplayValue
  * findByDisplayValue
  * findAllByDisplayValue

* ByAltText find by img alt attribute
  * getByAltText
  * queryByAltText
  * getAllByAltText
  * queryAllByAltText
  * findByAltText
  * findAllByAltText

* ByTitle find by title attribute or svg title tag
  * getByTitle
  * queryByTitle
  * getAllByTitle
  * queryAllByTitle
  * findByTitle
  * findAllByTitle

* ByRole find by aria role
  * getByRole
  * queryByRole
  * getAllByRole
  * queryAllByRole
  * findByRole
  * findAllByRole

* ByTestId find by data-testid attribute
  * getByTestId
  * queryByTestId
  * getAllByTestId
  * queryAllByTestId
  * findByTestId
  * findAllByTestId


## Buscar textos

```js
// Matching a string:
getByText('Hello World') // full string match
getByText('llo Worl', {exact: false}) // substring match
getByText('hello world', {exact: false}) // ignore case

// Matching a regex:
getByText(/World/) // substring match
getByText(/world/i) // substring match, ignore case
getByText(/^hello world$/i) // full string match, ignore case
getByText(/Hello W?oRlD/i) // advanced regex

// Matching with a custom function:
getByText((content, element) => content.startsWith('Hello'))
```

## Ejercicios

1. Con el ejercicio de la tienda que hemos hecho en clases anteriores testear:
    1. El componente `ShopPage.js`
    2. El componente `ProductsList.js`

2. Testear el componente `src/clase4/Select.js`
```js
import React from 'react'

export default props =>
  <select value={props.value} onChange={props.onChange}>
    {props.items.map(val => (
      <option value={val}>{val}</option>
    ))}
  </select>
```

[<- Volver al índice](./../README.md)