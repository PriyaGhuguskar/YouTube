import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppContext } from './context/ContextApi';
import Header from './components/Header';
import FeedCompo from './components/FeedCompo';
import VideoDetails from './components/VideoDetails';
import SearchResult from './components/SearchResult';

function App() {
  return (
    <AppContext>
      <BrowserRouter>
        <div className=" flex flex-col h-full">
          <Header />
          <Routes>
            <Route exact path='/' element={<FeedCompo />} />
            <Route path='/serachResult/:searchQuery' element={<SearchResult />} />
            <Route path='/video/:id' element={<VideoDetails />} />

          </Routes>

        </div>
      </BrowserRouter>

    </AppContext>
  );
}

export default App;
