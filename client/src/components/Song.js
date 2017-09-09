import React from 'react';

const Song = ({ id, title, editSong, deleteSong }) => (
  <div className='col s12'>
    <div className='col m8'>
      {title}
    </div>
    <div className='col m2'>
      <button
        id= {`song-${id}`}
        onClick={() => editSong(id)}
      >
      Edit Song
      </button>
    </div>
    <div className='col m2'>
      <button onClick={() => deleteSong(id)}>
      Delete Song
      </button>
    </div>
  </div>
)

export default Song;
