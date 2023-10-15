import Button from "./components/button/Button";
import GalleryCard from "./components/gallery-card/GalleryCard";
import Rope from "./components/rope/Rope";
import {
  AboutMe,
  Content,
  Footer,
  Grating,
  Header,
  Main,
  Table,
} from "./styles/global.styled";

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
          <h2>Agnes97</h2>
        </Grating>
        <Table>
          <p>Table</p>
        </Table>

        <AboutMe>
          <div>Content</div>
          <div>
            <GalleryCard />
          </div>
        </AboutMe>

        <hr style={{ width: "100%" }} />

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "30rem",
          }}
        >
          Empty Section
        </div>

        <hr style={{ width: "100%" }} />

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "30rem",
          }}
        >
          <Button size="L">Button</Button>
        </div>
      </Content>

      <Footer>Footer</Footer>
    </Main>
  );
}
