import React from 'react';
import './VideoItem.css';

const VideoItem = ({ video, onVideoSelect }) => {
    return (
        <div className="container video-item">
            <div onClick={() => onVideoSelect(video)} className="row">
                <div className="col-md-12">
                    <img src={video.snippet.thumbnails.medium.url} className="img-fluid pt-2" alt=""  alt=""/>
                    {/* <iframe width="420" height="315"
                        src={video.snippet.thumbnails.medium.url}>
                    </iframe> */}
                </div>
                <div className="col-md-12" style={{display: 'flex',alignItems: 'center', justifyContent: 'flex-start',cursor:'pointer'}}>
                    <p>{video.snippet.title}</p>
                </div>
            </div>
        </div>
    );
};
export default VideoItem;