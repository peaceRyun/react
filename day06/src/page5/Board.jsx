import BoardList from './Board.List';
import BoardPaging from './BoardPaging';
import { useAxios } from '../hooks/useAxios';
import { useState } from 'react';

/*
posts : 데이터 , 
postsPerPage = 페이지에 보여줄 개수
currentPage = 현재 페이지
firstPost = 0, 10, 20 ..  시작번호
lastPost  =10, 20, 30,  - 끝번호
postMod = 한페이지에 보여줄개수  -> 남은개수 
                     115개 데이터가 있으면 10개씩 보여줄때 남은 데이터가 5개

pageNumber  = 페이징의 a의 개수 
http://61.107.76.13/Li/04_25.html
*/

const Board = () => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    const { state: data, loading } = useAxios(url);
    const [currentPage, setCurrentPage] = useState(1); //현재 페이지
    const postsPerPage = 10; //한 페이지에 글목록 개수
    const totalPage = data.length; //총 데이터의 개수
    const lastPost = currentPage * postsPerPage; // 끝번호
    const firstPost = lastPost - postsPerPage; // 시작번호
    const pageNumber = Math.ceil(totalPage / postsPerPage);
    // const postMod = 0;
    const currentPosts = data.slice(firstPost, lastPost);

    const onCurrent = (x) => {
        setCurrentPage(x);
    };

    /*
posts : 데이터 , 
postsPerPage = 페이지에 보여줄 개수
currentPage = 현재 페이지
firstPost = 0, 10, 20 ..  시작번호
lastPost  =10, 20, 30,  - 끝번호
postMod = 한페이지에 보여줄개수  -> 남은개수 
                     115개 데이터가 있으면 10개씩 보여줄때 남은 데이터가 5개

pageNumber  = 페이징의 a의 개수 
http://61.107.76.13/Li/04_25.html
*/

    return (
        <div className='board'>
            <div className='inner'>
                <h2>운동화 게시판 </h2>

                <table>
                    <caption>게시판</caption>
                    <colgroup>
                        <col className='id' />
                        <col className='title' />
                        <col className='body' />
                    </colgroup>
                    <thead>
                        <tr>
                            <th>번호</th>
                            <th>타이틀</th>
                            <th>설명</th>
                        </tr>
                    </thead>
                    <tbody className='table-body'>
                        <BoardList currentPosts={currentPosts} loading={loading} />
                    </tbody>
                </table>

                <p className='paging'>
                    <BoardPaging pageNumber={pageNumber} onCurrent={onCurrent} />
                </p>
            </div>
        </div>
    );
};

export default Board;
