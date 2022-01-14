import React, { useState } from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

const App = (props) => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const onTermSubmit = (items) => {
    setVideos(items);
    setSelectedVideo(items[0]);
  };

  return (
    <div className="ui container" style={{ marginTop: "10px" }}>
      <SearchBar onTermSubmit={onTermSubmit} />
      <div className="ui grid" style={{ marginTop: "10px" }}>
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
