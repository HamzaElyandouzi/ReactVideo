import React from 'react'
import Video from "../Video/Video";
import './VideoList.css';

class VideoList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            videos: [
                {video:'http://www.youtube.com/embed/546fs1jT3hA', id: 1},
                {video: 'http://www.youtube.com/embed/6VZOszdySFU' , id: 2},
                {video: 'http://www.youtube.com/embed/9vGJmAcsR-8' , id: 3}
            ],
        };
    }

    render() {
        return(
            <div>
                <Video videos={this.state.videos}/>
            </div>
        )
    }
}

export default VideoList;