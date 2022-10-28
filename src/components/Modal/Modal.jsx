import { Overlay, ModalBack } from './Modal.styled';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
export const Modal = ({ onClose, picture }) => {
  useEffect(() => {
    const closeMoodal = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', closeMoodal);
    return () => {
      window.removeEventListener('keydown', closeMoodal);
    };
  }, [onClose]);

  const closeMoodalBackdrop = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };
  return (
    <Overlay onClick={closeMoodalBackdrop}>
      <ModalBack>
        <img src={picture} alt="зображення" />
      </ModalBack>
    </Overlay>
  );
};
Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  picture: PropTypes.string,
};
