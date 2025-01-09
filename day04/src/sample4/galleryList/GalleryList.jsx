import GalleryItem from '../galleryItem/GalleryItem';
import { GalleryListContainer } from './style';
import Masonry from 'react-masonry-css';

const GalleryList = () => {
    return (
        <GalleryListContainer>
            <Masonry
                breakpointCols={3}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
            >
                {/* array of JSX items */}

                <GalleryItem />
            </Masonry>
        </GalleryListContainer>
    );
};

export default GalleryList;
