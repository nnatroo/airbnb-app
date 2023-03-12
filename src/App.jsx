import './Components/Modules/App.module.css';
import Navbar from './Components/Navigation/Navbar/Navbar'
import apartaments from './apartaments';
import Apartaments from './Components/Apartament/Apartaments';

function App() {
  return (<>
        <Navbar />
        <Apartaments items={apartaments}/>
  </>
  );
}

export default App;
