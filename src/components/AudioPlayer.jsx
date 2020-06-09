import React, { useState, useEffect, useReducer, useContext, memo } from "react";
import ReactAudioPlayer from "react-audio-player";
import Sounds from "../soundSrc/Sounds";
import {LangContext} from '../LangContext';

let buildSoundPath;

const AudioPlayer = ({ playList, playListArray }) => {

  const {locale} = useContext(LangContext); 
  const [playListItem, setPlayList] = useState("");
  const [playListArrayNum, setPlayListArray] = useState("");
  const [autoplay] = useState(true);

  const [audioControl, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "controlsOn":
          const mutedSpeaker = "🎛";
          return (state = { control: true, icon: mutedSpeaker });
        case "controlsOff":
          const speaker = "🎛";
          return (state = { control: false, icon: speaker });

        default:
          return state;
      }
    },
    { control: true, icon: "🎛" }
  );

  useEffect(() => {
    setPlayListArray(playListArray);
    setPlayList(playList);
  }, [playListArray, playList]);

  if (Sounds !== undefined) {
    if (
      playListArrayNum !== undefined &&
      playListArrayNum !== null
    ) {
      if (
        playListItem !== undefined &&
        playListItem !== null &&
        playListItem.length > 0
      ) {
        if(locale){
          buildSoundPath = null ?? Sounds[playListArrayNum]['_'];
        }else{
          buildSoundPath = null ?? Sounds[playListArrayNum][playListItem];
        }
      }
    }
  }
  const controlsOnOff = audioControl.control ? "controlsOff" : "controlsOn";
  return (
    <>
      <div className="controls">
        <span
          onClick={() => dispatch({ type: controlsOnOff })}
          className="iconControls"
        >
          {audioControl.icon} 
        </span>
        <ReactAudioPlayer
          src={buildSoundPath}
          autoPlay={autoplay}
          muted={!autoplay}
          loop
          controls={audioControl.control}
        />
      </div>
      <div className="footer"></div>
    </>
  );
};

export default memo(AudioPlayer);
