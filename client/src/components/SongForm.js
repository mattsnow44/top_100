import React, { Component } from 'react';

class SongForm extends Component {
  state = { title: ''}

  handleChange = (e) => {
    this.setState({ title: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addSong(this.state.title)
    this.setState({ title: '' })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          placeholder='Add A Song'
          required
          value={this.state.title}
          onChange={this.handleChange}
        />
      </form>
    )
  }
}

export default SongForm;
