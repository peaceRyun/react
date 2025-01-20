import styled from 'styled-components';

const ConBox = styled.div`
    width: 600px;
    border: 1px solid #000;
    margin: auto;
    h2 {
        font-size: 30px;
    }
`;

const Box1 = styled.article`
    width: 100%;
    padding: 10px 0px;
    background-color: pink;
    transition: 0.3s;
    margin-bottom: 10px;
    &:hover {
        background-color: skyblue;
    }
`;
const Box2 = styled.section``;
const Box3 = styled('div')``;
const Button = styled.button``;
const Test3 = () => {
    return (
        <ConBox>
            <h2>타이틀</h2>
            <Box1>xx</Box1>
            <Box2>xx</Box2>
            <Box3>xx</Box3>
            <Button>hi</Button>
        </ConBox>
    );
};

export default Test3;

/*
    const 스타일컴포넌트 = styled.태그``
    const 스타일컴포넌트 = styled('태그')``
*/
