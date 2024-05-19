import Product from "./components/Product";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="container">
        <div className="row">
          <Product />
        </div>
      </div>
      <footer className="mt-5">
        <Footer />
      </footer>
    </>
  );
}

export default App;
