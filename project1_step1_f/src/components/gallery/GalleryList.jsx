import Button1 from '../../ui/Button';
import Button from '../../ui/Button';
import GalleryItem from './GalleryItem';
import { GalleryListContainer } from './style';
import Masonry from 'react-masonry-css';

const GalleryList = () => {
    return (
        <GalleryListContainer>
            <p>
                <Button title='고양이' width='300px' bgColor='pink' />
                <Button title='강아지 입양하기' width='500px' />
            </p>
            <p>
                <Button1 title='판다' width='200px' bgColor='hotpink' />
                <Button1 />
            </p>

            <Masonry breakpointCols={3} className='my-masonry-grid' columnClassName='my-masonry-grid_column'>
                {/* 출력 */}
                <GalleryItem />
            </Masonry>
        </GalleryListContainer>
    );
};

export default GalleryList;
