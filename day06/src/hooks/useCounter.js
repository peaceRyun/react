//사용자 정의 훅 => 함수

import { useState } from 'react';

//export default는 {}포함, export는 {}미포함
//use+사용자명 ? 재사용이 많았을 때
export const useCounter = (init = 10) => {
    //초기값, 함수
    const [state, setState] = useState(init);
    const onUp = () => setState(state + 1);
    const onDown = () => setState(state - 1);
    return { state, onUp, onDown, setState };
};
