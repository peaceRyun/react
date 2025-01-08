const Step3 = ({ name, age, addr, tel, job, email, gender, inter, onNext, onPrev }) => {
    return (
        <ul>
            <li>
                <span>이름</span> : <em>{name}</em>
            </li>
            <li>
                <span>나이</span> : <em>{age}</em>
            </li>
            <li>
                <span>주소</span> : <em>{addr}</em>
            </li>
            <li>
                <span>연락처</span> : <em>{tel}</em>
            </li>
            <li>
                <span>직업</span> : <em>{job}</em>
            </li>
            <li>
                <span>이메일</span> : <em>{email}</em>
            </li>
            <li>
                <span>성별</span> : <em>{gender}</em>
            </li>
            <li>
                <span>관심분야</span> : <em>{inter}</em>
            </li>
            <p>
                <button onClick={onPrev}>이전</button>
                <button onClick={onNext}>다음</button>
            </p>
        </ul>
    );
};

export default Step3;
