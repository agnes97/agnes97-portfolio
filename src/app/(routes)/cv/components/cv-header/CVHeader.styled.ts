import Flex from '@/app/components/flex/Flex';
import { BREAKPOINTS } from '@/app/styles/breakpoints';
import styled from 'styled-components';

export const CVHeaderContainer = styled(Flex)`
  max-width: 40rem;
  margin: 0 auto;

  @media (width <= ${BREAKPOINTS.ipad}) {
    & > div:last-child {
      order: -1;
    }
  }
`;

export const List = styled.ul`
  list-style-type: none;
  margin-block: 0;
  margin-inline: 0;
  padding-inline: 0;

  & > li {
    display: flex;
    gap: 5rem;
    justify-content: space-between;
    height: 1.5rem;

    @media (width <= ${BREAKPOINTS.ipad}) {
      height: auto;
      flex-direction: column;
      gap: 0.25rem;
    }

    & > span:first-child {
      font-weight: bold;
      color: ${({ theme }) => theme.color.accent_light};
    }

    & > span:last-child {
      @media (width >= ${BREAKPOINTS.ipad}) {
        text-align: right;
      }
    }
  }
`;
