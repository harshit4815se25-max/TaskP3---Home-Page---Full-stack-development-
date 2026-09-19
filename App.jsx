import "./App.css";

import Navbar from "./Navbar";
import Hero from "./Hero";
import Articles from "./Articles";
import Tutorials from "./Tutorials";
import Subscribe from "./Subscribe";
import Footer from "./Footer";

function App() {
  return (
    <div className="app">

      <Navbar />

      <Hero />

      <Articles />

      <Tutorials />

      <Subscribe />

      <Footer />

    </div>
  );
}

export default App;