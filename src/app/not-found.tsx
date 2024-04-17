import Link from 'next/link';
import Button from './components/button/Button';
import Flex from './components/flex/Flex';

export default function NotFound() {
  return (
    <Flex alignItems='center' justifyContent='center' flexDirection='column'>
      <Flex flexDirection='column' padding='4rem 0 2rem 0'>
        <h2> &#91;404&#93; &#128558; Not found</h2>
        <p>Sorry, this page does not exist...</p>
      </Flex>

      <br />

      <Link href='/'>
        <Button shape='rectangle' size='L'>
          Return Home
        </Button>
      </Link>
    </Flex>
  );
}
