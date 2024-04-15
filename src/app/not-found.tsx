import Link from 'next/link';
import Button from './components/button/Button';

export default function NotFound() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          padding: '4rem 0 2rem 0',
        }}
      >
        <h2> &#91;404&#93; &#128558; Not found</h2>
        <p>Sorry, this page does not exist...</p>
      </div>

      <br />

      <Link href='/'>
        <Button shape='rectangle' size='L'>
          Return Home
        </Button>
      </Link>
    </div>
  );
}
