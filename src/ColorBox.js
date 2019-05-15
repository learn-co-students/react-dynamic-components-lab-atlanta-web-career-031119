import React, { Component } from 'react';

export default class ColorBox extends Component {

  render() {
    let newValue = this.props.opacity
    if (newValue >= .2) {
              newValue -= .1
    return (
      <div className="color-box" style={{ opacity: newValue+.1}}>
        <ColorBox opacity={newValue} /></div>

      )
}
   else {
      return null
        }
  }
}

