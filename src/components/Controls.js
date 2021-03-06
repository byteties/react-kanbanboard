import React, { Component } from 'react';

class Controls extends Component {

  render() {
    return (
      <div style={{ padding: '1rem', background: '#D6F3FF' }}>
        <h1>Controls</h1>
        <div style={{ display: 'flex', marginTop: '1rem' }}>
          <input
            readOnly
            placeholder={this.props.children? this.props.children :"Selected task name"}
            style={{ fontSize: '1rem' }}
            data-testid="selected-task-field"
          />
          <button
            style={{ marginLeft: '1rem' }}
            disabled={this.props.children === ''}
            data-testid="move-back-btn"
            onClick={this.props.back}
          >
            Move back
          </button>
          <button
            style={{ marginLeft: '1rem' }}
            disabled={this.props.children === ''}
            data-testid="move-forward-btn"
            onClick={this.props.forward}
          >
            Move forward
          </button>
        </div>
      </div>
    )
  }
}

export default Controls;
