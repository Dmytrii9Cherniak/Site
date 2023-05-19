import './App.scss';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import WoodenPallets from './components/wooden_pallets/WoodenPallets';
import WoodenBoards from './components/wooden_boards/WoodenBoards';
import InfoPage from './components/info_page/InfoPage';

function App() {
    return (
        <div>
            <Header/>
            <Routes>
                <Route path="/" element={<Navigate to="/home" />} />
                <Route path="/home" element={<Home/>} />
                <Route path="/services" element={<WoodenPallets />} />
                <Route path="/boards" element={<WoodenBoards />} />
                <Route path="/info" element={<InfoPage />} />
                <Route path="*" element={<Navigate to="/home" />} />
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
