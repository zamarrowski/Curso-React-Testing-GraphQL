import React from 'react'
import { getHobbies } from './helpers'
import Child from './Child'

export default class Form extends React.Component {

  state = {
    name: '',
    firstName: '',
    description: '',
    gender: '',
    age: 0,
    country: '',
    province: '',
    hobbies: []
  }

  handleChange = (e) => {
    let name = e.target.name
    let value = e.target.value

    if (e.target.type === 'checkbox') {
      value = getHobbies(e.target.value, e.target.checked, this.state.hobbies)
    }

    this.setState({
      [name]: value
    })

  }

  handleSubmit = e => {
    console.log(this.state)
    e.preventDefault()
  }

  holi = data => {
    console.log(data)
  }

  render() {
    return (
      <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
        <input type="text" name="name" />
        <input type="text" name="firstName" />
        <textarea name="description" />
        <input type="radio" name="gender" value="male" /> Male
        <input type="radio" name="gender" value="female" /> Female
        <input type="number" name="age" />
        <select name="country">
          <option>Select one</option>
          <option value="spain">Spain</option>
          <option value="usa">USA</option>
        </select>
        {this.state.country === 'spain' && (
          <select name="province">
            <option>Select one</option>
            <option value="guadalajara">Guadalajara</option>
            <option value="madrid">Madrid</option>
          </select>
        )}
        <label>
          <input name="hobbies" type="checkbox" value="Games" />
          Games
        </label>
        <label>
          <input name="hobbies" type="checkbox" value="Football" />
          Football
        </label>
        <label>
          <input name="hobbies" type="checkbox" value="Basketball" />
          Basketball
        </label>
        <label>
          <input name="hobbies" type="checkbox" value="Art" />
          Art
        </label>
        <Child holi={this.holi} />
        <button type="submit">Enviar</button>
      </form>
    )
  }

}