import React, { FC } from 'react';
import { getItemImage } from '../../utils/get-item-image';
import { useModal } from '@/app/providers/modal-provider';
import ImageGallery from '@/app/components/image-gallery/ImageGallery';
import { ItemImageContainer, StyledImage } from './ItemImage.styled';
import { ZoomIn } from 'lucide-react';

type Props = {
  title: string;
};

const ItemImage: FC<Props> = ({ title }) => {
  const currentItemImage = getItemImage(title);

  const { open } = useModal();
  const handleOpeningModal = () => {
    open(
      <ImageGallery
        imgSrcs={[currentItemImage]}
        firstImgSrc={currentItemImage}
      />
    );
  };

  return (
    <ItemImageContainer onClick={handleOpeningModal}>
      <ZoomIn size={48} />
      <StyledImage src={currentItemImage} alt={title} />
    </ItemImageContainer>
  );
};

export default ItemImage;
