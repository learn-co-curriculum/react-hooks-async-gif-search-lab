import React from "react";

function GifList ({ gifs }) {
  console.log("Gifs:", gifs);

  const renderGifs = () => {
    return gifs.map(gif => {
      return (
        <li key={gif.id}>
          <img src={gif} alt="Your gif is coming..."/>
        </li>
      )
    })
  }

  return (
    <ul className="col-md-10">
      {renderGifs()}
    </ul>
  )

}

export default GifList
