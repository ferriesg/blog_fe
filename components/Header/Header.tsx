import { HeaderBox, HeaderCenter, RightBox, ItemBox } from "./Header.styles";
import Logo from "@/assets/logo.png";
import Image from "next/image";
export default function Header() {
  return (
    <HeaderBox>
      <HeaderCenter>
        <Image alt="" style={{ width: "auto" }} height={60} src={Logo} />
        <RightBox>
          <ItemBox color="#fc5705">首页</ItemBox>
          <ItemBox>Github</ItemBox>
          <ItemBox>工具</ItemBox>
          <ItemBox as="a" href="/tools">
            searchs
          </ItemBox>
        </RightBox>
      </HeaderCenter>
    </HeaderBox>
  );
}
