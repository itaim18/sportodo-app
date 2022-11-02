import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import About from "./components/About";
import Contact from "./components/Contact";
import SportsList from "./components/SportsList";
import Submenu from "./components/Submenu";
import Modal from "./components/Modal";
function App() {
  return (
    <>
      <Navbar />
      <Submenu />
      <Modal />
      <SearchBar />
      <SportsList />
      <About />
      <Contact />
    </>
  );
}

export default App;
