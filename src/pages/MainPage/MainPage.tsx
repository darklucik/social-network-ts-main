import React from "react";
import "./MainPage.scss";
import { Header } from "../../components/UI/Header/Header";
import { LeftSide } from "./leftside";
import { RightSide } from "./rightSide";
import { MainContent } from "./mainContent";

export const MainPage = () => {
  return (
    <>
      <Header />
      <div className="MainPage">
        <LeftSide />
        <MainContent />
        <RightSide /> 
      </div>
    </>
  );
};
