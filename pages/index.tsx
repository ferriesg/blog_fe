import Header from "../components/Header/Header";
import {
  HomeBody,
  BlogItem,
  InfoBox,
  Content,
  OtherInfo,
  CardItem
} from "../styles/HomePage.styles";
import { Box } from '@chakra-ui/react'
import Image from "next/image";
import testImg from "../assets/1111.png";
function Home(props) {
  return (
    <>
      <Header />
      <HomeBody>
        <Box flex={4}>
          <BlogItem>
            <Image width={250} height={160} src={testImg} />
            <InfoBox>
              <h2>title</h2>
              <Content>info</Content>
              <hr />
              <OtherInfo>11111</OtherInfo>
            </InfoBox>
          </BlogItem>
          <BlogItem></BlogItem>
          <BlogItem></BlogItem>
        </Box>
        <Box flex={1}>
          <CardItem height="100px"></CardItem>
        </Box>
      </HomeBody>
    </>
  );
}

export async function getStaticProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  };
}

export default Home;
