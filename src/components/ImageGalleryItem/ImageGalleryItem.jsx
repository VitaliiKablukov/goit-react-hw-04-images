import { GalleryItem, ItemImage } from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';
export const ImageGalleryItem = ({ cardInfo }) => {
  return cardInfo.map(({ webformatURL, id, largeImageURL, tags }) => (
    <GalleryItem key={id}>
      <ItemImage src={webformatURL} alt={tags} name={largeImageURL} />
    </GalleryItem>
  ));
};
ImageGalleryItem.propTypes = {
  cardInfo: PropTypes.arrayOf(
    PropTypes.shape({
      webformatURL: PropTypes.string,
      id: PropTypes.number.isRequired,
      largeImageURL: PropTypes.string,
      tags: PropTypes.string,
    })
  ),
};
