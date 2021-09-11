import React from "react";
import GlobalStyle from "./styles/GlobalStyle";
import Header from "./components/layout/Header";
import Contents from "./components/layout/Contents";
import Visual from "./components/common/Visual";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Contents>
        <Visual />
      </Contents>
    </>
  );
};

export default App;
