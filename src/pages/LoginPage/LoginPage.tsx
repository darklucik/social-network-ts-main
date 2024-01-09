import React from "react";
// import "./LoginPage.scss";
import { Heading } from "../../components/Typography/Heading/Heading";
import { LoginStyle } from "./LoginPage.style";
import { AppInput } from "../../components/UI/AppInput/AppInput";
import { LinkButton } from "../../components/linkElement/linkText";
import { Controller, Form, useForm } from "react-hook-form";
import { RegistrationInfo } from "../../components/RegistrationInfo";
import { useNavigate } from "react-router-dom";
import * as yup from 'yup'
import { error } from "console";
import { yupResolver } from "@hookform/resolvers/yup";
import { AppButton } from "../../components/UI/AppElements/AppButton";


export const LoginPage = () => {
  const loginPageFields = {
    userEmail: "",
    userPassword: "",
  };

  const loginValidationSchema = yup.object({
    userEmail: yup
    .string()
    .required("Required field")
    .email("Формат должен соответсвовать формату email"),
    userPassword: yup
    .string()
    .required('Required field')
    .min(4, "Пороль должен содержать как минимум 4 символа!")
  })

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: loginPageFields,
    resolver: yupResolver(loginValidationSchema)
  });

  const navigate = useNavigate()


  const onLoginFormSubmit = (data: any) => {
    if (data) {
      navigate ('/main-page')
    }
  };

  return (
    <LoginStyle>
      <Heading headingType="h1" headingText="Авторизация" />
      <form onSubmit={handleSubmit(onLoginFormSubmit)}>
        <Controller
          name="userEmail"
          control={control}
          render={({ field }) => (
            <AppInput
              type="text"
              hasError={!!errors.userEmail}
              errorText={errors.userEmail?.message as string}
              placeholder="Email"
              {...field}
            />
          )}
        />
        <Controller
          name="userPassword"
          control={control}
          render={({ field }) => (
            <AppInput
              type="password"
              hasError={false}
              errorText={errors.userPassword?.message as string}
              placeholder="Пароль"
            />
          )}
        />

          <AppButton type="submit" buttonLabel="Войти" />
      </form>
      <a href="#">Забыли пароль?</a>
      <RegistrationInfo
        text="У вас нет аккаунта?"
        path="/registration-page"
        text2=" Зарегистрироваться"
      />
    </LoginStyle>
  );
};
