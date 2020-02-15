import React from 'react';

const VideoDetail = ({video}) => {
    if(!video) {
        return <div className="container">Loading...</div>
    }
    const videoSrc=`https://www.youtube.com/embed/${video.id.videoId}`
    return (
        <div className="container">
            <div className="embed">
            {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/wYMPoFd9Axc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
                <iframe width="100%" height="400px" title="video_player" src={videoSrc} />
            </div>
            <div className="border p-2">
                <h5>{video.snippet.title}</h5>
                <p>{video.snippet.description}</p>
            </div>
        </div>
    )
}

export default VideoDetail