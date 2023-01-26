import React from "react";

function GifList ({searchData}) {

    return (
        <div>
            <ul>
                {searchData.map((obj, index)=> <li key={index} ><img src={obj.url} alt="image"/></li>)}
            </ul>
        </div>
    )

}

export default GifList