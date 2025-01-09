import { GalleryContainer } from './style';
import axios from 'axios';
import GalleryForm from '../galleryForm/GalleryForm';
import GalleryList from '../galleryList/GalleryList';

const Gallery = () => {
    return (
        <GalleryContainer>
            <h2> 픽사베이 API 갤러리 </h2>
            <GalleryForm />
            <GalleryList />
        </GalleryContainer>
    );
};

export default Gallery;
