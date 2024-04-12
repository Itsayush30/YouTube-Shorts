import { useEffect, useState } from "react";
import "./App.css";
import Video from "./component/Video";
import ytVideos from "./component/Videos";

function App() {
  const [video, setVideo] = useState([]);
  useEffect(() => {
    setVideo(ytVideos);
  }, []);
  return (
    <div className="app">
      <div className="app__videos">
        {video.map((vid) => (
          <Video
            like={vid.like}
            dislike={vid.dislike}
            id={vid.id}
            comment={vid.comment}
            share={vid.share}
            src={vid.url}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
