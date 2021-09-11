import React from "react";
import GlobalStyle from "./styles/GlobalStyle";
import Header from "./components/layout/Header";
import Contents from "./components/layout/Contents";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Contents>Contents 영역</Contents>
    </>
  );
};

export default App;
