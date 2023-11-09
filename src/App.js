import './App.css';
import Main from './components/Main';
import Footer from './components/Footer';
import Nav from './components/Nav';
import { BrowserRouter} from "react-router-dom";

function App() {
  return (
    <>
        <BrowserRouter>
          <Nav/>
          <Main/>
          <Footer/>
        </BrowserRouter>
    </>

  );
}

export default App;
