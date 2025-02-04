import { useEffect } from 'react';
import GalleryList from '../../components/gallery/GalleryList';
import { GalleryContainer } from './style';
import { useDispatch } from 'react-redux';
import { getMovie } from '../../store/modules/getThunk';

const Gallery = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getMovie());
    }, []);
    return (
        <GalleryContainer>
            <h2> 픽사베이 API 갤러리 </h2>
            <GalleryList />
        </GalleryContainer>
    );
};

export default Gallery;
