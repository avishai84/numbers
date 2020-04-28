import React, { useState, useEffect, useRef } from "react";
import ReactAudioPlayer from "react-audio-player";
import Sounds from "../soundSrc/Sounds";
let buildSoundPath;
// TODO: Fix file if Safari
const AudioPlayer = ({ playList, playListArray }) => {
  const [playListItem, setPlayList] = useState("");
  const [playListArrayNum, setPlayListArray] = useState("");

  useEffect(() => {
    setPlayListArray(playListArray);
    setPlayList(playList);
  });

  useEffect(() => {
    setPlayList(playList);
    setPlayListArray(playListArray);
  }, [playListItem]);


if (Sounds !== undefined) {

  if (playListArrayNum !== undefined && playListArrayNum !== null && playListArrayNum.length > 0) {
  
    if (playListItem !== undefined && playListItem !== null && playListItem.length > 0) {

      buildSoundPath = null ?? Sounds[playListArrayNum][playListItem];

    }
  }
}

  return (
    <>
      <ReactAudioPlayer
      src={buildSoundPath}
      autoPlay={true}
      controls
      loop
      />
    </>
  );
};

export default AudioPlayer;
