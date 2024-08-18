import React, { FC } from 'react';
import { Heart } from 'lucide-react';
import { useTheme } from '@/app/providers/styled-components-provider';
import Flex from '@/app/components/flex/Flex';
import { RatingItem } from '../../hooks/use-get-rating';
import Item from '../item/Item';
import {
  EmptyFavoritesWrapper,
  FavoritesInnerWrapper,
} from './FavoriteItems.styled';

type Props = {
  favoriteItems: RatingItem[];
};

const FavoriteItems: FC<Props> = ({ favoriteItems }) => {
  const { currentTheme } = useTheme();

  return (
    <Flex
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      gap='0.25rem'
    >
      <h3>
        Each participant can have one favorite - a thing we'll do for sure!
        You'll find them here after all participants vote.
      </h3>

      <FavoritesInnerWrapper>
        <Heart
          size={48}
          fill={currentTheme.color.background_secondary}
          color={currentTheme.color.accent_dark}
          style={{
            position: 'absolute',
            top: '0.75rem',
            left: '-1.5rem',
            zIndex: 1,
          }}
        />

        <Heart
          size={48}
          fill={currentTheme.color.background_secondary}
          color={currentTheme.color.accent_dark}
          style={{
            position: 'absolute',
            bottom: '0.75rem',
            right: '-1.5rem',
            zIndex: 1,
          }}
        />

        {favoriteItems.length === 0 ? (
          <EmptyFavoritesWrapper>
            There are no favorites yet. :(
          </EmptyFavoritesWrapper>
        ) : (
          favoriteItems.map(
            ({ id, title, myRating, finalRating, favoriteById, data }) => (
              <Item
                key={id}
                isEditModeOn={false}
                id={id}
                title={title}
                finalRating={finalRating}
                myRating={myRating}
                favoriteById={favoriteById}
                data={data}
                handleVote={() => {}}
                handleFavorite={() => {}}
              />
            )
          )
        )}
      </FavoritesInnerWrapper>
    </Flex>
  );
};

export default FavoriteItems;
