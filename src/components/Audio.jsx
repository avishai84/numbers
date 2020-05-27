import React, { useState, useEffect, memo, useCallback } from "react";
import AudioPlayer from "./AudioPlayer";
// import Lang from './Lang';

const Audio = ({ announcedNumber }) => {
  const [playName, setPlayName] = useState("");
  const [
    passStringNumberToAudioPlayer,
    setStringNumberToAudioPlayer,
  ] = useState("");
  const [isPlayerReady, setIsPlayerReady] = useState(false);

  const convertToString = () => {
    console.log("audio");
    const array = [
      ["zero"],
      ["one"],
      ["two"],
      ["three"],
      ["four"],
      ["five"],
      ["six"],
      ["seven"],
      ["eight"],
      ["nine"],
      ["ten"],
    ];

    const returnedSound = array[playName];
    console.log("returnedSound: ", returnedSound);
    if (returnedSound !== undefined) {
      return setStringNumberToAudioPlayer(returnedSound[0]);
    }
  };

  useEffect(() => {
    announcedNumber !== undefined && setPlayName(announcedNumber);
    announcedNumber !== undefined && convertToString();
  });

  useEffect(() => {
    setIsPlayerReady(true);
  }, [playName, passStringNumberToAudioPlayer]);

  return (
    <>
      {isPlayerReady && (
        <>
          <div className="audioPlayer">
            <AudioPlayer
              playList={passStringNumberToAudioPlayer}
              playListArray={playName}
            />
          </div>
        </>
      )}
    </>
  );
};
export default memo(Audio);
