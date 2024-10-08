'use client';

import React, { FC, useState } from 'react';
import Flex from '@/app/components/flex/Flex';

import { useGetRating } from '../hooks/use-get-rating';
import { Vote, usePutRatingVotes } from '../hooks/use-put-rating-votes';
import FavoriteItems from '../components/favorite-items/FavoriteItems';
import { ItemsWrapper } from '../components/item/Item.styled';
import Item from '../components/item/Item';
import { RatingButton } from '../page.styled';
import Participants from '../components/participants/Participants';

type Props = {
  params: {
    slug: string;
  };
};

const CurrentRating: FC<Props> = ({ params: { slug } }) => {
  const { data: rating } = useGetRating(slug);

  const ratedFavorites =
    rating?.ratedItems.filter((item) => item.favoriteById) ?? [];
  const ratedItems =
    rating?.ratedItems.filter((item) => !item.favoriteById) ?? [];

  const { mutateAsync } = usePutRatingVotes();
  const [unsubmittedVotes, setUnsubmittedVotes] = useState<Vote[]>([]);

  const [isEditModeOn, setIsEditModeOn] = useState(false);

  const handleFavorite = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();

    const favoriteId = e.target.name;
    const isFavorite = e.target.value === 'yes';

    if (isFavorite) return;

    // if previous rating exists in unsubmitted state, remove favorite from it
    const previousFavorite = unsubmittedVotes.find((vote) => vote.isFavorite);
    if (previousFavorite) {
      setUnsubmittedVotes((prev) => [
        ...prev.filter((item) => item.id !== previousFavorite.id),
        {
          id: previousFavorite.id,
          rating: previousFavorite.rating,
          isFavorite: false,
        },
      ]);
    }

    const ratedItem = unsubmittedVotes.find((item) => item.id === favoriteId);
    if (!ratedItem) return;

    // add new favorite
    setUnsubmittedVotes((prev) => [
      ...prev.filter((item) => item.id !== ratedItem.id),
      {
        id: favoriteId,
        rating: ratedItem.rating,
        isFavorite,
      },
    ]);
  };

  const handleVote = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    setUnsubmittedVotes((prev) => [
      ...prev,
      {
        id: e.target.name,
        rating: parseInt(e.target.value),
      },
    ]);
  };

  const submitVotes = async () => {
    unsubmittedVotes.length !== 0 && (await mutateAsync(unsubmittedVotes));
    setUnsubmittedVotes([]);
  };

  return (
    <Flex flexDirection='column' gap='2rem' padding={'4rem 0'}>
      <Flex
        justifyContent='space-between'
        alignItems='center'
        flexDirection='column'
        style={{ position: 'relative' }}
        desktop={{ flexDirection: 'row', gap: '2rem' }}
      >
        <h2>
          {rating?.emoji} {rating?.title}
        </h2>

        {rating?.participants && (
          <Participants participants={rating.participants} />
        )}
      </Flex>

      <Flex
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
        gap='4rem'
      >
        <FavoriteItems favoriteItems={ratedFavorites} />

        {/* RATED ITEMS */}
        <ItemsWrapper
          flexDirection='column'
          justifyContent='center'
          alignItems='center'
        >
          <h3>
            Following items were rated by all participants and have final
            rating:
          </h3>
          {ratedItems.length !== 0 ? (
            ratedItems.map(
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
                  handleVote={handleVote}
                  handleFavorite={handleFavorite}
                />
              )
            )
          ) : (
            <span>There are no items like that yet. :(</span>
          )}
        </ItemsWrapper>

        {/* NONRATED ITEMS */}
        <ItemsWrapper
          flexDirection='column'
          justifyContent='center'
          alignItems='center'
        >
          <h3>
            Please rate following items by entering EDIT MODE. Click "submit"
            when you are done. <br></br>You can rate just few items and submit
            or do it all at once.
          </h3>

          <Flex justifyContent='center' alignItems='center' gap='0.25rem'>
            <RatingButton
              disabled={isEditModeOn}
              onClick={() => {
                setIsEditModeOn(true);
              }}
            >
              EDIT MODE
            </RatingButton>

            <RatingButton
              disabled={!isEditModeOn}
              onClick={() => {
                void submitVotes();
                setIsEditModeOn(false);
              }}
            >
              SUBMIT VOTES
            </RatingButton>
          </Flex>

          {rating?.unratedItems &&
            rating.unratedItems.map(
              ({ id, title, myRating, finalRating, favoriteById, data }) => (
                <Item
                  key={id}
                  isEditModeOn={isEditModeOn}
                  id={id}
                  title={title}
                  finalRating={finalRating}
                  myRating={myRating}
                  favoriteById={favoriteById}
                  data={data}
                  handleVote={handleVote}
                  handleFavorite={handleFavorite}
                />
              )
            )}
        </ItemsWrapper>
      </Flex>
    </Flex>
  );
};

export default CurrentRating;
