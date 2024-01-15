import {Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home';
import { EliteFour } from './pages/EliteFour';
import { GymLeaders } from './pages/GymLeaders';

const App = () => {
  
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/eliteFour" element={<EliteFour/>} />
      <Route path="/gymleaders" element={<GymLeaders/>} />
    </Routes>
  );

}

export default App;