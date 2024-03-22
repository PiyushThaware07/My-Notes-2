import React, { PureComponent } from 'react'

export default class OnePure extends PureComponent {
  render() {
    return (
      <div>
        Hello, {this.props.name}!
      </div>
    )
  }
}
