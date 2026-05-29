
import Header from './Header';
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';
import Contact from './Pages/Contact';
import Footer from './footer';
import Card from './Card';
import Button from './Button/button';
import Student from './Student';
import { Routes, Route } from 'react-router-dom';
import { Agentation } from "agentation";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />   {/* Định nghĩa các tuyến đường cho ứng dụng, mỗi tuyến đường sẽ hiển thị một thành phần khác nhau khi người dùng truy cập vào URL tương ứng. */ }
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Card />
      <Button />
      <Student name="SpongeBob" age={25} isStudent={true} />
      <Footer />
      {import.meta.env.DEV && <Agentation />}
    </>
  );
}

export default App
