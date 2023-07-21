import Navbar from "./components/NavBar/Navbar.jsx";
import Search from "./components/SearchDiv/Search.jsx";
import Jobs from "./components/JobDiv/Jobs.jsx";
import Value from "./components/ValueDiv/Value.jsx";
import Footer from "./components/FooterDiv/Footer.jsx";

function App() {
  return (
      <div className={'border-2 border-solid border-l-emerald-700 w-[85%] m-auto bg-white'}>
        <Navbar/>
        <Search/>
        <Jobs/>
        <Value/>
        <Footer/>
      </div>
  );
}
r
export default App;