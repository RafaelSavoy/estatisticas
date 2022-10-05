import React, { useState, useEffect } from "react";
import GraphicManager from "./components/Graphic/GraphicManager";
import { GlobalStyles } from "./GlobalStyles";
import { StyledMain } from "./styles";
import { CSSTransition, Transition } from "react-transition-group";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <StyledMain>
        <GraphicManager />
      </StyledMain>
    </>
  );
}

export default App;
