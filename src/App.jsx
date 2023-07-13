import "./App.css";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <>
      <Header />
      <Cards />
      <Testimonials />
      <Gallery />
      <Footer />
    </>
  );
}

export default App;
