// src/components/VideoPlayer.js
import React from 'react';

const VideoPlayer = ({ video }) => {
    return (
        <div>
            <iframe
                src={`https://www.youtube.com/embed/${video.id}`}
                title={video.title}
                frameBorder="0"
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default VideoPlayer;
