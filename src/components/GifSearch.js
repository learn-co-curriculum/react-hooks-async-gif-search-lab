import React, { useEffect, useState } from "react";

function GifSearch ({submitSearch}) {
    const [qSearch, setQSearch] = useState("");
    
function handleChange(e){
    setQSearch(e.target.value)
    
}
function handleSubmit(e) {
    e.preventDefault()
    submitSearch(qSearch)

}
    return (
        
        <div className="search-bar-container">
            <form onSubmit={handleSubmit}>
                <input type="text" name="search" value={qSearch} placeholder="Search Giphy" onChange={handleChange}/>
                <button type="submit" >Search</button>
            </form>
        </div>
    )
    
}

export default GifSearch