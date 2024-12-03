import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Favs from "./Routes/Favs";
import Detail from "./Routes/Detail";
import Layout from "./Layouts/Layout ";
import { Route, Routes } from "react-router-dom";
import { useContextGlobal } from "./Components/utils/global.context";


function App() {
 const {state} = useContextGlobal();

  return (
      <div className= {state.theme}>
          
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} /> 
          <Route path="/contact" element={<Contact />} />
          <Route path="/favs" element={<Favs />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="*" element={<h1>Page not found - Error 404</h1>} />
        </Route>
      </Routes>

      </div>
  );
}

export default App;
