import React, { useEffect, useState } from 'react'
import GifList from './GifList'
import GifSearch from './GifSearch'

function GifListContainer() {
  const [gifs, setGifs] = useState([])

  useEffect(() => {
    fetchGIFs()
  }, [])

  function fetchGIFs(query = "dolphins") {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
      .then(r => r.json())
      .then(({ data }) => {
        const gifs = data.map(gif => ({ url: gif.images.original.url }))
        setGifs(gifs)
      })
  }

  return(
    <div>
      <GifSearch fetchGIFs={fetchGIFs} />
      <GifList gifs={gifs} />
    </div>
  )
}

export default GifListContainer