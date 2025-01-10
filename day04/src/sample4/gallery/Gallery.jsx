import { GalleryContainer } from './style';
import axios from 'axios';
import GalleryForm from '../galleryForm/GalleryForm';
import GalleryList from '../galleryList/GalleryList';
import { useEffect, useState } from 'react';

const Gallery = () => {
    const [data, setData] = useState([]);
    const [text, setText] = useState('dog');
    const API_KEY = '47669774-42f887e68352c3d4279773d08';

    //https://pixabay.com/api/?key=사용자키&q=검색키워드&image_type=photo

    useEffect(() => {
        const url = `https://pixabay.com/api/?key=${API_KEY}&q=${text}&image_type=photo`;
        axios
            .get(url)
            .then((res) => setData(res.data.hits))
            .catch((e) => console.log('에러'));
    }, [text]);

    return (
        <GalleryContainer>
            <h2> 픽사베이 API 갤러리 </h2>
            <GalleryForm />
            <GalleryList />
        </GalleryContainer>
    );
};

export default Gallery;
