import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/bootstrap/dist/js/bootstrap.bundle";
// slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./assets/css/style.css";
import NabBar from "./components/NabBar";
import Banner from "./components/Banner";
import Exclusive from "./components/Exclusive";
import Hcsa from "./components/Hcsa";
import Footer from "./components/Footer";
import NftProperties from "./components/NftProperties";
import Vanda from "./components/Vanda";
import Gallery from "./components/Gallery";
import Cards from "./components/Cards";

function App() {
  return (
    <>
      <NabBar />
      <Banner />
      <Cards />
      <NftProperties />
      <Exclusive />
      <Vanda />
      <Gallery />
      <Hcsa />
      <Footer />
    </>
  );
}

export default App;
