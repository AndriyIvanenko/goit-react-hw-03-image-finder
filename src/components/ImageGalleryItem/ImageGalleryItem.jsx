import PropTypes from 'prop-types';
import { Li, Img } from './ImageGalleryItem.styled';

export const GalleryItem = ({ image }) => {
  return (
    <Li>
      <Img
        src={image.webformatURL}
        alt={image.tags}
        id={image.id}
        className="img"
        data-large-img-url={image.largeImageURL}
      />
    </Li>
  );
};

GalleryItem.propTypes = {
  image: PropTypes.object,
};
