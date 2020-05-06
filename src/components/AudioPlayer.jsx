import React, { useState, useEffect, useReducer } from "react";
import ReactAudioPlayer from "react-audio-player";
import Sounds from "../soundSrc/Sounds";
let buildSoundPath;
const AudioPlayer = ({ playList, playListArray }) => {
  const [playListItem, setPlayList] = useState("");
  const [playListArrayNum, setPlayListArray] = useState("");
  const [audioControl, dispatch] = useReducer((state, action) => {
      switch(action.type){
        case 'controlsOn':
          const mutedSpeaker = '🔇';
          return state = {control: true, icon: mutedSpeaker};
        case 'controlsOff':
          const speaker = '🔊';
          return state = {control: false, icon: speaker};
        
         default: return state;  
      }
  }, {control: true, icon: '🔇'});

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
  const controlsOnOff = audioControl.control ? 'controlsOff' : 'controlsOn';

  return (
    <>
      <div className="controls">
        <span onClick={() => dispatch({'type' : controlsOnOff})} className="iconControls" >{audioControl.icon}</span>:
        <ReactAudioPlayer
        src={buildSoundPath}
        autoPlay={true}
        loop
        controls={audioControl.control}
        />
      </div>
    </>
  );
};

export default AudioPlayer;
