import { useTheme } from "styled-components";
import GalleryCard from "./components/gallery-card/GalleryCard";
import Header from "./components/header/Header";
import Lines from "./components/lines/Lines";
import {
  AboutMe,
  Content,
  Divider,
  Grating,
  Main,
  Table,
} from "./styles/global.styled";
import Footer from "./components/footer/Footer";
import Button from "./components/button/Button";

export default function Home() {
  return (
    <Main>
      <Header />

      <Content>
        <Grating>
          <Lines numberOfLines={5} lengthAction="increases" id="1" />
          <Lines numberOfLines={5} lengthAction="decreases" id="2" />
          <Lines
            numberOfLines={13}
            lengthAction="increases"
            alignment="vertical"
            id="3"
          />

          <h2>&#123; Agnes97 &#125;</h2>
        </Grating>

        {/* <Table>
          <p>Table</p>
        </Table> */}

        <Divider />

        <AboutMe>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              color: "white",
              alignItems: "end",
              gap: "3rem",
            }}
          >
            <p style={{ maxWidth: "35rem" }}>
              In the ever-evolving tech realm, finding a proficient programmer
              who can breathe life into your ideas is crucial. I am committed to
              crafting user-friendly, captivating interfaces by transforming
              your vision into a pixel-perfect reality that drives results.
              Together, let's convert your project into a market-ready product.
            </p>
            <Button shape="rectangle" size="L">
              VIEW CV
            </Button>
          </div>
          <div>
            <GalleryCard />
          </div>
        </AboutMe>

        <Divider />

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

        <Divider />

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "30rem",
          }}
        >
          <Button size="L" shape="hexagon">
            Contact me
          </Button>
        </div>
      </Content>

      <Footer />
    </Main>
  );
}
