import styled from "styled-components";
import { FlexCenterStyle } from "@S/responsive/display";

const getRandom = (a, b) => Math.random() * (b - a) + a;

export const StyledPlaceElement = styled.div`
  ${FlexCenterStyle};
  position: relative;
  flex-direction: column;
  width: calc(100% - 1.5rem);
  margin: 0.75rem;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.3);
  transition: all 0.2s;
`;

export const UpperContainer = styled.div`
  ${FlexCenterStyle};
  width: 100%;
  position: relative;
`;

export const ImgContainer = styled.div`
  width: 100%;
  height: ${({ theme }) => Math.min(theme.windowWidth, theme.windowHeight * 0.6) * 0.5}px;
`;

export const DeliverySign = styled.div`
  position: absolute;
  background: linear-gradient(93deg, #cc4439, #a73127);
  color: white;
  padding: 0.5rem 0.7rem;
  top: 0;
  left: 0;
  margin: 0.7rem;

  font-size: 1.1rem;
  font-weight: bold;
  z-index: 2;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export const LowerContainer = styled.div`
  display: flex;
  height: ${({ length }) => Math.min(length, 20) * 0.05 + 4.33}rem;
  flex-direction: column;
  margin-top: 1rem;
  margin-bottom: 1rem;
  width: calc(100% - 1rem);
  margin-left: 0.7rem;
  transition: height 0.3s;
`;

export const Name = styled.div`
  position: relative;
  font-weight: bold;
  font-size: ${({ length }) => Math.min(length, 20) * 0.05 + 1.2}rem;
  height: ${({ length }) => Math.min(length, 20) * 0.05 + 1.5}rem;
  color: ${({ length, color }) => (length < 7 ? "black" : color)};
  transition: height 0.3s, color 0.1s;
`;
export const Review = styled.div`
  font-size: 1rem;
  margin: 0.3rem 0;
  display: flex;
  align-items: center;
`;

export const Raiting = styled.span`
  color: ${({ length }) => (length < 7 ? "#037d8b" : "#6de9f7")};
  display: flex;
  align-items: center;
  position: relative;

  svg {
    font-size: 1.3rem;
    margin-top: -0.2rem;
    margin-left: -0.2rem;
  }
`;
export const Number = styled.span`
  position: relative;
  color: ${({ length }) => (length < 7 ? "#777" : "#f585ff")};
  margin-left: 0.3rem;
`;

export const Information = styled.div`
  color: ${({ length, color }) => (length < 7 ? "#777" : color)};
  font-size: 1rem;
  position: relative;
`;

export const DeliveryMin = styled.div`
  position: absolute;
  bottom: 5rem;
  right: 1rem;

  padding: 0.7rem 1rem;
  border-radius: 2rem;
  background: white;
  ${FlexCenterStyle};
  flex-direction: column;

  box-shadow: 0 0.3rem 0.5rem rgba(0, 0, 0, 0.2);
  p {
    margin: 0;
    padding: 0;
  }

  color: #777;
  font-size: 1rem;

  p:first-child {
    color: black;
    font-size: 1.5rem;
    font-weight: bold;
  }
`;

export const Ordinary = styled.div`
  position: absolute;
  ${({ triggered }) => (!triggered ? "opacity: 1;" : "opacity: 0;")}
  transition: .2s;
`;

export const Triggered = styled.div`
  position: absolute;
  ${({ triggered }) => (triggered ? "opacity: 1;" : "opacity: 0;")}
  transition: .2s;
`;
