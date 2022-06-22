import styled from "styled-components";
import { FlexCenterStyle } from "@S/responsive/display";

export const StyledPlaceElement = styled.div`
  ${FlexCenterStyle};
  position: relative;
  flex-direction: column;
  width: calc(100% - 1.5rem);
  margin: 0.75rem;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.3);
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
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export const LowerContainer = styled.div`
  display: flex;
  height: 4.33rem;
  flex-direction: column;
  margin-top: 1rem;
  margin-bottom: 1rem;
  width: calc(100% - 1rem);
  margin-left: 0.7rem;
`;

export const Name = styled.div`
  font-weight: bold;
  font-size: 1.2rem;
`;
export const Review = styled.div`
  font-size: 1rem;
  margin: 0.3rem 0;
  display: flex;
  align-items: center;
`;

export const Raiting = styled.span`
  color: #037d8b;
  display: flex;
  align-items: center;
  svg {
    font-size: 1.3rem;
    margin-top: -0.2rem;
    margin-left: -0.2rem;
  }
`;
export const Number = styled.span`
  color: #777;
  margin-left: 0.3rem;
`;

export const Information = styled.div`
  color: #777;
  font-size: 1rem;
`;

export const DeliveryMin = styled.div`
  position: absolute;
  bottom: 5rem;
  right: 1rem;
  width: 7rem;
  height: 4rem;
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