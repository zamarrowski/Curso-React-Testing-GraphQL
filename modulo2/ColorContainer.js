import React from 'react'
import ColorPicker from './ColorPicker'
import TextColor from './TextColor'

class ColorContainer extends React.Component {

  state = {
    color: '#cbcbcb'
  }

  changeColor = e => {
    this.setState({
      color: e.target.value
    })
  }

  render(){
    return(
      <>
        <TextColor color={this.state.color} />
        <ColorPicker changeColor={this.changeColor} />
      </>
    )
  }
}

export default ColorContainer