# Enzyme

## Instalar como dependencia de desarrollo

`npm i --save-dev enzyme enzyme-adapter-react-16`

Una vez instalado necesitamos usar el adaptador de enzyme. Lo más fácil es añadirlo en el `src/setupTests.js`

```js
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });
```


## Shallow

* No renderiza los hijos
* Es perfecto si queremos testear solo ese componente
* No pasa por componentDidMount ni por componentDidUpdate

Dado este componente:

```js
import React from 'react'

const Greeting = props => <h1>{props.children}</h1>

export default Greeting
```

Podemos testearlo así:

```js
import React from 'react'
import { shallow } from 'enzyme'

import Greeting from './Greeting'

it('Should renders without errors', () => {
  shallow(<Greeting />)
})

it('Should renders an h1 tag', () => {
  const wrapper = shallow(<Greeting />)
  expect(wrapper.find('h1').length).toBe(1)
})

it('Should renders children when passed', () => {
  const wrapper = shallow(<Greeting>Hola</Greeting>)
  expect(wrapper.contains('Hola')).toBe(true)
})
```

Si el componente fuese así:

```js
import React from 'react'
import Link from './Link'

const Greeting = props => <Link text={props.text}></Link>

export default Greeting
```

El siguiente test fallaría ya que no renderiza todos los hijos:

```js
it('Should renders an h1 tag', () => {
  const wrapper = shallow(<Greeting />)
  expect(wrapper.find('a').length).toBe(1)
})
```

Para hacer funcionar ese test deberíamos usar `mount`.

## Mount

* Renderiza todos los hijos
* Suele tardar mas en ejecutarse el test
* Pasa por todos los ciclos de vida


```js
it('Should renders an h1 tag', () => {
  const wrapper = mount(<Greeting />)
  expect(wrapper.find('a').length).toBe(1)
})
```

## Render

* Solo pasa por el render pero renderiza todos los hijos

## ¿Qué usar en cada caso?

1. Siempre empezar con `shallow`
2. Si tienes que testear el componentDidMount o el componentDidUpdate usar `mount`
3. Si quieres testear algo del ciclo de vida usa `mount`
4. Si quieres testear todos los hijos del componente pero te da igual los métodos del ciclo de vida usa `render`

## Métodos más usados

1. `at(index)` devuelve un wrapper del nodo dada la posición pasada como parámetro

```js
const wrapper = shallow(<Greeting>Hola</Greeting>)
expect(wrapper.find('h1').at(0).contains('Hola')).toBe(true)
expect(wrapper.find('h1').at(1).contains('adios')).toBe(true)
```

2. `childAt(index)` devuelve un wrapper del hijo especificado por parámetro

```js
const wrapper = shallow(<ToDoList items={items} />);
expect(wrapper.find('ul').childAt(0).type()).to.equal('li');
```

3. `children()` devuelve un wrapper con todos los hijos del wrapper

```js
const wrapper = shallow(<ToDoList items={items} />);
expect(wrapper.find('ul').children()).to.have.lengthOf(items.length);
```

4. `contains(nodeOrNodes) bool`

```js
const wrapper = shallow(<Greeting>Hola</Greeting>)
expect(wrapper.contains('Hola')).toBe(true)
```

5. `html() string` devuelve el html de un nodo como string

```js
const wrapper = shallow(<Greeting>Hola</Greeting>)
expect(wrapper.html()).toBe("<h1>Hola</h1>")
```

6. `props() object` devuelve las props que se le pasan al *componente raiz del wrapper*

```js
const wrapper = shallow(<Greeting text="hola" otraProp="nope" />,)
console.log(wrapper.props()) //{ text: 'hola' }
expect(wrapper.props().text).toBe("hola")
```

7. `setProps` es útil para testear el comportamiento del componente cuando cambian sus props

```js
const wrapper = shallow(<Greeting text="hola" otraProp="nope" />,)
expect(wrapper.props().text).toBe("hola")
wrapper.setProps({ text: 'adios' })
expect(wrapper.props().text).toBe("adios")
```

8. `instance() ReactComponent` devuelve la instancia de la clase y podemos acceder a sus propiedades

```js
const wrapper = shallow(<CounterText />,)
expect(wrapper.find('div').text()).toBe('')
wrapper.instance().increment()
expect(wrapper.find('div').text()).toBe('a')
```

9. `state() object` devuelve un objeto con los datos del estado

```js
const wrapper = shallow(<CounterText />,)
expect(wrapper.state().text).toBe('')
wrapper.instance().increment()
expect(wrapper.state().text).toBe('a')
```

10. `simulate(event, data)` simula un evento en el nodo raíz del wrapper

```js
const wrapper = shallow(<CounterText />,)
wrapper.find('button').at(0).simulate('click')
expect(wrapper.state().text).toBe('a')
```

## Testeando una clase

Teniendo este componente:

```js
import React, { Component } from 'react'
import Title from './Title'
import Button from './Button'

class Counter extends Component {

  state = {
    count: 0,
  }

  handleChange = action => {
    this.setState(prevState =>
      ({ count: action === 'increment' ? prevState.count + 1 : prevState.count - 1 })
      )
    }

  render() {
    return (
      <>
        <Title text={this.state.count} />
        <Button onPress={() => this.handleChange('increment')} label="Increment"/>
        <Button onPress={() => this.handleChange('decrement')} label="Decrement"/>
      </>
    )
  }
}

export default Counter
```

Podríamos escribir los siguientes tests:

```js
import React from 'react'
import { shallow, mount } from 'enzyme'
import Counter from './Counter'

test('Should renders without errors', () => {
  shallow(<Counter />)
})

test('Should start in 0', () => {
  const wrapper = shallow(<Counter />)
  expect(wrapper.state().count).toBe(0)
})

test('Should change count to 1', () => {
  const wrapper = shallow(<Counter />)
  wrapper.instance().handleChange('increment')
  expect(wrapper.state().count).toBe(1)
})

test('Should change count to -1', () => {
  const wrapper = shallow(<Counter />)
  wrapper.instance().handleChange('decrement')
  expect(wrapper.state().count).toBe(-1)
})

test('Should call to increment when click on button', () => {
  const wrapper = mount(<Counter />)
  wrapper.find('button').at(0).simulate('click')
  expect(wrapper.state().count).toBe(1)
  wrapper.find('button').at(1).simulate('click')
  expect(wrapper.state().count).toBe(0)
})

test('Should render count', () => {
  const wrapper = mount(<Counter />)
  wrapper.find('button').at(0).simulate('click')
  expect(wrapper.find('h1').text()).toBe('1')
})
```

## Testeando componentes funcionales

Dado el siguiente componente:

```js
import React, { Component, useState } from 'react'
import Title from './Title'
import Button from './Button'

const Counter = props => {

  const [count, setCount] = useState(0)

  const handleChange = action => {
    setCount(prevCount => action === 'increment' ? prevCount + 1 : prevCount - 1)
  }

  return (
    <>
      <Title text={count} />
      <Button onPress={() => handleChange('increment')} label="Increment"/>
      <Button onPress={() => handleChange('decrement')} label="Decrement"/>
    </>
  )

}

export default Counter
```

Podríamos escribir los siguientes tests:

```js
import React from 'react'
import { shallow, mount } from 'enzyme'
import Counter from './Counter'

test('Should renders without errors', () => {
  shallow(<Counter />)
})

test('Should start in 0', () => {
  const wrapper = mount(<Counter />)
  expect(wrapper.find('h1').text()).toBe('0')
})

test('Should call to increment when click on button', () => {
  const wrapper = mount(<Counter />)
  wrapper.find('button').at(0).simulate('click')
  expect(wrapper.find('h1').text()).toBe('1')
  wrapper.find('button').at(1).simulate('click')
  expect(wrapper.find('h1').text()).toBe('0')
})
```

## Testeando funciones que se pasan por props

Si tuviésemos un botón como este:

```js
import React from 'react'

export default props =>
  <button onClick={props.onPress}>{props.label}</button>
```

Podríamos testearlo así:

```js
import React from 'react'
import { shallow } from 'enzyme'
import Button from './Button'

test('Should renders without errors', () => {
  shallow(<Button />)
})

test('Should renders a button with label', () => {
  const wrapper = shallow(<Button label="click me!" />)
  expect(wrapper.find('button').text()).toBe('click me!')
})

test('Should call to function when click in the button', () => {
  const pressFn = jest.fn()
  const wrapper = shallow(<Button label="click me!" onPress={pressFn} />)
  wrapper.find('button').simulate('click')
  expect(pressFn).toHaveBeenCalled()
})
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