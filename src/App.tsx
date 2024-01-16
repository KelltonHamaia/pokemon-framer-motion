import { Routes, Route, useLocation } from 'react-router-dom'
import { Home } from './pages/Home';
import { EliteFour } from './pages/EliteFour';
import { GymLeaders } from './pages/GymLeaders';

import { AnimatePresence } from 'framer-motion';

const App = () => {

  const location = useLocation();

  return (
    <AnimatePresence mode='wait'>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home/>} />
        <Route path="/eliteFour" element={<EliteFour/>} />
        <Route path="/gymleaders" element={<GymLeaders/>} />
      </Routes>
    </AnimatePresence>
  );

}

export default App;