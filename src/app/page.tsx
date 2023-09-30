import Button from "./components/Button/Button";
import Rope from "./components/Rope/Rope";
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
