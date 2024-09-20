import React, { useState } from 'react'
import movieTrailer from "movie-trailer";
import ReactPlayer from "react-player"
const Movie_trailer = () => {
    const [video, setVideo] = useState("inception");
    const [videoURL, setVideoUrl] = useState("https://youtu.be/6X8ifedwZDo?si=x_-0_BXCyF6xZXAa")

    const handleSearch = () => {
        movieTrailer(video).then((res) => {
            setVideoUrl(res);
        })
    }
    return (
        <>
            <div className="App">
                <div className="search-box">
                    <label htmlFor="">
                        Search for any movies/shows : {" "}
                    </label>
                    <input type="text" name="" id="" onChange={(e) => setVideo(e.target.value)} />
                    <button onClick={() => { handleSearch() }}>Search</button>
                </div>
                <ReactPlayer url={videoURL} controls={true} />
            </div>
        </>
    )
}

export default Movie_trailer
