import { BrowserRouter, Routes, Route, Link } from 'react-router';
import GlobalStyle from './styled/reset';
import Home from './page2/Home';
import About from './page2/About';
import Profile from './page2/Profile';
import Project from './page2/Project';
import NotFiles from './page2/NotFiles';
import './page2/style.css';
import NavBar from './page2/NavBar';

const App = () => {
    return (
        <>
            <BrowserRouter>
                <GlobalStyle />
                <NavBar />
                {/* 화면에 보이는 영역 */}
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
