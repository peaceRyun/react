import { useCounter } from '../hooks/useCounter';

const Test3 = () => {
    const { state: cnt, onUp, onDown, setState } = useCounter(5);
    return (
        <div>
            <h2>{cnt}</h2>
            <p>
                <button onClick={onUp}>증가</button>
                <button onClick={onDown}>감소</button>
            </p>
        </div>
    );
};

export default Test3;
