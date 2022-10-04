import React, { useState, useEffect } from "react";
import GraphicManager from "./components/Graphic/GraphicManager";
import { GlobalStyles } from "./GlobalStyles";
import { StyledMain } from "./styles";
import { CSSTransition, Transition } from "react-transition-group";

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledMain>
        <GraphicManager />
      </StyledMain>
    </>
  );
}

export default App;
