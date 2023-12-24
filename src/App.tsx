import React from "react";
import { Header } from "./components/UI/Header/Header";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { MainPage } from "./pages/MainPage/MainPage";
import { RegistrationPage } from "./pages/RegistrationPage/RegistrationPage";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <div className="container">
        {/* <LoginPage /> */}
        {/* <MainPage /> */}
        <RegistrationPage />
      </div>
    </div>
  );
};

export default App;
