import { useParams, useNavigate } from 'react-router-dom';
import { useAxios } from '../hooks/useAxios';

const MemberDetail = () => {
    const { memberID } = useParams();
    const url = `https://jsonplaceholder.typicode.com/users/${memberID}`;
    const { state: data } = useAxios(url);
    const navigate = useNavigate();
    // const thisMember = data.find((item) => item.id == memberID);
    console.log(typeof memberID);

    const { name, username, email, phone, website } = data;

    const onGo = () => {
        navigate('/');
        // navigate(-1)
    };

    const css = {
        border: '1px solid skyblue',
        padding: 20,
        margin: 20,
        fontSize: 30,
    };

    return (
        <div style={css}>
            <p>회원번호: {memberID} 번 </p>
            <p>name: {name} </p>
            <p>username: {username}</p>
            <p>email: {email}</p>
            <p>phone: {phone}</p>
            <p>website: {website}</p>
            <br />
            <br />
            <button onClick={onGo}>뒤로가기</button>
            <button onClick={onGo}>첫페이지</button>
        </div>
    );
};

export default MemberDetail;
