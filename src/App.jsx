import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Layout from './components/Layout'
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Menu from "./pages/Menu";
import News from "./pages/News";
import About from "./pages/About";
import ScrollToTop from './components/ScrollTop/Index';
import AdminNews from './components/Admin/News';
import AdminLayout from './components/Admin/Layout';
import AdminFoods from './components/Admin/Foods';
import Messages from './components/Admin/Messages';
import FoodUpload from './components/Admin/FoodUpload';
import NewsUpload from './components/Admin/NewsUpload';
import CategoriesPost from './components/Admin/CategoriesPost';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route path='' element={<AdminFoods />} />
          <Route path='news' element={<AdminNews />} />
          <Route path='messages' element={<Messages />} />
          <Route path='foodupload' element={<FoodUpload />} />
          <Route path='foodupload/:food_id' element={<FoodUpload />} />
          <Route path='newsupload' element={<NewsUpload />} />
          <Route path='newsupload/:news_id' element={<NewsUpload />} />
          <Route path='categories' element={<CategoriesPost />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )

}

export default App;
