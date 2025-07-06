// MainPage.js
import React from "react";
import MainComponent from "./MainComponent";
import { Header } from "./Header";
import { TokenList } from "./TokenList";
import Footer from "./Footer";
import TokenDataDrawer from "./common/TokenDrawer";

const MainPage = () => {
  return (
    <div>
      <Header />
      <TokenList />
      <TokenDataDrawer />
      <MainComponent />
      <Footer />
    </div>
  );
};

export default MainPage;
