import { Loader } from 'lucide-react';
import { LoaderContainer } from './styles/loading.styled';

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <LoaderContainer>
      <Loader size={40} />
    </LoaderContainer>
  );
}
