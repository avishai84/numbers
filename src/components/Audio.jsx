import React, { useState, useEffect } from "react";
import AudioPlayer from "./AudioPlayer";

const Audio = ({ announcedNumber, browser }) => {
  const [playName, setPlayName] = useState("");
  const [
    passStringNumberToAudioPlayer,
    setStringNumberToAudioPlayer,
  ] = useState("");
  const [isPlayerReady, setIsPlayerReady] = useState(false);

  const convertToString = () => {
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
    if (returnedSound !== undefined) {
      return setStringNumberToAudioPlayer(returnedSound[0]);
    }

  };

  useEffect(() => {
    setPlayName(announcedNumber);
    convertToString();
  });

  useEffect(() => {
    setPlayName(announcedNumber);
    convertToString();
  }, [playName]);

  useEffect(() => {
    setIsPlayerReady(true);
    convertToString();
  }, [passStringNumberToAudioPlayer]);

  return (
    <>
      {isPlayerReady && (
        <AudioPlayer playList={passStringNumberToAudioPlayer} playListArray={playName}/>
      )}
    </>
  );
};
export default Audio;
