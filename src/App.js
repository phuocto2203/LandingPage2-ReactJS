import React from "react";
import GlobalStyle from "./globalStyle";
import {
  NavBar,
  Introduction,
  InfoSection,
  SignUpSection,
  Footer,
} from "./components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <GlobalStyle />
        <NavBar />
        <Routes></Routes>
        <Introduction />
        <InfoSection />
        <SignUpSection />
        <Footer />
      </Router>
    </>
  );
}

export default App;
