import './App.css';
import Footer from './components/Footer';
import Top from './components/Top';
import Movies from './components/Movies';

function App() {
  return (
    <div>
      <Top/>
      <div>
        <Movies/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
