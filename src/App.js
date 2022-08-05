import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './components/Card.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='cardOrder'>
        <Card
          imagen='https://i.ibb.co/wLHcbzQ/pexels-fox-3829227.jpg'
          nombre='Setup 1'
          descripcion='Setup ideal para musicos y creadores de contenido' />
        <Card
          imagen='https://i.ibb.co/ZxpmShg/pexels-roberto-nickson-7238759.jpg'
          nombre='Setup 2'
          descripcion='Si lo tuyo son las plantas este setup combinara con ellas' />
        <Card
          imagen='https://i.ibb.co/MVr9fBM/pexels-mateusz-dach-450035.jpg'
          nombre='Setup 3'
          descripcion='Con diferentes tipos de pantallas controlaras todas tu redes' />
        <Card
          imagen='https://i.ibb.co/48grM6S/pexels-serpstat-572056.jpg'
          nombre='Setup 4'
          descripcion='Para los minimalistas de corazón' />
      </div>
      <Footer />
    </div>
  );
}

export default App;
