import React, { FC } from 'react';

import { CardWithAnchor } from '@/app/components/card/Card';
import OverlayIcon from '../components/OverlayIcon';

import { WishlistItem } from '../types';

import defaultImage from '../../../assets/spiral.jpg';

const CARD_WIDTH = 270;
const CARD_HEIGHT = 340;

type Props = {
  index: number;
  item: WishlistItem;
};

const GalleryItem: FC<Props> = ({ index, item }) => {
  const isOverlayDisplayed =
    item.received || item.isNoLongerWanted || item.isFav;

  return (
    <div
      key={index}
      style={{
        height: `${CARD_HEIGHT}px`,
        width: item.isDoubleCard
          ? `${CARD_WIDTH * 2 + 16}px`
          : `${CARD_WIDTH}px`,
        position: 'relative',
      }}
    >
      <CardWithAnchor
        url={item.link}
        index={index}
        title={`${item.emoji} ${item.title}`}
        thumbnailSrc={item.imageSrc ?? defaultImage.src}
        tagText={item.isHandmade ? 'DIY' : `${item.price},-`}
        objectFit={item.hasCoverPhoto ? 'cover' : 'contain'}
        customCardHeight={`${CARD_HEIGHT}px`}
      />

      {isOverlayDisplayed && (
        <OverlayIcon
          itemReceived={item.received}
          isNoLongerWanted={item.isNoLongerWanted}
          isFav={item.isFav}
          itemLink={item.link}
        />
      )}
    </div>
  );
};

export default GalleryItem;
