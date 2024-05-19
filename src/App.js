import Product from "./components/Product";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Details from "./components/Details";
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Product />}/>
        <Route path="details/:id" element={<Details />}/>
      </Routes>
          


        <Footer />

    </>
  );
}

export default App;
