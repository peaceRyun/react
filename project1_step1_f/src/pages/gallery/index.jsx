import { GalleryList } from '../../components';
import { GalleryContainer } from './style';

const Gallery = () => {
    return (
        <GalleryContainer>
            <h2> 픽사베이 API 갤러리 </h2>
            <GalleryList />
        </GalleryContainer>
    );
};

export default Gallery;
