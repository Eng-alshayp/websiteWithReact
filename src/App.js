import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <Main />
      <Services />
      <Projects />
      <Contacts />
      <Footer />
    </div>
  );
};

export default App;
