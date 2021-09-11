import React from "react";
import GlobalStyle from "./styles/GlobalStyle";
import Header from "./components/layout/Header";
import Contents from "./components/layout/Contents";
import Visual from "./components/common/Visual";
import MainTab from "./components/common/MainTab";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Contents>
        <Visual />

        <MainTab />
      </Contents>
    </>
  );
};

export default App;
