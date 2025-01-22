import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import Con3Item from './Con3Item';

import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';

const Con3List = () => {
    return (
        <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={20}
            slidesPerView={4}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            loop={true}
            centeredSlides={true}
            pagination={{
                clickable: true,
            }}
            className="mybanner"
        >
            {/* 추가 */}
            <Con3Item />
        </Swiper>
    );
};

export default Con3List;
