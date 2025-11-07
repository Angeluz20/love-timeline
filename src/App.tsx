import React from 'react';
import hearts from "./assets/heart-burst.json"
import Lottie from "lottie-react";

import './App.css';
import Home from './screens/Home/HomePage';
import { ContainerMain } from './AppStyle';

function App() {
      const cleanedAnimation = {
      ...hearts,
      layers: hearts.layers.filter(layer => layer.nm !== "background"),
    };
  return (
    <ContainerMain>
    <Home />
    </ContainerMain>
        
  );
}

export default App;
