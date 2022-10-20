import { Li, Img } from './ImageGalleryItem.styled';

export const GalleryItem = ({ image }) => {
  return (
    <Li>
      <Img src={image.webformatURL} alt={image.tags} />
    </Li>
  );
};
