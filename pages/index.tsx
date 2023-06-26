import Header from "../components/Header/Header";
import {
  HomeBody,
  BlogItem,
  InfoBox,
  Content,
  OtherInfo,
  CardItem,
  Title,
} from "../styles/HomePage.styles";
import { Box } from "@chakra-ui/react";
import Image from "next/image";
import handleDate from "@/utils/handleDate";
import testImg from "../assets/1111.png";
function Home(props: any) {
  const { data } = props;
  return (
    <>
      <HomeBody>
        <Box flex={4}>
          {/* {data.map((item) => {
            return (
              <BlogItem key={item._id}>
                <Image width={250} height={160} src={item.image} />
                <InfoBox>
                  <Title>{item.title}</Title>
                  <Content>{item.description}</Content>
                  <hr />
                  <OtherInfo>
                    <div>{item.tag}</div>
                    <div>{handleDate(item.updateAt)}</div>
                  </OtherInfo>
                </InfoBox>
              </BlogItem>
            );
          })} */}
          test github123
        </Box>
        <Box flex={1}>
          <CardItem height="100px"></CardItem>
        </Box>
      </HomeBody>
    </>
  );
}

// export async function getStaticProps(context) {
//   const data = await fetch("http://127.0.0.1:8080/blog");
//   const res = await data.json();

//   return {
//     props: {
//       data: res.data,
//     }, // will be passed to the page component as props
//   };
// }

export default Home;
