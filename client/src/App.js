import React, { Component } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import { Button, Header, Image, Modal } from 'semantic-ui-react'

import SongForm from './components/SongForm';
import SongList from './components/SongList';


class App extends Component {
  state = { songs: [] }

  componentDidMount() {
    axios.get('/api/songs/')
      .then( (res) => this.setState({ songs: res.data }))
  }

  addSong = (title) => {
    let song = { title }
    axios.post('api/songs', song)
      .then( res => {
        const { songs } = this.state;
        this.setState({ songs: [...songs, song]})
      })
  }

  editSong() {
    return (
      <div class='ui active modal'></div>
    )
  }

  updateSong() {

  }

  deleteSong = (id) => {
    axios.delete(`/api/songs/${id}`)
      .then( () => {
        const { songs } = this.state;
        this.setState({ songs: songs.filter( t => t.id !== id )})
      })
  }

  render() {
    return (
      <div className='container'>
        <SongForm addSong={this.addSong}/>
        <SongList
          songs={this.state.songs}
          editSong={this.editSong}
          deleteSong={this.deleteSong}
        />
      </div>
    );
  }
}

export default App;
