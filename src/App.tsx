import React, {FC} from 'react';
import './App.css';
import AboutComponent from "./components/about-component/AboutComponent";
import RandomizeNumbers from './components/randomize-numbers/RandomizeNumbers';


const App: FC = () => {
  return (
      <div>
        <AboutComponent />
        <RandomizeNumbers />
      </div>
  );
}

export default App;