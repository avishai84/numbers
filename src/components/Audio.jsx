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
    console.log("convertToString is running");
    const array = [
      ["zero", "zerosafari"],
      ["one", "onesafari"],
      ["two", "twosafari"],
      ["three", "threesafari"],
      ["four", "foursafari"],
      ["five", "fivesafari"],
      ["six", "sixsafari"],
      ["seven", "sevensafari"],
      ["eight", "eightsafari"],
      ["nine", "ninesafari"],
      ["ten", "tensafari"],
    ];

    const isBrowserTypeExist =
      browser !== null || browser !== undefined || browser !== ""
        ? true
        : false;

    if (isBrowserTypeExist) {
      if (browser === "safari") {
        const safariArray = array[playName];
        if (safariArray !== undefined) {
          return setStringNumberToAudioPlayer(safariArray[1]);
        }
      } else {
        const otherBrowsersArray = array[playName];
        if (otherBrowsersArray !== undefined) {
          return setStringNumberToAudioPlayer(otherBrowsersArray[0]);
        }
      }
    }
  };

  useEffect(() => {
    setPlayName(announcedNumber);
    convertToString();
  });

  useEffect(() => {
    setPlayName(announcedNumber);
    convertToString();
    console.log("playName: playName ", playName);
  }, [playName]);

  useEffect(() => {
    console.log("AUDIO: announcedNumber ", passStringNumberToAudioPlayer);
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
