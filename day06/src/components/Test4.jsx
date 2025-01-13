import { useAxios } from '../hooks/useAxios';

const Test4 = () => {
    const url = 'https://jsonplaceholder.typicode.com/todos';
    const { state: data, setState, loading, error } = useAxios(url);
    // if (!loading) return <div>로딩중...</div>;
    if (error) return <div>{error}</div>;
    if (data.length > 0)
        return (
            <div>
                <h2>비동기</h2>
                {data.map((item) => (
                    <p key={item.id}>
                        {item.id}/{item.title}
                    </p>
                ))}
                {error ? error : null}
            </div>
        );
};

export default Test4;
