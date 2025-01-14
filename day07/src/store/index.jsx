import { configureStore } from '@reduxjs/toolkit';
//import 사용자정의이름 from './modules/사용자Slice'
import counterReducer from './modules/colorSlice';

//리듀서 합치기 - 게시판, 이미지, 글등록, 로그인 등 slice등 불러와서

export const store = configureStore({
    reducer: {
        colorR: counterReducer,
    },
});

// 내보내기는 객체나간다 연결되는 이름 키 => colorR
