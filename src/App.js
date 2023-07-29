import React from "react";
import "./App.css";
import Home from "./slideNavigation/Home";
import { SlideProvider } from "./slideNavigation/SlideContext";

function App() {
  return (
    <>  
       <SlideProvider>
      <Home/>
    </SlideProvider>
    </>
  );
}
export default App;
