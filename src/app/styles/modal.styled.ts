import styled from 'styled-components';
import { ColorTheme } from '../providers/styled-components-provider';

type ModalProps = {
  currentTheme: ColorTheme;
};

export const Modal = styled.article<ModalProps>`
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: auto;
  margin: 0 auto;
  z-index: 10;

  & > * {
    width: 80%;
    height: 80%;
  }

  &::before {
    content: '';
    position: fixed;
    inset: 0;
    background-color: ${({ currentTheme }) =>
      currentTheme === 'light' ? `rgba(0 0 0 / 70%)` : `rgba(0 0 0 / 20%)`};
    backdrop-filter: blur(0.25rem);
    z-index: -1;
  }
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: auto;
  height: 90vh;
`;
