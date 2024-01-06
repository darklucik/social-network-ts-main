import React from "react";
// import "./LoginPage.scss";
import { Heading } from "../../components/Typography/Heading/Heading";
import { RegistrationInfo } from "../../components/RegistrationInfo/RegistrationInfo";
import { AppButton } from "../../components/UI/AppButton/AppButton";
import { AppInput } from "../../components/UI/AppInput/AppInput";
import { LinkButton } from "../../components/UI/LinkButton/LinkButton";
import { LoginStyle } from "./LoginPage.style";

export const LoginPage = () => {
  return (
    <LoginStyle>
      <Heading headingType="h1" headingText="Авторизация" />
      <form action="#">
        <AppInput
          type="text"
          hasError={false}
          errorText="Ошибка"
          required
          placeholder="Номер телефона"
        />
        <AppInput
          type="password"
          hasError={false}
          errorText="Ошибка"
          required
          placeholder="Пароль"
        />
        <LinkButton path="/main-page" buttonLabel="Войти" />
      </form>
      <a href="#">Забыли пароль?</a>
      <RegistrationInfo text="У вас нет аккаунта?" path="/registration-page" text2=" Зарегистрироваться"/>
    </LoginStyle>
  );
};
