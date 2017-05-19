import React from 'react'

function GifList(props) {
  const gifEls = props.gifs.map( gif =>  <li><img src={gif.images.fixed_height.url} /></li> )

  return (
    <ul>
      { gifEls }
    </ul>
  )
}

export default GifList
