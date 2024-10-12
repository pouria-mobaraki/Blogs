import { Route, Routes } from 'react-router-dom';
import './App.css'
import Home from "./pages/Home";
import BlogDetail from './pages/BlogDetail';

export default function App() {
  return (
    <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/blog-detail' element={<BlogDetail/>}></Route>
    </Routes>
  )
}