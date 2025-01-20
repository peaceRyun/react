import styled, { css } from 'styled-components';

export const ConBox = styled.div`
    width: ${(props) => props.ww};
    width: ${(props) => (props.ww ? props.ww : '400px')};
    border: 1px solid #000;
    background-color: ${(props) => (props.bg ? props.bg : 'yellow')};
    padding: 15px;
`;

export const Box = styled.article`
    width: ${(props) => (props.width ? props.width : '200px')};
    background-color: ${(props) => (props.bg ? props.bg : 'grey')};
    border: 1px solid #000;
    padding: 10px;
    margin: 10px;
    cursor: pointer;
    &:hover {
        background-color: blue;
    }
`;

export const Button = styled.button`
    background-color: ${(props) => props.bg};
    width: 150px;
    height: 50px;
    ${(props) =>
        props.primary &&
        css`
            width: 200px;
            background-color: #000;
            color: #fff;
            &:hover {
                background: skyblue;
            }
        `}
`;
