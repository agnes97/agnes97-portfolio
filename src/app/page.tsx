import Lines from './components/lines/Lines';
import { Divider, Grating } from './styles/global.styled';
import AboutMe from './components/about-me/AboutMe';
import PetProjects from './components/pet-projects/PetProjects';
import GithubContributions from './components/github-contributions/GithubContributions';
import ContactMe from './components/contact-me/ContactMe';

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

      <ContactMe />
    </>
  );
}
