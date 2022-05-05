import Nav from './components/Nav';
import '../src/App.css';
import Books from './components/Books';
import Categories from './components/Categories';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
    return (
      <BrowserRouter>
        <div className="App">
          <Nav />
          <div className='back'>
          <Routes>
          <Route path="/" element={<Books />}/>
          <Route path="/categories" element={<Categories />}/>
          </Routes>
          </div>
        </div>
      </BrowserRouter>

    );
  }

export default App;
