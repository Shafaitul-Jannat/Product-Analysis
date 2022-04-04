import Header from './components/Header/Header'
import './App.css';
import {
  Routes, Route
} from 'react-router-dom';
import Home from './components/Home/Home'
import Review from './components/Reviews/Review';
import Blogs from './components/Blogs/Blogs';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';



function App() {
  return (
    <div className="App">

      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/reviews' element={<Review></Review>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/about' element={<About></About    >}></Route>
        <Route path='*' element={<NotFound></ NotFound>}></Route>

      </Routes>
    </div >
  );
}

export default App;
