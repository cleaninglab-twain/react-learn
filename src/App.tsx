import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NoticeAllPage from './pages/NoticeAllPage';
import NoticeDetailPage from './pages/NoticeDetailPage';
import Header from './components/Header';

function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/notice" element={<NoticeAllPage />} />
          <Route path="/notice/:noticeId" element={<NoticeDetailPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
