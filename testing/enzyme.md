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

### Métodos más usados

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

[<- Volver al índice](./../README.md)