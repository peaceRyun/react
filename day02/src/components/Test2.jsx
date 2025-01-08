import { useRef } from 'react';

const Test2 = () => {
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef();

    const onReset = () => {
        //Dom 접근
        ref1.current.style.backgroundColor = 'pink';
        ref1.current.style.fontSize = '30px';
        ref1.current.style.padding = '5px 10px';

        ref3.current.focus();
    };
    return (
        <div>
            <h1 ref={ref1}>안녕하세요</h1>
            <h1 ref={ref2}>안녕하세요</h1>
            <input type='text' />
            <button onClick={onReset}>초기화</button>
        </div>
    );
};

export default Test2;

/*
const refContainer = useRef(initialValue);
useRef는 .current 프로퍼티로 전달된 인자(initialValue)로 초기화된 변경 가능한 ref 객체를 반환합니다. 
반환된 객체는 컴포넌트의 전 생애주기를 통해 유지될 것입니다.

본질적으로 useRef는 .current 프로퍼티에 변경 가능한 값을 담고 있는 “상자”와 같습니다.

Dom 직접 연결
const 참조변수 = useRef(null)
값변경은
참조변수.current.xxx
<태그 ref객체={참조변수}/>
///////////////////////////////
숫자값 유지
const 변수 = useRef(숫자)

사용예)
포커스, 텍스트 선택영역, 혹은 미디어의 재생을 관리할 때.
애니메이션을 직접적으로 실행시킬 때.
서드 파티 DOM 라이브러리를 React와 같이 사용할 때.

주로 : 포커스
*/
