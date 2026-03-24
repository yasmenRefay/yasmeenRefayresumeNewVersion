import { BrowserRouter } from 'react-router-dom';
import './App.css'
import HeroSection from './pages/HeroSection';

function App() {

 return (
    <BrowserRouter>
      <div className="bg-[#121f26] ">
        <HeroSection />
      </div>

    </BrowserRouter>  );
}

export default App
