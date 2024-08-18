import React, { FC, useState } from 'react';
import {
  FavoriteLetters,
  ItemRow,
  ItemTitle,
  RatingNumber,
} from './Item.styled';
import Flex from '@/app/components/flex/Flex';
import QuestionMark from '../question-mark/QuestionMark';
import HeartIcon from '../heart-icon/HeartIcon';
import { useTheme } from '@/app/providers/styled-components-provider';
import ItemImage from '../item-image/ItemImage';
import { useAuth } from '@/app/providers/auth-provider';

type Props = {
  isEditModeOn: boolean;
  id: string;
  title: string;
  finalRating?: number;
  myRating?: number;
  favoriteById?: string;
  data: unknown;
  handleVote: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  handleFavorite: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

const Item: FC<Props> = ({
  isEditModeOn,
  id,
  title,
  finalRating,
  myRating,
  favoriteById,
  // data, TODO:
  handleVote,
  handleFavorite,
}) => {
  const { user } = useAuth();

  const { currentTheme } = useTheme();
  const [currentRatingValue, setCurrentRatingValue] = useState(
    myRating !== undefined ? myRating : ''
  );

  const doesCurrentUserHaveFavorite = user?.id === favoriteById;
  const [currentFavoriteValue, setCurrentFavoriteValue] = useState('no');

  const myRatingDisplay =
    myRating !== undefined ? (
      <RatingNumber>{myRating} </RatingNumber>
    ) : (
      <QuestionMark />
    );

  const isFavoriteEditable = !doesCurrentUserHaveFavorite && isEditModeOn;

  const isAddingFavoriteDisabled = true; // TOOD:

  const isItemFavorited = favoriteById ? (
    <HeartIcon />
  ) : (
    <FavoriteLetters>NO</FavoriteLetters>
  );

  return (
    <ItemRow>
      <ItemImage title={title} />

      <Flex flexDirection='column' alignItems='center' gap='0.5rem'>
        {finalRating ? (
          <RatingNumber>{finalRating}</RatingNumber>
        ) : (
          <QuestionMark />
        )}
        <span>Final Rating</span>
      </Flex>

      <Flex
        flexDirection='column'
        alignItems='center'
        gap='0.25rem'
        justifyContent='center'
        style={{ alignSelf: 'center', marginBottom: '-1.25rem' }}
      >
        <ItemTitle>{title}</ItemTitle>
        <span style={{ color: currentTheme.color.line_dark }}>{id}</span>
      </Flex>

      <Flex
        flexDirection='column'
        alignItems='center'
        gap='0.5rem'
        justifyContent='center'
      >
        <span>
          <QuestionMark />
        </span>
        <span>Priciness</span>
      </Flex>

      <Flex
        flexDirection='column'
        alignItems='center'
        gap='0.5rem'
        justifyContent='center'
      >
        <span>
          <QuestionMark />
        </span>
        <span>Distance</span>
      </Flex>

      <Flex
        flexDirection='column'
        alignItems='center'
        gap='0.5rem'
        justifyContent='center'
      >
        {isEditModeOn ? (
          <select
            name={id}
            id={id}
            onChange={(e) => {
              setCurrentRatingValue(e.target.value);
              handleVote(e);
            }}
            defaultValue={currentRatingValue}
          >
            <option value='' hidden>
              ?
            </option>
            <option value={0}>0</option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
        ) : (
          myRatingDisplay
        )}
        <span>My Rating</span>
      </Flex>

      <Flex
        flexDirection='column'
        alignItems='center'
        gap='0.5rem'
        justifyContent='center'
      >
        {isFavoriteEditable ? (
          <select
            name={id}
            id={id}
            onChange={(e) => {
              setCurrentFavoriteValue(e.target.value);
              handleFavorite(e);
            }}
            defaultValue={currentFavoriteValue}
            disabled={isAddingFavoriteDisabled}
          >
            <option value='yes'>YES</option>
            <option value='no'>NO</option>
          </select>
        ) : (
          isItemFavorited
        )}

        <span>Is Favorite?</span>
      </Flex>
    </ItemRow>
  );
};

export default Item;
