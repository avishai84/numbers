import React, { useState, useEffect, useRef } from "react";
import ReactAudioPlayer from "react-audio-player";
import Sounds from "../soundSrc/Sounds";
let buildSoundPath;
// TODO: Fix file if Safari
const AudioPlayer = ({ playList, playListArray }) => {
  const [playListItem, setPlayList] = useState("");
  const [playListArrayNum, setPlayListArray] = useState("");

  useEffect(() => {
    console.log("useEffect 1 playListItem ", playListItem);
    console.log("useEffect 1 playListArrayNum ", playListArrayNum);
    setPlayListArray(playListArray);
    setPlayList(playList);
  });

  useEffect(() => {
    setPlayList(playList);
    setPlayListArray(playListArray);
    console.log("useEffect 2 playListItem TOTAL", Sounds);
  }, [playListItem]);


if (Sounds !== undefined) {

  if (playListArrayNum !== undefined && playListArrayNum !== null && playListArrayNum.length > 0) {
  
    if (playListItem !== undefined && playListItem !== null && playListItem.length > 0) {

      buildSoundPath = null ?? Sounds[playListArrayNum][playListItem];

    }
  }
}



  //console.log('buildSoundPath: ', buildSoundPath);
  return (
    <>
      <ReactAudioPlayer
      src={buildSoundPath}
      autoPlay={true}
      controls
      loop
            />
      {/* <button onClick={play}>play</button>        */}
      {/* <audio ref={audioRef} loop={'loop'} className="audioPlayer" >
              <source src={oggFile} type="audio/ogg" />
              <source src={mp3File} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio> */}
    </>
  );
};

export default AudioPlayer;
