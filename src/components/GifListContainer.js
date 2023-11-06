import React from "react";
import { useEffect, useState } from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";

export default function GifListContainer() {
  const [data, setData] = useState(null);
  const [searchTerm, setSearchTerm] = useState(""); // Fixed the typo here

  useEffect(() => {
    if (searchTerm) {
      fetch(
        `https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=puBkEO6k2VWmp1HbvpusLSFxXQaA4KEc`
      )
        .then((r) => r.json())
        .then((gif) => setData(gif))
        .catch((error) => console.error("Error fetching data:", error));
    }
  }, [searchTerm]);

  const handleSubmit = (searchValue) => {
    setSearchTerm(searchValue);
  };

  return (
    <div>
      {data &&
        data.data.map((item) => (
          <div key={item.id}>
            <img src={item.images.original.url} alt={item.title} />
          </div>
        ))}
      <GifList data={data} />
      <GifSearch onSearchSubmit={handleSubmit} />
    </div>
  );
}
