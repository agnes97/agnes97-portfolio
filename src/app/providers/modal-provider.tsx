'use client';

import {
  FC,
  PropsWithChildren,
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import { Modal, ModalContent } from '../styles/modal.styled';
import { useTheme } from './styled-components-provider';

type ModalContextType = {
  open: (content: ReactNode) => void;
  close: () => void;
};

const ModalContext = createContext<ModalContextType>({
  open: () => {},
  close: () => {},
});

export const useModal = () => useContext(ModalContext);

const ModalProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [content, setContent] = useState<ReactNode>(<div></div>);
  const modalRef = useRef<HTMLElement>(null);

  const { currentThemeVariant } = useTheme();

  const openModal = (content: ReactNode) => {
    setContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  /* Handle closing on click outside of the modal */
  const handleClosingOnOutsideClick = useCallback(
    (event: MouseEvent) => {
      if (
        isModalOpen &&
        modalRef.current &&
        !modalRef.current.contains(event.target as HTMLButtonElement)
      ) {
        closeModal();
        return;
      }
    },
    [isModalOpen]
  );

  /* Handle closing on escape keydown */
  const handleClosingOnEscape = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeModal();
        return;
      }
    },
    [closeModal]
  );

  useEffect(() => {
    // Disable body scrolling when modal is open
    document.body.style.overflow = isModalOpen ? 'hidden' : 'unset';

    if (isModalOpen) {
      window.addEventListener('mousedown', handleClosingOnOutsideClick);
      window.addEventListener('keydown', handleClosingOnEscape);
      return;
    }

    // Clean-up
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('mousedown', handleClosingOnOutsideClick);
      window.addEventListener('keydown', handleClosingOnEscape);
    };
  }, [isModalOpen]);

  return (
    <ModalContext.Provider value={{ open: openModal, close: closeModal }}>
      {children}

      {isModalOpen && (
        <Modal ref={modalRef} currentTheme={currentThemeVariant}>
          <ModalContent>{content}</ModalContent>
        </Modal>
      )}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
