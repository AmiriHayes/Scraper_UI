import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'
import Data from './components/Data'
import Footer from './components/Footer'
document.body.style = 'background: #DBE7D5;'

function App() {
  return (
    <>
      <Header />
      <Data />
      <Footer />
    </>
  );
}

export default App;
