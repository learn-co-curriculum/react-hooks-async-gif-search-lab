import React from 'react'

function GifList({ gifs }) {
  return (
    <div>
        {gifs.map(gif => <img key={gif.url} src={gif.url} alt="gif"/>)}
    </div>
  )
}

export default GifList