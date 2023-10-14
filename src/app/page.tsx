import Button from "./components/button/Button";
import GalleryCard from "./components/gallery-card/GalleryCard";
import Rope from "./components/rope/Rope";
import { Content, Grating, Header, Main, Table } from "./styles/global.styled";

export default function Home() {
  return (
    <Main>
      <Header>
        <div>
          <div>buttons</div>
          <div>buttons</div>
        </div>
        <h1>Jana Mácová</h1>

        <Rope />
      </Header>

      <Content>
        <Grating>
          <GalleryCard />
          <h2>Agnes97</h2>
        </Grating>
        <Table>
          <p>Table</p>
        </Table>
        Content
        <br />
        <Button size="L">Button</Button>
      </Content>
    </Main>
  );
}
