import data from './data';
import { useNavigate, useParams } from 'react-router-dom';

const Project = () => {
    const { name } = useParams();
    const navigate = useNavigate();
    console.log(name);
    const onGo = () => {
        // navigate('path', 1, 2, -1, -2)
        navigate('/profile');
        // navigate(-1);
        // navigate('/'); 최상위
    };
    return (
        <div>
            <h2> Project page </h2>
            {data
                .filter((item) => item.title === name)
                .map((item) => (
                    <div key={item.id}>
                        <h3>타이틀 : {item.title}</h3>
                        <p>설명 : {item.info}</p>
                    </div>
                ))}
            <p>
                <button onClick={onGo}>뒤로가기</button>
            </p>
        </div>
    );
};

export default Project;
