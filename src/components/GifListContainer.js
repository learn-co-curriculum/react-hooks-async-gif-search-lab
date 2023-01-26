import React, { useState, useEffect } from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";

function GifListContainer(){
    const [data, setData] = useState([])
    const [search, setSearch] = useState("")
    const apiKey = "yIjt9DFjFntBV245rlqbWTVj4tWmxh6y"

    useEffect(()=>{
        fetch(`https://api.giphy.com/v1/gifs/search?q=${search}&api_key=${apiKey}&rating=g`)
        .then(r=>r.json())
        .then(({data})=> {
            const gifData = data
            .slice(0,3).map((obj)=>({url: obj.images.original.url}))
            setData(gifData)
        })

    },[search])
    console.log(data)
    

    function submitSearch(qsearch) {
        setSearch(qsearch)
    }


    return (
        <div>
            <GifSearch submitSearch={submitSearch}/>
            <GifList searchData={data}/>
        </div>
    )
}

export default GifListContainer