import Nav from './components/Nav';
import Books from './components/Books';
import Categories from './components/Categories';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
    return (
      <BrowserRouter>
        <div className="App">
          <Nav />
          <Routes>
          <Route path="/" element={<Books />}/>
          <Route path="/categories" element={<Categories />}/>
          </Routes>
        </div>
      </BrowserRouter>

    );
  }

export default App;
