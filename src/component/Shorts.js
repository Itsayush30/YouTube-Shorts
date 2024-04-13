import { Avatar } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import InsertCommentIcon from "@material-ui/icons/InsertComment";
import NearMeIcon from "@material-ui/icons/NearMe";
import React, { useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import "../css/Shorts.css";
import { useDispatch, useSelector } from "react-redux";
import { toggleLike } from "../utils/likeSlice";

function Shorts({ id, src, channel, description, dislike, share, comment }) {
  const [playing, setPlaying] = useState(false);
  const [subs, setSubs] = useState(false);

  const likeState = useSelector((store) => store?.like?.isLike);

  const dispatch = useDispatch();

  const likeToggle = () => {
    dispatch(toggleLike());
  };

  const videoRef = useRef(null);

  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.5,
  });

  const handleVideoPress = () => {
    if (playing) {
      setPlaying(false);
      videoRef.current.pause();
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  const handleSubscribe = () => {
    setSubs(!subs);
  };

  // Pause the video when it goes out of view
  if (!inView && playing) {
    setPlaying(false);
    videoRef.current.pause();
  }

  return (
    <div className="video" ref={ref}>
      <video
        id={id}
        className="video__player"
        onClick={handleVideoPress}
        loop
        ref={videoRef}
        src={src}
      />

      <div className="shortsContainer">
        <div className="shortsVideoTop">
          <div className="shortsVideoTopIcon">
            <ArrowBackIcon />
          </div>
          <div className="shortsVideoTopIcon">
            <MoreVertIcon />
          </div>
        </div>
        <div className="shortsVideoSideIcons">
          <div className="shortsVideoSideIcon">
            <ThumbUpIcon onClick={() => likeToggle()} />
            <p>{likeState ? 1 : 0}</p>
          </div>
          <div className="shortsVideoSideIcon">
            <ThumbDownIcon />
            <p>{dislike}</p>
          </div>
          <div className="shortsVideoSideIcon">
            <InsertCommentIcon />
            <p>{comment}</p>
          </div>

          <div className="shortsVideoSideIcon">
            <NearMeIcon />
            <p>{share}</p>
          </div>
        </div>
        <div className="shortsBottom">
          <div className="shortsDesc">
            <p>{description}</p>
          </div>
          <div className="shortDetails">
            <Avatar
              src={
                "https://avatars.githubusercontent.com/u/90981890?s=400&u=c7b0449b25d66927a9097e6cd9a766252ad506da&v=4"
              }
            />
            <p>{channel}</p>
            <button
              style={{
                background: subs ? "red" : "hsla(0,0%,69.4%,.609)",
              }}
              onClick={handleSubscribe}
            >
              {subs ? "SUBSCRIBED" : "SUBSCRIBE"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shorts;
