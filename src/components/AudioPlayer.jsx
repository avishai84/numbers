import React, { useState, useEffect } from "react";
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
  },[playListArray, playList]);

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
      loop
      />
    </>
  );
};

export default AudioPlayer;
