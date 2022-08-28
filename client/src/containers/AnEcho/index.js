import React, { useState, useEffect, useRef } from "react";
import * as S from "./styles";

//containers
import TextLevel from "./TextLevel";

//fooundations
import CamelAndBaby from "@F/AnEcho/CamelAndBaby";
import Malkovich from "@F/AnEcho/Malkovich";
import Cone from "@F/AnEcho/Cone";
import Clock from "@F/AnEcho/Clock";
import Sun from "@F/AnEcho/Sun";

function AnEcho() {
  const [word, setWord] = useState("schumpeterstrasse");

  const [yPos, setYPos] = useState(0);
  const [scale, setScale] = useState(1);

  const startRef = useRef(Date.now());
  const nowRef = useRef(Date.now());
  const thenRef = useRef(Date.now());
  const animationRef = useRef(null);

  const [triggerAnimate, setTriggerAnimate] = useState(false);
  useEffect(() => {
    const testingTimeout = setTimeout(() => {
      startRef.current = Date.now();
      setTriggerAnimate(true);
      animate();
    }, 2000);
    return () => clearTimeout(testingTimeout);
  }, []);

  const [activateCone, setActivateCone] = useState(false);

  function animate() {
    animationRef.current = requestAnimationFrame(animate);
    nowRef.current = Date.now();

    if (nowRef.current - thenRef.current > 3) {
      let time = nowRef.current - startRef.current;
      thenRef.current = Date.now();

      //do with time
      if (time > 6000) {
        setActivateCone(true);
      }
      if (time > 12000) {
        cancelAnimationFrame(animationRef.current);
      }
      animateWord(time);
    }
  }

  const SECONDS = 12;
  function animateWord(t) {
    setYPos(t * (2 / SECONDS));
    setScale(Math.exp(-t * 0.0002) * (0.85 + Math.cos((t * Math.PI) / 1000) * 0.15));
  }

  return (
    <S.StyledAnEcho>
      <S.XAxis />
      <S.YAxis />

      <TextLevel triggerAnimate={triggerAnimate} word={word} />
      <S.WordLevel>
        <S.Word style={{ transform: `translateY(${yPos - 75}px) scale(${scale})` }}>{word}</S.Word>
      </S.WordLevel>

      <S.ShapeLevel>
        {activateCone && <Cone />}
        <CamelAndBaby />
        <Malkovich />
        <Sun />
      </S.ShapeLevel>

      <Clock />
    </S.StyledAnEcho>
  );
}
export default AnEcho;
