import { BrowserRouter, Routes, Route, Link } from 'react-router';
import GlobalStyle from './styled/reset';

import Main from './page4/Main';
import Member from './page4/Member';
import MemberDetail from './page4/MemberDetail';
import NotFiles from './page4/NotFiles';

const App = () => {
    return (
        <>
            <BrowserRouter>
                <GlobalStyle />
                {/* 화면에 보이는 영역 */}
                <Routes>
                    <Route path='/' element={<Main />} />
                    {/* 
                    <Route path='/member' element={<Member />} />
                    <Route path='/member/:memberID' element={<MemberDetail />} /> 
                    */}

                    <Route path='/member'>
                        <Route index element={<Member />} />
                        <Route path=':memberID' element={<MemberDetail />} />
                        <Route />
                    </Route>

                    <Route path='*' element={<NotFiles />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;
{
    /* 
    첫번째 방법
    <Route path='/경로, 상대, 절대' element={컴포넌트} />

    두번째 방법
    <Route path='/경로, 상대, 절대' element={컴포넌트} ></Route> 
    
    세번째 방법
    <Route>
        <Route/>
        <Route/>
    </Route>

    <Route path='/profile' element={<Profile />} />
    <Route path='/profile/:name' element={<Project />} />
    <Route path='/profile/:사용자정의동적변수' element={<Project />} />
    */
}
