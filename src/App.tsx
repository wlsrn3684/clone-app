import React from "react";
import Landing from "./component/landing";
import Footer from "./component/layout/footer";
import Header from "./component/layout/header";
import GlobalStyle from "./style/global";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Landing />
      <Footer />
      <GlobalStyle />
    </React.Fragment>
  );
}

export default App;
