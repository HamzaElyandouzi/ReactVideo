import React from 'react';
import Iframe from 'react-iframe'
import './Video.css';

class Video extends React.Component{
    constructor(props){
        super(props);
        this.state={
        }
    }

    render() {
        return(
            <div>
                <Iframe url="http://www.youtube.com/embed/9ax8ZAoiwYQ"
                        width="450px"
                        height="320px"
                        id="myId"
                        className="video"/>
            </div>
        )
    }
}

export default Video;