import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) return null;

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div className="ui segment">
      <div className="ui embed">
        <iframe src={videoSrc} title="video player" />
      </div>
      <div className="ui header">{video.snippet.title}</div>
      <p>{video.snippet.description}</p>
    </div>
  );
};

export default VideoDetail;
