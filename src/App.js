import { Container} from '@material-ui/core';
import { BrowserRouter, Routes,Route  } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import SimpleBottomNavigation from './components/MainNav';
import Trending from "./Pages/Trending/Trending";
import Konser from "./Pages/Konser/Konser";
import Tiyatro from "./Pages/Tiyatro/Tiyatro";
import Search from "./Pages/Search/Search";
import Records from "./Pages/records.json";

function App() {
  return (
    
    <BrowserRouter>
      <Header/>
      
      <div className='app'>
        <Container>
          <Routes>
            <Route path="/" element={<Trending/>} exact/>
            <Route path="konser" element={<Konser/>}/>
            <Route path="tiyatro" element={<Tiyatro/>}/>
            <Route path="search" element={<Search/>}/>
         </Routes>
        </Container>
      </div>

    
    

    <SimpleBottomNavigation/>
   </BrowserRouter>
   
  );
}

export default App;
