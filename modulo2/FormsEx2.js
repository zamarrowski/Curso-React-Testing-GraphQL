import React from 'react'

const validText = 'A tope con React'

export default class InputError extends React.Component {

  state = {
    text: ''
  }

  render() {
    return(
      <>
        <input
          type="text"
          value={this.state.text}
          onChange={e => this.setState({ text: e.target.value })}
        />
        {this.state.text !== validText && <p style={{color: 'red'}}>El texto introducido no mola</p>}
      </>
    )
  }
}