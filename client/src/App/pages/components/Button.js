import React from 'react';

class Button extends React.Component {
  render() {
    return (
      <div className="scoreButton" onClick={this.props.onClick}>
        {this.props.label}
      </div>
    )
  }
}

export default Button;