import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Nav from './Nav';

const Layout = () => {
    return (
        <div style={{ border: '3px solid #000' }}>
            {/* 헤더 고정*/}
            <Nav />
            {/* 교체내용 - 라우터페이지 교체 */}
            <main style={{ background: 'pink', margin: 30 }}>
                {/* 라우터의 컴포넌트가 들어오는 곳 */}
                <Outlet />
            </main>

            {/* 푸터 고정*/}
            <Footer />
        </div>
    );
};

export default Layout;
