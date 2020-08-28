import React from 'react'

function GifList(props) {
    let gifArray = props.gifs.map((gifObj) => <li><img src={gifObj.images.original.url} /></li>)
    console.log("gif array: ", gifArray)
    return (
        <ul>
            {gifArray}
        </ul>
    )
}

export default GifList