import React from 'react';
import Iframe from 'react-iframe'
import './Video.css';

const VideoRender = ({videos}) => {

    const VideoList = videos.map(video=>{
        return (
            <div className='video' key={video.id}>
                <div>
                    <Iframe url={video.video}
                            width="450px"
                            height="320px"
                            id="myId"
                            className="video"/>
                </div>
            </div>
        )
    });

    return(
        <div className="videoRender">
            <h1>hello</h1>
            <div className="video">
                {VideoList}

            </div>
        </div>
    )

};

export default VideoRender;