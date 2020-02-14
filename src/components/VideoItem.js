import React from 'react';
import './VideoItem.css';

const VideoItem = ({ video }) => {
    return (
        <div className="container video-item">
            <div className="row">
                <div className="col-md-3">
                    <img src={video.snippet.thumbnails.medium.url} className="img-fluid pt-2" alt="" />
                </div>
                <div className="col-md-9" style={{display: 'flex',alignItems: 'center', justifyContent: 'flex-start'}}>
                    <p>{video.snippet.title}</p>
                </div>
            </div>
        </div>
    );
};
export default VideoItem;