import React, { useState, useEffect, useRef, useCallback } from "react";
import PropTypes from "prop-types";
import { formatCurrentDateTime } from "@U/functions/format-time";

import VoiceInput from "@/foundations/chat/VoiceInput";
import VoicePlayer from "@/foundations/chat/voice-player/VoicePlayer";

import useInput from "@U/hooks/useInput";

import AAmp3 from "@/static/audio/AA.mp3";
import Amp3 from "@/static/audio/A.mp3";
import Bmp3 from "@/static/audio/B.mp3";
import Cmp3 from "@/static/audio/C.mp3";

import AAogg from "@/static/audio/AA.ogg";
import Aogg from "@/static/audio/A.ogg";
import Bogg from "@/static/audio/B.ogg";
import Cogg from "@/static/audio/C.ogg";

import * as S from "./styles";

const VOICE_INPUTS = [
  {
    type: "profile",
    userName: "Minnie",
    text: "Minnie",
  },
  {
    type: "voice",
    userName: "Minnie",
    blob: Cmp3,
    time: new Date().getHours(),
  },
  {
    type: "time",
    userName: "Minnie",
    text: "1:57PM",
  },
  {
    type: "profile",
    userName: "Me",
    text: "Me",
  },
  {
    type: "voice",
    userName: "Me",
    blob: AAmp3,
    time: new Date().getHours(),
  },
  {
    type: "voice",
    userName: "Me",
    blob: AAmp3,
    time: new Date().getHours(),
  },
  {
    type: "time",
    userName: "Me",
    text: "3:23PM",
  },
  {
    type: "profile",
    userName: "Minnie",
    text: "Minnie",
  },
  {
    type: "voice",
    userName: "Minnie",
    blob: Amp3,
    time: new Date().getHours(),
  },
  {
    type: "voice",
    userName: "Minnie",
    blob: Bmp3,
    time: new Date().getHours(),
  },

  {
    type: "voice",
    userName: "Minnie",
    blob: Cmp3,
    time: new Date().getHours(),
  },
  {
    type: "time",
    userName: "Minnie",
    text: "5:13PM",
  },
];

function ChatInterface1() {
  const [messages, setMessages] = useState(VOICE_INPUTS);

  const { value: chatInput, onChange: onChatInputChange, setValue: setChatInput } = useInput("constinantonple", null);

  const sendData = useCallback(
    (input) => {
      setMessages((msg) => [
        ...msg,
        {
          type: "text",
          userName: "Me",
          blob: msg,
        },
      ]);
    },
    [messages]
  );

  useEffect(() => {
    const lastItem = messages[messages.length - 1];
    if (messages.length > 0 && lastItem.type === "voice") {
      if (messages.length > 1 && messages[messages.length - 2].userName !== lastItem.userName) {
        setMessages((msg) => [
          ...msg.slice(0, -1),
          {
            type: "profile",
            userName: lastItem.userName,
            text: lastItem.userName,
          },
          msg[msg.length - 1],
          {
            type: "time",
            userName: lastItem.userName,
            text: lastItem.time,
          },
        ]);
      } else {
        setMessages((msg) => [
          ...msg.slice(0, -2),
          lastItem,
          {
            type: "time",
            userName: lastItem.userName,
            text: lastItem.time,
          },
        ]);
      }
    }
  }, [messages]);

  const handleNewAudio = useCallback(
    (audio) => {
      if (audio) {
        setMessages((msg) => [
          ...msg,
          {
            type: "voice",
            userName: "Me",
            blob: audio,
            time: formatCurrentDateTime(),
          },
        ]);
      }
    },
    [messages]
  );

  const [currentVoice, setCurrentVoice] = useState(-1);
  const [commandStartVoiceIdx, setCommandStartVoiceIdx] = useState(-1);
  const [commandPauseVoiceIdx, setCommandPauseVoiceIdx] = useState(-1);
  const onVoiceClick = useCallback(
    (voiceIdx) => {
      setCommandPauseVoiceIdx(-1);
      if (voiceIdx !== currentVoice) {
        setCommandPauseVoiceIdx(currentVoice);
        setCurrentVoice(voiceIdx);
      }
    },
    [currentVoice]
  );

  const onVoiceEnd = useCallback(() => {
    if (messages.length > currentVoice + 1) {
      if (messages[currentVoice + 1].type === "voice") {
        setCommandStartVoiceIdx(currentVoice + 1);
      } else if (messages.length > currentVoice + 3 && messages[currentVoice + 3].type === "voice") {
        setCommandStartVoiceIdx(currentVoice + 3);
      }
    }
  }, [messages, currentVoice]);

  const messengerEndRef = useRef(null);

  useEffect(() => {
    if (messengerEndRef) {
      messengerEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, messengerEndRef]);

  return (
    <S.Container>
      <S.ChatHeader>Interface I</S.ChatHeader>
      <S.ChatDisplay>
        {messages.map((msg, i) => {
          return msg.type !== "voice" ? (
            <S.ChatContents leftAlign={msg.userName !== "Me"} isTime={msg.type === "time"}>
              {msg.text}
            </S.ChatContents>
          ) : (
            <VoicePlayer
              interfaceVersion={1}
              key={i}
              voiceIdx={i}
              msg={msg}
              commandPauseVoice={commandPauseVoiceIdx === i ? true : false}
              commandStartVoice={commandStartVoiceIdx === i ? true : false}
              onVoiceClick={onVoiceClick}
              onVoiceEnd={onVoiceEnd}
            />
          );
        })}
        <div ref={messengerEndRef} />
      </S.ChatDisplay>

      <VoiceInput interfaceVersion={1} handleNewAudio={handleNewAudio} />
    </S.Container>
  );
}
export default ChatInterface1;

ChatInterface1.propTypes = {};
