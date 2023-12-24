import { Heading } from "../../Typografy/Heading/Heading";
import { AppButton } from "../../components/UI/AppElements/AppButton";
import { AppInput } from "../../components/UI/AppElements/AppInput";
import { RegistrationInfo } from "../../components/registrationInfo/registrationInfo";
import "./RegistrationPage.scss";

export const RegistrationPage = () => {
  return (
    <div className="MainWrapper">
      <div className="Wrapper">
        <Heading headingText="Регистрация" headingType="h1" />
        <AppInput InputType="text" InputPlaceholder="Имя Фамилия" />
        <AppInput InputType="tel" InputPlaceholder="Ваш номер" />
        <AppInput InputType="text" InputPlaceholder="Пороль" />
        <AppInput InputType="text" InputPlaceholder="Город" />
        <AppInput InputType="text" InputPlaceholder="Электронная почта" />
        <AppButton ButtonText="Зарегестрироватся" />
        <RegistrationInfo spanText="Уже есть аккаунт?" hrefText="Войти" pText="Регистрация с помощью"/>
      </div>
    </div>
  );
};
