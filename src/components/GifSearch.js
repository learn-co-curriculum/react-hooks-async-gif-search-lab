import React, { useState } from "react";

function GifSearch({ setGifs }) {

  const [searchGif, setSearchGif] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch(`https://api.giphy.com/v1/gifs/search?q=${searchGif}&api_key=gAiYh9cOxs6wQMLBfmkd3Vb82LRezEP2&rating=g`)
      .then(res => res.json())
      .then(gifData => {
        let picData = []
        for(let i=0; i < 4; i++) {
          picData.push(gifData.data[i].images.original.url)
        }
        setGifs(picData);
      })    
  }

  const handleChange = (e) => {
    setSearchGif(e.target.value)
  }
  console.log("Search gif:", searchGif);

  return (
    <div className="col-md-2">
      <label>Enter a Search Term:</label>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <input 
            className="form-control"
            type="text"
            value={searchGif}
            onChange={handleChange}
          />
          <break/>
          <button type="submit" className="btn btn-success">Find Gifs</button>
        </div>        
      </form>
    </div>
  )
}

export default GifSearch