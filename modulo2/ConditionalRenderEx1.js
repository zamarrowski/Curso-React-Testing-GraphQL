import React from 'react'

class ConditionalRenderEx1 extends React.Component {

  state = {
    isLogged: false
  }

  doLogin = () => {
    this.setState({ isLogged: true })
  }

  render() {
    return (
      <>
        {this.state.isLogged ? <p>Esta pagina solo puedo verla por que estoy logueado</p> : <p>Inicia sesión para ver contenido privado</p>}
        {!this.state.isLogged && <button onClick={this.doLogin}>Login</button>}
      </>
    )
  }

}

export default ConditionalRenderEx1