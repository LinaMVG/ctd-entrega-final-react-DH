
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Favs from "./Routes/Favs";
import Detail from "./Routes/Detail";
import { Route, Routes } from "react-router-dom";




function App() {
 
  return (
      <div className="App">
          
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/contact" element={<Contact />} />
        <Route path="/favs" element={<Favs />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="*" element={<h1>Page not found - Error 404</h1>} />
      </Routes>
      <Footer/>

          
      </div>
  );
}

export default App;
