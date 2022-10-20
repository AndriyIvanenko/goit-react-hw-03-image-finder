import { Gallery } from './ImageGallery.styled';
import { GalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImagesGallery = ({ images }) => {
  return (
    <Gallery>
      {images.map(image => (
        <GalleryItem key={image.id} image={image}></GalleryItem>
      ))}
    </Gallery>
  );
};
