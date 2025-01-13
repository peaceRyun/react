import { BrowserRouter, Routes, Route, Link } from 'react-router';
import GlobalStyle from './styled/reset';
import Home from './page1/Home';
import About from './page1/About';
import Profile from './page1/Profile';
import Project from './page1/Project';
import NotFiles from './page1/NotFiles';

const App = () => {
    return (
        <>
            <BrowserRouter>
                <GlobalStyle />
                <nav>
                    <ul>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/about'>About</Link>
                        </li>
                        <li>
                            <Link to='/profile'>Profile</Link>
                        </li>
                        <li>
                            <Link to='/project'>Project</Link>
                        </li>
                    </ul>
                </nav>
                <hr />
                {/* 페이지 불러오기 */}
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/profile' element={<Profile />} />
                    <Route path='/project' element={<Project />} />
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
    */
}
