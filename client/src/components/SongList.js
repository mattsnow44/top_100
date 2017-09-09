import React from 'react'
import Song from './Song'

const SongList = ({ songs, editSong, deleteSong }) => (
  <div className='row'>
    { songs.map( song =>
      <Song
        key={song.id}
        {...song}
        editSong={editSong}
        deleteSong={deleteSong}
      />
    )
  }
  </div>
)

export default SongList;
