
import './App.css'


import { BrowserRouter as Router } from 'react-router-dom';
import Home from './Pages/Home';

function App() {
  return (
    <Router>
      <Home />
      {/* other components */}
    </Router>
  );
}


export default App
