import React, { useEffect, useState } from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";

function GifListContainer() {
  const [gifs, setGifs] = useState([])

  useEffect(() => {
    fetch('https://api.giphy.com/v1/gifs/search?q=cow&api_key=gAiYh9cOxs6wQMLBfmkd3Vb82LRezEP2&rating=g')
      .then(res => res.json())
      .then(gifData => {
        let picData = []
        for(let i=0; i < 4; i++) {
          picData.push(gifData.data[i].images.original.url)
        }
        setGifs(picData);
      })
  }, [])

  return (
    <>
      <GifList gifs={gifs}/>
      <GifSearch setGifs={setGifs}/>
    </>
    
  )
}

export default GifListContainer