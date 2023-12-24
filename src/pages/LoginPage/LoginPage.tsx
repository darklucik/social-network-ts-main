import React from "react";
import "./LoginPage.scss";
import { Heading } from "../../Typografy/Heading/Heading";
import { RegistrationInfo } from "../../components/registrationInfo/registrationInfo";

export const LoginPage = () => {
  return (
    <div className="LoginPage">
      <Heading headingText="Авторизация" headingType="h1" />
      <form action="#">
        <input type="tel" placeholder="Номер телефона" />
        <input type="password" placeholder="Пароль" />
        <button>Войти</button>
      </form>
      <a href="#">Забыли пароль?</a>
      <RegistrationInfo spanText="Нету аккаунта?" hrefText="Зарегестрироватся" pText="Войти с помощью"/>
    </div>
  );
};
