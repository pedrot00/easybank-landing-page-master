import Navbar from "./components/Navbar.js";
import MainBox from "./components/MainBox.js";
import MidBox from "./components/MidBox.js";
import Article from "./components/Article.js";
import Footer from "./components/Footer.js";

function App() {

  return (
    <div className="App">
      <Navbar/>
      <MainBox/>
      <MidBox/>
      <Article/>
      <Footer/>
    </div>
  );
}

export default App;
