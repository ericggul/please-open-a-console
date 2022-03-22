import styled from "styled-components";
import { FlexCenterStyle } from "@S/responsive/display";

export const ElementContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: ${({ theme }) => theme.windowWidth}px;
  height: ${({ theme }) => theme.windowHeight}px;
  ${FlexCenterStyle};
`;

export const VideoWrapper = styled.div`
  position: absolute;
  top: ${({ dimensions, theme }) => dimensions.top * theme.windowHeight}px;
  left: ${({ dimensions, theme }) => dimensions.left * theme.windowWidth}px;
  width: ${({ dimensions, theme }) => dimensions.width * theme.windowWidth}px;
  height: 200px;
  ${FlexCenterStyle};
`;
