import styled, { css } from "styled-components";
import { FlexCenterStyle } from "@S/responsive/display";

//fixed size: 2000 X 1400

export const StyledAnEcho = styled.div`
  ${FlexCenterStyle};
  position: relative;
  color: white;
  width: 2000px;
  height: 1400px;
  background: linear-gradient(75deg, #992c1a, #f14630);
  font-family: Volkswagen;
  font-weight: bold;
  overflow: hidden;
`;

//axises
export const XAxis = styled.div`
  width: 100%;
  height: 3px;
  background: white;
  position: absolute;
  bottom: 100px;
`;

export const YAxis = styled.div`
  height: 100%;
  width: 3px;
  background: white;
  position: absolute;
  left: 100px;
`;

//text level
export const TextLevel = styled.div`
  position: absolute;

  width: 100%;
  height: 100%;
  z-index: 0;
`;

const TextCommon = css`
  position: absolute;
  width: 0;
  overflow: hidden;
  white-space: nowrap;
`;

export const NumberRow = styled.div`
  ${TextCommon};
  top: 100px;
  font-size: 10px;
  font-family: Courier New;
`;

//word level
export const WordLevel = styled.div`
  position: absolute;
  transform: rotate(-90deg);
  width: ${({ theme }) => theme.windowHeight}px;
  height: ${({ theme }) => theme.windowWidth}px;
  z-index: 5;
`;

export const Word = styled.div`
  ${FlexCenterStyle};
  position: absolute;
  width: 100%;

  font-size: 100px;
`;

//shape level

export const ShapeLevel = styled.div`
  position: absolute;

  left: 0;
  width: 0%;
  height: 100%;
  z-index: 2;
  overflow: hidden;

  ${({ triggerAnimate }) => triggerAnimate && `animation: reveal 30s linear forwards;`}
  @keyframes reveal {
    0% {
      width: 0%;
    }
    100% {
      width: 100%;
    }
  }
`;
