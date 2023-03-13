import './Components/Modules/App.module.css';
import Navbar from './Components/Navigation/Navbar/Navbar'
import apartaments from './apartaments';
import Apartaments from './Components/Apartament/Apartaments';
import Footer from './Components/Footer/Footer';


import './Components/Modules/App.module.css'

function App() {
  return (<>
        <Navbar />
        <Apartaments items={apartaments}/>
        <Footer/>
        
  </>
  );
}

export default App;
