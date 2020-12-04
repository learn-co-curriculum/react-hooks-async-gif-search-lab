import React, { useState } from 'react'

function GifSearch({ fetchGIFs }) {

  const [query, setQuery] = useState("")

  function handleSubmit(event) {
    event.preventDefault()
    fetchGIFs(query)
  }

  function handleChange(event) {
    setQuery(event.target.value)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={query} onChange={handleChange} />
      </form>
    </div>
  )

}

export default GifSearch