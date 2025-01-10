import { GalleryContainer } from './style';
import axios from 'axios';
import GalleryForm from '../galleryForm/GalleryForm';
import GalleryList from '../galleryList/GalleryList';
import { useEffect, useState } from 'react';

const Gallery = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [text, setText] = useState('');
    const API_KEY = '47669774-42f887e68352c3d4279773d08';

    //https://pixabay.com/api/?key=사용자키&q=검색키워드&image_type=photo

    useEffect(() => {
        const url = `https://pixabay.com/api/?key=${API_KEY}&q=${text}&image_type=photo`;
        axios
            .get(url)
            .then((res) => {
                setData(res.data.hits);
                setLoading(false);
                setError(null);
            })
            .catch((e) => {
                setData([]);
                setLoading(true);
                // setError('주소를 찾을 수 없습니다.');
                setError(e.message);
            });
    }, [text]);

    const onSearch = (text) => setText(text);
    const onSort = (value) => {
        if (value != '') {
            setData([...data].sort((a, b) => (a[value] > b[value] ? 1 : -1)));
        }
    };
    //if(data.length === 0) return <div>이미지를 불러올 수 없음</div>
    return (
        <GalleryContainer>
            <h2> 픽사베이 API 갤러리 </h2>
            <GalleryForm onSearch={onSearch} onSort={onSort} />
            {loading && data.length === 0 && <h2> Loading...</h2>}
            {!loading && data.length === 0 ? <h2>no Image</h2> : <GalleryList data={data} />}
            {error ? error : null}
        </GalleryContainer>
    );
};

export default Gallery;
