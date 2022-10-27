import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Wrapper } from './ImageGallery.styled';
import PropTypes from 'prop-types';
export const ImageGallery = ({ cardInfo, openModal }) => {
  return (
    <Wrapper onClick={openModal}>
      <ImageGalleryItem cardInfo={cardInfo} />
    </Wrapper>
  );
};
ImageGallery.propTypes = {
  cardInfo: PropTypes.func.isRequired,
  opecardInfonModal: PropTypes.array.isRequired,
};
