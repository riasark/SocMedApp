import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/LoginPage';

import "preline/preline";
import { IStaticMethods } from "preline/preline";
// window.HSStaticMethods = {
//   // Define the methods or properties of the interface
//   // For example:
//   someMethod: function() {
//     // Implementation of the method
//   },
//   someProperty: 'some value'
// };

function App() {
  // const location = useLocation();

  // useEffect(() => {
  //   window.HSStaticMethods.autoInit();
  // }, [location.pathname]);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
}


export default App;
