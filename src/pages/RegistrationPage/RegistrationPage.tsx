import React from "react";
// import "../LoginPage/LoginPage.scss";
import { Heading } from "../../components/Typography/Heading/Heading";
import { RegistrationInfo } from "../../components/RegistrationInfo/RegistrationInfo";
import { AppButton } from "../../components/UI/AppButton/AppButton";
import { AppInput } from "../../components/UI/AppInput/AppInput";
import { LinkButton } from "../../components/UI/LinkButton/LinkButton";
import { RegistrationStyle } from "./RegistrationPage.style";

export const RegistrationPage = () => {
  return (
    <RegistrationStyle>
      <div className="LoginPage">
        <Heading headingType="h1" headingText="Регистрация" />
        <form action="#">
          <AppInput
            hasError={false}
            errorText="Введите имя и фамилию"
            required
            placeholder="Имя и фамилия"
          />
          <AppInput
            hasError={false}
            errorText="Введите номер телефона"
            required
            placeholder="Номер телефона"
          />
          <AppInput
            hasError={false}
            errorText="Введите пароль"
            required
            placeholder="Пароль"
          />
          <LinkButton path="/main-page" buttonLabel="Создать аккаунт" />
        </form>
        <RegistrationInfo text="Уже есть аккаунт?" path="/" text2=" Войти" />
      </div>
    </RegistrationStyle>
  );
};
