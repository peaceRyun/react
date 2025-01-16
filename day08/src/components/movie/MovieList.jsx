import styled from 'styled-components';
import MovieItem from './MovieItem';

const MovieCon = styled.ul`
    text-align: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    li {
        background: #333;
        margin-bottom: 30px;
        box-sizing: border-box;
        padding: 5px;
        position: relative;

        .poster {
            img {
            }
        }
        .star {
            width: 100%;
            font-size: 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 5px 10px;
            box-sizing: border-box;

            p {
                width: auto;

                span {
                    position: relative;
                    display: inline-block;
                    cursor: pointer;
                    color: #fff;
                    &::after {
                        content: '★';
                        color: #ffcc00;
                        position: absolute;
                        left: 0;
                        top: 0;
                        width: 0;
                        overflow: hidden;
                    }
                    &.full:after {
                        width: 100%;
                    }
                }
            }
            h3 {
                font-size: 20px;
                color: #fff;
            }
        }
    }
`;

const MovieList = () => {
    return (
        <MovieCon>
            <MovieItem />
        </MovieCon>
    );
};

export default MovieList;
