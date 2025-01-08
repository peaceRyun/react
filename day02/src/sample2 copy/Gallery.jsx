import GalleryBig from './GalleryBig';
import GalleryList from './GalleryList';
import dataList from '../assets/api/galleryData1';
import './style.scss';
import { useState } from 'react';
import GalleryView from './GalleryView';
import Popup from './Popup';

const Gallery = () => {
    const [data, setData] = useState(dataList);
    const [current, setCurrent] = useState(data[0]);
    const [IsOpen, setIsOpen] = useState(false);

    //작은 이미지
    const onView = (id) => {
        //이미지 변경
        setCurrent(data.find((item) => item.id === id));
        // 수정 부분 참고 isClass => true/false
        setData(data.map((item) => (item.id === id ? { ...item, isClass: true } : { ...item, isClass: false })));
    };
    //큰 이미지 클릭시 처리
    const onOpen = () => {
        setIsOpen(true);
    };
    const onClose = () => {
        setIsOpen(false);
    };
    const onToggle = () => {
        setIsOpen(!IsOpen);
    };

    return (
        <>
            <Popup IsOpen={IsOpen} onToggle={onToggle} data={data} />
            <div className='wrap'>
                <div>
                    <GalleryBig current={current} />
                    <GalleryList data={data} onView={onView} />
                    <p>
                        {current.id}/{data.length}
                    </p>
                </div>
                <GalleryView />
            </div>
        </>
    );
};

export default Gallery;
