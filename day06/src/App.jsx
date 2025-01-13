import { BrowserRouter, Routes, Route, Link } from 'react-router';
import GlobalStyle from './styled/reset';
import Home from './page3/Home';
import About from './page3/About';
import Profile from './page3/Profile';
import Project from './page3/Project';
import NotFiles from './page3/NotFiles';

const App = () => {
    return (
        <>
            <BrowserRouter>
                <GlobalStyle />
                <ul>
                    <li>
                        <Link to='/'>home</Link>
                    </li>
                    <li>
                        <Link to='/about'>about</Link>
                    </li>
                    <li>
                        <Link to='/profile'>profile</Link>
                    </li>
                </ul>
                <hr />
                {/* 화면에 보이는 영역 */}
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/profile'>
                        <Route index element={<Profile />} />
                        <Route path=':name' element={<Project />} />
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
