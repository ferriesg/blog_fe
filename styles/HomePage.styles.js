import styled from "styled-components";
import { Box,Flex } from "@chakra-ui/react";

export const HomeBody = styled(Flex)`
  width: 1360px;
  margin: 0 auto;
  margin-top: 70px;
`;
export const BlogItem = styled(Flex)`
  height: 160px;
  padding: 10px;
  margin: 20px 0;
  border-radius: 8px;
  box-shadow: rgb(142 142 142 / 19%) 4px 4px 4px 9px;
`;

export const InfoBox = styled(Box)`
  margin-left: 20px;
  width: 600px;
`
export const Content = styled.p`
  margin-top: 6px;
  height: 66px;
`

export const OtherInfo = styled(Flex)`
  height:40px;
  justify-content: space-between;
`

export const CardItem = styled(Box)`
  border-radius: 8px;
  margin:20px 0 0 20px;
  box-shadow: rgb(142 142 142 / 19%) 4px 4px 4px 9px;

`
export const Title = styled.h2`
  cursor: pointer;
  display: inline;
  background: linear-gradient(to right,#ec695c,#61c454) no-repeat right bottom;
  background-size: 0 100%;
  transition : background-size 1300ms;
  :hover{
    background-position-x: left;
    background-size: 100% 2px;
  }
`