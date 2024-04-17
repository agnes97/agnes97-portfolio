import Lines from './components/lines/Lines';
import { Divider, Grating } from './styles/global.styled';
import Button from './components/button/Button';
import AboutMe from './components/about-me/AboutMe';
import PetProjects from './components/pet-projects/PetProjects';
import GithubContributions from './components/github-contributions/GithubContributions';
import Flex from './components/flex/Flex';

export default function Home() {
  return (
    <>
      <Grating>
        <Lines numberOfLines={5} lengthAction='increases' id='1' />
        <Lines numberOfLines={5} lengthAction='decreases' id='2' />
        <Lines
          numberOfLines={13}
          lengthAction='increases'
          alignment='vertical'
          id='3'
        />

        <h1>&#123; Agnes97 &#125;</h1>
      </Grating>

      <Divider hideOnMobile />

      <AboutMe />

      <Divider />

      <PetProjects />

      <Divider />

      <GithubContributions />

      <Divider />

      <Flex justifyContent='center' alignItems='center' minHeight='30rem'>
        <Button size='L' shape='hexagon'>
          Contact me
        </Button>
      </Flex>
    </>
  );
}
