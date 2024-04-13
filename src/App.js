import { useEffect, useState } from "react";
import "./css/App.css";
import Shorts from "./component/Shorts";
import ytVideos from "./Constants.js/Data";
import { Provider } from "react-redux";
import store from "./utils/store";

function App() {
  const [video, setVideo] = useState([]);
  useEffect(() => {
    setVideo(ytVideos);
  }, []);
  return (
    <Provider store={store}>
      <div className="app">
        <div className="app__videos">
          {video.map((vid) => (
            <Shorts
              like={vid.like}
              dislike={vid.dislike}
              id={vid.id}
              description={vid.description}
              comment={vid.comment}
              channel={vid.channel}
              share={vid.share}
              src={vid.url}
            />
          ))}
        </div>
      </div>
    </Provider>
  );
}

export default App;
