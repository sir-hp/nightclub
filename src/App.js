import Home from './veiws/Home';
import Footer from './components/Footer';
import Contact from './veiws/Contact';
import Book from './veiws/Book';
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
    <Routes>
      <Route index element={<Home/>}/>
      <Route path='/booking' element={<Book/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
    <Footer />
    </>
  );
}

export default App;
