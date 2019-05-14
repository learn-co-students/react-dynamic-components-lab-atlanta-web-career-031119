import React, { Component } from 'react';

export default class ColorBox extends Component {
  
  render() {
    let opac = this.props.opacity
    if (opac >= 0.2) {
      return (
        <div className="color-box" style={{opacity: opac}}>
        <ColorBox opacity={opac - 0.1} />
          {/* your conditional code here! */}
        </div>
      )
    } else {
      return null
    }
  }
}
{/* //    <div className="color-box" style={{opacity: this.props.opacity}}>
//      {this.props.opacity >= 0.2 ? <ColorBox opacity={this.props.opacity - 0.1} /> : null}
//    </div> */}
