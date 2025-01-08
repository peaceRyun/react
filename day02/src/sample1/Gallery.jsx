import GalleryBig from './GalleryBig';
import GalleryList from './GalleryList';
import dataList from '../assets/api/galleryData';
import './style.scss';
import { useState } from 'react';

const Gallery = () => {
    const [data, setData] = useState(dataList);
    const [current, setCurrent] = useState(data[0]);

    const onView = (id) => {
        //이미지 변경
        setCurrent(data.find((item) => item.id === id));
        // const num = data.findIndex((item) => item.id === id);
        // setCurrent(data[num])
        // 수정 부분 참고 isClass => true/false
        setData(data.map((item) => (item.id === id ? { ...item, isClass: true } : { ...item, isClass: false })));
    };

    return (
        <div className='wrap'>
            <GalleryBig current={current} />
            <GalleryList data={data} onView={onView} />
            <p>
                {current.id}/{data.length}
            </p>
        </div>
    );
};

export default Gallery;
