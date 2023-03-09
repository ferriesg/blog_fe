import styled from "styled-components";
import { Box, Flex } from "@chakra-ui/react";

export const HeaderBox = styled(Flex)`
  width: 100%;
  height: 60px;
  position: fixed;
  top: 0;
  justify-content: center;
  box-shadow: rgb(142 142 142 / 19%) 0 6px 15px 0;
`;

export const HeaderCenter = styled(Flex)`
  width: 1440px;
  height: 100%;
  justify-content: space-between;
`;

export const RightBox = styled(Flex)`
`;

export const ItemBox = styled(Box)`
  margin-left: 40px;
  height: 60px;
  line-height: 60px;
  cursor: pointer;
`;
