import React, { CSSProperties, FC, ReactNode } from 'react';
import {
  AbsoluteContainer,
  CountryFlag,
  RedFlag,
  RelativeContainer,
  StyledCard,
  Title,
} from './Card.styled';
import Tag from '../tag/Tag';
import { countryFlag } from '@/app/(routes)/shopping-mall/utils/get-emojis';
import Link from 'next/link';
import { UrlObject } from 'url';

const CARD_WIDTH = '200px';

type Props = {
  index: number;
  title: string;
  countryCode?: string;
  thumbnailSrc: string;
  date?: string;
  tagText?: string;
  lastOnlineDate?: Date;
  customCardWidth?: string;
  customCardHeight?: string;
  rectangularImages?: boolean;
  customFooterContent?: ReactNode;
  imgAspectRatio?: string;
  objectFit?: 'cover' | 'contain' | 'fill';
  style?: CSSProperties;
};

const today = new Date();
const twoWeeksAgoDate = new Date(new Date().setDate(today.getDate() - 14));
const monthAgoDate = new Date(new Date().setDate(today.getDate() - 30));

export const CardWithAnchor: FC<Props & { url: string }> = (props) => {
  return (
    <a
      href={props.url}
      target='_blank'
      style={{
        width: props.customCardWidth ? props.customCardWidth : CARD_WIDTH,
        ...(props.customCardHeight && { height: props.customCardHeight }),
      }}
    >
      <Card {...props} />
    </a>
  );
};

export const CardWithLink: FC<Props & { route: UrlObject }> = (props) => {
  return (
    <Link
      href={props.route}
      style={{
        width: props.customCardWidth ? props.customCardWidth : CARD_WIDTH,
        ...(props.customCardHeight && { height: props.customCardHeight }),
      }}
    >
      <Card {...props} />
    </Link>
  );
};

export const Card: FC<Props> = ({
  index,
  title,
  countryCode,
  lastOnlineDate,
  thumbnailSrc,
  tagText,
  date,
  rectangularImages,
  customFooterContent,
  imgAspectRatio,
  objectFit,
  customCardHeight,
}) => {
  const wasLastOnlineTwoWeeksAgo =
    lastOnlineDate && lastOnlineDate.getTime() < twoWeeksAgoDate.getTime();

  const wasLastOnlineMonthAgo =
    lastOnlineDate && lastOnlineDate.getTime() < monthAgoDate.getTime();

  const CustomFooterContent = customFooterContent;

  return (
    <StyledCard>
      <header>
        <Title title={title}>{title}</Title>
      </header>

      <RelativeContainer
        imgAspectRatio={rectangularImages ? '1 / 1' : imgAspectRatio}
        objectFit={objectFit}
      >
        {(wasLastOnlineTwoWeeksAgo || wasLastOnlineMonthAgo) && (
          <RedFlag
            severity={wasLastOnlineTwoWeeksAgo ? 'two-weeks' : 'one-month'}
          >
            <span>Last online:</span>
            <span>{lastOnlineDate.toLocaleDateString()}</span>
          </RedFlag>
        )}

        <img
          src={thumbnailSrc}
          width={200}
          style={{ maxHeight: customCardHeight ?? 'auto' }}
        />

        {tagText && (
          <AbsoluteContainer>
            <Tag>{tagText}</Tag>
          </AbsoluteContainer>
        )}
      </RelativeContainer>

      <footer>
        {customFooterContent ? (
          CustomFooterContent
        ) : (
          <>
            <span>{date ? date : `No. ${index}`}</span>

            {countryCode && (
              <CountryFlag>
                {countryFlag[countryCode.toLowerCase()]}
              </CountryFlag>
            )}
          </>
        )}
      </footer>
    </StyledCard>
  );
};
