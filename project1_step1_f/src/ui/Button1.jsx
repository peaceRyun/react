import styled from 'styled-components';

const ButtonWrap = styled.button`
    width: ${(props) => props.$width};
    padding-top: 10px 0;
    border: none;
    background-color: ${(props) => props.$bgColor};
    font-size: 20px;
    margin-left: 10px;
`;
// 자주 사용하는 작은 조각들을 UI에 설정하기
// button, input, next버튼, prev 버튼 등
const Button1 = (props) => {
    return <ButtonWrap {...props}>{props.title || '버튼확인'}</ButtonWrap>;
};

export default Button1;
