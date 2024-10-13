import { Route, Routes } from 'react-router-dom';
import './App.css'
import Home from "./pages/Home";
import BlogDetail from './pages/BlogDetail';
import Header from './components/Header';

export default function App() {
  return (
    <div className='container mx-auto mt-5'>
    <Header/>
    <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/blog-detail/:id' element={<BlogDetail/>}></Route>
    </Routes>
    </div>
  )
}