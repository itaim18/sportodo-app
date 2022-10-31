import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import About from "./components/About";
import Contact from "./components/Contact";
import SportsList from "./components/SportsList";

function App() {
  return (
    <>
      <Navbar />
      <SearchBar />
      <SportsList />
      <About />
      <Contact />
    </>
  );
}

export default App;
