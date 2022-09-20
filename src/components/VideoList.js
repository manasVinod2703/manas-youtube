import React from "react";
import VideoItem from "./VideoItem";


const VideoList = ({videos, onVideoSelect}) =>    // directly get the videos passed as props to the component
{   
    const renderedList = videos.map((video) => {
        return <VideoItem key={video.id.videoId} video = {video} onVideoSelect = {onVideoSelect} />;
    })

    return (

          <div className="ui relaxed divided list">{renderedList}</div>
    )
}

export default VideoList